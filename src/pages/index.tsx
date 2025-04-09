"use client"; // Enables client-side rendering for this component

import Head from "next/head";
import CommonHeader from "@/components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Head metadata for the page */}
      <Head>
        <title>Smart Contract Lottery</title>
        <meta
          name="description"
          content="A smart contract lottery built with Next.js and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reusable header component, includes connection component */}
      <CommonHeader />

      {/* Main content section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-2xl font-semibold">Welcome to the Lottery DApp</h2>
        <p className="text-gray-500">Connect your wallet from the header to get started.</p>
      </main>
    </div>
  );
}
