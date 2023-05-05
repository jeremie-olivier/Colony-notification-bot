/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiscordChannel = /* GraphQL */ `
  query GetDiscordChannel($id: ID!) {
    getDiscordChannel(id: $id) {
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
export const listDiscordChannels = /* GraphQL */ `
  query ListDiscordChannels(
    $filter: ModelDiscordChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscordChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDiscordChannels = /* GraphQL */ `
  query SyncDiscordChannels(
    $filter: ModelDiscordChannelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiscordChannels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const discordChannelsByDiscordServerId = /* GraphQL */ `
  query DiscordChannelsByDiscordServerId(
    $discordServerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiscordChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    discordChannelsByDiscordServerId(
      discordServerId: $discordServerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getColony = /* GraphQL */ `
  query GetColony($id: ID!) {
    getColony(id: $id) {
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
export const listColonies = /* GraphQL */ `
  query ListColonies(
    $filter: ModelColonyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColonies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncColonies = /* GraphQL */ `
  query SyncColonies(
    $filter: ModelColonyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncColonies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMention = /* GraphQL */ `
  query GetMention($id: ID!) {
    getMention(id: $id) {
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
export const listMentions = /* GraphQL */ `
  query ListMentions(
    $filter: ModelMentionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        idDiscordRole
        notificationSubscription
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const syncMentions = /* GraphQL */ `
  query SyncMentions(
    $filter: ModelMentionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMentions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        idDiscordRole
        notificationSubscription
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const mentionsByNotificationSubscription = /* GraphQL */ `
  query MentionsByNotificationSubscription(
    $notificationSubscription: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMentionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mentionsByNotificationSubscription(
      notificationSubscription: $notificationSubscription
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        idDiscordRole
        notificationSubscription
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const mentionsByUserId = /* GraphQL */ `
  query MentionsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMentionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mentionsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        idDiscordRole
        notificationSubscription
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const getNotificationSubscription = /* GraphQL */ `
  query GetNotificationSubscription($id: ID!) {
    getNotificationSubscription(id: $id) {
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
export const listNotificationSubscriptions = /* GraphQL */ `
  query ListNotificationSubscriptions(
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotificationSubscriptions = /* GraphQL */ `
  query SyncNotificationSubscriptions(
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotificationSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationSubscriptionsByColonyId = /* GraphQL */ `
  query NotificationSubscriptionsByColonyId(
    $colonyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationSubscriptionsByColonyId(
      colonyId: $colonyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationSubscriptionsByDomainId = /* GraphQL */ `
  query NotificationSubscriptionsByDomainId(
    $domainId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationSubscriptionsByDomainId(
      domainId: $domainId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationSubscriptionsByDiscordChannelId = /* GraphQL */ `
  query NotificationSubscriptionsByDiscordChannelId(
    $discordChannelId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationSubscriptionsByDiscordChannelId(
      discordChannelId: $discordChannelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationSubscriptionsByColonyEventTypeId = /* GraphQL */ `
  query NotificationSubscriptionsByColonyEventTypeId(
    $colonyEventTypeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationSubscriptionsByColonyEventTypeId(
      colonyEventTypeId: $colonyEventTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const notificationSubscriptionsByAuthorId = /* GraphQL */ `
  query NotificationSubscriptionsByAuthorId(
    $authorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationSubscriptionsByAuthorId(
      authorId: $authorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colony {
          id
          name
          url
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        domain {
          id
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
          discordServerId
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
          type
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        author {
          id
          idDiscord
          walletAddress
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
          nextToken
          startedAt
        }
        mentions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDiscordServer = /* GraphQL */ `
  query GetDiscordServer($id: ID!) {
    getDiscordServer(id: $id) {
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
export const listDiscordServers = /* GraphQL */ `
  query ListDiscordServers(
    $filter: ModelDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscordServers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDiscordServers = /* GraphQL */ `
  query SyncDiscordServers(
    $filter: ModelDiscordServerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiscordServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHit = /* GraphQL */ `
  query GetHit($id: ID!) {
    getHit(id: $id) {
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
export const listHits = /* GraphQL */ `
  query ListHits(
    $filter: ModelHitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHits(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncHits = /* GraphQL */ `
  query SyncHits(
    $filter: ModelHitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const hitsByNotificationSubscription = /* GraphQL */ `
  query HitsByNotificationSubscription(
    $notificationSubscription: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hitsByNotificationSubscription(
      notificationSubscription: $notificationSubscription
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getColonyEventType = /* GraphQL */ `
  query GetColonyEventType($id: ID!) {
    getColonyEventType(id: $id) {
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
export const listColonyEventTypes = /* GraphQL */ `
  query ListColonyEventTypes(
    $filter: ModelColonyEventTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColonyEventTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncColonyEventTypes = /* GraphQL */ `
  query SyncColonyEventTypes(
    $filter: ModelColonyEventTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncColonyEventTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDomain = /* GraphQL */ `
  query GetDomain($id: ID!) {
    getDomain(id: $id) {
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
export const listDomains = /* GraphQL */ `
  query ListDomains(
    $filter: ModelDomainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDomains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDomains = /* GraphQL */ `
  query SyncDomains(
    $filter: ModelDomainFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDomains(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const domainsByColony = /* GraphQL */ `
  query DomainsByColony(
    $colony: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDomainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    domainsByColony(
      colony: $colony
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getColonyDiscordServer = /* GraphQL */ `
  query GetColonyDiscordServer($id: ID!) {
    getColonyDiscordServer(id: $id) {
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
export const listColonyDiscordServers = /* GraphQL */ `
  query ListColonyDiscordServers(
    $filter: ModelColonyDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listColonyDiscordServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colonyId
        discordServerId
        colony {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const syncColonyDiscordServers = /* GraphQL */ `
  query SyncColonyDiscordServers(
    $filter: ModelColonyDiscordServerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncColonyDiscordServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        colonyId
        discordServerId
        colony {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const colonyDiscordServersByColonyId = /* GraphQL */ `
  query ColonyDiscordServersByColonyId(
    $colonyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelColonyDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    colonyDiscordServersByColonyId(
      colonyId: $colonyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colonyId
        discordServerId
        colony {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const colonyDiscordServersByDiscordServerId = /* GraphQL */ `
  query ColonyDiscordServersByDiscordServerId(
    $discordServerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelColonyDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    colonyDiscordServersByDiscordServerId(
      discordServerId: $discordServerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        colonyId
        discordServerId
        colony {
          id
          name
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
      nextToken
      startedAt
    }
  }
`;
export const getUserDiscordServer = /* GraphQL */ `
  query GetUserDiscordServer($id: ID!) {
    getUserDiscordServer(id: $id) {
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
export const listUserDiscordServers = /* GraphQL */ `
  query ListUserDiscordServers(
    $filter: ModelUserDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDiscordServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        discordServerId
        userId
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
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserDiscordServers = /* GraphQL */ `
  query SyncUserDiscordServers(
    $filter: ModelUserDiscordServerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserDiscordServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        discordServerId
        userId
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
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const userDiscordServersByDiscordServerId = /* GraphQL */ `
  query UserDiscordServersByDiscordServerId(
    $discordServerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDiscordServersByDiscordServerId(
      discordServerId: $discordServerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        discordServerId
        userId
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
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
export const userDiscordServersByUserId = /* GraphQL */ `
  query UserDiscordServersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserDiscordServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userDiscordServersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        discordServerId
        userId
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
        user {
          id
          idDiscord
          walletAddress
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
      nextToken
      startedAt
    }
  }
`;
