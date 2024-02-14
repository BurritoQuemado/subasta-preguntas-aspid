import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
    Quiz
} from "../components"
import { Link } from "react-router-dom";


function QuizPage({ user_id}) {

    const STORED_USER = window.localStorage.getItem('user_id');
    const [quiz_try, setQuizTry] = useState(false);

    useEffect(() => {
        const config = {
            method: 'GET',
            url: "https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/getUsersQuizTry/"+STORED_USER,
            headers: { 
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
        };

        axios.request(config)
        .then(res => {
            setQuizTry(res.data.quiz_try)
        })
    });
    
    return (
        <>
            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8 lg:py-2">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="px-6 py-6 sm:px-6 sm:py-32 lg:px-8 lg:py-2">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Trivia Femenina
                            </h2>
                            <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-6 text-gray-600">
                                En esta trivia no se puede retroceder de pregunta, así que elija sabiamente su respuesta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {
                quiz_try ? <Quiz user_id={user_id}/> :
                <>
                <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8 lg:py-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="px-6 py-6 sm:px-6 sm:py-32 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <p className="mx-auto mt-2 max-w-xl text-lg font-semibold text-center leading-6 text-gray-600">
                                    Lo sentimos, pero ya ha contestado la Trivia Femenina y solo hay un intento.
                                </p>
                            </div>
                        </div>
                        <Link
                        to={'/cartera/'+user_id}
                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                        >
                            Regresar
                        </Link>
                    </div>
                </div>
                </>
            }
            
        </>
    );
}

export default QuizPage;