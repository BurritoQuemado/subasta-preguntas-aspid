import React from "react";
import { Link } from "react-router-dom";

function WalletDesc({user_id}) {

    return (
        <>
            <div className="bg-white">
                <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Bienvenido a la Trivia Femenina.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-justify text-gray-600">
                            Aquí podrá consultar la cantidad de cryptomonedas digitales que puede acumular a través de la trivia. Sólo por registrase ya tiene <b>150,000</b> Cryptomonedas.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                            to={'/cartera/'+user_id}
                            className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                            >
                                Ver mis cryptomonedas
                            </Link>
                            <Link
                            to={'/cuestionario/'}
                            className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                            >
                                Ir a la Trivia
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WalletDesc;