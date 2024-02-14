import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

function RegisterForm ({ login }) {
    
    const initialValues = {
        name: '',
        lname: '',
        email: '',
        charge: '',
        work_place: '',
        phone: '',
        password: '',
        privacy: false,
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
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            setLoading(true);
            fetch('https://subasta-preguntas-aspid-e16826bf4816.herokuapp.com/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formValues.name,
                    lname: formValues.lname,
                    email: formValues.email,
                    work_place: formValues.work_place,
                    charge: formValues.charge,
                    phone: formValues.phone,
                    password: formValues.password
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
    }, [formErrors, formValues, login, isSubmit,success,error])

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
        if(!values.work_place) {
            errors.work_place = 'La empresa es obligatoria';
        } else if (values.work_place <= 3) {
            errors.work_place = 'La empresa debe tener al menos 4 caracteres';
        }
        if(!values.charge) {
            errors.charge = 'El cargo es obligatorio';
        } else if (values.charge.length <= 3) {
            errors.charge = 'El cargo debe tener al menos 4 caracteres';
        }
        if(!values.phone) {
            errors.phone = 'El teléfono es obligatorio';
        } else if (values.phone.length < 10) {
            errors.phone = 'El teléfono debe tener al menos 10 caracteres';
        } else if (values.phone.length > 15) {
            errors.phone = 'El teléfono no debe tener más 15 caracteres';
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

        if(!values.privacy) {
            errors.privacy = 'Debe aceptar el Aviso de Privacidad';
        }
        return errors;
    }

    return(
        <>
            <div className="overflow-hidden shadow sm:rounded-md">
                <form>
                {
                    error ? 
                    <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Hubo un error en el registro, vuela a intentarlo.</h3>
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
                                    <p className="text-sm font-medium text-green-800">Gracias, tu registro ha sido confirmado.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6">                            
                            <Link to="/login" className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal">
                                Iniciar Sesión
                            </Link>
                        </div>
                    </>
                    : null
                }
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
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
        
                            <div className="col-span-6">
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

                            <div className="col-span-6">
                                <label htmlFor="work_place" className="block text-sm font-medium text-gray-700">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    name="work_place"
                                    id="nawork_placee"
                                    autoComplete="organization"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="work_place" className="block text-sm font-medium text-red-600">
                                    {formErrors.work_place}
                                </label>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="charge" className="block text-sm font-medium text-gray-700">
                                    Cargo
                                </label>
                                <input
                                    type="text"
                                    name="charge"
                                    id="charge"
                                    autoComplete="organization-title"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="charge" className="block text-sm font-medium text-red-600">
                                    {formErrors.charge}
                                </label>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="phone" className="block text-sm font-medium text-red-600">
                                    {formErrors.phone}
                                </label>
                            </div>
        
                            <div className="col-span-6">
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
                            <div class="col-span-6">
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input
                                        id="privacy"
                                        aria-describedby="comments-description"
                                        name="privacy"
                                        type="checkbox"
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-600 text-principal focus:principal"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <label htmlFor="privacy" className="font-medium text-gray-900">
                                            Acepto el <a className="text-principal" href="https://www.premiosaspid.mx/legal/avisolegal" target="_blank" rel="noreferrer" > &nbsp;Aviso de Privacidad</a>
                                        </label>
                                    </div>
                                </div>
                                <label htmlFor="privacy" className="block text-sm font-medium text-red-600">
                                    {formErrors.privacy}
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