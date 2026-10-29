import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import { GiTeamIdea } from "react-icons/gi";
import { PiMathOperationsBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const servicios = [
    {
        name: "Pintura",
        img: "/pintura.jpg",
        description: "Por dentro o por fuera, le damos a tus paredes la cara nueva que se merecen. Con mimo en los detalles y sin dejarte la casa hecha un desastre."
    },
    {
        name: "Reformas",
        img: "/reformas.jpg",
        description: "Tu casa o tu local, como siempre lo has querido. Nos cuentas la idea, la ajustamos a tu bolsillo y nos ponemos manos a la obra."
    },
    {
        name: "Albañilería",
        img: "/albañileria.jpg",
        description: "Desde ese arreglo que lleva meses esperando hasta un suelo nuevo. Trabajo bien hecho, de los que se ven y de los que no se ven."
    },
    {
        name: "Revestimientos",
        img: "/revestimiento.jpg",
        description: "Un buen revestimiento cambia una habitación entera. Te ayudamos a elegir el acabado que mejor le va a tu espacio y a tu estilo."
    },
    {
        name: "Impermeabilización",
        img: "/impermeabilizacion.jpg",
        description: "¿Humedades, manchas en el techo, goteras cuando llueve? Las atajamos de raíz para que vuelvas a olvidarte del problema."
    },
    {
        name: "Trabajos a medida",
        img: "/trabajo_medida.jpg",
        description: "Si lo tienes en la cabeza, lo hacemos realidad. Cuéntanos qué necesitas y lo planteamos juntos, con garantía y sin florituras."
    },
]

function ServiciosView({servicioActual, setServicioActual})
{
    return (
        <section className="flex flex-col mt-4 items-center lg:h-screen">
            <h1 className="text-3xl font-bold text-left ml-4 mb-2 lg:text-6xl">Nuestros servicios</h1>
            <hr className="h-1 w-85 lg:w-300 bg-orange-900 mb-10 mt-3 mx-auto"/>
            < ServiciosViewTarjetas />
            < ServiciosViewCarrusel servicioActual={servicioActual} setServicioActual={setServicioActual} />
        </section>
    )
}

function ServiciosViewCarrusel({servicioActual, setServicioActual})
{
    return (
        <div className="lg:hidden flex flex-col">
            <div className="flex flex-col lg:justify-center lg:gap-x-20 lg:mt-10">
                <div className="relative flex text-center items-center lg:w-[50%] lg:justify-center ">
                    <button className={`absolute z-50 left-2 bg-black py-3 px-4 rounded-full opacity-70 text-white font-bold ${servicioActual === 0 ? "invisible" : "visible"}`}
                            onClick={() => {
                                if (servicioActual > 0) setServicioActual(servicioActual - 1);
                            }}>
                        <FaArrowRight className="rotate-180"/>
                    </button>
                    <img src={servicios[servicioActual].img} alt="" className="contain-content "/>
                    <button className={`absolute z-50 right-2 bg-black py-3 px-4 rounded-full opacity-70 text-white font-bold ${servicioActual === servicios.length - 1 ? "invisible" : "visible"}`}
                            onClick={() => {
                                if (servicioActual < servicios.length - 1) setServicioActual(servicioActual + 1);
                            }}><FaArrowRight />
                    </button>
                </div>
                <div className="mt-4 mb-4 text-wrap ml-4">
                    <p className="text-xl font-bold lg:text-4xl">{servicios[servicioActual].name}</p>
                    <p className="text-lg lg:w-100 lg:text-2xl lg:mt-4">{servicios[servicioActual].description}</p>
                </div>
            </div>

            <div className="flex justify-center gap-x-2">
                {servicios.map((servicio, index) => {
                    return (
                        <button className={`rounded-full size-2 lg:size-6 lg:mt-6 cursor-pointer ${servicioActual === index ? "bg-black" : "bg-gray-300"}`} key={index}
                             onClick={() => {setServicioActual(index)}}>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
function ServiciosViewTarjetas()
{
    return (
        <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-x-10 gap-y-10">
            {servicios.map((servicio) => {
                return (
                    <div key={servicio.name} className={"group w-90 outline-1 rounded-2xl p-2 hover:-translate-y-8 transition-transform ease-in-out duration-300"}>
                        <img src={servicio.img} alt="" className={"rounded-2xl"}/>
                        <h2 className={"text-2xl font-bold group-hover:text-orange-900"}>{servicio.name}</h2>
                        <p className={"text-lg "}>{servicio.description}</p>
                    </div>
                )
            })}

        </div>
    )
}

function App() {
    const [servicioActual, setServicioActual] = useState(0);
    return (
    <>
        <Header />
        <section className="w-full h-screen mx-auto relative justify-center mask-b-from-80% mask-t-from-80% ">
            <img className="absolute inset-0 w-full h-full object-cover" src="/hombre_pintando.jpg"/>
            <div className="flex flex-col mx-auto text-center justify-center gap-y-4 items-center absolute inset-0 bg-black/50 text-white lg:max-w-300 lg:mask-l-from-80% lg:mask-r-from-80% ">
                <h1 className="text-3xl font-bold lg:text-7xl max-w-80 lg:max-w-220">¿Cuánto costaría la reforma que tienes en mente?</h1>
                <h2 className="text-2xl lg:text-5xl max-w-80 lg:max-w-150">En ISI te ayudamos a valorar tu proyecto. Solicita tu presupuesto gratis y sin compromiso.</h2>
                <div className="flex justify-center gap-x-8 mx-5 lg:gap-x-60 lg:mt-10">
                    <button className="p-3 hover:bg-white/80 transition duration-500 ease-in-out hover:text-orange-900 bg-orange-900 lg:rounded-4xl rounded-2xl text-white font-bold outline-2 outline-black hover:text-shadow hover:shadow-xl lg:text-4xl lg:p-5"
                    onClick={() => {window.location.href = "tel:+34676055670"}}>Quiero mi <br/>presupuesto</button>
                </div>
            </div>
        </section>
        <section className="mt-4 flex flex-col lg:flex lg:flex-row lg:w-[95%] lg:mx-auto lg:mt-40 lg:mb-20 justify-center items-center lg:gap-x-12 lg:h-screen">
            <div className="lg: flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl font-bold ml-4 text-center lg:text-6xl">Sobre nosotros</h1>
                <div className="h-1 w-60 lg:w-140 bg-orange-900 mx-auto lg:mt-2 lg:mb-10"></div>
                <img src="/reformas.jpg" className="hidden lg:block w-400"/>
            </div>
            <p className="mx-4 text-lg lg:text-4xl lg:w-300">En <span className="font-bold text-orange-900">ISI</span> damos color a tus ideas. Realizamos trabajos de pintura, reformas y soluciones para hogares y locales, con un trato cercano, calidad garantizada y presupuesto sin compromiso. Tu espacio, nuestra obra.</p>
        </section>
        <section className="mt-4 lg:mt-20 lg:mb-20 lg:h-screen">
            <h1 className="text-3xl font-bold text-center lg:text-6xl">¿Por qué elegirnos?</h1>
            <div className="h-1 w-80 lg:w-175 bg-orange-900 mx-auto lg:mt-5"></div>
            <div className="lg:flex lg:gap-x-10 lg:justify-center">
                <div className="flex justify-center my-auto ml-4">
                    <ul className="list-inside text-lg mt-4 lg:text-4xl lg:ml-5 lg:mt-10 lg:grid lg:grid-cols-2 lg:grid-rows-2">
                        <li className="lg:max-w-130">
                            <p className="font-bold">Presupuesto sin compromiso</p>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Nos cuentas qué necesitas, lo vemos contigo y te damos un precio claro. Si no te encaja, no pasa nada.</p>
                        </li>

                        <li className={"lg:max-w-130"}>
                            <p className="font-bold">Trato directo y cercano</p>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Hablas con las personas que van a hacer el trabajo, sin intermediarios ni vueltas. Te explicamos todo con palabras normales.</p>
                        </li>
                        <li className={"lg:max-w-130"}>
                            <p className="font-bold">Trabajo bien hecho y con garantía</p>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Cuidamos cada detalle y respondemos por lo que hacemos. Si algo no queda como debe, lo arreglamos.</p>
                        </li>
                        <li className={"lg:max-w-130"}>
                            <p className="font-bold">Experiencia y confianza</p>
                            <p className="text-sm mx-6 lg:text-3xl lg:mb-20 wrap-anywhere">Sabemos lo que es entrar en tu casa o en tu negocio, y lo tratamos como si fuera nuestro.</p>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-center mt-4 lg:text-4xl lg:mb-10">Como trabajamos</h2>
                    <div className="flex flex-col text-lg mt-4 mx-4 gap-y-4 lg:text-3xl lg:justify-center lg:items-center">
                        <div className="flex flex-col items-center lg:items-start">
                            <GiTeamIdea className="size-15 lg:size-25 lg:mx-auto fill-orange-900"/>
                            <p className="">1.Hablamos de tu idea</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <PiMathOperationsBold className="size-15 lg:size-25 lg:mx-auto fill-orange-900"/>
                            <p className="">2.Te hacemos el presupuesto</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <FaPaintRoller className="size-15 lg:size-25 lg:mx-auto fill-orange-900"/>
                            <p className="">3.Nos ponemos manos a la obra</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <FaCheck className="size-15 lg:size-25 lg:mx-auto fill-orange-900"/>
                            <p className="">4.Entrega y garantía</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className="bg-orange-900 lg:rounded-4xl rounded-2xl p-4 flex mx-auto mt-4 text-4xl text-white lg:p-6 lg:text-6xl">Empieza ya</button>

        </section>
        <ServiciosView servicioActual={servicioActual} setServicioActual={setServicioActual} />


        <Footer />
    </>
  )
}

export default App
