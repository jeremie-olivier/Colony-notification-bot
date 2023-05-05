import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum EventType {
  PAYMENT = "PAYMENT",
  SIMPLE_DECISION = "SIMPLE_DECISION",
  TOKEN_MINT = "TOKEN_MINT"
}



type EagerDiscordChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordChannel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions?: (NotificationSubscription | null)[] | null;
  readonly discordServerId: string;
  readonly discordServer?: DiscordServer | null;
  readonly idDiscord?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscordChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordChannel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions: AsyncCollection<NotificationSubscription>;
  readonly discordServerId: string;
  readonly discordServer: AsyncItem<DiscordServer | undefined>;
  readonly idDiscord?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiscordChannel = LazyLoading extends LazyLoadingDisabled ? EagerDiscordChannel : LazyDiscordChannel

export declare const DiscordChannel: (new (init: ModelInit<DiscordChannel>) => DiscordChannel) & {
  copyOf(source: DiscordChannel, mutator: (draft: MutableModel<DiscordChannel>) => MutableModel<DiscordChannel> | void): DiscordChannel;
}

type EagerColony = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colony, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notifyInDiscordServers?: (ColonyDiscordServer | null)[] | null;
  readonly notificationSubscriptions?: (NotificationSubscription | null)[] | null;
  readonly name?: string | null;
  readonly domains?: (Domain | null)[] | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyColony = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colony, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notifyInDiscordServers: AsyncCollection<ColonyDiscordServer>;
  readonly notificationSubscriptions: AsyncCollection<NotificationSubscription>;
  readonly name?: string | null;
  readonly domains: AsyncCollection<Domain>;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Colony = LazyLoading extends LazyLoadingDisabled ? EagerColony : LazyColony

export declare const Colony: (new (init: ModelInit<Colony>) => Colony) & {
  copyOf(source: Colony, mutator: (draft: MutableModel<Colony>) => MutableModel<Colony> | void): Colony;
}

type EagerMention = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mention, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idDiscordRole?: string | null;
  readonly notificationSubscription: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMention = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mention, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly idDiscordRole?: string | null;
  readonly notificationSubscription: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mention = LazyLoading extends LazyLoadingDisabled ? EagerMention : LazyMention

export declare const Mention: (new (init: ModelInit<Mention>) => Mention) & {
  copyOf(source: Mention, mutator: (draft: MutableModel<Mention>) => MutableModel<Mention> | void): Mention;
}

type EagerNotificationSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NotificationSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly colony?: Colony | null;
  readonly domain?: Domain | null;
  readonly discordChannel?: DiscordChannel | null;
  readonly colonyEventType?: ColonyEventType | null;
  readonly author?: User | null;
  readonly colonyId: string;
  readonly domainId: string;
  readonly discordChannelId: string;
  readonly colonyEventTypeId: string;
  readonly authorId: string;
  readonly hits?: (Hit | null)[] | null;
  readonly mentions?: (Mention | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotificationSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NotificationSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly colony: AsyncItem<Colony | undefined>;
  readonly domain: AsyncItem<Domain | undefined>;
  readonly discordChannel: AsyncItem<DiscordChannel | undefined>;
  readonly colonyEventType: AsyncItem<ColonyEventType | undefined>;
  readonly author: AsyncItem<User | undefined>;
  readonly colonyId: string;
  readonly domainId: string;
  readonly discordChannelId: string;
  readonly colonyEventTypeId: string;
  readonly authorId: string;
  readonly hits: AsyncCollection<Hit>;
  readonly mentions: AsyncCollection<Mention>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NotificationSubscription = LazyLoading extends LazyLoadingDisabled ? EagerNotificationSubscription : LazyNotificationSubscription

export declare const NotificationSubscription: (new (init: ModelInit<NotificationSubscription>) => NotificationSubscription) & {
  copyOf(source: NotificationSubscription, mutator: (draft: MutableModel<NotificationSubscription>) => MutableModel<NotificationSubscription> | void): NotificationSubscription;
}

type EagerDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hasColonyNotificationBotAdded?: boolean | null;
  readonly managedByUsers?: (UserDiscordServer | null)[] | null;
  readonly colonies?: (ColonyDiscordServer | null)[] | null;
  readonly channels?: (DiscordChannel | null)[] | null;
  readonly idDiscord?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hasColonyNotificationBotAdded?: boolean | null;
  readonly managedByUsers: AsyncCollection<UserDiscordServer>;
  readonly colonies: AsyncCollection<ColonyDiscordServer>;
  readonly channels: AsyncCollection<DiscordChannel>;
  readonly idDiscord?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiscordServer = LazyLoading extends LazyLoadingDisabled ? EagerDiscordServer : LazyDiscordServer

export declare const DiscordServer: (new (init: ModelInit<DiscordServer>) => DiscordServer) & {
  copyOf(source: DiscordServer, mutator: (draft: MutableModel<DiscordServer>) => MutableModel<DiscordServer> | void): DiscordServer;
}

type EagerHit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discordMessageLink?: string | null;
  readonly notificationSubscription: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discordMessageLink?: string | null;
  readonly notificationSubscription: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hit = LazyLoading extends LazyLoadingDisabled ? EagerHit : LazyHit

export declare const Hit: (new (init: ModelInit<Hit>) => Hit) & {
  copyOf(source: Hit, mutator: (draft: MutableModel<Hit>) => MutableModel<Hit> | void): Hit;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly authorOfNotificationSubscriptions?: (NotificationSubscription | null)[] | null;
  readonly mentions?: (Mention | null)[] | null;
  readonly idDiscord?: string | null;
  readonly walletAddress?: string | null;
  readonly managerOfDiscords?: (UserDiscordServer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly authorOfNotificationSubscriptions: AsyncCollection<NotificationSubscription>;
  readonly mentions: AsyncCollection<Mention>;
  readonly idDiscord?: string | null;
  readonly walletAddress?: string | null;
  readonly managerOfDiscords: AsyncCollection<UserDiscordServer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerColonyEventType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ColonyEventType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions?: (NotificationSubscription | null)[] | null;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyColonyEventType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ColonyEventType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions: AsyncCollection<NotificationSubscription>;
  readonly type?: EventType | keyof typeof EventType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ColonyEventType = LazyLoading extends LazyLoadingDisabled ? EagerColonyEventType : LazyColonyEventType

export declare const ColonyEventType: (new (init: ModelInit<ColonyEventType>) => ColonyEventType) & {
  copyOf(source: ColonyEventType, mutator: (draft: MutableModel<ColonyEventType>) => MutableModel<ColonyEventType> | void): ColonyEventType;
}

type EagerDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions?: (NotificationSubscription | null)[] | null;
  readonly name?: string | null;
  readonly colony: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDomain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Domain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly notificationSubscriptions: AsyncCollection<NotificationSubscription>;
  readonly name?: string | null;
  readonly colony: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Domain = LazyLoading extends LazyLoadingDisabled ? EagerDomain : LazyDomain

export declare const Domain: (new (init: ModelInit<Domain>) => Domain) & {
  copyOf(source: Domain, mutator: (draft: MutableModel<Domain>) => MutableModel<Domain> | void): Domain;
}

type EagerColonyDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ColonyDiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly colonyId?: string | null;
  readonly discordServerId?: string | null;
  readonly colony: Colony;
  readonly discordServer: DiscordServer;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyColonyDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ColonyDiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly colonyId?: string | null;
  readonly discordServerId?: string | null;
  readonly colony: AsyncItem<Colony>;
  readonly discordServer: AsyncItem<DiscordServer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ColonyDiscordServer = LazyLoading extends LazyLoadingDisabled ? EagerColonyDiscordServer : LazyColonyDiscordServer

export declare const ColonyDiscordServer: (new (init: ModelInit<ColonyDiscordServer>) => ColonyDiscordServer) & {
  copyOf(source: ColonyDiscordServer, mutator: (draft: MutableModel<ColonyDiscordServer>) => MutableModel<ColonyDiscordServer> | void): ColonyDiscordServer;
}

type EagerUserDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discordServerId?: string | null;
  readonly userId?: string | null;
  readonly discordServer: DiscordServer;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDiscordServer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDiscordServer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly discordServerId?: string | null;
  readonly userId?: string | null;
  readonly discordServer: AsyncItem<DiscordServer>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDiscordServer = LazyLoading extends LazyLoadingDisabled ? EagerUserDiscordServer : LazyUserDiscordServer

export declare const UserDiscordServer: (new (init: ModelInit<UserDiscordServer>) => UserDiscordServer) & {
  copyOf(source: UserDiscordServer, mutator: (draft: MutableModel<UserDiscordServer>) => MutableModel<UserDiscordServer> | void): UserDiscordServer;
}