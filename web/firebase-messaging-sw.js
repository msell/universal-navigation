// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({vapidKey: 'BGmo-y4wgTVXo5KMwbS-5_R9y4VRDiFNfIkQvhgZL13DSY9rDj03Sr-jnJ0WOA5s-lMvCaqW2SI7BqfB4VEmZK8'}).then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No registration token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving registration token. ', err);
  setTokenSentToServer(false);
});
