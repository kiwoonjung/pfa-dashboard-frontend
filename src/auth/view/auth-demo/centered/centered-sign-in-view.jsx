import { useContext } from 'react';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'src/auth/context/auth-context';
import { loginRequest } from 'src/authConfig';
import { callMsGraph } from 'src/graph';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { Iconify } from 'src/components/iconify';
import { AnimateLogo2 } from 'src/components/animate';
import { Form, Field } from 'src/components/hook-form';

import { FormHead } from '../../../components/form-head';
import { FormSocials } from '../../../components/form-socials';
import { FormDivider } from '../../../components/form-divider';

// ----------------------------------------------------------------------

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ----------------------------------------------------------------------

// const { instance, accounts } = useMsal();
// const [graphData, setGraphData] = useState(null);

export function CenteredSignInView() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const { checkUserSession } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      sessionStorage.removeItem('profileData');
      const loginResponse = await instance.loginPopup(loginRequest);

      // Set the active account after a successful login
      instance.setActiveAccount(loginResponse.account);

      await checkUserSession(); // Perform any session checks
      await RequestProfileData(); // Request profile data only after login completes
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const RequestProfileData = async () => {
    const activeAccount = instance.getActiveAccount();

    if (!activeAccount) {
      console.error('No active account available for acquiring token');
      return;
    }

    try {
      const tokenResponse = await instance.acquireTokenSilent({
        ...loginRequest,
        account: activeAccount,
      });
      const profileData = await callMsGraph(tokenResponse.accessToken);
      console.log('profileData', profileData);

      if (profileData) {
        sessionStorage.setItem('profileData', JSON.stringify(profileData)); // Save to sessionStorage
        navigate('/');
      }
    } catch (error) {
      console.error('Error acquiring token silently:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await instance.logoutPopup({
        postLogoutRedirectUri: '/',
        mainWindowRedirectUri: '/',
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const password = useBoolean();
  const defaultValues = { email: '', password: '' };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderLogo = <AnimateLogo2 sx={{ mb: 3, mx: 'auto' }} />;

  const renderForm = (
    <Box gap={3} display="flex" flexDirection="column">
      {isAuthenticated ? (
        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="Sign in..."
          onClick={handleLogout}
        >
          Sign Out
        </LoadingButton>
      ) : (
        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          loadingIndicator="Sign in..."
          onClick={handleLogin}
        >
          Sign in
        </LoadingButton>
      )}
    </Box>
  );

  return (
    <>
      {renderLogo}

      <FormHead title="Sign in to your account" />

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
      {/* 
      <FormDivider />

      <FormSocials
        signInWithGoogle={() => {}}
        singInWithGithub={() => {}}
        signInWithTwitter={() => {}}
      /> */}
    </>
  );
}
