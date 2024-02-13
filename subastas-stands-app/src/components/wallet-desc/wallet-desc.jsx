import React from "react";
import { Link } from "react-router-dom";

function WalletDesc({user_id}) {

    return (
        <>
            <div className="bg-white">
                <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Bienvenido a su cartera digital de Cryptomonedas.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-justify text-gray-600">
                            Aquí podrá consultar la cantidad de monedas digitales que irá acumulando a través del cuestionario que se presentará al final de la premiación. Sólo por registrase ya tiene <b>1,500</b> Cryptomonedas.
                        </p>
                        <p className="mx-auto mt-6 max-w-xl text-m leading-8 text-justify text-gray-600">
                            Con estas monedas podrá ofertar en la subasta del arte que se encuentra en el recinto.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                            to={'/cartera/'+user_id}
                            className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                            >
                                Ver mi cartera
                            </Link>
                            <Link
                            to={'/cuestionario/'}
                            className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                            >
                                Ir al cuestionario
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WalletDesc;