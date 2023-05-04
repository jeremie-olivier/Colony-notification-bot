import { useState, useEffect } from 'react';
import { getNotificationSubscription } from '../api/getNotificationSubscription';
import { NotificationSubscription } from '../../../API';



export const AdminPage = ({ colonyName = "notificationstest" }) => {
  const [notificationSubscriptions, setNotificationSubscriptions] = useState<NotificationSubscription[]>([]);

  useEffect(() => {
    async function fetchNotificationSubscriptions() {
      const response = await getNotificationSubscription("notificationstest");
      setNotificationSubscriptions(response);
    }
    fetchNotificationSubscriptions();
  }, [colonyName]);

  return (

<div className="m-6 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-indigo-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Servers
                </th>
                <th scope="col" className="px-6 py-3">
                    Created at
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                    Event Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Team
                </th>
                <th scope="col" className="px-6 py-3">
                    Channel
                </th>
                <th scope="col" className="px-6 py-3">
                    Mention
                </th>
                <th scope="col" className="px-6 py-3">
                    Hits
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {notificationSubscriptions.map((notificationSubscription) => (
                <tr key={notificationSubscription.domain?.name}>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.discordChannel?.discordServer}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.colonyEventType?.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.domain?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.discordChannel?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.mentions?.items[0]?.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{notificationSubscription.hits?.items[0]?.id}</td>
                <td className="px-6 py-4 whitespace-nowrap flex space-x-3">
                    <a href="/" className="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="/" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
              </tr>
            ))}
        </tbody>
    </table>
</div>

  )
}
