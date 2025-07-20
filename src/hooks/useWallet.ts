import { useState, useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { Actor, HttpAgent } from '@dfinity/agent';

interface WalletState {
  isConnected: boolean;
  principal: string | null;
  balance: number;
  isLoading: boolean;
  error: string | null;
}

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    principal: null,
    balance: 0,
    isLoading: false,
    error: null,
  });

  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  useEffect(() => {
    initAuthClient();
  }, []);

  const initAuthClient = async () => {
    try {
      const client = await AuthClient.create();
      setAuthClient(client);
      
      const isAuthenticated = await client.isAuthenticated();
      if (isAuthenticated) {
        const identity = client.getIdentity();
        const principal = identity.getPrincipal().toString();
        setWallet(prev => ({
          ...prev,
          isConnected: true,
          principal,
          balance: Math.random() * 100, // Mock balance
        }));
      }
    } catch (error) {
      console.error('Error initializing auth client:', error);
      setWallet(prev => ({ ...prev, error: 'Failed to initialize wallet' }));
    }
  };

  const connectWallet = async () => {
    if (!authClient) return;

    setWallet(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      await authClient.login({
        identityProvider: 'https://identity.ic0.app/#authorize',
        onSuccess: () => {
          const identity = authClient.getIdentity();
          const principal = identity.getPrincipal().toString();
          setWallet(prev => ({
            ...prev,
            isConnected: true,
            principal,
            balance: Math.random() * 100, // Mock balance
            isLoading: false,
          }));
        },
        onError: (error) => {
          console.error('Login failed:', error);
          setWallet(prev => ({
            ...prev,
            isLoading: false,
            error: 'Failed to connect wallet',
          }));
        },
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWallet(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to connect wallet',
      }));
    }
  };

  const disconnectWallet = async () => {
    if (!authClient) return;

    try {
      await authClient.logout();
      setWallet({
        isConnected: false,
        principal: null,
        balance: 0,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const formatPrincipal = (principal: string) => {
    if (principal.length <= 10) return principal;
    return `${principal.slice(0, 5)}...${principal.slice(-5)}`;
  };

  return {
    ...wallet,
    connectWallet,
    disconnectWallet,
    formatPrincipal,
  };
};