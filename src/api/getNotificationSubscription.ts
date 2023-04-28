import { listColonies } from "./../graphql/queries";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "../graphql/queries";

export async function getNotificationSubscription(colonyName: string) {
  // Fetch a single record by its identifier

  const response = await API.graphql<GraphQLQuery<any>>({
    query: `query Query($filter: ModelColonyFilterInput) {
        listColonies(filter: $filter) {
          items {
            name
            notificationSubscriptions {
              items {
                domain {
                  name
                }
                discordChannel {
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
        },
      },
    },
  });

  return response.data.listColonies.items[0] ? 
   response.data.listColonies.items[0].notificationSubscriptions.items : [];
}
 
