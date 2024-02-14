import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RegisterForm ({ login }) {
    
    const initialValues = {
        name: '',
        lname: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
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
        setLoading(true);
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            fetch('https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formValues.name,
                    lname: formValues.lname,
                    email: formValues.email,
                    password: formValues.password
                })
            })
            .then(response =>{
                if(response.status === 200){
                    setSuccess(true);
                }
                return response
            } )
            .then(res => {
                if(success){
                    login()
                } else {
                    setLoading(false);
                    setError(true);
                }
            })
        }
    }, [formErrors, formValues.name, formValues.password, formValues.email, formValues.confirm_password, formValues.lname, login, isSubmit,success,error])

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(!values.name) {
            errors.name = 'El nombre es obligatorio';
        } else if (values.name.length <= 3) {
            errors.name = 'El nombre debe tener al menos 4 caracteres';
        }

        if(!values.lname) {
            errors.lname = 'El apellido es obligatorio';
        } else if (values.lname.length <= 3) {
            errors.lname = 'El apellido debe tener al menos 4 caracteres';
        }

        if(!values.email) {
            errors.email = 'El correo es obligatorio';
        } else if (!regex.test(values.email)) {
            errors.email = 'Correo invalido';
        }

        if(!values.password) {
            errors.password = 'La contraseña es obligatoria';
        } else if (values.password.length <= 3) {
            errors.password = 'La contraseña debe tener al menos 4 caracteres';
        }

        if(!values.confirm_password) {
            errors.confirm_password = 'La contraseña es obligatoria';
        } else if (values.password.length <= 3) {
            errors.confirm_password = 'La contraseña debe tener al menos 4 caracteres';
        } else if (values.password !== values.confirm_password){
            errors.confirm_password = 'Las contraseñas no coinciden';
        }
        return errors;
    }

    return(
        <>
            <div className="overflow-hidden shadow sm:rounded-md">
                <form>
                {
                    error ? 
                    <div>
                    <label className="block text-sm font-medium text-red-600">
                        Hubo un problema en el registro, intente de nuevo.
                    </label>
                    </div>
                    : null
                }
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Nombre(s)
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="name" className="block text-sm font-medium text-red-600">
                                    {formErrors.name}
                                </label>
                            </div>
        
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="lname" className="block text-sm font-medium text-red-600">
                                    {formErrors.lname}
                                </label>
                            </div>
        
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo Electronico
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="email" className="block text-sm font-medium text-red-600">
                                    {formErrors.email}
                                </label>
                            </div>
    
                            <div className="col-span-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="password" className="block text-sm font-medium text-red-600">
                                    {formErrors.password}
                                </label>
                            </div>


                            <div className="col-span-6">
                                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                    Confirmar Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_pasword"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="confirm_password" className="block text-sm font-medium text-red-600">
                                    {formErrors.confirm_password}
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
                            ) : "Registrarse"}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center mt-4">
                <div className="text-sm">
                    <Link to='/login' className="font-medium text-principal hover:text-principal">
                        Ya tengo una cuenta
                    </Link>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;