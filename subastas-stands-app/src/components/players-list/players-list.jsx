import React from "react";


function PlayersList ({ players_list }) {

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Jugadores</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Una lista de los jugadores con su nombre, correo, balance y si ya contestaron o no el cuestionario.
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
                            Nombre
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Correo
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Telefono
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Empresa
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Cargo
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Balance
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Cuestionario
                        </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {players_list.map((person) => (
                        <tr key={person.email}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {person.name} {person.lastname}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.work_place}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.charge}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ person.balance }</td>
                            {
                                person.quiz_try ? <td className="whitespace-nowrap px-3 py-4 text-sm text-red-500"> Sin contestar </td> : <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500"> Contestado </td>
                            }
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

export default PlayersList;