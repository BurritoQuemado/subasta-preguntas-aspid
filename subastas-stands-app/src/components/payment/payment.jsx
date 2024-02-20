import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

function Payment({ name, balance, user_id }) {

    const initialValues = {
        payment: '',
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [currency, setCurrency] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            setLoading(true);
            setCurrency(parseInt(formValues.payment))
            fetch('https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/updateBalance', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    user_id: user_id,
                    currency: currency * -1,
                })
            })
            .then(response =>{
                if(response.status === 200){
                    setSuccess(true);
                } else {
                    setError(true);
                }
                return response
            } )
        }
    }, [formErrors, formValues, isSubmit, success, error, user_id, currency])

    const validate = (values) => {
        const errors = {};
        
        if(!values.payment) {
            errors.payment = 'El cobro es obligatoria';
        } else if (values.payment > balance){
            errors.payment = 'No se tienen fondos suficientes';
        }
        return errors;
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl lg:text-2xl font-normal tracking-tight text-gray-900 sm:text-4xl"> { name }</h2>                    
                    <h2 className="text-4xl lg:text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:pt-4"> { balance.toLocaleString() } Cryptomonedas</h2>                    
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <form>
                    {
                        error ? 
                        <div className="rounded-md bg-red-50 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">Hubo un error en el cobro, vuela a intentarlo.</h3>
                            </div>
                        </div>
                        </div>
                        : null
                    }
                    {
                        success ? 
                        <>
                            <div className="rounded-md bg-green-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-green-800">Cobro exitoso.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                        : null
                    }
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
                                        Cantidad a cobrar
                                    </label>
                                    <input
                                        type="number"
                                        name="payment"
                                        id="payment"
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                    />
                                    <label htmlFor="payment" className="block text-sm font-medium text-red-600">
                                        {formErrors.payment}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="inline-flex justify-center rounded-md border border-transparent bg-principal py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2"
                            >
                            {loading ? (
                                <svg
                                    className="animate-spin h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    ></circle>
                                    <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                ) : "Cobrar"}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <div className="text-sm">
                        <Link to='/jugadores' className="font-medium text-principal hover:text-principal">
                            Regresar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;