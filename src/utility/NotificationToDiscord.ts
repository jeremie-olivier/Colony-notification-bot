import fetch from "node-fetch";
import { getNotificationSubscription } from "../api/getNotificationSubscription";

export async function notificationsSubs(colonyName: string): Promise<string> {


  try {
    let notificationsSubscription = await getNotificationSubscription(
      colonyName
    );

 

    return notificationsSubscription;
  } catch (error) {
    console.error(error)
    return "";
  }
}