import { _mock } from 'src/_mock';

// To get the user from the <AuthContext/>, you can use

// Change:
// import { useMockedUser } from 'src/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

function trimEmail(email) {
  // Split the email string by '#' and take the first part
  const trimmed = email.split('#')[0];

  // Replace the '_gmail.com' with '@gmail.com'
  return trimmed.replace('_', '@');
}

export function useMockedUser() {
  const savedProfileData = JSON.parse(sessionStorage.getItem('profileData'));
  console.log('savedProfileData', savedProfileData);
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: savedProfileData.profile.displayName,
    email: trimEmail(savedProfileData.profile.userPrincipalName),
    photoURL: savedProfileData.photo,
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: '90210 Broadway Blvd',
    state: 'California',
    city: 'San Francisco',
    zipCode: '94116',
    about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
