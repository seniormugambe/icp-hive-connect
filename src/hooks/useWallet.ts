import { useState, useEffect } from 'react';

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

  useEffect(() => {
    // Check if wallet was previously connected (stored in localStorage)
    const savedWallet = localStorage.getItem('icpWallet');
    if (savedWallet) {
      const parsed = JSON.parse(savedWallet);
      setWallet(prev => ({
        ...prev,
        isConnected: true,
        principal: parsed.principal,
        balance: parsed.balance,
      }));
    }
  }, []);

  const connectWallet = async () => {
    setWallet(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock wallet data
      const mockPrincipal = `rdmx6-jaaaa-aaaah-qcaiq-${Math.random().toString(36).substr(2, 9)}`;
      const mockBalance = Math.random() * 50 + 10; // Random balance between 10-60 ICP
      
      const walletData = {
        principal: mockPrincipal,
        balance: mockBalance,
      };

      // Save to localStorage
      localStorage.setItem('icpWallet', JSON.stringify(walletData));

      setWallet(prev => ({
        ...prev,
        isConnected: true,
        principal: mockPrincipal,
        balance: mockBalance,
        isLoading: false,
      }));
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
    try {
      localStorage.removeItem('icpWallet');
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