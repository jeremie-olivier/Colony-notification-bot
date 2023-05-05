/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDiscordChannelInput = {
  id?: string | null,
  discordServerId: string,
  idDiscord?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelDiscordChannelConditionInput = {
  discordServerId?: ModelIDInput | null,
  idDiscord?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiscordChannelConditionInput | null > | null,
  or?: Array< ModelDiscordChannelConditionInput | null > | null,
  not?: ModelDiscordChannelConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DiscordChannel = {
  __typename: "DiscordChannel",
  id: string,
  notificationSubscriptions?: ModelNotificationSubscriptionConnection | null,
  discordServerId: string,
  discordServer?: DiscordServer | null,
  idDiscord?: string | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNotificationSubscriptionConnection = {
  __typename: "ModelNotificationSubscriptionConnection",
  items:  Array<NotificationSubscription | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type NotificationSubscription = {
  __typename: "NotificationSubscription",
  id: string,
  colony?: Colony | null,
  domain?: Domain | null,
  discordChannel?: DiscordChannel | null,
  colonyEventType?: ColonyEventType | null,
  author?: User | null,
  colonyId: string,
  domainId: string,
  discordChannelId: string,
  colonyEventTypeId: string,
  authorId: string,
  hits?: ModelHitConnection | null,
  mentions?: ModelMentionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Colony = {
  __typename: "Colony",
  id: string,
  notifyInDiscordServers?: ModelColonyDiscordServerConnection | null,
  notificationSubscriptions?: ModelNotificationSubscriptionConnection | null,
  name?: string | null,
  domains?: ModelDomainConnection | null,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelColonyDiscordServerConnection = {
  __typename: "ModelColonyDiscordServerConnection",
  items:  Array<ColonyDiscordServer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ColonyDiscordServer = {
  __typename: "ColonyDiscordServer",
  id: string,
  colonyId: string,
  discordServerId: string,
  colony: Colony,
  discordServer: DiscordServer,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type DiscordServer = {
  __typename: "DiscordServer",
  id: string,
  hasColonyNotificationBotAdded?: boolean | null,
  managedByUsers?: ModelUserDiscordServerConnection | null,
  colonies?: ModelColonyDiscordServerConnection | null,
  channels?: ModelDiscordChannelConnection | null,
  idDiscord?: string | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserDiscordServerConnection = {
  __typename: "ModelUserDiscordServerConnection",
  items:  Array<UserDiscordServer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserDiscordServer = {
  __typename: "UserDiscordServer",
  id: string,
  discordServerId: string,
  userId: string,
  discordServer: DiscordServer,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  authorOfNotificationSubscriptions?: ModelNotificationSubscriptionConnection | null,
  mentions?: ModelMentionConnection | null,
  idDiscord?: string | null,
  walletAddress?: string | null,
  managerOfDiscords?: ModelUserDiscordServerConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMentionConnection = {
  __typename: "ModelMentionConnection",
  items:  Array<Mention | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Mention = {
  __typename: "Mention",
  id: string,
  idDiscordRole?: string | null,
  notificationSubscription: string,
  user?: User | null,
  userId: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelDiscordChannelConnection = {
  __typename: "ModelDiscordChannelConnection",
  items:  Array<DiscordChannel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDomainConnection = {
  __typename: "ModelDomainConnection",
  items:  Array<Domain | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Domain = {
  __typename: "Domain",
  id: string,
  notificationSubscriptions?: ModelNotificationSubscriptionConnection | null,
  name?: string | null,
  colony: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ColonyEventType = {
  __typename: "ColonyEventType",
  id: string,
  notificationSubscriptions?: ModelNotificationSubscriptionConnection | null,
  type?: EventType | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum EventType {
  PAYMENT = "PAYMENT",
  SIMPLE_DECISION = "SIMPLE_DECISION",
  TOKEN_MINT = "TOKEN_MINT",
}


export type ModelHitConnection = {
  __typename: "ModelHitConnection",
  items:  Array<Hit | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Hit = {
  __typename: "Hit",
  id: string,
  discordMessageLink?: string | null,
  notificationSubscription: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDiscordChannelInput = {
  id: string,
  discordServerId?: string | null,
  idDiscord?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteDiscordChannelInput = {
  id: string,
  _version?: number | null,
};

export type CreateColonyInput = {
  id?: string | null,
  name?: string | null,
  url?: string | null,
  _version?: number | null,
};

export type ModelColonyConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelColonyConditionInput | null > | null,
  or?: Array< ModelColonyConditionInput | null > | null,
  not?: ModelColonyConditionInput | null,
};

export type UpdateColonyInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  _version?: number | null,
};

export type DeleteColonyInput = {
  id: string,
  _version?: number | null,
};

export type CreateMentionInput = {
  id?: string | null,
  idDiscordRole?: string | null,
  notificationSubscription: string,
  userId: string,
  _version?: number | null,
};

export type ModelMentionConditionInput = {
  idDiscordRole?: ModelStringInput | null,
  notificationSubscription?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMentionConditionInput | null > | null,
  or?: Array< ModelMentionConditionInput | null > | null,
  not?: ModelMentionConditionInput | null,
};

export type UpdateMentionInput = {
  id: string,
  idDiscordRole?: string | null,
  notificationSubscription?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteMentionInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotificationSubscriptionInput = {
  id?: string | null,
  colonyId: string,
  domainId: string,
  discordChannelId: string,
  colonyEventTypeId: string,
  authorId: string,
  _version?: number | null,
};

export type ModelNotificationSubscriptionConditionInput = {
  colonyId?: ModelIDInput | null,
  domainId?: ModelIDInput | null,
  discordChannelId?: ModelIDInput | null,
  colonyEventTypeId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  and?: Array< ModelNotificationSubscriptionConditionInput | null > | null,
  or?: Array< ModelNotificationSubscriptionConditionInput | null > | null,
  not?: ModelNotificationSubscriptionConditionInput | null,
};

export type UpdateNotificationSubscriptionInput = {
  id: string,
  colonyId?: string | null,
  domainId?: string | null,
  discordChannelId?: string | null,
  colonyEventTypeId?: string | null,
  authorId?: string | null,
  _version?: number | null,
};

export type DeleteNotificationSubscriptionInput = {
  id: string,
  _version?: number | null,
};

export type CreateDiscordServerInput = {
  id?: string | null,
  hasColonyNotificationBotAdded?: boolean | null,
  idDiscord?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelDiscordServerConditionInput = {
  hasColonyNotificationBotAdded?: ModelBooleanInput | null,
  idDiscord?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiscordServerConditionInput | null > | null,
  or?: Array< ModelDiscordServerConditionInput | null > | null,
  not?: ModelDiscordServerConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDiscordServerInput = {
  id: string,
  hasColonyNotificationBotAdded?: boolean | null,
  idDiscord?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteDiscordServerInput = {
  id: string,
  _version?: number | null,
};

export type CreateHitInput = {
  id?: string | null,
  discordMessageLink?: string | null,
  notificationSubscription: string,
  _version?: number | null,
};

export type ModelHitConditionInput = {
  discordMessageLink?: ModelStringInput | null,
  notificationSubscription?: ModelIDInput | null,
  and?: Array< ModelHitConditionInput | null > | null,
  or?: Array< ModelHitConditionInput | null > | null,
  not?: ModelHitConditionInput | null,
};

export type UpdateHitInput = {
  id: string,
  discordMessageLink?: string | null,
  notificationSubscription?: string | null,
  _version?: number | null,
};

export type DeleteHitInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  idDiscord?: string | null,
  walletAddress?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  idDiscord?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  idDiscord?: string | null,
  walletAddress?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateColonyEventTypeInput = {
  id?: string | null,
  type?: EventType | null,
  _version?: number | null,
};

export type ModelColonyEventTypeConditionInput = {
  type?: ModelEventTypeInput | null,
  and?: Array< ModelColonyEventTypeConditionInput | null > | null,
  or?: Array< ModelColonyEventTypeConditionInput | null > | null,
  not?: ModelColonyEventTypeConditionInput | null,
};

export type ModelEventTypeInput = {
  eq?: EventType | null,
  ne?: EventType | null,
};

export type UpdateColonyEventTypeInput = {
  id: string,
  type?: EventType | null,
  _version?: number | null,
};

export type DeleteColonyEventTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateDomainInput = {
  id?: string | null,
  name?: string | null,
  colony: string,
  _version?: number | null,
};

export type ModelDomainConditionInput = {
  name?: ModelStringInput | null,
  colony?: ModelIDInput | null,
  and?: Array< ModelDomainConditionInput | null > | null,
  or?: Array< ModelDomainConditionInput | null > | null,
  not?: ModelDomainConditionInput | null,
};

export type UpdateDomainInput = {
  id: string,
  name?: string | null,
  colony?: string | null,
  _version?: number | null,
};

export type DeleteDomainInput = {
  id: string,
  _version?: number | null,
};

export type CreateColonyDiscordServerInput = {
  id?: string | null,
  colonyId: string,
  discordServerId: string,
  _version?: number | null,
};

export type ModelColonyDiscordServerConditionInput = {
  colonyId?: ModelIDInput | null,
  discordServerId?: ModelIDInput | null,
  and?: Array< ModelColonyDiscordServerConditionInput | null > | null,
  or?: Array< ModelColonyDiscordServerConditionInput | null > | null,
  not?: ModelColonyDiscordServerConditionInput | null,
};

export type UpdateColonyDiscordServerInput = {
  id: string,
  colonyId?: string | null,
  discordServerId?: string | null,
  _version?: number | null,
};

export type DeleteColonyDiscordServerInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserDiscordServerInput = {
  id?: string | null,
  discordServerId: string,
  userId: string,
  _version?: number | null,
};

export type ModelUserDiscordServerConditionInput = {
  discordServerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserDiscordServerConditionInput | null > | null,
  or?: Array< ModelUserDiscordServerConditionInput | null > | null,
  not?: ModelUserDiscordServerConditionInput | null,
};

export type UpdateUserDiscordServerInput = {
  id: string,
  discordServerId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteUserDiscordServerInput = {
  id: string,
  _version?: number | null,
};

export type ModelDiscordChannelFilterInput = {
  id?: ModelIDInput | null,
  discordServerId?: ModelIDInput | null,
  idDiscord?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiscordChannelFilterInput | null > | null,
  or?: Array< ModelDiscordChannelFilterInput | null > | null,
  not?: ModelDiscordChannelFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelColonyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelColonyFilterInput | null > | null,
  or?: Array< ModelColonyFilterInput | null > | null,
  not?: ModelColonyFilterInput | null,
};

export type ModelColonyConnection = {
  __typename: "ModelColonyConnection",
  items:  Array<Colony | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMentionFilterInput = {
  id?: ModelIDInput | null,
  idDiscordRole?: ModelStringInput | null,
  notificationSubscription?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMentionFilterInput | null > | null,
  or?: Array< ModelMentionFilterInput | null > | null,
  not?: ModelMentionFilterInput | null,
};

export type ModelNotificationSubscriptionFilterInput = {
  id?: ModelIDInput | null,
  colonyId?: ModelIDInput | null,
  domainId?: ModelIDInput | null,
  discordChannelId?: ModelIDInput | null,
  colonyEventTypeId?: ModelIDInput | null,
  authorId?: ModelIDInput | null,
  and?: Array< ModelNotificationSubscriptionFilterInput | null > | null,
  or?: Array< ModelNotificationSubscriptionFilterInput | null > | null,
  not?: ModelNotificationSubscriptionFilterInput | null,
};

export type ModelDiscordServerFilterInput = {
  id?: ModelIDInput | null,
  hasColonyNotificationBotAdded?: ModelBooleanInput | null,
  idDiscord?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelDiscordServerFilterInput | null > | null,
  or?: Array< ModelDiscordServerFilterInput | null > | null,
  not?: ModelDiscordServerFilterInput | null,
};

export type ModelDiscordServerConnection = {
  __typename: "ModelDiscordServerConnection",
  items:  Array<DiscordServer | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHitFilterInput = {
  id?: ModelIDInput | null,
  discordMessageLink?: ModelStringInput | null,
  notificationSubscription?: ModelIDInput | null,
  and?: Array< ModelHitFilterInput | null > | null,
  or?: Array< ModelHitFilterInput | null > | null,
  not?: ModelHitFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  idDiscord?: ModelStringInput | null,
  walletAddress?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelColonyEventTypeFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelEventTypeInput | null,
  and?: Array< ModelColonyEventTypeFilterInput | null > | null,
  or?: Array< ModelColonyEventTypeFilterInput | null > | null,
  not?: ModelColonyEventTypeFilterInput | null,
};

export type ModelColonyEventTypeConnection = {
  __typename: "ModelColonyEventTypeConnection",
  items:  Array<ColonyEventType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDomainFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  colony?: ModelIDInput | null,
  and?: Array< ModelDomainFilterInput | null > | null,
  or?: Array< ModelDomainFilterInput | null > | null,
  not?: ModelDomainFilterInput | null,
};

export type ModelColonyDiscordServerFilterInput = {
  id?: ModelIDInput | null,
  colonyId?: ModelIDInput | null,
  discordServerId?: ModelIDInput | null,
  and?: Array< ModelColonyDiscordServerFilterInput | null > | null,
  or?: Array< ModelColonyDiscordServerFilterInput | null > | null,
  not?: ModelColonyDiscordServerFilterInput | null,
};

export type ModelUserDiscordServerFilterInput = {
  id?: ModelIDInput | null,
  discordServerId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserDiscordServerFilterInput | null > | null,
  or?: Array< ModelUserDiscordServerFilterInput | null > | null,
  not?: ModelUserDiscordServerFilterInput | null,
};

export type ModelSubscriptionDiscordChannelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  discordServerId?: ModelSubscriptionIDInput | null,
  idDiscord?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiscordChannelFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiscordChannelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionColonyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionColonyFilterInput | null > | null,
  or?: Array< ModelSubscriptionColonyFilterInput | null > | null,
};

export type ModelSubscriptionMentionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  idDiscordRole?: ModelSubscriptionStringInput | null,
  notificationSubscription?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMentionFilterInput | null > | null,
  or?: Array< ModelSubscriptionMentionFilterInput | null > | null,
};

export type ModelSubscriptionNotificationSubscriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  colonyId?: ModelSubscriptionIDInput | null,
  domainId?: ModelSubscriptionIDInput | null,
  discordChannelId?: ModelSubscriptionIDInput | null,
  colonyEventTypeId?: ModelSubscriptionIDInput | null,
  authorId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNotificationSubscriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationSubscriptionFilterInput | null > | null,
};

export type ModelSubscriptionDiscordServerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hasColonyNotificationBotAdded?: ModelSubscriptionBooleanInput | null,
  idDiscord?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiscordServerFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiscordServerFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionHitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  discordMessageLink?: ModelSubscriptionStringInput | null,
  notificationSubscription?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHitFilterInput | null > | null,
  or?: Array< ModelSubscriptionHitFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  idDiscord?: ModelSubscriptionStringInput | null,
  walletAddress?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionColonyEventTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionColonyEventTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionColonyEventTypeFilterInput | null > | null,
};

export type ModelSubscriptionDomainFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  colony?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDomainFilterInput | null > | null,
  or?: Array< ModelSubscriptionDomainFilterInput | null > | null,
};

export type ModelSubscriptionColonyDiscordServerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  colonyId?: ModelSubscriptionIDInput | null,
  discordServerId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionColonyDiscordServerFilterInput | null > | null,
  or?: Array< ModelSubscriptionColonyDiscordServerFilterInput | null > | null,
};

export type ModelSubscriptionUserDiscordServerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  discordServerId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserDiscordServerFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserDiscordServerFilterInput | null > | null,
};

export type CreateDiscordChannelMutationVariables = {
  input: CreateDiscordChannelInput,
  condition?: ModelDiscordChannelConditionInput | null,
};

export type CreateDiscordChannelMutation = {
  createDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDiscordChannelMutationVariables = {
  input: UpdateDiscordChannelInput,
  condition?: ModelDiscordChannelConditionInput | null,
};

export type UpdateDiscordChannelMutation = {
  updateDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDiscordChannelMutationVariables = {
  input: DeleteDiscordChannelInput,
  condition?: ModelDiscordChannelConditionInput | null,
};

export type DeleteDiscordChannelMutation = {
  deleteDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateColonyMutationVariables = {
  input: CreateColonyInput,
  condition?: ModelColonyConditionInput | null,
};

export type CreateColonyMutation = {
  createColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateColonyMutationVariables = {
  input: UpdateColonyInput,
  condition?: ModelColonyConditionInput | null,
};

export type UpdateColonyMutation = {
  updateColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteColonyMutationVariables = {
  input: DeleteColonyInput,
  condition?: ModelColonyConditionInput | null,
};

export type DeleteColonyMutation = {
  deleteColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMentionMutationVariables = {
  input: CreateMentionInput,
  condition?: ModelMentionConditionInput | null,
};

export type CreateMentionMutation = {
  createMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMentionMutationVariables = {
  input: UpdateMentionInput,
  condition?: ModelMentionConditionInput | null,
};

export type UpdateMentionMutation = {
  updateMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMentionMutationVariables = {
  input: DeleteMentionInput,
  condition?: ModelMentionConditionInput | null,
};

export type DeleteMentionMutation = {
  deleteMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNotificationSubscriptionMutationVariables = {
  input: CreateNotificationSubscriptionInput,
  condition?: ModelNotificationSubscriptionConditionInput | null,
};

export type CreateNotificationSubscriptionMutation = {
  createNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNotificationSubscriptionMutationVariables = {
  input: UpdateNotificationSubscriptionInput,
  condition?: ModelNotificationSubscriptionConditionInput | null,
};

export type UpdateNotificationSubscriptionMutation = {
  updateNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNotificationSubscriptionMutationVariables = {
  input: DeleteNotificationSubscriptionInput,
  condition?: ModelNotificationSubscriptionConditionInput | null,
};

export type DeleteNotificationSubscriptionMutation = {
  deleteNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDiscordServerMutationVariables = {
  input: CreateDiscordServerInput,
  condition?: ModelDiscordServerConditionInput | null,
};

export type CreateDiscordServerMutation = {
  createDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDiscordServerMutationVariables = {
  input: UpdateDiscordServerInput,
  condition?: ModelDiscordServerConditionInput | null,
};

export type UpdateDiscordServerMutation = {
  updateDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDiscordServerMutationVariables = {
  input: DeleteDiscordServerInput,
  condition?: ModelDiscordServerConditionInput | null,
};

export type DeleteDiscordServerMutation = {
  deleteDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateHitMutationVariables = {
  input: CreateHitInput,
  condition?: ModelHitConditionInput | null,
};

export type CreateHitMutation = {
  createHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHitMutationVariables = {
  input: UpdateHitInput,
  condition?: ModelHitConditionInput | null,
};

export type UpdateHitMutation = {
  updateHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHitMutationVariables = {
  input: DeleteHitInput,
  condition?: ModelHitConditionInput | null,
};

export type DeleteHitMutation = {
  deleteHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateColonyEventTypeMutationVariables = {
  input: CreateColonyEventTypeInput,
  condition?: ModelColonyEventTypeConditionInput | null,
};

export type CreateColonyEventTypeMutation = {
  createColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateColonyEventTypeMutationVariables = {
  input: UpdateColonyEventTypeInput,
  condition?: ModelColonyEventTypeConditionInput | null,
};

export type UpdateColonyEventTypeMutation = {
  updateColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteColonyEventTypeMutationVariables = {
  input: DeleteColonyEventTypeInput,
  condition?: ModelColonyEventTypeConditionInput | null,
};

export type DeleteColonyEventTypeMutation = {
  deleteColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDomainMutationVariables = {
  input: CreateDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type CreateDomainMutation = {
  createDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDomainMutationVariables = {
  input: UpdateDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type UpdateDomainMutation = {
  updateDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDomainMutationVariables = {
  input: DeleteDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type DeleteDomainMutation = {
  deleteDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateColonyDiscordServerMutationVariables = {
  input: CreateColonyDiscordServerInput,
  condition?: ModelColonyDiscordServerConditionInput | null,
};

export type CreateColonyDiscordServerMutation = {
  createColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateColonyDiscordServerMutationVariables = {
  input: UpdateColonyDiscordServerInput,
  condition?: ModelColonyDiscordServerConditionInput | null,
};

export type UpdateColonyDiscordServerMutation = {
  updateColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteColonyDiscordServerMutationVariables = {
  input: DeleteColonyDiscordServerInput,
  condition?: ModelColonyDiscordServerConditionInput | null,
};

export type DeleteColonyDiscordServerMutation = {
  deleteColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserDiscordServerMutationVariables = {
  input: CreateUserDiscordServerInput,
  condition?: ModelUserDiscordServerConditionInput | null,
};

export type CreateUserDiscordServerMutation = {
  createUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserDiscordServerMutationVariables = {
  input: UpdateUserDiscordServerInput,
  condition?: ModelUserDiscordServerConditionInput | null,
};

export type UpdateUserDiscordServerMutation = {
  updateUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserDiscordServerMutationVariables = {
  input: DeleteUserDiscordServerInput,
  condition?: ModelUserDiscordServerConditionInput | null,
};

export type DeleteUserDiscordServerMutation = {
  deleteUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetDiscordChannelQueryVariables = {
  id: string,
};

export type GetDiscordChannelQuery = {
  getDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDiscordChannelsQueryVariables = {
  filter?: ModelDiscordChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscordChannelsQuery = {
  listDiscordChannels?:  {
    __typename: "ModelDiscordChannelConnection",
    items:  Array< {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDiscordChannelsQueryVariables = {
  filter?: ModelDiscordChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDiscordChannelsQuery = {
  syncDiscordChannels?:  {
    __typename: "ModelDiscordChannelConnection",
    items:  Array< {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DiscordChannelsByDiscordServerIdQueryVariables = {
  discordServerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDiscordChannelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DiscordChannelsByDiscordServerIdQuery = {
  discordChannelsByDiscordServerId?:  {
    __typename: "ModelDiscordChannelConnection",
    items:  Array< {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetColonyQueryVariables = {
  id: string,
};

export type GetColonyQuery = {
  getColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListColoniesQueryVariables = {
  filter?: ModelColonyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColoniesQuery = {
  listColonies?:  {
    __typename: "ModelColonyConnection",
    items:  Array< {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncColoniesQueryVariables = {
  filter?: ModelColonyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncColoniesQuery = {
  syncColonies?:  {
    __typename: "ModelColonyConnection",
    items:  Array< {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMentionQueryVariables = {
  id: string,
};

export type GetMentionQuery = {
  getMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMentionsQueryVariables = {
  filter?: ModelMentionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMentionsQuery = {
  listMentions?:  {
    __typename: "ModelMentionConnection",
    items:  Array< {
      __typename: "Mention",
      id: string,
      idDiscordRole?: string | null,
      notificationSubscription: string,
      user?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMentionsQueryVariables = {
  filter?: ModelMentionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMentionsQuery = {
  syncMentions?:  {
    __typename: "ModelMentionConnection",
    items:  Array< {
      __typename: "Mention",
      id: string,
      idDiscordRole?: string | null,
      notificationSubscription: string,
      user?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MentionsByNotificationSubscriptionQueryVariables = {
  notificationSubscription: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMentionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MentionsByNotificationSubscriptionQuery = {
  mentionsByNotificationSubscription?:  {
    __typename: "ModelMentionConnection",
    items:  Array< {
      __typename: "Mention",
      id: string,
      idDiscordRole?: string | null,
      notificationSubscription: string,
      user?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MentionsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMentionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MentionsByUserIdQuery = {
  mentionsByUserId?:  {
    __typename: "ModelMentionConnection",
    items:  Array< {
      __typename: "Mention",
      id: string,
      idDiscordRole?: string | null,
      notificationSubscription: string,
      user?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      userId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNotificationSubscriptionQueryVariables = {
  id: string,
};

export type GetNotificationSubscriptionQuery = {
  getNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotificationSubscriptionsQueryVariables = {
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationSubscriptionsQuery = {
  listNotificationSubscriptions?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotificationSubscriptionsQueryVariables = {
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotificationSubscriptionsQuery = {
  syncNotificationSubscriptions?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotificationSubscriptionsByColonyIdQueryVariables = {
  colonyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationSubscriptionsByColonyIdQuery = {
  notificationSubscriptionsByColonyId?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotificationSubscriptionsByDomainIdQueryVariables = {
  domainId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationSubscriptionsByDomainIdQuery = {
  notificationSubscriptionsByDomainId?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotificationSubscriptionsByDiscordChannelIdQueryVariables = {
  discordChannelId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationSubscriptionsByDiscordChannelIdQuery = {
  notificationSubscriptionsByDiscordChannelId?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotificationSubscriptionsByColonyEventTypeIdQueryVariables = {
  colonyEventTypeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationSubscriptionsByColonyEventTypeIdQuery = {
  notificationSubscriptionsByColonyEventTypeId?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotificationSubscriptionsByAuthorIdQueryVariables = {
  authorId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationSubscriptionsByAuthorIdQuery = {
  notificationSubscriptionsByAuthorId?:  {
    __typename: "ModelNotificationSubscriptionConnection",
    items:  Array< {
      __typename: "NotificationSubscription",
      id: string,
      colony?:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      domain?:  {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      discordChannel?:  {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyEventType?:  {
        __typename: "ColonyEventType",
        id: string,
        type?: EventType | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      author?:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      colonyId: string,
      domainId: string,
      discordChannelId: string,
      colonyEventTypeId: string,
      authorId: string,
      hits?:  {
        __typename: "ModelHitConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDiscordServerQueryVariables = {
  id: string,
};

export type GetDiscordServerQuery = {
  getDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDiscordServersQueryVariables = {
  filter?: ModelDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiscordServersQuery = {
  listDiscordServers?:  {
    __typename: "ModelDiscordServerConnection",
    items:  Array< {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDiscordServersQueryVariables = {
  filter?: ModelDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDiscordServersQuery = {
  syncDiscordServers?:  {
    __typename: "ModelDiscordServerConnection",
    items:  Array< {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHitQueryVariables = {
  id: string,
};

export type GetHitQuery = {
  getHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHitsQueryVariables = {
  filter?: ModelHitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHitsQuery = {
  listHits?:  {
    __typename: "ModelHitConnection",
    items:  Array< {
      __typename: "Hit",
      id: string,
      discordMessageLink?: string | null,
      notificationSubscription: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHitsQueryVariables = {
  filter?: ModelHitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHitsQuery = {
  syncHits?:  {
    __typename: "ModelHitConnection",
    items:  Array< {
      __typename: "Hit",
      id: string,
      discordMessageLink?: string | null,
      notificationSubscription: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type HitsByNotificationSubscriptionQueryVariables = {
  notificationSubscription: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HitsByNotificationSubscriptionQuery = {
  hitsByNotificationSubscription?:  {
    __typename: "ModelHitConnection",
    items:  Array< {
      __typename: "Hit",
      id: string,
      discordMessageLink?: string | null,
      notificationSubscription: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetColonyEventTypeQueryVariables = {
  id: string,
};

export type GetColonyEventTypeQuery = {
  getColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListColonyEventTypesQueryVariables = {
  filter?: ModelColonyEventTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColonyEventTypesQuery = {
  listColonyEventTypes?:  {
    __typename: "ModelColonyEventTypeConnection",
    items:  Array< {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncColonyEventTypesQueryVariables = {
  filter?: ModelColonyEventTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncColonyEventTypesQuery = {
  syncColonyEventTypes?:  {
    __typename: "ModelColonyEventTypeConnection",
    items:  Array< {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDomainQueryVariables = {
  id: string,
};

export type GetDomainQuery = {
  getDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDomainsQueryVariables = {
  filter?: ModelDomainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDomainsQuery = {
  listDomains?:  {
    __typename: "ModelDomainConnection",
    items:  Array< {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDomainsQueryVariables = {
  filter?: ModelDomainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDomainsQuery = {
  syncDomains?:  {
    __typename: "ModelDomainConnection",
    items:  Array< {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type DomainsByColonyQueryVariables = {
  colony: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDomainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DomainsByColonyQuery = {
  domainsByColony?:  {
    __typename: "ModelDomainConnection",
    items:  Array< {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetColonyDiscordServerQueryVariables = {
  id: string,
};

export type GetColonyDiscordServerQuery = {
  getColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListColonyDiscordServersQueryVariables = {
  filter?: ModelColonyDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListColonyDiscordServersQuery = {
  listColonyDiscordServers?:  {
    __typename: "ModelColonyDiscordServerConnection",
    items:  Array< {
      __typename: "ColonyDiscordServer",
      id: string,
      colonyId: string,
      discordServerId: string,
      colony:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncColonyDiscordServersQueryVariables = {
  filter?: ModelColonyDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncColonyDiscordServersQuery = {
  syncColonyDiscordServers?:  {
    __typename: "ModelColonyDiscordServerConnection",
    items:  Array< {
      __typename: "ColonyDiscordServer",
      id: string,
      colonyId: string,
      discordServerId: string,
      colony:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ColonyDiscordServersByColonyIdQueryVariables = {
  colonyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelColonyDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ColonyDiscordServersByColonyIdQuery = {
  colonyDiscordServersByColonyId?:  {
    __typename: "ModelColonyDiscordServerConnection",
    items:  Array< {
      __typename: "ColonyDiscordServer",
      id: string,
      colonyId: string,
      discordServerId: string,
      colony:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ColonyDiscordServersByDiscordServerIdQueryVariables = {
  discordServerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelColonyDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ColonyDiscordServersByDiscordServerIdQuery = {
  colonyDiscordServersByDiscordServerId?:  {
    __typename: "ModelColonyDiscordServerConnection",
    items:  Array< {
      __typename: "ColonyDiscordServer",
      id: string,
      colonyId: string,
      discordServerId: string,
      colony:  {
        __typename: "Colony",
        id: string,
        name?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserDiscordServerQueryVariables = {
  id: string,
};

export type GetUserDiscordServerQuery = {
  getUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserDiscordServersQueryVariables = {
  filter?: ModelUserDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserDiscordServersQuery = {
  listUserDiscordServers?:  {
    __typename: "ModelUserDiscordServerConnection",
    items:  Array< {
      __typename: "UserDiscordServer",
      id: string,
      discordServerId: string,
      userId: string,
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      user:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserDiscordServersQueryVariables = {
  filter?: ModelUserDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserDiscordServersQuery = {
  syncUserDiscordServers?:  {
    __typename: "ModelUserDiscordServerConnection",
    items:  Array< {
      __typename: "UserDiscordServer",
      id: string,
      discordServerId: string,
      userId: string,
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      user:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserDiscordServersByDiscordServerIdQueryVariables = {
  discordServerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDiscordServersByDiscordServerIdQuery = {
  userDiscordServersByDiscordServerId?:  {
    __typename: "ModelUserDiscordServerConnection",
    items:  Array< {
      __typename: "UserDiscordServer",
      id: string,
      discordServerId: string,
      userId: string,
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      user:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserDiscordServersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserDiscordServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserDiscordServersByUserIdQuery = {
  userDiscordServersByUserId?:  {
    __typename: "ModelUserDiscordServerConnection",
    items:  Array< {
      __typename: "UserDiscordServer",
      id: string,
      discordServerId: string,
      userId: string,
      discordServer:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      user:  {
        __typename: "User",
        id: string,
        idDiscord?: string | null,
        walletAddress?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDiscordChannelSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordChannelFilterInput | null,
};

export type OnCreateDiscordChannelSubscription = {
  onCreateDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDiscordChannelSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordChannelFilterInput | null,
};

export type OnUpdateDiscordChannelSubscription = {
  onUpdateDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDiscordChannelSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordChannelFilterInput | null,
};

export type OnDeleteDiscordChannelSubscription = {
  onDeleteDiscordChannel?:  {
    __typename: "DiscordChannel",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    discordServerId: string,
    discordServer?:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateColonySubscriptionVariables = {
  filter?: ModelSubscriptionColonyFilterInput | null,
};

export type OnCreateColonySubscription = {
  onCreateColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateColonySubscriptionVariables = {
  filter?: ModelSubscriptionColonyFilterInput | null,
};

export type OnUpdateColonySubscription = {
  onUpdateColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteColonySubscriptionVariables = {
  filter?: ModelSubscriptionColonyFilterInput | null,
};

export type OnDeleteColonySubscription = {
  onDeleteColony?:  {
    __typename: "Colony",
    id: string,
    notifyInDiscordServers?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    domains?:  {
      __typename: "ModelDomainConnection",
      items:  Array< {
        __typename: "Domain",
        id: string,
        name?: string | null,
        colony: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMentionSubscriptionVariables = {
  filter?: ModelSubscriptionMentionFilterInput | null,
};

export type OnCreateMentionSubscription = {
  onCreateMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMentionSubscriptionVariables = {
  filter?: ModelSubscriptionMentionFilterInput | null,
};

export type OnUpdateMentionSubscription = {
  onUpdateMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMentionSubscriptionVariables = {
  filter?: ModelSubscriptionMentionFilterInput | null,
};

export type OnDeleteMentionSubscription = {
  onDeleteMention?:  {
    __typename: "Mention",
    id: string,
    idDiscordRole?: string | null,
    notificationSubscription: string,
    user?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNotificationSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationSubscriptionFilterInput | null,
};

export type OnCreateNotificationSubscriptionSubscription = {
  onCreateNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotificationSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationSubscriptionFilterInput | null,
};

export type OnUpdateNotificationSubscriptionSubscription = {
  onUpdateNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotificationSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationSubscriptionFilterInput | null,
};

export type OnDeleteNotificationSubscriptionSubscription = {
  onDeleteNotificationSubscription?:  {
    __typename: "NotificationSubscription",
    id: string,
    colony?:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    domain?:  {
      __typename: "Domain",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      colony: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    discordChannel?:  {
      __typename: "DiscordChannel",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      discordServerId: string,
      discordServer?:  {
        __typename: "DiscordServer",
        id: string,
        hasColonyNotificationBotAdded?: boolean | null,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyEventType?:  {
      __typename: "ColonyEventType",
      id: string,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      type?: EventType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    author?:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    colonyId: string,
    domainId: string,
    discordChannelId: string,
    colonyEventTypeId: string,
    authorId: string,
    hits?:  {
      __typename: "ModelHitConnection",
      items:  Array< {
        __typename: "Hit",
        id: string,
        discordMessageLink?: string | null,
        notificationSubscription: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordServerFilterInput | null,
};

export type OnCreateDiscordServerSubscription = {
  onCreateDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordServerFilterInput | null,
};

export type OnUpdateDiscordServerSubscription = {
  onUpdateDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionDiscordServerFilterInput | null,
};

export type OnDeleteDiscordServerSubscription = {
  onDeleteDiscordServer?:  {
    __typename: "DiscordServer",
    id: string,
    hasColonyNotificationBotAdded?: boolean | null,
    managedByUsers?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    colonies?:  {
      __typename: "ModelColonyDiscordServerConnection",
      items:  Array< {
        __typename: "ColonyDiscordServer",
        id: string,
        colonyId: string,
        discordServerId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    channels?:  {
      __typename: "ModelDiscordChannelConnection",
      items:  Array< {
        __typename: "DiscordChannel",
        id: string,
        discordServerId: string,
        idDiscord?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateHitSubscriptionVariables = {
  filter?: ModelSubscriptionHitFilterInput | null,
};

export type OnCreateHitSubscription = {
  onCreateHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHitSubscriptionVariables = {
  filter?: ModelSubscriptionHitFilterInput | null,
};

export type OnUpdateHitSubscription = {
  onUpdateHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHitSubscriptionVariables = {
  filter?: ModelSubscriptionHitFilterInput | null,
};

export type OnDeleteHitSubscription = {
  onDeleteHit?:  {
    __typename: "Hit",
    id: string,
    discordMessageLink?: string | null,
    notificationSubscription: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    authorOfNotificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    mentions?:  {
      __typename: "ModelMentionConnection",
      items:  Array< {
        __typename: "Mention",
        id: string,
        idDiscordRole?: string | null,
        notificationSubscription: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    idDiscord?: string | null,
    walletAddress?: string | null,
    managerOfDiscords?:  {
      __typename: "ModelUserDiscordServerConnection",
      items:  Array< {
        __typename: "UserDiscordServer",
        id: string,
        discordServerId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateColonyEventTypeSubscriptionVariables = {
  filter?: ModelSubscriptionColonyEventTypeFilterInput | null,
};

export type OnCreateColonyEventTypeSubscription = {
  onCreateColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateColonyEventTypeSubscriptionVariables = {
  filter?: ModelSubscriptionColonyEventTypeFilterInput | null,
};

export type OnUpdateColonyEventTypeSubscription = {
  onUpdateColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteColonyEventTypeSubscriptionVariables = {
  filter?: ModelSubscriptionColonyEventTypeFilterInput | null,
};

export type OnDeleteColonyEventTypeSubscription = {
  onDeleteColonyEventType?:  {
    __typename: "ColonyEventType",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    type?: EventType | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDomainSubscriptionVariables = {
  filter?: ModelSubscriptionDomainFilterInput | null,
};

export type OnCreateDomainSubscription = {
  onCreateDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDomainSubscriptionVariables = {
  filter?: ModelSubscriptionDomainFilterInput | null,
};

export type OnUpdateDomainSubscription = {
  onUpdateDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDomainSubscriptionVariables = {
  filter?: ModelSubscriptionDomainFilterInput | null,
};

export type OnDeleteDomainSubscription = {
  onDeleteDomain?:  {
    __typename: "Domain",
    id: string,
    notificationSubscriptions?:  {
      __typename: "ModelNotificationSubscriptionConnection",
      items:  Array< {
        __typename: "NotificationSubscription",
        id: string,
        colonyId: string,
        domainId: string,
        discordChannelId: string,
        colonyEventTypeId: string,
        authorId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    name?: string | null,
    colony: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateColonyDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionColonyDiscordServerFilterInput | null,
};

export type OnCreateColonyDiscordServerSubscription = {
  onCreateColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateColonyDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionColonyDiscordServerFilterInput | null,
};

export type OnUpdateColonyDiscordServerSubscription = {
  onUpdateColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteColonyDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionColonyDiscordServerFilterInput | null,
};

export type OnDeleteColonyDiscordServerSubscription = {
  onDeleteColonyDiscordServer?:  {
    __typename: "ColonyDiscordServer",
    id: string,
    colonyId: string,
    discordServerId: string,
    colony:  {
      __typename: "Colony",
      id: string,
      notifyInDiscordServers?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      name?: string | null,
      domains?:  {
        __typename: "ModelDomainConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionUserDiscordServerFilterInput | null,
};

export type OnCreateUserDiscordServerSubscription = {
  onCreateUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionUserDiscordServerFilterInput | null,
};

export type OnUpdateUserDiscordServerSubscription = {
  onUpdateUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserDiscordServerSubscriptionVariables = {
  filter?: ModelSubscriptionUserDiscordServerFilterInput | null,
};

export type OnDeleteUserDiscordServerSubscription = {
  onDeleteUserDiscordServer?:  {
    __typename: "UserDiscordServer",
    id: string,
    discordServerId: string,
    userId: string,
    discordServer:  {
      __typename: "DiscordServer",
      id: string,
      hasColonyNotificationBotAdded?: boolean | null,
      managedByUsers?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      colonies?:  {
        __typename: "ModelColonyDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      channels?:  {
        __typename: "ModelDiscordChannelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    user:  {
      __typename: "User",
      id: string,
      authorOfNotificationSubscriptions?:  {
        __typename: "ModelNotificationSubscriptionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      mentions?:  {
        __typename: "ModelMentionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      idDiscord?: string | null,
      walletAddress?: string | null,
      managerOfDiscords?:  {
        __typename: "ModelUserDiscordServerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
