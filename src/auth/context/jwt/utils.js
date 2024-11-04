// Import necessary modules
import axios from 'src/utils/axios';
import { paths } from 'src/routes/paths';
import { STORAGE_KEY } from './constant';

// ----------------------------------------------------------------------

export function isValidToken(accessToken) {
  return Boolean(accessToken); // Return true if there is a token
}

// ----------------------------------------------------------------------

export async function setSession(accessToken) {
  try {
    if (accessToken) {
      // Store the token and set it as the default Authorization header for Axios
      sessionStorage.setItem(STORAGE_KEY, accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      // Clear the token from session storage and remove the Axios header if no token
      sessionStorage.removeItem(STORAGE_KEY);
      delete axios.defaults.headers.common.Authorization;
    }
  } catch (error) {
    console.error('Error during set session:', error);
    throw error;
  }
}

// ----------------------------------------------------------------------

// Function to clear the session when it expires or is invalidated
export function clearSessionOnExpiry() {
  try {
    alert('Session expired! Please sign in again.');
    sessionStorage.removeItem(STORAGE_KEY); // Remove token from storage
    window.location.href = paths.auth.jwt.signIn; // Redirect to login page
  } catch (error) {
    console.error('Error clearing session on expiry:', error);
  }
}
