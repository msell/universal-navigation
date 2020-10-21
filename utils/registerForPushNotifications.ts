import * as Notifications from "expo-notifications";

export async function registerForPushNotifications() {
  const expoPushToken = await Notifications.getExpoPushTokenAsync({
    experienceId: "test",
  });

  console.log(expoPushToken);
  // await fetch('https://example.com/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     userId,
  //     expoPushToken,
  //   }),
  // });
}
