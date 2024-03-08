import React, { useState, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'

function RegistrationForm () {
    
    const initialValues = {
        name: '',
        fathers_name: '',
        mothers_name: '',
        charge: '',
        department: '',
        company: '',
        company_field: '',
        street: '',
        suburb: '',
        state: '',
        district: '',
        postal_code: '',
        country: '',
        website: '',
        telephone: '',
        fax: '',
        mobile: '',
        email: '',
        other_topics: '',
        direct_email: false,
        magazine: false, 
        web: false,
        mailing: false,
        press: false,
        other: false
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
        console.log(formValues);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            setLoading(true);
            fetch('http://localhost:3000/newRegistration', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: formValues.name,
                    fathers_name: formValues.fathers_name,
                    mothers_name: formValues.mothers_name,
                    charge: formValues.charge,
                    department: formValues.department,
                    company: formValues.company,
                    company_field: formValues.company_field,
                    street: formValues.street,
                    suburb: formValues.suburb,
                    state: formValues.state,
                    district: formValues.district,
                    postal_code: formValues.postal_code,
                    country: formValues.country,
                    website: formValues.website,
                    telephone: formValues.telephone,
                    fax: formValues.fax,
                    mobile: formValues.mobile,
                    email: formValues.email,
                    other_topics: formValues.other_topics,
                    direct_email: formValues.direct_email,
                    magazine: formValues.magazine,
                    web: formValues.web,
                    mailing: formValues.mailing,
                    press: formValues.press,
                    other: formValues.other
                })
            })
            .then(response =>{
                if(response.status === 200){
                    setSuccess(true);
                } else {
                    setError(true);
                }
                return response
            })
            .then(response => {
                setIsSubmit(false);
                setLoading(false);
                setFormValues(initialValues);
                console.log(response);
            })
        }
    }, [formErrors, formValues, isSubmit])

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(!values.name) {
            errors.name = 'El nombre es obligatorio';
        } else if (values.name.length <= 3) {
            errors.name = 'El nombre debe tener al menos 4 caracteres';
        }

        if(!values.fathers_name) {
            errors.fathers_name = 'El apellido paterno es obligatorio';
        } else if (values.fathers_name.length <= 3) {
            errors.fathers_name = 'El apellido paterno debe tener al menos 4 caracteres';
        }

        if(!values.mothers_name) {
            errors.mothers_name = 'El apellido materno es obligatorio';
        } else if (values.mothers_name.length <= 3) {
            errors.mothers_name = 'El apellido materno debe tener al menos 4 caracteres';
        }

        if(!values.company) {
            errors.company = 'La empresa es obligatoria';
        } else if (values.company <= 3) {
            errors.company = 'La empresa debe tener al menos 4 caracteres';
        }

        if(!values.charge) {
            errors.charge = 'El cargo es obligatorio';
        } else if (values.charge.length <= 3) {
            errors.charge = 'El cargo debe tener al menos 4 caracteres';
        }

        if(!values.department) {
            errors.department = 'El departamento es obligatorio';
        } else if (values.department <= 3) {
            errors.department = 'El departamento debe tener al menos 4 caracteres';
        }

        if(!values.company_field) {
            errors.company_field = 'El giro o actividad de la empresa es obligatorio';
        } else if (values.company_field <= 3) {
            errors.company_field = 'El giro o actividad de la empresa debe tener al menos 4 caracteres';
        }

        if(!values.street){
            errors.street = 'La calle es obligatoria';
        } else if (values.street.length <= 3) {
            errors.street = 'La calle debe tener al menos 4 caracteres';
        }

        if(!values.suburb) {
            errors.suburb = 'La colonia es obligatoria'
        } else if (values.street.length <= 3) {
            errors.suburb = 'La colonia debe tener al menos 4 caracteres'
        }

        if(!values.state) {
            errors.state = 'El estado es obligatorio'
        } else if (values.state.length <= 3) {
            errors.state = 'El estado debe tener al menos 4 caracteres'
        }

        if(!values.district) {
            errors.district = 'La delegación o municipio es obligatorio'
        } else if (values.district.length <= 3) {
            errors.district = 'La delegación o municipio debe tener al menos 4 caracteres'
        } else if (values.district.length >= 101) {
            errors.district = 'La delegación o municipio debe tener menos de 100 caracteres'
        }

        if(!values.postal_code) {
            errors.postal_code = 'El código postal es obligatorio'
        } else if (values.postal_code.length <= 3) {
            errors.postal_code = 'El código postal debe tener al menos 4 caracteres'
        } else if (values.postal_code.length >= 9) {
            errors.postal_code = 'El código postal no debe tener más de 9 caracteres'
        }

        if(!values.country) {
            errors.country = 'El país es obligatorio'
        } else if (values.country.length <= 3) {
            errors.country = 'El país debe tener al menos 4 caracteres'
        }

        if(!values.website){
            errors.website = 'El sitio web es obligatorio'
        } else if (values.website.length <= 3) {
            errors.website = 'El sitio web debe de tener al menos 3 caracteres'
        }

        if(!values.telephone){
            errors.telephone = 'El teléfono es obligatorio'
        } else if (values.telephone.length < 10) {
            errors.telephone = 'El teléfono debe de tener al menos 3 caracteres'
        } else if (values.telephone.length > 15) {
            errors.telephone = 'El teléfono no debe de tener más de 15 caracteres'
        }

        if(!values.fax) {
            errors.fax = 'El fax es obligatorio'
        } else if (values.fax.length <= 3) {
            errors.fax = 'El fax debe de tener al menos 3 caracteres'
        }

        if(!values.mobile) {
            errors.mobile = 'El celular es obligatorio';
        } else if (values.mobile.length < 10) {
            errors.mobile = 'El celular debe tener al menos 10 caracteres';
        } else if (values.mobile.length > 15) {
            errors.mobile = 'El celular no debe tener más 15 caracteres';
        }

        if(!values.email) {
            errors.email = 'El correo es obligatorio';
        } else if (!regex.test(values.email)) {
            errors.email = 'Correo invalido';
        }

        return errors;
    }

    return(
        <>
            <div className="overflow-hidden shadow sm:rounded-md">
                <form>
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <h2 className=" lg:cols-span-3 text-base font-semibold text-gray-900">Información Personal</h2>
                            <div className="lg:col-span-3">
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
        
                            <div className="lg:col-span-3">
                                <label htmlFor="fathers_name" className="block text-sm font-medium text-gray-700">
                                    Apellido Paterno
                                </label>
                                <input
                                    type="text"
                                    name="fathers_name"
                                    id="fathers_name"
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="fathers_name" className="block text-sm font-medium text-red-600">
                                    {formErrors.fathers_name}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="mothers_name" className="block text-sm font-medium text-gray-700">
                                    Apellido Materno
                                </label>
                                <input
                                    type="text"
                                    name="mothers_name"
                                    id="mothers_name"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="mothers_name" className="block text-sm font-medium text-red-600">
                                    {formErrors.mothers_name}
                                </label>
                            </div>

                            <h2 className=" cols-span-6 text-base font-semibold leading-7 text-gray-900">Información de la Empresa</h2>
                            <div className="lg:col-span-3">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    autoComplete="organization"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="company" className="block text-sm font-medium text-red-600">
                                    {formErrors.company}
                                </label>
                            </div>
                            
                            <div className="lg:col-span-3">
                                <label htmlFor="company_field" className="block text-sm font-medium text-gray-700">
                                    Giro o actividad de la empresa
                                </label>
                                <input
                                    type="text"
                                    name="company_field"
                                    id="company_field"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="company_field" className="block text-sm font-medium text-red-600">
                                    {formErrors.company_field}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
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

                            <div className="lg:col-span-3">
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                    Departamento
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="department" className="block text-sm font-medium text-red-600">
                                    {formErrors.department}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                                    Calle y número
                                </label>
                                <input
                                    type="text"
                                    name="street"
                                    id="street"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="street" className="block text-sm font-medium text-red-600">
                                    {formErrors.street}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="suburb" className="block text-sm font-medium text-gray-700">
                                    Colonia
                                </label>
                                <input
                                    type="text"
                                    name="suburb"
                                    id="suburb"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="suburb" className="block text-sm font-medium text-red-600">
                                    {formErrors.suburb}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                    Ciudad o Estado
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="state" className="block text-sm font-medium text-red-600">
                                    {formErrors.state}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                                    Delegación o Municipio
                                </label>
                                <input
                                    type="text"
                                    name="district"
                                    id="district"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="district" className="block text-sm font-medium text-red-600">
                                    {formErrors.district}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                                    Código Postal
                                </label>
                                <input
                                    type="text"
                                    name="postal_code"
                                    id="postal_code"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="postal_code" className="block text-sm font-medium text-red-600">
                                    {formErrors.postal_code}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    País
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    id="country"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="country" className="block text-sm font-medium text-red-600">
                                    {formErrors.country}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                    Sitio Web
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="https://www.example.com"
                                    id="website"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="website" className="block text-sm font-medium text-red-600">
                                    {formErrors.website}
                                </label>
                            </div>

                            <h2 className=" cols-span-6 text-base font-semibold leading-7 text-gray-900">Información de Contacto</h2>
                            <div className="lg:col-span-3">
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Teléfono Celular
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    id="mobile"
                                    autoComplete="tel"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="mobile" className="block text-sm font-medium text-red-600">
                                    {formErrors.mobile}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    name="telephone"
                                    id="telephone"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="telephone" className="block text-sm font-medium text-red-600">
                                    {formErrors.telephone}
                                </label>
                            </div>

                            <div className="lg:col-span-3">
                                <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
                                    Fax
                                </label>
                                <input
                                    type="tel"
                                    name="fax"
                                    id="fax"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="fax" className="block text-sm font-medium text-red-600">
                                    {formErrors.fax}
                                </label>
                            </div>
        
                            <div className="lg:col-span-3">
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
                            <h2 className=" cols-span-6 text-base font-semibold leading-7 text-gray-900">Próximos talleres en seminarios</h2>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                                Deseando mantener siempre programas de actualidad e interés, por favor indiquenos que temas desea que se tomen en cuenta para futuros seminarios.
                            </p>
                            <div className="lg:col-span-3">
                                <label htmlFor="other_topics" className="block text-sm font-medium text-gray-700">
                                    Otros seminarios
                                </label>
                                <input
                                    type="text"
                                    name="other_topics"
                                    id="other_topics"
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-principal focus:ring-principal sm:text-sm"
                                />
                                <label htmlFor="other_topics" className="block text-sm font-medium text-red-600">
                                    {formErrors.other_topics}
                                </label>
                            </div>
                            <fieldset name="found_about" onChange={handleChange}>
                                <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-direct-email"
                                    name="direct_email"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-direct-email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Correo Directo
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-magazine"
                                    name="magazine"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-magazine" className="block text-sm font-medium leading-6 text-gray-900">
                                        Revista
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-website"
                                    name="web"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-website" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sitio Web
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-mailing"
                                    name="mailing"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-mailing" className="block text-sm font-medium leading-6 text-gray-900">
                                        Comunicados vía e-mail
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-press"
                                    name="press"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-press" className="block text-sm font-medium leading-6 text-gray-900">
                                        Prensa
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                    id="push-other"
                                    name="other"
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 text-principal focus:ring-principal"
                                    />
                                    <label htmlFor="push-other" className="block text-sm font-medium leading-6 text-gray-900">
                                        Otro
                                    </label>
                                </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    {
                    error ? 
                    <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Hubo un error, vuelva a intentarlo.</h3>
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
                    </>
                    : null
                }
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
                            ) : "Enviar"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default RegistrationForm;