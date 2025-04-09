"use client"; // Ensure this component runs on the client side

import Web3ConnectComponent from "@/components/Web3ConnectComponent";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 border-b">
      {/* DApp title */}
      <h1 className="text-xl font-bold">Smart Contract Lottery</h1>

      {/* Web3 connection component */}
      <Web3ConnectComponent />
    </header>
  );
}
