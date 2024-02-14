import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MainContent({logged, user_id}) {

    const [logged_status, setLoggedStatus] = useState(false);
    
    useEffect(() => {
        setLoggedStatus(logged);
    }, [logged_status, logged])

    return (
        <>
            {
                !logged_status ?
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Bienvenidas a <b>"Twentyeight women’s health"</b> , un foro  de igualdad, innovación y reconocimiento, donde cada una de nuestras voces contribuye al cambio.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Regístrate aquí para confirmar tu asistencia al evento de lanzamiento este <b>21 de febrero a las 9:00 am</b> en la Torre Mayor, piso 51.
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                        to="/registro"
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Registrarse
                                        </Link>
                                        
                                        <Link to="login" className="text-sm font-semibold leading-6 text-gray-900">
                                            Iniciar Sesión&nbsp;<span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : 
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8 lg:py-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <p className="mx-auto mt-2 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Bienvenidas a <b>"Twentyeight women’s health"</b> , un foro  de igualdad, innovación y reconocimiento, donde cada una de nuestras voces contribuye al cambio.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Nos emociona invitarlas a participar en una divertida y enriquecedora trivia femenina, que dará inicio a una dinámica interactiva durante nuestra presentación. Es una oportunidad para divertirse, aprender y conectar con colegas y pioneras de la industria.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Les recordamos que el encuentro será el próximo <b>21 de febrero a las 9:00 am</b> en la Torre Mayor, piso 51. ¡Estamos ansiosas de darles la bienvenida y compartir este día lleno de conocimiento e inspiración!
                                    </p>
                                    <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                                        <Link
                                        to={'/galeria'}
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Galería
                                        </Link>
                                        <Link
                                        to={'/cartera-desc'}
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Trivia Femenina
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )

}

export default MainContent;