import { createSubgraphClient, gql } from "@colony/sdk/graph";

/*
 * A basic subscription within the Colony Subgraph. See urql's documentation here: https://formidable.com/open-source/urql/docs/advanced/subscriptions/#one-off-subscriptions for more information
 */
import { pipe, subscribe } from 'wonka';


const colonySubgraph = createSubgraphClient();

colonySubgraph.subscription

// Get the latest DomainAddedEvents across all Colonies
const QUERY = gql`
subscription Subscription($orderBy: OneTxPayment_orderBy, $orderDirection: OrderDirection, $first: Int) {
  oneTxPayments(orderBy: $orderBy, orderDirection: $orderDirection, first: $first) {
    nPayouts
    payment {
      colony {
        ensName
        id
      }
      fundingPot {
        fundingPotPayouts {
          amount
        }
      }
      to
      domain {
        colonyAddress
      }
     
    
    }
    
  }
}`

const VARIABLES = {
  "orderDirection": "desc",
  "orderBy": "timestamp",
  "first": 1,
}

console.info('Listening to new `PaymentsTx` events...');
pipe(
  colonySubgraph.subscription(QUERY, VARIABLES),
  subscribe((result) => {
    console.info(JSON.stringify(result.data));
  }),
);
