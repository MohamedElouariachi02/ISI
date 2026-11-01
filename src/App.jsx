import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import { GiTeamIdea } from "react-icons/gi";
import { PiMathOperationsBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const servicios = [
    {
        name: "Pintura",
        img: "/pintura.webp",
        description: "Por dentro o por fuera, le damos a tus paredes la cara nueva que se merecen. Con mimo en los detalles y sin dejarte la casa hecha un desastre."
    },
    {
        name: "Reformas",
        img: "/reformas.webp",
        description: "Tu casa o tu local, como siempre lo has querido. Nos cuentas la idea, la ajustamos a tu bolsillo y nos ponemos manos a la obra."
    },
    {
        name: "Albañilería",
        img: "/albañileria.webp",
        description: "Desde ese arreglo que lleva meses esperando hasta un suelo nuevo. Trabajo bien hecho, de los que se ven y de los que no se ven."
    },
    {
        name: "Revestimientos",
        img: "/revestimiento.webp",
        description: "Un buen revestimiento cambia una habitación entera. Te ayudamos a elegir el acabado que mejor le va a tu espacio y a tu estilo."
    },
    {
        name: "Impermeabilización",
        img: "/impermeabilizacion.webp",
        description: "¿Humedades, manchas en el techo, goteras cuando llueve? Las atajamos de raíz para que vuelvas a olvidarte del problema."
    },
    {
        name: "Trabajos a medida",
        img: "/trabajo_medida.webp",
        description: "Si lo tienes en la cabeza, lo hacemos realidad. Cuéntanos qué necesitas y lo planteamos juntos, con garantía y sin florituras."
    },
]

function ServiciosView({servicioActual, setServicioActual})
{
    return (
        <section id={"servicios"} className="flex flex-col mt-4  items-center lg:pb-10 ">
            <h1 className="text-3xl font-bold text-left ml-4 mb-2 lg:text-6xl">Nuestros servicios</h1>
            <div className="h-1 w-70 lg:w-150 bg-secundary mx-auto lg:mt-5 lg:mb-10 mb-4"></div>
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
                <div className="relative flex text-center items-center lg:w-[50%] lg:justify-center z-20">
                    <button className={`absolute z-30 left-2 bg-black py-3 px-4 rounded-full opacity-70 text-white font-bold ${servicioActual === 0 ? "invisible" : "visible"}`}
                            onClick={() => {
                                if (servicioActual > 0) setServicioActual(servicioActual - 1);
                            }}>
                        <FaArrowRight className="rotate-180"/>
                    </button>
                    <img src={servicios[servicioActual].img} alt={servicios[servicioActual].name} className="contain-content "/>
                    <button className={`absolute z-30 right-2 bg-black py-3 px-4 rounded-full opacity-70 text-white font-bold ${servicioActual === servicios.length - 1 ? "invisible" : "visible"}`}
                            onClick={() => {
                                if (servicioActual < servicios.length - 1) setServicioActual(servicioActual + 1);
                            }}><FaArrowRight />
                    </button>
                </div>
                <div className="mt-4 mb-4 text-wrap mx-4">
                    <p className="text-xl font-bold lg:text-4xl">{servicios[servicioActual].name}</p>
                    <p className="text-lg lg:w-100 lg:text-2xl lg:mt-4">{servicios[servicioActual].description}</p>
                </div>
            </div>

            <div className="flex justify-center gap-x-2 pb-4">
                {servicios.map((servicio, index) => {
                    return (
                        <button className={`rounded-full size-2 lg:size-6 lg:mt-6 cursor-pointer ${servicioActual === index ? "bg-primary" : "bg-gray-300"}`} key={index}
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
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
            {servicios.map((servicio) => {
                return (
                    <div key={servicio.name} className={"group w-90 pb-10 outline-primary rounded-2xl p-2 hover:-translate-y-8 transition-transform ease-in-out duration-300 shadow-2xl shadow-primary"}>
                        <img src={servicio.img} alt={servicio.name} className={"rounded-2xl"}/>
                        <h2 className={"text-2xl font-bold group-hover:text-secundary"}>{servicio.name}</h2>
                        <p className={"text-lg "}>{servicio.description}</p>
                    </div>
                )
            })}

        </div>
    )
}
function Inicio(){
    return (
        <section className="w-full flex justify-center bg-primary items-center lg:py-20 lg:rounded-2xl py-8 px-2">
            <div className="flex flex-col mx-auto text-center items-center gap-y-4 text-white lg:w-1/4 ">
                <h1 className="text-3xl font-bold lg:text-7xl max-w-80 lg:max-w-220 ">¿Cuánto costaría la reforma que tienes en mente?</h1>
                <h2 className="text-ºxl lg:text-5xl max-w-80 lg:max-w-220 text-background">En ISI te ayudamos a valorar tu proyecto. Solicita tu presupuesto gratis y sin compromiso.</h2>
                <div className={"flex lg:gap-x-10 gap-2"}>
                    <div className="flex lg:mt-10">
                        <a href={"tel:+34676055670"} className="p-3 transition duration-500 w-35 lg:w-70 ease-in-out  bg-secundary lg:rounded-4xl rounded-2xl text-white font-bold outline-2 outline-primary hover:text-shadow hover:shadow-xl lg:text-4xl lg:p-5 hover:-translate-y-3 hover:translate-x-3"
                        >Quiero mi <br/>presupuesto</a>
                    </div>
                    <div className="flex lg:mt-10 ">
                        <a href={"#servicios"} className="p-3 transition duration-500 w-35 lg:w-70 ease-in-out bg-white lg:rounded-4xl rounded-2xl text-secundary font-bold outline-2 outline-primary hover:text-shadow hover:shadow-xl lg:text-4xl lg:p-5 hover:-translate-y-3 hover:translate-x-3"
                        >Nuestros <br/>servicios</a>
                    </div>
                </div>

            </div>
            <img className="hidden lg:block w-1/3 h-80 lg:max-w-180 lg:h-160 object-cover mx-auto rounded-3xl" src="/hombre_pintando_color.webp" alt="Hombre Pintando"/>

        </section>
    )
}
function Nosotros(){
    return (
        <section className="mt-4 flex flex-col pb-10 lg:flex lg:flex-row lg:w-[95%] lg:mx-auto lg:mb-20 justify-center items-center ">
            <div className="flex flex-col justify-center items-center w-full mb-10">
                <h1 className="text-3xl font-bold ml-4 text-center lg:text-6xl">Sobre nosotros</h1>
                <div className="h-1 w-60 lg:w-140 bg-secundary mx-auto lg:mt-2 lg:mb-10"></div>
                <img src="/reformas.webp" className="hidden lg:block w-220 rounded-2xl" alt="Personas haciendo reformas"/>
            </div>
            <h2 className="mx-4 text-lg lg:text-4xl lg:w-300"><span className="font-bold text-secundary">En ISI damos color a tus ideas.</span> Realizamos trabajos de pintura, reformas y soluciones para hogares y locales, con un trato cercano, calidad garantizada y presupuesto sin compromiso. Tu espacio, nuestra obra.</h2>
        </section>
    )
}
function Elegirnos(){
    return (
        <section className="mt-4  bg-primary text-background lg:pt-10 py-4 lg:py-8">
            <h1 className="text-3xl font-bold text-center lg:text-6xl">¿Por qué elegirnos?</h1>
            <div className="h-1 w-80 lg:w-175 bg-secundary mx-auto lg:mt-5"></div>
            <div className="lg:flex lg:gap-x-10 lg:justify-center">
                <div className="flex justify-center my-auto mb-8 ml-4">
                    <ul className="list-inside text-lg mt-4 lg:text-4xl lg:ml-5 lg:mt-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
                        <li className="lg:max-w-130 lg:border-b lg:border-r lg:p-4">
                            <h2 className="font-bold">Presupuesto sin compromiso</h2>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Nos cuentas qué necesitas, lo vemos contigo y te damos un precio claro. Si no te encaja, no pasa nada.</p>
                        </li>

                        <li className={"lg:max-w-130 lg:border-b lg:border-l lg:p-4"}>
                            <h2 className="font-bold">Trato directo y cercano</h2>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Hablas con las personas que van a hacer el trabajo, sin intermediarios ni vueltas. Te explicamos todo con palabras normales.</p>
                        </li>
                        <li className={"lg:max-w-130 lg:border-b-0 lg:border-t lg:border-r lg:p-4"}>
                            <h2 className="font-bold">Trabajo bien hecho y con garantía</h2>
                            <p className="text-sm mx-6 mb-2 lg:text-3xl lg:mb-20 wrap-anywhere">Cuidamos cada detalle y respondemos por lo que hacemos. Si algo no queda como debe, lo arreglamos.</p>
                        </li>
                        <li className={"lg:max-w-130 lg:border-l lg:border-t lg:p-4"}>
                            <h2 className="font-bold">Experiencia y confianza</h2>
                            <p className="text-sm mx-6 lg:text-3xl lg:mb-20 wrap-anywhere">Sabemos lo que es entrar en tu casa o en tu negocio, y lo tratamos como si fuera nuestro.</p>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="lg:flex lg:flex-col text-center grid grid-cols-2  text-lg mt-4 mx-4 gap-y-4 lg:text-3xl lg:justify-center lg:items-center">
                        <div className="flex flex-col items-center lg:items-start">
                            <GiTeamIdea className="size-15 lg:size-20 lg:mx-auto fill-background"/>
                            <h2 className="">1. Hablamos de tu idea</h2>
                        </div>
                        <div className="flex flex-col items-center lg:items-start ">
                            <PiMathOperationsBold className="size-15 lg:size-20 lg:mx-auto fill-background"/>
                            <h2 className="">2. Te hacemos el presupuesto</h2>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <FaPaintRoller className="size-15 lg:size-20 lg:mx-auto fill-background"/>
                            <h2 className="">3. Nos ponemos manos a la obra</h2>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <FaCheck className="size-15 lg:size-20 lg:mx-auto fill-background"/>
                            <h2 className="">4. Entrega y garantía</h2>
                        </div>
                    </div>
                </div>
            </div>

            <a href={"tel:+34676055670"} className="bg-background max-w-50 lg:max-w-80 text-center lg:rounded-4xl font-bold rounded-2xl p-4 flex mx-auto mt-4 text-3xl text-primary lg:p-6 lg:text-5xl hover:-translate-y-5 hover:translate-x-5 transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/60"
            >Empieza ya</a>
        </section>
    )
}

function AvisoLegal({setAvisoLegalView}){
    return (
        <div className={"fixed flex justify-center items-center inset-0 z-50"}>
            <button className={"bg-black/70 fixed inset-0 z-40"} onClick={() => setAvisoLegalView(false)}></button>
            <div className={"bg-white z-100 w-[80%] max-h-[90%] relative rounded-2xl flex flex-col overflow-hidden pr-4 pb-4"}>
                <div className={"relative px-5 pt-4"}>
                    <button className={"absolute right-0"}
                            onClick={() => setAvisoLegalView(false)}>
                        < IoClose className={"size-10 hover:fill-red-500 duration-300 transition"}/>
                    </button>
                    <h1 className={"text-4xl text-start lg:text-center font-bold text-secundary lg:text-6xl"}>Aviso Legal</h1>
                </div>

                <div className={"ml-5 mt-4 flex flex-col items-start gap-y-5 wrap-anywhere overflow-y-auto scrollbar-none"}>
                    <h2 className={"text-lg lg:text-4xl font-bold"}>Datos identificativos (art. 10 Ley 34/2002, LSSI-CE)</h2>
                    <p className={"text-lg lg:text-2xl"}><span className={"font-bold"}>Titular: </span>Airam Ramón del Rosario Rodríguez</p>
                    <p className={"text-lg lg:text-2xl"}><span className={"font-bold"}>NIF: </span>42254405R</p>
                    <p className={"text-lg lg:text-2xl"}><span className={"font-bold"}>Dirección: </span>C/Tahona Nº2 Arguineguin, Mogán 35120, Las Palmas</p>
                    <p className={"text-lg lg:text-2xl"}><span className={"font-bold"}>Correo electronico: </span>isibusinesscontact@gmail.com</p>
                    <p className={"text-lg lg:text-2xl"}><span className={"font-bold"}>Contacto: </span>+34 676 055 670</p>
                    <hr className={"w-full"}/>
                    <div className={"text-lg flex flex-col gap-y-2 lg:text-2xl"}>
                        <h3 className={"font-bold"}>Objeto</h3>
                        <p>Esta web tiene carácter informativo y publicitario sobre los servicios de pintura, reformas y otros trabajos ofrecidos por el titular.
                            La contratación de los servicios, los presupuestos y los pagos se realizan fuera de este sitio web, por contacto directo.</p>
                    </div>
                    <div className={"text-lg flex flex-col gap-y-2 lg:text-2xl"}>
                        <h3 className={"font-bold"}>Propiedad intelectual</h3>
                        <p>Los textos, imágenes, logotipos y demás contenidos de la web son titularidad de su propietario o se usan con la debida autorización.
                            Queda prohibida su reproducción total o parcial sin consentimiento expreso.</p>
                    </div>
                    <div className={"text-lg flex flex-col gap-y-2 lg:text-2xl"}>
                        <h3 className={"font-bold"}>Responsabilidad</h3>
                        <p>El titular procura que la información sea correcta y actual, pero no garantiza la ausencia de errores.
                            Los presupuestos y condiciones concretas son los comunicados por escrito al cliente en cada caso.</p>
                    </div>
                    <div className={"text-lg flex flex-col gap-y-2 lg:text-2xl"}>
                        <h3 className={"font-bold"}>Legislación aplicable</h3>
                        <p>Este aviso se rige por la legislación española. Para cualquier controversia,
                            serán competentes los juzgados y tribunales que correspondan conforme a la normativa vigente.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [servicioActual, setServicioActual] = useState(0);
    const [avisoLegalView, setAvisoLegalView] = useState(false);
    return (
    <>
        {avisoLegalView && (
            <AvisoLegal setAvisoLegalView={setAvisoLegalView} />

        )}
        <Header />
        <Inicio />
        <Nosotros />
        <Elegirnos />
        <ServiciosView servicioActual={servicioActual} setServicioActual={setServicioActual} />
        <Footer avisoLegal={setAvisoLegalView}/>
    </>
  )
}

export default App
