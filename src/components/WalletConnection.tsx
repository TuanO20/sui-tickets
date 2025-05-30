
import React, { useState } from 'react';
import { Wallet, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    setIsConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnected(true);
      setWalletAddress('0x742d35Cc6639C0532fae96b15f5a358cef8A8b16');
      setIsConnecting(false);
    }, 2000);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  if (isConnected) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-green-600">
            <Check className="w-5 h-5" />
            <span>Wallet Connected</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Connected Address:</p>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
              {walletAddress}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-green-600 border-green-200">
              Sui Network
            </Badge>
            <Button variant="outline" size="sm" onClick={disconnectWallet}>
              Disconnect
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Wallet className="w-6 h-6 text-blue-600" />
          <span>Connect Your Sui Wallet</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>Connect your Sui wallet to purchase tickets with SUI tokens.</p>
          <div className="flex items-center justify-center space-x-1 text-orange-600">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs">Make sure you have SUI tokens in your wallet</span>
          </div>
        </div>
        
        <Button 
          onClick={connectWallet}
          disabled={isConnecting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {isConnecting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Connecting...</span>
            </div>
          ) : (
            'Connect Wallet'
          )}
        </Button>
        
        <div className="text-xs text-gray-500 text-center">
          Supports Sui Wallet, Martian Wallet, and other Sui-compatible wallets
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnection;
