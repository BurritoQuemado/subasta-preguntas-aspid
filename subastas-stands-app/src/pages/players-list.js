import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { PlayersList } from '../components';

function GalleryPage(){

    const [PlayersListData, SetPlayersList] = useState([]);

    useEffect(() => {
        const config = {
            method: 'GET',
            url: "http://localhost:3000/getUsersInfo/",
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            SetPlayersList(res.data)
        })

    },[PlayersListData])

    return (
        <>
            <PlayersList players_list={PlayersListData} />
        </>
    )
}

export default GalleryPage;