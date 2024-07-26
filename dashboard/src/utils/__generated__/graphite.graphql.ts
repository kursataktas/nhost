import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConfigEmail: any;
  ConfigHasuraAPIs: any;
  ConfigInt32: any;
  ConfigLocale: any;
  ConfigPort: any;
  ConfigRunServiceName: any;
  ConfigUint: any;
  ConfigUint8: any;
  ConfigUint32: any;
  ConfigUrl: any;
  ConfigUserRole: any;
  Timestamp: any;
  bigint: any;
  bpchar: any;
  bytea: any;
  citext: any;
  float64: any;
  jsonb: any;
  map: any;
  smallint: any;
  timestamp: any;
  timestamptz: any;
  timestampz: any;
  uuid: any;
};

export type BackupPresignedUrl = {
  __typename?: 'BackupPresignedURL';
  expires_at: Scalars['Timestamp'];
  url: Scalars['String'];
};

export type BackupResult = {
  __typename?: 'BackupResult';
  backupID: Scalars['uuid'];
  size: Scalars['bigint'];
};

export type BackupResultsItem = {
  __typename?: 'BackupResultsItem';
  appID: Scalars['uuid'];
  backupID: Scalars['uuid'];
  error: Scalars['String'];
  size: Scalars['bigint'];
  success: Scalars['Boolean'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ConfigAi = {
  __typename?: 'ConfigAI';
  autoEmbeddings?: Maybe<ConfigAiAutoEmbeddings>;
  openai: ConfigAiOpenai;
  resources: ConfigAiResources;
  version?: Maybe<Scalars['String']>;
  webhookSecret: Scalars['String'];
};

export type ConfigAiAutoEmbeddings = {
  __typename?: 'ConfigAIAutoEmbeddings';
  synchPeriodMinutes?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAiAutoEmbeddingsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAiAutoEmbeddingsComparisonExp>>;
  _not?: InputMaybe<ConfigAiAutoEmbeddingsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAiAutoEmbeddingsComparisonExp>>;
  synchPeriodMinutes?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAiAutoEmbeddingsInsertInput = {
  synchPeriodMinutes?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAiAutoEmbeddingsUpdateInput = {
  synchPeriodMinutes?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAiComparisonExp = {
  _and?: InputMaybe<Array<ConfigAiComparisonExp>>;
  _not?: InputMaybe<ConfigAiComparisonExp>;
  _or?: InputMaybe<Array<ConfigAiComparisonExp>>;
  autoEmbeddings?: InputMaybe<ConfigAiAutoEmbeddingsComparisonExp>;
  openai?: InputMaybe<ConfigAiOpenaiComparisonExp>;
  resources?: InputMaybe<ConfigAiResourcesComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
  webhookSecret?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAiInsertInput = {
  autoEmbeddings?: InputMaybe<ConfigAiAutoEmbeddingsInsertInput>;
  openai: ConfigAiOpenaiInsertInput;
  resources: ConfigAiResourcesInsertInput;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret: Scalars['String'];
};

export type ConfigAiOpenai = {
  __typename?: 'ConfigAIOpenai';
  apiKey: Scalars['String'];
  organization?: Maybe<Scalars['String']>;
};

export type ConfigAiOpenaiComparisonExp = {
  _and?: InputMaybe<Array<ConfigAiOpenaiComparisonExp>>;
  _not?: InputMaybe<ConfigAiOpenaiComparisonExp>;
  _or?: InputMaybe<Array<ConfigAiOpenaiComparisonExp>>;
  apiKey?: InputMaybe<ConfigStringComparisonExp>;
  organization?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAiOpenaiInsertInput = {
  apiKey: Scalars['String'];
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAiOpenaiUpdateInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAiResources = {
  __typename?: 'ConfigAIResources';
  compute: ConfigComputeResources;
};

export type ConfigAiResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigAiResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigAiResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigAiResourcesComparisonExp>>;
  compute?: InputMaybe<ConfigComputeResourcesComparisonExp>;
};

export type ConfigAiResourcesInsertInput = {
  compute: ConfigComputeResourcesInsertInput;
};

export type ConfigAiResourcesUpdateInput = {
  compute?: InputMaybe<ConfigComputeResourcesUpdateInput>;
};

export type ConfigAiUpdateInput = {
  autoEmbeddings?: InputMaybe<ConfigAiAutoEmbeddingsUpdateInput>;
  openai?: InputMaybe<ConfigAiOpenaiUpdateInput>;
  resources?: InputMaybe<ConfigAiResourcesUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret?: InputMaybe<Scalars['String']>;
};

export type ConfigAppConfig = {
  __typename?: 'ConfigAppConfig';
  appID: Scalars['uuid'];
  config: ConfigConfig;
};

export type ConfigAppSecrets = {
  __typename?: 'ConfigAppSecrets';
  appID: Scalars['uuid'];
  secrets: Array<ConfigEnvironmentVariable>;
};

export type ConfigAppSystemConfig = {
  __typename?: 'ConfigAppSystemConfig';
  appID: Scalars['uuid'];
  systemConfig: ConfigSystemConfig;
};

/**
 * Configuration for auth service
 * You can find more information about the configuration here:
 * https://github.com/nhost/hasura-auth/blob/main/docs/environment-variables.md
 */
export type ConfigAuth = {
  __typename?: 'ConfigAuth';
  elevatedPrivileges?: Maybe<ConfigAuthElevatedPrivileges>;
  method?: Maybe<ConfigAuthMethod>;
  redirections?: Maybe<ConfigAuthRedirections>;
  /** Resources for the service */
  resources?: Maybe<ConfigResources>;
  session?: Maybe<ConfigAuthSession>;
  signUp?: Maybe<ConfigAuthSignUp>;
  totp?: Maybe<ConfigAuthTotp>;
  user?: Maybe<ConfigAuthUser>;
  /**
   * Version of auth, you can see available versions in the URL below:
   * https://hub.docker.com/r/nhost/hasura-auth/tags
   *
   * Releases:
   *
   * https://github.com/nhost/hasura-auth/releases
   */
  version?: Maybe<Scalars['String']>;
};

export type ConfigAuthComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthComparisonExp>>;
  _not?: InputMaybe<ConfigAuthComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthComparisonExp>>;
  elevatedPrivileges?: InputMaybe<ConfigAuthElevatedPrivilegesComparisonExp>;
  method?: InputMaybe<ConfigAuthMethodComparisonExp>;
  redirections?: InputMaybe<ConfigAuthRedirectionsComparisonExp>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  session?: InputMaybe<ConfigAuthSessionComparisonExp>;
  signUp?: InputMaybe<ConfigAuthSignUpComparisonExp>;
  totp?: InputMaybe<ConfigAuthTotpComparisonExp>;
  user?: InputMaybe<ConfigAuthUserComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthElevatedPrivileges = {
  __typename?: 'ConfigAuthElevatedPrivileges';
  mode?: Maybe<Scalars['String']>;
};

export type ConfigAuthElevatedPrivilegesComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthElevatedPrivilegesComparisonExp>>;
  _not?: InputMaybe<ConfigAuthElevatedPrivilegesComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthElevatedPrivilegesComparisonExp>>;
  mode?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthElevatedPrivilegesInsertInput = {
  mode?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthElevatedPrivilegesUpdateInput = {
  mode?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthInsertInput = {
  elevatedPrivileges?: InputMaybe<ConfigAuthElevatedPrivilegesInsertInput>;
  method?: InputMaybe<ConfigAuthMethodInsertInput>;
  redirections?: InputMaybe<ConfigAuthRedirectionsInsertInput>;
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  session?: InputMaybe<ConfigAuthSessionInsertInput>;
  signUp?: InputMaybe<ConfigAuthSignUpInsertInput>;
  totp?: InputMaybe<ConfigAuthTotpInsertInput>;
  user?: InputMaybe<ConfigAuthUserInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethod = {
  __typename?: 'ConfigAuthMethod';
  anonymous?: Maybe<ConfigAuthMethodAnonymous>;
  emailPassword?: Maybe<ConfigAuthMethodEmailPassword>;
  emailPasswordless?: Maybe<ConfigAuthMethodEmailPasswordless>;
  oauth?: Maybe<ConfigAuthMethodOauth>;
  smsPasswordless?: Maybe<ConfigAuthMethodSmsPasswordless>;
  webauthn?: Maybe<ConfigAuthMethodWebauthn>;
};

export type ConfigAuthMethodAnonymous = {
  __typename?: 'ConfigAuthMethodAnonymous';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodAnonymousComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodAnonymousComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodAnonymousComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodAnonymousComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodAnonymousInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodAnonymousUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodComparisonExp>>;
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousComparisonExp>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordComparisonExp>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessComparisonExp>;
  oauth?: InputMaybe<ConfigAuthMethodOauthComparisonExp>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessComparisonExp>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnComparisonExp>;
};

export type ConfigAuthMethodEmailPassword = {
  __typename?: 'ConfigAuthMethodEmailPassword';
  emailVerificationRequired?: Maybe<Scalars['Boolean']>;
  /**
   * Disabling email+password sign in is not implmented yet
   * enabled: bool | *true
   */
  hibpEnabled?: Maybe<Scalars['Boolean']>;
  passwordMinLength?: Maybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodEmailPasswordComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodEmailPasswordComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodEmailPasswordComparisonExp>>;
  emailVerificationRequired?: InputMaybe<ConfigBooleanComparisonExp>;
  hibpEnabled?: InputMaybe<ConfigBooleanComparisonExp>;
  passwordMinLength?: InputMaybe<ConfigUint8ComparisonExp>;
};

export type ConfigAuthMethodEmailPasswordInsertInput = {
  emailVerificationRequired?: InputMaybe<Scalars['Boolean']>;
  hibpEnabled?: InputMaybe<Scalars['Boolean']>;
  passwordMinLength?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordUpdateInput = {
  emailVerificationRequired?: InputMaybe<Scalars['Boolean']>;
  hibpEnabled?: InputMaybe<Scalars['Boolean']>;
  passwordMinLength?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordless = {
  __typename?: 'ConfigAuthMethodEmailPasswordless';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodEmailPasswordlessComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodEmailPasswordlessComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodEmailPasswordlessComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodEmailPasswordlessComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodEmailPasswordlessInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodEmailPasswordlessUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodInsertInput = {
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousInsertInput>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordInsertInput>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessInsertInput>;
  oauth?: InputMaybe<ConfigAuthMethodOauthInsertInput>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessInsertInput>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnInsertInput>;
};

export type ConfigAuthMethodOauth = {
  __typename?: 'ConfigAuthMethodOauth';
  apple?: Maybe<ConfigAuthMethodOauthApple>;
  azuread?: Maybe<ConfigAuthMethodOauthAzuread>;
  bitbucket?: Maybe<ConfigStandardOauthProvider>;
  discord?: Maybe<ConfigStandardOauthProviderWithScope>;
  facebook?: Maybe<ConfigStandardOauthProviderWithScope>;
  github?: Maybe<ConfigStandardOauthProviderWithScope>;
  gitlab?: Maybe<ConfigStandardOauthProviderWithScope>;
  google?: Maybe<ConfigStandardOauthProviderWithScope>;
  linkedin?: Maybe<ConfigStandardOauthProviderWithScope>;
  spotify?: Maybe<ConfigStandardOauthProviderWithScope>;
  strava?: Maybe<ConfigStandardOauthProviderWithScope>;
  twitch?: Maybe<ConfigStandardOauthProviderWithScope>;
  twitter?: Maybe<ConfigAuthMethodOauthTwitter>;
  windowslive?: Maybe<ConfigStandardOauthProviderWithScope>;
  workos?: Maybe<ConfigAuthMethodOauthWorkos>;
};

export type ConfigAuthMethodOauthApple = {
  __typename?: 'ConfigAuthMethodOauthApple';
  clientId?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  keyId?: Maybe<Scalars['String']>;
  privateKey?: Maybe<Scalars['String']>;
  scope?: Maybe<Array<Scalars['String']>>;
  teamId?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAppleComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthAppleComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthAppleComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthAppleComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  keyId?: InputMaybe<ConfigStringComparisonExp>;
  privateKey?: InputMaybe<ConfigStringComparisonExp>;
  scope?: InputMaybe<ConfigStringComparisonExp>;
  teamId?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthAppleInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  keyId?: InputMaybe<Scalars['String']>;
  privateKey?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAppleUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  keyId?: InputMaybe<Scalars['String']>;
  privateKey?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzuread = {
  __typename?: 'ConfigAuthMethodOauthAzuread';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  tenant?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzureadComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthAzureadComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthAzureadComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthAzureadComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  tenant?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthAzureadInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzureadUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthComparisonExp>>;
  apple?: InputMaybe<ConfigAuthMethodOauthAppleComparisonExp>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadComparisonExp>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderComparisonExp>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterComparisonExp>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosComparisonExp>;
};

export type ConfigAuthMethodOauthInsertInput = {
  apple?: InputMaybe<ConfigAuthMethodOauthAppleInsertInput>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadInsertInput>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderInsertInput>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterInsertInput>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosInsertInput>;
};

export type ConfigAuthMethodOauthTwitter = {
  __typename?: 'ConfigAuthMethodOauthTwitter';
  consumerKey?: Maybe<Scalars['String']>;
  consumerSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthTwitterComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthTwitterComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthTwitterComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthTwitterComparisonExp>>;
  consumerKey?: InputMaybe<ConfigStringComparisonExp>;
  consumerSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodOauthTwitterInsertInput = {
  consumerKey?: InputMaybe<Scalars['String']>;
  consumerSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthTwitterUpdateInput = {
  consumerKey?: InputMaybe<Scalars['String']>;
  consumerSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthUpdateInput = {
  apple?: InputMaybe<ConfigAuthMethodOauthAppleUpdateInput>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadUpdateInput>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderUpdateInput>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterUpdateInput>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosUpdateInput>;
};

export type ConfigAuthMethodOauthWorkos = {
  __typename?: 'ConfigAuthMethodOauthWorkos';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthWorkosComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthWorkosComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthWorkosComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthWorkosComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  connection?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  organization?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthWorkosInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthWorkosUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodSmsPasswordless = {
  __typename?: 'ConfigAuthMethodSmsPasswordless';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodSmsPasswordlessComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodSmsPasswordlessComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodSmsPasswordlessComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodSmsPasswordlessComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodSmsPasswordlessInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodSmsPasswordlessUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodUpdateInput = {
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousUpdateInput>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordUpdateInput>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessUpdateInput>;
  oauth?: InputMaybe<ConfigAuthMethodOauthUpdateInput>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessUpdateInput>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnUpdateInput>;
};

export type ConfigAuthMethodWebauthn = {
  __typename?: 'ConfigAuthMethodWebauthn';
  attestation?: Maybe<ConfigAuthMethodWebauthnAttestation>;
  enabled?: Maybe<Scalars['Boolean']>;
  relyingParty?: Maybe<ConfigAuthMethodWebauthnRelyingParty>;
};

export type ConfigAuthMethodWebauthnAttestation = {
  __typename?: 'ConfigAuthMethodWebauthnAttestation';
  timeout?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnAttestationComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnAttestationComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnAttestationComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnAttestationComparisonExp>>;
  timeout?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthMethodWebauthnAttestationInsertInput = {
  timeout?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnAttestationUpdateInput = {
  timeout?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnComparisonExp>>;
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>;
};

export type ConfigAuthMethodWebauthnInsertInput = {
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationInsertInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyInsertInput>;
};

export type ConfigAuthMethodWebauthnRelyingParty = {
  __typename?: 'ConfigAuthMethodWebauthnRelyingParty';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  origins?: Maybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnRelyingPartyComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>>;
  id?: InputMaybe<ConfigStringComparisonExp>;
  name?: InputMaybe<ConfigStringComparisonExp>;
  origins?: InputMaybe<ConfigUrlComparisonExp>;
};

export type ConfigAuthMethodWebauthnRelyingPartyInsertInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  origins?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnRelyingPartyUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  origins?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnUpdateInput = {
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationUpdateInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyUpdateInput>;
};

export type ConfigAuthRedirections = {
  __typename?: 'ConfigAuthRedirections';
  /** AUTH_ACCESS_CONTROL_ALLOWED_REDIRECT_URLS */
  allowedUrls?: Maybe<Array<Scalars['String']>>;
  /** AUTH_CLIENT_URL */
  clientUrl?: Maybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthRedirectionsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthRedirectionsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthRedirectionsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthRedirectionsComparisonExp>>;
  allowedUrls?: InputMaybe<ConfigStringComparisonExp>;
  clientUrl?: InputMaybe<ConfigUrlComparisonExp>;
};

export type ConfigAuthRedirectionsInsertInput = {
  allowedUrls?: InputMaybe<Array<Scalars['String']>>;
  clientUrl?: InputMaybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthRedirectionsUpdateInput = {
  allowedUrls?: InputMaybe<Array<Scalars['String']>>;
  clientUrl?: InputMaybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthSession = {
  __typename?: 'ConfigAuthSession';
  accessToken?: Maybe<ConfigAuthSessionAccessToken>;
  refreshToken?: Maybe<ConfigAuthSessionRefreshToken>;
};

export type ConfigAuthSessionAccessToken = {
  __typename?: 'ConfigAuthSessionAccessToken';
  /** AUTH_JWT_CUSTOM_CLAIMS */
  customClaims?: Maybe<Array<ConfigAuthsessionaccessTokenCustomClaims>>;
  /** AUTH_ACCESS_TOKEN_EXPIRES_IN */
  expiresIn?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionAccessTokenComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionAccessTokenComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionAccessTokenComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionAccessTokenComparisonExp>>;
  customClaims?: InputMaybe<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>;
  expiresIn?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthSessionAccessTokenInsertInput = {
  customClaims?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsInsertInput>>;
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionAccessTokenUpdateInput = {
  customClaims?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsUpdateInput>>;
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionComparisonExp>>;
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenComparisonExp>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenComparisonExp>;
};

export type ConfigAuthSessionInsertInput = {
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenInsertInput>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenInsertInput>;
};

export type ConfigAuthSessionRefreshToken = {
  __typename?: 'ConfigAuthSessionRefreshToken';
  /** AUTH_REFRESH_TOKEN_EXPIRES_IN */
  expiresIn?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionRefreshTokenComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionRefreshTokenComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionRefreshTokenComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionRefreshTokenComparisonExp>>;
  expiresIn?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthSessionRefreshTokenInsertInput = {
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionRefreshTokenUpdateInput = {
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionUpdateInput = {
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenUpdateInput>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenUpdateInput>;
};

export type ConfigAuthSignUp = {
  __typename?: 'ConfigAuthSignUp';
  /** AUTH_DISABLE_NEW_USERS */
  disableNewUsers?: Maybe<Scalars['Boolean']>;
  /** Inverse of AUTH_DISABLE_SIGNUP */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthSignUpComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSignUpComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSignUpComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSignUpComparisonExp>>;
  disableNewUsers?: InputMaybe<ConfigBooleanComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthSignUpInsertInput = {
  disableNewUsers?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthSignUpUpdateInput = {
  disableNewUsers?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthTotp = {
  __typename?: 'ConfigAuthTotp';
  enabled?: Maybe<Scalars['Boolean']>;
  issuer?: Maybe<Scalars['String']>;
};

export type ConfigAuthTotpComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthTotpComparisonExp>>;
  _not?: InputMaybe<ConfigAuthTotpComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthTotpComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  issuer?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthTotpInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  issuer?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthTotpUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  issuer?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUpdateInput = {
  elevatedPrivileges?: InputMaybe<ConfigAuthElevatedPrivilegesUpdateInput>;
  method?: InputMaybe<ConfigAuthMethodUpdateInput>;
  redirections?: InputMaybe<ConfigAuthRedirectionsUpdateInput>;
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  session?: InputMaybe<ConfigAuthSessionUpdateInput>;
  signUp?: InputMaybe<ConfigAuthSignUpUpdateInput>;
  totp?: InputMaybe<ConfigAuthTotpUpdateInput>;
  user?: InputMaybe<ConfigAuthUserUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUser = {
  __typename?: 'ConfigAuthUser';
  email?: Maybe<ConfigAuthUserEmail>;
  emailDomains?: Maybe<ConfigAuthUserEmailDomains>;
  gravatar?: Maybe<ConfigAuthUserGravatar>;
  locale?: Maybe<ConfigAuthUserLocale>;
  roles?: Maybe<ConfigAuthUserRoles>;
};

export type ConfigAuthUserComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserComparisonExp>>;
  email?: InputMaybe<ConfigAuthUserEmailComparisonExp>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsComparisonExp>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarComparisonExp>;
  locale?: InputMaybe<ConfigAuthUserLocaleComparisonExp>;
  roles?: InputMaybe<ConfigAuthUserRolesComparisonExp>;
};

export type ConfigAuthUserEmail = {
  __typename?: 'ConfigAuthUserEmail';
  /** AUTH_ACCESS_CONTROL_ALLOWED_EMAILS */
  allowed?: Maybe<Array<Scalars['ConfigEmail']>>;
  /** AUTH_ACCESS_CONTROL_BLOCKED_EMAILS */
  blocked?: Maybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserEmailComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserEmailComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserEmailComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserEmailComparisonExp>>;
  allowed?: InputMaybe<ConfigEmailComparisonExp>;
  blocked?: InputMaybe<ConfigEmailComparisonExp>;
};

export type ConfigAuthUserEmailDomains = {
  __typename?: 'ConfigAuthUserEmailDomains';
  /** AUTH_ACCESS_CONTROL_ALLOWED_EMAIL_DOMAINS */
  allowed?: Maybe<Array<Scalars['String']>>;
  /** AUTH_ACCESS_CONTROL_BLOCKED_EMAIL_DOMAINS */
  blocked?: Maybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailDomainsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserEmailDomainsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserEmailDomainsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserEmailDomainsComparisonExp>>;
  allowed?: InputMaybe<ConfigStringComparisonExp>;
  blocked?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthUserEmailDomainsInsertInput = {
  allowed?: InputMaybe<Array<Scalars['String']>>;
  blocked?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailDomainsUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['String']>>;
  blocked?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  blocked?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserEmailUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  blocked?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserGravatar = {
  __typename?: 'ConfigAuthUserGravatar';
  default?: Maybe<Scalars['String']>;
  /** AUTH_GRAVATAR_ENABLED */
  enabled?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['String']>;
};

export type ConfigAuthUserGravatarComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserGravatarComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserGravatarComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserGravatarComparisonExp>>;
  default?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  rating?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthUserGravatarInsertInput = {
  default?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUserGravatarUpdateInput = {
  default?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUserInsertInput = {
  email?: InputMaybe<ConfigAuthUserEmailInsertInput>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsInsertInput>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarInsertInput>;
  locale?: InputMaybe<ConfigAuthUserLocaleInsertInput>;
  roles?: InputMaybe<ConfigAuthUserRolesInsertInput>;
};

export type ConfigAuthUserLocale = {
  __typename?: 'ConfigAuthUserLocale';
  /** AUTH_LOCALE_ALLOWED_LOCALES */
  allowed?: Maybe<Array<Scalars['ConfigLocale']>>;
  /** AUTH_LOCALE_DEFAULT */
  default?: Maybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserLocaleComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserLocaleComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserLocaleComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserLocaleComparisonExp>>;
  allowed?: InputMaybe<ConfigLocaleComparisonExp>;
  default?: InputMaybe<ConfigLocaleComparisonExp>;
};

export type ConfigAuthUserLocaleInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  default?: InputMaybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserLocaleUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  default?: InputMaybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserRoles = {
  __typename?: 'ConfigAuthUserRoles';
  /** AUTH_USER_DEFAULT_ALLOWED_ROLES */
  allowed?: Maybe<Array<Scalars['ConfigUserRole']>>;
  /** AUTH_USER_DEFAULT_ROLE */
  default?: Maybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserRolesComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserRolesComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserRolesComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserRolesComparisonExp>>;
  allowed?: InputMaybe<ConfigUserRoleComparisonExp>;
  default?: InputMaybe<ConfigUserRoleComparisonExp>;
};

export type ConfigAuthUserRolesInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  default?: InputMaybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserRolesUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  default?: InputMaybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserUpdateInput = {
  email?: InputMaybe<ConfigAuthUserEmailUpdateInput>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsUpdateInput>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarUpdateInput>;
  locale?: InputMaybe<ConfigAuthUserLocaleUpdateInput>;
  roles?: InputMaybe<ConfigAuthUserRolesUpdateInput>;
};

/** AUTH_JWT_CUSTOM_CLAIMS */
export type ConfigAuthsessionaccessTokenCustomClaims = {
  __typename?: 'ConfigAuthsessionaccessTokenCustomClaims';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigAuthsessionaccessTokenCustomClaimsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>>;
  key?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthsessionaccessTokenCustomClaimsInsertInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigAuthsessionaccessTokenCustomClaimsUpdateInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigAutoscaler = {
  __typename?: 'ConfigAutoscaler';
  maxReplicas: Scalars['ConfigUint8'];
};

export type ConfigAutoscalerComparisonExp = {
  _and?: InputMaybe<Array<ConfigAutoscalerComparisonExp>>;
  _not?: InputMaybe<ConfigAutoscalerComparisonExp>;
  _or?: InputMaybe<Array<ConfigAutoscalerComparisonExp>>;
  maxReplicas?: InputMaybe<ConfigUint8ComparisonExp>;
};

export type ConfigAutoscalerInsertInput = {
  maxReplicas: Scalars['ConfigUint8'];
};

export type ConfigAutoscalerUpdateInput = {
  maxReplicas?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigBooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ConfigClaimMap = {
  __typename?: 'ConfigClaimMap';
  claim: Scalars['String'];
  default?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigClaimMapComparisonExp = {
  _and?: InputMaybe<Array<ConfigClaimMapComparisonExp>>;
  _not?: InputMaybe<ConfigClaimMapComparisonExp>;
  _or?: InputMaybe<Array<ConfigClaimMapComparisonExp>>;
  claim?: InputMaybe<ConfigStringComparisonExp>;
  default?: InputMaybe<ConfigStringComparisonExp>;
  path?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigClaimMapInsertInput = {
  claim: Scalars['String'];
  default?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigClaimMapUpdateInput = {
  claim?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Resource configuration for a service */
export type ConfigComputeResources = {
  __typename?: 'ConfigComputeResources';
  /** milicpus, 1000 milicpus = 1 cpu */
  cpu: Scalars['ConfigUint32'];
  /** MiB: 128MiB to 30GiB */
  memory: Scalars['ConfigUint32'];
};

export type ConfigComputeResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigComputeResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigComputeResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigComputeResourcesComparisonExp>>;
  cpu?: InputMaybe<ConfigUint32ComparisonExp>;
  memory?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigComputeResourcesInsertInput = {
  cpu: Scalars['ConfigUint32'];
  memory: Scalars['ConfigUint32'];
};

export type ConfigComputeResourcesUpdateInput = {
  cpu?: InputMaybe<Scalars['ConfigUint32']>;
  memory?: InputMaybe<Scalars['ConfigUint32']>;
};

/** main entrypoint to the configuration */
export type ConfigConfig = {
  __typename?: 'ConfigConfig';
  /** Configuration for graphite service */
  ai?: Maybe<ConfigAi>;
  /** Configuration for auth service */
  auth?: Maybe<ConfigAuth>;
  /** Configuration for functions service */
  functions?: Maybe<ConfigFunctions>;
  /** Global configuration that applies to all services */
  global?: Maybe<ConfigGlobal>;
  /** Advanced configuration for GraphQL */
  graphql?: Maybe<ConfigGraphql>;
  /** Configuration for hasura */
  hasura: ConfigHasura;
  /** Configuration for observability service */
  observability: ConfigObservability;
  /** Configuration for postgres service */
  postgres?: Maybe<ConfigPostgres>;
  /** Configuration for third party providers like SMTP, SMS, etc. */
  provider?: Maybe<ConfigProvider>;
  /** Configuration for storage service */
  storage?: Maybe<ConfigStorage>;
};

export type ConfigConfigComparisonExp = {
  _and?: InputMaybe<Array<ConfigConfigComparisonExp>>;
  _not?: InputMaybe<ConfigConfigComparisonExp>;
  _or?: InputMaybe<Array<ConfigConfigComparisonExp>>;
  ai?: InputMaybe<ConfigAiComparisonExp>;
  auth?: InputMaybe<ConfigAuthComparisonExp>;
  functions?: InputMaybe<ConfigFunctionsComparisonExp>;
  global?: InputMaybe<ConfigGlobalComparisonExp>;
  graphql?: InputMaybe<ConfigGraphqlComparisonExp>;
  hasura?: InputMaybe<ConfigHasuraComparisonExp>;
  observability?: InputMaybe<ConfigObservabilityComparisonExp>;
  postgres?: InputMaybe<ConfigPostgresComparisonExp>;
  provider?: InputMaybe<ConfigProviderComparisonExp>;
  storage?: InputMaybe<ConfigStorageComparisonExp>;
};

export type ConfigConfigInsertInput = {
  ai?: InputMaybe<ConfigAiInsertInput>;
  auth?: InputMaybe<ConfigAuthInsertInput>;
  functions?: InputMaybe<ConfigFunctionsInsertInput>;
  global?: InputMaybe<ConfigGlobalInsertInput>;
  graphql?: InputMaybe<ConfigGraphqlInsertInput>;
  hasura: ConfigHasuraInsertInput;
  observability: ConfigObservabilityInsertInput;
  postgres?: InputMaybe<ConfigPostgresInsertInput>;
  provider?: InputMaybe<ConfigProviderInsertInput>;
  storage?: InputMaybe<ConfigStorageInsertInput>;
};

export type ConfigConfigUpdateInput = {
  ai?: InputMaybe<ConfigAiUpdateInput>;
  auth?: InputMaybe<ConfigAuthUpdateInput>;
  functions?: InputMaybe<ConfigFunctionsUpdateInput>;
  global?: InputMaybe<ConfigGlobalUpdateInput>;
  graphql?: InputMaybe<ConfigGraphqlUpdateInput>;
  hasura?: InputMaybe<ConfigHasuraUpdateInput>;
  observability?: InputMaybe<ConfigObservabilityUpdateInput>;
  postgres?: InputMaybe<ConfigPostgresUpdateInput>;
  provider?: InputMaybe<ConfigProviderUpdateInput>;
  storage?: InputMaybe<ConfigStorageUpdateInput>;
};

export type ConfigEmailComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigEmail']>;
  _in?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  _neq?: InputMaybe<Scalars['ConfigEmail']>;
  _nin?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigEnvironmentVariable = {
  __typename?: 'ConfigEnvironmentVariable';
  name: Scalars['String'];
  /** Value of the environment variable */
  value: Scalars['String'];
};

export type ConfigEnvironmentVariableComparisonExp = {
  _and?: InputMaybe<Array<ConfigEnvironmentVariableComparisonExp>>;
  _not?: InputMaybe<ConfigEnvironmentVariableComparisonExp>;
  _or?: InputMaybe<Array<ConfigEnvironmentVariableComparisonExp>>;
  name?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigEnvironmentVariableInsertInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigEnvironmentVariableUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigFloatComparisonExp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
};

/** Configuration for functions service */
export type ConfigFunctions = {
  __typename?: 'ConfigFunctions';
  node?: Maybe<ConfigFunctionsNode>;
  resources?: Maybe<ConfigFunctionsResources>;
};

export type ConfigFunctionsComparisonExp = {
  _and?: InputMaybe<Array<ConfigFunctionsComparisonExp>>;
  _not?: InputMaybe<ConfigFunctionsComparisonExp>;
  _or?: InputMaybe<Array<ConfigFunctionsComparisonExp>>;
  node?: InputMaybe<ConfigFunctionsNodeComparisonExp>;
  resources?: InputMaybe<ConfigFunctionsResourcesComparisonExp>;
};

export type ConfigFunctionsInsertInput = {
  node?: InputMaybe<ConfigFunctionsNodeInsertInput>;
  resources?: InputMaybe<ConfigFunctionsResourcesInsertInput>;
};

export type ConfigFunctionsNode = {
  __typename?: 'ConfigFunctionsNode';
  version?: Maybe<Scalars['Int']>;
};

export type ConfigFunctionsNodeComparisonExp = {
  _and?: InputMaybe<Array<ConfigFunctionsNodeComparisonExp>>;
  _not?: InputMaybe<ConfigFunctionsNodeComparisonExp>;
  _or?: InputMaybe<Array<ConfigFunctionsNodeComparisonExp>>;
  version?: InputMaybe<ConfigIntComparisonExp>;
};

export type ConfigFunctionsNodeInsertInput = {
  version?: InputMaybe<Scalars['Int']>;
};

export type ConfigFunctionsNodeUpdateInput = {
  version?: InputMaybe<Scalars['Int']>;
};

export type ConfigFunctionsResources = {
  __typename?: 'ConfigFunctionsResources';
  networking?: Maybe<ConfigNetworking>;
};

export type ConfigFunctionsResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigFunctionsResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigFunctionsResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigFunctionsResourcesComparisonExp>>;
  networking?: InputMaybe<ConfigNetworkingComparisonExp>;
};

export type ConfigFunctionsResourcesInsertInput = {
  networking?: InputMaybe<ConfigNetworkingInsertInput>;
};

export type ConfigFunctionsResourcesUpdateInput = {
  networking?: InputMaybe<ConfigNetworkingUpdateInput>;
};

export type ConfigFunctionsUpdateInput = {
  node?: InputMaybe<ConfigFunctionsNodeUpdateInput>;
  resources?: InputMaybe<ConfigFunctionsResourcesUpdateInput>;
};

/** Global configuration that applies to all services */
export type ConfigGlobal = {
  __typename?: 'ConfigGlobal';
  /** User-defined environment variables that are spread over all services */
  environment?: Maybe<Array<ConfigGlobalEnvironmentVariable>>;
};

export type ConfigGlobalComparisonExp = {
  _and?: InputMaybe<Array<ConfigGlobalComparisonExp>>;
  _not?: InputMaybe<ConfigGlobalComparisonExp>;
  _or?: InputMaybe<Array<ConfigGlobalComparisonExp>>;
  environment?: InputMaybe<ConfigGlobalEnvironmentVariableComparisonExp>;
};

export type ConfigGlobalEnvironmentVariable = {
  __typename?: 'ConfigGlobalEnvironmentVariable';
  name: Scalars['String'];
  /** Value of the environment variable */
  value: Scalars['String'];
};

export type ConfigGlobalEnvironmentVariableComparisonExp = {
  _and?: InputMaybe<Array<ConfigGlobalEnvironmentVariableComparisonExp>>;
  _not?: InputMaybe<ConfigGlobalEnvironmentVariableComparisonExp>;
  _or?: InputMaybe<Array<ConfigGlobalEnvironmentVariableComparisonExp>>;
  name?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigGlobalEnvironmentVariableInsertInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigGlobalEnvironmentVariableUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigGlobalInsertInput = {
  environment?: InputMaybe<Array<ConfigGlobalEnvironmentVariableInsertInput>>;
};

export type ConfigGlobalUpdateInput = {
  environment?: InputMaybe<Array<ConfigGlobalEnvironmentVariableUpdateInput>>;
};

export type ConfigGrafana = {
  __typename?: 'ConfigGrafana';
  adminPassword: Scalars['String'];
};

export type ConfigGrafanaComparisonExp = {
  _and?: InputMaybe<Array<ConfigGrafanaComparisonExp>>;
  _not?: InputMaybe<ConfigGrafanaComparisonExp>;
  _or?: InputMaybe<Array<ConfigGrafanaComparisonExp>>;
  adminPassword?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigGrafanaInsertInput = {
  adminPassword: Scalars['String'];
};

export type ConfigGrafanaUpdateInput = {
  adminPassword?: InputMaybe<Scalars['String']>;
};

export type ConfigGraphql = {
  __typename?: 'ConfigGraphql';
  security?: Maybe<ConfigGraphqlSecurity>;
};

export type ConfigGraphqlComparisonExp = {
  _and?: InputMaybe<Array<ConfigGraphqlComparisonExp>>;
  _not?: InputMaybe<ConfigGraphqlComparisonExp>;
  _or?: InputMaybe<Array<ConfigGraphqlComparisonExp>>;
  security?: InputMaybe<ConfigGraphqlSecurityComparisonExp>;
};

export type ConfigGraphqlInsertInput = {
  security?: InputMaybe<ConfigGraphqlSecurityInsertInput>;
};

export type ConfigGraphqlSecurity = {
  __typename?: 'ConfigGraphqlSecurity';
  forbidAminSecret?: Maybe<Scalars['Boolean']>;
  maxDepthQueries?: Maybe<Scalars['ConfigUint']>;
};

export type ConfigGraphqlSecurityComparisonExp = {
  _and?: InputMaybe<Array<ConfigGraphqlSecurityComparisonExp>>;
  _not?: InputMaybe<ConfigGraphqlSecurityComparisonExp>;
  _or?: InputMaybe<Array<ConfigGraphqlSecurityComparisonExp>>;
  forbidAminSecret?: InputMaybe<ConfigBooleanComparisonExp>;
  maxDepthQueries?: InputMaybe<ConfigUintComparisonExp>;
};

export type ConfigGraphqlSecurityInsertInput = {
  forbidAminSecret?: InputMaybe<Scalars['Boolean']>;
  maxDepthQueries?: InputMaybe<Scalars['ConfigUint']>;
};

export type ConfigGraphqlSecurityUpdateInput = {
  forbidAminSecret?: InputMaybe<Scalars['Boolean']>;
  maxDepthQueries?: InputMaybe<Scalars['ConfigUint']>;
};

export type ConfigGraphqlUpdateInput = {
  security?: InputMaybe<ConfigGraphqlSecurityUpdateInput>;
};

/** Configuration for hasura service */
export type ConfigHasura = {
  __typename?: 'ConfigHasura';
  /** Admin secret */
  adminSecret: Scalars['String'];
  authHook?: Maybe<ConfigHasuraAuthHook>;
  events?: Maybe<ConfigHasuraEvents>;
  /** JWT Secrets configuration */
  jwtSecrets?: Maybe<Array<ConfigJwtSecret>>;
  logs?: Maybe<ConfigHasuraLogs>;
  /** Resources for the service */
  resources?: Maybe<ConfigResources>;
  /**
   * Configuration for hasura services
   * Reference: https://hasura.io/docs/latest/deployment/graphql-engine-flags/reference/
   */
  settings?: Maybe<ConfigHasuraSettings>;
  /**
   * Version of hasura, you can see available versions in the URL below:
   * https://hub.docker.com/r/hasura/graphql-engine/tags
   */
  version?: Maybe<Scalars['String']>;
  /** Webhook secret */
  webhookSecret: Scalars['String'];
};

export type ConfigHasuraApIsComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigHasuraAPIs']>;
  _in?: InputMaybe<Array<Scalars['ConfigHasuraAPIs']>>;
  _neq?: InputMaybe<Scalars['ConfigHasuraAPIs']>;
  _nin?: InputMaybe<Array<Scalars['ConfigHasuraAPIs']>>;
};

export type ConfigHasuraAuthHook = {
  __typename?: 'ConfigHasuraAuthHook';
  mode?: Maybe<Scalars['String']>;
  /** HASURA_GRAPHQL_AUTH_HOOK_SEND_REQUEST_BODY */
  sendRequestBody?: Maybe<Scalars['Boolean']>;
  /** HASURA_GRAPHQL_AUTH_HOOK */
  url: Scalars['String'];
};

export type ConfigHasuraAuthHookComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraAuthHookComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraAuthHookComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraAuthHookComparisonExp>>;
  mode?: InputMaybe<ConfigStringComparisonExp>;
  sendRequestBody?: InputMaybe<ConfigBooleanComparisonExp>;
  url?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigHasuraAuthHookInsertInput = {
  mode?: InputMaybe<Scalars['String']>;
  sendRequestBody?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type ConfigHasuraAuthHookUpdateInput = {
  mode?: InputMaybe<Scalars['String']>;
  sendRequestBody?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ConfigHasuraComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraComparisonExp>>;
  adminSecret?: InputMaybe<ConfigStringComparisonExp>;
  authHook?: InputMaybe<ConfigHasuraAuthHookComparisonExp>;
  events?: InputMaybe<ConfigHasuraEventsComparisonExp>;
  jwtSecrets?: InputMaybe<ConfigJwtSecretComparisonExp>;
  logs?: InputMaybe<ConfigHasuraLogsComparisonExp>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  settings?: InputMaybe<ConfigHasuraSettingsComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
  webhookSecret?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigHasuraEvents = {
  __typename?: 'ConfigHasuraEvents';
  /** HASURA_GRAPHQL_EVENTS_HTTP_POOL_SIZE */
  httpPoolSize?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraEventsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraEventsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraEventsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraEventsComparisonExp>>;
  httpPoolSize?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigHasuraEventsInsertInput = {
  httpPoolSize?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraEventsUpdateInput = {
  httpPoolSize?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraInsertInput = {
  adminSecret: Scalars['String'];
  authHook?: InputMaybe<ConfigHasuraAuthHookInsertInput>;
  events?: InputMaybe<ConfigHasuraEventsInsertInput>;
  jwtSecrets?: InputMaybe<Array<ConfigJwtSecretInsertInput>>;
  logs?: InputMaybe<ConfigHasuraLogsInsertInput>;
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  settings?: InputMaybe<ConfigHasuraSettingsInsertInput>;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret: Scalars['String'];
};

export type ConfigHasuraLogs = {
  __typename?: 'ConfigHasuraLogs';
  level?: Maybe<Scalars['String']>;
};

export type ConfigHasuraLogsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraLogsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraLogsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraLogsComparisonExp>>;
  level?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigHasuraLogsInsertInput = {
  level?: InputMaybe<Scalars['String']>;
};

export type ConfigHasuraLogsUpdateInput = {
  level?: InputMaybe<Scalars['String']>;
};

/**
 * Configuration for hasura services
 * Reference: https://hasura.io/docs/latest/deployment/graphql-engine-flags/reference/
 */
export type ConfigHasuraSettings = {
  __typename?: 'ConfigHasuraSettings';
  /** HASURA_GRAPHQL_CORS_DOMAIN */
  corsDomain?: Maybe<Array<Scalars['ConfigUrl']>>;
  /** HASURA_GRAPHQL_DEV_MODE */
  devMode?: Maybe<Scalars['Boolean']>;
  /** HASURA_GRAPHQL_ENABLE_ALLOWLIST */
  enableAllowList?: Maybe<Scalars['Boolean']>;
  /** HASURA_GRAPHQL_ENABLE_CONSOLE */
  enableConsole?: Maybe<Scalars['Boolean']>;
  /** HASURA_GRAPHQL_ENABLE_REMOTE_SCHEMA_PERMISSIONS */
  enableRemoteSchemaPermissions?: Maybe<Scalars['Boolean']>;
  /** HASURA_GRAPHQL_ENABLED_APIS */
  enabledAPIs?: Maybe<Array<Scalars['ConfigHasuraAPIs']>>;
  /** HASURA_GRAPHQL_LIVE_QUERIES_MULTIPLEXED_REFETCH_INTERVAL */
  liveQueriesMultiplexedRefetchInterval?: Maybe<Scalars['ConfigUint32']>;
  /** HASURA_GRAPHQL_STRINGIFY_NUMERIC_TYPES */
  stringifyNumericTypes?: Maybe<Scalars['Boolean']>;
};

export type ConfigHasuraSettingsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraSettingsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraSettingsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraSettingsComparisonExp>>;
  corsDomain?: InputMaybe<ConfigUrlComparisonExp>;
  devMode?: InputMaybe<ConfigBooleanComparisonExp>;
  enableAllowList?: InputMaybe<ConfigBooleanComparisonExp>;
  enableConsole?: InputMaybe<ConfigBooleanComparisonExp>;
  enableRemoteSchemaPermissions?: InputMaybe<ConfigBooleanComparisonExp>;
  enabledAPIs?: InputMaybe<ConfigHasuraApIsComparisonExp>;
  liveQueriesMultiplexedRefetchInterval?: InputMaybe<ConfigUint32ComparisonExp>;
  stringifyNumericTypes?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigHasuraSettingsInsertInput = {
  corsDomain?: InputMaybe<Array<Scalars['ConfigUrl']>>;
  devMode?: InputMaybe<Scalars['Boolean']>;
  enableAllowList?: InputMaybe<Scalars['Boolean']>;
  enableConsole?: InputMaybe<Scalars['Boolean']>;
  enableRemoteSchemaPermissions?: InputMaybe<Scalars['Boolean']>;
  enabledAPIs?: InputMaybe<Array<Scalars['ConfigHasuraAPIs']>>;
  liveQueriesMultiplexedRefetchInterval?: InputMaybe<Scalars['ConfigUint32']>;
  stringifyNumericTypes?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigHasuraSettingsUpdateInput = {
  corsDomain?: InputMaybe<Array<Scalars['ConfigUrl']>>;
  devMode?: InputMaybe<Scalars['Boolean']>;
  enableAllowList?: InputMaybe<Scalars['Boolean']>;
  enableConsole?: InputMaybe<Scalars['Boolean']>;
  enableRemoteSchemaPermissions?: InputMaybe<Scalars['Boolean']>;
  enabledAPIs?: InputMaybe<Array<Scalars['ConfigHasuraAPIs']>>;
  liveQueriesMultiplexedRefetchInterval?: InputMaybe<Scalars['ConfigUint32']>;
  stringifyNumericTypes?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigHasuraUpdateInput = {
  adminSecret?: InputMaybe<Scalars['String']>;
  authHook?: InputMaybe<ConfigHasuraAuthHookUpdateInput>;
  events?: InputMaybe<ConfigHasuraEventsUpdateInput>;
  jwtSecrets?: InputMaybe<Array<ConfigJwtSecretUpdateInput>>;
  logs?: InputMaybe<ConfigHasuraLogsUpdateInput>;
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  settings?: InputMaybe<ConfigHasuraSettingsUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret?: InputMaybe<Scalars['String']>;
};

export type ConfigHealthCheck = {
  __typename?: 'ConfigHealthCheck';
  initialDelaySeconds?: Maybe<Scalars['Int']>;
  port: Scalars['ConfigPort'];
  probePeriodSeconds?: Maybe<Scalars['Int']>;
};

export type ConfigHealthCheckComparisonExp = {
  _and?: InputMaybe<Array<ConfigHealthCheckComparisonExp>>;
  _not?: InputMaybe<ConfigHealthCheckComparisonExp>;
  _or?: InputMaybe<Array<ConfigHealthCheckComparisonExp>>;
  initialDelaySeconds?: InputMaybe<ConfigIntComparisonExp>;
  port?: InputMaybe<ConfigPortComparisonExp>;
  probePeriodSeconds?: InputMaybe<ConfigIntComparisonExp>;
};

export type ConfigHealthCheckInsertInput = {
  initialDelaySeconds?: InputMaybe<Scalars['Int']>;
  port: Scalars['ConfigPort'];
  probePeriodSeconds?: InputMaybe<Scalars['Int']>;
};

export type ConfigHealthCheckUpdateInput = {
  initialDelaySeconds?: InputMaybe<Scalars['Int']>;
  port?: InputMaybe<Scalars['ConfigPort']>;
  probePeriodSeconds?: InputMaybe<Scalars['Int']>;
};

export type ConfigIngress = {
  __typename?: 'ConfigIngress';
  fqdn?: Maybe<Array<Scalars['String']>>;
};

export type ConfigIngressComparisonExp = {
  _and?: InputMaybe<Array<ConfigIngressComparisonExp>>;
  _not?: InputMaybe<ConfigIngressComparisonExp>;
  _or?: InputMaybe<Array<ConfigIngressComparisonExp>>;
  fqdn?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigIngressInsertInput = {
  fqdn?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigIngressUpdateInput = {
  fqdn?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigInsertConfigResponse = {
  __typename?: 'ConfigInsertConfigResponse';
  config: ConfigConfig;
  secrets: Array<ConfigEnvironmentVariable>;
  systemConfig: ConfigSystemConfig;
};

export type ConfigInt32ComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigInt32']>;
  _in?: InputMaybe<Array<Scalars['ConfigInt32']>>;
  _neq?: InputMaybe<Scalars['ConfigInt32']>;
  _nin?: InputMaybe<Array<Scalars['ConfigInt32']>>;
};

export type ConfigIntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** See https://hasura.io/docs/latest/auth/authentication/jwt/ */
export type ConfigJwtSecret = {
  __typename?: 'ConfigJWTSecret';
  allowed_skew?: Maybe<Scalars['ConfigUint32']>;
  audience?: Maybe<Scalars['String']>;
  claims_format?: Maybe<Scalars['String']>;
  claims_map?: Maybe<Array<ConfigClaimMap>>;
  claims_namespace?: Maybe<Scalars['String']>;
  claims_namespace_path?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  jwk_url?: Maybe<Scalars['ConfigUrl']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConfigJwtSecretComparisonExp = {
  _and?: InputMaybe<Array<ConfigJwtSecretComparisonExp>>;
  _not?: InputMaybe<ConfigJwtSecretComparisonExp>;
  _or?: InputMaybe<Array<ConfigJwtSecretComparisonExp>>;
  allowed_skew?: InputMaybe<ConfigUint32ComparisonExp>;
  audience?: InputMaybe<ConfigStringComparisonExp>;
  claims_format?: InputMaybe<ConfigStringComparisonExp>;
  claims_map?: InputMaybe<ConfigClaimMapComparisonExp>;
  claims_namespace?: InputMaybe<ConfigStringComparisonExp>;
  claims_namespace_path?: InputMaybe<ConfigStringComparisonExp>;
  header?: InputMaybe<ConfigStringComparisonExp>;
  issuer?: InputMaybe<ConfigStringComparisonExp>;
  jwk_url?: InputMaybe<ConfigUrlComparisonExp>;
  key?: InputMaybe<ConfigStringComparisonExp>;
  type?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigJwtSecretInsertInput = {
  allowed_skew?: InputMaybe<Scalars['ConfigUint32']>;
  audience?: InputMaybe<Scalars['String']>;
  claims_format?: InputMaybe<Scalars['String']>;
  claims_map?: InputMaybe<Array<ConfigClaimMapInsertInput>>;
  claims_namespace?: InputMaybe<Scalars['String']>;
  claims_namespace_path?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  issuer?: InputMaybe<Scalars['String']>;
  jwk_url?: InputMaybe<Scalars['ConfigUrl']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConfigJwtSecretUpdateInput = {
  allowed_skew?: InputMaybe<Scalars['ConfigUint32']>;
  audience?: InputMaybe<Scalars['String']>;
  claims_format?: InputMaybe<Scalars['String']>;
  claims_map?: InputMaybe<Array<ConfigClaimMapUpdateInput>>;
  claims_namespace?: InputMaybe<Scalars['String']>;
  claims_namespace_path?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  issuer?: InputMaybe<Scalars['String']>;
  jwk_url?: InputMaybe<Scalars['ConfigUrl']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConfigLocaleComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigLocale']>;
  _in?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  _neq?: InputMaybe<Scalars['ConfigLocale']>;
  _nin?: InputMaybe<Array<Scalars['ConfigLocale']>>;
};

export type ConfigNetworking = {
  __typename?: 'ConfigNetworking';
  ingresses?: Maybe<Array<ConfigIngress>>;
};

export type ConfigNetworkingComparisonExp = {
  _and?: InputMaybe<Array<ConfigNetworkingComparisonExp>>;
  _not?: InputMaybe<ConfigNetworkingComparisonExp>;
  _or?: InputMaybe<Array<ConfigNetworkingComparisonExp>>;
  ingresses?: InputMaybe<ConfigIngressComparisonExp>;
};

export type ConfigNetworkingInsertInput = {
  ingresses?: InputMaybe<Array<ConfigIngressInsertInput>>;
};

export type ConfigNetworkingUpdateInput = {
  ingresses?: InputMaybe<Array<ConfigIngressUpdateInput>>;
};

export type ConfigObservability = {
  __typename?: 'ConfigObservability';
  grafana: ConfigGrafana;
};

export type ConfigObservabilityComparisonExp = {
  _and?: InputMaybe<Array<ConfigObservabilityComparisonExp>>;
  _not?: InputMaybe<ConfigObservabilityComparisonExp>;
  _or?: InputMaybe<Array<ConfigObservabilityComparisonExp>>;
  grafana?: InputMaybe<ConfigGrafanaComparisonExp>;
};

export type ConfigObservabilityInsertInput = {
  grafana: ConfigGrafanaInsertInput;
};

export type ConfigObservabilityUpdateInput = {
  grafana?: InputMaybe<ConfigGrafanaUpdateInput>;
};

export type ConfigPortComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigPort']>;
  _in?: InputMaybe<Array<Scalars['ConfigPort']>>;
  _neq?: InputMaybe<Scalars['ConfigPort']>;
  _nin?: InputMaybe<Array<Scalars['ConfigPort']>>;
};

/** Configuration for postgres service */
export type ConfigPostgres = {
  __typename?: 'ConfigPostgres';
  /** Resources for the service */
  resources?: Maybe<ConfigPostgresResources>;
  settings?: Maybe<ConfigPostgresSettings>;
  /**
   * Version of postgres, you can see available versions in the URL below:
   * https://hub.docker.com/r/nhost/postgres/tags
   */
  version?: Maybe<Scalars['String']>;
};

export type ConfigPostgresComparisonExp = {
  _and?: InputMaybe<Array<ConfigPostgresComparisonExp>>;
  _not?: InputMaybe<ConfigPostgresComparisonExp>;
  _or?: InputMaybe<Array<ConfigPostgresComparisonExp>>;
  resources?: InputMaybe<ConfigPostgresResourcesComparisonExp>;
  settings?: InputMaybe<ConfigPostgresSettingsComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigPostgresInsertInput = {
  resources?: InputMaybe<ConfigPostgresResourcesInsertInput>;
  settings?: InputMaybe<ConfigPostgresSettingsInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

/** Resources for the service */
export type ConfigPostgresResources = {
  __typename?: 'ConfigPostgresResources';
  autoscaler?: Maybe<ConfigAutoscaler>;
  compute?: Maybe<ConfigResourcesCompute>;
  enablePublicAccess?: Maybe<Scalars['Boolean']>;
  networking?: Maybe<ConfigNetworking>;
  /** Number of replicas for a service */
  replicas?: Maybe<Scalars['ConfigUint8']>;
  storage?: Maybe<ConfigPostgresStorage>;
};

export type ConfigPostgresResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigPostgresResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigPostgresResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigPostgresResourcesComparisonExp>>;
  autoscaler?: InputMaybe<ConfigAutoscalerComparisonExp>;
  compute?: InputMaybe<ConfigResourcesComputeComparisonExp>;
  enablePublicAccess?: InputMaybe<ConfigBooleanComparisonExp>;
  networking?: InputMaybe<ConfigNetworkingComparisonExp>;
  replicas?: InputMaybe<ConfigUint8ComparisonExp>;
  storage?: InputMaybe<ConfigPostgresStorageComparisonExp>;
};

export type ConfigPostgresResourcesInsertInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerInsertInput>;
  compute?: InputMaybe<ConfigResourcesComputeInsertInput>;
  enablePublicAccess?: InputMaybe<Scalars['Boolean']>;
  networking?: InputMaybe<ConfigNetworkingInsertInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
  storage?: InputMaybe<ConfigPostgresStorageInsertInput>;
};

export type ConfigPostgresResourcesUpdateInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerUpdateInput>;
  compute?: InputMaybe<ConfigResourcesComputeUpdateInput>;
  enablePublicAccess?: InputMaybe<Scalars['Boolean']>;
  networking?: InputMaybe<ConfigNetworkingUpdateInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
  storage?: InputMaybe<ConfigPostgresStorageUpdateInput>;
};

export type ConfigPostgresSettings = {
  __typename?: 'ConfigPostgresSettings';
  checkpointCompletionTarget?: Maybe<Scalars['Float']>;
  defaultStatisticsTarget?: Maybe<Scalars['ConfigInt32']>;
  effectiveCacheSize?: Maybe<Scalars['String']>;
  effectiveIOConcurrency?: Maybe<Scalars['ConfigInt32']>;
  hugePages?: Maybe<Scalars['String']>;
  jit?: Maybe<Scalars['String']>;
  maintenanceWorkMem?: Maybe<Scalars['String']>;
  maxConnections?: Maybe<Scalars['ConfigInt32']>;
  maxParallelMaintenanceWorkers?: Maybe<Scalars['ConfigInt32']>;
  maxParallelWorkers?: Maybe<Scalars['ConfigInt32']>;
  maxParallelWorkersPerGather?: Maybe<Scalars['ConfigInt32']>;
  maxReplicationSlots?: Maybe<Scalars['ConfigInt32']>;
  maxWalSenders?: Maybe<Scalars['ConfigInt32']>;
  maxWalSize?: Maybe<Scalars['String']>;
  maxWorkerProcesses?: Maybe<Scalars['ConfigInt32']>;
  minWalSize?: Maybe<Scalars['String']>;
  randomPageCost?: Maybe<Scalars['Float']>;
  sharedBuffers?: Maybe<Scalars['String']>;
  walBuffers?: Maybe<Scalars['String']>;
  walLevel?: Maybe<Scalars['String']>;
  workMem?: Maybe<Scalars['String']>;
};

export type ConfigPostgresSettingsComparisonExp = {
  _and?: InputMaybe<Array<ConfigPostgresSettingsComparisonExp>>;
  _not?: InputMaybe<ConfigPostgresSettingsComparisonExp>;
  _or?: InputMaybe<Array<ConfigPostgresSettingsComparisonExp>>;
  checkpointCompletionTarget?: InputMaybe<ConfigFloatComparisonExp>;
  defaultStatisticsTarget?: InputMaybe<ConfigInt32ComparisonExp>;
  effectiveCacheSize?: InputMaybe<ConfigStringComparisonExp>;
  effectiveIOConcurrency?: InputMaybe<ConfigInt32ComparisonExp>;
  hugePages?: InputMaybe<ConfigStringComparisonExp>;
  jit?: InputMaybe<ConfigStringComparisonExp>;
  maintenanceWorkMem?: InputMaybe<ConfigStringComparisonExp>;
  maxConnections?: InputMaybe<ConfigInt32ComparisonExp>;
  maxParallelMaintenanceWorkers?: InputMaybe<ConfigInt32ComparisonExp>;
  maxParallelWorkers?: InputMaybe<ConfigInt32ComparisonExp>;
  maxParallelWorkersPerGather?: InputMaybe<ConfigInt32ComparisonExp>;
  maxReplicationSlots?: InputMaybe<ConfigInt32ComparisonExp>;
  maxWalSenders?: InputMaybe<ConfigInt32ComparisonExp>;
  maxWalSize?: InputMaybe<ConfigStringComparisonExp>;
  maxWorkerProcesses?: InputMaybe<ConfigInt32ComparisonExp>;
  minWalSize?: InputMaybe<ConfigStringComparisonExp>;
  randomPageCost?: InputMaybe<ConfigFloatComparisonExp>;
  sharedBuffers?: InputMaybe<ConfigStringComparisonExp>;
  walBuffers?: InputMaybe<ConfigStringComparisonExp>;
  walLevel?: InputMaybe<ConfigStringComparisonExp>;
  workMem?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigPostgresSettingsInsertInput = {
  checkpointCompletionTarget?: InputMaybe<Scalars['Float']>;
  defaultStatisticsTarget?: InputMaybe<Scalars['ConfigInt32']>;
  effectiveCacheSize?: InputMaybe<Scalars['String']>;
  effectiveIOConcurrency?: InputMaybe<Scalars['ConfigInt32']>;
  hugePages?: InputMaybe<Scalars['String']>;
  jit?: InputMaybe<Scalars['String']>;
  maintenanceWorkMem?: InputMaybe<Scalars['String']>;
  maxConnections?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelMaintenanceWorkers?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelWorkers?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelWorkersPerGather?: InputMaybe<Scalars['ConfigInt32']>;
  maxReplicationSlots?: InputMaybe<Scalars['ConfigInt32']>;
  maxWalSenders?: InputMaybe<Scalars['ConfigInt32']>;
  maxWalSize?: InputMaybe<Scalars['String']>;
  maxWorkerProcesses?: InputMaybe<Scalars['ConfigInt32']>;
  minWalSize?: InputMaybe<Scalars['String']>;
  randomPageCost?: InputMaybe<Scalars['Float']>;
  sharedBuffers?: InputMaybe<Scalars['String']>;
  walBuffers?: InputMaybe<Scalars['String']>;
  walLevel?: InputMaybe<Scalars['String']>;
  workMem?: InputMaybe<Scalars['String']>;
};

export type ConfigPostgresSettingsUpdateInput = {
  checkpointCompletionTarget?: InputMaybe<Scalars['Float']>;
  defaultStatisticsTarget?: InputMaybe<Scalars['ConfigInt32']>;
  effectiveCacheSize?: InputMaybe<Scalars['String']>;
  effectiveIOConcurrency?: InputMaybe<Scalars['ConfigInt32']>;
  hugePages?: InputMaybe<Scalars['String']>;
  jit?: InputMaybe<Scalars['String']>;
  maintenanceWorkMem?: InputMaybe<Scalars['String']>;
  maxConnections?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelMaintenanceWorkers?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelWorkers?: InputMaybe<Scalars['ConfigInt32']>;
  maxParallelWorkersPerGather?: InputMaybe<Scalars['ConfigInt32']>;
  maxReplicationSlots?: InputMaybe<Scalars['ConfigInt32']>;
  maxWalSenders?: InputMaybe<Scalars['ConfigInt32']>;
  maxWalSize?: InputMaybe<Scalars['String']>;
  maxWorkerProcesses?: InputMaybe<Scalars['ConfigInt32']>;
  minWalSize?: InputMaybe<Scalars['String']>;
  randomPageCost?: InputMaybe<Scalars['Float']>;
  sharedBuffers?: InputMaybe<Scalars['String']>;
  walBuffers?: InputMaybe<Scalars['String']>;
  walLevel?: InputMaybe<Scalars['String']>;
  workMem?: InputMaybe<Scalars['String']>;
};

export type ConfigPostgresStorage = {
  __typename?: 'ConfigPostgresStorage';
  /** GiB */
  capacity: Scalars['ConfigUint32'];
};

export type ConfigPostgresStorageComparisonExp = {
  _and?: InputMaybe<Array<ConfigPostgresStorageComparisonExp>>;
  _not?: InputMaybe<ConfigPostgresStorageComparisonExp>;
  _or?: InputMaybe<Array<ConfigPostgresStorageComparisonExp>>;
  capacity?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigPostgresStorageInsertInput = {
  capacity: Scalars['ConfigUint32'];
};

export type ConfigPostgresStorageUpdateInput = {
  capacity?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigPostgresUpdateInput = {
  resources?: InputMaybe<ConfigPostgresResourcesUpdateInput>;
  settings?: InputMaybe<ConfigPostgresSettingsUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigProvider = {
  __typename?: 'ConfigProvider';
  sms?: Maybe<ConfigSms>;
  smtp?: Maybe<ConfigSmtp>;
};

export type ConfigProviderComparisonExp = {
  _and?: InputMaybe<Array<ConfigProviderComparisonExp>>;
  _not?: InputMaybe<ConfigProviderComparisonExp>;
  _or?: InputMaybe<Array<ConfigProviderComparisonExp>>;
  sms?: InputMaybe<ConfigSmsComparisonExp>;
  smtp?: InputMaybe<ConfigSmtpComparisonExp>;
};

export type ConfigProviderInsertInput = {
  sms?: InputMaybe<ConfigSmsInsertInput>;
  smtp?: InputMaybe<ConfigSmtpInsertInput>;
};

export type ConfigProviderUpdateInput = {
  sms?: InputMaybe<ConfigSmsUpdateInput>;
  smtp?: InputMaybe<ConfigSmtpUpdateInput>;
};

/** Resource configuration for a service */
export type ConfigResources = {
  __typename?: 'ConfigResources';
  autoscaler?: Maybe<ConfigAutoscaler>;
  compute?: Maybe<ConfigResourcesCompute>;
  networking?: Maybe<ConfigNetworking>;
  /** Number of replicas for a service */
  replicas?: Maybe<Scalars['ConfigUint8']>;
};

export type ConfigResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigResourcesComparisonExp>>;
  autoscaler?: InputMaybe<ConfigAutoscalerComparisonExp>;
  compute?: InputMaybe<ConfigResourcesComputeComparisonExp>;
  networking?: InputMaybe<ConfigNetworkingComparisonExp>;
  replicas?: InputMaybe<ConfigUint8ComparisonExp>;
};

export type ConfigResourcesCompute = {
  __typename?: 'ConfigResourcesCompute';
  /** milicpus, 1000 milicpus = 1 cpu */
  cpu: Scalars['ConfigUint32'];
  /** MiB: 128MiB to 30GiB */
  memory: Scalars['ConfigUint32'];
};

export type ConfigResourcesComputeComparisonExp = {
  _and?: InputMaybe<Array<ConfigResourcesComputeComparisonExp>>;
  _not?: InputMaybe<ConfigResourcesComputeComparisonExp>;
  _or?: InputMaybe<Array<ConfigResourcesComputeComparisonExp>>;
  cpu?: InputMaybe<ConfigUint32ComparisonExp>;
  memory?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigResourcesComputeInsertInput = {
  cpu: Scalars['ConfigUint32'];
  memory: Scalars['ConfigUint32'];
};

export type ConfigResourcesComputeUpdateInput = {
  cpu?: InputMaybe<Scalars['ConfigUint32']>;
  memory?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigResourcesInsertInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerInsertInput>;
  compute?: InputMaybe<ConfigResourcesComputeInsertInput>;
  networking?: InputMaybe<ConfigNetworkingInsertInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigResourcesUpdateInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerUpdateInput>;
  compute?: InputMaybe<ConfigResourcesComputeUpdateInput>;
  networking?: InputMaybe<ConfigNetworkingUpdateInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigRunServiceConfig = {
  __typename?: 'ConfigRunServiceConfig';
  command?: Maybe<Array<Scalars['String']>>;
  environment?: Maybe<Array<ConfigEnvironmentVariable>>;
  healthCheck?: Maybe<ConfigHealthCheck>;
  image: ConfigRunServiceImage;
  name: Scalars['ConfigRunServiceName'];
  ports?: Maybe<Array<ConfigRunServicePort>>;
  resources: ConfigRunServiceResources;
};

export type ConfigRunServiceConfigComparisonExp = {
  _and?: InputMaybe<Array<ConfigRunServiceConfigComparisonExp>>;
  _not?: InputMaybe<ConfigRunServiceConfigComparisonExp>;
  _or?: InputMaybe<Array<ConfigRunServiceConfigComparisonExp>>;
  command?: InputMaybe<ConfigStringComparisonExp>;
  environment?: InputMaybe<ConfigEnvironmentVariableComparisonExp>;
  healthCheck?: InputMaybe<ConfigHealthCheckComparisonExp>;
  image?: InputMaybe<ConfigRunServiceImageComparisonExp>;
  name?: InputMaybe<ConfigRunServiceNameComparisonExp>;
  ports?: InputMaybe<ConfigRunServicePortComparisonExp>;
  resources?: InputMaybe<ConfigRunServiceResourcesComparisonExp>;
};

export type ConfigRunServiceConfigInsertInput = {
  command?: InputMaybe<Array<Scalars['String']>>;
  environment?: InputMaybe<Array<ConfigEnvironmentVariableInsertInput>>;
  healthCheck?: InputMaybe<ConfigHealthCheckInsertInput>;
  image: ConfigRunServiceImageInsertInput;
  name: Scalars['ConfigRunServiceName'];
  ports?: InputMaybe<Array<ConfigRunServicePortInsertInput>>;
  resources: ConfigRunServiceResourcesInsertInput;
};

export type ConfigRunServiceConfigUpdateInput = {
  command?: InputMaybe<Array<Scalars['String']>>;
  environment?: InputMaybe<Array<ConfigEnvironmentVariableUpdateInput>>;
  healthCheck?: InputMaybe<ConfigHealthCheckUpdateInput>;
  image?: InputMaybe<ConfigRunServiceImageUpdateInput>;
  name?: InputMaybe<Scalars['ConfigRunServiceName']>;
  ports?: InputMaybe<Array<ConfigRunServicePortUpdateInput>>;
  resources?: InputMaybe<ConfigRunServiceResourcesUpdateInput>;
};

export type ConfigRunServiceConfigWithId = {
  __typename?: 'ConfigRunServiceConfigWithID';
  config: ConfigRunServiceConfig;
  serviceID: Scalars['uuid'];
};

export type ConfigRunServiceImage = {
  __typename?: 'ConfigRunServiceImage';
  image: Scalars['String'];
};

export type ConfigRunServiceImageComparisonExp = {
  _and?: InputMaybe<Array<ConfigRunServiceImageComparisonExp>>;
  _not?: InputMaybe<ConfigRunServiceImageComparisonExp>;
  _or?: InputMaybe<Array<ConfigRunServiceImageComparisonExp>>;
  image?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigRunServiceImageInsertInput = {
  image: Scalars['String'];
};

export type ConfigRunServiceImageUpdateInput = {
  image?: InputMaybe<Scalars['String']>;
};

export type ConfigRunServiceNameComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigRunServiceName']>;
  _in?: InputMaybe<Array<Scalars['ConfigRunServiceName']>>;
  _neq?: InputMaybe<Scalars['ConfigRunServiceName']>;
  _nin?: InputMaybe<Array<Scalars['ConfigRunServiceName']>>;
};

export type ConfigRunServicePort = {
  __typename?: 'ConfigRunServicePort';
  ingresses?: Maybe<Array<ConfigIngress>>;
  port: Scalars['ConfigPort'];
  publish?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type ConfigRunServicePortComparisonExp = {
  _and?: InputMaybe<Array<ConfigRunServicePortComparisonExp>>;
  _not?: InputMaybe<ConfigRunServicePortComparisonExp>;
  _or?: InputMaybe<Array<ConfigRunServicePortComparisonExp>>;
  ingresses?: InputMaybe<ConfigIngressComparisonExp>;
  port?: InputMaybe<ConfigPortComparisonExp>;
  publish?: InputMaybe<ConfigBooleanComparisonExp>;
  type?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigRunServicePortInsertInput = {
  ingresses?: InputMaybe<Array<ConfigIngressInsertInput>>;
  port: Scalars['ConfigPort'];
  publish?: InputMaybe<Scalars['Boolean']>;
  type: Scalars['String'];
};

export type ConfigRunServicePortUpdateInput = {
  ingresses?: InputMaybe<Array<ConfigIngressUpdateInput>>;
  port?: InputMaybe<Scalars['ConfigPort']>;
  publish?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Resource configuration for a service */
export type ConfigRunServiceResources = {
  __typename?: 'ConfigRunServiceResources';
  autoscaler?: Maybe<ConfigAutoscaler>;
  compute: ConfigComputeResources;
  /** Number of replicas for a service */
  replicas: Scalars['ConfigUint8'];
  storage?: Maybe<Array<ConfigRunServiceResourcesStorage>>;
};

export type ConfigRunServiceResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigRunServiceResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigRunServiceResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigRunServiceResourcesComparisonExp>>;
  autoscaler?: InputMaybe<ConfigAutoscalerComparisonExp>;
  compute?: InputMaybe<ConfigComputeResourcesComparisonExp>;
  replicas?: InputMaybe<ConfigUint8ComparisonExp>;
  storage?: InputMaybe<ConfigRunServiceResourcesStorageComparisonExp>;
};

export type ConfigRunServiceResourcesInsertInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerInsertInput>;
  compute: ConfigComputeResourcesInsertInput;
  replicas: Scalars['ConfigUint8'];
  storage?: InputMaybe<Array<ConfigRunServiceResourcesStorageInsertInput>>;
};

export type ConfigRunServiceResourcesStorage = {
  __typename?: 'ConfigRunServiceResourcesStorage';
  /** GiB */
  capacity: Scalars['ConfigUint32'];
  /** name of the volume, changing it will cause data loss */
  name: Scalars['ConfigRunServiceName'];
  path: Scalars['String'];
};

export type ConfigRunServiceResourcesStorageComparisonExp = {
  _and?: InputMaybe<Array<ConfigRunServiceResourcesStorageComparisonExp>>;
  _not?: InputMaybe<ConfigRunServiceResourcesStorageComparisonExp>;
  _or?: InputMaybe<Array<ConfigRunServiceResourcesStorageComparisonExp>>;
  capacity?: InputMaybe<ConfigUint32ComparisonExp>;
  name?: InputMaybe<ConfigRunServiceNameComparisonExp>;
  path?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigRunServiceResourcesStorageInsertInput = {
  capacity: Scalars['ConfigUint32'];
  name: Scalars['ConfigRunServiceName'];
  path: Scalars['String'];
};

export type ConfigRunServiceResourcesStorageUpdateInput = {
  capacity?: InputMaybe<Scalars['ConfigUint32']>;
  name?: InputMaybe<Scalars['ConfigRunServiceName']>;
  path?: InputMaybe<Scalars['String']>;
};

export type ConfigRunServiceResourcesUpdateInput = {
  autoscaler?: InputMaybe<ConfigAutoscalerUpdateInput>;
  compute?: InputMaybe<ConfigComputeResourcesUpdateInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
  storage?: InputMaybe<Array<ConfigRunServiceResourcesStorageUpdateInput>>;
};

export type ConfigSms = {
  __typename?: 'ConfigSms';
  accountSid: Scalars['String'];
  authToken: Scalars['String'];
  messagingServiceId: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type ConfigSmsComparisonExp = {
  _and?: InputMaybe<Array<ConfigSmsComparisonExp>>;
  _not?: InputMaybe<ConfigSmsComparisonExp>;
  _or?: InputMaybe<Array<ConfigSmsComparisonExp>>;
  accountSid?: InputMaybe<ConfigStringComparisonExp>;
  authToken?: InputMaybe<ConfigStringComparisonExp>;
  messagingServiceId?: InputMaybe<ConfigStringComparisonExp>;
  provider?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSmsInsertInput = {
  accountSid: Scalars['String'];
  authToken: Scalars['String'];
  messagingServiceId: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type ConfigSmsUpdateInput = {
  accountSid?: InputMaybe<Scalars['String']>;
  authToken?: InputMaybe<Scalars['String']>;
  messagingServiceId?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type ConfigSmtp = {
  __typename?: 'ConfigSmtp';
  host: Scalars['String'];
  method: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['ConfigPort'];
  secure: Scalars['Boolean'];
  sender: Scalars['String'];
  user: Scalars['String'];
};

export type ConfigSmtpComparisonExp = {
  _and?: InputMaybe<Array<ConfigSmtpComparisonExp>>;
  _not?: InputMaybe<ConfigSmtpComparisonExp>;
  _or?: InputMaybe<Array<ConfigSmtpComparisonExp>>;
  host?: InputMaybe<ConfigStringComparisonExp>;
  method?: InputMaybe<ConfigStringComparisonExp>;
  password?: InputMaybe<ConfigStringComparisonExp>;
  port?: InputMaybe<ConfigPortComparisonExp>;
  secure?: InputMaybe<ConfigBooleanComparisonExp>;
  sender?: InputMaybe<ConfigStringComparisonExp>;
  user?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSmtpInsertInput = {
  host: Scalars['String'];
  method: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['ConfigPort'];
  secure: Scalars['Boolean'];
  sender: Scalars['String'];
  user: Scalars['String'];
};

export type ConfigSmtpUpdateInput = {
  host?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['ConfigPort']>;
  secure?: InputMaybe<Scalars['Boolean']>;
  sender?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ConfigStandardOauthProvider = {
  __typename?: 'ConfigStandardOauthProvider';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderComparisonExp = {
  _and?: InputMaybe<Array<ConfigStandardOauthProviderComparisonExp>>;
  _not?: InputMaybe<ConfigStandardOauthProviderComparisonExp>;
  _or?: InputMaybe<Array<ConfigStandardOauthProviderComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigStandardOauthProviderInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderWithScope = {
  __typename?: 'ConfigStandardOauthProviderWithScope';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  scope?: Maybe<Array<Scalars['String']>>;
};

export type ConfigStandardOauthProviderWithScopeComparisonExp = {
  _and?: InputMaybe<Array<ConfigStandardOauthProviderWithScopeComparisonExp>>;
  _not?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  _or?: InputMaybe<Array<ConfigStandardOauthProviderWithScopeComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  scope?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigStandardOauthProviderWithScopeInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigStandardOauthProviderWithScopeUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
};

/** Configuration for storage service */
export type ConfigStorage = {
  __typename?: 'ConfigStorage';
  antivirus?: Maybe<ConfigStorageAntivirus>;
  /**
   * Networking (custom domains at the moment) are not allowed as we need to do further
   * configurations in the CDN. We will enable it again in the future.
   */
  resources?: Maybe<ConfigResources>;
  /**
   * Version of storage service, you can see available versions in the URL below:
   * https://hub.docker.com/r/nhost/hasura-storage/tags
   *
   * Releases:
   *
   * https://github.com/nhost/hasura-storage/releases
   */
  version?: Maybe<Scalars['String']>;
};

export type ConfigStorageAntivirus = {
  __typename?: 'ConfigStorageAntivirus';
  server?: Maybe<Scalars['String']>;
};

export type ConfigStorageAntivirusComparisonExp = {
  _and?: InputMaybe<Array<ConfigStorageAntivirusComparisonExp>>;
  _not?: InputMaybe<ConfigStorageAntivirusComparisonExp>;
  _or?: InputMaybe<Array<ConfigStorageAntivirusComparisonExp>>;
  server?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigStorageAntivirusInsertInput = {
  server?: InputMaybe<Scalars['String']>;
};

export type ConfigStorageAntivirusUpdateInput = {
  server?: InputMaybe<Scalars['String']>;
};

export type ConfigStorageComparisonExp = {
  _and?: InputMaybe<Array<ConfigStorageComparisonExp>>;
  _not?: InputMaybe<ConfigStorageComparisonExp>;
  _or?: InputMaybe<Array<ConfigStorageComparisonExp>>;
  antivirus?: InputMaybe<ConfigStorageAntivirusComparisonExp>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigStorageInsertInput = {
  antivirus?: InputMaybe<ConfigStorageAntivirusInsertInput>;
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigStorageUpdateInput = {
  antivirus?: InputMaybe<ConfigStorageAntivirusUpdateInput>;
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigStringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigSystemConfig = {
  __typename?: 'ConfigSystemConfig';
  auth?: Maybe<ConfigSystemConfigAuth>;
  graphql?: Maybe<ConfigSystemConfigGraphql>;
  postgres: ConfigSystemConfigPostgres;
};

export type ConfigSystemConfigAuth = {
  __typename?: 'ConfigSystemConfigAuth';
  email?: Maybe<ConfigSystemConfigAuthEmail>;
};

export type ConfigSystemConfigAuthComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthComparisonExp>>;
  email?: InputMaybe<ConfigSystemConfigAuthEmailComparisonExp>;
};

export type ConfigSystemConfigAuthEmail = {
  __typename?: 'ConfigSystemConfigAuthEmail';
  templates?: Maybe<ConfigSystemConfigAuthEmailTemplates>;
};

export type ConfigSystemConfigAuthEmailComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthEmailComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthEmailComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthEmailComparisonExp>>;
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesComparisonExp>;
};

export type ConfigSystemConfigAuthEmailInsertInput = {
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesInsertInput>;
};

export type ConfigSystemConfigAuthEmailTemplates = {
  __typename?: 'ConfigSystemConfigAuthEmailTemplates';
  s3Key?: Maybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailTemplatesComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthEmailTemplatesComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthEmailTemplatesComparisonExp>>;
  s3Key?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigAuthEmailTemplatesInsertInput = {
  s3Key?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailTemplatesUpdateInput = {
  s3Key?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailUpdateInput = {
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesUpdateInput>;
};

export type ConfigSystemConfigAuthInsertInput = {
  email?: InputMaybe<ConfigSystemConfigAuthEmailInsertInput>;
};

export type ConfigSystemConfigAuthUpdateInput = {
  email?: InputMaybe<ConfigSystemConfigAuthEmailUpdateInput>;
};

export type ConfigSystemConfigComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigComparisonExp>>;
  auth?: InputMaybe<ConfigSystemConfigAuthComparisonExp>;
  graphql?: InputMaybe<ConfigSystemConfigGraphqlComparisonExp>;
  postgres?: InputMaybe<ConfigSystemConfigPostgresComparisonExp>;
};

export type ConfigSystemConfigGraphql = {
  __typename?: 'ConfigSystemConfigGraphql';
  /**
   * manually enable graphi on a per-service basis
   * by default it follows the plan
   */
  featureAdvancedGraphql?: Maybe<Scalars['Boolean']>;
};

export type ConfigSystemConfigGraphqlComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigGraphqlComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigGraphqlComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigGraphqlComparisonExp>>;
  featureAdvancedGraphql?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigSystemConfigGraphqlInsertInput = {
  featureAdvancedGraphql?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigSystemConfigGraphqlUpdateInput = {
  featureAdvancedGraphql?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigSystemConfigInsertInput = {
  auth?: InputMaybe<ConfigSystemConfigAuthInsertInput>;
  graphql?: InputMaybe<ConfigSystemConfigGraphqlInsertInput>;
  postgres: ConfigSystemConfigPostgresInsertInput;
};

export type ConfigSystemConfigPostgres = {
  __typename?: 'ConfigSystemConfigPostgres';
  connectionString: ConfigSystemConfigPostgresConnectionString;
  database: Scalars['String'];
  disk?: Maybe<ConfigSystemConfigPostgresDisk>;
  enabled?: Maybe<Scalars['Boolean']>;
  majorVersion?: Maybe<Scalars['String']>;
};

export type ConfigSystemConfigPostgresComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigPostgresComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigPostgresComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigPostgresComparisonExp>>;
  connectionString?: InputMaybe<ConfigSystemConfigPostgresConnectionStringComparisonExp>;
  database?: InputMaybe<ConfigStringComparisonExp>;
  disk?: InputMaybe<ConfigSystemConfigPostgresDiskComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  majorVersion?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigPostgresConnectionString = {
  __typename?: 'ConfigSystemConfigPostgresConnectionString';
  auth: Scalars['String'];
  backup: Scalars['String'];
  hasura: Scalars['String'];
  storage: Scalars['String'];
};

export type ConfigSystemConfigPostgresConnectionStringComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigPostgresConnectionStringComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigPostgresConnectionStringComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigPostgresConnectionStringComparisonExp>>;
  auth?: InputMaybe<ConfigStringComparisonExp>;
  backup?: InputMaybe<ConfigStringComparisonExp>;
  hasura?: InputMaybe<ConfigStringComparisonExp>;
  storage?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigPostgresConnectionStringInsertInput = {
  auth: Scalars['String'];
  backup: Scalars['String'];
  hasura: Scalars['String'];
  storage: Scalars['String'];
};

export type ConfigSystemConfigPostgresConnectionStringUpdateInput = {
  auth?: InputMaybe<Scalars['String']>;
  backup?: InputMaybe<Scalars['String']>;
  hasura?: InputMaybe<Scalars['String']>;
  storage?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigPostgresDisk = {
  __typename?: 'ConfigSystemConfigPostgresDisk';
  iops?: Maybe<Scalars['ConfigUint32']>;
  tput?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigSystemConfigPostgresDiskComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigPostgresDiskComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigPostgresDiskComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigPostgresDiskComparisonExp>>;
  iops?: InputMaybe<ConfigUint32ComparisonExp>;
  tput?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigSystemConfigPostgresDiskInsertInput = {
  iops?: InputMaybe<Scalars['ConfigUint32']>;
  tput?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigSystemConfigPostgresDiskUpdateInput = {
  iops?: InputMaybe<Scalars['ConfigUint32']>;
  tput?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigSystemConfigPostgresInsertInput = {
  connectionString: ConfigSystemConfigPostgresConnectionStringInsertInput;
  database: Scalars['String'];
  disk?: InputMaybe<ConfigSystemConfigPostgresDiskInsertInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  majorVersion?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigPostgresUpdateInput = {
  connectionString?: InputMaybe<ConfigSystemConfigPostgresConnectionStringUpdateInput>;
  database?: InputMaybe<Scalars['String']>;
  disk?: InputMaybe<ConfigSystemConfigPostgresDiskUpdateInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  majorVersion?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigUpdateInput = {
  auth?: InputMaybe<ConfigSystemConfigAuthUpdateInput>;
  graphql?: InputMaybe<ConfigSystemConfigGraphqlUpdateInput>;
  postgres?: InputMaybe<ConfigSystemConfigPostgresUpdateInput>;
};

export type ConfigUint8ComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUint8']>;
  _in?: InputMaybe<Array<Scalars['ConfigUint8']>>;
  _neq?: InputMaybe<Scalars['ConfigUint8']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUint8']>>;
};

export type ConfigUint32ComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUint32']>;
  _in?: InputMaybe<Array<Scalars['ConfigUint32']>>;
  _neq?: InputMaybe<Scalars['ConfigUint32']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUint32']>>;
};

export type ConfigUintComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUint']>;
  _in?: InputMaybe<Array<Scalars['ConfigUint']>>;
  _neq?: InputMaybe<Scalars['ConfigUint']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUint']>>;
};

export type ConfigUrlComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUrl']>;
  _in?: InputMaybe<Array<Scalars['ConfigUrl']>>;
  _neq?: InputMaybe<Scalars['ConfigUrl']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigUserRoleComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUserRole']>;
  _in?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  _neq?: InputMaybe<Scalars['ConfigUserRole']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
};

export type ContainerError = {
  __typename?: 'ContainerError';
  lastError: LastError;
  name: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  Amount: Scalars['float64'];
  Description: Scalars['String'];
};

export type InvoiceSummary = {
  __typename?: 'InvoiceSummary';
  AmountDue: Scalars['float64'];
  PeriodEnd: Scalars['Timestamp'];
  items: Array<InvoiceItem>;
};

export type LastError = {
  __typename?: 'LastError';
  exitCode: Scalars['Int'];
  message: Scalars['String'];
  reason: Scalars['String'];
};

export type Log = {
  __typename?: 'Log';
  log: Scalars['String'];
  service: Scalars['String'];
  timestamp: Scalars['Timestamp'];
};

export type Metrics = {
  __typename?: 'Metrics';
  value: Scalars['float64'];
};

export type ProjectStatusResponse = {
  __typename?: 'ProjectStatusResponse';
  services: Array<ServiceStatus>;
};

export type ReplicaStatus = {
  __typename?: 'ReplicaStatus';
  date: Scalars['Timestamp'];
  errors: Array<ContainerError>;
  ready: Scalars['Boolean'];
};

export enum ServiceState {
  Error = 'Error',
  None = 'None',
  Running = 'Running',
  UpdateError = 'UpdateError',
  Updating = 'Updating'
}

export type ServiceStatus = {
  __typename?: 'ServiceStatus';
  name: Scalars['String'];
  replicas: Array<ReplicaStatus>;
  state: ServiceState;
};

export type StatsLiveApps = {
  __typename?: 'StatsLiveApps';
  appID: Array<Scalars['uuid']>;
  count: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type UsageSummary = {
  __typename?: 'UsageSummary';
  EgressBytes: Scalars['float64'];
  EgressCDNBytes: Scalars['float64'];
  EgressPgbouncerBytes: Scalars['float64'];
  LambdaUsageSeconds: Scalars['float64'];
  appID: Scalars['uuid'];
};

/** columns and relationships of "graphite.assistants" */
export type _GraphiteAssistants = {
  __typename?: '_graphiteAssistants';
  assistantID?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  data?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "graphite.assistants" */
export type _GraphiteAssistantsDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "graphite.assistants" */
export type _GraphiteAssistants_Aggregate = {
  __typename?: '_graphiteAssistants_aggregate';
  aggregate?: Maybe<_GraphiteAssistants_Aggregate_Fields>;
  nodes: Array<_GraphiteAssistants>;
};

/** aggregate fields of "graphite.assistants" */
export type _GraphiteAssistants_Aggregate_Fields = {
  __typename?: '_graphiteAssistants_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_GraphiteAssistants_Max_Fields>;
  min?: Maybe<_GraphiteAssistants_Min_Fields>;
};


/** aggregate fields of "graphite.assistants" */
export type _GraphiteAssistants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type _GraphiteAssistants_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "graphite.assistants". All fields are combined with a logical 'AND'. */
export type _GraphiteAssistants_Bool_Exp = {
  _and?: InputMaybe<Array<_GraphiteAssistants_Bool_Exp>>;
  _not?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
  _or?: InputMaybe<Array<_GraphiteAssistants_Bool_Exp>>;
  assistantID?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "graphite.assistants" */
export enum _GraphiteAssistants_Constraint {
  /** unique or primary key constraint on columns "assistant_id" */
  AssistantsAssistantIdKey = 'assistants_assistant_id_key',
  /** unique or primary key constraint on columns "id" */
  AssistantsPkey = 'assistants_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type _GraphiteAssistants_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type _GraphiteAssistants_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type _GraphiteAssistants_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "graphite.assistants" */
export type _GraphiteAssistants_Insert_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type _GraphiteAssistants_Max_Fields = {
  __typename?: '_graphiteAssistants_max_fields';
  assistantID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type _GraphiteAssistants_Min_Fields = {
  __typename?: '_graphiteAssistants_min_fields';
  assistantID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "graphite.assistants" */
export type _GraphiteAssistants_Mutation_Response = {
  __typename?: '_graphiteAssistants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_GraphiteAssistants>;
};

/** on_conflict condition type for table "graphite.assistants" */
export type _GraphiteAssistants_On_Conflict = {
  constraint: _GraphiteAssistants_Constraint;
  update_columns?: Array<_GraphiteAssistants_Update_Column>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};

/** Ordering options when selecting data from "graphite.assistants". */
export type _GraphiteAssistants_Order_By = {
  assistantID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graphite.assistants */
export type _GraphiteAssistants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type _GraphiteAssistants_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "graphite.assistants" */
export enum _GraphiteAssistants_Select_Column {
  /** column name */
  AssistantId = 'assistantID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "graphite.assistants" */
export type _GraphiteAssistants_Set_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "_graphiteAssistants" */
export type _GraphiteAssistants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _GraphiteAssistants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _GraphiteAssistants_Stream_Cursor_Value_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  data?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "graphite.assistants" */
export enum _GraphiteAssistants_Update_Column {
  /** column name */
  AssistantId = 'assistantID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'user_id'
}

export type _GraphiteAssistants_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<_GraphiteAssistants_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<_GraphiteAssistants_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<_GraphiteAssistants_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<_GraphiteAssistants_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<_GraphiteAssistants_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_GraphiteAssistants_Set_Input>;
  /** filter the rows which have to be updated */
  where: _GraphiteAssistants_Bool_Exp;
};

/** columns and relationships of "graphite.files" */
export type _GraphiteFiles = {
  __typename?: '_graphiteFiles';
  createdAt: Scalars['timestamptz'];
  fileID?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  storageFileID?: Maybe<Scalars['uuid']>;
  updatedAt: Scalars['timestamptz'];
  vectorStoreID?: Maybe<Scalars['String']>;
};

/** aggregated selection of "graphite.files" */
export type _GraphiteFiles_Aggregate = {
  __typename?: '_graphiteFiles_aggregate';
  aggregate?: Maybe<_GraphiteFiles_Aggregate_Fields>;
  nodes: Array<_GraphiteFiles>;
};

/** aggregate fields of "graphite.files" */
export type _GraphiteFiles_Aggregate_Fields = {
  __typename?: '_graphiteFiles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_GraphiteFiles_Max_Fields>;
  min?: Maybe<_GraphiteFiles_Min_Fields>;
};


/** aggregate fields of "graphite.files" */
export type _GraphiteFiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_GraphiteFiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "graphite.files". All fields are combined with a logical 'AND'. */
export type _GraphiteFiles_Bool_Exp = {
  _and?: InputMaybe<Array<_GraphiteFiles_Bool_Exp>>;
  _not?: InputMaybe<_GraphiteFiles_Bool_Exp>;
  _or?: InputMaybe<Array<_GraphiteFiles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  fileID?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  storageFileID?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vectorStoreID?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "graphite.files" */
export enum _GraphiteFiles_Constraint {
  /** unique or primary key constraint on columns "file_id" */
  FilesFileIdKey = 'files_file_id_key',
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey',
  /** unique or primary key constraint on columns "storage_file_id" */
  FilesStorageFileIdKey = 'files_storage_file_id_key'
}

/** input type for inserting data into table "graphite.files" */
export type _GraphiteFiles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileID?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  storageFileID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vectorStoreID?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _GraphiteFiles_Max_Fields = {
  __typename?: '_graphiteFiles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileID?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  storageFileID?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vectorStoreID?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _GraphiteFiles_Min_Fields = {
  __typename?: '_graphiteFiles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileID?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  storageFileID?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vectorStoreID?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "graphite.files" */
export type _GraphiteFiles_Mutation_Response = {
  __typename?: '_graphiteFiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_GraphiteFiles>;
};

/** on_conflict condition type for table "graphite.files" */
export type _GraphiteFiles_On_Conflict = {
  constraint: _GraphiteFiles_Constraint;
  update_columns?: Array<_GraphiteFiles_Update_Column>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};

/** Ordering options when selecting data from "graphite.files". */
export type _GraphiteFiles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileID?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storageFileID?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vectorStoreID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graphite.files */
export type _GraphiteFiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "graphite.files" */
export enum _GraphiteFiles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileID',
  /** column name */
  Id = 'id',
  /** column name */
  StorageFileId = 'storageFileID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VectorStoreId = 'vectorStoreID'
}

/** input type for updating data in table "graphite.files" */
export type _GraphiteFiles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileID?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  storageFileID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vectorStoreID?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "_graphiteFiles" */
export type _GraphiteFiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _GraphiteFiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _GraphiteFiles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileID?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  storageFileID?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vectorStoreID?: InputMaybe<Scalars['String']>;
};

/** update columns of table "graphite.files" */
export enum _GraphiteFiles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileID',
  /** column name */
  Id = 'id',
  /** column name */
  StorageFileId = 'storageFileID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VectorStoreId = 'vectorStoreID'
}

export type _GraphiteFiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_GraphiteFiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: _GraphiteFiles_Bool_Exp;
};

/** columns and relationships of "graphite.sessions" */
export type _GraphiteSessions = {
  __typename?: '_graphiteSessions';
  assistantID?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  sessionID?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  userID?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "graphite.sessions" */
export type _GraphiteSessions_Aggregate = {
  __typename?: '_graphiteSessions_aggregate';
  aggregate?: Maybe<_GraphiteSessions_Aggregate_Fields>;
  nodes: Array<_GraphiteSessions>;
};

/** aggregate fields of "graphite.sessions" */
export type _GraphiteSessions_Aggregate_Fields = {
  __typename?: '_graphiteSessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_GraphiteSessions_Max_Fields>;
  min?: Maybe<_GraphiteSessions_Min_Fields>;
};


/** aggregate fields of "graphite.sessions" */
export type _GraphiteSessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "graphite.sessions". All fields are combined with a logical 'AND'. */
export type _GraphiteSessions_Bool_Exp = {
  _and?: InputMaybe<Array<_GraphiteSessions_Bool_Exp>>;
  _not?: InputMaybe<_GraphiteSessions_Bool_Exp>;
  _or?: InputMaybe<Array<_GraphiteSessions_Bool_Exp>>;
  assistantID?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionID?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userID?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "graphite.sessions" */
export enum _GraphiteSessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey',
  /** unique or primary key constraint on columns "session_id" */
  SessionsSessionIdKey = 'sessions_session_id_key'
}

/** input type for inserting data into table "graphite.sessions" */
export type _GraphiteSessions_Insert_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionID?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userID?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type _GraphiteSessions_Max_Fields = {
  __typename?: '_graphiteSessions_max_fields';
  assistantID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionID?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userID?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type _GraphiteSessions_Min_Fields = {
  __typename?: '_graphiteSessions_min_fields';
  assistantID?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionID?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userID?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "graphite.sessions" */
export type _GraphiteSessions_Mutation_Response = {
  __typename?: '_graphiteSessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_GraphiteSessions>;
};

/** on_conflict condition type for table "graphite.sessions" */
export type _GraphiteSessions_On_Conflict = {
  constraint: _GraphiteSessions_Constraint;
  update_columns?: Array<_GraphiteSessions_Update_Column>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};

/** Ordering options when selecting data from "graphite.sessions". */
export type _GraphiteSessions_Order_By = {
  assistantID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionID?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graphite.sessions */
export type _GraphiteSessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "graphite.sessions" */
export enum _GraphiteSessions_Select_Column {
  /** column name */
  AssistantId = 'assistantID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'sessionID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userID'
}

/** input type for updating data in table "graphite.sessions" */
export type _GraphiteSessions_Set_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionID?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userID?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "_graphiteSessions" */
export type _GraphiteSessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _GraphiteSessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _GraphiteSessions_Stream_Cursor_Value_Input = {
  assistantID?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionID?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userID?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "graphite.sessions" */
export enum _GraphiteSessions_Update_Column {
  /** column name */
  AssistantId = 'assistantID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'sessionID',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userID'
}

export type _GraphiteSessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_GraphiteSessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: _GraphiteSessions_Bool_Exp;
};

/** columns and relationships of "announcements" */
export type Announcements = {
  __typename?: 'announcements';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  expiresAt?: Maybe<Scalars['timestamptz']>;
  href: Scalars['String'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "announcements" */
export type Announcements_Aggregate = {
  __typename?: 'announcements_aggregate';
  aggregate?: Maybe<Announcements_Aggregate_Fields>;
  nodes: Array<Announcements>;
};

/** aggregate fields of "announcements" */
export type Announcements_Aggregate_Fields = {
  __typename?: 'announcements_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Announcements_Max_Fields>;
  min?: Maybe<Announcements_Min_Fields>;
};


/** aggregate fields of "announcements" */
export type Announcements_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Announcements_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "announcements". All fields are combined with a logical 'AND'. */
export type Announcements_Bool_Exp = {
  _and?: InputMaybe<Array<Announcements_Bool_Exp>>;
  _not?: InputMaybe<Announcements_Bool_Exp>;
  _or?: InputMaybe<Array<Announcements_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  href?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "announcements" */
export enum Announcements_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnnouncementsPkey = 'announcements_pkey'
}

/** input type for inserting data into table "announcements" */
export type Announcements_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Announcements_Max_Fields = {
  __typename?: 'announcements_max_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Announcements_Min_Fields = {
  __typename?: 'announcements_min_fields';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "announcements" */
export type Announcements_Mutation_Response = {
  __typename?: 'announcements_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Announcements>;
};

/** on_conflict condition type for table "announcements" */
export type Announcements_On_Conflict = {
  constraint: Announcements_Constraint;
  update_columns?: Array<Announcements_Update_Column>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};

/** Ordering options when selecting data from "announcements". */
export type Announcements_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  href?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: announcements */
export type Announcements_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "announcements" */
export enum Announcements_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "announcements" */
export type Announcements_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "announcements" */
export type Announcements_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Announcements_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Announcements_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "announcements" */
export enum Announcements_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Href = 'href',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Announcements_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Announcements_Set_Input>;
  /** filter the rows which have to be updated */
  where: Announcements_Bool_Exp;
};

/** columns and relationships of "app_state_history" */
export type AppStateHistory = {
  __typename?: 'appStateHistory';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  /** An object relationship */
  appState: AppStates;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
  stateId: Scalars['Int'];
};

/** aggregated selection of "app_state_history" */
export type AppStateHistory_Aggregate = {
  __typename?: 'appStateHistory_aggregate';
  aggregate?: Maybe<AppStateHistory_Aggregate_Fields>;
  nodes: Array<AppStateHistory>;
};

export type AppStateHistory_Aggregate_Bool_Exp = {
  count?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp_Count>;
};

export type AppStateHistory_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AppStateHistory_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app_state_history" */
export type AppStateHistory_Aggregate_Fields = {
  __typename?: 'appStateHistory_aggregate_fields';
  avg?: Maybe<AppStateHistory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AppStateHistory_Max_Fields>;
  min?: Maybe<AppStateHistory_Min_Fields>;
  stddev?: Maybe<AppStateHistory_Stddev_Fields>;
  stddev_pop?: Maybe<AppStateHistory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AppStateHistory_Stddev_Samp_Fields>;
  sum?: Maybe<AppStateHistory_Sum_Fields>;
  var_pop?: Maybe<AppStateHistory_Var_Pop_Fields>;
  var_samp?: Maybe<AppStateHistory_Var_Samp_Fields>;
  variance?: Maybe<AppStateHistory_Variance_Fields>;
};


/** aggregate fields of "app_state_history" */
export type AppStateHistory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app_state_history" */
export type AppStateHistory_Aggregate_Order_By = {
  avg?: InputMaybe<AppStateHistory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AppStateHistory_Max_Order_By>;
  min?: InputMaybe<AppStateHistory_Min_Order_By>;
  stddev?: InputMaybe<AppStateHistory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AppStateHistory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AppStateHistory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AppStateHistory_Sum_Order_By>;
  var_pop?: InputMaybe<AppStateHistory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AppStateHistory_Var_Samp_Order_By>;
  variance?: InputMaybe<AppStateHistory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app_state_history" */
export type AppStateHistory_Arr_Rel_Insert_Input = {
  data: Array<AppStateHistory_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};

/** aggregate avg on columns */
export type AppStateHistory_Avg_Fields = {
  __typename?: 'appStateHistory_avg_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "app_state_history" */
export type AppStateHistory_Avg_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app_state_history". All fields are combined with a logical 'AND'. */
export type AppStateHistory_Bool_Exp = {
  _and?: InputMaybe<Array<AppStateHistory_Bool_Exp>>;
  _not?: InputMaybe<AppStateHistory_Bool_Exp>;
  _or?: InputMaybe<Array<AppStateHistory_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  appState?: InputMaybe<AppStates_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  stateId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_state_history" */
export enum AppStateHistory_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppStateHistoryPkey = 'app_state_history_pkey'
}

/** input type for incrementing numeric columns in table "app_state_history" */
export type AppStateHistory_Inc_Input = {
  stateId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_state_history" */
export type AppStateHistory_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  appState?: InputMaybe<AppStates_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type AppStateHistory_Max_Fields = {
  __typename?: 'appStateHistory_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "app_state_history" */
export type AppStateHistory_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AppStateHistory_Min_Fields = {
  __typename?: 'appStateHistory_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "app_state_history" */
export type AppStateHistory_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app_state_history" */
export type AppStateHistory_Mutation_Response = {
  __typename?: 'appStateHistory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AppStateHistory>;
};

/** on_conflict condition type for table "app_state_history" */
export type AppStateHistory_On_Conflict = {
  constraint: AppStateHistory_Constraint;
  update_columns?: Array<AppStateHistory_Update_Column>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};

/** Ordering options when selecting data from "app_state_history". */
export type AppStateHistory_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  appState?: InputMaybe<AppStates_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_state_history */
export type AppStateHistory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app_state_history" */
export enum AppStateHistory_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  StateId = 'stateId'
}

/** input type for updating data in table "app_state_history" */
export type AppStateHistory_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type AppStateHistory_Stddev_Fields = {
  __typename?: 'appStateHistory_stddev_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AppStateHistory_Stddev_Pop_Fields = {
  __typename?: 'appStateHistory_stddev_pop_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Pop_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AppStateHistory_Stddev_Samp_Fields = {
  __typename?: 'appStateHistory_stddev_samp_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Samp_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "appStateHistory" */
export type AppStateHistory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AppStateHistory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStateHistory_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type AppStateHistory_Sum_Fields = {
  __typename?: 'appStateHistory_sum_fields';
  stateId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "app_state_history" */
export type AppStateHistory_Sum_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** update columns of table "app_state_history" */
export enum AppStateHistory_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  StateId = 'stateId'
}

export type AppStateHistory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  /** filter the rows which have to be updated */
  where: AppStateHistory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AppStateHistory_Var_Pop_Fields = {
  __typename?: 'appStateHistory_var_pop_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "app_state_history" */
export type AppStateHistory_Var_Pop_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AppStateHistory_Var_Samp_Fields = {
  __typename?: 'appStateHistory_var_samp_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "app_state_history" */
export type AppStateHistory_Var_Samp_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AppStateHistory_Variance_Fields = {
  __typename?: 'appStateHistory_variance_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "app_state_history" */
export type AppStateHistory_Variance_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** columns and relationships of "app_states" */
export type AppStates = {
  __typename?: 'appStates';
  /** An array relationship */
  appStates: Array<AppStateHistory>;
  /** An aggregate relationship */
  appStates_aggregate: AppStateHistory_Aggregate;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "app_states" */
export type AppStatesAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesAppStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "app_states" */
export type AppStates_Aggregate = {
  __typename?: 'appStates_aggregate';
  aggregate?: Maybe<AppStates_Aggregate_Fields>;
  nodes: Array<AppStates>;
};

/** aggregate fields of "app_states" */
export type AppStates_Aggregate_Fields = {
  __typename?: 'appStates_aggregate_fields';
  avg?: Maybe<AppStates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AppStates_Max_Fields>;
  min?: Maybe<AppStates_Min_Fields>;
  stddev?: Maybe<AppStates_Stddev_Fields>;
  stddev_pop?: Maybe<AppStates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AppStates_Stddev_Samp_Fields>;
  sum?: Maybe<AppStates_Sum_Fields>;
  var_pop?: Maybe<AppStates_Var_Pop_Fields>;
  var_samp?: Maybe<AppStates_Var_Samp_Fields>;
  variance?: Maybe<AppStates_Variance_Fields>;
};


/** aggregate fields of "app_states" */
export type AppStates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AppStates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type AppStates_Avg_Fields = {
  __typename?: 'appStates_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "app_states". All fields are combined with a logical 'AND'. */
export type AppStates_Bool_Exp = {
  _and?: InputMaybe<Array<AppStates_Bool_Exp>>;
  _not?: InputMaybe<AppStates_Bool_Exp>;
  _or?: InputMaybe<Array<AppStates_Bool_Exp>>;
  appStates?: InputMaybe<AppStateHistory_Bool_Exp>;
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_states" */
export enum AppStates_Constraint {
  /** unique or primary key constraint on columns "name" */
  AppStatesNameKey = 'app_states_name_key',
  /** unique or primary key constraint on columns "id" */
  AppStatesPkey = 'app_states_pkey'
}

/** input type for incrementing numeric columns in table "app_states" */
export type AppStates_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_states" */
export type AppStates_Insert_Input = {
  appStates?: InputMaybe<AppStateHistory_Arr_Rel_Insert_Input>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AppStates_Max_Fields = {
  __typename?: 'appStates_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AppStates_Min_Fields = {
  __typename?: 'appStates_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app_states" */
export type AppStates_Mutation_Response = {
  __typename?: 'appStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AppStates>;
};

/** input type for inserting object relation for remote table "app_states" */
export type AppStates_Obj_Rel_Insert_Input = {
  data: AppStates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};

/** on_conflict condition type for table "app_states" */
export type AppStates_On_Conflict = {
  constraint: AppStates_Constraint;
  update_columns?: Array<AppStates_Update_Column>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};

/** Ordering options when selecting data from "app_states". */
export type AppStates_Order_By = {
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_states */
export type AppStates_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "app_states" */
export enum AppStates_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "app_states" */
export type AppStates_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type AppStates_Stddev_Fields = {
  __typename?: 'appStates_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AppStates_Stddev_Pop_Fields = {
  __typename?: 'appStates_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AppStates_Stddev_Samp_Fields = {
  __typename?: 'appStates_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "appStates" */
export type AppStates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AppStates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStates_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type AppStates_Sum_Fields = {
  __typename?: 'appStates_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "app_states" */
export enum AppStates_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type AppStates_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AppStates_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppStates_Set_Input>;
  /** filter the rows which have to be updated */
  where: AppStates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AppStates_Var_Pop_Fields = {
  __typename?: 'appStates_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AppStates_Var_Samp_Fields = {
  __typename?: 'appStates_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AppStates_Variance_Fields = {
  __typename?: 'appStates_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "apps" */
export type Apps = {
  __typename?: 'apps';
  appSecrets: Array<ConfigEnvironmentVariable>;
  /** An array relationship */
  appStates: Array<AppStateHistory>;
  /** An aggregate relationship */
  appStates_aggregate: AppStateHistory_Aggregate;
  /** An array relationship */
  backups: Array<Backups>;
  /** An aggregate relationship */
  backups_aggregate: Backups_Aggregate;
  /** An object relationship */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** An object relationship */
  billingDedicatedComputeReports?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** An object relationship */
  billingSubscriptions?: Maybe<Billing_Subscriptions>;
  config?: Maybe<ConfigConfig>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creator?: Maybe<Users>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  currentState?: Maybe<Scalars['Int']>;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** An aggregate relationship */
  deployments_aggregate: Deployments_Aggregate;
  /** An object relationship */
  desiredAppState: AppStates;
  desiredState: Scalars['Int'];
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** An aggregate relationship */
  featureFlags_aggregate: FeatureFlags_Aggregate;
  /** An object relationship */
  githubRepository?: Maybe<GithubRepositories>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  isLocked?: Maybe<Scalars['Boolean']>;
  isLockedReason?: Maybe<Scalars['String']>;
  metadataFunctions: Scalars['jsonb'];
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nhostBaseFolder: Scalars['String'];
  /** An object relationship */
  plan: Plans;
  planId: Scalars['uuid'];
  /** An object relationship */
  region: Regions;
  regionId: Scalars['uuid'];
  repositoryProductionBranch: Scalars['String'];
  /** An array relationship */
  runServices: Array<Run_Service>;
  /** An aggregate relationship */
  runServices_aggregate: Run_Service_Aggregate;
  slug: Scalars['String'];
  stateMatch?: Maybe<Scalars['Boolean']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain: Scalars['String'];
  systemConfig?: Maybe<ConfigSystemConfig>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};


/** columns and relationships of "apps" */
export type AppsAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsAppStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsBackups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsConfigArgs = {
  resolve: Scalars['Boolean'];
};


/** columns and relationships of "apps" */
export type AppsDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsDeployments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsFeatureFlags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsMetadataFunctionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "apps" */
export type AppsRunServicesArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsRunServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};

/** aggregated selection of "apps" */
export type Apps_Aggregate = {
  __typename?: 'apps_aggregate';
  aggregate?: Maybe<Apps_Aggregate_Fields>;
  nodes: Array<Apps>;
};

export type Apps_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Apps_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Apps_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Apps_Aggregate_Bool_Exp_Count>;
};

export type Apps_Aggregate_Bool_Exp_Bool_And = {
  arguments: Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apps_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apps_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Apps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "apps" */
export type Apps_Aggregate_Fields = {
  __typename?: 'apps_aggregate_fields';
  avg?: Maybe<Apps_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Apps_Max_Fields>;
  min?: Maybe<Apps_Min_Fields>;
  stddev?: Maybe<Apps_Stddev_Fields>;
  stddev_pop?: Maybe<Apps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Apps_Stddev_Samp_Fields>;
  sum?: Maybe<Apps_Sum_Fields>;
  var_pop?: Maybe<Apps_Var_Pop_Fields>;
  var_samp?: Maybe<Apps_Var_Samp_Fields>;
  variance?: Maybe<Apps_Variance_Fields>;
};


/** aggregate fields of "apps" */
export type Apps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Apps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "apps" */
export type Apps_Aggregate_Order_By = {
  avg?: InputMaybe<Apps_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Apps_Max_Order_By>;
  min?: InputMaybe<Apps_Min_Order_By>;
  stddev?: InputMaybe<Apps_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Apps_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Apps_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Apps_Sum_Order_By>;
  var_pop?: InputMaybe<Apps_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Apps_Var_Samp_Order_By>;
  variance?: InputMaybe<Apps_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Apps_Append_Input = {
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "apps" */
export type Apps_Arr_Rel_Insert_Input = {
  data: Array<Apps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};

/** aggregate avg on columns */
export type Apps_Avg_Fields = {
  __typename?: 'apps_avg_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "apps" */
export type Apps_Avg_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "apps". All fields are combined with a logical 'AND'. */
export type Apps_Bool_Exp = {
  _and?: InputMaybe<Array<Apps_Bool_Exp>>;
  _not?: InputMaybe<Apps_Bool_Exp>;
  _or?: InputMaybe<Array<Apps_Bool_Exp>>;
  appStates?: InputMaybe<AppStateHistory_Bool_Exp>;
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp>;
  backups?: InputMaybe<Backups_Bool_Exp>;
  backups_aggregate?: InputMaybe<Backups_Aggregate_Bool_Exp>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  creatorUserId?: InputMaybe<Uuid_Comparison_Exp>;
  currentState?: InputMaybe<Int_Comparison_Exp>;
  deployments?: InputMaybe<Deployments_Bool_Exp>;
  deployments_aggregate?: InputMaybe<Deployments_Aggregate_Bool_Exp>;
  desiredAppState?: InputMaybe<AppStates_Bool_Exp>;
  desiredState?: InputMaybe<Int_Comparison_Exp>;
  featureFlags?: InputMaybe<FeatureFlags_Bool_Exp>;
  featureFlags_aggregate?: InputMaybe<FeatureFlags_Aggregate_Bool_Exp>;
  githubRepository?: InputMaybe<GithubRepositories_Bool_Exp>;
  githubRepositoryId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isLocked?: InputMaybe<Boolean_Comparison_Exp>;
  isLockedReason?: InputMaybe<String_Comparison_Exp>;
  metadataFunctions?: InputMaybe<Jsonb_Comparison_Exp>;
  mimirConfigEnc?: InputMaybe<String_Comparison_Exp>;
  mimirSecretsEnc?: InputMaybe<String_Comparison_Exp>;
  mimirSystemConfigEnc?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nhostBaseFolder?: InputMaybe<String_Comparison_Exp>;
  plan?: InputMaybe<Plans_Bool_Exp>;
  planId?: InputMaybe<Uuid_Comparison_Exp>;
  region?: InputMaybe<Regions_Bool_Exp>;
  regionId?: InputMaybe<Uuid_Comparison_Exp>;
  repositoryProductionBranch?: InputMaybe<String_Comparison_Exp>;
  runServices?: InputMaybe<Run_Service_Bool_Exp>;
  runServices_aggregate?: InputMaybe<Run_Service_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  stateMatch?: InputMaybe<Boolean_Comparison_Exp>;
  stripeSubscriptionId?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "apps" */
export enum Apps_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppsPkey = 'apps_pkey',
  /** unique or primary key constraint on columns "subdomain" */
  AppsSubdomainKey = 'apps_subdomain_key',
  /** unique or primary key constraint on columns "workspace_id", "slug" */
  AppsWorkspaceIdSlugKey = 'apps_workspace_id_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Apps_Delete_At_Path_Input = {
  metadataFunctions?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Apps_Delete_Elem_Input = {
  metadataFunctions?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Apps_Delete_Key_Input = {
  metadataFunctions?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "apps" */
export type Apps_Inc_Input = {
  currentState?: InputMaybe<Scalars['Int']>;
  desiredState?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "apps" */
export type Apps_Insert_Input = {
  appStates?: InputMaybe<AppStateHistory_Arr_Rel_Insert_Input>;
  backups?: InputMaybe<Backups_Arr_Rel_Insert_Input>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Obj_Rel_Insert_Input>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Obj_Rel_Insert_Input>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  currentState?: InputMaybe<Scalars['Int']>;
  deployments?: InputMaybe<Deployments_Arr_Rel_Insert_Input>;
  desiredAppState?: InputMaybe<AppStates_Obj_Rel_Insert_Input>;
  desiredState?: InputMaybe<Scalars['Int']>;
  featureFlags?: InputMaybe<FeatureFlags_Arr_Rel_Insert_Input>;
  githubRepository?: InputMaybe<GithubRepositories_Obj_Rel_Insert_Input>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isLockedReason?: InputMaybe<Scalars['String']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  plan?: InputMaybe<Plans_Obj_Rel_Insert_Input>;
  planId?: InputMaybe<Scalars['uuid']>;
  region?: InputMaybe<Regions_Obj_Rel_Insert_Input>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  runServices?: InputMaybe<Run_Service_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Apps_Max_Fields = {
  __typename?: 'apps_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  currentState?: Maybe<Scalars['Int']>;
  desiredState?: Maybe<Scalars['Int']>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  isLockedReason?: Maybe<Scalars['String']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nhostBaseFolder?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['uuid']>;
  regionId?: Maybe<Scalars['uuid']>;
  repositoryProductionBranch?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "apps" */
export type Apps_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isLockedReason?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Apps_Min_Fields = {
  __typename?: 'apps_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  currentState?: Maybe<Scalars['Int']>;
  desiredState?: Maybe<Scalars['Int']>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  isLockedReason?: Maybe<Scalars['String']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nhostBaseFolder?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['uuid']>;
  regionId?: Maybe<Scalars['uuid']>;
  repositoryProductionBranch?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "apps" */
export type Apps_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isLockedReason?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "apps" */
export type Apps_Mutation_Response = {
  __typename?: 'apps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Apps>;
};

/** input type for inserting object relation for remote table "apps" */
export type Apps_Obj_Rel_Insert_Input = {
  data: Apps_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};

/** on_conflict condition type for table "apps" */
export type Apps_On_Conflict = {
  constraint: Apps_Constraint;
  update_columns?: Array<Apps_Update_Column>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** Ordering options when selecting data from "apps". */
export type Apps_Order_By = {
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Order_By>;
  backups_aggregate?: InputMaybe<Backups_Aggregate_Order_By>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Order_By>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Order_By>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  currentState?: InputMaybe<Order_By>;
  deployments_aggregate?: InputMaybe<Deployments_Aggregate_Order_By>;
  desiredAppState?: InputMaybe<AppStates_Order_By>;
  desiredState?: InputMaybe<Order_By>;
  featureFlags_aggregate?: InputMaybe<FeatureFlags_Aggregate_Order_By>;
  githubRepository?: InputMaybe<GithubRepositories_Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isLocked?: InputMaybe<Order_By>;
  isLockedReason?: InputMaybe<Order_By>;
  metadataFunctions?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  plan?: InputMaybe<Plans_Order_By>;
  planId?: InputMaybe<Order_By>;
  region?: InputMaybe<Regions_Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  runServices_aggregate?: InputMaybe<Run_Service_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  stateMatch?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: apps */
export type Apps_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Apps_Prepend_Input = {
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "apps" */
export enum Apps_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  CurrentState = 'currentState',
  /** column name */
  DesiredState = 'desiredState',
  /** column name */
  GithubRepositoryId = 'githubRepositoryId',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  IsLockedReason = 'isLockedReason',
  /** column name */
  MetadataFunctions = 'metadataFunctions',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  MimirSecretsEnc = 'mimirSecretsEnc',
  /** column name */
  MimirSystemConfigEnc = 'mimirSystemConfigEnc',
  /** column name */
  Name = 'name',
  /** column name */
  NhostBaseFolder = 'nhostBaseFolder',
  /** column name */
  PlanId = 'planId',
  /** column name */
  RegionId = 'regionId',
  /** column name */
  RepositoryProductionBranch = 'repositoryProductionBranch',
  /** column name */
  Slug = 'slug',
  /** column name */
  StateMatch = 'stateMatch',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "apps_aggregate_bool_exp_bool_and_arguments_columns" columns of table "apps" */
export enum Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  StateMatch = 'stateMatch'
}

/** select "apps_aggregate_bool_exp_bool_or_arguments_columns" columns of table "apps" */
export enum Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  StateMatch = 'stateMatch'
}

/** input type for updating data in table "apps" */
export type Apps_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  currentState?: InputMaybe<Scalars['Int']>;
  desiredState?: InputMaybe<Scalars['Int']>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isLockedReason?: InputMaybe<Scalars['String']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  planId?: InputMaybe<Scalars['uuid']>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Apps_Stddev_Fields = {
  __typename?: 'apps_stddev_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "apps" */
export type Apps_Stddev_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Apps_Stddev_Pop_Fields = {
  __typename?: 'apps_stddev_pop_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "apps" */
export type Apps_Stddev_Pop_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Apps_Stddev_Samp_Fields = {
  __typename?: 'apps_stddev_samp_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "apps" */
export type Apps_Stddev_Samp_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "apps" */
export type Apps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Apps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Apps_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  currentState?: InputMaybe<Scalars['Int']>;
  desiredState?: InputMaybe<Scalars['Int']>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isLocked?: InputMaybe<Scalars['Boolean']>;
  isLockedReason?: InputMaybe<Scalars['String']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  planId?: InputMaybe<Scalars['uuid']>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stateMatch?: InputMaybe<Scalars['Boolean']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Apps_Sum_Fields = {
  __typename?: 'apps_sum_fields';
  currentState?: Maybe<Scalars['Int']>;
  desiredState?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "apps" */
export type Apps_Sum_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** update columns of table "apps" */
export enum Apps_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  CurrentState = 'currentState',
  /** column name */
  DesiredState = 'desiredState',
  /** column name */
  GithubRepositoryId = 'githubRepositoryId',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  IsLockedReason = 'isLockedReason',
  /** column name */
  MetadataFunctions = 'metadataFunctions',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  MimirSecretsEnc = 'mimirSecretsEnc',
  /** column name */
  MimirSystemConfigEnc = 'mimirSystemConfigEnc',
  /** column name */
  Name = 'name',
  /** column name */
  NhostBaseFolder = 'nhostBaseFolder',
  /** column name */
  PlanId = 'planId',
  /** column name */
  RegionId = 'regionId',
  /** column name */
  RepositoryProductionBranch = 'repositoryProductionBranch',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type Apps_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Apps_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Apps_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Apps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Apps_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Apps_Var_Pop_Fields = {
  __typename?: 'apps_var_pop_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "apps" */
export type Apps_Var_Pop_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Apps_Var_Samp_Fields = {
  __typename?: 'apps_var_samp_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "apps" */
export type Apps_Var_Samp_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Apps_Variance_Fields = {
  __typename?: 'apps_variance_fields';
  currentState?: Maybe<Scalars['Float']>;
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "apps" */
export type Apps_Variance_Order_By = {
  currentState?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  metadata?: Maybe<Scalars['jsonb']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Auth_Migrations = {
  __typename?: 'auth_migrations';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "auth.migrations" */
export type Auth_Migrations_Aggregate = {
  __typename?: 'auth_migrations_aggregate';
  aggregate?: Maybe<Auth_Migrations_Aggregate_Fields>;
  nodes: Array<Auth_Migrations>;
};

/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_Fields = {
  __typename?: 'auth_migrations_aggregate_fields';
  avg?: Maybe<Auth_Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Migrations_Max_Fields>;
  min?: Maybe<Auth_Migrations_Min_Fields>;
  stddev?: Maybe<Auth_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Migrations_Sum_Fields>;
  var_pop?: Maybe<Auth_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Migrations_Var_Samp_Fields>;
  variance?: Maybe<Auth_Migrations_Variance_Fields>;
};


/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Migrations_Avg_Fields = {
  __typename?: 'auth_migrations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.migrations". All fields are combined with a logical 'AND'. */
export type Auth_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  _not?: InputMaybe<Auth_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  executed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.migrations" */
export enum Auth_Migrations_Constraint {
  /** unique or primary key constraint on columns "name" */
  MigrationsNameKey = 'migrations_name_key',
  /** unique or primary key constraint on columns "id" */
  MigrationsPkey = 'migrations_pkey'
}

/** input type for incrementing numeric columns in table "auth.migrations" */
export type Auth_Migrations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.migrations" */
export type Auth_Migrations_Insert_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Migrations_Max_Fields = {
  __typename?: 'auth_migrations_max_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Migrations_Min_Fields = {
  __typename?: 'auth_migrations_min_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.migrations" */
export type Auth_Migrations_Mutation_Response = {
  __typename?: 'auth_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Migrations>;
};

/** on_conflict condition type for table "auth.migrations" */
export type Auth_Migrations_On_Conflict = {
  constraint: Auth_Migrations_Constraint;
  update_columns?: Array<Auth_Migrations_Update_Column>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.migrations". */
export type Auth_Migrations_Order_By = {
  executed_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.migrations */
export type Auth_Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.migrations" */
export enum Auth_Migrations_Select_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "auth.migrations" */
export type Auth_Migrations_Set_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Migrations_Stddev_Fields = {
  __typename?: 'auth_migrations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Migrations_Stddev_Pop_Fields = {
  __typename?: 'auth_migrations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Migrations_Stddev_Samp_Fields = {
  __typename?: 'auth_migrations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "auth_migrations" */
export type Auth_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Migrations_Stream_Cursor_Value_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Auth_Migrations_Sum_Fields = {
  __typename?: 'auth_migrations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.migrations" */
export enum Auth_Migrations_Update_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Auth_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Migrations_Var_Pop_Fields = {
  __typename?: 'auth_migrations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Migrations_Var_Samp_Fields = {
  __typename?: 'auth_migrations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Migrations_Variance_Fields = {
  __typename?: 'auth_migrations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "backups" */
export type Backups = {
  __typename?: 'backups';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  size: Scalars['bigint'];
};

/** aggregated selection of "backups" */
export type Backups_Aggregate = {
  __typename?: 'backups_aggregate';
  aggregate?: Maybe<Backups_Aggregate_Fields>;
  nodes: Array<Backups>;
};

export type Backups_Aggregate_Bool_Exp = {
  count?: InputMaybe<Backups_Aggregate_Bool_Exp_Count>;
};

export type Backups_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Backups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Backups_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "backups" */
export type Backups_Aggregate_Fields = {
  __typename?: 'backups_aggregate_fields';
  avg?: Maybe<Backups_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Backups_Max_Fields>;
  min?: Maybe<Backups_Min_Fields>;
  stddev?: Maybe<Backups_Stddev_Fields>;
  stddev_pop?: Maybe<Backups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Backups_Stddev_Samp_Fields>;
  sum?: Maybe<Backups_Sum_Fields>;
  var_pop?: Maybe<Backups_Var_Pop_Fields>;
  var_samp?: Maybe<Backups_Var_Samp_Fields>;
  variance?: Maybe<Backups_Variance_Fields>;
};


/** aggregate fields of "backups" */
export type Backups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Backups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "backups" */
export type Backups_Aggregate_Order_By = {
  avg?: InputMaybe<Backups_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Backups_Max_Order_By>;
  min?: InputMaybe<Backups_Min_Order_By>;
  stddev?: InputMaybe<Backups_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Backups_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Backups_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Backups_Sum_Order_By>;
  var_pop?: InputMaybe<Backups_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Backups_Var_Samp_Order_By>;
  variance?: InputMaybe<Backups_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "backups" */
export type Backups_Arr_Rel_Insert_Input = {
  data: Array<Backups_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};

/** aggregate avg on columns */
export type Backups_Avg_Fields = {
  __typename?: 'backups_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "backups" */
export type Backups_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "backups". All fields are combined with a logical 'AND'. */
export type Backups_Bool_Exp = {
  _and?: InputMaybe<Array<Backups_Bool_Exp>>;
  _not?: InputMaybe<Backups_Bool_Exp>;
  _or?: InputMaybe<Array<Backups_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  completedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "backups" */
export enum Backups_Constraint {
  /** unique or primary key constraint on columns "id" */
  BackupsPkey = 'backups_pkey'
}

/** input type for incrementing numeric columns in table "backups" */
export type Backups_Inc_Input = {
  size?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "backups" */
export type Backups_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Backups_Max_Fields = {
  __typename?: 'backups_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "backups" */
export type Backups_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Backups_Min_Fields = {
  __typename?: 'backups_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "backups" */
export type Backups_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "backups" */
export type Backups_Mutation_Response = {
  __typename?: 'backups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Backups>;
};

/** on_conflict condition type for table "backups" */
export type Backups_On_Conflict = {
  constraint: Backups_Constraint;
  update_columns?: Array<Backups_Update_Column>;
  where?: InputMaybe<Backups_Bool_Exp>;
};

/** Ordering options when selecting data from "backups". */
export type Backups_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: backups */
export type Backups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "backups" */
export enum Backups_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size'
}

/** input type for updating data in table "backups" */
export type Backups_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Backups_Stddev_Fields = {
  __typename?: 'backups_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "backups" */
export type Backups_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Backups_Stddev_Pop_Fields = {
  __typename?: 'backups_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "backups" */
export type Backups_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Backups_Stddev_Samp_Fields = {
  __typename?: 'backups_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "backups" */
export type Backups_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "backups" */
export type Backups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Backups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Backups_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Backups_Sum_Fields = {
  __typename?: 'backups_sum_fields';
  size?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "backups" */
export type Backups_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "backups" */
export enum Backups_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size'
}

export type Backups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Backups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Backups_Set_Input>;
  /** filter the rows which have to be updated */
  where: Backups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Backups_Var_Pop_Fields = {
  __typename?: 'backups_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "backups" */
export type Backups_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Backups_Var_Samp_Fields = {
  __typename?: 'backups_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "backups" */
export type Backups_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Backups_Variance_Fields = {
  __typename?: 'backups_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "backups" */
export type Backups_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute = {
  __typename?: 'billing_dedicated_compute';
  /** An object relationship */
  app?: Maybe<Apps>;
  appID: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  totalMillicores: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate = {
  __typename?: 'billing_dedicated_compute_aggregate';
  aggregate?: Maybe<Billing_Dedicated_Compute_Aggregate_Fields>;
  nodes: Array<Billing_Dedicated_Compute>;
};

/** aggregate fields of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate_Fields = {
  __typename?: 'billing_dedicated_compute_aggregate_fields';
  avg?: Maybe<Billing_Dedicated_Compute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Dedicated_Compute_Max_Fields>;
  min?: Maybe<Billing_Dedicated_Compute_Min_Fields>;
  stddev?: Maybe<Billing_Dedicated_Compute_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Dedicated_Compute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Dedicated_Compute_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Dedicated_Compute_Sum_Fields>;
  var_pop?: Maybe<Billing_Dedicated_Compute_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Dedicated_Compute_Var_Samp_Fields>;
  variance?: Maybe<Billing_Dedicated_Compute_Variance_Fields>;
};


/** aggregate fields of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Dedicated_Compute_Avg_Fields = {
  __typename?: 'billing_dedicated_compute_avg_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.dedicated_compute". All fields are combined with a logical 'AND'. */
export type Billing_Dedicated_Compute_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Dedicated_Compute_Bool_Exp>>;
  _not?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Dedicated_Compute_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appID?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  totalMillicores?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Constraint {
  /** unique or primary key constraint on columns "app_id" */
  DedicatedComputeAppIdKey = 'dedicated_compute_app_id_key',
  /** unique or primary key constraint on columns "id" */
  DedicatedComputePkey = 'dedicated_compute_pkey'
}

/** input type for incrementing numeric columns in table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Inc_Input = {
  totalMillicores?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  totalMillicores?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Dedicated_Compute_Max_Fields = {
  __typename?: 'billing_dedicated_compute_max_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  totalMillicores?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Dedicated_Compute_Min_Fields = {
  __typename?: 'billing_dedicated_compute_min_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  totalMillicores?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Mutation_Response = {
  __typename?: 'billing_dedicated_compute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Dedicated_Compute>;
};

/** input type for inserting object relation for remote table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Obj_Rel_Insert_Input = {
  data: Billing_Dedicated_Compute_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};

/** on_conflict condition type for table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_On_Conflict = {
  constraint: Billing_Dedicated_Compute_Constraint;
  update_columns?: Array<Billing_Dedicated_Compute_Update_Column>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.dedicated_compute". */
export type Billing_Dedicated_Compute_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalMillicores?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.dedicated_compute */
export type Billing_Dedicated_Compute_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports = {
  __typename?: 'billing_dedicated_compute_reports';
  /** An object relationship */
  app?: Maybe<Apps>;
  app_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pending: Scalars['Boolean'];
  report_ends: Scalars['timestamptz'];
  report_starts: Scalars['timestamptz'];
  total_millicores: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate = {
  __typename?: 'billing_dedicated_compute_reports_aggregate';
  aggregate?: Maybe<Billing_Dedicated_Compute_Reports_Aggregate_Fields>;
  nodes: Array<Billing_Dedicated_Compute_Reports>;
};

/** aggregate fields of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate_Fields = {
  __typename?: 'billing_dedicated_compute_reports_aggregate_fields';
  avg?: Maybe<Billing_Dedicated_Compute_Reports_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Dedicated_Compute_Reports_Max_Fields>;
  min?: Maybe<Billing_Dedicated_Compute_Reports_Min_Fields>;
  stddev?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Dedicated_Compute_Reports_Sum_Fields>;
  var_pop?: Maybe<Billing_Dedicated_Compute_Reports_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Dedicated_Compute_Reports_Var_Samp_Fields>;
  variance?: Maybe<Billing_Dedicated_Compute_Reports_Variance_Fields>;
};


/** aggregate fields of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Dedicated_Compute_Reports_Avg_Fields = {
  __typename?: 'billing_dedicated_compute_reports_avg_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.dedicated_compute_reports". All fields are combined with a logical 'AND'. */
export type Billing_Dedicated_Compute_Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Bool_Exp>>;
  _not?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pending?: InputMaybe<Boolean_Comparison_Exp>;
  report_ends?: InputMaybe<Timestamptz_Comparison_Exp>;
  report_starts?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_millicores?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  DedicatedComputeReportsPkey = 'dedicated_compute_reports_pkey'
}

/** input type for incrementing numeric columns in table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Inc_Input = {
  total_millicores?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Dedicated_Compute_Reports_Max_Fields = {
  __typename?: 'billing_dedicated_compute_reports_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  report_ends?: Maybe<Scalars['timestamptz']>;
  report_starts?: Maybe<Scalars['timestamptz']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Dedicated_Compute_Reports_Min_Fields = {
  __typename?: 'billing_dedicated_compute_reports_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  report_ends?: Maybe<Scalars['timestamptz']>;
  report_starts?: Maybe<Scalars['timestamptz']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Mutation_Response = {
  __typename?: 'billing_dedicated_compute_reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Dedicated_Compute_Reports>;
};

/** input type for inserting object relation for remote table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Obj_Rel_Insert_Input = {
  data: Billing_Dedicated_Compute_Reports_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};

/** on_conflict condition type for table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_On_Conflict = {
  constraint: Billing_Dedicated_Compute_Reports_Constraint;
  update_columns?: Array<Billing_Dedicated_Compute_Reports_Update_Column>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.dedicated_compute_reports". */
export type Billing_Dedicated_Compute_Reports_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pending?: InputMaybe<Order_By>;
  report_ends?: InputMaybe<Order_By>;
  report_starts?: InputMaybe<Order_By>;
  total_millicores?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.dedicated_compute_reports */
export type Billing_Dedicated_Compute_Reports_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'report_ends',
  /** column name */
  ReportStarts = 'report_starts',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Dedicated_Compute_Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Dedicated_Compute_Reports_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Billing_Dedicated_Compute_Reports_Sum_Fields = {
  __typename?: 'billing_dedicated_compute_reports_sum_fields';
  total_millicores?: Maybe<Scalars['Int']>;
};

/** update columns of table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'report_ends',
  /** column name */
  ReportStarts = 'report_starts',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Billing_Dedicated_Compute_Reports_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Dedicated_Compute_Reports_Var_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_reports_var_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Dedicated_Compute_Reports_Var_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_reports_var_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Dedicated_Compute_Reports_Variance_Fields = {
  __typename?: 'billing_dedicated_compute_reports_variance_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** select columns of table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Select_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TotalMillicores = 'totalMillicores',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Set_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  totalMillicores?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Billing_Dedicated_Compute_Stddev_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Dedicated_Compute_Stddev_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_pop_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Dedicated_Compute_Stddev_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_samp_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_dedicated_compute" */
export type Billing_Dedicated_Compute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Dedicated_Compute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Dedicated_Compute_Stream_Cursor_Value_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  totalMillicores?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Billing_Dedicated_Compute_Sum_Fields = {
  __typename?: 'billing_dedicated_compute_sum_fields';
  totalMillicores?: Maybe<Scalars['Int']>;
};

/** update columns of table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Update_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TotalMillicores = 'totalMillicores',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Billing_Dedicated_Compute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Dedicated_Compute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Dedicated_Compute_Var_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_var_pop_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Dedicated_Compute_Var_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_var_samp_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Dedicated_Compute_Variance_Fields = {
  __typename?: 'billing_dedicated_compute_variance_fields';
  totalMillicores?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "billing.report_type" */
export type Billing_Report_Type = {
  __typename?: 'billing_report_type';
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "billing.report_type" */
export type Billing_Report_Type_Aggregate = {
  __typename?: 'billing_report_type_aggregate';
  aggregate?: Maybe<Billing_Report_Type_Aggregate_Fields>;
  nodes: Array<Billing_Report_Type>;
};

/** aggregate fields of "billing.report_type" */
export type Billing_Report_Type_Aggregate_Fields = {
  __typename?: 'billing_report_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Billing_Report_Type_Max_Fields>;
  min?: Maybe<Billing_Report_Type_Min_Fields>;
};


/** aggregate fields of "billing.report_type" */
export type Billing_Report_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Report_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "billing.report_type". All fields are combined with a logical 'AND'. */
export type Billing_Report_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Report_Type_Bool_Exp>>;
  _not?: InputMaybe<Billing_Report_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Report_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.report_type" */
export enum Billing_Report_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ReportTypePkey = 'report_type_pkey'
}

export enum Billing_Report_Type_Enum {
  /** Dedicated compute */
  DedicatedCompute = 'dedicated_compute',
  /** Egress usage in MB */
  Egress = 'egress',
  /** Functions usage in seconds */
  Functions = 'functions'
}

/** Boolean expression to compare columns of type "billing_report_type_enum". All fields are combined with logical 'AND'. */
export type Billing_Report_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Billing_Report_Type_Enum>;
  _in?: InputMaybe<Array<Billing_Report_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Billing_Report_Type_Enum>;
  _nin?: InputMaybe<Array<Billing_Report_Type_Enum>>;
};

/** input type for inserting data into table "billing.report_type" */
export type Billing_Report_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Billing_Report_Type_Max_Fields = {
  __typename?: 'billing_report_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Billing_Report_Type_Min_Fields = {
  __typename?: 'billing_report_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "billing.report_type" */
export type Billing_Report_Type_Mutation_Response = {
  __typename?: 'billing_report_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Report_Type>;
};

/** on_conflict condition type for table "billing.report_type" */
export type Billing_Report_Type_On_Conflict = {
  constraint: Billing_Report_Type_Constraint;
  update_columns?: Array<Billing_Report_Type_Update_Column>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.report_type". */
export type Billing_Report_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.report_type */
export type Billing_Report_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "billing.report_type" */
export enum Billing_Report_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "billing.report_type" */
export type Billing_Report_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "billing_report_type" */
export type Billing_Report_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Report_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Report_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "billing.report_type" */
export enum Billing_Report_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Billing_Report_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Report_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Report_Type_Bool_Exp;
};

/** columns and relationships of "billing.reports" */
export type Billing_Reports = {
  __typename?: 'billing_reports';
  appID: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pending: Scalars['Boolean'];
  reportEnds: Scalars['timestamptz'];
  reportStarts: Scalars['timestamptz'];
  type: Billing_Report_Type_Enum;
  updatedAt: Scalars['timestamptz'];
  value: Scalars['Int'];
};

/** aggregated selection of "billing.reports" */
export type Billing_Reports_Aggregate = {
  __typename?: 'billing_reports_aggregate';
  aggregate?: Maybe<Billing_Reports_Aggregate_Fields>;
  nodes: Array<Billing_Reports>;
};

export type Billing_Reports_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Billing_Reports_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Billing_Reports_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Billing_Reports_Aggregate_Bool_Exp_Count>;
};

export type Billing_Reports_Aggregate_Bool_Exp_Bool_And = {
  arguments: Billing_Reports_Select_Column_Billing_Reports_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Reports_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Reports_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Billing_Reports_Select_Column_Billing_Reports_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Reports_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Billing_Reports_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Billing_Reports_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "billing.reports" */
export type Billing_Reports_Aggregate_Fields = {
  __typename?: 'billing_reports_aggregate_fields';
  avg?: Maybe<Billing_Reports_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Reports_Max_Fields>;
  min?: Maybe<Billing_Reports_Min_Fields>;
  stddev?: Maybe<Billing_Reports_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Reports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Reports_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Reports_Sum_Fields>;
  var_pop?: Maybe<Billing_Reports_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Reports_Var_Samp_Fields>;
  variance?: Maybe<Billing_Reports_Variance_Fields>;
};


/** aggregate fields of "billing.reports" */
export type Billing_Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "billing.reports" */
export type Billing_Reports_Aggregate_Order_By = {
  avg?: InputMaybe<Billing_Reports_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Billing_Reports_Max_Order_By>;
  min?: InputMaybe<Billing_Reports_Min_Order_By>;
  stddev?: InputMaybe<Billing_Reports_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Billing_Reports_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Billing_Reports_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Billing_Reports_Sum_Order_By>;
  var_pop?: InputMaybe<Billing_Reports_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Billing_Reports_Var_Samp_Order_By>;
  variance?: InputMaybe<Billing_Reports_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "billing.reports" */
export type Billing_Reports_Arr_Rel_Insert_Input = {
  data: Array<Billing_Reports_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Reports_On_Conflict>;
};

/** aggregate avg on columns */
export type Billing_Reports_Avg_Fields = {
  __typename?: 'billing_reports_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "billing.reports" */
export type Billing_Reports_Avg_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "billing.reports". All fields are combined with a logical 'AND'. */
export type Billing_Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Reports_Bool_Exp>>;
  _not?: InputMaybe<Billing_Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Reports_Bool_Exp>>;
  appID?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pending?: InputMaybe<Boolean_Comparison_Exp>;
  reportEnds?: InputMaybe<Timestamptz_Comparison_Exp>;
  reportStarts?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Billing_Report_Type_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.reports" */
export enum Billing_Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportsPkey = 'reports_pkey'
}

/** input type for incrementing numeric columns in table "billing.reports" */
export type Billing_Reports_Inc_Input = {
  value?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.reports" */
export type Billing_Reports_Insert_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  reportEnds?: InputMaybe<Scalars['timestamptz']>;
  reportStarts?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Billing_Report_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Billing_Reports_Max_Fields = {
  __typename?: 'billing_reports_max_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reportEnds?: Maybe<Scalars['timestamptz']>;
  reportStarts?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "billing.reports" */
export type Billing_Reports_Max_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reportEnds?: InputMaybe<Order_By>;
  reportStarts?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Billing_Reports_Min_Fields = {
  __typename?: 'billing_reports_min_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  reportEnds?: Maybe<Scalars['timestamptz']>;
  reportStarts?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "billing.reports" */
export type Billing_Reports_Min_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reportEnds?: InputMaybe<Order_By>;
  reportStarts?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "billing.reports" */
export type Billing_Reports_Mutation_Response = {
  __typename?: 'billing_reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Reports>;
};

/** on_conflict condition type for table "billing.reports" */
export type Billing_Reports_On_Conflict = {
  constraint: Billing_Reports_Constraint;
  update_columns?: Array<Billing_Reports_Update_Column>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.reports". */
export type Billing_Reports_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pending?: InputMaybe<Order_By>;
  reportEnds?: InputMaybe<Order_By>;
  reportStarts?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.reports */
export type Billing_Reports_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.reports" */
export enum Billing_Reports_Select_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'reportEnds',
  /** column name */
  ReportStarts = 'reportStarts',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** select "billing_reports_aggregate_bool_exp_bool_and_arguments_columns" columns of table "billing.reports" */
export enum Billing_Reports_Select_Column_Billing_Reports_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Pending = 'pending'
}

/** select "billing_reports_aggregate_bool_exp_bool_or_arguments_columns" columns of table "billing.reports" */
export enum Billing_Reports_Select_Column_Billing_Reports_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Pending = 'pending'
}

/** input type for updating data in table "billing.reports" */
export type Billing_Reports_Set_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  reportEnds?: InputMaybe<Scalars['timestamptz']>;
  reportStarts?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Billing_Report_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Billing_Reports_Stddev_Fields = {
  __typename?: 'billing_reports_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "billing.reports" */
export type Billing_Reports_Stddev_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Billing_Reports_Stddev_Pop_Fields = {
  __typename?: 'billing_reports_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "billing.reports" */
export type Billing_Reports_Stddev_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Billing_Reports_Stddev_Samp_Fields = {
  __typename?: 'billing_reports_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "billing.reports" */
export type Billing_Reports_Stddev_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "billing_reports" */
export type Billing_Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Reports_Stream_Cursor_Value_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  reportEnds?: InputMaybe<Scalars['timestamptz']>;
  reportStarts?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Billing_Report_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Billing_Reports_Sum_Fields = {
  __typename?: 'billing_reports_sum_fields';
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "billing.reports" */
export type Billing_Reports_Sum_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** update columns of table "billing.reports" */
export enum Billing_Reports_Update_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'reportEnds',
  /** column name */
  ReportStarts = 'reportStarts',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type Billing_Reports_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Reports_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Reports_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Reports_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Reports_Var_Pop_Fields = {
  __typename?: 'billing_reports_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "billing.reports" */
export type Billing_Reports_Var_Pop_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Billing_Reports_Var_Samp_Fields = {
  __typename?: 'billing_reports_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "billing.reports" */
export type Billing_Reports_Var_Samp_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Billing_Reports_Variance_Fields = {
  __typename?: 'billing_reports_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "billing.reports" */
export type Billing_Reports_Variance_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "billing.resources" */
export type Billing_Resources = {
  __typename?: 'billing_resources';
  appID: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  customDomains: Scalars['Int'];
  functionsAmount: Scalars['Int'];
  id: Scalars['uuid'];
  persistentVolume: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "billing.resources" */
export type Billing_Resources_Aggregate = {
  __typename?: 'billing_resources_aggregate';
  aggregate?: Maybe<Billing_Resources_Aggregate_Fields>;
  nodes: Array<Billing_Resources>;
};

/** aggregate fields of "billing.resources" */
export type Billing_Resources_Aggregate_Fields = {
  __typename?: 'billing_resources_aggregate_fields';
  avg?: Maybe<Billing_Resources_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Resources_Max_Fields>;
  min?: Maybe<Billing_Resources_Min_Fields>;
  stddev?: Maybe<Billing_Resources_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Resources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Resources_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Resources_Sum_Fields>;
  var_pop?: Maybe<Billing_Resources_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Resources_Var_Samp_Fields>;
  variance?: Maybe<Billing_Resources_Variance_Fields>;
};


/** aggregate fields of "billing.resources" */
export type Billing_Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Resources_Avg_Fields = {
  __typename?: 'billing_resources_avg_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.resources". All fields are combined with a logical 'AND'. */
export type Billing_Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Resources_Bool_Exp>>;
  _not?: InputMaybe<Billing_Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Resources_Bool_Exp>>;
  appID?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customDomains?: InputMaybe<Int_Comparison_Exp>;
  functionsAmount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  persistentVolume?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.resources" */
export enum Billing_Resources_Constraint {
  /** unique or primary key constraint on columns "app_id" */
  ResourcesAppIdKey = 'resources_app_id_key',
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** input type for incrementing numeric columns in table "billing.resources" */
export type Billing_Resources_Inc_Input = {
  customDomains?: InputMaybe<Scalars['Int']>;
  functionsAmount?: InputMaybe<Scalars['Int']>;
  persistentVolume?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.resources" */
export type Billing_Resources_Insert_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['Int']>;
  functionsAmount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Resources_Max_Fields = {
  __typename?: 'billing_resources_max_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customDomains?: Maybe<Scalars['Int']>;
  functionsAmount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  persistentVolume?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Resources_Min_Fields = {
  __typename?: 'billing_resources_min_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customDomains?: Maybe<Scalars['Int']>;
  functionsAmount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  persistentVolume?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.resources" */
export type Billing_Resources_Mutation_Response = {
  __typename?: 'billing_resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Resources>;
};

/** input type for inserting object relation for remote table "billing.resources" */
export type Billing_Resources_Obj_Rel_Insert_Input = {
  data: Billing_Resources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Resources_On_Conflict>;
};

/** on_conflict condition type for table "billing.resources" */
export type Billing_Resources_On_Conflict = {
  constraint: Billing_Resources_Constraint;
  update_columns?: Array<Billing_Resources_Update_Column>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.resources". */
export type Billing_Resources_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  customDomains?: InputMaybe<Order_By>;
  functionsAmount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  persistentVolume?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.resources */
export type Billing_Resources_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.resources" */
export enum Billing_Resources_Select_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomDomains = 'customDomains',
  /** column name */
  FunctionsAmount = 'functionsAmount',
  /** column name */
  Id = 'id',
  /** column name */
  PersistentVolume = 'persistentVolume',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "billing.resources" */
export type Billing_Resources_Set_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['Int']>;
  functionsAmount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Billing_Resources_Stddev_Fields = {
  __typename?: 'billing_resources_stddev_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Resources_Stddev_Pop_Fields = {
  __typename?: 'billing_resources_stddev_pop_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Resources_Stddev_Samp_Fields = {
  __typename?: 'billing_resources_stddev_samp_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_resources" */
export type Billing_Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Resources_Stream_Cursor_Value_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['Int']>;
  functionsAmount?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Billing_Resources_Sum_Fields = {
  __typename?: 'billing_resources_sum_fields';
  customDomains?: Maybe<Scalars['Int']>;
  functionsAmount?: Maybe<Scalars['Int']>;
  persistentVolume?: Maybe<Scalars['Int']>;
};

/** update columns of table "billing.resources" */
export enum Billing_Resources_Update_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomDomains = 'customDomains',
  /** column name */
  FunctionsAmount = 'functionsAmount',
  /** column name */
  Id = 'id',
  /** column name */
  PersistentVolume = 'persistentVolume',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Billing_Resources_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Resources_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Resources_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Resources_Var_Pop_Fields = {
  __typename?: 'billing_resources_var_pop_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Resources_Var_Samp_Fields = {
  __typename?: 'billing_resources_var_samp_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Resources_Variance_Fields = {
  __typename?: 'billing_resources_variance_fields';
  customDomains?: Maybe<Scalars['Float']>;
  functionsAmount?: Maybe<Scalars['Float']>;
  persistentVolume?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "billing.subscriptions" */
export type Billing_Subscriptions = {
  __typename?: 'billing_subscriptions';
  /** An object relationship */
  app?: Maybe<Apps>;
  appID: Scalars['uuid'];
  createdAt: Scalars['timestamptz'];
  customDomains?: Maybe<Scalars['String']>;
  dedicatedCompute?: Maybe<Scalars['String']>;
  egress?: Maybe<Scalars['String']>;
  functions?: Maybe<Scalars['String']>;
  functionsAmount?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  persistentVolume?: Maybe<Scalars['String']>;
  /** An array relationship */
  reports: Array<Billing_Reports>;
  /** An aggregate relationship */
  reports_aggregate: Billing_Reports_Aggregate;
  /** An object relationship */
  resources?: Maybe<Billing_Resources>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "billing.subscriptions" */
export type Billing_SubscriptionsReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


/** columns and relationships of "billing.subscriptions" */
export type Billing_SubscriptionsReports_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};

/** aggregated selection of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate = {
  __typename?: 'billing_subscriptions_aggregate';
  aggregate?: Maybe<Billing_Subscriptions_Aggregate_Fields>;
  nodes: Array<Billing_Subscriptions>;
};

/** aggregate fields of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate_Fields = {
  __typename?: 'billing_subscriptions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Billing_Subscriptions_Max_Fields>;
  min?: Maybe<Billing_Subscriptions_Min_Fields>;
};


/** aggregate fields of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "billing.subscriptions". All fields are combined with a logical 'AND'. */
export type Billing_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Subscriptions_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appID?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customDomains?: InputMaybe<String_Comparison_Exp>;
  dedicatedCompute?: InputMaybe<String_Comparison_Exp>;
  egress?: InputMaybe<String_Comparison_Exp>;
  functions?: InputMaybe<String_Comparison_Exp>;
  functionsAmount?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  persistentVolume?: InputMaybe<String_Comparison_Exp>;
  reports?: InputMaybe<Billing_Reports_Bool_Exp>;
  reports_aggregate?: InputMaybe<Billing_Reports_Aggregate_Bool_Exp>;
  resources?: InputMaybe<Billing_Resources_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.subscriptions" */
export enum Billing_Subscriptions_Constraint {
  /** unique or primary key constraint on columns "app_id" */
  SubscriptionsAppIdKey = 'subscriptions_app_id_key',
  /** unique or primary key constraint on columns "custom_domains" */
  SubscriptionsCustomDomainsKey = 'subscriptions_custom_domains_key',
  /** unique or primary key constraint on columns "dedicated_compute" */
  SubscriptionsDedicatedComputeKey = 'subscriptions_dedicated_compute_key',
  /** unique or primary key constraint on columns "egress" */
  SubscriptionsEgressKey = 'subscriptions_egress_key',
  /** unique or primary key constraint on columns "functions_amount" */
  SubscriptionsFunctionsAmountKey = 'subscriptions_functions_amount_key',
  /** unique or primary key constraint on columns "functions" */
  SubscriptionsFunctionsKey = 'subscriptions_functions_key',
  /** unique or primary key constraint on columns "persistent_volume" */
  SubscriptionsPersistentVolumeKey = 'subscriptions_persistent_volume_key',
  /** unique or primary key constraint on columns "id" */
  SubscriptionsPkey = 'subscriptions_pkey'
}

/** input type for inserting data into table "billing.subscriptions" */
export type Billing_Subscriptions_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['String']>;
  dedicatedCompute?: InputMaybe<Scalars['String']>;
  egress?: InputMaybe<Scalars['String']>;
  functions?: InputMaybe<Scalars['String']>;
  functionsAmount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Billing_Reports_Arr_Rel_Insert_Input>;
  resources?: InputMaybe<Billing_Resources_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Subscriptions_Max_Fields = {
  __typename?: 'billing_subscriptions_max_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customDomains?: Maybe<Scalars['String']>;
  dedicatedCompute?: Maybe<Scalars['String']>;
  egress?: Maybe<Scalars['String']>;
  functions?: Maybe<Scalars['String']>;
  functionsAmount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  persistentVolume?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Subscriptions_Min_Fields = {
  __typename?: 'billing_subscriptions_min_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  customDomains?: Maybe<Scalars['String']>;
  dedicatedCompute?: Maybe<Scalars['String']>;
  egress?: Maybe<Scalars['String']>;
  functions?: Maybe<Scalars['String']>;
  functionsAmount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  persistentVolume?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.subscriptions" */
export type Billing_Subscriptions_Mutation_Response = {
  __typename?: 'billing_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Subscriptions>;
};

/** input type for inserting object relation for remote table "billing.subscriptions" */
export type Billing_Subscriptions_Obj_Rel_Insert_Input = {
  data: Billing_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "billing.subscriptions" */
export type Billing_Subscriptions_On_Conflict = {
  constraint: Billing_Subscriptions_Constraint;
  update_columns?: Array<Billing_Subscriptions_Update_Column>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.subscriptions". */
export type Billing_Subscriptions_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  customDomains?: InputMaybe<Order_By>;
  dedicatedCompute?: InputMaybe<Order_By>;
  egress?: InputMaybe<Order_By>;
  functions?: InputMaybe<Order_By>;
  functionsAmount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  persistentVolume?: InputMaybe<Order_By>;
  reports_aggregate?: InputMaybe<Billing_Reports_Aggregate_Order_By>;
  resources?: InputMaybe<Billing_Resources_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.subscriptions */
export type Billing_Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.subscriptions" */
export enum Billing_Subscriptions_Select_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomDomains = 'customDomains',
  /** column name */
  DedicatedCompute = 'dedicatedCompute',
  /** column name */
  Egress = 'egress',
  /** column name */
  Functions = 'functions',
  /** column name */
  FunctionsAmount = 'functionsAmount',
  /** column name */
  Id = 'id',
  /** column name */
  PersistentVolume = 'persistentVolume',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "billing.subscriptions" */
export type Billing_Subscriptions_Set_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['String']>;
  dedicatedCompute?: InputMaybe<Scalars['String']>;
  egress?: InputMaybe<Scalars['String']>;
  functions?: InputMaybe<Scalars['String']>;
  functionsAmount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "billing_subscriptions" */
export type Billing_Subscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Subscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Subscriptions_Stream_Cursor_Value_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customDomains?: InputMaybe<Scalars['String']>;
  dedicatedCompute?: InputMaybe<Scalars['String']>;
  egress?: InputMaybe<Scalars['String']>;
  functions?: InputMaybe<Scalars['String']>;
  functionsAmount?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  persistentVolume?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "billing.subscriptions" */
export enum Billing_Subscriptions_Update_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomDomains = 'customDomains',
  /** column name */
  DedicatedCompute = 'dedicatedCompute',
  /** column name */
  Egress = 'egress',
  /** column name */
  Functions = 'functions',
  /** column name */
  FunctionsAmount = 'functionsAmount',
  /** column name */
  Id = 'id',
  /** column name */
  PersistentVolume = 'persistentVolume',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Billing_Subscriptions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Billing_Subscriptions_Bool_Exp;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "cli_tokens" */
export type CliTokens = {
  __typename?: 'cliTokens';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  token: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "cli_tokens" */
export type CliTokens_Aggregate = {
  __typename?: 'cliTokens_aggregate';
  aggregate?: Maybe<CliTokens_Aggregate_Fields>;
  nodes: Array<CliTokens>;
};

export type CliTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<CliTokens_Aggregate_Bool_Exp_Count>;
};

export type CliTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<CliTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CliTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cli_tokens" */
export type CliTokens_Aggregate_Fields = {
  __typename?: 'cliTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CliTokens_Max_Fields>;
  min?: Maybe<CliTokens_Min_Fields>;
};


/** aggregate fields of "cli_tokens" */
export type CliTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CliTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cli_tokens" */
export type CliTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CliTokens_Max_Order_By>;
  min?: InputMaybe<CliTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cli_tokens" */
export type CliTokens_Arr_Rel_Insert_Input = {
  data: Array<CliTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cli_tokens". All fields are combined with a logical 'AND'. */
export type CliTokens_Bool_Exp = {
  _and?: InputMaybe<Array<CliTokens_Bool_Exp>>;
  _not?: InputMaybe<CliTokens_Bool_Exp>;
  _or?: InputMaybe<Array<CliTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cli_tokens" */
export enum CliTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  CliTokensPkey = 'cliTokens_pkey'
}

/** input type for inserting data into table "cli_tokens" */
export type CliTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CliTokens_Max_Fields = {
  __typename?: 'cliTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  token?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cli_tokens" */
export type CliTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CliTokens_Min_Fields = {
  __typename?: 'cliTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  token?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cli_tokens" */
export type CliTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cli_tokens" */
export type CliTokens_Mutation_Response = {
  __typename?: 'cliTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CliTokens>;
};

/** on_conflict condition type for table "cli_tokens" */
export type CliTokens_On_Conflict = {
  constraint: CliTokens_Constraint;
  update_columns?: Array<CliTokens_Update_Column>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "cli_tokens". */
export type CliTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cli_tokens */
export type CliTokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cli_tokens" */
export enum CliTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "cli_tokens" */
export type CliTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cliTokens" */
export type CliTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CliTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CliTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cli_tokens" */
export enum CliTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type CliTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CliTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: CliTokens_Bool_Exp;
};

/** columns and relationships of "continents" */
export type Continents = {
  __typename?: 'continents';
  /** Continent code */
  code: Scalars['bpchar'];
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "continents" */
export type ContinentsCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


/** columns and relationships of "continents" */
export type ContinentsCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

/** aggregated selection of "continents" */
export type Continents_Aggregate = {
  __typename?: 'continents_aggregate';
  aggregate?: Maybe<Continents_Aggregate_Fields>;
  nodes: Array<Continents>;
};

/** aggregate fields of "continents" */
export type Continents_Aggregate_Fields = {
  __typename?: 'continents_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Continents_Max_Fields>;
  min?: Maybe<Continents_Min_Fields>;
};


/** aggregate fields of "continents" */
export type Continents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Continents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "continents". All fields are combined with a logical 'AND'. */
export type Continents_Bool_Exp = {
  _and?: InputMaybe<Array<Continents_Bool_Exp>>;
  _not?: InputMaybe<Continents_Bool_Exp>;
  _or?: InputMaybe<Array<Continents_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  countries?: InputMaybe<Countries_Bool_Exp>;
  countries_aggregate?: InputMaybe<Countries_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "continents" */
export enum Continents_Constraint {
  /** unique or primary key constraint on columns "code" */
  ContinentPkey = 'continent_pkey'
}

/** input type for inserting data into table "continents" */
export type Continents_Insert_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  countries?: InputMaybe<Countries_Arr_Rel_Insert_Input>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Continents_Max_Fields = {
  __typename?: 'continents_max_fields';
  /** Continent code */
  code?: Maybe<Scalars['bpchar']>;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Continents_Min_Fields = {
  __typename?: 'continents_min_fields';
  /** Continent code */
  code?: Maybe<Scalars['bpchar']>;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "continents" */
export type Continents_Mutation_Response = {
  __typename?: 'continents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Continents>;
};

/** input type for inserting object relation for remote table "continents" */
export type Continents_Obj_Rel_Insert_Input = {
  data: Continents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};

/** on_conflict condition type for table "continents" */
export type Continents_On_Conflict = {
  constraint: Continents_Constraint;
  update_columns?: Array<Continents_Update_Column>;
  where?: InputMaybe<Continents_Bool_Exp>;
};

/** Ordering options when selecting data from "continents". */
export type Continents_Order_By = {
  code?: InputMaybe<Order_By>;
  countries_aggregate?: InputMaybe<Countries_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: continents */
export type Continents_Pk_Columns_Input = {
  /** Continent code */
  code: Scalars['bpchar'];
};

/** select columns of table "continents" */
export enum Continents_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "continents" */
export type Continents_Set_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "continents" */
export type Continents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Continents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Continents_Stream_Cursor_Value_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "continents" */
export enum Continents_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

export type Continents_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Continents_Set_Input>;
  /** filter the rows which have to be updated */
  where: Continents_Bool_Exp;
};

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code: Scalars['bpchar'];
  /** An object relationship */
  continent: Continents;
  continentCode: Scalars['bpchar'];
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** An array relationship */
  locations: Array<Regions>;
  /** An aggregate relationship */
  locations_aggregate: Regions_Aggregate;
  /** English country name */
  name: Scalars['String'];
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** An aggregate relationship */
  workspaces_aggregate: Workspaces_Aggregate;
};


/** columns and relationships of "countries" */
export type CountriesLocationsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesWorkspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

export type Countries_Aggregate_Bool_Exp = {
  count?: InputMaybe<Countries_Aggregate_Bool_Exp_Count>;
};

export type Countries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Countries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: InputMaybe<Countries_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Countries_Max_Order_By>;
  min?: InputMaybe<Countries_Min_Order_By>;
  stddev?: InputMaybe<Countries_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Countries_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Countries_Sum_Order_By>;
  var_pop?: InputMaybe<Countries_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Countries_Var_Samp_Order_By>;
  variance?: InputMaybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: InputMaybe<Array<Countries_Bool_Exp>>;
  _not?: InputMaybe<Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Countries_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  continent?: InputMaybe<Continents_Bool_Exp>;
  continentCode?: InputMaybe<Bpchar_Comparison_Exp>;
  emojiFlag?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  iso3?: InputMaybe<Bpchar_Comparison_Exp>;
  isoNumber?: InputMaybe<Smallint_Comparison_Exp>;
  locations?: InputMaybe<Regions_Bool_Exp>;
  locations_aggregate?: InputMaybe<Regions_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  workspaces?: InputMaybe<Workspaces_Bool_Exp>;
  workspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'country_pkey'
}

/** input type for incrementing numeric columns in table "countries" */
export type Countries_Inc_Input = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continent?: InputMaybe<Continents_Obj_Rel_Insert_Input>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  locations?: InputMaybe<Regions_Arr_Rel_Insert_Input>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Workspaces_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: Maybe<Scalars['bpchar']>;
  continentCode?: Maybe<Scalars['bpchar']>;
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** English country name */
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  /** Full English country name */
  fullName?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
  /** English country name */
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: Maybe<Scalars['bpchar']>;
  continentCode?: Maybe<Scalars['bpchar']>;
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** English country name */
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  /** Full English country name */
  fullName?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
  /** English country name */
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};

/** on_conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns?: Array<Countries_Update_Column>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
  code?: InputMaybe<Order_By>;
  continent?: InputMaybe<Continents_Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  iso3?: InputMaybe<Order_By>;
  isoNumber?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Regions_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  workspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Order_By>;
};

/** primary key columns input for table: countries */
export type Countries_Pk_Columns_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code: Scalars['bpchar'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  EmojiFlag = 'emojiFlag',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  IsoNumber = 'isoNumber',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "countries" */
export type Countries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Countries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Countries_Stream_Cursor_Value_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  EmojiFlag = 'emojiFlag',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  IsoNumber = 'isoNumber',
  /** column name */
  Name = 'name'
}

export type Countries_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Countries_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Countries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Countries_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "deployment_logs" */
export type DeploymentLogs = {
  __typename?: 'deploymentLogs';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  deployment: Deployments;
  deploymentId: Scalars['uuid'];
  id: Scalars['uuid'];
  message: Scalars['String'];
};

/** aggregated selection of "deployment_logs" */
export type DeploymentLogs_Aggregate = {
  __typename?: 'deploymentLogs_aggregate';
  aggregate?: Maybe<DeploymentLogs_Aggregate_Fields>;
  nodes: Array<DeploymentLogs>;
};

export type DeploymentLogs_Aggregate_Bool_Exp = {
  count?: InputMaybe<DeploymentLogs_Aggregate_Bool_Exp_Count>;
};

export type DeploymentLogs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DeploymentLogs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deployment_logs" */
export type DeploymentLogs_Aggregate_Fields = {
  __typename?: 'deploymentLogs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DeploymentLogs_Max_Fields>;
  min?: Maybe<DeploymentLogs_Min_Fields>;
};


/** aggregate fields of "deployment_logs" */
export type DeploymentLogs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deployment_logs" */
export type DeploymentLogs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DeploymentLogs_Max_Order_By>;
  min?: InputMaybe<DeploymentLogs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "deployment_logs" */
export type DeploymentLogs_Arr_Rel_Insert_Input = {
  data: Array<DeploymentLogs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "deployment_logs". All fields are combined with a logical 'AND'. */
export type DeploymentLogs_Bool_Exp = {
  _and?: InputMaybe<Array<DeploymentLogs_Bool_Exp>>;
  _not?: InputMaybe<DeploymentLogs_Bool_Exp>;
  _or?: InputMaybe<Array<DeploymentLogs_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deployment?: InputMaybe<Deployments_Bool_Exp>;
  deploymentId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "deployment_logs" */
export enum DeploymentLogs_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeploymentLogsPkey = 'deployment_logs_pkey'
}

/** input type for inserting data into table "deployment_logs" */
export type DeploymentLogs_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deployment?: InputMaybe<Deployments_Obj_Rel_Insert_Input>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DeploymentLogs_Max_Fields = {
  __typename?: 'deploymentLogs_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deploymentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "deployment_logs" */
export type DeploymentLogs_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DeploymentLogs_Min_Fields = {
  __typename?: 'deploymentLogs_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deploymentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "deployment_logs" */
export type DeploymentLogs_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deployment_logs" */
export type DeploymentLogs_Mutation_Response = {
  __typename?: 'deploymentLogs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DeploymentLogs>;
};

/** on_conflict condition type for table "deployment_logs" */
export type DeploymentLogs_On_Conflict = {
  constraint: DeploymentLogs_Constraint;
  update_columns?: Array<DeploymentLogs_Update_Column>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};

/** Ordering options when selecting data from "deployment_logs". */
export type DeploymentLogs_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deployment?: InputMaybe<Deployments_Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deployment_logs */
export type DeploymentLogs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deployment_logs" */
export enum DeploymentLogs_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeploymentId = 'deploymentId',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message'
}

/** input type for updating data in table "deployment_logs" */
export type DeploymentLogs_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "deploymentLogs" */
export type DeploymentLogs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DeploymentLogs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DeploymentLogs_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** update columns of table "deployment_logs" */
export enum DeploymentLogs_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeploymentId = 'deploymentId',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message'
}

export type DeploymentLogs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  /** filter the rows which have to be updated */
  where: DeploymentLogs_Bool_Exp;
};

/** Table that keeps track of deployments done by watchtower */
export type Deployments = {
  __typename?: 'deployments';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA: Scalars['String'];
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** An aggregate relationship */
  deploymentLogs_aggregate: DeploymentLogs_Aggregate;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};


/** Table that keeps track of deployments done by watchtower */
export type DeploymentsDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


/** Table that keeps track of deployments done by watchtower */
export type DeploymentsDeploymentLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};

/** aggregated selection of "deployments" */
export type Deployments_Aggregate = {
  __typename?: 'deployments_aggregate';
  aggregate?: Maybe<Deployments_Aggregate_Fields>;
  nodes: Array<Deployments>;
};

export type Deployments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deployments_Aggregate_Bool_Exp_Count>;
};

export type Deployments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deployments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Deployments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deployments" */
export type Deployments_Aggregate_Fields = {
  __typename?: 'deployments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Deployments_Max_Fields>;
  min?: Maybe<Deployments_Min_Fields>;
};


/** aggregate fields of "deployments" */
export type Deployments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deployments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deployments" */
export type Deployments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deployments_Max_Order_By>;
  min?: InputMaybe<Deployments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "deployments" */
export type Deployments_Arr_Rel_Insert_Input = {
  data: Array<Deployments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "deployments". All fields are combined with a logical 'AND'. */
export type Deployments_Bool_Exp = {
  _and?: InputMaybe<Array<Deployments_Bool_Exp>>;
  _not?: InputMaybe<Deployments_Bool_Exp>;
  _or?: InputMaybe<Array<Deployments_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  commitMessage?: InputMaybe<String_Comparison_Exp>;
  commitSHA?: InputMaybe<String_Comparison_Exp>;
  commitUserAvatarUrl?: InputMaybe<String_Comparison_Exp>;
  commitUserName?: InputMaybe<String_Comparison_Exp>;
  deploymentEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deploymentLogs?: InputMaybe<DeploymentLogs_Bool_Exp>;
  deploymentLogs_aggregate?: InputMaybe<DeploymentLogs_Aggregate_Bool_Exp>;
  deploymentStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deploymentStatus?: InputMaybe<String_Comparison_Exp>;
  functionsEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  functionsStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  functionsStatus?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadataEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadataStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadataStatus?: InputMaybe<String_Comparison_Exp>;
  migrationsEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  migrationsStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  migrationsStatus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "deployments" */
export enum Deployments_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeploymentsPkey = 'deployments_pkey'
}

/** input type for inserting data into table "deployments" */
export type Deployments_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentLogs?: InputMaybe<DeploymentLogs_Arr_Rel_Insert_Input>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Deployments_Max_Fields = {
  __typename?: 'deployments_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA?: Maybe<Scalars['String']>;
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "deployments" */
export type Deployments_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deployments_Min_Fields = {
  __typename?: 'deployments_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA?: Maybe<Scalars['String']>;
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "deployments" */
export type Deployments_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deployments" */
export type Deployments_Mutation_Response = {
  __typename?: 'deployments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Deployments>;
};

/** input type for inserting object relation for remote table "deployments" */
export type Deployments_Obj_Rel_Insert_Input = {
  data: Deployments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};

/** on_conflict condition type for table "deployments" */
export type Deployments_On_Conflict = {
  constraint: Deployments_Constraint;
  update_columns?: Array<Deployments_Update_Column>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};

/** Ordering options when selecting data from "deployments". */
export type Deployments_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentLogs_aggregate?: InputMaybe<DeploymentLogs_Aggregate_Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deployments */
export type Deployments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deployments" */
export enum Deployments_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CommitMessage = 'commitMessage',
  /** column name */
  CommitSha = 'commitSHA',
  /** column name */
  CommitUserAvatarUrl = 'commitUserAvatarUrl',
  /** column name */
  CommitUserName = 'commitUserName',
  /** column name */
  DeploymentEndedAt = 'deploymentEndedAt',
  /** column name */
  DeploymentStartedAt = 'deploymentStartedAt',
  /** column name */
  DeploymentStatus = 'deploymentStatus',
  /** column name */
  FunctionsEndedAt = 'functionsEndedAt',
  /** column name */
  FunctionsStartedAt = 'functionsStartedAt',
  /** column name */
  FunctionsStatus = 'functionsStatus',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataEndedAt = 'metadataEndedAt',
  /** column name */
  MetadataStartedAt = 'metadataStartedAt',
  /** column name */
  MetadataStatus = 'metadataStatus',
  /** column name */
  MigrationsEndedAt = 'migrationsEndedAt',
  /** column name */
  MigrationsStartedAt = 'migrationsStartedAt',
  /** column name */
  MigrationsStatus = 'migrationsStatus'
}

/** input type for updating data in table "deployments" */
export type Deployments_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "deployments" */
export type Deployments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deployments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deployments_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** update columns of table "deployments" */
export enum Deployments_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CommitMessage = 'commitMessage',
  /** column name */
  CommitSha = 'commitSHA',
  /** column name */
  CommitUserAvatarUrl = 'commitUserAvatarUrl',
  /** column name */
  CommitUserName = 'commitUserName',
  /** column name */
  DeploymentEndedAt = 'deploymentEndedAt',
  /** column name */
  DeploymentStartedAt = 'deploymentStartedAt',
  /** column name */
  DeploymentStatus = 'deploymentStatus',
  /** column name */
  FunctionsEndedAt = 'functionsEndedAt',
  /** column name */
  FunctionsStartedAt = 'functionsStartedAt',
  /** column name */
  FunctionsStatus = 'functionsStatus',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataEndedAt = 'metadataEndedAt',
  /** column name */
  MetadataStartedAt = 'metadataStartedAt',
  /** column name */
  MetadataStatus = 'metadataStatus',
  /** column name */
  MigrationsEndedAt = 'migrationsEndedAt',
  /** column name */
  MigrationsStartedAt = 'migrationsStartedAt',
  /** column name */
  MigrationsStatus = 'migrationsStatus'
}

export type Deployments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deployments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Deployments_Bool_Exp;
};

/** columns and relationships of "feature_flags" */
export type FeatureFlags = {
  __typename?: 'featureFlags';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "feature_flags" */
export type FeatureFlags_Aggregate = {
  __typename?: 'featureFlags_aggregate';
  aggregate?: Maybe<FeatureFlags_Aggregate_Fields>;
  nodes: Array<FeatureFlags>;
};

export type FeatureFlags_Aggregate_Bool_Exp = {
  count?: InputMaybe<FeatureFlags_Aggregate_Bool_Exp_Count>;
};

export type FeatureFlags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FeatureFlags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feature_flags" */
export type FeatureFlags_Aggregate_Fields = {
  __typename?: 'featureFlags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FeatureFlags_Max_Fields>;
  min?: Maybe<FeatureFlags_Min_Fields>;
};


/** aggregate fields of "feature_flags" */
export type FeatureFlags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feature_flags" */
export type FeatureFlags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FeatureFlags_Max_Order_By>;
  min?: InputMaybe<FeatureFlags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feature_flags" */
export type FeatureFlags_Arr_Rel_Insert_Input = {
  data: Array<FeatureFlags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feature_flags". All fields are combined with a logical 'AND'. */
export type FeatureFlags_Bool_Exp = {
  _and?: InputMaybe<Array<FeatureFlags_Bool_Exp>>;
  _not?: InputMaybe<FeatureFlags_Bool_Exp>;
  _or?: InputMaybe<Array<FeatureFlags_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_flags" */
export enum FeatureFlags_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeatureFlagsPkey = 'feature_flags_pkey'
}

/** input type for inserting data into table "feature_flags" */
export type FeatureFlags_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FeatureFlags_Max_Fields = {
  __typename?: 'featureFlags_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "feature_flags" */
export type FeatureFlags_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FeatureFlags_Min_Fields = {
  __typename?: 'featureFlags_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "feature_flags" */
export type FeatureFlags_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feature_flags" */
export type FeatureFlags_Mutation_Response = {
  __typename?: 'featureFlags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FeatureFlags>;
};

/** on_conflict condition type for table "feature_flags" */
export type FeatureFlags_On_Conflict = {
  constraint: FeatureFlags_Constraint;
  update_columns?: Array<FeatureFlags_Update_Column>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_flags". */
export type FeatureFlags_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_flags */
export type FeatureFlags_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "feature_flags" */
export enum FeatureFlags_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "feature_flags" */
export type FeatureFlags_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "featureFlags" */
export type FeatureFlags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FeatureFlags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeatureFlags_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "feature_flags" */
export enum FeatureFlags_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

export type FeatureFlags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  /** filter the rows which have to be updated */
  where: FeatureFlags_Bool_Exp;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "github_app_installations" */
export type GithubAppInstallations = {
  __typename?: 'githubAppInstallations';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  githubData?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** An aggregate relationship */
  githubRepositories_aggregate: GithubRepositories_Aggregate;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubRepositories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};

/** aggregated selection of "github_app_installations" */
export type GithubAppInstallations_Aggregate = {
  __typename?: 'githubAppInstallations_aggregate';
  aggregate?: Maybe<GithubAppInstallations_Aggregate_Fields>;
  nodes: Array<GithubAppInstallations>;
};

export type GithubAppInstallations_Aggregate_Bool_Exp = {
  count?: InputMaybe<GithubAppInstallations_Aggregate_Bool_Exp_Count>;
};

export type GithubAppInstallations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "github_app_installations" */
export type GithubAppInstallations_Aggregate_Fields = {
  __typename?: 'githubAppInstallations_aggregate_fields';
  avg?: Maybe<GithubAppInstallations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GithubAppInstallations_Max_Fields>;
  min?: Maybe<GithubAppInstallations_Min_Fields>;
  stddev?: Maybe<GithubAppInstallations_Stddev_Fields>;
  stddev_pop?: Maybe<GithubAppInstallations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GithubAppInstallations_Stddev_Samp_Fields>;
  sum?: Maybe<GithubAppInstallations_Sum_Fields>;
  var_pop?: Maybe<GithubAppInstallations_Var_Pop_Fields>;
  var_samp?: Maybe<GithubAppInstallations_Var_Samp_Fields>;
  variance?: Maybe<GithubAppInstallations_Variance_Fields>;
};


/** aggregate fields of "github_app_installations" */
export type GithubAppInstallations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "github_app_installations" */
export type GithubAppInstallations_Aggregate_Order_By = {
  avg?: InputMaybe<GithubAppInstallations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GithubAppInstallations_Max_Order_By>;
  min?: InputMaybe<GithubAppInstallations_Min_Order_By>;
  stddev?: InputMaybe<GithubAppInstallations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GithubAppInstallations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GithubAppInstallations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GithubAppInstallations_Sum_Order_By>;
  var_pop?: InputMaybe<GithubAppInstallations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GithubAppInstallations_Var_Samp_Order_By>;
  variance?: InputMaybe<GithubAppInstallations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type GithubAppInstallations_Append_Input = {
  githubData?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "github_app_installations" */
export type GithubAppInstallations_Arr_Rel_Insert_Input = {
  data: Array<GithubAppInstallations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};

/** aggregate avg on columns */
export type GithubAppInstallations_Avg_Fields = {
  __typename?: 'githubAppInstallations_avg_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "github_app_installations" */
export type GithubAppInstallations_Avg_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "github_app_installations". All fields are combined with a logical 'AND'. */
export type GithubAppInstallations_Bool_Exp = {
  _and?: InputMaybe<Array<GithubAppInstallations_Bool_Exp>>;
  _not?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  _or?: InputMaybe<Array<GithubAppInstallations_Bool_Exp>>;
  accountAvatarUrl?: InputMaybe<String_Comparison_Exp>;
  accountLogin?: InputMaybe<String_Comparison_Exp>;
  accountNodeId?: InputMaybe<String_Comparison_Exp>;
  accountType?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  externalGithubAppInstallationId?: InputMaybe<Int_Comparison_Exp>;
  githubData?: InputMaybe<Jsonb_Comparison_Exp>;
  githubRepositories?: InputMaybe<GithubRepositories_Bool_Exp>;
  githubRepositories_aggregate?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "github_app_installations" */
export enum GithubAppInstallations_Constraint {
  /** unique or primary key constraint on columns "external_github_app_installation_id" */
  GithubAppInstallationsExternalGithubAppInstallationIKey = 'github_app_installations_external_github_app_installation_i_key',
  /** unique or primary key constraint on columns "id" */
  GithubAppInstallationsPkey = 'github_app_installations_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type GithubAppInstallations_Delete_At_Path_Input = {
  githubData?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type GithubAppInstallations_Delete_Elem_Input = {
  githubData?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type GithubAppInstallations_Delete_Key_Input = {
  githubData?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "github_app_installations" */
export type GithubAppInstallations_Inc_Input = {
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "github_app_installations" */
export type GithubAppInstallations_Insert_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  githubRepositories?: InputMaybe<GithubRepositories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GithubAppInstallations_Max_Fields = {
  __typename?: 'githubAppInstallations_max_fields';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "github_app_installations" */
export type GithubAppInstallations_Max_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GithubAppInstallations_Min_Fields = {
  __typename?: 'githubAppInstallations_min_fields';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "github_app_installations" */
export type GithubAppInstallations_Min_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "github_app_installations" */
export type GithubAppInstallations_Mutation_Response = {
  __typename?: 'githubAppInstallations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubAppInstallations>;
};

/** input type for inserting object relation for remote table "github_app_installations" */
export type GithubAppInstallations_Obj_Rel_Insert_Input = {
  data: GithubAppInstallations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};

/** on_conflict condition type for table "github_app_installations" */
export type GithubAppInstallations_On_Conflict = {
  constraint: GithubAppInstallations_Constraint;
  update_columns?: Array<GithubAppInstallations_Update_Column>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};

/** Ordering options when selecting data from "github_app_installations". */
export type GithubAppInstallations_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  githubData?: InputMaybe<Order_By>;
  githubRepositories_aggregate?: InputMaybe<GithubRepositories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: github_app_installations */
export type GithubAppInstallations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type GithubAppInstallations_Prepend_Input = {
  githubData?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "github_app_installations" */
export enum GithubAppInstallations_Select_Column {
  /** column name */
  AccountAvatarUrl = 'accountAvatarUrl',
  /** column name */
  AccountLogin = 'accountLogin',
  /** column name */
  AccountNodeId = 'accountNodeId',
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppInstallationId = 'externalGithubAppInstallationId',
  /** column name */
  GithubData = 'githubData',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "github_app_installations" */
export type GithubAppInstallations_Set_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type GithubAppInstallations_Stddev_Fields = {
  __typename?: 'githubAppInstallations_stddev_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GithubAppInstallations_Stddev_Pop_Fields = {
  __typename?: 'githubAppInstallations_stddev_pop_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Pop_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GithubAppInstallations_Stddev_Samp_Fields = {
  __typename?: 'githubAppInstallations_stddev_samp_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Samp_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "githubAppInstallations" */
export type GithubAppInstallations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GithubAppInstallations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GithubAppInstallations_Stream_Cursor_Value_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type GithubAppInstallations_Sum_Fields = {
  __typename?: 'githubAppInstallations_sum_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "github_app_installations" */
export type GithubAppInstallations_Sum_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** update columns of table "github_app_installations" */
export enum GithubAppInstallations_Update_Column {
  /** column name */
  AccountAvatarUrl = 'accountAvatarUrl',
  /** column name */
  AccountLogin = 'accountLogin',
  /** column name */
  AccountNodeId = 'accountNodeId',
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppInstallationId = 'externalGithubAppInstallationId',
  /** column name */
  GithubData = 'githubData',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type GithubAppInstallations_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  /** filter the rows which have to be updated */
  where: GithubAppInstallations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GithubAppInstallations_Var_Pop_Fields = {
  __typename?: 'githubAppInstallations_var_pop_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "github_app_installations" */
export type GithubAppInstallations_Var_Pop_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GithubAppInstallations_Var_Samp_Fields = {
  __typename?: 'githubAppInstallations_var_samp_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "github_app_installations" */
export type GithubAppInstallations_Var_Samp_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GithubAppInstallations_Variance_Fields = {
  __typename?: 'githubAppInstallations_variance_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "github_app_installations" */
export type GithubAppInstallations_Variance_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** columns and relationships of "github_repositories" */
export type GithubRepositories = {
  __typename?: 'githubRepositories';
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  createdAt: Scalars['timestamptz'];
  externalGithubAppRepositoryNodeId: Scalars['String'];
  fullName: Scalars['String'];
  /** An object relationship */
  githubAppInstallation: GithubAppInstallations;
  githubAppInstallationId: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "github_repositories" */
export type GithubRepositoriesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "github_repositories" */
export type GithubRepositoriesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "github_repositories" */
export type GithubRepositories_Aggregate = {
  __typename?: 'githubRepositories_aggregate';
  aggregate?: Maybe<GithubRepositories_Aggregate_Fields>;
  nodes: Array<GithubRepositories>;
};

export type GithubRepositories_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Count>;
};

export type GithubRepositories_Aggregate_Bool_Exp_Bool_And = {
  arguments: GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type GithubRepositories_Aggregate_Bool_Exp_Bool_Or = {
  arguments: GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type GithubRepositories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "github_repositories" */
export type GithubRepositories_Aggregate_Fields = {
  __typename?: 'githubRepositories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GithubRepositories_Max_Fields>;
  min?: Maybe<GithubRepositories_Min_Fields>;
};


/** aggregate fields of "github_repositories" */
export type GithubRepositories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "github_repositories" */
export type GithubRepositories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GithubRepositories_Max_Order_By>;
  min?: InputMaybe<GithubRepositories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "github_repositories" */
export type GithubRepositories_Arr_Rel_Insert_Input = {
  data: Array<GithubRepositories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "github_repositories". All fields are combined with a logical 'AND'. */
export type GithubRepositories_Bool_Exp = {
  _and?: InputMaybe<Array<GithubRepositories_Bool_Exp>>;
  _not?: InputMaybe<GithubRepositories_Bool_Exp>;
  _or?: InputMaybe<Array<GithubRepositories_Bool_Exp>>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  externalGithubAppRepositoryNodeId?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  githubAppInstallationId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "github_repositories" */
export enum GithubRepositories_Constraint {
  /** unique or primary key constraint on columns "id" */
  GithubRepositoriesPkey = 'github_repositories_pkey'
}

/** input type for inserting data into table "github_repositories" */
export type GithubRepositories_Insert_Input = {
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Obj_Rel_Insert_Input>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type GithubRepositories_Max_Fields = {
  __typename?: 'githubRepositories_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  githubAppInstallationId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "github_repositories" */
export type GithubRepositories_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GithubRepositories_Min_Fields = {
  __typename?: 'githubRepositories_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  githubAppInstallationId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "github_repositories" */
export type GithubRepositories_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "github_repositories" */
export type GithubRepositories_Mutation_Response = {
  __typename?: 'githubRepositories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubRepositories>;
};

/** input type for inserting object relation for remote table "github_repositories" */
export type GithubRepositories_Obj_Rel_Insert_Input = {
  data: GithubRepositories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};

/** on_conflict condition type for table "github_repositories" */
export type GithubRepositories_On_Conflict = {
  constraint: GithubRepositories_Constraint;
  update_columns?: Array<GithubRepositories_Update_Column>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};

/** Ordering options when selecting data from "github_repositories". */
export type GithubRepositories_Order_By = {
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: github_repositories */
export type GithubRepositories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "github_repositories" */
export enum GithubRepositories_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppRepositoryNodeId = 'externalGithubAppRepositoryNodeId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  GithubAppInstallationId = 'githubAppInstallationId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "githubRepositories_aggregate_bool_exp_bool_and_arguments_columns" columns of table "github_repositories" */
export enum GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Private = 'private'
}

/** select "githubRepositories_aggregate_bool_exp_bool_or_arguments_columns" columns of table "github_repositories" */
export enum GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "github_repositories" */
export type GithubRepositories_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "githubRepositories" */
export type GithubRepositories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GithubRepositories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GithubRepositories_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "github_repositories" */
export enum GithubRepositories_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppRepositoryNodeId = 'externalGithubAppRepositoryNodeId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  GithubAppInstallationId = 'githubAppInstallationId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type GithubRepositories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  /** filter the rows which have to be updated */
  where: GithubRepositories_Bool_Exp;
};

export type GraphiteAssistant = {
  __typename?: 'graphiteAssistant';
  /** ID of the assistant */
  assistantID: Scalars['String'];
  /** Buckets this assistant has access to */
  buckets?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Description of the assistant */
  description: Scalars['String'];
  /** GraphQL data sources and tools. Run against the project's GraphQL API */
  graphql?: Maybe<Array<GraphiteAssistantToolGraphQl>>;
  /**
   * Instructions for the assistant. This is used to instruct the AI assistant
   * on how to behave and respond to the user
   */
  instructions: Scalars['String'];
  /** Model to use for the assistant. */
  model: Scalars['String'];
  /** Name of the assistant */
  name: Scalars['String'];
  /** Webhook data sources and tools */
  webhooks?: Maybe<Array<GraphiteAssistantToolWebhook>>;
};

export type GraphiteAssistantInput = {
  /** Buckets this assistant has access to */
  buckets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Description of the assistant */
  description: Scalars['String'];
  /** GraphQL data sources. Run against the project's GraphQL API */
  graphql?: InputMaybe<Array<InputMaybe<GraphiteAssistantToolGraphQlInput>>>;
  /**
   * Instructions for the assistant. This is used to instruct the AI assistant
   * on how to behave and respond to the user
   */
  instructions: Scalars['String'];
  /** Model to use for the assistant. */
  model: Scalars['String'];
  /** Name of the assistant */
  name: Scalars['String'];
  /** Webhook data sources */
  webhooks?: InputMaybe<Array<InputMaybe<GraphiteAssistantToolWebhookInput>>>;
};

export type GraphiteAssistantToolArgument = {
  __typename?: 'graphiteAssistantToolArgument';
  description: Scalars['String'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
};

export type GraphiteAssistantToolArgumentInput = {
  /** Description of the argument. Be as clear and concise as possible. */
  description: Scalars['String'];
  /** Name of the argument */
  name: Scalars['String'];
  /** Whether or not the argument is required */
  required: Scalars['Boolean'];
  /** Type of the argument */
  type: Scalars['String'];
};

export type GraphiteAssistantToolGraphQl = {
  __typename?: 'graphiteAssistantToolGraphQL';
  /** Arguments to pass to the GraphQL query */
  arguments: Array<GraphiteAssistantToolArgument>;
  /** Description of the data source */
  description: Scalars['String'];
  /** Name of the data source */
  name: Scalars['String'];
  /** GraphQL query to run against the project's GraphQL API. */
  query: Scalars['String'];
};

export type GraphiteAssistantToolGraphQlInput = {
  /** Arguments to pass to the GraphQL query */
  arguments: Array<GraphiteAssistantToolArgumentInput>;
  /**
   * Description of the data source. Be as clear and concise as possible.
   * This is used to help the AI assistant understand when and how
   * external data sources should be used.
   */
  description: Scalars['String'];
  /** Name of the data source. Use a descriptive name */
  name: Scalars['String'];
  /** GraphQL query to run against the project's GraphQL API. */
  query: Scalars['String'];
};

export type GraphiteAssistantToolWebhook = {
  __typename?: 'graphiteAssistantToolWebhook';
  /** URL of the webhook */
  URL: Scalars['String'];
  /** Arguments to pass to the webhook */
  arguments: Array<GraphiteAssistantToolArgument>;
  /** Description of the data source */
  description: Scalars['String'];
  /** Name of the data source */
  name: Scalars['String'];
};

export type GraphiteAssistantToolWebhookInput = {
  /** URL of the webhook */
  URL: Scalars['String'];
  /** Arguments to pass to the webhook */
  arguments: Array<GraphiteAssistantToolArgumentInput>;
  /**
   * Description of the data source. Be as clear and concise as possible.
   * This is used to help the AI assistant understand when and how
   * external data sources should be used.
   */
  description: Scalars['String'];
  /** Name of the data source. Use a descriptive name */
  name: Scalars['String'];
};

/** columns and relationships of "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration';
  columnName: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  lastRun?: Maybe<Scalars['timestamptz']>;
  model: Scalars['String'];
  mutation?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  query?: Maybe<Scalars['String']>;
  schemaName: Scalars['String'];
  tableName: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Aggregate = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration_aggregate';
  aggregate?: Maybe<GraphiteAutoEmbeddingsConfiguration_Aggregate_Fields>;
  nodes: Array<GraphiteAutoEmbeddingsConfiguration>;
};

/** aggregate fields of "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Aggregate_Fields = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GraphiteAutoEmbeddingsConfiguration_Max_Fields>;
  min?: Maybe<GraphiteAutoEmbeddingsConfiguration_Min_Fields>;
};


/** aggregate fields of "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "graphite.auto_embeddings_configuration". All fields are combined with a logical 'AND'. */
export type GraphiteAutoEmbeddingsConfiguration_Bool_Exp = {
  _and?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>>;
  _not?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
  _or?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>>;
  columnName?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastRun?: InputMaybe<Timestamptz_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  mutation?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  query?: InputMaybe<String_Comparison_Exp>;
  schemaName?: InputMaybe<String_Comparison_Exp>;
  tableName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "graphite.auto_embeddings_configuration" */
export enum GraphiteAutoEmbeddingsConfiguration_Constraint {
  /** unique or primary key constraint on columns "name" */
  AutoEmbeddingsConfigurationNameKey = 'auto_embeddings_configuration_name_key',
  /** unique or primary key constraint on columns "id" */
  AutoEmbeddingsConfigurationPkey = 'auto_embeddings_configuration_pkey',
  /** unique or primary key constraint on columns "column_name", "schema_name", "table_name" */
  AutoEmbeddingsConfigurationSchemaNameTableNameColumnKey = 'auto_embeddings_configuration_schema_name_table_name_column_key'
}

/** input type for inserting data into table "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Insert_Input = {
  columnName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastRun?: InputMaybe<Scalars['timestamptz']>;
  model?: InputMaybe<Scalars['String']>;
  mutation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  schemaName?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type GraphiteAutoEmbeddingsConfiguration_Max_Fields = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration_max_fields';
  columnName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastRun?: Maybe<Scalars['timestamptz']>;
  model?: Maybe<Scalars['String']>;
  mutation?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  schemaName?: Maybe<Scalars['String']>;
  tableName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type GraphiteAutoEmbeddingsConfiguration_Min_Fields = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration_min_fields';
  columnName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastRun?: Maybe<Scalars['timestamptz']>;
  model?: Maybe<Scalars['String']>;
  mutation?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  schemaName?: Maybe<Scalars['String']>;
  tableName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Mutation_Response = {
  __typename?: 'graphiteAutoEmbeddingsConfiguration_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GraphiteAutoEmbeddingsConfiguration>;
};

/** on_conflict condition type for table "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_On_Conflict = {
  constraint: GraphiteAutoEmbeddingsConfiguration_Constraint;
  update_columns?: Array<GraphiteAutoEmbeddingsConfiguration_Update_Column>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};

/** Ordering options when selecting data from "graphite.auto_embeddings_configuration". */
export type GraphiteAutoEmbeddingsConfiguration_Order_By = {
  columnName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastRun?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  mutation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  query?: InputMaybe<Order_By>;
  schemaName?: InputMaybe<Order_By>;
  tableName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: graphite.auto_embeddings_configuration */
export type GraphiteAutoEmbeddingsConfiguration_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "graphite.auto_embeddings_configuration" */
export enum GraphiteAutoEmbeddingsConfiguration_Select_Column {
  /** column name */
  ColumnName = 'columnName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastRun = 'lastRun',
  /** column name */
  Model = 'model',
  /** column name */
  Mutation = 'mutation',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query',
  /** column name */
  SchemaName = 'schemaName',
  /** column name */
  TableName = 'tableName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "graphite.auto_embeddings_configuration" */
export type GraphiteAutoEmbeddingsConfiguration_Set_Input = {
  columnName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastRun?: InputMaybe<Scalars['timestamptz']>;
  model?: InputMaybe<Scalars['String']>;
  mutation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  schemaName?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "graphiteAutoEmbeddingsConfiguration" */
export type GraphiteAutoEmbeddingsConfiguration_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GraphiteAutoEmbeddingsConfiguration_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GraphiteAutoEmbeddingsConfiguration_Stream_Cursor_Value_Input = {
  columnName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastRun?: InputMaybe<Scalars['timestamptz']>;
  model?: InputMaybe<Scalars['String']>;
  mutation?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  schemaName?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "graphite.auto_embeddings_configuration" */
export enum GraphiteAutoEmbeddingsConfiguration_Update_Column {
  /** column name */
  ColumnName = 'columnName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastRun = 'lastRun',
  /** column name */
  Model = 'model',
  /** column name */
  Mutation = 'mutation',
  /** column name */
  Name = 'name',
  /** column name */
  Query = 'query',
  /** column name */
  SchemaName = 'schemaName',
  /** column name */
  TableName = 'tableName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type GraphiteAutoEmbeddingsConfiguration_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Set_Input>;
  /** filter the rows which have to be updated */
  where: GraphiteAutoEmbeddingsConfiguration_Bool_Exp;
};

export type GraphiteMessage = {
  __typename?: 'graphiteMessage';
  /** Timestamp of when the message was sent */
  createdAt: Scalars['timestampz'];
  /** ID of the message */
  id: Scalars['String'];
  /** Message content */
  message: Scalars['String'];
  /** Role of the message. Either "user" or "assistant" */
  role: Scalars['String'];
};

export type GraphiteMessageResponse = {
  __typename?: 'graphiteMessageResponse';
  /** Messages in this session */
  messages: Array<GraphiteMessage>;
  /** ID of the session */
  sessionID: Scalars['String'];
};

export type GraphiteMutation = {
  __typename?: 'graphiteMutation';
  /**
   * Delete an assistant
   *
   * ## Permissions needed
   *
   * select (assistants):
   * - assistant_id
   * delete (assistants):
   */
  deleteAssistant: Scalars['Boolean'];
  /**
   * Delete a session
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - assistant_id
   * delete (sessions):
   */
  deleteSession: Scalars['Boolean'];
  /**
   * Create an assistant
   *
   * ## Permissions needed
   *
   * select (assistants):
   * - id
   * insert (assistants):
   * - user_id
   * update (assistants):
   * - assistant_id
   * - data
   */
  insertAssistant: GraphiteAssistant;
  /**
   * Send a message to a developer session.
   * If prevMessageID is `""`, return all messages in the session.
   * If prevMessageID is not `""`, return all messages after prevMessageID.
   *
   * ## Permissions needed
   *
   * Only admins can send messages to developer sessions
   */
  sendDevMessage: GraphiteMessageResponse;
  /**
   * Send a message to a session.
   * If prevMessageID is "", return all messages in the session.
   * If prevMessageID is not "", return all messages after prevMessageID.
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - id
   * - session_id
   * - assistant_id
   * update (sessions):
   * - update_at
   * select (assistants):
   * - id
   * - data
   */
  sendMessage: GraphiteMessageResponse;
  /**
   * Create a developer session
   *
   * ## Permissions needed
   *
   * Only admins can create developer sessions
   */
  startDevSession: GraphiteSession;
  /**
   * Create a session with a given assistant
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - id
   * insert (sessions):
   * - user_id
   * - assistant_id
   *
   * select (assistants):
   * - id
   * - data
   */
  startSession: GraphiteSession;
  /**
   * Update an assistant
   *
   * ## Permissions needed
   *
   * select (assistants):
   * - assistant_id
   * update (assistants):
   * - update_at
   * - data
   */
  updateAssistant: GraphiteAssistant;
};


export type GraphiteMutationDeleteAssistantArgs = {
  assistantID: Scalars['String'];
};


export type GraphiteMutationDeleteSessionArgs = {
  sessionID: Scalars['String'];
};


export type GraphiteMutationInsertAssistantArgs = {
  object: GraphiteAssistantInput;
};


export type GraphiteMutationSendDevMessageArgs = {
  message: Scalars['String'];
  prevMessageID: Scalars['String'];
  sessionID: Scalars['String'];
};


export type GraphiteMutationSendMessageArgs = {
  message: Scalars['String'];
  prevMessageID: Scalars['String'];
  sessionID: Scalars['String'];
};


export type GraphiteMutationStartSessionArgs = {
  assistantID: Scalars['String'];
};


export type GraphiteMutationUpdateAssistantArgs = {
  assistantID: Scalars['String'];
  object: GraphiteAssistantInput;
};

export type GraphiteQuery = {
  __typename?: 'graphiteQuery';
  /**
   * Retrieve an assistant
   *
   * ## Permissions needed
   *
   * select (assistants):
   * - id
   * - assistantID
   * - data
   */
  assistant?: Maybe<GraphiteAssistant>;
  /**
   * Retrieve all assistants
   *
   * ## Permissions needed
   *
   * select (assistants):
   * - id
   * - assistant_id
   * - data
   */
  assistants: Array<GraphiteAssistant>;
  /**
   * Retrieve a session
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - id
   * - assistant_id
   * - session_id
   * - user_id
   */
  session?: Maybe<GraphiteSession>;
  /**
   * Retrieve all messages for a session
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - id
   * - assistant_id
   * - session_id
   * - user_id
   */
  sessionMessages?: Maybe<GraphiteMessageResponse>;
  /**
   * Retrieve all sessions
   *
   * ## Permissions needed
   *
   * select (sessions):
   * - id
   * - assistant_id
   * - session_id
   * - user_id
   */
  sessions: Array<GraphiteSession>;
};


export type GraphiteQueryAssistantArgs = {
  assistantID: Scalars['String'];
};


export type GraphiteQuerySessionArgs = {
  sessionID: Scalars['String'];
};


export type GraphiteQuerySessionMessagesArgs = {
  sessionID: Scalars['String'];
};

export type GraphiteSession = {
  __typename?: 'graphiteSession';
  /** ID of the assistant used in this session */
  assistantID: Scalars['String'];
  /** Messages in this session */
  createdAt: Scalars['timestampz'];
  /** ID of the session */
  sessionID: Scalars['String'];
  /** ID of the user who started this session */
  userID: Scalars['uuid'];
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "graphite.assistants" */
  _deleteGraphiteAssistant?: Maybe<_GraphiteAssistants>;
  /** delete data from the table: "graphite.assistants" */
  _deleteGraphiteAssistants?: Maybe<_GraphiteAssistants_Mutation_Response>;
  /** delete single row from the table: "graphite.files" */
  _deleteGraphiteFile?: Maybe<_GraphiteFiles>;
  /** delete data from the table: "graphite.files" */
  _deleteGraphiteFiles?: Maybe<_GraphiteFiles_Mutation_Response>;
  /** delete single row from the table: "graphite.sessions" */
  _deleteGraphiteSession?: Maybe<_GraphiteSessions>;
  /** delete data from the table: "graphite.sessions" */
  _deleteGraphiteSessions?: Maybe<_GraphiteSessions_Mutation_Response>;
  /** insert a single row into the table: "graphite.assistants" */
  _insertGraphiteAssistant?: Maybe<_GraphiteAssistants>;
  /** insert data into the table: "graphite.assistants" */
  _insertGraphiteAssistants?: Maybe<_GraphiteAssistants_Mutation_Response>;
  /** insert a single row into the table: "graphite.files" */
  _insertGraphiteFile?: Maybe<_GraphiteFiles>;
  /** insert data into the table: "graphite.files" */
  _insertGraphiteFiles?: Maybe<_GraphiteFiles_Mutation_Response>;
  /** insert a single row into the table: "graphite.sessions" */
  _insertGraphiteSession?: Maybe<_GraphiteSessions>;
  /** insert data into the table: "graphite.sessions" */
  _insertGraphiteSessions?: Maybe<_GraphiteSessions_Mutation_Response>;
  /** update single row of the table: "graphite.assistants" */
  _updateGraphiteAssistant?: Maybe<_GraphiteAssistants>;
  /** update data of the table: "graphite.assistants" */
  _updateGraphiteAssistants?: Maybe<_GraphiteAssistants_Mutation_Response>;
  /** update single row of the table: "graphite.files" */
  _updateGraphiteFile?: Maybe<_GraphiteFiles>;
  /** update data of the table: "graphite.files" */
  _updateGraphiteFiles?: Maybe<_GraphiteFiles_Mutation_Response>;
  /** update single row of the table: "graphite.sessions" */
  _updateGraphiteSession?: Maybe<_GraphiteSessions>;
  /** update data of the table: "graphite.sessions" */
  _updateGraphiteSessions?: Maybe<_GraphiteSessions_Mutation_Response>;
  /** update multiples rows of table: "graphite.assistants" */
  _updateManyGraphiteAssistants?: Maybe<Array<Maybe<_GraphiteAssistants_Mutation_Response>>>;
  /** update multiples rows of table: "graphite.files" */
  _updateManyGraphiteFiles?: Maybe<Array<Maybe<_GraphiteFiles_Mutation_Response>>>;
  /** update multiples rows of table: "graphite.sessions" */
  _updateManyGraphiteSessions?: Maybe<Array<Maybe<_GraphiteSessions_Mutation_Response>>>;
  backupAllApplicationsDatabase: Array<Maybe<BackupResultsItem>>;
  backupApplicationDatabase: BackupResult;
  billingFinishSubscription: Scalars['Boolean'];
  billingFixSubscriptions: Scalars['Boolean'];
  billingFullReportWorkflow: Scalars['Boolean'];
  billingUpdateCustomDomains: Scalars['Boolean'];
  billingUpdateDedicatedCompute: Scalars['Boolean'];
  billingUpdateFunctionsAmount: Scalars['Boolean'];
  billingUpdatePersistentVolume: Scalars['Boolean'];
  billingUpdateReports: Scalars['Boolean'];
  billingUploadReports: Scalars['Boolean'];
  changeDatabaseVersion: Scalars['Boolean'];
  /** delete single row from the table: "apps" */
  deleteApp?: Maybe<Apps>;
  /** delete single row from the table: "app_states" */
  deleteAppState?: Maybe<AppStates>;
  /** delete data from the table: "app_state_history" */
  deleteAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** delete single row from the table: "app_state_history" */
  deleteAppStateHistory?: Maybe<AppStateHistory>;
  /** delete data from the table: "app_states" */
  deleteAppStates?: Maybe<AppStates_Mutation_Response>;
  /** delete data from the table: "apps" */
  deleteApps?: Maybe<Apps_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "backups" */
  deleteBackup?: Maybe<Backups>;
  /** delete data from the table: "backups" */
  deleteBackups?: Maybe<Backups_Mutation_Response>;
  /** delete single row from the table: "billing.dedicated_compute" */
  deleteBillingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** delete data from the table: "billing.dedicated_compute" */
  deleteBillingDedicatedComputes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** delete single row from the table: "billing.reports" */
  deleteBillingReport?: Maybe<Billing_Reports>;
  /** delete data from the table: "billing.reports" */
  deleteBillingReports?: Maybe<Billing_Reports_Mutation_Response>;
  /** delete single row from the table: "billing.resources" */
  deleteBillingResource?: Maybe<Billing_Resources>;
  /** delete data from the table: "billing.resources" */
  deleteBillingResources?: Maybe<Billing_Resources_Mutation_Response>;
  /** delete data from the table: "billing.subscriptions" */
  deleteBillingSubscription?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** delete single row from the table: "billing.subscriptions" */
  deleteBillingSubscriptions?: Maybe<Billing_Subscriptions>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "cli_tokens" */
  deleteCliToken?: Maybe<CliTokens>;
  /** delete data from the table: "cli_tokens" */
  deleteCliTokens?: Maybe<CliTokens_Mutation_Response>;
  deleteConfig?: Maybe<ConfigConfig>;
  /** delete single row from the table: "deployments" */
  deleteDeployment?: Maybe<Deployments>;
  /** delete single row from the table: "deployment_logs" */
  deleteDeploymentLog?: Maybe<DeploymentLogs>;
  /** delete data from the table: "deployment_logs" */
  deleteDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** delete data from the table: "deployments" */
  deleteDeployments?: Maybe<Deployments_Mutation_Response>;
  /** delete single row from the table: "feature_flags" */
  deleteFeatureFlag?: Maybe<FeatureFlags>;
  /** delete data from the table: "feature_flags" */
  deleteFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "github_app_installations" */
  deleteGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** delete data from the table: "github_app_installations" */
  deleteGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** delete data from the table: "github_repositories" */
  deleteGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** delete single row from the table: "github_repositories" */
  deleteGithubRepository?: Maybe<GithubRepositories>;
  /** delete single row from the table: "graphite.auto_embeddings_configuration" */
  deleteGraphiteAutoEmbeddingsConfiguration?: Maybe<GraphiteAutoEmbeddingsConfiguration>;
  /** delete data from the table: "graphite.auto_embeddings_configuration" */
  deleteGraphiteAutoEmbeddingsConfigurations?: Maybe<GraphiteAutoEmbeddingsConfiguration_Mutation_Response>;
  /** delete single row from the table: "payment_methods" */
  deletePaymentMethod?: Maybe<PaymentMethods>;
  /** delete data from the table: "payment_methods" */
  deletePaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** delete single row from the table: "plans" */
  deletePlan?: Maybe<Plans>;
  /** delete data from the table: "plans" */
  deletePlans?: Maybe<Plans_Mutation_Response>;
  /** delete single row from the table: "regions_allowed_workspace" */
  deleteRegionsAllowedWorkspace?: Maybe<Regions_Allowed_Workspace>;
  /** delete data from the table: "regions_allowed_workspace" */
  deleteRegionsAllowedWorkspaces?: Maybe<Regions_Allowed_Workspace_Mutation_Response>;
  /** delete single row from the table: "run_service" */
  deleteRunService?: Maybe<Run_Service>;
  deleteRunServiceConfig?: Maybe<ConfigRunServiceConfig>;
  /** delete data from the table: "run_service" */
  deleteRunServices?: Maybe<Run_Service_Mutation_Response>;
  deleteSecret?: Maybe<ConfigEnvironmentVariable>;
  /** delete single row from the table: "software_type" */
  deleteSoftwareType?: Maybe<Software_Type>;
  /** delete data from the table: "software_type" */
  deleteSoftwareTypes?: Maybe<Software_Type_Mutation_Response>;
  /** delete single row from the table: "software_versions" */
  deleteSoftwareVersion?: Maybe<Software_Versions>;
  /** delete data from the table: "software_versions" */
  deleteSoftwareVersions?: Maybe<Software_Versions_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users_usage" */
  deleteUsersUsage?: Maybe<Users_Usage>;
  /** delete data from the table: "users_usage" */
  deleteUsersUsages?: Maybe<Users_Usage_Mutation_Response>;
  /** delete single row from the table: "workspaces" */
  deleteWorkspace?: Maybe<Workspaces>;
  /** delete single row from the table: "workspace_members" */
  deleteWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** delete single row from the table: "workspace_member_invites" */
  deleteWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** delete data from the table: "workspace_member_invites" */
  deleteWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** delete data from the table: "workspace_members" */
  deleteWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** delete data from the table: "workspaces" */
  deleteWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** delete data from the table: "announcements" */
  delete_announcements?: Maybe<Announcements_Mutation_Response>;
  /** delete single row from the table: "announcements" */
  delete_announcements_by_pk?: Maybe<Announcements>;
  /** delete data from the table: "auth.migrations" */
  delete_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** delete single row from the table: "auth.migrations" */
  delete_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** delete data from the table: "billing.report_type" */
  delete_billing_report_type?: Maybe<Billing_Report_Type_Mutation_Response>;
  /** delete single row from the table: "billing.report_type" */
  delete_billing_report_type_by_pk?: Maybe<Billing_Report_Type>;
  /** delete data from the table: "continents" */
  delete_continents?: Maybe<Continents_Mutation_Response>;
  /** delete single row from the table: "continents" */
  delete_continents_by_pk?: Maybe<Continents>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "region_type" */
  delete_region_type?: Maybe<Region_Type_Mutation_Response>;
  /** delete single row from the table: "region_type" */
  delete_region_type_by_pk?: Maybe<Region_Type>;
  /** delete data from the table: "regions" */
  delete_regions?: Maybe<Regions_Mutation_Response>;
  /** delete single row from the table: "regions" */
  delete_regions_by_pk?: Maybe<Regions>;
  graphite?: Maybe<GraphiteMutation>;
  /** insert a single row into the table: "apps" */
  insertApp?: Maybe<Apps>;
  /** insert a single row into the table: "app_states" */
  insertAppState?: Maybe<AppStates>;
  /** insert data into the table: "app_state_history" */
  insertAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** insert a single row into the table: "app_state_history" */
  insertAppStateHistory?: Maybe<AppStateHistory>;
  /** insert data into the table: "app_states" */
  insertAppStates?: Maybe<AppStates_Mutation_Response>;
  /** insert data into the table: "apps" */
  insertApps?: Maybe<Apps_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "backups" */
  insertBackup?: Maybe<Backups>;
  /** insert data into the table: "backups" */
  insertBackups?: Maybe<Backups_Mutation_Response>;
  /** insert a single row into the table: "billing.dedicated_compute" */
  insertBillingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** insert data into the table: "billing.dedicated_compute" */
  insertBillingDedicatedComputes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** insert a single row into the table: "billing.reports" */
  insertBillingReport?: Maybe<Billing_Reports>;
  /** insert data into the table: "billing.reports" */
  insertBillingReports?: Maybe<Billing_Reports_Mutation_Response>;
  /** insert a single row into the table: "billing.resources" */
  insertBillingResource?: Maybe<Billing_Resources>;
  /** insert data into the table: "billing.resources" */
  insertBillingResources?: Maybe<Billing_Resources_Mutation_Response>;
  /** insert data into the table: "billing.subscriptions" */
  insertBillingSubscription?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "billing.subscriptions" */
  insertBillingSubscriptions?: Maybe<Billing_Subscriptions>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "cli_tokens" */
  insertCliToken?: Maybe<CliTokens>;
  /** insert data into the table: "cli_tokens" */
  insertCliTokens?: Maybe<CliTokens_Mutation_Response>;
  insertConfig: ConfigInsertConfigResponse;
  /** insert a single row into the table: "deployments" */
  insertDeployment?: Maybe<Deployments>;
  /** insert a single row into the table: "deployment_logs" */
  insertDeploymentLog?: Maybe<DeploymentLogs>;
  /** insert data into the table: "deployment_logs" */
  insertDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** insert data into the table: "deployments" */
  insertDeployments?: Maybe<Deployments_Mutation_Response>;
  /** insert a single row into the table: "feature_flags" */
  insertFeatureFlag?: Maybe<FeatureFlags>;
  /** insert data into the table: "feature_flags" */
  insertFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "github_app_installations" */
  insertGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** insert data into the table: "github_app_installations" */
  insertGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** insert data into the table: "github_repositories" */
  insertGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** insert a single row into the table: "github_repositories" */
  insertGithubRepository?: Maybe<GithubRepositories>;
  /** insert a single row into the table: "graphite.auto_embeddings_configuration" */
  insertGraphiteAutoEmbeddingsConfiguration?: Maybe<GraphiteAutoEmbeddingsConfiguration>;
  /** insert data into the table: "graphite.auto_embeddings_configuration" */
  insertGraphiteAutoEmbeddingsConfigurations?: Maybe<GraphiteAutoEmbeddingsConfiguration_Mutation_Response>;
  /** insert a single row into the table: "payment_methods" */
  insertPaymentMethod?: Maybe<PaymentMethods>;
  /** insert data into the table: "payment_methods" */
  insertPaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** insert a single row into the table: "plans" */
  insertPlan?: Maybe<Plans>;
  /** insert data into the table: "plans" */
  insertPlans?: Maybe<Plans_Mutation_Response>;
  /** insert a single row into the table: "regions_allowed_workspace" */
  insertRegionsAllowedWorkspace?: Maybe<Regions_Allowed_Workspace>;
  /** insert data into the table: "regions_allowed_workspace" */
  insertRegionsAllowedWorkspaces?: Maybe<Regions_Allowed_Workspace_Mutation_Response>;
  /** insert a single row into the table: "run_service" */
  insertRunService?: Maybe<Run_Service>;
  insertRunServiceConfig: ConfigRunServiceConfig;
  /** insert data into the table: "run_service" */
  insertRunServices?: Maybe<Run_Service_Mutation_Response>;
  insertSecret: ConfigEnvironmentVariable;
  /** insert a single row into the table: "software_type" */
  insertSoftwareType?: Maybe<Software_Type>;
  /** insert data into the table: "software_type" */
  insertSoftwareTypes?: Maybe<Software_Type_Mutation_Response>;
  /** insert a single row into the table: "software_versions" */
  insertSoftwareVersion?: Maybe<Software_Versions>;
  /** insert data into the table: "software_versions" */
  insertSoftwareVersions?: Maybe<Software_Versions_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users_usage" */
  insertUsersUsage?: Maybe<Users_Usage>;
  /** insert data into the table: "users_usage" */
  insertUsersUsages?: Maybe<Users_Usage_Mutation_Response>;
  /** insert a single row into the table: "workspaces" */
  insertWorkspace?: Maybe<Workspaces>;
  /** insert a single row into the table: "workspace_members" */
  insertWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** insert a single row into the table: "workspace_member_invites" */
  insertWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** insert data into the table: "workspace_member_invites" */
  insertWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** insert data into the table: "workspace_members" */
  insertWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** insert data into the table: "workspaces" */
  insertWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** insert data into the table: "announcements" */
  insert_announcements?: Maybe<Announcements_Mutation_Response>;
  /** insert a single row into the table: "announcements" */
  insert_announcements_one?: Maybe<Announcements>;
  /** insert data into the table: "auth.migrations" */
  insert_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** insert a single row into the table: "auth.migrations" */
  insert_auth_migrations_one?: Maybe<Auth_Migrations>;
  /** insert data into the table: "billing.report_type" */
  insert_billing_report_type?: Maybe<Billing_Report_Type_Mutation_Response>;
  /** insert a single row into the table: "billing.report_type" */
  insert_billing_report_type_one?: Maybe<Billing_Report_Type>;
  /** insert data into the table: "continents" */
  insert_continents?: Maybe<Continents_Mutation_Response>;
  /** insert a single row into the table: "continents" */
  insert_continents_one?: Maybe<Continents>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "region_type" */
  insert_region_type?: Maybe<Region_Type_Mutation_Response>;
  /** insert a single row into the table: "region_type" */
  insert_region_type_one?: Maybe<Region_Type>;
  /** insert data into the table: "regions" */
  insert_regions?: Maybe<Regions_Mutation_Response>;
  /** insert a single row into the table: "regions" */
  insert_regions_one?: Maybe<Regions>;
  pauseAppsExceedUsage: Array<Scalars['String']>;
  pauseInactiveApps: Array<Scalars['String']>;
  replaceConfig: ConfigConfig;
  replaceConfigRawJSON: Scalars['String'];
  replaceRunServiceConfig: ConfigRunServiceConfig;
  resetPostgresPassword: Scalars['Boolean'];
  restoreApplicationDatabase: Scalars['Boolean'];
  sendEmailTemplate: Scalars['Boolean'];
  /** update single row of the table: "apps" */
  updateApp?: Maybe<Apps>;
  /** update single row of the table: "app_states" */
  updateAppState?: Maybe<AppStates>;
  /** update data of the table: "app_state_history" */
  updateAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** update single row of the table: "app_state_history" */
  updateAppStateHistory?: Maybe<AppStateHistory>;
  /** update data of the table: "app_states" */
  updateAppStates?: Maybe<AppStates_Mutation_Response>;
  /** update data of the table: "apps" */
  updateApps?: Maybe<Apps_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "backups" */
  updateBackup?: Maybe<Backups>;
  /** update data of the table: "backups" */
  updateBackups?: Maybe<Backups_Mutation_Response>;
  /** update single row of the table: "billing.dedicated_compute" */
  updateBillingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** update data of the table: "billing.dedicated_compute" */
  updateBillingDedicatedComputes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** update single row of the table: "billing.reports" */
  updateBillingReport?: Maybe<Billing_Reports>;
  /** update data of the table: "billing.reports" */
  updateBillingReports?: Maybe<Billing_Reports_Mutation_Response>;
  /** update single row of the table: "billing.resources" */
  updateBillingResource?: Maybe<Billing_Resources>;
  /** update data of the table: "billing.resources" */
  updateBillingResources?: Maybe<Billing_Resources_Mutation_Response>;
  /** update single row of the table: "billing.subscriptions" */
  updateBillingSubscription?: Maybe<Billing_Subscriptions>;
  /** update data of the table: "billing.subscriptions" */
  updateBillingSubscriptions?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "cli_tokens" */
  updateCliToken?: Maybe<CliTokens>;
  /** update data of the table: "cli_tokens" */
  updateCliTokens?: Maybe<CliTokens_Mutation_Response>;
  updateConfig: ConfigConfig;
  /** update single row of the table: "deployments" */
  updateDeployment?: Maybe<Deployments>;
  /** update single row of the table: "deployment_logs" */
  updateDeploymentLog?: Maybe<DeploymentLogs>;
  /** update data of the table: "deployment_logs" */
  updateDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** update data of the table: "deployments" */
  updateDeployments?: Maybe<Deployments_Mutation_Response>;
  /** update single row of the table: "feature_flags" */
  updateFeatureFlag?: Maybe<FeatureFlags>;
  /** update data of the table: "feature_flags" */
  updateFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "github_app_installations" */
  updateGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** update data of the table: "github_app_installations" */
  updateGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** update data of the table: "github_repositories" */
  updateGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** update single row of the table: "github_repositories" */
  updateGithubRepository?: Maybe<GithubRepositories>;
  /** update single row of the table: "graphite.auto_embeddings_configuration" */
  updateGraphiteAutoEmbeddingsConfiguration?: Maybe<GraphiteAutoEmbeddingsConfiguration>;
  /** update data of the table: "graphite.auto_embeddings_configuration" */
  updateGraphiteAutoEmbeddingsConfigurations?: Maybe<GraphiteAutoEmbeddingsConfiguration_Mutation_Response>;
  /** update multiples rows of table: "billing.reports" */
  updateManyBillingReports?: Maybe<Array<Maybe<Billing_Reports_Mutation_Response>>>;
  /** update multiples rows of table: "billing.resources" */
  updateManyBillingResources?: Maybe<Array<Maybe<Billing_Resources_Mutation_Response>>>;
  /** update multiples rows of table: "graphite.auto_embeddings_configuration" */
  updateManyGraphiteAutoEmbeddingsConfigurations?: Maybe<Array<Maybe<GraphiteAutoEmbeddingsConfiguration_Mutation_Response>>>;
  /** update multiples rows of table: "software_type" */
  updateManySoftwareType?: Maybe<Array<Maybe<Software_Type_Mutation_Response>>>;
  /** update multiples rows of table: "software_versions" */
  updateManySoftwareVersions?: Maybe<Array<Maybe<Software_Versions_Mutation_Response>>>;
  /** update single row of the table: "payment_methods" */
  updatePaymentMethod?: Maybe<PaymentMethods>;
  /** update data of the table: "payment_methods" */
  updatePaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** update single row of the table: "plans" */
  updatePlan?: Maybe<Plans>;
  /** update data of the table: "plans" */
  updatePlans?: Maybe<Plans_Mutation_Response>;
  /** update single row of the table: "regions_allowed_workspace" */
  updateRegionsAllowedWorkspace?: Maybe<Regions_Allowed_Workspace>;
  /** update data of the table: "regions_allowed_workspace" */
  updateRegionsAllowedWorkspaces?: Maybe<Regions_Allowed_Workspace_Mutation_Response>;
  /** update single row of the table: "run_service" */
  updateRunService?: Maybe<Run_Service>;
  updateRunServiceConfig: ConfigRunServiceConfig;
  /** update data of the table: "run_service" */
  updateRunServices?: Maybe<Run_Service_Mutation_Response>;
  updateSecret: ConfigEnvironmentVariable;
  /** update single row of the table: "software_type" */
  updateSoftwareType?: Maybe<Software_Type>;
  /** update data of the table: "software_type" */
  updateSoftwareTypes?: Maybe<Software_Type_Mutation_Response>;
  /** update single row of the table: "software_versions" */
  updateSoftwareVersion?: Maybe<Software_Versions>;
  /** update data of the table: "software_versions" */
  updateSoftwareVersions?: Maybe<Software_Versions_Mutation_Response>;
  updateSystemConfig: ConfigSystemConfig;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users_usage" */
  updateUsersUsage?: Maybe<Users_Usage>;
  /** update data of the table: "users_usage" */
  updateUsersUsages?: Maybe<Users_Usage_Mutation_Response>;
  /** update single row of the table: "workspaces" */
  updateWorkspace?: Maybe<Workspaces>;
  /** update single row of the table: "workspace_members" */
  updateWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** update single row of the table: "workspace_member_invites" */
  updateWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** update data of the table: "workspace_member_invites" */
  updateWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** update data of the table: "workspace_members" */
  updateWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** update data of the table: "workspaces" */
  updateWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** update data of the table: "announcements" */
  update_announcements?: Maybe<Announcements_Mutation_Response>;
  /** update single row of the table: "announcements" */
  update_announcements_by_pk?: Maybe<Announcements>;
  /** update multiples rows of table: "announcements" */
  update_announcements_many?: Maybe<Array<Maybe<Announcements_Mutation_Response>>>;
  /** update multiples rows of table: "app_state_history" */
  update_appStateHistory_many?: Maybe<Array<Maybe<AppStateHistory_Mutation_Response>>>;
  /** update multiples rows of table: "app_states" */
  update_appStates_many?: Maybe<Array<Maybe<AppStates_Mutation_Response>>>;
  /** update multiples rows of table: "apps" */
  update_apps_many?: Maybe<Array<Maybe<Apps_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "auth.migrations" */
  update_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** update single row of the table: "auth.migrations" */
  update_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** update multiples rows of table: "auth.migrations" */
  update_auth_migrations_many?: Maybe<Array<Maybe<Auth_Migrations_Mutation_Response>>>;
  /** update multiples rows of table: "backups" */
  update_backups_many?: Maybe<Array<Maybe<Backups_Mutation_Response>>>;
  /** update multiples rows of table: "billing.dedicated_compute" */
  update_billing_dedicated_compute_many?: Maybe<Array<Maybe<Billing_Dedicated_Compute_Mutation_Response>>>;
  /** update data of the table: "billing.report_type" */
  update_billing_report_type?: Maybe<Billing_Report_Type_Mutation_Response>;
  /** update single row of the table: "billing.report_type" */
  update_billing_report_type_by_pk?: Maybe<Billing_Report_Type>;
  /** update multiples rows of table: "billing.report_type" */
  update_billing_report_type_many?: Maybe<Array<Maybe<Billing_Report_Type_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update multiples rows of table: "cli_tokens" */
  update_cliTokens_many?: Maybe<Array<Maybe<CliTokens_Mutation_Response>>>;
  /** update data of the table: "continents" */
  update_continents?: Maybe<Continents_Mutation_Response>;
  /** update single row of the table: "continents" */
  update_continents_by_pk?: Maybe<Continents>;
  /** update multiples rows of table: "continents" */
  update_continents_many?: Maybe<Array<Maybe<Continents_Mutation_Response>>>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update multiples rows of table: "countries" */
  update_countries_many?: Maybe<Array<Maybe<Countries_Mutation_Response>>>;
  /** update multiples rows of table: "deployment_logs" */
  update_deploymentLogs_many?: Maybe<Array<Maybe<DeploymentLogs_Mutation_Response>>>;
  /** update multiples rows of table: "deployments" */
  update_deployments_many?: Maybe<Array<Maybe<Deployments_Mutation_Response>>>;
  /** update multiples rows of table: "feature_flags" */
  update_featureFlags_many?: Maybe<Array<Maybe<FeatureFlags_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update multiples rows of table: "github_app_installations" */
  update_githubAppInstallations_many?: Maybe<Array<Maybe<GithubAppInstallations_Mutation_Response>>>;
  /** update multiples rows of table: "github_repositories" */
  update_githubRepositories_many?: Maybe<Array<Maybe<GithubRepositories_Mutation_Response>>>;
  /** update multiples rows of table: "billing.subscriptions" */
  update_many_billing_subscriptions?: Maybe<Array<Maybe<Billing_Subscriptions_Mutation_Response>>>;
  /** update multiples rows of table: "payment_methods" */
  update_paymentMethods_many?: Maybe<Array<Maybe<PaymentMethods_Mutation_Response>>>;
  /** update multiples rows of table: "plans" */
  update_plans_many?: Maybe<Array<Maybe<Plans_Mutation_Response>>>;
  /** update data of the table: "region_type" */
  update_region_type?: Maybe<Region_Type_Mutation_Response>;
  /** update single row of the table: "region_type" */
  update_region_type_by_pk?: Maybe<Region_Type>;
  /** update multiples rows of table: "region_type" */
  update_region_type_many?: Maybe<Array<Maybe<Region_Type_Mutation_Response>>>;
  /** update data of the table: "regions" */
  update_regions?: Maybe<Regions_Mutation_Response>;
  /** update multiples rows of table: "regions_allowed_workspace" */
  update_regions_allowed_workspace_many?: Maybe<Array<Maybe<Regions_Allowed_Workspace_Mutation_Response>>>;
  /** update single row of the table: "regions" */
  update_regions_by_pk?: Maybe<Regions>;
  /** update multiples rows of table: "regions" */
  update_regions_many?: Maybe<Array<Maybe<Regions_Mutation_Response>>>;
  /** update multiples rows of table: "run_service" */
  update_run_service_many?: Maybe<Array<Maybe<Run_Service_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "users_usage" */
  update_users_usage_many?: Maybe<Array<Maybe<Users_Usage_Mutation_Response>>>;
  /** update multiples rows of table: "workspace_member_invites" */
  update_workspaceMemberInvites_many?: Maybe<Array<Maybe<WorkspaceMemberInvites_Mutation_Response>>>;
  /** update multiples rows of table: "workspace_members" */
  update_workspaceMembers_many?: Maybe<Array<Maybe<WorkspaceMembers_Mutation_Response>>>;
  /** update multiples rows of table: "workspaces" */
  update_workspaces_many?: Maybe<Array<Maybe<Workspaces_Mutation_Response>>>;
  /** delete single row from the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_delete_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** delete data from the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_delete_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** insert a single row into the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_insert_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** insert data into the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_insert_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** update single row of the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** update data of the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** update multiples rows of table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_many_billing_dedicated_compute_reports?: Maybe<Array<Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteAssistantArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteAssistantsArgs = {
  where: _GraphiteAssistants_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteFilesArgs = {
  where: _GraphiteFiles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteSessionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_Root_DeleteGraphiteSessionsArgs = {
  where: _GraphiteSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteAssistantArgs = {
  object: _GraphiteAssistants_Insert_Input;
  on_conflict?: InputMaybe<_GraphiteAssistants_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteAssistantsArgs = {
  objects: Array<_GraphiteAssistants_Insert_Input>;
  on_conflict?: InputMaybe<_GraphiteAssistants_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteFileArgs = {
  object: _GraphiteFiles_Insert_Input;
  on_conflict?: InputMaybe<_GraphiteFiles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteFilesArgs = {
  objects: Array<_GraphiteFiles_Insert_Input>;
  on_conflict?: InputMaybe<_GraphiteFiles_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteSessionArgs = {
  object: _GraphiteSessions_Insert_Input;
  on_conflict?: InputMaybe<_GraphiteSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_InsertGraphiteSessionsArgs = {
  objects: Array<_GraphiteSessions_Insert_Input>;
  on_conflict?: InputMaybe<_GraphiteSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteAssistantArgs = {
  _append?: InputMaybe<_GraphiteAssistants_Append_Input>;
  _delete_at_path?: InputMaybe<_GraphiteAssistants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<_GraphiteAssistants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<_GraphiteAssistants_Delete_Key_Input>;
  _prepend?: InputMaybe<_GraphiteAssistants_Prepend_Input>;
  _set?: InputMaybe<_GraphiteAssistants_Set_Input>;
  pk_columns: _GraphiteAssistants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteAssistantsArgs = {
  _append?: InputMaybe<_GraphiteAssistants_Append_Input>;
  _delete_at_path?: InputMaybe<_GraphiteAssistants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<_GraphiteAssistants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<_GraphiteAssistants_Delete_Key_Input>;
  _prepend?: InputMaybe<_GraphiteAssistants_Prepend_Input>;
  _set?: InputMaybe<_GraphiteAssistants_Set_Input>;
  where: _GraphiteAssistants_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteFileArgs = {
  _set?: InputMaybe<_GraphiteFiles_Set_Input>;
  pk_columns: _GraphiteFiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteFilesArgs = {
  _set?: InputMaybe<_GraphiteFiles_Set_Input>;
  where: _GraphiteFiles_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteSessionArgs = {
  _set?: InputMaybe<_GraphiteSessions_Set_Input>;
  pk_columns: _GraphiteSessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_Root_UpdateGraphiteSessionsArgs = {
  _set?: InputMaybe<_GraphiteSessions_Set_Input>;
  where: _GraphiteSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_Root_UpdateManyGraphiteAssistantsArgs = {
  updates: Array<_GraphiteAssistants_Updates>;
};


/** mutation root */
export type Mutation_Root_UpdateManyGraphiteFilesArgs = {
  updates: Array<_GraphiteFiles_Updates>;
};


/** mutation root */
export type Mutation_Root_UpdateManyGraphiteSessionsArgs = {
  updates: Array<_GraphiteSessions_Updates>;
};


/** mutation root */
export type Mutation_RootBackupApplicationDatabaseArgs = {
  appID: Scalars['String'];
  expireInDays?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootBillingFinishSubscriptionArgs = {
  appID: Scalars['uuid'];
  appName: Scalars['String'];
  planID: Scalars['uuid'];
  subdomain: Scalars['String'];
  subscriptionID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootBillingFullReportWorkflowArgs = {
  reportTime?: InputMaybe<Scalars['Timestamp']>;
};


/** mutation root */
export type Mutation_RootBillingUpdateCustomDomainsArgs = {
  amount: Scalars['Int'];
  appID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootBillingUpdateDedicatedComputeArgs = {
  appID: Scalars['uuid'];
  totalMillicores: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootBillingUpdateFunctionsAmountArgs = {
  amount: Scalars['Int'];
  appID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootBillingUpdatePersistentVolumeArgs = {
  amount: Scalars['Int'];
  appID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootBillingUpdateReportsArgs = {
  reportTime?: InputMaybe<Scalars['Timestamp']>;
};


/** mutation root */
export type Mutation_RootChangeDatabaseVersionArgs = {
  appID: Scalars['uuid'];
  force?: InputMaybe<Scalars['Boolean']>;
  version: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAppArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAppStateArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteAppStateHistoriesArgs = {
  where: AppStateHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAppStatesArgs = {
  where: AppStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAppsArgs = {
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBackupArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBackupsArgs = {
  where: Backups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBillingDedicatedComputeArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBillingDedicatedComputesArgs = {
  where: Billing_Dedicated_Compute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBillingReportArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBillingReportsArgs = {
  where: Billing_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBillingResourceArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBillingResourcesArgs = {
  where: Billing_Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBillingSubscriptionArgs = {
  where: Billing_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBillingSubscriptionsArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCliTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCliTokensArgs = {
  where: CliTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteConfigArgs = {
  appID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentLogArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentLogsArgs = {
  where: DeploymentLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteDeploymentsArgs = {
  where: Deployments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFeatureFlagArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFeatureFlagsArgs = {
  where: FeatureFlags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGithubAppInstallationsArgs = {
  where: GithubAppInstallations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubRepositoriesArgs = {
  where: GithubRepositories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGraphiteAutoEmbeddingsConfigurationArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGraphiteAutoEmbeddingsConfigurationsArgs = {
  where: GraphiteAutoEmbeddingsConfiguration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePaymentMethodArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePaymentMethodsArgs = {
  where: PaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePlanArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePlansArgs = {
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteRegionsAllowedWorkspaceArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRegionsAllowedWorkspacesArgs = {
  where: Regions_Allowed_Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteRunServiceArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRunServiceConfigArgs = {
  appID: Scalars['uuid'];
  serviceID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRunServicesArgs = {
  where: Run_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteSecretArgs = {
  appID: Scalars['uuid'];
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteSoftwareTypeArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteSoftwareTypesArgs = {
  where: Software_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteSoftwareVersionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteSoftwareVersionsArgs = {
  where: Software_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUsersUsageArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersUsagesArgs = {
  where: Users_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberInvitesArgs = {
  where: WorkspaceMemberInvites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMembersArgs = {
  where: WorkspaceMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspacesArgs = {
  where: Workspaces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_AnnouncementsArgs = {
  where: Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Announcements_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_MigrationsArgs = {
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Billing_Report_TypeArgs = {
  where: Billing_Report_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Billing_Report_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ContinentsArgs = {
  where: Continents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Continents_By_PkArgs = {
  code: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  code: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_Region_TypeArgs = {
  where: Region_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Region_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RegionsArgs = {
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Regions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAppArgs = {
  object: Apps_Insert_Input;
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateArgs = {
  object: AppStates_Insert_Input;
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateHistoriesArgs = {
  objects: Array<AppStateHistory_Insert_Input>;
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateHistoryArgs = {
  object: AppStateHistory_Insert_Input;
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStatesArgs = {
  objects: Array<AppStates_Insert_Input>;
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppsArgs = {
  objects: Array<Apps_Insert_Input>;
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBackupArgs = {
  object: Backups_Insert_Input;
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBackupsArgs = {
  objects: Array<Backups_Insert_Input>;
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingDedicatedComputeArgs = {
  object: Billing_Dedicated_Compute_Insert_Input;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingDedicatedComputesArgs = {
  objects: Array<Billing_Dedicated_Compute_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingReportArgs = {
  object: Billing_Reports_Insert_Input;
  on_conflict?: InputMaybe<Billing_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingReportsArgs = {
  objects: Array<Billing_Reports_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingResourceArgs = {
  object: Billing_Resources_Insert_Input;
  on_conflict?: InputMaybe<Billing_Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingResourcesArgs = {
  objects: Array<Billing_Resources_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingSubscriptionArgs = {
  objects: Array<Billing_Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBillingSubscriptionsArgs = {
  object: Billing_Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCliTokenArgs = {
  object: CliTokens_Insert_Input;
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCliTokensArgs = {
  objects: Array<CliTokens_Insert_Input>;
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigInsertInput;
  secrets?: InputMaybe<Array<ConfigEnvironmentVariableInsertInput>>;
  systemConfig: ConfigSystemConfigInsertInput;
};


/** mutation root */
export type Mutation_RootInsertDeploymentArgs = {
  object: Deployments_Insert_Input;
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentLogArgs = {
  object: DeploymentLogs_Insert_Input;
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentLogsArgs = {
  objects: Array<DeploymentLogs_Insert_Input>;
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentsArgs = {
  objects: Array<Deployments_Insert_Input>;
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeatureFlagArgs = {
  object: FeatureFlags_Insert_Input;
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeatureFlagsArgs = {
  objects: Array<FeatureFlags_Insert_Input>;
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubAppInstallationArgs = {
  object: GithubAppInstallations_Insert_Input;
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubAppInstallationsArgs = {
  objects: Array<GithubAppInstallations_Insert_Input>;
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubRepositoriesArgs = {
  objects: Array<GithubRepositories_Insert_Input>;
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubRepositoryArgs = {
  object: GithubRepositories_Insert_Input;
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGraphiteAutoEmbeddingsConfigurationArgs = {
  object: GraphiteAutoEmbeddingsConfiguration_Insert_Input;
  on_conflict?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGraphiteAutoEmbeddingsConfigurationsArgs = {
  objects: Array<GraphiteAutoEmbeddingsConfiguration_Insert_Input>;
  on_conflict?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentMethodArgs = {
  object: PaymentMethods_Insert_Input;
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentMethodsArgs = {
  objects: Array<PaymentMethods_Insert_Input>;
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPlanArgs = {
  object: Plans_Insert_Input;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPlansArgs = {
  objects: Array<Plans_Insert_Input>;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRegionsAllowedWorkspaceArgs = {
  object: Regions_Allowed_Workspace_Insert_Input;
  on_conflict?: InputMaybe<Regions_Allowed_Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRegionsAllowedWorkspacesArgs = {
  objects: Array<Regions_Allowed_Workspace_Insert_Input>;
  on_conflict?: InputMaybe<Regions_Allowed_Workspace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRunServiceArgs = {
  object: Run_Service_Insert_Input;
  on_conflict?: InputMaybe<Run_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRunServiceConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigRunServiceConfigInsertInput;
  serviceID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertRunServicesArgs = {
  objects: Array<Run_Service_Insert_Input>;
  on_conflict?: InputMaybe<Run_Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertSecretArgs = {
  appID: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
};


/** mutation root */
export type Mutation_RootInsertSoftwareTypeArgs = {
  object: Software_Type_Insert_Input;
  on_conflict?: InputMaybe<Software_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertSoftwareTypesArgs = {
  objects: Array<Software_Type_Insert_Input>;
  on_conflict?: InputMaybe<Software_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertSoftwareVersionArgs = {
  object: Software_Versions_Insert_Input;
  on_conflict?: InputMaybe<Software_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertSoftwareVersionsArgs = {
  objects: Array<Software_Versions_Insert_Input>;
  on_conflict?: InputMaybe<Software_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersUsageArgs = {
  object: Users_Usage_Insert_Input;
  on_conflict?: InputMaybe<Users_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersUsagesArgs = {
  objects: Array<Users_Usage_Insert_Input>;
  on_conflict?: InputMaybe<Users_Usage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceArgs = {
  object: Workspaces_Insert_Input;
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberArgs = {
  object: WorkspaceMembers_Insert_Input;
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberInviteArgs = {
  object: WorkspaceMemberInvites_Insert_Input;
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberInvitesArgs = {
  objects: Array<WorkspaceMemberInvites_Insert_Input>;
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMembersArgs = {
  objects: Array<WorkspaceMembers_Insert_Input>;
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspacesArgs = {
  objects: Array<Workspaces_Insert_Input>;
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AnnouncementsArgs = {
  objects: Array<Announcements_Insert_Input>;
  on_conflict?: InputMaybe<Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Announcements_OneArgs = {
  object: Announcements_Insert_Input;
  on_conflict?: InputMaybe<Announcements_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_MigrationsArgs = {
  objects: Array<Auth_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Migrations_OneArgs = {
  object: Auth_Migrations_Insert_Input;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Report_TypeArgs = {
  objects: Array<Billing_Report_Type_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Report_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Billing_Report_Type_OneArgs = {
  object: Billing_Report_Type_Insert_Input;
  on_conflict?: InputMaybe<Billing_Report_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContinentsArgs = {
  objects: Array<Continents_Insert_Input>;
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Continents_OneArgs = {
  object: Continents_Insert_Input;
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Region_TypeArgs = {
  objects: Array<Region_Type_Insert_Input>;
  on_conflict?: InputMaybe<Region_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Region_Type_OneArgs = {
  object: Region_Type_Insert_Input;
  on_conflict?: InputMaybe<Region_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegionsArgs = {
  objects: Array<Regions_Insert_Input>;
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Regions_OneArgs = {
  object: Regions_Insert_Input;
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootReplaceConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigInsertInput;
};


/** mutation root */
export type Mutation_RootReplaceConfigRawJsonArgs = {
  appID: Scalars['uuid'];
  rawJSON: Scalars['String'];
};


/** mutation root */
export type Mutation_RootReplaceRunServiceConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigRunServiceConfigInsertInput;
  serviceID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootResetPostgresPasswordArgs = {
  appID: Scalars['String'];
  newPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRestoreApplicationDatabaseArgs = {
  appID: Scalars['String'];
  backupID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSendEmailTemplateArgs = {
  from: Scalars['String'];
  templateAlias: Scalars['String'];
  templateModel?: InputMaybe<Scalars['map']>;
  to: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateAppArgs = {
  _append?: InputMaybe<Apps_Append_Input>;
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  _inc?: InputMaybe<Apps_Inc_Input>;
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  _set?: InputMaybe<Apps_Set_Input>;
  pk_columns: Apps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStateArgs = {
  _inc?: InputMaybe<AppStates_Inc_Input>;
  _set?: InputMaybe<AppStates_Set_Input>;
  pk_columns: AppStates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStateHistoriesArgs = {
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  where: AppStateHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAppStateHistoryArgs = {
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  pk_columns: AppStateHistory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStatesArgs = {
  _inc?: InputMaybe<AppStates_Inc_Input>;
  _set?: InputMaybe<AppStates_Set_Input>;
  where: AppStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAppsArgs = {
  _append?: InputMaybe<Apps_Append_Input>;
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  _inc?: InputMaybe<Apps_Inc_Input>;
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  _set?: InputMaybe<Apps_Set_Input>;
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBackupArgs = {
  _inc?: InputMaybe<Backups_Inc_Input>;
  _set?: InputMaybe<Backups_Set_Input>;
  pk_columns: Backups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBackupsArgs = {
  _inc?: InputMaybe<Backups_Inc_Input>;
  _set?: InputMaybe<Backups_Set_Input>;
  where: Backups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBillingDedicatedComputeArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  pk_columns: Billing_Dedicated_Compute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBillingDedicatedComputesArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  where: Billing_Dedicated_Compute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBillingReportArgs = {
  _inc?: InputMaybe<Billing_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Reports_Set_Input>;
  pk_columns: Billing_Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBillingReportsArgs = {
  _inc?: InputMaybe<Billing_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Reports_Set_Input>;
  where: Billing_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBillingResourceArgs = {
  _inc?: InputMaybe<Billing_Resources_Inc_Input>;
  _set?: InputMaybe<Billing_Resources_Set_Input>;
  pk_columns: Billing_Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBillingResourcesArgs = {
  _inc?: InputMaybe<Billing_Resources_Inc_Input>;
  _set?: InputMaybe<Billing_Resources_Set_Input>;
  where: Billing_Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBillingSubscriptionArgs = {
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  pk_columns: Billing_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBillingSubscriptionsArgs = {
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  where: Billing_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCliTokenArgs = {
  _set?: InputMaybe<CliTokens_Set_Input>;
  pk_columns: CliTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCliTokensArgs = {
  _set?: InputMaybe<CliTokens_Set_Input>;
  where: CliTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigUpdateInput;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentArgs = {
  _set?: InputMaybe<Deployments_Set_Input>;
  pk_columns: Deployments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentLogArgs = {
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  pk_columns: DeploymentLogs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentLogsArgs = {
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  where: DeploymentLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentsArgs = {
  _set?: InputMaybe<Deployments_Set_Input>;
  where: Deployments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFeatureFlagArgs = {
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  pk_columns: FeatureFlags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFeatureFlagsArgs = {
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  where: FeatureFlags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubAppInstallationArgs = {
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  pk_columns: GithubAppInstallations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGithubAppInstallationsArgs = {
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  where: GithubAppInstallations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubRepositoriesArgs = {
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  where: GithubRepositories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubRepositoryArgs = {
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  pk_columns: GithubRepositories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGraphiteAutoEmbeddingsConfigurationArgs = {
  _set?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Set_Input>;
  pk_columns: GraphiteAutoEmbeddingsConfiguration_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGraphiteAutoEmbeddingsConfigurationsArgs = {
  _set?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Set_Input>;
  where: GraphiteAutoEmbeddingsConfiguration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyBillingReportsArgs = {
  updates: Array<Billing_Reports_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateManyBillingResourcesArgs = {
  updates: Array<Billing_Resources_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateManyGraphiteAutoEmbeddingsConfigurationsArgs = {
  updates: Array<GraphiteAutoEmbeddingsConfiguration_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateManySoftwareTypeArgs = {
  updates: Array<Software_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateManySoftwareVersionsArgs = {
  updates: Array<Software_Versions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdatePaymentMethodArgs = {
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  pk_columns: PaymentMethods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePaymentMethodsArgs = {
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  where: PaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePlanArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  pk_columns: Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePlansArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateRegionsAllowedWorkspaceArgs = {
  _set?: InputMaybe<Regions_Allowed_Workspace_Set_Input>;
  pk_columns: Regions_Allowed_Workspace_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateRegionsAllowedWorkspacesArgs = {
  _set?: InputMaybe<Regions_Allowed_Workspace_Set_Input>;
  where: Regions_Allowed_Workspace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateRunServiceArgs = {
  _set?: InputMaybe<Run_Service_Set_Input>;
  pk_columns: Run_Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateRunServiceConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigRunServiceConfigUpdateInput;
  serviceID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootUpdateRunServicesArgs = {
  _set?: InputMaybe<Run_Service_Set_Input>;
  where: Run_Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSecretArgs = {
  appID: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
};


/** mutation root */
export type Mutation_RootUpdateSoftwareTypeArgs = {
  _set?: InputMaybe<Software_Type_Set_Input>;
  pk_columns: Software_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateSoftwareTypesArgs = {
  _set?: InputMaybe<Software_Type_Set_Input>;
  where: Software_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSoftwareVersionArgs = {
  _set?: InputMaybe<Software_Versions_Set_Input>;
  pk_columns: Software_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateSoftwareVersionsArgs = {
  _set?: InputMaybe<Software_Versions_Set_Input>;
  where: Software_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSystemConfigArgs = {
  appID: Scalars['uuid'];
  systemConfig: ConfigSystemConfigUpdateInput;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUsersUsageArgs = {
  _set?: InputMaybe<Users_Usage_Set_Input>;
  pk_columns: Users_Usage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersUsagesArgs = {
  _set?: InputMaybe<Users_Usage_Set_Input>;
  where: Users_Usage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceArgs = {
  _set?: InputMaybe<Workspaces_Set_Input>;
  pk_columns: Workspaces_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberArgs = {
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  pk_columns: WorkspaceMembers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberInviteArgs = {
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  pk_columns: WorkspaceMemberInvites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberInvitesArgs = {
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  where: WorkspaceMemberInvites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMembersArgs = {
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  where: WorkspaceMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspacesArgs = {
  _set?: InputMaybe<Workspaces_Set_Input>;
  where: Workspaces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AnnouncementsArgs = {
  _set?: InputMaybe<Announcements_Set_Input>;
  where: Announcements_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Announcements_By_PkArgs = {
  _set?: InputMaybe<Announcements_Set_Input>;
  pk_columns: Announcements_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Announcements_ManyArgs = {
  updates: Array<Announcements_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AppStateHistory_ManyArgs = {
  updates: Array<AppStateHistory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AppStates_ManyArgs = {
  updates: Array<AppStates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Apps_ManyArgs = {
  updates: Array<Apps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_MigrationsArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_By_PkArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  pk_columns: Auth_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_ManyArgs = {
  updates: Array<Auth_Migrations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Backups_ManyArgs = {
  updates: Array<Backups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Dedicated_Compute_ManyArgs = {
  updates: Array<Billing_Dedicated_Compute_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Report_TypeArgs = {
  _set?: InputMaybe<Billing_Report_Type_Set_Input>;
  where: Billing_Report_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Report_Type_By_PkArgs = {
  _set?: InputMaybe<Billing_Report_Type_Set_Input>;
  pk_columns: Billing_Report_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Billing_Report_Type_ManyArgs = {
  updates: Array<Billing_Report_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CliTokens_ManyArgs = {
  updates: Array<CliTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContinentsArgs = {
  _set?: InputMaybe<Continents_Set_Input>;
  where: Continents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Continents_By_PkArgs = {
  _set?: InputMaybe<Continents_Set_Input>;
  pk_columns: Continents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Continents_ManyArgs = {
  updates: Array<Continents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: InputMaybe<Countries_Inc_Input>;
  _set?: InputMaybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: InputMaybe<Countries_Inc_Input>;
  _set?: InputMaybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_ManyArgs = {
  updates: Array<Countries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeploymentLogs_ManyArgs = {
  updates: Array<DeploymentLogs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Deployments_ManyArgs = {
  updates: Array<Deployments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeatureFlags_ManyArgs = {
  updates: Array<FeatureFlags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GithubAppInstallations_ManyArgs = {
  updates: Array<GithubAppInstallations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GithubRepositories_ManyArgs = {
  updates: Array<GithubRepositories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Many_Billing_SubscriptionsArgs = {
  updates: Array<Billing_Subscriptions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentMethods_ManyArgs = {
  updates: Array<PaymentMethods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Plans_ManyArgs = {
  updates: Array<Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Region_TypeArgs = {
  _set?: InputMaybe<Region_Type_Set_Input>;
  where: Region_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Region_Type_By_PkArgs = {
  _set?: InputMaybe<Region_Type_Set_Input>;
  pk_columns: Region_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Region_Type_ManyArgs = {
  updates: Array<Region_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RegionsArgs = {
  _set?: InputMaybe<Regions_Set_Input>;
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_Allowed_Workspace_ManyArgs = {
  updates: Array<Regions_Allowed_Workspace_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_By_PkArgs = {
  _set?: InputMaybe<Regions_Set_Input>;
  pk_columns: Regions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_ManyArgs = {
  updates: Array<Regions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Run_Service_ManyArgs = {
  updates: Array<Run_Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Usage_ManyArgs = {
  updates: Array<Users_Usage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceMemberInvites_ManyArgs = {
  updates: Array<WorkspaceMemberInvites_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceMembers_ManyArgs = {
  updates: Array<WorkspaceMembers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workspaces_ManyArgs = {
  updates: Array<Workspaces_Updates>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_Compute_ReportArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_Compute_ReportsArgs = {
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_Compute_ReportArgs = {
  object: Billing_Dedicated_Compute_Reports_Insert_Input;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_Compute_ReportsArgs = {
  objects: Array<Billing_Dedicated_Compute_Reports_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_Compute_ReportArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  pk_columns: Billing_Dedicated_Compute_Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_Compute_ReportsArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Many_Billing_Dedicated_Compute_ReportsArgs = {
  updates: Array<Billing_Dedicated_Compute_Reports_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment_methods" */
export type PaymentMethods = {
  __typename?: 'paymentMethods';
  addedByUserId: Scalars['uuid'];
  cardBrand: Scalars['String'];
  cardExpMonth: Scalars['Int'];
  cardExpYear: Scalars['Int'];
  cardLast4: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDefault: Scalars['Boolean'];
  stripePaymentMethodId: Scalars['String'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "payment_methods" */
export type PaymentMethods_Aggregate = {
  __typename?: 'paymentMethods_aggregate';
  aggregate?: Maybe<PaymentMethods_Aggregate_Fields>;
  nodes: Array<PaymentMethods>;
};

export type PaymentMethods_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Count>;
};

export type PaymentMethods_Aggregate_Bool_Exp_Bool_And = {
  arguments: PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type PaymentMethods_Aggregate_Bool_Exp_Bool_Or = {
  arguments: PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type PaymentMethods_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "payment_methods" */
export type PaymentMethods_Aggregate_Fields = {
  __typename?: 'paymentMethods_aggregate_fields';
  avg?: Maybe<PaymentMethods_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<PaymentMethods_Max_Fields>;
  min?: Maybe<PaymentMethods_Min_Fields>;
  stddev?: Maybe<PaymentMethods_Stddev_Fields>;
  stddev_pop?: Maybe<PaymentMethods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PaymentMethods_Stddev_Samp_Fields>;
  sum?: Maybe<PaymentMethods_Sum_Fields>;
  var_pop?: Maybe<PaymentMethods_Var_Pop_Fields>;
  var_samp?: Maybe<PaymentMethods_Var_Samp_Fields>;
  variance?: Maybe<PaymentMethods_Variance_Fields>;
};


/** aggregate fields of "payment_methods" */
export type PaymentMethods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payment_methods" */
export type PaymentMethods_Aggregate_Order_By = {
  avg?: InputMaybe<PaymentMethods_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PaymentMethods_Max_Order_By>;
  min?: InputMaybe<PaymentMethods_Min_Order_By>;
  stddev?: InputMaybe<PaymentMethods_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PaymentMethods_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PaymentMethods_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PaymentMethods_Sum_Order_By>;
  var_pop?: InputMaybe<PaymentMethods_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PaymentMethods_Var_Samp_Order_By>;
  variance?: InputMaybe<PaymentMethods_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment_methods" */
export type PaymentMethods_Arr_Rel_Insert_Input = {
  data: Array<PaymentMethods_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};

/** aggregate avg on columns */
export type PaymentMethods_Avg_Fields = {
  __typename?: 'paymentMethods_avg_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "payment_methods" */
export type PaymentMethods_Avg_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment_methods". All fields are combined with a logical 'AND'. */
export type PaymentMethods_Bool_Exp = {
  _and?: InputMaybe<Array<PaymentMethods_Bool_Exp>>;
  _not?: InputMaybe<PaymentMethods_Bool_Exp>;
  _or?: InputMaybe<Array<PaymentMethods_Bool_Exp>>;
  addedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  cardBrand?: InputMaybe<String_Comparison_Exp>;
  cardExpMonth?: InputMaybe<Int_Comparison_Exp>;
  cardExpYear?: InputMaybe<Int_Comparison_Exp>;
  cardLast4?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  stripePaymentMethodId?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_methods" */
export enum PaymentMethods_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentMethodsPkey = 'payment_methods_pkey'
}

/** input type for incrementing numeric columns in table "payment_methods" */
export type PaymentMethods_Inc_Input = {
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment_methods" */
export type PaymentMethods_Insert_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PaymentMethods_Max_Fields = {
  __typename?: 'paymentMethods_max_fields';
  addedByUserId?: Maybe<Scalars['uuid']>;
  cardBrand?: Maybe<Scalars['String']>;
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
  cardLast4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  stripePaymentMethodId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "payment_methods" */
export type PaymentMethods_Max_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PaymentMethods_Min_Fields = {
  __typename?: 'paymentMethods_min_fields';
  addedByUserId?: Maybe<Scalars['uuid']>;
  cardBrand?: Maybe<Scalars['String']>;
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
  cardLast4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  stripePaymentMethodId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "payment_methods" */
export type PaymentMethods_Min_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payment_methods" */
export type PaymentMethods_Mutation_Response = {
  __typename?: 'paymentMethods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PaymentMethods>;
};

/** input type for inserting object relation for remote table "payment_methods" */
export type PaymentMethods_Obj_Rel_Insert_Input = {
  data: PaymentMethods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};

/** on_conflict condition type for table "payment_methods" */
export type PaymentMethods_On_Conflict = {
  constraint: PaymentMethods_Constraint;
  update_columns?: Array<PaymentMethods_Update_Column>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_methods". */
export type PaymentMethods_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_methods */
export type PaymentMethods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "payment_methods" */
export enum PaymentMethods_Select_Column {
  /** column name */
  AddedByUserId = 'addedByUserId',
  /** column name */
  CardBrand = 'cardBrand',
  /** column name */
  CardExpMonth = 'cardExpMonth',
  /** column name */
  CardExpYear = 'cardExpYear',
  /** column name */
  CardLast4 = 'cardLast4',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  StripePaymentMethodId = 'stripePaymentMethodId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "paymentMethods_aggregate_bool_exp_bool_and_arguments_columns" columns of table "payment_methods" */
export enum PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDefault = 'isDefault'
}

/** select "paymentMethods_aggregate_bool_exp_bool_or_arguments_columns" columns of table "payment_methods" */
export enum PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDefault = 'isDefault'
}

/** input type for updating data in table "payment_methods" */
export type PaymentMethods_Set_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type PaymentMethods_Stddev_Fields = {
  __typename?: 'paymentMethods_stddev_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PaymentMethods_Stddev_Pop_Fields = {
  __typename?: 'paymentMethods_stddev_pop_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Pop_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PaymentMethods_Stddev_Samp_Fields = {
  __typename?: 'paymentMethods_stddev_samp_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Samp_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "paymentMethods" */
export type PaymentMethods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PaymentMethods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PaymentMethods_Stream_Cursor_Value_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type PaymentMethods_Sum_Fields = {
  __typename?: 'paymentMethods_sum_fields';
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "payment_methods" */
export type PaymentMethods_Sum_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** update columns of table "payment_methods" */
export enum PaymentMethods_Update_Column {
  /** column name */
  AddedByUserId = 'addedByUserId',
  /** column name */
  CardBrand = 'cardBrand',
  /** column name */
  CardExpMonth = 'cardExpMonth',
  /** column name */
  CardExpYear = 'cardExpYear',
  /** column name */
  CardLast4 = 'cardLast4',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  StripePaymentMethodId = 'stripePaymentMethodId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type PaymentMethods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  /** filter the rows which have to be updated */
  where: PaymentMethods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PaymentMethods_Var_Pop_Fields = {
  __typename?: 'paymentMethods_var_pop_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "payment_methods" */
export type PaymentMethods_Var_Pop_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PaymentMethods_Var_Samp_Fields = {
  __typename?: 'paymentMethods_var_samp_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "payment_methods" */
export type PaymentMethods_Var_Samp_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PaymentMethods_Variance_Fields = {
  __typename?: 'paymentMethods_variance_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "payment_methods" */
export type PaymentMethods_Variance_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** columns and relationships of "plans" */
export type Plans = {
  __typename?: 'plans';
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  createdAt: Scalars['timestamptz'];
  deprecated: Scalars['Boolean'];
  featureAdvancedGraphql: Scalars['Boolean'];
  featureBackupEnabled: Scalars['Boolean'];
  featureBackupRetentionDays: Scalars['Int'];
  featureCustomDomainsEnabled: Scalars['Boolean'];
  featureCustomEmailTemplatesEnabled: Scalars['Boolean'];
  featureCustomResources: Scalars['Boolean'];
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates: Scalars['Boolean'];
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout: Scalars['Int'];
  featureMaxDbSize: Scalars['Int'];
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment: Scalars['Int'];
  id: Scalars['uuid'];
  individual: Scalars['Boolean'];
  isDefault: Scalars['Boolean'];
  isFree: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  sort: Scalars['Int'];
  stripePriceIDCustomDomains: Scalars['String'];
  stripePriceIDDedicatedCompute: Scalars['String'];
  stripePriceIDEgressUsageMB: Scalars['String'];
  stripePriceIDFunctionsAmount: Scalars['String'];
  stripePriceIDFunctionsUsageSeconds: Scalars['String'];
  stripePriceIDPersistentVolumesGB: Scalars['String'];
  stripePriceId: Scalars['String'];
  upatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "plans" */
export type PlansAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "plans" */
export type PlansApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "plans" */
export type Plans_Aggregate = {
  __typename?: 'plans_aggregate';
  aggregate?: Maybe<Plans_Aggregate_Fields>;
  nodes: Array<Plans>;
};

/** aggregate fields of "plans" */
export type Plans_Aggregate_Fields = {
  __typename?: 'plans_aggregate_fields';
  avg?: Maybe<Plans_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plans_Max_Fields>;
  min?: Maybe<Plans_Min_Fields>;
  stddev?: Maybe<Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Plans_Sum_Fields>;
  var_pop?: Maybe<Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Plans_Var_Samp_Fields>;
  variance?: Maybe<Plans_Variance_Fields>;
};


/** aggregate fields of "plans" */
export type Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Plans_Avg_Fields = {
  __typename?: 'plans_avg_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "plans". All fields are combined with a logical 'AND'. */
export type Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Plans_Bool_Exp>>;
  _not?: InputMaybe<Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Plans_Bool_Exp>>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deprecated?: InputMaybe<Boolean_Comparison_Exp>;
  featureAdvancedGraphql?: InputMaybe<Boolean_Comparison_Exp>;
  featureBackupEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureBackupRetentionDays?: InputMaybe<Int_Comparison_Exp>;
  featureCustomDomainsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureCustomResources?: InputMaybe<Boolean_Comparison_Exp>;
  featureDeployEmailTemplates?: InputMaybe<Boolean_Comparison_Exp>;
  featureFunctionExecutionTimeout?: InputMaybe<Int_Comparison_Exp>;
  featureMaxDbSize?: InputMaybe<Int_Comparison_Exp>;
  featureMaxFilesSize?: InputMaybe<Int_Comparison_Exp>;
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  individual?: InputMaybe<Boolean_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  isFree?: InputMaybe<Boolean_Comparison_Exp>;
  isPublic?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  stripePriceIDCustomDomains?: InputMaybe<String_Comparison_Exp>;
  stripePriceIDDedicatedCompute?: InputMaybe<String_Comparison_Exp>;
  stripePriceIDEgressUsageMB?: InputMaybe<String_Comparison_Exp>;
  stripePriceIDFunctionsAmount?: InputMaybe<String_Comparison_Exp>;
  stripePriceIDFunctionsUsageSeconds?: InputMaybe<String_Comparison_Exp>;
  stripePriceIDPersistentVolumesGB?: InputMaybe<String_Comparison_Exp>;
  stripePriceId?: InputMaybe<String_Comparison_Exp>;
  upatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "plans" */
export enum Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlansPkey = 'plans_pkey'
}

/** input type for incrementing numeric columns in table "plans" */
export type Plans_Inc_Input = {
  featureBackupRetentionDays?: InputMaybe<Scalars['Int']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "plans" */
export type Plans_Insert_Input = {
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deprecated?: InputMaybe<Scalars['Boolean']>;
  featureAdvancedGraphql?: InputMaybe<Scalars['Boolean']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureBackupRetentionDays?: InputMaybe<Scalars['Int']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  individual?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceIDCustomDomains?: InputMaybe<Scalars['String']>;
  stripePriceIDDedicatedCompute?: InputMaybe<Scalars['String']>;
  stripePriceIDEgressUsageMB?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsAmount?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsUsageSeconds?: InputMaybe<Scalars['String']>;
  stripePriceIDPersistentVolumesGB?: InputMaybe<Scalars['String']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Plans_Max_Fields = {
  __typename?: 'plans_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  featureBackupRetentionDays?: Maybe<Scalars['Int']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  stripePriceIDCustomDomains?: Maybe<Scalars['String']>;
  stripePriceIDDedicatedCompute?: Maybe<Scalars['String']>;
  stripePriceIDEgressUsageMB?: Maybe<Scalars['String']>;
  stripePriceIDFunctionsAmount?: Maybe<Scalars['String']>;
  stripePriceIDFunctionsUsageSeconds?: Maybe<Scalars['String']>;
  stripePriceIDPersistentVolumesGB?: Maybe<Scalars['String']>;
  stripePriceId?: Maybe<Scalars['String']>;
  upatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Plans_Min_Fields = {
  __typename?: 'plans_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  featureBackupRetentionDays?: Maybe<Scalars['Int']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  stripePriceIDCustomDomains?: Maybe<Scalars['String']>;
  stripePriceIDDedicatedCompute?: Maybe<Scalars['String']>;
  stripePriceIDEgressUsageMB?: Maybe<Scalars['String']>;
  stripePriceIDFunctionsAmount?: Maybe<Scalars['String']>;
  stripePriceIDFunctionsUsageSeconds?: Maybe<Scalars['String']>;
  stripePriceIDPersistentVolumesGB?: Maybe<Scalars['String']>;
  stripePriceId?: Maybe<Scalars['String']>;
  upatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "plans" */
export type Plans_Mutation_Response = {
  __typename?: 'plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plans>;
};

/** input type for inserting object relation for remote table "plans" */
export type Plans_Obj_Rel_Insert_Input = {
  data: Plans_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};

/** on_conflict condition type for table "plans" */
export type Plans_On_Conflict = {
  constraint: Plans_Constraint;
  update_columns?: Array<Plans_Update_Column>;
  where?: InputMaybe<Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "plans". */
export type Plans_Order_By = {
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  deprecated?: InputMaybe<Order_By>;
  featureAdvancedGraphql?: InputMaybe<Order_By>;
  featureBackupEnabled?: InputMaybe<Order_By>;
  featureBackupRetentionDays?: InputMaybe<Order_By>;
  featureCustomDomainsEnabled?: InputMaybe<Order_By>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Order_By>;
  featureCustomResources?: InputMaybe<Order_By>;
  featureDeployEmailTemplates?: InputMaybe<Order_By>;
  featureFunctionExecutionTimeout?: InputMaybe<Order_By>;
  featureMaxDbSize?: InputMaybe<Order_By>;
  featureMaxFilesSize?: InputMaybe<Order_By>;
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  individual?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  isFree?: InputMaybe<Order_By>;
  isPublic?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  stripePriceIDCustomDomains?: InputMaybe<Order_By>;
  stripePriceIDDedicatedCompute?: InputMaybe<Order_By>;
  stripePriceIDEgressUsageMB?: InputMaybe<Order_By>;
  stripePriceIDFunctionsAmount?: InputMaybe<Order_By>;
  stripePriceIDFunctionsUsageSeconds?: InputMaybe<Order_By>;
  stripePriceIDPersistentVolumesGB?: InputMaybe<Order_By>;
  stripePriceId?: InputMaybe<Order_By>;
  upatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plans */
export type Plans_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Deprecated = 'deprecated',
  /** column name */
  FeatureAdvancedGraphql = 'featureAdvancedGraphql',
  /** column name */
  FeatureBackupEnabled = 'featureBackupEnabled',
  /** column name */
  FeatureBackupRetentionDays = 'featureBackupRetentionDays',
  /** column name */
  FeatureCustomDomainsEnabled = 'featureCustomDomainsEnabled',
  /** column name */
  FeatureCustomEmailTemplatesEnabled = 'featureCustomEmailTemplatesEnabled',
  /** column name */
  FeatureCustomResources = 'featureCustomResources',
  /** column name */
  FeatureDeployEmailTemplates = 'featureDeployEmailTemplates',
  /** column name */
  FeatureFunctionExecutionTimeout = 'featureFunctionExecutionTimeout',
  /** column name */
  FeatureMaxDbSize = 'featureMaxDbSize',
  /** column name */
  FeatureMaxFilesSize = 'featureMaxFilesSize',
  /** column name */
  FeatureMaxNumberOfFunctionsPerDeployment = 'featureMaxNumberOfFunctionsPerDeployment',
  /** column name */
  Id = 'id',
  /** column name */
  Individual = 'individual',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sort = 'sort',
  /** column name */
  StripePriceIdCustomDomains = 'stripePriceIDCustomDomains',
  /** column name */
  StripePriceIdDedicatedCompute = 'stripePriceIDDedicatedCompute',
  /** column name */
  StripePriceIdEgressUsageMb = 'stripePriceIDEgressUsageMB',
  /** column name */
  StripePriceIdFunctionsAmount = 'stripePriceIDFunctionsAmount',
  /** column name */
  StripePriceIdFunctionsUsageSeconds = 'stripePriceIDFunctionsUsageSeconds',
  /** column name */
  StripePriceIdPersistentVolumesGb = 'stripePriceIDPersistentVolumesGB',
  /** column name */
  StripePriceId = 'stripePriceId',
  /** column name */
  UpatedAt = 'upatedAt'
}

/** input type for updating data in table "plans" */
export type Plans_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deprecated?: InputMaybe<Scalars['Boolean']>;
  featureAdvancedGraphql?: InputMaybe<Scalars['Boolean']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureBackupRetentionDays?: InputMaybe<Scalars['Int']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  individual?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceIDCustomDomains?: InputMaybe<Scalars['String']>;
  stripePriceIDDedicatedCompute?: InputMaybe<Scalars['String']>;
  stripePriceIDEgressUsageMB?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsAmount?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsUsageSeconds?: InputMaybe<Scalars['String']>;
  stripePriceIDPersistentVolumesGB?: InputMaybe<Scalars['String']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Plans_Stddev_Fields = {
  __typename?: 'plans_stddev_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Plans_Stddev_Pop_Fields = {
  __typename?: 'plans_stddev_pop_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Plans_Stddev_Samp_Fields = {
  __typename?: 'plans_stddev_samp_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "plans" */
export type Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plans_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deprecated?: InputMaybe<Scalars['Boolean']>;
  featureAdvancedGraphql?: InputMaybe<Scalars['Boolean']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureBackupRetentionDays?: InputMaybe<Scalars['Int']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  individual?: InputMaybe<Scalars['Boolean']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceIDCustomDomains?: InputMaybe<Scalars['String']>;
  stripePriceIDDedicatedCompute?: InputMaybe<Scalars['String']>;
  stripePriceIDEgressUsageMB?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsAmount?: InputMaybe<Scalars['String']>;
  stripePriceIDFunctionsUsageSeconds?: InputMaybe<Scalars['String']>;
  stripePriceIDPersistentVolumesGB?: InputMaybe<Scalars['String']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Plans_Sum_Fields = {
  __typename?: 'plans_sum_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Int']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

/** update columns of table "plans" */
export enum Plans_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Deprecated = 'deprecated',
  /** column name */
  FeatureAdvancedGraphql = 'featureAdvancedGraphql',
  /** column name */
  FeatureBackupEnabled = 'featureBackupEnabled',
  /** column name */
  FeatureBackupRetentionDays = 'featureBackupRetentionDays',
  /** column name */
  FeatureCustomDomainsEnabled = 'featureCustomDomainsEnabled',
  /** column name */
  FeatureCustomEmailTemplatesEnabled = 'featureCustomEmailTemplatesEnabled',
  /** column name */
  FeatureCustomResources = 'featureCustomResources',
  /** column name */
  FeatureDeployEmailTemplates = 'featureDeployEmailTemplates',
  /** column name */
  FeatureFunctionExecutionTimeout = 'featureFunctionExecutionTimeout',
  /** column name */
  FeatureMaxDbSize = 'featureMaxDbSize',
  /** column name */
  FeatureMaxFilesSize = 'featureMaxFilesSize',
  /** column name */
  FeatureMaxNumberOfFunctionsPerDeployment = 'featureMaxNumberOfFunctionsPerDeployment',
  /** column name */
  Id = 'id',
  /** column name */
  Individual = 'individual',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sort = 'sort',
  /** column name */
  StripePriceIdCustomDomains = 'stripePriceIDCustomDomains',
  /** column name */
  StripePriceIdDedicatedCompute = 'stripePriceIDDedicatedCompute',
  /** column name */
  StripePriceIdEgressUsageMb = 'stripePriceIDEgressUsageMB',
  /** column name */
  StripePriceIdFunctionsAmount = 'stripePriceIDFunctionsAmount',
  /** column name */
  StripePriceIdFunctionsUsageSeconds = 'stripePriceIDFunctionsUsageSeconds',
  /** column name */
  StripePriceIdPersistentVolumesGb = 'stripePriceIDPersistentVolumesGB',
  /** column name */
  StripePriceId = 'stripePriceId',
  /** column name */
  UpatedAt = 'upatedAt'
}

export type Plans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plans_Var_Pop_Fields = {
  __typename?: 'plans_var_pop_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Plans_Var_Samp_Fields = {
  __typename?: 'plans_var_samp_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Plans_Variance_Fields = {
  __typename?: 'plans_variance_fields';
  featureBackupRetentionDays?: Maybe<Scalars['Float']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "graphite.assistants" using primary key columns */
  _graphiteAssistant?: Maybe<_GraphiteAssistants>;
  /** fetch aggregated fields from the table: "graphite.assistants" */
  _graphiteAssistantAggregate: _GraphiteAssistants_Aggregate;
  /** fetch data from the table: "graphite.assistants" */
  _graphiteAssistants: Array<_GraphiteAssistants>;
  /** fetch data from the table: "graphite.files" using primary key columns */
  _graphiteFile?: Maybe<_GraphiteFiles>;
  /** fetch aggregated fields from the table: "graphite.files" */
  _graphiteFileAggregate: _GraphiteFiles_Aggregate;
  /** fetch data from the table: "graphite.files" */
  _graphiteFiles: Array<_GraphiteFiles>;
  /** fetch data from the table: "graphite.sessions" using primary key columns */
  _graphiteSession?: Maybe<_GraphiteSessions>;
  /** fetch aggregated fields from the table: "graphite.sessions" */
  _graphiteSessionAggregate: _GraphiteSessions_Aggregate;
  /** fetch data from the table: "graphite.sessions" */
  _graphiteSessions: Array<_GraphiteSessions>;
  /** fetch data from the table: "announcements" */
  announcements: Array<Announcements>;
  /** fetch aggregated fields from the table: "announcements" */
  announcements_aggregate: Announcements_Aggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** fetch data from the table: "apps" using primary key columns */
  app?: Maybe<Apps>;
  appSecrets: Array<ConfigEnvironmentVariable>;
  /** fetch data from the table: "app_states" using primary key columns */
  appState?: Maybe<AppStates>;
  /** fetch data from the table: "app_state_history" */
  appStateHistories: Array<AppStateHistory>;
  /** fetch data from the table: "app_state_history" using primary key columns */
  appStateHistory?: Maybe<AppStateHistory>;
  /** fetch aggregated fields from the table: "app_state_history" */
  appStateHistoryAggregate: AppStateHistory_Aggregate;
  /** fetch data from the table: "app_states" */
  appStates: Array<AppStates>;
  /** fetch aggregated fields from the table: "app_states" */
  appStatesAggregate: AppStates_Aggregate;
  /** An array relationship */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  appsAggregate: Apps_Aggregate;
  appsSecrets?: Maybe<Array<ConfigAppSecrets>>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table: "backups" using primary key columns */
  backup?: Maybe<Backups>;
  /** An array relationship */
  backups: Array<Backups>;
  /** fetch aggregated fields from the table: "backups" */
  backupsAggregate: Backups_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" using primary key columns */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute" */
  billingDedicatedComputeAggregate: Billing_Dedicated_Compute_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute_reports" using primary key columns */
  billingDedicatedComputeReport?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReports: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReportsAggregate: Billing_Dedicated_Compute_Reports_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" */
  billingDedicatedComputes: Array<Billing_Dedicated_Compute>;
  billingGetNextInvoice?: Maybe<InvoiceSummary>;
  /** fetch data from the table: "billing.reports" using primary key columns */
  billingReport?: Maybe<Billing_Reports>;
  /** fetch data from the table: "billing.reports" */
  billingReports: Array<Billing_Reports>;
  /** fetch aggregated fields from the table: "billing.reports" */
  billingReportsAggregate: Billing_Reports_Aggregate;
  /** fetch data from the table: "billing.resources" using primary key columns */
  billingResource?: Maybe<Billing_Resources>;
  /** fetch data from the table: "billing.resources" */
  billingResources: Array<Billing_Resources>;
  /** fetch aggregated fields from the table: "billing.resources" */
  billingResourcesAggregate: Billing_Resources_Aggregate;
  /** fetch data from the table: "billing.subscriptions" using primary key columns */
  billingSubscription?: Maybe<Billing_Subscriptions>;
  /** fetch data from the table: "billing.subscriptions" */
  billingSubscriptions: Array<Billing_Subscriptions>;
  /** fetch aggregated fields from the table: "billing.subscriptions" */
  billingSubscriptionsAggregate: Billing_Subscriptions_Aggregate;
  /** fetch data from the table: "billing.report_type" */
  billing_report_type: Array<Billing_Report_Type>;
  /** fetch aggregated fields from the table: "billing.report_type" */
  billing_report_type_aggregate: Billing_Report_Type_Aggregate;
  /** fetch data from the table: "billing.report_type" using primary key columns */
  billing_report_type_by_pk?: Maybe<Billing_Report_Type>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "cli_tokens" using primary key columns */
  cliToken?: Maybe<CliTokens>;
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** fetch aggregated fields from the table: "cli_tokens" */
  cliTokensAggregate: CliTokens_Aggregate;
  config?: Maybe<ConfigConfig>;
  configRawJSON: Scalars['String'];
  configs: Array<ConfigAppConfig>;
  /** fetch data from the table: "continents" */
  continents: Array<Continents>;
  /** fetch aggregated fields from the table: "continents" */
  continents_aggregate: Continents_Aggregate;
  /** fetch data from the table: "continents" using primary key columns */
  continents_by_pk?: Maybe<Continents>;
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "deployments" using primary key columns */
  deployment?: Maybe<Deployments>;
  /** fetch data from the table: "deployment_logs" using primary key columns */
  deploymentLog?: Maybe<DeploymentLogs>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** fetch aggregated fields from the table: "deployment_logs" */
  deploymentLogsAggregate: DeploymentLogs_Aggregate;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** fetch aggregated fields from the table: "deployments" */
  deploymentsAggregate: Deployments_Aggregate;
  /**
   * Returns the CNAME the hostname resolves to.
   * If the hostname cannot be resolved or isn't a CNAME, returns empty
   */
  dnsLookupCNAME: Scalars['String'];
  /** fetch data from the table: "feature_flags" using primary key columns */
  featureFlag?: Maybe<FeatureFlags>;
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  featureFlagsAggregate: FeatureFlags_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  getBackupPresignedURL: BackupPresignedUrl;
  getCPUSecondsUsage: Metrics;
  getEgressVolume: Metrics;
  getFunctionsDuration: Metrics;
  getFunctionsInvocations: Metrics;
  getLogsVolume: Metrics;
  getPostgresVolumeCapacity: Metrics;
  getPostgresVolumeUsage: Metrics;
  getProjectStatus: ProjectStatusResponse;
  /**
   * Returns list of label values for a given label within a range of time.
   *
   * If `from` and `to` are not provided, they default to 6 hour ago and now, respectively.
   */
  getServiceLabelValues: Array<Scalars['String']>;
  getTotalRequests: Metrics;
  getUsageAll: Array<UsageSummary>;
  /** fetch data from the table: "github_app_installations" using primary key columns */
  githubAppInstallation?: Maybe<GithubAppInstallations>;
  /** fetch data from the table: "github_app_installations" */
  githubAppInstallations: Array<GithubAppInstallations>;
  /** fetch aggregated fields from the table: "github_app_installations" */
  githubAppInstallationsAggregate: GithubAppInstallations_Aggregate;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** fetch aggregated fields from the table: "github_repositories" */
  githubRepositoriesAggregate: GithubRepositories_Aggregate;
  /** fetch data from the table: "github_repositories" using primary key columns */
  githubRepository?: Maybe<GithubRepositories>;
  graphite?: Maybe<GraphiteQuery>;
  /** fetch data from the table: "graphite.auto_embeddings_configuration" using primary key columns */
  graphiteAutoEmbeddingsConfiguration?: Maybe<GraphiteAutoEmbeddingsConfiguration>;
  /** fetch aggregated fields from the table: "graphite.auto_embeddings_configuration" */
  graphiteAutoEmbeddingsConfigurationAggregate: GraphiteAutoEmbeddingsConfiguration_Aggregate;
  /** fetch data from the table: "graphite.auto_embeddings_configuration" */
  graphiteAutoEmbeddingsConfigurations: Array<GraphiteAutoEmbeddingsConfiguration>;
  /**
   * Returns logs for a given application. If `service` is not provided all services are returned.
   * If `from` and `to` are not provided, they default to an hour ago and now, respectively.
   */
  logs: Array<Log>;
  /** fetch data from the table: "payment_methods" using primary key columns */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** fetch aggregated fields from the table: "payment_methods" */
  paymentMethodsAggregate: PaymentMethods_Aggregate;
  /** fetch data from the table: "plans" using primary key columns */
  plan?: Maybe<Plans>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plansAggregate: Plans_Aggregate;
  /** fetch data from the table: "region_type" */
  region_type: Array<Region_Type>;
  /** fetch aggregated fields from the table: "region_type" */
  region_type_aggregate: Region_Type_Aggregate;
  /** fetch data from the table: "region_type" using primary key columns */
  region_type_by_pk?: Maybe<Region_Type>;
  /** An array relationship */
  regions: Array<Regions>;
  /** An aggregate relationship */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
  /** fetch data from the table: "run_service" using primary key columns */
  runService?: Maybe<Run_Service>;
  runServiceConfig?: Maybe<ConfigRunServiceConfig>;
  runServiceConfigRawJSON: Scalars['String'];
  runServiceConfigs: Array<ConfigRunServiceConfigWithId>;
  runServiceConfigsAll: Array<ConfigRunServiceConfigWithId>;
  /** An array relationship */
  runServices: Array<Run_Service>;
  /** fetch aggregated fields from the table: "run_service" */
  runServicesAggregate: Run_Service_Aggregate;
  /** fetch data from the table: "regions_allowed_workspace" using primary key columns */
  selectRegionsAllowedWorkspace?: Maybe<Regions_Allowed_Workspace>;
  /** fetch data from the table: "regions_allowed_workspace" */
  selectRegionsAllowedWorkspaces: Array<Regions_Allowed_Workspace>;
  /** fetch aggregated fields from the table: "regions_allowed_workspace" */
  selectRegionsAllowedWorkspacesAggregate: Regions_Allowed_Workspace_Aggregate;
  /** fetch data from the table: "software_type" using primary key columns */
  softwareType?: Maybe<Software_Type>;
  /** fetch data from the table: "software_type" */
  softwareTypes: Array<Software_Type>;
  /** fetch aggregated fields from the table: "software_type" */
  softwareTypesAggregate: Software_Type_Aggregate;
  /** fetch data from the table: "software_versions" using primary key columns */
  softwareVersion?: Maybe<Software_Versions>;
  /** fetch data from the table: "software_versions" */
  softwareVersions: Array<Software_Versions>;
  /** fetch aggregated fields from the table: "software_versions" */
  softwareVersionsAggregate: Software_Versions_Aggregate;
  /**
   * Returns lists of apps that have some live traffic in the give time range.
   * From defaults to 24 hours ago and to defaults to now.
   *
   * Requests that returned a 4xx or 5xx status code are not counted as live traffic.
   */
  statsLiveApps: StatsLiveApps;
  systemConfig?: Maybe<ConfigSystemConfig>;
  systemConfigs: Array<ConfigAppSystemConfig>;
  /** Returns system logs for a given application */
  systemLogs: Array<Log>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_usage" using primary key columns */
  usersUsage?: Maybe<Users_Usage>;
  /** fetch data from the table: "users_usage" */
  usersUsages: Array<Users_Usage>;
  /** fetch aggregated fields from the table: "users_usage" */
  usersUsagesAggregate: Users_Usage_Aggregate;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspace?: Maybe<Workspaces>;
  /** fetch data from the table: "workspace_members" using primary key columns */
  workspaceMember?: Maybe<WorkspaceMembers>;
  /** fetch data from the table: "workspace_member_invites" using primary key columns */
  workspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** fetch aggregated fields from the table: "workspace_member_invites" */
  workspaceMemberInvitesAggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** fetch aggregated fields from the table: "workspace_members" */
  workspaceMembersAggregate: WorkspaceMembers_Aggregate;
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: Workspaces_Aggregate;
};


export type Query_Root_GraphiteAssistantArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_GraphiteAssistantAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};


export type Query_Root_GraphiteAssistantsArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};


export type Query_Root_GraphiteFileArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_GraphiteFileAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteFiles_Order_By>>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};


export type Query_Root_GraphiteFilesArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteFiles_Order_By>>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};


export type Query_Root_GraphiteSessionArgs = {
  id: Scalars['uuid'];
};


export type Query_Root_GraphiteSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};


export type Query_Root_GraphiteSessionsArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};


export type Query_RootAnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcements_Order_By>>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};


export type Query_RootAnnouncements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcements_Order_By>>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};


export type Query_RootAnnouncements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAppArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAppSecretsArgs = {
  appID: Scalars['uuid'];
};


export type Query_RootAppStateArgs = {
  id: Scalars['Int'];
};


export type Query_RootAppStateHistoriesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Query_RootAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAppStateHistoryAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Query_RootAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Query_RootAppStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Query_RootAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Query_RootAppsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBackupArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Query_RootBackupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingDedicatedComputeAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeReportArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingDedicatedComputeReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Query_RootBillingGetNextInvoiceArgs = {
  appID: Scalars['uuid'];
};


export type Query_RootBillingReportArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


export type Query_RootBillingReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


export type Query_RootBillingResourceArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingResourcesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Resources_Order_By>>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};


export type Query_RootBillingResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Resources_Order_By>>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};


export type Query_RootBillingSubscriptionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Query_RootBillingSubscriptionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Query_RootBilling_Report_TypeArgs = {
  distinct_on?: InputMaybe<Array<Billing_Report_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Report_Type_Order_By>>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};


export type Query_RootBilling_Report_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Report_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Report_Type_Order_By>>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};


export type Query_RootBilling_Report_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCliTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Query_RootCliTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Query_RootConfigArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
};


export type Query_RootConfigRawJsonArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
};


export type Query_RootConfigsArgs = {
  resolve: Scalars['Boolean'];
  where?: InputMaybe<ConfigConfigComparisonExp>;
};


export type Query_RootContinentsArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Query_RootContinents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Query_RootContinents_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Query_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Query_RootDeploymentArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeploymentLogArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Query_RootDeploymentLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Query_RootDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Query_RootDeploymentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Query_RootDnsLookupCnameArgs = {
  hostname: Scalars['String'];
};


export type Query_RootFeatureFlagArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Query_RootFeatureFlagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGetBackupPresignedUrlArgs = {
  appID: Scalars['String'];
  backupID: Scalars['String'];
  expireInMinutes?: InputMaybe<Scalars['Int']>;
};


export type Query_RootGetCpuSecondsUsageArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetEgressVolumeArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  subdomain: Scalars['String'];
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetFunctionsDurationArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetFunctionsInvocationsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetLogsVolumeArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetPostgresVolumeCapacityArgs = {
  appID: Scalars['String'];
  t?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetPostgresVolumeUsageArgs = {
  appID: Scalars['String'];
  t?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetProjectStatusArgs = {
  appID: Scalars['String'];
};


export type Query_RootGetServiceLabelValuesArgs = {
  appID: Scalars['String'];
};


export type Query_RootGetTotalRequestsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetUsageAllArgs = {
  from: Scalars['Timestamp'];
  to: Scalars['Timestamp'];
};


export type Query_RootGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGithubAppInstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Query_RootGithubAppInstallationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Query_RootGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Query_RootGithubRepositoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Query_RootGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGraphiteAutoEmbeddingsConfigurationArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGraphiteAutoEmbeddingsConfigurationAggregateArgs = {
  distinct_on?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Order_By>>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};


export type Query_RootGraphiteAutoEmbeddingsConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Order_By>>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};


export type Query_RootLogsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  regexFilter?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootPaymentMethodArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Query_RootPaymentMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Query_RootPlanArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootRegion_TypeArgs = {
  distinct_on?: InputMaybe<Array<Region_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Region_Type_Order_By>>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};


export type Query_RootRegion_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Region_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Region_Type_Order_By>>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};


export type Query_RootRegion_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootRegionsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Query_RootRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Query_RootRegions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRunServiceArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRunServiceConfigArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
  serviceID: Scalars['uuid'];
};


export type Query_RootRunServiceConfigRawJsonArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
  serviceID: Scalars['uuid'];
};


export type Query_RootRunServiceConfigsArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
};


export type Query_RootRunServiceConfigsAllArgs = {
  resolve: Scalars['Boolean'];
  where?: InputMaybe<ConfigRunServiceConfigComparisonExp>;
};


export type Query_RootRunServicesArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


export type Query_RootRunServicesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


export type Query_RootSelectRegionsAllowedWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSelectRegionsAllowedWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


export type Query_RootSelectRegionsAllowedWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


export type Query_RootSoftwareTypeArgs = {
  type: Scalars['String'];
};


export type Query_RootSoftwareTypesArgs = {
  distinct_on?: InputMaybe<Array<Software_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Type_Order_By>>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};


export type Query_RootSoftwareTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Type_Order_By>>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};


export type Query_RootSoftwareVersionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSoftwareVersionsArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


export type Query_RootSoftwareVersionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


export type Query_RootStatsLiveAppsArgs = {
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootSystemConfigArgs = {
  appID: Scalars['uuid'];
};


export type Query_RootSystemConfigsArgs = {
  where?: InputMaybe<ConfigSystemConfigComparisonExp>;
};


export type Query_RootSystemLogsArgs = {
  action: Scalars['String'];
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersUsageArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersUsagesArgs = {
  distinct_on?: InputMaybe<Array<Users_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Usage_Order_By>>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};


export type Query_RootUsersUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Usage_Order_By>>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};


export type Query_RootWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Query_RootWorkspaceMemberInvitesAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Query_RootWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Query_RootWorkspaceMembersAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Query_RootWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Query_RootWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** columns and relationships of "region_type" */
export type Region_Type = {
  __typename?: 'region_type';
  comment: Scalars['String'];
  /** An array relationship */
  regions: Array<Regions>;
  /** An aggregate relationship */
  regions_aggregate: Regions_Aggregate;
  type: Scalars['String'];
};


/** columns and relationships of "region_type" */
export type Region_TypeRegionsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


/** columns and relationships of "region_type" */
export type Region_TypeRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};

/** aggregated selection of "region_type" */
export type Region_Type_Aggregate = {
  __typename?: 'region_type_aggregate';
  aggregate?: Maybe<Region_Type_Aggregate_Fields>;
  nodes: Array<Region_Type>;
};

/** aggregate fields of "region_type" */
export type Region_Type_Aggregate_Fields = {
  __typename?: 'region_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Region_Type_Max_Fields>;
  min?: Maybe<Region_Type_Min_Fields>;
};


/** aggregate fields of "region_type" */
export type Region_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Region_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "region_type". All fields are combined with a logical 'AND'. */
export type Region_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Region_Type_Bool_Exp>>;
  _not?: InputMaybe<Region_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Region_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  regions?: InputMaybe<Regions_Bool_Exp>;
  regions_aggregate?: InputMaybe<Regions_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "region_type" */
export enum Region_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  RegionTypePkey = 'region_type_pkey'
}

export enum Region_Type_Enum {
  /** Private region available to selected workspaces */
  Private = 'private',
  /** Public region available to all Nhost projects */
  Public = 'public'
}

/** Boolean expression to compare columns of type "region_type_enum". All fields are combined with logical 'AND'. */
export type Region_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Region_Type_Enum>;
  _in?: InputMaybe<Array<Region_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Region_Type_Enum>;
  _nin?: InputMaybe<Array<Region_Type_Enum>>;
};

/** input type for inserting data into table "region_type" */
export type Region_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  regions?: InputMaybe<Regions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Region_Type_Max_Fields = {
  __typename?: 'region_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Region_Type_Min_Fields = {
  __typename?: 'region_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "region_type" */
export type Region_Type_Mutation_Response = {
  __typename?: 'region_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Region_Type>;
};

/** input type for inserting object relation for remote table "region_type" */
export type Region_Type_Obj_Rel_Insert_Input = {
  data: Region_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Region_Type_On_Conflict>;
};

/** on_conflict condition type for table "region_type" */
export type Region_Type_On_Conflict = {
  constraint: Region_Type_Constraint;
  update_columns?: Array<Region_Type_Update_Column>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "region_type". */
export type Region_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  regions_aggregate?: InputMaybe<Regions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: region_type */
export type Region_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "region_type" */
export enum Region_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "region_type" */
export type Region_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "region_type" */
export type Region_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Region_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Region_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "region_type" */
export enum Region_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

export type Region_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Region_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Region_Type_Bool_Exp;
};

/** columns and relationships of "regions" */
export type Regions = {
  __typename?: 'regions';
  active: Scalars['Boolean'];
  /** An object relationship */
  allowedWorkspaces?: Maybe<Regions_Allowed_Workspace>;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  awsName: Scalars['String'];
  city: Scalars['String'];
  /** An object relationship */
  country: Countries;
  countryCode: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  domain: Scalars['String'];
  id: Scalars['uuid'];
  isGdprCompliant: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  region_type: Region_Type;
  /** An array relationship */
  regions_allowed_workspaces: Array<Regions_Allowed_Workspace>;
  /** An aggregate relationship */
  regions_allowed_workspaces_aggregate: Regions_Allowed_Workspace_Aggregate;
  type: Region_Type_Enum;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "regions" */
export type RegionsAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsRegions_Allowed_WorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsRegions_Allowed_Workspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};

/** aggregated selection of "regions" */
export type Regions_Aggregate = {
  __typename?: 'regions_aggregate';
  aggregate?: Maybe<Regions_Aggregate_Fields>;
  nodes: Array<Regions>;
};

export type Regions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Regions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Regions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Regions_Aggregate_Bool_Exp_Count>;
};

export type Regions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Regions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Regions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Regions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "regions" */
export type Regions_Aggregate_Fields = {
  __typename?: 'regions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Regions_Max_Fields>;
  min?: Maybe<Regions_Min_Fields>;
};


/** aggregate fields of "regions" */
export type Regions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Regions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regions" */
export type Regions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Regions_Max_Order_By>;
  min?: InputMaybe<Regions_Min_Order_By>;
};

/** columns and relationships of "regions_allowed_workspace" */
export type Regions_Allowed_Workspace = {
  __typename?: 'regions_allowed_workspace';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  /** An object relationship */
  region?: Maybe<Regions>;
  region_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  workspace?: Maybe<Workspaces>;
  workspace_id: Scalars['uuid'];
};

/** aggregated selection of "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Aggregate = {
  __typename?: 'regions_allowed_workspace_aggregate';
  aggregate?: Maybe<Regions_Allowed_Workspace_Aggregate_Fields>;
  nodes: Array<Regions_Allowed_Workspace>;
};

export type Regions_Allowed_Workspace_Aggregate_Bool_Exp = {
  count?: InputMaybe<Regions_Allowed_Workspace_Aggregate_Bool_Exp_Count>;
};

export type Regions_Allowed_Workspace_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Aggregate_Fields = {
  __typename?: 'regions_allowed_workspace_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Regions_Allowed_Workspace_Max_Fields>;
  min?: Maybe<Regions_Allowed_Workspace_Min_Fields>;
};


/** aggregate fields of "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Regions_Allowed_Workspace_Max_Order_By>;
  min?: InputMaybe<Regions_Allowed_Workspace_Min_Order_By>;
};

/** input type for inserting array relation for remote table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Arr_Rel_Insert_Input = {
  data: Array<Regions_Allowed_Workspace_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_Allowed_Workspace_On_Conflict>;
};

/** Boolean expression to filter rows from the table "regions_allowed_workspace". All fields are combined with a logical 'AND'. */
export type Regions_Allowed_Workspace_Bool_Exp = {
  _and?: InputMaybe<Array<Regions_Allowed_Workspace_Bool_Exp>>;
  _not?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  _or?: InputMaybe<Array<Regions_Allowed_Workspace_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  region?: InputMaybe<Regions_Bool_Exp>;
  region_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspace_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "regions_allowed_workspace" */
export enum Regions_Allowed_Workspace_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegionsAllowedWorkspacePkey = 'regions_allowed_workspace_pkey',
  /** unique or primary key constraint on columns "workspace_id", "region_id" */
  RegionsAllowedWorkspaceRegionIdWorkspaceIdKey = 'regions_allowed_workspace_region_id_workspace_id_key'
}

/** input type for inserting data into table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  region?: InputMaybe<Regions_Obj_Rel_Insert_Input>;
  region_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Regions_Allowed_Workspace_Max_Fields = {
  __typename?: 'regions_allowed_workspace_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  region_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  region_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Regions_Allowed_Workspace_Min_Fields = {
  __typename?: 'regions_allowed_workspace_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  region_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  workspace_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  region_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Mutation_Response = {
  __typename?: 'regions_allowed_workspace_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Regions_Allowed_Workspace>;
};

/** input type for inserting object relation for remote table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Obj_Rel_Insert_Input = {
  data: Regions_Allowed_Workspace_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_Allowed_Workspace_On_Conflict>;
};

/** on_conflict condition type for table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_On_Conflict = {
  constraint: Regions_Allowed_Workspace_Constraint;
  update_columns?: Array<Regions_Allowed_Workspace_Update_Column>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};

/** Ordering options when selecting data from "regions_allowed_workspace". */
export type Regions_Allowed_Workspace_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  region?: InputMaybe<Regions_Order_By>;
  region_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspace_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: regions_allowed_workspace */
export type Regions_Allowed_Workspace_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "regions_allowed_workspace" */
export enum Regions_Allowed_Workspace_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RegionId = 'region_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkspaceId = 'workspace_id'
}

/** input type for updating data in table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  region_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "regions_allowed_workspace" */
export type Regions_Allowed_Workspace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Regions_Allowed_Workspace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Regions_Allowed_Workspace_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  region_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  workspace_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "regions_allowed_workspace" */
export enum Regions_Allowed_Workspace_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RegionId = 'region_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkspaceId = 'workspace_id'
}

export type Regions_Allowed_Workspace_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Regions_Allowed_Workspace_Set_Input>;
  /** filter the rows which have to be updated */
  where: Regions_Allowed_Workspace_Bool_Exp;
};

/** input type for inserting array relation for remote table "regions" */
export type Regions_Arr_Rel_Insert_Input = {
  data: Array<Regions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "regions". All fields are combined with a logical 'AND'. */
export type Regions_Bool_Exp = {
  _and?: InputMaybe<Array<Regions_Bool_Exp>>;
  _not?: InputMaybe<Regions_Bool_Exp>;
  _or?: InputMaybe<Array<Regions_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  allowedWorkspaces?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  awsName?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<Countries_Bool_Exp>;
  countryCode?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isGdprCompliant?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  region_type?: InputMaybe<Region_Type_Bool_Exp>;
  regions_allowed_workspaces?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  regions_allowed_workspaces_aggregate?: InputMaybe<Regions_Allowed_Workspace_Aggregate_Bool_Exp>;
  type?: InputMaybe<Region_Type_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "regions" */
export enum Regions_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey'
}

/** input type for inserting data into table "regions" */
export type Regions_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  allowedWorkspaces?: InputMaybe<Regions_Allowed_Workspace_Obj_Rel_Insert_Input>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Countries_Obj_Rel_Insert_Input>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  region_type?: InputMaybe<Region_Type_Obj_Rel_Insert_Input>;
  regions_allowed_workspaces?: InputMaybe<Regions_Allowed_Workspace_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Region_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Regions_Max_Fields = {
  __typename?: 'regions_max_fields';
  awsName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "regions" */
export type Regions_Max_Order_By = {
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Regions_Min_Fields = {
  __typename?: 'regions_min_fields';
  awsName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "regions" */
export type Regions_Min_Order_By = {
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "regions" */
export type Regions_Mutation_Response = {
  __typename?: 'regions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Regions>;
};

/** input type for inserting object relation for remote table "regions" */
export type Regions_Obj_Rel_Insert_Input = {
  data: Regions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};

/** on_conflict condition type for table "regions" */
export type Regions_On_Conflict = {
  constraint: Regions_Constraint;
  update_columns?: Array<Regions_Update_Column>;
  where?: InputMaybe<Regions_Bool_Exp>;
};

/** Ordering options when selecting data from "regions". */
export type Regions_Order_By = {
  active?: InputMaybe<Order_By>;
  allowedWorkspaces?: InputMaybe<Regions_Allowed_Workspace_Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Countries_Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isGdprCompliant?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  region_type?: InputMaybe<Region_Type_Order_By>;
  regions_allowed_workspaces_aggregate?: InputMaybe<Regions_Allowed_Workspace_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: regions */
export type Regions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "regions" */
export enum Regions_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AwsName = 'awsName',
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "regions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "regions" */
export enum Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant'
}

/** select "regions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "regions" */
export enum Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant'
}

/** input type for updating data in table "regions" */
export type Regions_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Region_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "regions" */
export type Regions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Regions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Regions_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Region_Type_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "regions" */
export enum Regions_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AwsName = 'awsName',
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Regions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Regions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Regions_Bool_Exp;
};

/** columns and relationships of "run_service" */
export type Run_Service = {
  __typename?: 'run_service';
  /** An object relationship */
  app: Apps;
  appID: Scalars['uuid'];
  config?: Maybe<ConfigRunServiceConfig>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creator: Users;
  creatorUserId: Scalars['uuid'];
  id: Scalars['uuid'];
  mimirConfigEnc?: Maybe<Scalars['String']>;
  subdomain: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "run_service" */
export type Run_ServiceConfigArgs = {
  resolve: Scalars['Boolean'];
};

/** aggregated selection of "run_service" */
export type Run_Service_Aggregate = {
  __typename?: 'run_service_aggregate';
  aggregate?: Maybe<Run_Service_Aggregate_Fields>;
  nodes: Array<Run_Service>;
};

export type Run_Service_Aggregate_Bool_Exp = {
  count?: InputMaybe<Run_Service_Aggregate_Bool_Exp_Count>;
};

export type Run_Service_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Run_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Run_Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "run_service" */
export type Run_Service_Aggregate_Fields = {
  __typename?: 'run_service_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Run_Service_Max_Fields>;
  min?: Maybe<Run_Service_Min_Fields>;
};


/** aggregate fields of "run_service" */
export type Run_Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Run_Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "run_service" */
export type Run_Service_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Run_Service_Max_Order_By>;
  min?: InputMaybe<Run_Service_Min_Order_By>;
};

/** input type for inserting array relation for remote table "run_service" */
export type Run_Service_Arr_Rel_Insert_Input = {
  data: Array<Run_Service_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Run_Service_On_Conflict>;
};

/** Boolean expression to filter rows from the table "run_service". All fields are combined with a logical 'AND'. */
export type Run_Service_Bool_Exp = {
  _and?: InputMaybe<Array<Run_Service_Bool_Exp>>;
  _not?: InputMaybe<Run_Service_Bool_Exp>;
  _or?: InputMaybe<Array<Run_Service_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appID?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  creatorUserId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mimirConfigEnc?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "run_service" */
export enum Run_Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  RunServicePkey = 'run_service_pkey',
  /** unique or primary key constraint on columns "subdomain" */
  RunServiceSubdomainKey = 'run_service_subdomain_key'
}

/** input type for inserting data into table "run_service" */
export type Run_Service_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Run_Service_Max_Fields = {
  __typename?: 'run_service_max_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "run_service" */
export type Run_Service_Max_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Run_Service_Min_Fields = {
  __typename?: 'run_service_min_fields';
  appID?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "run_service" */
export type Run_Service_Min_Order_By = {
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "run_service" */
export type Run_Service_Mutation_Response = {
  __typename?: 'run_service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Run_Service>;
};

/** on_conflict condition type for table "run_service" */
export type Run_Service_On_Conflict = {
  constraint: Run_Service_Constraint;
  update_columns?: Array<Run_Service_Update_Column>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "run_service". */
export type Run_Service_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appID?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: run_service */
export type Run_Service_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "run_service" */
export enum Run_Service_Select_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Id = 'id',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "run_service" */
export type Run_Service_Set_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "run_service" */
export type Run_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Run_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Run_Service_Stream_Cursor_Value_Input = {
  appID?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "run_service" */
export enum Run_Service_Update_Column {
  /** column name */
  AppId = 'appID',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Id = 'id',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Run_Service_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Run_Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Run_Service_Bool_Exp;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** Software type: hasura, postgres, hasura-auth ... */
export type Software_Type = {
  __typename?: 'software_type';
  comment: Scalars['String'];
  /** An array relationship */
  software_versions: Array<Software_Versions>;
  /** An aggregate relationship */
  software_versions_aggregate: Software_Versions_Aggregate;
  type: Scalars['String'];
};


/** Software type: hasura, postgres, hasura-auth ... */
export type Software_TypeSoftware_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


/** Software type: hasura, postgres, hasura-auth ... */
export type Software_TypeSoftware_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};

/** aggregated selection of "software_type" */
export type Software_Type_Aggregate = {
  __typename?: 'software_type_aggregate';
  aggregate?: Maybe<Software_Type_Aggregate_Fields>;
  nodes: Array<Software_Type>;
};

/** aggregate fields of "software_type" */
export type Software_Type_Aggregate_Fields = {
  __typename?: 'software_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Software_Type_Max_Fields>;
  min?: Maybe<Software_Type_Min_Fields>;
};


/** aggregate fields of "software_type" */
export type Software_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "software_type". All fields are combined with a logical 'AND'. */
export type Software_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Type_Bool_Exp>>;
  _not?: InputMaybe<Software_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Software_Type_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  software_versions?: InputMaybe<Software_Versions_Bool_Exp>;
  software_versions_aggregate?: InputMaybe<Software_Versions_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "software_type" */
export enum Software_Type_Constraint {
  /** unique or primary key constraint on columns "type" */
  SoftwareTypePkey = 'software_type_pkey'
}

export enum Software_Type_Enum {
  /** Hasura Auth */
  Auth = 'Auth',
  /** Hasura GraphQL Engine */
  Hasura = 'Hasura',
  /** PostgreSQL Database */
  PostgreSql = 'PostgreSQL',
  /** Hasura Storage */
  Storage = 'Storage'
}

/** Boolean expression to compare columns of type "software_type_enum". All fields are combined with logical 'AND'. */
export type Software_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Software_Type_Enum>;
  _in?: InputMaybe<Array<Software_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Software_Type_Enum>;
  _nin?: InputMaybe<Array<Software_Type_Enum>>;
};

/** input type for inserting data into table "software_type" */
export type Software_Type_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  software_versions?: InputMaybe<Software_Versions_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Software_Type_Max_Fields = {
  __typename?: 'software_type_max_fields';
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Software_Type_Min_Fields = {
  __typename?: 'software_type_min_fields';
  comment?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "software_type" */
export type Software_Type_Mutation_Response = {
  __typename?: 'software_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Software_Type>;
};

/** input type for inserting object relation for remote table "software_type" */
export type Software_Type_Obj_Rel_Insert_Input = {
  data: Software_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Software_Type_On_Conflict>;
};

/** on_conflict condition type for table "software_type" */
export type Software_Type_On_Conflict = {
  constraint: Software_Type_Constraint;
  update_columns?: Array<Software_Type_Update_Column>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "software_type". */
export type Software_Type_Order_By = {
  comment?: InputMaybe<Order_By>;
  software_versions_aggregate?: InputMaybe<Software_Versions_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: software_type */
export type Software_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "software_type" */
export enum Software_Type_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "software_type" */
export type Software_Type_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "software_type" */
export type Software_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Software_Type_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "software_type" */
export enum Software_Type_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Type = 'type'
}

export type Software_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Software_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Software_Type_Bool_Exp;
};

/** columns and relationships of "software_versions" */
export type Software_Versions = {
  __typename?: 'software_versions';
  id: Scalars['uuid'];
  software: Software_Type_Enum;
  /** An object relationship */
  softwareType: Software_Type;
  version: Scalars['String'];
};

/** aggregated selection of "software_versions" */
export type Software_Versions_Aggregate = {
  __typename?: 'software_versions_aggregate';
  aggregate?: Maybe<Software_Versions_Aggregate_Fields>;
  nodes: Array<Software_Versions>;
};

export type Software_Versions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Software_Versions_Aggregate_Bool_Exp_Count>;
};

export type Software_Versions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Software_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Software_Versions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "software_versions" */
export type Software_Versions_Aggregate_Fields = {
  __typename?: 'software_versions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Software_Versions_Max_Fields>;
  min?: Maybe<Software_Versions_Min_Fields>;
};


/** aggregate fields of "software_versions" */
export type Software_Versions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "software_versions" */
export type Software_Versions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Software_Versions_Max_Order_By>;
  min?: InputMaybe<Software_Versions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "software_versions" */
export type Software_Versions_Arr_Rel_Insert_Input = {
  data: Array<Software_Versions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Software_Versions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "software_versions". All fields are combined with a logical 'AND'. */
export type Software_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Versions_Bool_Exp>>;
  _not?: InputMaybe<Software_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Software_Versions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  software?: InputMaybe<Software_Type_Enum_Comparison_Exp>;
  softwareType?: InputMaybe<Software_Type_Bool_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "software_versions" */
export enum Software_Versions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SoftwareVersionsPkey = 'software_versions_pkey'
}

/** input type for inserting data into table "software_versions" */
export type Software_Versions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  software?: InputMaybe<Software_Type_Enum>;
  softwareType?: InputMaybe<Software_Type_Obj_Rel_Insert_Input>;
  version?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Software_Versions_Max_Fields = {
  __typename?: 'software_versions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  version?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "software_versions" */
export type Software_Versions_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Software_Versions_Min_Fields = {
  __typename?: 'software_versions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  version?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "software_versions" */
export type Software_Versions_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "software_versions" */
export type Software_Versions_Mutation_Response = {
  __typename?: 'software_versions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Software_Versions>;
};

/** on_conflict condition type for table "software_versions" */
export type Software_Versions_On_Conflict = {
  constraint: Software_Versions_Constraint;
  update_columns?: Array<Software_Versions_Update_Column>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "software_versions". */
export type Software_Versions_Order_By = {
  id?: InputMaybe<Order_By>;
  software?: InputMaybe<Order_By>;
  softwareType?: InputMaybe<Software_Type_Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: software_versions */
export type Software_Versions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "software_versions" */
export enum Software_Versions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Software = 'software',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "software_versions" */
export type Software_Versions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  software?: InputMaybe<Software_Type_Enum>;
  version?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "software_versions" */
export type Software_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Software_Versions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  software?: InputMaybe<Software_Type_Enum>;
  version?: InputMaybe<Scalars['String']>;
};

/** update columns of table "software_versions" */
export enum Software_Versions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Software = 'software',
  /** column name */
  Version = 'version'
}

export type Software_Versions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Software_Versions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Software_Versions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "graphite.assistants" using primary key columns */
  _graphiteAssistant?: Maybe<_GraphiteAssistants>;
  /** fetch aggregated fields from the table: "graphite.assistants" */
  _graphiteAssistantAggregate: _GraphiteAssistants_Aggregate;
  /** fetch data from the table in a streaming manner: "graphite.assistants" */
  _graphiteAssistantStream: Array<_GraphiteAssistants>;
  /** fetch data from the table: "graphite.assistants" */
  _graphiteAssistants: Array<_GraphiteAssistants>;
  /** fetch data from the table: "graphite.files" using primary key columns */
  _graphiteFile?: Maybe<_GraphiteFiles>;
  /** fetch aggregated fields from the table: "graphite.files" */
  _graphiteFileAggregate: _GraphiteFiles_Aggregate;
  /** fetch data from the table in a streaming manner: "graphite.files" */
  _graphiteFileStream: Array<_GraphiteFiles>;
  /** fetch data from the table: "graphite.files" */
  _graphiteFiles: Array<_GraphiteFiles>;
  /** fetch data from the table: "graphite.sessions" using primary key columns */
  _graphiteSession?: Maybe<_GraphiteSessions>;
  /** fetch aggregated fields from the table: "graphite.sessions" */
  _graphiteSessionAggregate: _GraphiteSessions_Aggregate;
  /** fetch data from the table in a streaming manner: "graphite.sessions" */
  _graphiteSessionStream: Array<_GraphiteSessions>;
  /** fetch data from the table: "graphite.sessions" */
  _graphiteSessions: Array<_GraphiteSessions>;
  /** fetch data from the table: "announcements" */
  announcements: Array<Announcements>;
  /** fetch aggregated fields from the table: "announcements" */
  announcements_aggregate: Announcements_Aggregate;
  /** fetch data from the table: "announcements" using primary key columns */
  announcements_by_pk?: Maybe<Announcements>;
  /** fetch data from the table in a streaming manner: "announcements" */
  announcements_stream: Array<Announcements>;
  /** fetch data from the table: "apps" using primary key columns */
  app?: Maybe<Apps>;
  /** fetch data from the table: "app_states" using primary key columns */
  appState?: Maybe<AppStates>;
  /** fetch data from the table: "app_state_history" */
  appStateHistories: Array<AppStateHistory>;
  /** fetch data from the table: "app_state_history" using primary key columns */
  appStateHistory?: Maybe<AppStateHistory>;
  /** fetch aggregated fields from the table: "app_state_history" */
  appStateHistoryAggregate: AppStateHistory_Aggregate;
  /** fetch data from the table in a streaming manner: "app_state_history" */
  appStateHistory_stream: Array<AppStateHistory>;
  /** fetch data from the table: "app_states" */
  appStates: Array<AppStates>;
  /** fetch aggregated fields from the table: "app_states" */
  appStatesAggregate: AppStates_Aggregate;
  /** fetch data from the table in a streaming manner: "app_states" */
  appStates_stream: Array<AppStates>;
  /** An array relationship */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  appsAggregate: Apps_Aggregate;
  /** fetch data from the table in a streaming manner: "apps" */
  apps_stream: Array<Apps>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table in a streaming manner: "auth.migrations" */
  auth_migrations_stream: Array<Auth_Migrations>;
  /** fetch data from the table: "backups" using primary key columns */
  backup?: Maybe<Backups>;
  /** An array relationship */
  backups: Array<Backups>;
  /** fetch aggregated fields from the table: "backups" */
  backupsAggregate: Backups_Aggregate;
  /** fetch data from the table in a streaming manner: "backups" */
  backups_stream: Array<Backups>;
  /** fetch data from the table: "billing.dedicated_compute" using primary key columns */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute" */
  billingDedicatedComputeAggregate: Billing_Dedicated_Compute_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute_reports" using primary key columns */
  billingDedicatedComputeReport?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReports: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReportsAggregate: Billing_Dedicated_Compute_Reports_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" */
  billingDedicatedComputes: Array<Billing_Dedicated_Compute>;
  /** fetch data from the table: "billing.reports" using primary key columns */
  billingReport?: Maybe<Billing_Reports>;
  /** fetch data from the table: "billing.reports" */
  billingReports: Array<Billing_Reports>;
  /** fetch aggregated fields from the table: "billing.reports" */
  billingReportsAggregate: Billing_Reports_Aggregate;
  /** fetch data from the table in a streaming manner: "billing.reports" */
  billingReportsStream: Array<Billing_Reports>;
  /** fetch data from the table: "billing.resources" using primary key columns */
  billingResource?: Maybe<Billing_Resources>;
  /** fetch data from the table: "billing.resources" */
  billingResources: Array<Billing_Resources>;
  /** fetch aggregated fields from the table: "billing.resources" */
  billingResourcesAggregate: Billing_Resources_Aggregate;
  /** fetch data from the table in a streaming manner: "billing.resources" */
  billingResourcesStream: Array<Billing_Resources>;
  /** fetch data from the table: "billing.subscriptions" using primary key columns */
  billingSubscription?: Maybe<Billing_Subscriptions>;
  /** fetch data from the table: "billing.subscriptions" */
  billingSubscriptions: Array<Billing_Subscriptions>;
  /** fetch aggregated fields from the table: "billing.subscriptions" */
  billingSubscriptionsAggregate: Billing_Subscriptions_Aggregate;
  /** fetch data from the table in a streaming manner: "billing.dedicated_compute_reports" */
  billing_dedicated_compute_reports_stream: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table in a streaming manner: "billing.dedicated_compute" */
  billing_dedicated_compute_stream: Array<Billing_Dedicated_Compute>;
  /** fetch data from the table: "billing.report_type" */
  billing_report_type: Array<Billing_Report_Type>;
  /** fetch aggregated fields from the table: "billing.report_type" */
  billing_report_type_aggregate: Billing_Report_Type_Aggregate;
  /** fetch data from the table: "billing.report_type" using primary key columns */
  billing_report_type_by_pk?: Maybe<Billing_Report_Type>;
  /** fetch data from the table in a streaming manner: "billing.report_type" */
  billing_report_type_stream: Array<Billing_Report_Type>;
  /** fetch data from the table in a streaming manner: "billing.subscriptions" */
  billing_subscriptions_stream: Array<Billing_Subscriptions>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "cli_tokens" using primary key columns */
  cliToken?: Maybe<CliTokens>;
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** fetch aggregated fields from the table: "cli_tokens" */
  cliTokensAggregate: CliTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "cli_tokens" */
  cliTokens_stream: Array<CliTokens>;
  /** fetch data from the table: "continents" */
  continents: Array<Continents>;
  /** fetch aggregated fields from the table: "continents" */
  continents_aggregate: Continents_Aggregate;
  /** fetch data from the table: "continents" using primary key columns */
  continents_by_pk?: Maybe<Continents>;
  /** fetch data from the table in a streaming manner: "continents" */
  continents_stream: Array<Continents>;
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table in a streaming manner: "countries" */
  countries_stream: Array<Countries>;
  /** fetch data from the table: "deployments" using primary key columns */
  deployment?: Maybe<Deployments>;
  /** fetch data from the table: "deployment_logs" using primary key columns */
  deploymentLog?: Maybe<DeploymentLogs>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** fetch aggregated fields from the table: "deployment_logs" */
  deploymentLogsAggregate: DeploymentLogs_Aggregate;
  /** fetch data from the table in a streaming manner: "deployment_logs" */
  deploymentLogs_stream: Array<DeploymentLogs>;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** fetch aggregated fields from the table: "deployments" */
  deploymentsAggregate: Deployments_Aggregate;
  /** fetch data from the table in a streaming manner: "deployments" */
  deployments_stream: Array<Deployments>;
  /** fetch data from the table: "feature_flags" using primary key columns */
  featureFlag?: Maybe<FeatureFlags>;
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  featureFlagsAggregate: FeatureFlags_Aggregate;
  /** fetch data from the table in a streaming manner: "feature_flags" */
  featureFlags_stream: Array<FeatureFlags>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "github_app_installations" using primary key columns */
  githubAppInstallation?: Maybe<GithubAppInstallations>;
  /** fetch data from the table: "github_app_installations" */
  githubAppInstallations: Array<GithubAppInstallations>;
  /** fetch aggregated fields from the table: "github_app_installations" */
  githubAppInstallationsAggregate: GithubAppInstallations_Aggregate;
  /** fetch data from the table in a streaming manner: "github_app_installations" */
  githubAppInstallations_stream: Array<GithubAppInstallations>;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** fetch aggregated fields from the table: "github_repositories" */
  githubRepositoriesAggregate: GithubRepositories_Aggregate;
  /** fetch data from the table in a streaming manner: "github_repositories" */
  githubRepositories_stream: Array<GithubRepositories>;
  /** fetch data from the table: "github_repositories" using primary key columns */
  githubRepository?: Maybe<GithubRepositories>;
  /** fetch data from the table: "graphite.auto_embeddings_configuration" using primary key columns */
  graphiteAutoEmbeddingsConfiguration?: Maybe<GraphiteAutoEmbeddingsConfiguration>;
  /** fetch aggregated fields from the table: "graphite.auto_embeddings_configuration" */
  graphiteAutoEmbeddingsConfigurationAggregate: GraphiteAutoEmbeddingsConfiguration_Aggregate;
  /** fetch data from the table in a streaming manner: "graphite.auto_embeddings_configuration" */
  graphiteAutoEmbeddingsConfigurationStream: Array<GraphiteAutoEmbeddingsConfiguration>;
  /** fetch data from the table: "graphite.auto_embeddings_configuration" */
  graphiteAutoEmbeddingsConfigurations: Array<GraphiteAutoEmbeddingsConfiguration>;
  /**
   * Returns logs for a given application. If `service` is not provided all services are returned.
   * If `from` is not provided, it defaults to an hour ago.
   */
  logs: Array<Log>;
  /** fetch data from the table: "payment_methods" using primary key columns */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** fetch aggregated fields from the table: "payment_methods" */
  paymentMethodsAggregate: PaymentMethods_Aggregate;
  /** fetch data from the table in a streaming manner: "payment_methods" */
  paymentMethods_stream: Array<PaymentMethods>;
  /** fetch data from the table: "plans" using primary key columns */
  plan?: Maybe<Plans>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plansAggregate: Plans_Aggregate;
  /** fetch data from the table in a streaming manner: "plans" */
  plans_stream: Array<Plans>;
  /** fetch data from the table: "region_type" */
  region_type: Array<Region_Type>;
  /** fetch aggregated fields from the table: "region_type" */
  region_type_aggregate: Region_Type_Aggregate;
  /** fetch data from the table: "region_type" using primary key columns */
  region_type_by_pk?: Maybe<Region_Type>;
  /** fetch data from the table in a streaming manner: "region_type" */
  region_type_stream: Array<Region_Type>;
  /** An array relationship */
  regions: Array<Regions>;
  /** An aggregate relationship */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table in a streaming manner: "regions_allowed_workspace" */
  regions_allowed_workspace_stream: Array<Regions_Allowed_Workspace>;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
  /** fetch data from the table in a streaming manner: "regions" */
  regions_stream: Array<Regions>;
  /** fetch data from the table: "run_service" using primary key columns */
  runService?: Maybe<Run_Service>;
  /** An array relationship */
  runServices: Array<Run_Service>;
  /** fetch aggregated fields from the table: "run_service" */
  runServicesAggregate: Run_Service_Aggregate;
  /** fetch data from the table in a streaming manner: "run_service" */
  run_service_stream: Array<Run_Service>;
  /** fetch data from the table: "regions_allowed_workspace" using primary key columns */
  selectRegionsAllowedWorkspace?: Maybe<Regions_Allowed_Workspace>;
  /** fetch data from the table: "regions_allowed_workspace" */
  selectRegionsAllowedWorkspaces: Array<Regions_Allowed_Workspace>;
  /** fetch aggregated fields from the table: "regions_allowed_workspace" */
  selectRegionsAllowedWorkspacesAggregate: Regions_Allowed_Workspace_Aggregate;
  /** fetch data from the table: "software_type" using primary key columns */
  softwareType?: Maybe<Software_Type>;
  /** fetch data from the table: "software_type" */
  softwareTypes: Array<Software_Type>;
  /** fetch aggregated fields from the table: "software_type" */
  softwareTypesAggregate: Software_Type_Aggregate;
  /** fetch data from the table in a streaming manner: "software_type" */
  softwareTypesStream: Array<Software_Type>;
  /** fetch data from the table: "software_versions" using primary key columns */
  softwareVersion?: Maybe<Software_Versions>;
  /** fetch data from the table: "software_versions" */
  softwareVersions: Array<Software_Versions>;
  /** fetch aggregated fields from the table: "software_versions" */
  softwareVersionsAggregate: Software_Versions_Aggregate;
  /** fetch data from the table in a streaming manner: "software_versions" */
  softwareVersionsStream: Array<Software_Versions>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_usage" using primary key columns */
  usersUsage?: Maybe<Users_Usage>;
  /** fetch data from the table: "users_usage" */
  usersUsages: Array<Users_Usage>;
  /** fetch aggregated fields from the table: "users_usage" */
  usersUsagesAggregate: Users_Usage_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table in a streaming manner: "users_usage" */
  users_usage_stream: Array<Users_Usage>;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspace?: Maybe<Workspaces>;
  /** fetch data from the table: "workspace_members" using primary key columns */
  workspaceMember?: Maybe<WorkspaceMembers>;
  /** fetch data from the table: "workspace_member_invites" using primary key columns */
  workspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** fetch aggregated fields from the table: "workspace_member_invites" */
  workspaceMemberInvitesAggregate: WorkspaceMemberInvites_Aggregate;
  /** fetch data from the table in a streaming manner: "workspace_member_invites" */
  workspaceMemberInvites_stream: Array<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** fetch aggregated fields from the table: "workspace_members" */
  workspaceMembersAggregate: WorkspaceMembers_Aggregate;
  /** fetch data from the table in a streaming manner: "workspace_members" */
  workspaceMembers_stream: Array<WorkspaceMembers>;
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: Workspaces_Aggregate;
  /** fetch data from the table in a streaming manner: "workspaces" */
  workspaces_stream: Array<Workspaces>;
};


export type Subscription_Root_GraphiteAssistantArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_GraphiteAssistantAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};


export type Subscription_Root_GraphiteAssistantStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_GraphiteAssistants_Stream_Cursor_Input>>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};


export type Subscription_Root_GraphiteAssistantsArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteAssistants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteAssistants_Order_By>>;
  where?: InputMaybe<_GraphiteAssistants_Bool_Exp>;
};


export type Subscription_Root_GraphiteFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_GraphiteFileAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteFiles_Order_By>>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};


export type Subscription_Root_GraphiteFileStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_GraphiteFiles_Stream_Cursor_Input>>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};


export type Subscription_Root_GraphiteFilesArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteFiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteFiles_Order_By>>;
  where?: InputMaybe<_GraphiteFiles_Bool_Exp>;
};


export type Subscription_Root_GraphiteSessionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_Root_GraphiteSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};


export type Subscription_Root_GraphiteSessionStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_GraphiteSessions_Stream_Cursor_Input>>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};


export type Subscription_Root_GraphiteSessionsArgs = {
  distinct_on?: InputMaybe<Array<_GraphiteSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_GraphiteSessions_Order_By>>;
  where?: InputMaybe<_GraphiteSessions_Bool_Exp>;
};


export type Subscription_RootAnnouncementsArgs = {
  distinct_on?: InputMaybe<Array<Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcements_Order_By>>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};


export type Subscription_RootAnnouncements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Announcements_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Announcements_Order_By>>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};


export type Subscription_RootAnnouncements_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAnnouncements_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Announcements_Stream_Cursor_Input>>;
  where?: InputMaybe<Announcements_Bool_Exp>;
};


export type Subscription_RootAppArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAppStateArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAppStateHistoriesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAppStateHistoryAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStateHistory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AppStateHistory_Stream_Cursor_Input>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppStates_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AppStates_Stream_Cursor_Input>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootAppsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootApps_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Apps_Stream_Cursor_Input>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_Migrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootBackupArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBackupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBackups_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Backups_Stream_Cursor_Input>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingDedicatedComputeAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeReportArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingDedicatedComputeReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBillingReportArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


export type Subscription_RootBillingReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Reports_Order_By>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


export type Subscription_RootBillingReportsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Reports_Bool_Exp>;
};


export type Subscription_RootBillingResourceArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingResourcesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Resources_Order_By>>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};


export type Subscription_RootBillingResourcesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Resources_Order_By>>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};


export type Subscription_RootBillingResourcesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Resources_Bool_Exp>;
};


export type Subscription_RootBillingSubscriptionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBillingSubscriptionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBilling_Dedicated_Compute_Reports_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Dedicated_Compute_Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBilling_Dedicated_Compute_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Dedicated_Compute_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBilling_Report_TypeArgs = {
  distinct_on?: InputMaybe<Array<Billing_Report_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Report_Type_Order_By>>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};


export type Subscription_RootBilling_Report_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Report_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Report_Type_Order_By>>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};


export type Subscription_RootBilling_Report_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootBilling_Report_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Report_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Report_Type_Bool_Exp>;
};


export type Subscription_RootBilling_Subscriptions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Subscriptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCliTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootCliTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootCliTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CliTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootContinentsArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootContinents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootContinents_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Subscription_RootContinents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Continents_Stream_Cursor_Input>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Subscription_RootCountries_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootDeploymentArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDeploymentLogArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentLogs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DeploymentLogs_Stream_Cursor_Input>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootDeploymentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootDeployments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Deployments_Stream_Cursor_Input>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootFeatureFlagArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFeatureFlagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFeatureFlags_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeatureFlags_Stream_Cursor_Input>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGithubAppInstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GithubAppInstallations_Stream_Cursor_Input>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GithubRepositories_Stream_Cursor_Input>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGraphiteAutoEmbeddingsConfigurationArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGraphiteAutoEmbeddingsConfigurationAggregateArgs = {
  distinct_on?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Order_By>>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};


export type Subscription_RootGraphiteAutoEmbeddingsConfigurationStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GraphiteAutoEmbeddingsConfiguration_Stream_Cursor_Input>>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};


export type Subscription_RootGraphiteAutoEmbeddingsConfigurationsArgs = {
  distinct_on?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GraphiteAutoEmbeddingsConfiguration_Order_By>>;
  where?: InputMaybe<GraphiteAutoEmbeddingsConfiguration_Bool_Exp>;
};


export type Subscription_RootLogsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  regexFilter?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
};


export type Subscription_RootPaymentMethodArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPaymentMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPaymentMethods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PaymentMethods_Stream_Cursor_Input>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPlanArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootRegion_TypeArgs = {
  distinct_on?: InputMaybe<Array<Region_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Region_Type_Order_By>>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};


export type Subscription_RootRegion_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Region_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Region_Type_Order_By>>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};


export type Subscription_RootRegion_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootRegion_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Region_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Region_Type_Bool_Exp>;
};


export type Subscription_RootRegionsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootRegions_Allowed_Workspace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Regions_Allowed_Workspace_Stream_Cursor_Input>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


export type Subscription_RootRegions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRegions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Regions_Stream_Cursor_Input>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootRunServiceArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRunServicesArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


export type Subscription_RootRunServicesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


export type Subscription_RootRun_Service_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Run_Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


export type Subscription_RootSelectRegionsAllowedWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSelectRegionsAllowedWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


export type Subscription_RootSelectRegionsAllowedWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


export type Subscription_RootSoftwareTypeArgs = {
  type: Scalars['String'];
};


export type Subscription_RootSoftwareTypesArgs = {
  distinct_on?: InputMaybe<Array<Software_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Type_Order_By>>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};


export type Subscription_RootSoftwareTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Type_Order_By>>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};


export type Subscription_RootSoftwareTypesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Software_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Software_Type_Bool_Exp>;
};


export type Subscription_RootSoftwareVersionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSoftwareVersionsArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


export type Subscription_RootSoftwareVersionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Versions_Order_By>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


export type Subscription_RootSoftwareVersionsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Software_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Software_Versions_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersUsageArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersUsagesArgs = {
  distinct_on?: InputMaybe<Array<Users_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Usage_Order_By>>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};


export type Subscription_RootUsersUsagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Usage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Usage_Order_By>>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_Usage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Usage_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};


export type Subscription_RootWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMemberInvitesAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMemberInvites_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WorkspaceMemberInvites_Stream_Cursor_Input>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembersAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WorkspaceMembers_Stream_Cursor_Input>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Subscription_RootWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Subscription_RootWorkspaces_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workspaces_Stream_Cursor_Input>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  avatarUrl: Scalars['String'];
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** An aggregate relationship */
  cliTokens_aggregate: CliTokens_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  creatorOfWorkspaces: Array<Workspaces>;
  /** An aggregate relationship */
  creatorOfWorkspaces_aggregate: Workspaces_Aggregate;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  github_app_installations: Array<GithubAppInstallations>;
  /** An aggregate relationship */
  github_app_installations_aggregate: GithubAppInstallations_Aggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  /** An array relationship */
  payment_methods: Array<PaymentMethods>;
  /** An aggregate relationship */
  payment_methods_aggregate: PaymentMethods_Aggregate;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An object relationship */
  role: AuthRoles;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  runServices: Array<Run_Service>;
  /** An aggregate relationship */
  runServices_aggregate: Run_Service_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An array relationship */
  workspaceMemberInvitesByInvitedByUserId: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspaceMemberInvitesByInvitedByUserId_aggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** An aggregate relationship */
  workspaceMembers_aggregate: WorkspaceMembers_Aggregate;
  /** An array relationship */
  workspace_member_invites: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspace_member_invites_aggregate: WorkspaceMemberInvites_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCliTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCreatorOfWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCreatorOfWorkspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGithub_App_InstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGithub_App_Installations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPayment_MethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPayment_Methods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRunServicesArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRunServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Run_Service_Order_By>>;
  where?: InputMaybe<Run_Service_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMemberInvitesByInvitedByUserIdArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMemberInvitesByInvitedByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspace_Member_InvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspace_Member_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  cliTokens?: InputMaybe<CliTokens_Bool_Exp>;
  cliTokens_aggregate?: InputMaybe<CliTokens_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorOfWorkspaces?: InputMaybe<Workspaces_Bool_Exp>;
  creatorOfWorkspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Bool_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  github_app_installations?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  github_app_installations_aggregate?: InputMaybe<GithubAppInstallations_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  payment_methods?: InputMaybe<PaymentMethods_Bool_Exp>;
  payment_methods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  role?: InputMaybe<AuthRoles_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  runServices?: InputMaybe<Run_Service_Bool_Exp>;
  runServices_aggregate?: InputMaybe<Run_Service_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
  workspaceMemberInvitesByInvitedByUserId?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspaceMemberInvitesByInvitedByUserId_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp>;
  workspace_member_invites?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspace_member_invites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  cliTokens?: InputMaybe<CliTokens_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorOfWorkspaces?: InputMaybe<Workspaces_Arr_Rel_Insert_Input>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  github_app_installations?: InputMaybe<GithubAppInstallations_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  payment_methods?: InputMaybe<PaymentMethods_Arr_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  role?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  runServices?: InputMaybe<Run_Service_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  workspaceMemberInvitesByInvitedByUserId?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Arr_Rel_Insert_Input>;
  workspace_member_invites?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  cliTokens_aggregate?: InputMaybe<CliTokens_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorOfWorkspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  github_app_installations_aggregate?: InputMaybe<GithubAppInstallations_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  payment_methods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  role?: InputMaybe<AuthRoles_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  runServices_aggregate?: InputMaybe<Run_Service_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  workspaceMemberInvitesByInvitedByUserId_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Order_By>;
  workspace_member_invites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** columns and relationships of "users_usage" */
export type Users_Usage = {
  __typename?: 'users_usage';
  created_at: Scalars['timestamptz'];
  free_allowance_exceeded: Scalars['Boolean'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "users_usage" */
export type Users_Usage_Aggregate = {
  __typename?: 'users_usage_aggregate';
  aggregate?: Maybe<Users_Usage_Aggregate_Fields>;
  nodes: Array<Users_Usage>;
};

/** aggregate fields of "users_usage" */
export type Users_Usage_Aggregate_Fields = {
  __typename?: 'users_usage_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Usage_Max_Fields>;
  min?: Maybe<Users_Usage_Min_Fields>;
};


/** aggregate fields of "users_usage" */
export type Users_Usage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Usage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users_usage". All fields are combined with a logical 'AND'. */
export type Users_Usage_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Usage_Bool_Exp>>;
  _not?: InputMaybe<Users_Usage_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Usage_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  free_allowance_exceeded?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_usage" */
export enum Users_Usage_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersUsagePkey = 'users_usage_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UsersUsageUserIdKey = 'users_usage_user_id_key'
}

/** input type for inserting data into table "users_usage" */
export type Users_Usage_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  free_allowance_exceeded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Usage_Max_Fields = {
  __typename?: 'users_usage_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Usage_Min_Fields = {
  __typename?: 'users_usage_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users_usage" */
export type Users_Usage_Mutation_Response = {
  __typename?: 'users_usage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Usage>;
};

/** on_conflict condition type for table "users_usage" */
export type Users_Usage_On_Conflict = {
  constraint: Users_Usage_Constraint;
  update_columns?: Array<Users_Usage_Update_Column>;
  where?: InputMaybe<Users_Usage_Bool_Exp>;
};

/** Ordering options when selecting data from "users_usage". */
export type Users_Usage_Order_By = {
  created_at?: InputMaybe<Order_By>;
  free_allowance_exceeded?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_usage */
export type Users_Usage_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_usage" */
export enum Users_Usage_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FreeAllowanceExceeded = 'free_allowance_exceeded',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_usage" */
export type Users_Usage_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  free_allowance_exceeded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "users_usage" */
export type Users_Usage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Usage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Usage_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  free_allowance_exceeded?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "users_usage" */
export enum Users_Usage_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FreeAllowanceExceeded = 'free_allowance_exceeded',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Users_Usage_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Usage_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Usage_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workspace_member_invites" */
export type WorkspaceMemberInvites = {
  __typename?: 'workspaceMemberInvites';
  createdAt: Scalars['timestamptz'];
  email: Scalars['citext'];
  id: Scalars['uuid'];
  /** An object relationship */
  invitedByUser: Users;
  invitedByUserId: Scalars['uuid'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  /** owner or member */
  memberType: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  userByEmail?: Maybe<Users>;
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate = {
  __typename?: 'workspaceMemberInvites_aggregate';
  aggregate?: Maybe<WorkspaceMemberInvites_Aggregate_Fields>;
  nodes: Array<WorkspaceMemberInvites>;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Count>;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And = {
  arguments: WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or = {
  arguments: WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_Fields = {
  __typename?: 'workspaceMemberInvites_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WorkspaceMemberInvites_Max_Fields>;
  min?: Maybe<WorkspaceMemberInvites_Min_Fields>;
};


/** aggregate fields of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WorkspaceMemberInvites_Max_Order_By>;
  min?: InputMaybe<WorkspaceMemberInvites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_member_invites" */
export type WorkspaceMemberInvites_Arr_Rel_Insert_Input = {
  data: Array<WorkspaceMemberInvites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspace_member_invites". All fields are combined with a logical 'AND'. */
export type WorkspaceMemberInvites_Bool_Exp = {
  _and?: InputMaybe<Array<WorkspaceMemberInvites_Bool_Exp>>;
  _not?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  _or?: InputMaybe<Array<WorkspaceMemberInvites_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedByUser?: InputMaybe<Users_Bool_Exp>;
  invitedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  isAccepted?: InputMaybe<Boolean_Comparison_Exp>;
  memberType?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userByEmail?: InputMaybe<Users_Bool_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Constraint {
  /** unique or primary key constraint on columns "workspace_id", "email" */
  WorkspaceMemberInvitesEmailWorkspaceIdKey = 'workspace_member_invites_email_workspace_id_key',
  /** unique or primary key constraint on columns "id" */
  WorkspaceMemberInvitesPkey = 'workspace_member_invites_pkey'
}

/** input type for inserting data into table "workspace_member_invites" */
export type WorkspaceMemberInvites_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userByEmail?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkspaceMemberInvites_Max_Fields = {
  __typename?: 'workspaceMemberInvites_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  invitedByUserId?: Maybe<Scalars['uuid']>;
  /** owner or member */
  memberType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  /** owner or member */
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WorkspaceMemberInvites_Min_Fields = {
  __typename?: 'workspaceMemberInvites_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  invitedByUserId?: Maybe<Scalars['uuid']>;
  /** owner or member */
  memberType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  /** owner or member */
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspace_member_invites" */
export type WorkspaceMemberInvites_Mutation_Response = {
  __typename?: 'workspaceMemberInvites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceMemberInvites>;
};

/** on_conflict condition type for table "workspace_member_invites" */
export type WorkspaceMemberInvites_On_Conflict = {
  constraint: WorkspaceMemberInvites_Constraint;
  update_columns?: Array<WorkspaceMemberInvites_Update_Column>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace_member_invites". */
export type WorkspaceMemberInvites_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUser?: InputMaybe<Users_Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  isAccepted?: InputMaybe<Order_By>;
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userByEmail?: InputMaybe<Users_Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workspace_member_invites */
export type WorkspaceMemberInvites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedByUserId = 'invitedByUserId',
  /** column name */
  IsAccepted = 'isAccepted',
  /** column name */
  MemberType = 'memberType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "workspaceMemberInvites_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAccepted = 'isAccepted'
}

/** select "workspaceMemberInvites_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAccepted = 'isAccepted'
}

/** input type for updating data in table "workspace_member_invites" */
export type WorkspaceMemberInvites_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspaceMemberInvites" */
export type WorkspaceMemberInvites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WorkspaceMemberInvites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkspaceMemberInvites_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedByUserId = 'invitedByUserId',
  /** column name */
  IsAccepted = 'isAccepted',
  /** column name */
  MemberType = 'memberType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type WorkspaceMemberInvites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  /** filter the rows which have to be updated */
  where: WorkspaceMemberInvites_Bool_Exp;
};

/** columns and relationships of "workspace_members" */
export type WorkspaceMembers = {
  __typename?: 'workspaceMembers';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** owner or member */
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "workspace_members" */
export type WorkspaceMembers_Aggregate = {
  __typename?: 'workspaceMembers_aggregate';
  aggregate?: Maybe<WorkspaceMembers_Aggregate_Fields>;
  nodes: Array<WorkspaceMembers>;
};

export type WorkspaceMembers_Aggregate_Bool_Exp = {
  count?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp_Count>;
};

export type WorkspaceMembers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspace_members" */
export type WorkspaceMembers_Aggregate_Fields = {
  __typename?: 'workspaceMembers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WorkspaceMembers_Max_Fields>;
  min?: Maybe<WorkspaceMembers_Min_Fields>;
};


/** aggregate fields of "workspace_members" */
export type WorkspaceMembers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_members" */
export type WorkspaceMembers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WorkspaceMembers_Max_Order_By>;
  min?: InputMaybe<WorkspaceMembers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_members" */
export type WorkspaceMembers_Arr_Rel_Insert_Input = {
  data: Array<WorkspaceMembers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspace_members". All fields are combined with a logical 'AND'. */
export type WorkspaceMembers_Bool_Exp = {
  _and?: InputMaybe<Array<WorkspaceMembers_Bool_Exp>>;
  _not?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  _or?: InputMaybe<Array<WorkspaceMembers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workspace_members" */
export enum WorkspaceMembers_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkspaceMembersPkey = 'workspace_members_pkey',
  /** unique or primary key constraint on columns "workspace_id", "user_id" */
  WorkspaceMembersUserIdWorkspaceIdKey = 'workspace_members_user_id_workspace_id_key'
}

/** input type for inserting data into table "workspace_members" */
export type WorkspaceMembers_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkspaceMembers_Max_Fields = {
  __typename?: 'workspaceMembers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** owner or member */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workspace_members" */
export type WorkspaceMembers_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** owner or member */
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WorkspaceMembers_Min_Fields = {
  __typename?: 'workspaceMembers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** owner or member */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workspace_members" */
export type WorkspaceMembers_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** owner or member */
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspace_members" */
export type WorkspaceMembers_Mutation_Response = {
  __typename?: 'workspaceMembers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceMembers>;
};

/** on_conflict condition type for table "workspace_members" */
export type WorkspaceMembers_On_Conflict = {
  constraint: WorkspaceMembers_Constraint;
  update_columns?: Array<WorkspaceMembers_Update_Column>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace_members". */
export type WorkspaceMembers_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workspace_members */
export type WorkspaceMembers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspace_members" */
export enum WorkspaceMembers_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** input type for updating data in table "workspace_members" */
export type WorkspaceMembers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspaceMembers" */
export type WorkspaceMembers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WorkspaceMembers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkspaceMembers_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_members" */
export enum WorkspaceMembers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type WorkspaceMembers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  /** filter the rows which have to be updated */
  where: WorkspaceMembers_Bool_Exp;
};

/** columns and relationships of "workspaces" */
export type Workspaces = {
  __typename?: 'workspaces';
  /** City, district, suburb, town, or village. */
  addressCity: Scalars['String'];
  /** An object relationship */
  addressCountry?: Maybe<Countries>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1: Scalars['String'];
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2: Scalars['String'];
  /** ZIP or postal code. */
  addressPostalCode: Scalars['String'];
  /** State, county, province, or region. */
  addressState: Scalars['String'];
  /** An object relationship */
  allowedPrivateRegions?: Maybe<Regions_Allowed_Workspace>;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  companyName: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creatorUser?: Maybe<Users>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** An aggregate relationship */
  paymentMethods_aggregate: PaymentMethods_Aggregate;
  /** An array relationship */
  regions_allowed_workspaces: Array<Regions_Allowed_Workspace>;
  /** An aggregate relationship */
  regions_allowed_workspaces_aggregate: Regions_Allowed_Workspace_Aggregate;
  slug: Scalars['String'];
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType: Scalars['String'];
  taxIdValue: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspaceMemberInvites_aggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** An aggregate relationship */
  workspaceMembers_aggregate: WorkspaceMembers_Aggregate;
};


/** columns and relationships of "workspaces" */
export type WorkspacesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesPaymentMethods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesRegions_Allowed_WorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesRegions_Allowed_Workspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Allowed_Workspace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Allowed_Workspace_Order_By>>;
  where?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMemberInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};

/** aggregated selection of "workspaces" */
export type Workspaces_Aggregate = {
  __typename?: 'workspaces_aggregate';
  aggregate?: Maybe<Workspaces_Aggregate_Fields>;
  nodes: Array<Workspaces>;
};

export type Workspaces_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workspaces_Aggregate_Bool_Exp_Count>;
};

export type Workspaces_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workspaces_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workspaces_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_Fields = {
  __typename?: 'workspaces_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workspaces_Max_Fields>;
  min?: Maybe<Workspaces_Min_Fields>;
};


/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workspaces_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspaces" */
export type Workspaces_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workspaces_Max_Order_By>;
  min?: InputMaybe<Workspaces_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspaces" */
export type Workspaces_Arr_Rel_Insert_Input = {
  data: Array<Workspaces_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspaces". All fields are combined with a logical 'AND'. */
export type Workspaces_Bool_Exp = {
  _and?: InputMaybe<Array<Workspaces_Bool_Exp>>;
  _not?: InputMaybe<Workspaces_Bool_Exp>;
  _or?: InputMaybe<Array<Workspaces_Bool_Exp>>;
  addressCity?: InputMaybe<String_Comparison_Exp>;
  addressCountry?: InputMaybe<Countries_Bool_Exp>;
  addressCountryCode?: InputMaybe<String_Comparison_Exp>;
  addressLine1?: InputMaybe<String_Comparison_Exp>;
  addressLine2?: InputMaybe<String_Comparison_Exp>;
  addressPostalCode?: InputMaybe<String_Comparison_Exp>;
  addressState?: InputMaybe<String_Comparison_Exp>;
  allowedPrivateRegions?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  companyName?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorUser?: InputMaybe<Users_Bool_Exp>;
  creatorUserId?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  paymentMethod?: InputMaybe<PaymentMethods_Bool_Exp>;
  paymentMethods?: InputMaybe<PaymentMethods_Bool_Exp>;
  paymentMethods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp>;
  regions_allowed_workspaces?: InputMaybe<Regions_Allowed_Workspace_Bool_Exp>;
  regions_allowed_workspaces_aggregate?: InputMaybe<Regions_Allowed_Workspace_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  stripeCustomerId?: InputMaybe<String_Comparison_Exp>;
  taxIdType?: InputMaybe<String_Comparison_Exp>;
  taxIdValue?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  workspaceMemberInvites?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspaceMemberInvites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workspaces" */
export enum Workspaces_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkspacesPkey = 'workspaces_pkey',
  /** unique or primary key constraint on columns "slug" */
  WorkspacesSlugKey = 'workspaces_slug_key'
}

/** input type for inserting data into table "workspaces" */
export type Workspaces_Insert_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  addressCountry?: InputMaybe<Countries_Obj_Rel_Insert_Input>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  allowedPrivateRegions?: InputMaybe<Regions_Allowed_Workspace_Obj_Rel_Insert_Input>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PaymentMethods_Obj_Rel_Insert_Input>;
  paymentMethods?: InputMaybe<PaymentMethods_Arr_Rel_Insert_Input>;
  regions_allowed_workspaces?: InputMaybe<Regions_Allowed_Workspace_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceMemberInvites?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workspaces_Max_Fields = {
  __typename?: 'workspaces_max_fields';
  /** City, district, suburb, town, or village. */
  addressCity?: Maybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: Maybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: Maybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType?: Maybe<Scalars['String']>;
  taxIdValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "workspaces" */
export type Workspaces_Max_Order_By = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Order_By>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Order_By>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Order_By>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Order_By>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Order_By>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workspaces_Min_Fields = {
  __typename?: 'workspaces_min_fields';
  /** City, district, suburb, town, or village. */
  addressCity?: Maybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: Maybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: Maybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType?: Maybe<Scalars['String']>;
  taxIdValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "workspaces" */
export type Workspaces_Min_Order_By = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Order_By>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Order_By>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Order_By>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Order_By>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Order_By>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspaces" */
export type Workspaces_Mutation_Response = {
  __typename?: 'workspaces_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workspaces>;
};

/** input type for inserting object relation for remote table "workspaces" */
export type Workspaces_Obj_Rel_Insert_Input = {
  data: Workspaces_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};

/** on_conflict condition type for table "workspaces" */
export type Workspaces_On_Conflict = {
  constraint: Workspaces_Constraint;
  update_columns?: Array<Workspaces_Update_Column>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** Ordering options when selecting data from "workspaces". */
export type Workspaces_Order_By = {
  addressCity?: InputMaybe<Order_By>;
  addressCountry?: InputMaybe<Countries_Order_By>;
  addressCountryCode?: InputMaybe<Order_By>;
  addressLine1?: InputMaybe<Order_By>;
  addressLine2?: InputMaybe<Order_By>;
  addressPostalCode?: InputMaybe<Order_By>;
  addressState?: InputMaybe<Order_By>;
  allowedPrivateRegions?: InputMaybe<Regions_Allowed_Workspace_Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUser?: InputMaybe<Users_Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  paymentMethod?: InputMaybe<PaymentMethods_Order_By>;
  paymentMethods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Order_By>;
  regions_allowed_workspaces_aggregate?: InputMaybe<Regions_Allowed_Workspace_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceMemberInvites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Order_By>;
};

/** primary key columns input for table: workspaces */
export type Workspaces_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspaces" */
export enum Workspaces_Select_Column {
  /** column name */
  AddressCity = 'addressCity',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressLine1 = 'addressLine1',
  /** column name */
  AddressLine2 = 'addressLine2',
  /** column name */
  AddressPostalCode = 'addressPostalCode',
  /** column name */
  AddressState = 'addressState',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TaxIdType = 'taxIdType',
  /** column name */
  TaxIdValue = 'taxIdValue',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "workspaces" */
export type Workspaces_Set_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "workspaces" */
export type Workspaces_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workspaces_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspaces_Stream_Cursor_Value_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "workspaces" */
export enum Workspaces_Update_Column {
  /** column name */
  AddressCity = 'addressCity',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressLine1 = 'addressLine1',
  /** column name */
  AddressLine2 = 'addressLine2',
  /** column name */
  AddressPostalCode = 'addressPostalCode',
  /** column name */
  AddressState = 'addressState',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TaxIdType = 'taxIdType',
  /** column name */
  TaxIdValue = 'taxIdValue',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Workspaces_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workspaces_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workspaces_Bool_Exp;
};

export type DeleteAssistantMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAssistantMutation = { __typename?: 'mutation_root', graphite?: { __typename?: 'graphiteMutation', deleteAssistant: boolean } | null };

export type GetAssistantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAssistantsQuery = { __typename?: 'query_root', graphite?: { __typename?: 'graphiteQuery', assistants: Array<{ __typename?: 'graphiteAssistant', assistantID: string, name: string, description: string, model: string, instructions: string, buckets?: Array<string | null> | null, graphql?: Array<{ __typename?: 'graphiteAssistantToolGraphQL', name: string, query: string, description: string, arguments: Array<{ __typename?: 'graphiteAssistantToolArgument', name: string, type: string, description: string, required: boolean }> }> | null, webhooks?: Array<{ __typename?: 'graphiteAssistantToolWebhook', name: string, URL: string, description: string, arguments: Array<{ __typename?: 'graphiteAssistantToolArgument', name: string, type: string, description: string, required: boolean }> }> | null }> } | null };

export type GetGraphiteSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGraphiteSessionsQuery = { __typename?: 'query_root', graphite?: { __typename?: 'graphiteQuery', sessions: Array<{ __typename?: 'graphiteSession', sessionID: string }> } | null };

export type InsertAssistantMutationVariables = Exact<{
  data: GraphiteAssistantInput;
}>;


export type InsertAssistantMutation = { __typename?: 'mutation_root', graphite?: { __typename?: 'graphiteMutation', insertAssistant: { __typename?: 'graphiteAssistant', assistantID: string } } | null };

export type UpdateAssistantMutationVariables = Exact<{
  id: Scalars['String'];
  data: GraphiteAssistantInput;
}>;


export type UpdateAssistantMutation = { __typename?: 'mutation_root', graphite?: { __typename?: 'graphiteMutation', updateAssistant: { __typename?: 'graphiteAssistant', assistantID: string } } | null };

export type DeleteGraphiteAutoEmbeddingsConfigurationMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteGraphiteAutoEmbeddingsConfigurationMutation = { __typename?: 'mutation_root', deleteGraphiteAutoEmbeddingsConfiguration?: { __typename: 'graphiteAutoEmbeddingsConfiguration' } | null };

export type GetGraphiteAutoEmbeddingsConfigurationsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetGraphiteAutoEmbeddingsConfigurationsQuery = { __typename?: 'query_root', graphiteAutoEmbeddingsConfigurations: Array<{ __typename?: 'graphiteAutoEmbeddingsConfiguration', id: any, name: string, model: string, schemaName: string, tableName: string, columnName: string, query?: string | null, mutation?: string | null, createdAt: any, updatedAt: any }>, graphiteAutoEmbeddingsConfigurationAggregate: { __typename?: 'graphiteAutoEmbeddingsConfiguration_aggregate', aggregate?: { __typename?: 'graphiteAutoEmbeddingsConfiguration_aggregate_fields', count: number } | null } };

export type InsertGraphiteAutoEmbeddingsConfigurationMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  schemaName?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
  columnName?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  mutation?: InputMaybe<Scalars['String']>;
}>;


export type InsertGraphiteAutoEmbeddingsConfigurationMutation = { __typename?: 'mutation_root', insertGraphiteAutoEmbeddingsConfiguration?: { __typename?: 'graphiteAutoEmbeddingsConfiguration', id: any } | null };

export type UpdateGraphiteAutoEmbeddingsConfigurationMutationVariables = Exact<{
  id: Scalars['uuid'];
  name?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  schemaName?: InputMaybe<Scalars['String']>;
  tableName?: InputMaybe<Scalars['String']>;
  columnName?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  mutation?: InputMaybe<Scalars['String']>;
}>;


export type UpdateGraphiteAutoEmbeddingsConfigurationMutation = { __typename?: 'mutation_root', updateGraphiteAutoEmbeddingsConfiguration?: { __typename?: 'graphiteAutoEmbeddingsConfiguration', id: any, name: string, model: string, schemaName: string, tableName: string, columnName: string, query?: string | null, mutation?: string | null } | null };

export type SendDevMessageMutationVariables = Exact<{
  sessionId: Scalars['String'];
  prevMessageID: Scalars['String'];
  message: Scalars['String'];
}>;


export type SendDevMessageMutation = { __typename?: 'mutation_root', graphite?: { __typename?: 'graphiteMutation', sendDevMessage: { __typename?: 'graphiteMessageResponse', messages: Array<{ __typename?: 'graphiteMessage', id: string, role: string, message: string, createdAt: any }> } } | null };

export type StartDevSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type StartDevSessionMutation = { __typename?: 'mutation_root', graphite?: { __typename?: 'graphiteMutation', startDevSession: { __typename?: 'graphiteSession', sessionID: string } } | null };


export const DeleteAssistantDocument = gql`
    mutation deleteAssistant($id: String!) {
  graphite {
    deleteAssistant(assistantID: $id)
  }
}
    `;
export type DeleteAssistantMutationFn = Apollo.MutationFunction<DeleteAssistantMutation, DeleteAssistantMutationVariables>;

/**
 * __useDeleteAssistantMutation__
 *
 * To run a mutation, you first call `useDeleteAssistantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssistantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssistantMutation, { data, loading, error }] = useDeleteAssistantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAssistantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAssistantMutation, DeleteAssistantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAssistantMutation, DeleteAssistantMutationVariables>(DeleteAssistantDocument, options);
      }
export type DeleteAssistantMutationHookResult = ReturnType<typeof useDeleteAssistantMutation>;
export type DeleteAssistantMutationResult = Apollo.MutationResult<DeleteAssistantMutation>;
export type DeleteAssistantMutationOptions = Apollo.BaseMutationOptions<DeleteAssistantMutation, DeleteAssistantMutationVariables>;
export const GetAssistantsDocument = gql`
    query getAssistants {
  graphite {
    assistants {
      assistantID
      name
      description
      model
      instructions
      buckets
      graphql {
        name
        query
        description
        arguments {
          name
          type
          description
          required
        }
      }
      webhooks {
        name
        URL
        description
        arguments {
          name
          type
          description
          required
        }
      }
    }
  }
}
    `;

/**
 * __useGetAssistantsQuery__
 *
 * To run a query within a React component, call `useGetAssistantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssistantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssistantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssistantsQuery(baseOptions?: Apollo.QueryHookOptions<GetAssistantsQuery, GetAssistantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssistantsQuery, GetAssistantsQueryVariables>(GetAssistantsDocument, options);
      }
export function useGetAssistantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssistantsQuery, GetAssistantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssistantsQuery, GetAssistantsQueryVariables>(GetAssistantsDocument, options);
        }
export type GetAssistantsQueryHookResult = ReturnType<typeof useGetAssistantsQuery>;
export type GetAssistantsLazyQueryHookResult = ReturnType<typeof useGetAssistantsLazyQuery>;
export type GetAssistantsQueryResult = Apollo.QueryResult<GetAssistantsQuery, GetAssistantsQueryVariables>;
export function refetchGetAssistantsQuery(variables?: GetAssistantsQueryVariables) {
      return { query: GetAssistantsDocument, variables: variables }
    }
export const GetGraphiteSessionsDocument = gql`
    query getGraphiteSessions {
  graphite {
    sessions {
      sessionID
    }
  }
}
    `;

/**
 * __useGetGraphiteSessionsQuery__
 *
 * To run a query within a React component, call `useGetGraphiteSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGraphiteSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGraphiteSessionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGraphiteSessionsQuery(baseOptions?: Apollo.QueryHookOptions<GetGraphiteSessionsQuery, GetGraphiteSessionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGraphiteSessionsQuery, GetGraphiteSessionsQueryVariables>(GetGraphiteSessionsDocument, options);
      }
export function useGetGraphiteSessionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGraphiteSessionsQuery, GetGraphiteSessionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGraphiteSessionsQuery, GetGraphiteSessionsQueryVariables>(GetGraphiteSessionsDocument, options);
        }
export type GetGraphiteSessionsQueryHookResult = ReturnType<typeof useGetGraphiteSessionsQuery>;
export type GetGraphiteSessionsLazyQueryHookResult = ReturnType<typeof useGetGraphiteSessionsLazyQuery>;
export type GetGraphiteSessionsQueryResult = Apollo.QueryResult<GetGraphiteSessionsQuery, GetGraphiteSessionsQueryVariables>;
export function refetchGetGraphiteSessionsQuery(variables?: GetGraphiteSessionsQueryVariables) {
      return { query: GetGraphiteSessionsDocument, variables: variables }
    }
export const InsertAssistantDocument = gql`
    mutation insertAssistant($data: graphiteAssistantInput!) {
  graphite {
    insertAssistant(object: $data) {
      assistantID
    }
  }
}
    `;
export type InsertAssistantMutationFn = Apollo.MutationFunction<InsertAssistantMutation, InsertAssistantMutationVariables>;

/**
 * __useInsertAssistantMutation__
 *
 * To run a mutation, you first call `useInsertAssistantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAssistantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAssistantMutation, { data, loading, error }] = useInsertAssistantMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertAssistantMutation(baseOptions?: Apollo.MutationHookOptions<InsertAssistantMutation, InsertAssistantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertAssistantMutation, InsertAssistantMutationVariables>(InsertAssistantDocument, options);
      }
export type InsertAssistantMutationHookResult = ReturnType<typeof useInsertAssistantMutation>;
export type InsertAssistantMutationResult = Apollo.MutationResult<InsertAssistantMutation>;
export type InsertAssistantMutationOptions = Apollo.BaseMutationOptions<InsertAssistantMutation, InsertAssistantMutationVariables>;
export const UpdateAssistantDocument = gql`
    mutation updateAssistant($id: String!, $data: graphiteAssistantInput!) {
  graphite {
    updateAssistant(assistantID: $id, object: $data) {
      assistantID
    }
  }
}
    `;
export type UpdateAssistantMutationFn = Apollo.MutationFunction<UpdateAssistantMutation, UpdateAssistantMutationVariables>;

/**
 * __useUpdateAssistantMutation__
 *
 * To run a mutation, you first call `useUpdateAssistantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssistantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssistantMutation, { data, loading, error }] = useUpdateAssistantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAssistantMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssistantMutation, UpdateAssistantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAssistantMutation, UpdateAssistantMutationVariables>(UpdateAssistantDocument, options);
      }
export type UpdateAssistantMutationHookResult = ReturnType<typeof useUpdateAssistantMutation>;
export type UpdateAssistantMutationResult = Apollo.MutationResult<UpdateAssistantMutation>;
export type UpdateAssistantMutationOptions = Apollo.BaseMutationOptions<UpdateAssistantMutation, UpdateAssistantMutationVariables>;
export const DeleteGraphiteAutoEmbeddingsConfigurationDocument = gql`
    mutation deleteGraphiteAutoEmbeddingsConfiguration($id: uuid!) {
  deleteGraphiteAutoEmbeddingsConfiguration(id: $id) {
    __typename
  }
}
    `;
export type DeleteGraphiteAutoEmbeddingsConfigurationMutationFn = Apollo.MutationFunction<DeleteGraphiteAutoEmbeddingsConfigurationMutation, DeleteGraphiteAutoEmbeddingsConfigurationMutationVariables>;

/**
 * __useDeleteGraphiteAutoEmbeddingsConfigurationMutation__
 *
 * To run a mutation, you first call `useDeleteGraphiteAutoEmbeddingsConfigurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGraphiteAutoEmbeddingsConfigurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGraphiteAutoEmbeddingsConfigurationMutation, { data, loading, error }] = useDeleteGraphiteAutoEmbeddingsConfigurationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGraphiteAutoEmbeddingsConfigurationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGraphiteAutoEmbeddingsConfigurationMutation, DeleteGraphiteAutoEmbeddingsConfigurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGraphiteAutoEmbeddingsConfigurationMutation, DeleteGraphiteAutoEmbeddingsConfigurationMutationVariables>(DeleteGraphiteAutoEmbeddingsConfigurationDocument, options);
      }
export type DeleteGraphiteAutoEmbeddingsConfigurationMutationHookResult = ReturnType<typeof useDeleteGraphiteAutoEmbeddingsConfigurationMutation>;
export type DeleteGraphiteAutoEmbeddingsConfigurationMutationResult = Apollo.MutationResult<DeleteGraphiteAutoEmbeddingsConfigurationMutation>;
export type DeleteGraphiteAutoEmbeddingsConfigurationMutationOptions = Apollo.BaseMutationOptions<DeleteGraphiteAutoEmbeddingsConfigurationMutation, DeleteGraphiteAutoEmbeddingsConfigurationMutationVariables>;
export const GetGraphiteAutoEmbeddingsConfigurationsDocument = gql`
    query getGraphiteAutoEmbeddingsConfigurations($limit: Int!, $offset: Int!) {
  graphiteAutoEmbeddingsConfigurations(limit: $limit, offset: $offset) {
    id
    name
    model
    schemaName
    tableName
    columnName
    query
    mutation
    createdAt
    updatedAt
  }
  graphiteAutoEmbeddingsConfigurationAggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetGraphiteAutoEmbeddingsConfigurationsQuery__
 *
 * To run a query within a React component, call `useGetGraphiteAutoEmbeddingsConfigurationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGraphiteAutoEmbeddingsConfigurationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGraphiteAutoEmbeddingsConfigurationsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetGraphiteAutoEmbeddingsConfigurationsQuery(baseOptions: Apollo.QueryHookOptions<GetGraphiteAutoEmbeddingsConfigurationsQuery, GetGraphiteAutoEmbeddingsConfigurationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGraphiteAutoEmbeddingsConfigurationsQuery, GetGraphiteAutoEmbeddingsConfigurationsQueryVariables>(GetGraphiteAutoEmbeddingsConfigurationsDocument, options);
      }
export function useGetGraphiteAutoEmbeddingsConfigurationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGraphiteAutoEmbeddingsConfigurationsQuery, GetGraphiteAutoEmbeddingsConfigurationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGraphiteAutoEmbeddingsConfigurationsQuery, GetGraphiteAutoEmbeddingsConfigurationsQueryVariables>(GetGraphiteAutoEmbeddingsConfigurationsDocument, options);
        }
export type GetGraphiteAutoEmbeddingsConfigurationsQueryHookResult = ReturnType<typeof useGetGraphiteAutoEmbeddingsConfigurationsQuery>;
export type GetGraphiteAutoEmbeddingsConfigurationsLazyQueryHookResult = ReturnType<typeof useGetGraphiteAutoEmbeddingsConfigurationsLazyQuery>;
export type GetGraphiteAutoEmbeddingsConfigurationsQueryResult = Apollo.QueryResult<GetGraphiteAutoEmbeddingsConfigurationsQuery, GetGraphiteAutoEmbeddingsConfigurationsQueryVariables>;
export function refetchGetGraphiteAutoEmbeddingsConfigurationsQuery(variables: GetGraphiteAutoEmbeddingsConfigurationsQueryVariables) {
      return { query: GetGraphiteAutoEmbeddingsConfigurationsDocument, variables: variables }
    }
export const InsertGraphiteAutoEmbeddingsConfigurationDocument = gql`
    mutation insertGraphiteAutoEmbeddingsConfiguration($name: String, $model: String, $schemaName: String, $tableName: String, $columnName: String, $query: String, $mutation: String) {
  insertGraphiteAutoEmbeddingsConfiguration(
    object: {name: $name, model: $model, schemaName: $schemaName, tableName: $tableName, columnName: $columnName, query: $query, mutation: $mutation}
  ) {
    id
  }
}
    `;
export type InsertGraphiteAutoEmbeddingsConfigurationMutationFn = Apollo.MutationFunction<InsertGraphiteAutoEmbeddingsConfigurationMutation, InsertGraphiteAutoEmbeddingsConfigurationMutationVariables>;

/**
 * __useInsertGraphiteAutoEmbeddingsConfigurationMutation__
 *
 * To run a mutation, you first call `useInsertGraphiteAutoEmbeddingsConfigurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertGraphiteAutoEmbeddingsConfigurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertGraphiteAutoEmbeddingsConfigurationMutation, { data, loading, error }] = useInsertGraphiteAutoEmbeddingsConfigurationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      model: // value for 'model'
 *      schemaName: // value for 'schemaName'
 *      tableName: // value for 'tableName'
 *      columnName: // value for 'columnName'
 *      query: // value for 'query'
 *      mutation: // value for 'mutation'
 *   },
 * });
 */
export function useInsertGraphiteAutoEmbeddingsConfigurationMutation(baseOptions?: Apollo.MutationHookOptions<InsertGraphiteAutoEmbeddingsConfigurationMutation, InsertGraphiteAutoEmbeddingsConfigurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertGraphiteAutoEmbeddingsConfigurationMutation, InsertGraphiteAutoEmbeddingsConfigurationMutationVariables>(InsertGraphiteAutoEmbeddingsConfigurationDocument, options);
      }
export type InsertGraphiteAutoEmbeddingsConfigurationMutationHookResult = ReturnType<typeof useInsertGraphiteAutoEmbeddingsConfigurationMutation>;
export type InsertGraphiteAutoEmbeddingsConfigurationMutationResult = Apollo.MutationResult<InsertGraphiteAutoEmbeddingsConfigurationMutation>;
export type InsertGraphiteAutoEmbeddingsConfigurationMutationOptions = Apollo.BaseMutationOptions<InsertGraphiteAutoEmbeddingsConfigurationMutation, InsertGraphiteAutoEmbeddingsConfigurationMutationVariables>;
export const UpdateGraphiteAutoEmbeddingsConfigurationDocument = gql`
    mutation updateGraphiteAutoEmbeddingsConfiguration($id: uuid!, $name: String, $model: String, $schemaName: String, $tableName: String, $columnName: String, $query: String, $mutation: String) {
  updateGraphiteAutoEmbeddingsConfiguration(
    pk_columns: {id: $id}
    _set: {name: $name, model: $model, schemaName: $schemaName, tableName: $tableName, columnName: $columnName, query: $query, mutation: $mutation}
  ) {
    id
    name
    model
    schemaName
    tableName
    columnName
    query
    mutation
  }
}
    `;
export type UpdateGraphiteAutoEmbeddingsConfigurationMutationFn = Apollo.MutationFunction<UpdateGraphiteAutoEmbeddingsConfigurationMutation, UpdateGraphiteAutoEmbeddingsConfigurationMutationVariables>;

/**
 * __useUpdateGraphiteAutoEmbeddingsConfigurationMutation__
 *
 * To run a mutation, you first call `useUpdateGraphiteAutoEmbeddingsConfigurationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGraphiteAutoEmbeddingsConfigurationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGraphiteAutoEmbeddingsConfigurationMutation, { data, loading, error }] = useUpdateGraphiteAutoEmbeddingsConfigurationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      model: // value for 'model'
 *      schemaName: // value for 'schemaName'
 *      tableName: // value for 'tableName'
 *      columnName: // value for 'columnName'
 *      query: // value for 'query'
 *      mutation: // value for 'mutation'
 *   },
 * });
 */
export function useUpdateGraphiteAutoEmbeddingsConfigurationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGraphiteAutoEmbeddingsConfigurationMutation, UpdateGraphiteAutoEmbeddingsConfigurationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGraphiteAutoEmbeddingsConfigurationMutation, UpdateGraphiteAutoEmbeddingsConfigurationMutationVariables>(UpdateGraphiteAutoEmbeddingsConfigurationDocument, options);
      }
export type UpdateGraphiteAutoEmbeddingsConfigurationMutationHookResult = ReturnType<typeof useUpdateGraphiteAutoEmbeddingsConfigurationMutation>;
export type UpdateGraphiteAutoEmbeddingsConfigurationMutationResult = Apollo.MutationResult<UpdateGraphiteAutoEmbeddingsConfigurationMutation>;
export type UpdateGraphiteAutoEmbeddingsConfigurationMutationOptions = Apollo.BaseMutationOptions<UpdateGraphiteAutoEmbeddingsConfigurationMutation, UpdateGraphiteAutoEmbeddingsConfigurationMutationVariables>;
export const SendDevMessageDocument = gql`
    mutation sendDevMessage($sessionId: String!, $prevMessageID: String!, $message: String!) {
  graphite {
    sendDevMessage(
      sessionID: $sessionId
      prevMessageID: $prevMessageID
      message: $message
    ) {
      messages {
        id
        role
        message
        createdAt
      }
    }
  }
}
    `;
export type SendDevMessageMutationFn = Apollo.MutationFunction<SendDevMessageMutation, SendDevMessageMutationVariables>;

/**
 * __useSendDevMessageMutation__
 *
 * To run a mutation, you first call `useSendDevMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendDevMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendDevMessageMutation, { data, loading, error }] = useSendDevMessageMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      prevMessageID: // value for 'prevMessageID'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendDevMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendDevMessageMutation, SendDevMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendDevMessageMutation, SendDevMessageMutationVariables>(SendDevMessageDocument, options);
      }
export type SendDevMessageMutationHookResult = ReturnType<typeof useSendDevMessageMutation>;
export type SendDevMessageMutationResult = Apollo.MutationResult<SendDevMessageMutation>;
export type SendDevMessageMutationOptions = Apollo.BaseMutationOptions<SendDevMessageMutation, SendDevMessageMutationVariables>;
export const StartDevSessionDocument = gql`
    mutation startDevSession {
  graphite {
    startDevSession {
      sessionID
    }
  }
}
    `;
export type StartDevSessionMutationFn = Apollo.MutationFunction<StartDevSessionMutation, StartDevSessionMutationVariables>;

/**
 * __useStartDevSessionMutation__
 *
 * To run a mutation, you first call `useStartDevSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartDevSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startDevSessionMutation, { data, loading, error }] = useStartDevSessionMutation({
 *   variables: {
 *   },
 * });
 */
export function useStartDevSessionMutation(baseOptions?: Apollo.MutationHookOptions<StartDevSessionMutation, StartDevSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartDevSessionMutation, StartDevSessionMutationVariables>(StartDevSessionDocument, options);
      }
export type StartDevSessionMutationHookResult = ReturnType<typeof useStartDevSessionMutation>;
export type StartDevSessionMutationResult = Apollo.MutationResult<StartDevSessionMutation>;
export type StartDevSessionMutationOptions = Apollo.BaseMutationOptions<StartDevSessionMutation, StartDevSessionMutationVariables>;