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
                                        Le damos la bienvenida a esta galería única en el mundo.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Esta aplicación le servirá para ser envuelto en una dinámica <b>crypto-artística</b>, por lo que te solicitaremos algunos datos únicamente con el fin lúdico de reconocer tu participación.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg text-justify leading-8 text-gray-600">
                                        Si es la primera vez que ingresa, haga click en el botón <b>registrarse</b>, si ya ingresó anteriormente, haga click en <b>Iniciar sesión</b>
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                        <Link
                                        to="/registro"
                                        className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                        >
                                            Registrarse
                                        </Link>
                                        
                                        <Link to="login" className="text-sm font-semibold leading-6 text-gray-900">
                                            Iniciar Sesión<span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : 
                    <>
                        <div className="bg-white">
                            <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                                <div className="mx-auto max-w-2xl text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        Muchas gracias por ser parte del evento de lanzamiento de 28 Women’s Health.
                                    </h2>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        Participa en una sencilla dinámica respondiendo una trivia sobre mujeres famosas  que te permitirá canjearlo por una  de las obras  de nuestra colección de arte  de lanzamiento.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        <b>Galería</b> es un recorrido por las distintas obras que puede encontrar en nuestra galería.
                                    </p>
                                    <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                        <b>Cartera</b> Es una cartera de monedas digitales que podrá adquirir contestando las preguntas del cuestionario y usarlas el día del evento, para subastar por alguna de las obras.
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
                                            Cartera Cryptomonedas
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