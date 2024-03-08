import React from "react";
import LogoAspid from "../assets/images/logo-aspid.jpg";
import { RegistrationForm } from "../components"

function Home({logged_in, user_id}) {
    
    return (
        <div>
            <div className="text-center py-6 px-8">
                <div className="flex align-center justify-center">
                    <img src={LogoAspid} alt="Logo Premios Aspid" className="h-32 md:h-52 w-auto"  />
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold">Conferencia 10 de abril "Twentyeight Women's Health"</h2>
                <p className="text-md p-6 font-semibold">
                    PREMIOS ASPID de Publicidad Iberoamericana de Salud y Farmacia 2024, en su XIX edición Auditorio Museo Soumaya - Blvd. Miguel de Cervantes Saavedra, Granada, Miguel Hidalgo, 11529, Ciudad de México, CDMX
                </p>
                <div className="border-2 p-6 rounded border-principal">
                    <h3 className="font-bold">Workshop Twentyeight Women's Health</h3>
                    <p>
                        Fecha 10 de abril 2024 a las 08:00 hrs
                    </p>
                    <p>
                        Lugar: Museo Soumaya / Auditorio / Blvd. Miguel de Cervantes Saavedra, Granada, Miguel Hidalgo, 11529, Ciudad de México, CDMX
                    </p>
                    <p className="font-bold">
                        INSCRIPCIÓN: $2,500.00 MÁS IVA
                    </p>
                    <p>
                        Inscripcion Individual
                    </p>
                    <p className="text-red-600">
                        Estacionamiento no incluido
                    </p>
                    <p>
                        Cupo Limitado, inscripciones hasta agotar espacio.
                    </p>
                    <p>
                        Datos Bancarios
                    </p>
                    <p>
                        Nombre de la cuenta: <span className="font-bold text-md">FARMA CONVENTIONS S.A. de C.V.</span>
                    </p>
                    <p>
                        Banco: <span className="font-bold text-md">Banorte</span>
                    </p>
                    <p>
                        Número de cuenta: <span className="font-bold text-md">0013136119</span>
                    </p>
                    <p>
                        Cuenta CLABE: <span className="font-bold text-md">072180000131361197</span>
                    </p>
                </div>
            </div>
            <RegistrationForm />
            <div className="text-center py-6 px-8">
                <p>
                    En Farma Conventions S.A. de C.V. sus datos están protegidos, consulte el Aviso de Privacidad correspondiente.
                </p>
                <p>
                    *Al llenar y enviar este formulario, manifiesto que conozco el aviso de privacidad y acepto que le den mis datos personales.
                </p>
                <p>
                    Confirmaciones con Angel Bosch
                </p>
                <p>
                    Favor de requisitar y enviar por correo electrónico: &nbsp;
                    <a
                        href='mailto:a.bosch@farmaindustria.com.mx'
                        target="_blank"
                        rel='noreferrer noopener'
                        className='text-indigo-600'
                    >
                    a.bosch@farmaindustria.com.mx
                    </a> 
                </p>
            </div>
            <div className="py-6 px-8">
                <p>
                    Farma Conventions S.A. de C.V.
                </p>
                <p>
                    <a
                    href='mailto:inscripciones@premiosaspid.mx'
                    target="_blank"
                    rel='noreferrer noopener'
                    className='text-indigo-600'
                    >

                    inscripciones@premiosaspid.mx
                    </a>
                    &nbsp;
                    <a
                        href='mailto:a.bosch@farmaindustria.com.mx'
                        target="_blank"
                        rel='noreferrer noopener'
                        className='text-indigo-600'
                    >
                    a.bosch@farmaindustria.com.mx
                    </a>
                    &nbsp;
                    <a
                        href='tel:+525553537549'
                        target="_blank"
                        rel='noreferrer noopener'
                        className='text-indigo-600'
                    >
                        Tel: 55 5353 7549
                    </a>

                </p>
                <p>
                    <a
                        href='https://wa.me/+525539439648'
                        target="_blank"
                        rel='noreferrer noopener'
                        className='text-green-600'
                    >
                        Whatsapp: 5539439648
                    </a>
                </p>
                <p>
                Eje 3 Norte Calzada San Isidro No. 164 Torre Alcázar Sevilla C Oficina 1305 Col. Industrial San Antonio, Azcapotzalco, Ciudad de México C.P. 02760
                </p>
            </div>
        </div>
    );
}

export default Home;