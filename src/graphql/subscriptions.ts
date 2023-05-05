/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDiscordChannel = /* GraphQL */ `
  subscription OnCreateDiscordChannel(
    $filter: ModelSubscriptionDiscordChannelFilterInput
  ) {
    onCreateDiscordChannel(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServerId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDiscordChannel = /* GraphQL */ `
  subscription OnUpdateDiscordChannel(
    $filter: ModelSubscriptionDiscordChannelFilterInput
  ) {
    onUpdateDiscordChannel(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServerId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDiscordChannel = /* GraphQL */ `
  subscription OnDeleteDiscordChannel(
    $filter: ModelSubscriptionDiscordChannelFilterInput
  ) {
    onDeleteDiscordChannel(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServerId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateColony = /* GraphQL */ `
  subscription OnCreateColony($filter: ModelSubscriptionColonyFilterInput) {
    onCreateColony(filter: $filter) {
      id
      notifyInDiscordServers {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      domains {
        items {
          id
          name
          colony
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateColony = /* GraphQL */ `
  subscription OnUpdateColony($filter: ModelSubscriptionColonyFilterInput) {
    onUpdateColony(filter: $filter) {
      id
      notifyInDiscordServers {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      domains {
        items {
          id
          name
          colony
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteColony = /* GraphQL */ `
  subscription OnDeleteColony($filter: ModelSubscriptionColonyFilterInput) {
    onDeleteColony(filter: $filter) {
      id
      notifyInDiscordServers {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      domains {
        items {
          id
          name
          colony
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      url
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMention = /* GraphQL */ `
  subscription OnCreateMention($filter: ModelSubscriptionMentionFilterInput) {
    onCreateMention(filter: $filter) {
      id
      idDiscordRole
      notificationSubscription
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMention = /* GraphQL */ `
  subscription OnUpdateMention($filter: ModelSubscriptionMentionFilterInput) {
    onUpdateMention(filter: $filter) {
      id
      idDiscordRole
      notificationSubscription
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMention = /* GraphQL */ `
  subscription OnDeleteMention($filter: ModelSubscriptionMentionFilterInput) {
    onDeleteMention(filter: $filter) {
      id
      idDiscordRole
      notificationSubscription
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNotificationSubscription = /* GraphQL */ `
  subscription OnCreateNotificationSubscription(
    $filter: ModelSubscriptionNotificationSubscriptionFilterInput
  ) {
    onCreateNotificationSubscription(filter: $filter) {
      id
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      domain {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        colony
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordChannel {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        discordServerId
        discordServer {
          id
          hasColonyNotificationBotAdded
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyEventType {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      authorId
      hits {
        items {
          id
          discordMessageLink
          notificationSubscription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNotificationSubscription = /* GraphQL */ `
  subscription OnUpdateNotificationSubscription(
    $filter: ModelSubscriptionNotificationSubscriptionFilterInput
  ) {
    onUpdateNotificationSubscription(filter: $filter) {
      id
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      domain {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        colony
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordChannel {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        discordServerId
        discordServer {
          id
          hasColonyNotificationBotAdded
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyEventType {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      authorId
      hits {
        items {
          id
          discordMessageLink
          notificationSubscription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNotificationSubscription = /* GraphQL */ `
  subscription OnDeleteNotificationSubscription(
    $filter: ModelSubscriptionNotificationSubscriptionFilterInput
  ) {
    onDeleteNotificationSubscription(filter: $filter) {
      id
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      domain {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        colony
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordChannel {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        discordServerId
        discordServer {
          id
          hasColonyNotificationBotAdded
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyEventType {
        id
        notificationSubscriptions {
          nextToken
          startedAt
        }
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      authorId
      hits {
        items {
          id
          discordMessageLink
          notificationSubscription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDiscordServer = /* GraphQL */ `
  subscription OnCreateDiscordServer(
    $filter: ModelSubscriptionDiscordServerFilterInput
  ) {
    onCreateDiscordServer(filter: $filter) {
      id
      hasColonyNotificationBotAdded
      managedByUsers {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      colonies {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      channels {
        items {
          id
          discordServerId
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDiscordServer = /* GraphQL */ `
  subscription OnUpdateDiscordServer(
    $filter: ModelSubscriptionDiscordServerFilterInput
  ) {
    onUpdateDiscordServer(filter: $filter) {
      id
      hasColonyNotificationBotAdded
      managedByUsers {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      colonies {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      channels {
        items {
          id
          discordServerId
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDiscordServer = /* GraphQL */ `
  subscription OnDeleteDiscordServer(
    $filter: ModelSubscriptionDiscordServerFilterInput
  ) {
    onDeleteDiscordServer(filter: $filter) {
      id
      hasColonyNotificationBotAdded
      managedByUsers {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      colonies {
        items {
          id
          colonyId
          discordServerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      channels {
        items {
          id
          discordServerId
          idDiscord
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateHit = /* GraphQL */ `
  subscription OnCreateHit($filter: ModelSubscriptionHitFilterInput) {
    onCreateHit(filter: $filter) {
      id
      discordMessageLink
      notificationSubscription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateHit = /* GraphQL */ `
  subscription OnUpdateHit($filter: ModelSubscriptionHitFilterInput) {
    onUpdateHit(filter: $filter) {
      id
      discordMessageLink
      notificationSubscription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteHit = /* GraphQL */ `
  subscription OnDeleteHit($filter: ModelSubscriptionHitFilterInput) {
    onDeleteHit(filter: $filter) {
      id
      discordMessageLink
      notificationSubscription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      walletAddress
      managerOfDiscords {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      walletAddress
      managerOfDiscords {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      mentions {
        items {
          id
          idDiscordRole
          notificationSubscription
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      idDiscord
      walletAddress
      managerOfDiscords {
        items {
          id
          discordServerId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateColonyEventType = /* GraphQL */ `
  subscription OnCreateColonyEventType(
    $filter: ModelSubscriptionColonyEventTypeFilterInput
  ) {
    onCreateColonyEventType(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateColonyEventType = /* GraphQL */ `
  subscription OnUpdateColonyEventType(
    $filter: ModelSubscriptionColonyEventTypeFilterInput
  ) {
    onUpdateColonyEventType(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteColonyEventType = /* GraphQL */ `
  subscription OnDeleteColonyEventType(
    $filter: ModelSubscriptionColonyEventTypeFilterInput
  ) {
    onDeleteColonyEventType(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDomain = /* GraphQL */ `
  subscription OnCreateDomain($filter: ModelSubscriptionDomainFilterInput) {
    onCreateDomain(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      colony
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDomain = /* GraphQL */ `
  subscription OnUpdateDomain($filter: ModelSubscriptionDomainFilterInput) {
    onUpdateDomain(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      colony
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDomain = /* GraphQL */ `
  subscription OnDeleteDomain($filter: ModelSubscriptionDomainFilterInput) {
    onDeleteDomain(filter: $filter) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      colony
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateColonyDiscordServer = /* GraphQL */ `
  subscription OnCreateColonyDiscordServer(
    $filter: ModelSubscriptionColonyDiscordServerFilterInput
  ) {
    onCreateColonyDiscordServer(filter: $filter) {
      id
      colonyId
      discordServerId
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateColonyDiscordServer = /* GraphQL */ `
  subscription OnUpdateColonyDiscordServer(
    $filter: ModelSubscriptionColonyDiscordServerFilterInput
  ) {
    onUpdateColonyDiscordServer(filter: $filter) {
      id
      colonyId
      discordServerId
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteColonyDiscordServer = /* GraphQL */ `
  subscription OnDeleteColonyDiscordServer(
    $filter: ModelSubscriptionColonyDiscordServerFilterInput
  ) {
    onDeleteColonyDiscordServer(filter: $filter) {
      id
      colonyId
      discordServerId
      colony {
        id
        notifyInDiscordServers {
          nextToken
          startedAt
        }
        notificationSubscriptions {
          nextToken
          startedAt
        }
        name
        domains {
          nextToken
          startedAt
        }
        url
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUserDiscordServer = /* GraphQL */ `
  subscription OnCreateUserDiscordServer(
    $filter: ModelSubscriptionUserDiscordServerFilterInput
  ) {
    onCreateUserDiscordServer(filter: $filter) {
      id
      discordServerId
      userId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserDiscordServer = /* GraphQL */ `
  subscription OnUpdateUserDiscordServer(
    $filter: ModelSubscriptionUserDiscordServerFilterInput
  ) {
    onUpdateUserDiscordServer(filter: $filter) {
      id
      discordServerId
      userId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserDiscordServer = /* GraphQL */ `
  subscription OnDeleteUserDiscordServer(
    $filter: ModelSubscriptionUserDiscordServerFilterInput
  ) {
    onDeleteUserDiscordServer(filter: $filter) {
      id
      discordServerId
      userId
      discordServer {
        id
        hasColonyNotificationBotAdded
        managedByUsers {
          nextToken
          startedAt
        }
        colonies {
          nextToken
          startedAt
        }
        channels {
          nextToken
          startedAt
        }
        idDiscord
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      user {
        id
        authorOfNotificationSubscriptions {
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        idDiscord
        walletAddress
        managerOfDiscords {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
