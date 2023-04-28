import fetch from "node-fetch";
import { getNotificationSubscription } from "../api/getNotificationSubscription";

export async function notificationsSubs(colonyName: string): Promise<string> {
  console.log(colonyName);

  try {
    let notificationsSubscription = await getNotificationSubscription(
      colonyName
    );

    console.log("notificationsSubscription utility",notificationsSubscription);

    return notificationsSubscription;
  } catch (error) {
    console.error(error)
    return "";
  }
}