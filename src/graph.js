import { graphConfig } from './authConfig';

/**
 * Fetches user profile data and profile picture from Microsoft Graph.
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers,
  };

  try {
    // Fetch user profile data
    const profileResponse = await fetch(graphConfig.graphMeEndpoint, options);
    const profileData = await profileResponse.json();

    // Fetch profile picture
    const photoResponse = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', options);
    const photoBlob = await photoResponse.blob();
    const photoUrl = URL.createObjectURL(photoBlob);

    console.log('profileResponse', profileResponse);
    return {
      profile: profileData,
      photo: photoUrl,
    };
  } catch (error) {
    console.error('Error fetching data from Microsoft Graph:', error);
    return null; // Return null in case of an error to maintain a consistent return type
  }
}
