import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wallet } from "../components"

function WalletPage() {

    const StoredUserId = window.localStorage.getItem('user_id')
    const [userName, setUserName] = useState("");
    const [userBalance, setUserBalance] = useState(0);


    useEffect(() => {
        const config = {
            method: 'GET',
            url: "https://subasta-viajespalacio-24f6392aae86.herokuapp.com/getUserData/"+StoredUserId,
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            setUserName(res.data.name)
            setUserBalance(parseInt(res.data.balance))
        })

    },[StoredUserId])


    return (
        <Wallet name={userName} balance={userBalance} user_id={StoredUserId} />
    );
}

export default WalletPage;