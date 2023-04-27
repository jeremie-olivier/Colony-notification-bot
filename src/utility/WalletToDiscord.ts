import fetch from "node-fetch";
import { getUserByWalletAddress } from "../api/getUserByWalletAddress";

export async function walletToDiscord(walletAddress: string): Promise<string> {
  console.log(walletAddress);

  try {
    let user = await getUserByWalletAddress(walletAddress);
    let discordId = user.idDiscord;
    return discordId;
  } catch (error) {
    return "";
  }
}
