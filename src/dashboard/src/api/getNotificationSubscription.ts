import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getNotificationSubscription(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query($filter: ModelColonyFilterInput) {
      listColonies(filter: $filter) {
        items {
          notificationSubscriptions {
            items {
              id
              domain {
                name
              }
              colonyEventType {
                type
              }
              discordChannel {
                name
                discordServer {
                  name
                }
              }
              hits {
                items {
                  id
                }
              }
              createdAt
              mentions {
                items {
                  user {
                    idDiscord
                  }
                }
              }
              author {
                idDiscord
              }
            }
          }
        }
      }
    }`,
    variables: {
        filter: {
          name: {
            eq: colonyName,
          }
        }
    }
  });

  return response.data.listColonies.items[0] ? 
   response.data.listColonies.items[0].notificationSubscriptions.items : [];
}
 
