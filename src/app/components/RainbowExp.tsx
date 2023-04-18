"use client"
import React from 'react'
import { 
    googleWallet,
    facebookWallet,
    githubWallet,
    discordWallet,
    twitchWallet,
    twitterWallet,
  } from '@zerodevapp/wagmi/rainbowkit'
  
  import { connectorsForWallets } from '@rainbow-me/rainbowkit'
  import '@rainbow-me/rainbowkit/styles.css';
  
  import {
    getDefaultWallets,
    ConnectButton,
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
  import { configureChains, createClient, WagmiConfig } from 'wagmi';
  import { mainnet, polygonMumbai, optimism, arbitrum } from 'wagmi/chains';
  import { alchemyProvider } from 'wagmi/providers/alchemy';
  import { publicProvider } from 'wagmi/providers/public';

const RainbowExp = () => {
    const connectors = connectorsForWallets([
        {
          groupName: 'Social',
          wallets: [
            googleWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }}),
            facebookWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }}),
            githubWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }}),
            discordWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }}),
            twitchWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }}),
            twitterWallet({options: { projectId: "c7f589d5-740c-41ed-a54f-8007580bc92d" }})
          ],
        },
      ]);
    
      const { chains, provider, webSocketProvider } = configureChains(
        [polygonMumbai],
        [publicProvider()],
      )
      const client = createClient({
        autoConnect: true,
        connectors,
        provider,
        webSocketProvider,
      })
    
      return (
        <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains} modalSize={'compact'}>
                <ConnectButton />
            </RainbowKitProvider>
        </WagmiConfig>
      )
    }

export default RainbowExp