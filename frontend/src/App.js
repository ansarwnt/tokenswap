import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "dotenv/config";

const CONTRACT_ADDRESS = process.env.REACT_APP_SWAP_CONTRACT_ADDRESS;
const RPC_URL = process.env.REACT_APP_RPC_URL;
const TOKEN_SWAP_ABI = JSON.parse(process.env.REACT_APP_SWAP_CONTRACT_ABI);

const TokenSwap = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(web3Provider);
    } else {
      alert("Please install MetaMask!");
    }
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, TOKEN_SWAP_ABI, signer);
      setContract(contractInstance);
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  };

  const swapTokens = async () => {
    if (!contract) return alert("Connect wallet first!");
    try {
      const tx = await contract.swapTokens(ethers.parseEther(amount));
      await tx.wait();
      alert("Swap successful!");
    } catch (error) {
      console.error("Swap error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Token Swap</h2>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Connected: {account}</p>
      )}
      <input
        type="text"
        placeholder="Amount to swap"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={swapTokens}>Swap Tokens</button>
    </div>
  );
};

export default TokenSwap;
