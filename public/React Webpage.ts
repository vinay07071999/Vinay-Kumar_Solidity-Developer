// Install required dependencies before running the React app:
// npm install web3 react-web3-hook

import React, { useState, useEffect } from 'react';
import { useWeb3 } from 'react-web3-hook';

const AirdropPage = () => {
    const web3 = useWeb3();
    const [contract, setContract] = useState(null);
    const [token, setToken] = useState('');
    const [amount, setAmount] = useState('');
    const [recipients, setRecipients] = useState('');

    useEffect(() => {
        // Initialize the contract with its address
        const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        const contractInstance = new web3.eth.Contract(CONTRACT_ABI, contractAddress);
        setContract(contractInstance);
    }, [web3]);

    const handleAirdrop = async () => {
        try {
            await contract.methods.executeAirdrop(token, amount, recipients.split(',')).send({ from: web3.eth.accounts[0] });
            alert('Airdrop successful!');
        } catch (error) {
            alert('Airdrop failed: ' + error.message);
        }
    };

    return (
        <div>
            <h1>Airdrop Page</h1>
            <label>
                Token Address:
                <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
            </label>
            <br />
            <label>
                Airdrop Amount:
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <br />
            <label>
                Recipients (comma-separated addresses):
                <input type="text" value={recipients} onChange={(e) => setRecipients(e.target.value)} />
            </label>
            <br />
            <button onClick={handleAirdrop}>Execute Airdrop</button>
        </div>
    );
};

export default AirdropPage;
