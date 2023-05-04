import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

export async function getNotificationSubscription(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query($filter: ModelColonyFilterInput) {
      listColonies(filter: $filter) {
        items {
          name
          notificationSubscriptions {
            items {
              domain {
                name
              }
              author
              colonyEventType {
                type
              }
              mentions {
                items {
                  id
                }
              }
              discordChannel {
                discordServer
                name
              }
              hits {
                items {
                  id
                }
              }
              createdAt
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
 
