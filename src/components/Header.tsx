"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { injected } from "@wagmi/connectors";
import { formatEther } from "viem";

export default function CommonHeader() {
  const [hasMetaMask, setHasMetaMask] = useState(false);
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setHasMetaMask(true);
    }
  }, []);

  return (
    <header className="w-full flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Smart Contract Lottery</h1>
      {!hasMetaMask ? (
        <div className="text-sm text-red-500">Install MetaMask</div>
      ) : !isConnected ? (
        <button
          onClick={() => connect({ connector: injected() })}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700 truncate max-w-[120px]">{address}</span>
          <span className="text-xs text-gray-400">
            {balance?.value ? parseFloat(formatEther(balance.value)).toFixed(6) : "0.000000"}{" "}
            {balance?.symbol}
          </span>
          <button
            onClick={() => disconnect()}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Disconnect
          </button>
        </div>
      )}
    </header>
  );
}
