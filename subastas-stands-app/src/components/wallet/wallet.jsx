import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Balance
} from "../"

function Wallet({ name, balance, history, user_id, valid_codes}){
    return (
        <>
            <div className="bg-white py-10 lg:py-24 sm:py-32">
                <Balance name={name} balance={balance} />
                <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6 m-16 text-center mx-auto max-w-3xl px-6 lg:px-8">
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
                        Regresar
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Wallet;