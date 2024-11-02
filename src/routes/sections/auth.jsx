import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthCenteredLayout } from 'src/layouts/auth-centered';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

/** **************************************
 * Centered layout
 *************************************** */

const CenteredLayout = {
  SignInPage: lazy(() => import('src/pages/auth-demo/centered/sign-in')),
  // Additional pages can be added back here if needed
};

const authCentered = {
  element: (
    <AuthCenteredLayout>
      <Outlet />
    </AuthCenteredLayout>
  ),
  children: [{ path: 'sign-in', element: <CenteredLayout.SignInPage /> }],
};

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: '/',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [authCentered],
  },
];
