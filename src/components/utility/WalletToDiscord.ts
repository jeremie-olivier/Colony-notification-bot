import fetch from "node-fetch";

export async function walletToDiscord(walletAddress: string): Promise<string> {
  console.log(walletAddress);

  try {
    let response = await callApi(walletAddress);
    let reponseJson = await response.json();
    let discordId = reponseJson.data.listUsers.items[0].idDiscord;

    return discordId;
  } catch (error) {
    return "";
  }
}

async function callApi(walletAddress: string) {
  return fetch(
    "https://hbm34xetjbhe3cdl4gurqjrh74.appsync-api.eu-west-3.amazonaws.com/graphql",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,fr;q=0.8",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-api-key": "da2-q3gsxvnvqffazob3ntd5gtvgze",
        Referer: "https://studio.apollographql.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: `{"query":"query Query($filter: ModelUserFilterInput) {\\n  listUsers(filter: $filter) {\\n    items {\\n      idDiscord\\n    }\\n  }\\n}","variables":{"filter":{"walletAddress":{"eq":"${walletAddress}"}}},"operationName":"Query"}`,
      method: "POST",
    }
  );
}
