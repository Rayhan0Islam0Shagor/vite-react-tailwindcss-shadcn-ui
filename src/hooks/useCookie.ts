import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';

type SetValue<T> = T | ((val: T) => T);

type CookieOptions = Cookies.CookieAttributes;

/**
 * Custom hook for managing cookies with TypeScript support using js-cookie
 * @param key - The cookie key
 * @param initialValue - Initial value if cookie doesn't exist
 * @param options - Cookie options (expires, path, domain, secure, sameSite)
 * @returns [cookieValue, setCookie] tuple
 */
export function useCookie<T>(
  key: string,
  initialValue: T,
  options?: CookieOptions,
): [T, (value: SetValue<T>, newOptions?: CookieOptions) => void] {
  // Helper function to get cookie value
  const getCookie = useCallback((): T => {
    if (typeof document === 'undefined') {
      return initialValue;
    }

    try {
      const cookieValue = Cookies.get(key);
      if (cookieValue === undefined) {
        return initialValue;
      }
      return JSON.parse(cookieValue);
    } catch (error) {
      console.error(`Error reading cookie key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  // State to store our value
  const [cookieValue, setCookieValue] = useState<T>(getCookie);

  // Helper function to set cookie
  const setCookie = useCallback(
    (value: SetValue<T>, newOptions?: CookieOptions) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore =
          value instanceof Function ? value(cookieValue) : value;

        if (typeof document === 'undefined') {
          return;
        }

        // Merge options
        const cookieOptions = { ...options, ...newOptions };

        // Set default path if not provided
        if (!cookieOptions.path) {
          cookieOptions.path = '/';
        }

        // Set cookie using js-cookie
        // js-cookie handles expires as number (days) or Date object
        Cookies.set(key, JSON.stringify(valueToStore), cookieOptions);

        // Update state
        setCookieValue(valueToStore);
      } catch (error) {
        console.error(`Error setting cookie key "${key}":`, error);
      }
    },
    [key, cookieValue, options],
  );

  // Sync cookie value on mount and when key changes
  useEffect(() => {
    setCookieValue(getCookie());
  }, [getCookie]);

  return [cookieValue, setCookie];
}
