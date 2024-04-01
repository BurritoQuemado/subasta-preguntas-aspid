import React from "react";

function RegistrationsList ({ registration_list }) {

    const sortedPlayers = [...registration_list].sort((a, b) => a.name < b.name ? -1 : 1 );

    return (
        <>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Jugadores</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Una lista de las persona registradas.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Nombre(s)
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Apellido Paterno
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Apellido Materno
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Cargo
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Departamento
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Empresa
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Giro/Actividad de la Empresa
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Dirección de la Empresa
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Website
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Datos de contacto
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Otros seminarios
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Comunicación
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {sortedPlayers.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{person.name}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{person.fathers_name}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{person.mothers_name}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.charge}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.department}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.company}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.company_field}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {person.street},{person.suburb},{person.district},{person.state},{person.postal_code},{person.country}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-500">
                                            <a
                                                href={person.website}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                {person.website}
                                            </a>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <ul>
                                                <li>Email: {person.email}</li>
                                                <li>Teléfono: {person.telephone}</li>
                                                <li>Fax: {person.fax}</li>
                                                <li>Celular: {person.mobile}</li>
                                            </ul>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.other_topics}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <ul>
                                                { person.direct_email?  <li>Email Directo</li> : null}
                                                { person.magazine?  <li>Revista</li> : null}
                                                { person.web?  <li>Sitio web</li> : null}
                                                { person.mailing?  <li>Campaña de correo</li> : null}
                                                { person.press?  <li>Prensa</li> : null}
                                                { person.other?  <li>Otro</li> : null}
                                            </ul>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default RegistrationsList;