import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { RegistrationsList } from '../components';

function GalleryPage(){

    const [PlayersListData, SetPlayersList] = useState([]);

    useEffect(() => {
        const config = {
            method: 'GET',
            url: "https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/getRegistrations/",
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            SetPlayersList(res.data)
        })

    },[])

    return (
        <>
            <RegistrationsList registration_list={PlayersListData} />
        </>
    )
}

export default GalleryPage;