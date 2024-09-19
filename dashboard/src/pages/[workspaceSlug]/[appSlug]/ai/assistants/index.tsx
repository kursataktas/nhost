import { useDialog } from '@/components/common/DialogProvider';
import { UpgradeToProBanner } from '@/components/common/UpgradeToProBanner';
import AILayout from '@/components/layout/AILayout/AILayout';
import { Alert } from '@/components/ui/v2/Alert';
import { Box } from '@/components/ui/v2/Box';
import { Button } from '@/components/ui/v2/Button';
import { PlusIcon } from '@/components/ui/v2/icons/PlusIcon';
import { Link } from '@/components/ui/v2/Link';
import { Text } from '@/components/ui/v2/Text';
import { AssistantForm } from '@/features/ai/AssistantForm';
import { AssistantsList } from '@/features/ai/AssistantsList';
import { useIsFileStoreSupported } from '@/features/ai/common/hooks/useIsFileStoreSupported';
import { useAdminApolloClient } from '@/features/projects/common/hooks/useAdminApolloClient';
import { useCurrentWorkspaceAndProject } from '@/features/projects/common/hooks/useCurrentWorkspaceAndProject';
import { useIsGraphiteEnabled } from '@/features/projects/common/hooks/useIsGraphiteEnabled';
import { useIsPlatform } from '@/features/projects/common/hooks/useIsPlatform';
import {
  useGetAssistantsQuery,
  useGetGraphiteFileStoresQuery,
} from '@/utils/__generated__/graphite.graphql';
import { useMemo, type ReactElement } from 'react';

export default function AssistantsPage() {
  const { openDrawer } = useDialog();
  const isPlatform = useIsPlatform();
  const { currentWorkspace, currentProject } = useCurrentWorkspaceAndProject();
  const { adminClient } = useAdminApolloClient();
  const { isGraphiteEnabled } = useIsGraphiteEnabled();

  const { isFileStoreSupported, loading: fileStoreLoading } = useIsFileStoreSupported();

  const {
    data: assistantsData,
    loading: assistantsLoading,
    refetch: assistantsRefetch,
  } = useGetAssistantsQuery({
    client: adminClient,
    variables: {
      isFileStoresSupported: isFileStoreSupported ?? false,
    },
    skip: isFileStoreSupported === null || fileStoreLoading,
  });
  const { data: fileStoresData } = useGetGraphiteFileStoresQuery({
    client: adminClient,
  });

  const assistants = useMemo(
    () => assistantsData?.graphite?.assistants || [],
    [assistantsData],
  );
  const fileStores = useMemo(
    () => fileStoresData?.graphite?.fileStores || [],
    [fileStoresData],
  );

  const openCreateAssistantForm = () => {
    openDrawer({
      title: 'Create a new Assistant',
      component: (
        <AssistantForm 
          onSubmit={assistantsRefetch} 
          fileStores={isFileStoreSupported ? fileStores : undefined}
        />
      ),
    });
  };

  if (isPlatform && currentProject?.plan?.isFree) {
    return (
      <Box className="p-4" sx={{ backgroundColor: 'background.default' }}>
        <UpgradeToProBanner
          title="Upgrade to Nhost Pro."
          description={
            <Text>
              Graphite is an addon to the Pro plan. To unlock it, please upgrade
              to Pro first.
            </Text>
          }
        />
      </Box>
    );
  }

  if (
    (isPlatform &&
      !currentProject?.plan?.isFree &&
      !currentProject.config?.ai) ||
    !isGraphiteEnabled
  ) {
    return (
      <Box className="p-4" sx={{ backgroundColor: 'background.default' }}>
        <Alert className="grid w-full grid-flow-col place-content-between items-center gap-2">
          <Text className="grid grid-flow-row justify-items-start gap-0.5">
            <Text component="span">
              To enable graphite, configure the service first in{' '}
              <Link
                href={`/${currentWorkspace.slug}/${currentProject.slug}/settings/ai`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                AI Settings
              </Link>
              .
            </Text>
          </Text>
        </Alert>
      </Box>
    );
  }

  if (assistantsLoading) {
    return <Box className="p-4">Loading...</Box>;
  }

  if (assistants.length === 0) {
    return (
      <Box className="p-6" sx={{ backgroundColor: 'background.default' }}>
        <Box className="flex flex-col items-center justify-center space-y-5 rounded-lg border px-48 py-12 shadow-sm">
          <span className="text-6xl">🤖</span>
          <div className="flex flex-col space-y-1">
            <Text className="text-center font-medium" variant="h3">
              No Assistants are configured
            </Text>
            <Text variant="subtitle1" className="text-center">
              All your assistants will be listed here.
            </Text>
          </div>
          <div className="flex flex-row place-content-between rounded-lg ">
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              onClick={openCreateAssistantForm}
              startIcon={<PlusIcon className="h-4 w-4" />}
            >
              Create a new assistant
            </Button>
          </div>
        </Box>
      </Box>
    );
  }

  return (
    <Box className="flex flex-col overflow-hidden">
      <Box className="flex flex-row place-content-end border-b-1 p-4">
        <Button
          variant="contained"
          color="primary"
          onClick={openCreateAssistantForm}
          startIcon={<PlusIcon className="h-4 w-4" />}
        >
          New
        </Button>
      </Box>
      <AssistantsList
        assistants={assistants}
        fileStores={isFileStoreSupported ? fileStores : undefined}
        onDelete={() => assistantsRefetch()}
        onCreateOrUpdate={() => assistantsRefetch()}
      />
    </Box>
  );
}

AssistantsPage.getLayout = function getLayout(page: ReactElement) {
  return <AILayout>{page}</AILayout>;
};