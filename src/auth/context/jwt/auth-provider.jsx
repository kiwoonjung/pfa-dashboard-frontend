import { useMemo, useEffect, useCallback } from 'react';
import { useSetState } from 'src/hooks/use-set-state';
import { STORAGE_KEY } from './constant';
import { AuthContext } from '../auth-context';
import { setSession, isValidToken } from './utils';

// ----------------------------------------------------------------------

export function AuthProvider({ children }) {
  const { state, setState } = useSetState({
    user: null,
    loading: true,
  });

  const checkUserSession = useCallback(() => {
    const accessToken = sessionStorage.getItem(STORAGE_KEY);
    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken);
      setState({ user: { accessToken }, loading: false });
    } else {
      setState({ user: null, loading: false });
    }
  }, [setState]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user ? { ...state.user, role: state.user?.role ?? 'admin' } : null,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      checkUserSession, // Expose this function to the context
    }),
    [state.user, status, checkUserSession]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
