import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PaymentComponent } from "../components"

function PaymentPage() {

    const { user_id } = useParams()
    const [userName, setUserName] = useState("");
    const [userBalance, setUserBalance] = useState(0);


    useEffect(() => {
        const config = {
            method: 'GET',
            url: "https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/getUserData/"+user_id,
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

    },[])


    return (
        <PaymentComponent name={userName} balance={parseInt(userBalance)} user_id={user_id} />
    );
}

export default PaymentPage;