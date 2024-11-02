import { Navigate, useRoutes } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, useIsAuthenticated } from '@azure/msal-react';
import { CONFIG } from 'src/config-global';
import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';
import { msalConfig } from '../../../authConfig';

// ----------------------------------------------------------------------

const msalInstance = new PublicClientApplication(msalConfig);

export function Router() {
  const isAuthenticated = useIsAuthenticated();

  const routes = useRoutes([
    {
      path: '/',
      element: isAuthenticated ? (
        <Navigate to={CONFIG.auth.redirectPath} replace />
      ) : (
        <Navigate to="/sign-in" replace />
      ),
    },
    // Conditionally render routes based on authentication status
    ...(isAuthenticated ? [...dashboardRoutes, ...mainRoutes] : authRoutes),

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

  return <MsalProvider instance={msalInstance}>{routes}</MsalProvider>;
}
