/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDiscordChannel = /* GraphQL */ `
  mutation CreateDiscordChannel(
    $input: CreateDiscordChannelInput!
    $condition: ModelDiscordChannelConditionInput
  ) {
    createDiscordChannel(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServer
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
export const updateDiscordChannel = /* GraphQL */ `
  mutation UpdateDiscordChannel(
    $input: UpdateDiscordChannelInput!
    $condition: ModelDiscordChannelConditionInput
  ) {
    updateDiscordChannel(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServer
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
export const deleteDiscordChannel = /* GraphQL */ `
  mutation DeleteDiscordChannel(
    $input: DeleteDiscordChannelInput!
    $condition: ModelDiscordChannelConditionInput
  ) {
    deleteDiscordChannel(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      discordServer
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
export const createColony = /* GraphQL */ `
  mutation CreateColony(
    $input: CreateColonyInput!
    $condition: ModelColonyConditionInput
  ) {
    createColony(input: $input, condition: $condition) {
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
          author
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
export const updateColony = /* GraphQL */ `
  mutation UpdateColony(
    $input: UpdateColonyInput!
    $condition: ModelColonyConditionInput
  ) {
    updateColony(input: $input, condition: $condition) {
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
          author
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
export const deleteColony = /* GraphQL */ `
  mutation DeleteColony(
    $input: DeleteColonyInput!
    $condition: ModelColonyConditionInput
  ) {
    deleteColony(input: $input, condition: $condition) {
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
          author
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
export const createMention = /* GraphQL */ `
  mutation CreateMention(
    $input: CreateMentionInput!
    $condition: ModelMentionConditionInput
  ) {
    createMention(input: $input, condition: $condition) {
      id
      idDiscordRole
      notificationSubscription
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMention = /* GraphQL */ `
  mutation UpdateMention(
    $input: UpdateMentionInput!
    $condition: ModelMentionConditionInput
  ) {
    updateMention(input: $input, condition: $condition) {
      id
      idDiscordRole
      notificationSubscription
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMention = /* GraphQL */ `
  mutation DeleteMention(
    $input: DeleteMentionInput!
    $condition: ModelMentionConditionInput
  ) {
    deleteMention(input: $input, condition: $condition) {
      id
      idDiscordRole
      notificationSubscription
      user
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNotificationSubscription = /* GraphQL */ `
  mutation CreateNotificationSubscription(
    $input: CreateNotificationSubscriptionInput!
    $condition: ModelNotificationSubscriptionConditionInput
  ) {
    createNotificationSubscription(input: $input, condition: $condition) {
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
        discordServer
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
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      author
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
          user
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
export const updateNotificationSubscription = /* GraphQL */ `
  mutation UpdateNotificationSubscription(
    $input: UpdateNotificationSubscriptionInput!
    $condition: ModelNotificationSubscriptionConditionInput
  ) {
    updateNotificationSubscription(input: $input, condition: $condition) {
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
        discordServer
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
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      author
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
          user
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
export const deleteNotificationSubscription = /* GraphQL */ `
  mutation DeleteNotificationSubscription(
    $input: DeleteNotificationSubscriptionInput!
    $condition: ModelNotificationSubscriptionConditionInput
  ) {
    deleteNotificationSubscription(input: $input, condition: $condition) {
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
        discordServer
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
      colonyId
      domainId
      discordChannelId
      colonyEventTypeId
      author
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
          user
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
export const createDiscordServer = /* GraphQL */ `
  mutation CreateDiscordServer(
    $input: CreateDiscordServerInput!
    $condition: ModelDiscordServerConditionInput
  ) {
    createDiscordServer(input: $input, condition: $condition) {
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
          discordServer
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
export const updateDiscordServer = /* GraphQL */ `
  mutation UpdateDiscordServer(
    $input: UpdateDiscordServerInput!
    $condition: ModelDiscordServerConditionInput
  ) {
    updateDiscordServer(input: $input, condition: $condition) {
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
          discordServer
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
export const deleteDiscordServer = /* GraphQL */ `
  mutation DeleteDiscordServer(
    $input: DeleteDiscordServerInput!
    $condition: ModelDiscordServerConditionInput
  ) {
    deleteDiscordServer(input: $input, condition: $condition) {
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
          discordServer
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
export const createHit = /* GraphQL */ `
  mutation CreateHit(
    $input: CreateHitInput!
    $condition: ModelHitConditionInput
  ) {
    createHit(input: $input, condition: $condition) {
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
export const updateHit = /* GraphQL */ `
  mutation UpdateHit(
    $input: UpdateHitInput!
    $condition: ModelHitConditionInput
  ) {
    updateHit(input: $input, condition: $condition) {
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
export const deleteHit = /* GraphQL */ `
  mutation DeleteHit(
    $input: DeleteHitInput!
    $condition: ModelHitConditionInput
  ) {
    deleteHit(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
          user
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
          user
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      authorOfNotificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
          user
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
export const createColonyEventType = /* GraphQL */ `
  mutation CreateColonyEventType(
    $input: CreateColonyEventTypeInput!
    $condition: ModelColonyEventTypeConditionInput
  ) {
    createColonyEventType(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const updateColonyEventType = /* GraphQL */ `
  mutation UpdateColonyEventType(
    $input: UpdateColonyEventTypeInput!
    $condition: ModelColonyEventTypeConditionInput
  ) {
    updateColonyEventType(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const deleteColonyEventType = /* GraphQL */ `
  mutation DeleteColonyEventType(
    $input: DeleteColonyEventTypeInput!
    $condition: ModelColonyEventTypeConditionInput
  ) {
    deleteColonyEventType(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const createDomain = /* GraphQL */ `
  mutation CreateDomain(
    $input: CreateDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    createDomain(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const updateDomain = /* GraphQL */ `
  mutation UpdateDomain(
    $input: UpdateDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    updateDomain(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const deleteDomain = /* GraphQL */ `
  mutation DeleteDomain(
    $input: DeleteDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    deleteDomain(input: $input, condition: $condition) {
      id
      notificationSubscriptions {
        items {
          id
          colonyId
          domainId
          discordChannelId
          colonyEventTypeId
          author
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
export const createColonyDiscordServer = /* GraphQL */ `
  mutation CreateColonyDiscordServer(
    $input: CreateColonyDiscordServerInput!
    $condition: ModelColonyDiscordServerConditionInput
  ) {
    createColonyDiscordServer(input: $input, condition: $condition) {
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
export const updateColonyDiscordServer = /* GraphQL */ `
  mutation UpdateColonyDiscordServer(
    $input: UpdateColonyDiscordServerInput!
    $condition: ModelColonyDiscordServerConditionInput
  ) {
    updateColonyDiscordServer(input: $input, condition: $condition) {
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
export const deleteColonyDiscordServer = /* GraphQL */ `
  mutation DeleteColonyDiscordServer(
    $input: DeleteColonyDiscordServerInput!
    $condition: ModelColonyDiscordServerConditionInput
  ) {
    deleteColonyDiscordServer(input: $input, condition: $condition) {
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
export const createUserDiscordServer = /* GraphQL */ `
  mutation CreateUserDiscordServer(
    $input: CreateUserDiscordServerInput!
    $condition: ModelUserDiscordServerConditionInput
  ) {
    createUserDiscordServer(input: $input, condition: $condition) {
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
export const updateUserDiscordServer = /* GraphQL */ `
  mutation UpdateUserDiscordServer(
    $input: UpdateUserDiscordServerInput!
    $condition: ModelUserDiscordServerConditionInput
  ) {
    updateUserDiscordServer(input: $input, condition: $condition) {
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
export const deleteUserDiscordServer = /* GraphQL */ `
  mutation DeleteUserDiscordServer(
    $input: DeleteUserDiscordServerInput!
    $condition: ModelUserDiscordServerConditionInput
  ) {
    deleteUserDiscordServer(input: $input, condition: $condition) {
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
