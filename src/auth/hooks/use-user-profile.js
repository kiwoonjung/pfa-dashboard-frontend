import { loginRequest } from 'src/authConfig';
import { callMsGraph } from 'src/graph';
import { useMsal } from '@azure/msal-react';
import { useState, useEffect } from 'react';

export function useGetUserProfile() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    function RequestProfileData() {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((tokenResponse) => {
          callMsGraph(tokenResponse.accessToken).then((data) => {
            if (data) {
              setGraphData(data.profile);
              setProfilePicture(data.photo); // Set profile picture URL
            }
          });
        })
        .catch((error) => {
          console.error('Error acquiring token silently', error);
        });
    }

    if (accounts && accounts[0]) {
      RequestProfileData();
    }
  }, [instance, accounts]);

  // Only set user object when graphData is available
  const user = graphData
    ? {
        displayName: graphData.displayName,
        email: graphData.userPrincipalName,
        photoURL: profilePicture,
      }
    : null;

  return { user };
}
