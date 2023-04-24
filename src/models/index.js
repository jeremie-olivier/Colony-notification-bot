// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventType = {
  "PAYMENT": "PAYMENT",
  "SIMPLE_DECISION": "SIMPLE_DECISION",
  "TOKEN_MINT": "TOKEN_MINT"
};

const { DiscordChannel, Colony, Mention, NotificationSubscription, DiscordServer, Hit, User, ColonyEventType, Domain, ColonyDiscordServer, UserDiscordServer } = initSchema(schema);

export {
  DiscordChannel,
  Colony,
  Mention,
  NotificationSubscription,
  DiscordServer,
  Hit,
  User,
  ColonyEventType,
  Domain,
  ColonyDiscordServer,
  UserDiscordServer,
  EventType
};