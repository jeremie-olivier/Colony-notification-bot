import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";

import * as queries from "../graphql/queries";
import { ListUsersQuery } from "../API";

export async function getUserByWalletAddress(walletAddress: string) {
  // Fetch a single record by its identifier
  const response = await API.graphql<GraphQLQuery<ListUsersQuery>>({
    query: queries.listUsers,
    variables: {
      filter: {
        walletAddress: {
          eq: walletAddress,
        },
      },
    },
  });

  return response.data.listUsers.items[0];
}
