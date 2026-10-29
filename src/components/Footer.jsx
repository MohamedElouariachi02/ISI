import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer()
{
    return (
        <footer className="flex flex-col bg-orange-950 w-full text-white mt-10 pb-6">
            <div className="flex items-center mx-10 gap-x-3 justify-center lg:gap-x-20">
                <img className="size-25 object-cover mb-2 mt-2 lg:size-40" src="/isi_logo_vec_blanco.svg" />
                <p className="text-white font-bold text-xl text-left lg:text-5xl">Intermediario de <br/>servicios integrales</p>
            </div>
            <div className="ml-4 mt-4 lg:text-2xl lg:ml-15">
                <p className="font-bold lg:text-4xl mb-3 lg:mb-10">Contactanos</p>
                <div className="ml-4 lg:ml-10">
                    <a href={"mailto:isibusiness@gmail.com"} className="flex items-center gap-x-2 lg:gap-x-4"><HiMail/>isibusinesscontact@gmail.com</a>
                    <p className="mt-2 lg:mt-4">Airam del Rosario</p>
                    <a href={"tel:+34676055670"} className="flex items-center gap-x-2 lg:gap-x-4"><BsFillTelephoneFill/>+34 676 055 670</a>
                    <p className="mt-2 lg:mt-4">Ulises Cabrera</p>
                    <a href={"tel:+34617829786"} className="flex items-center gap-x-2 lg:gap-x-4"><BsFillTelephoneFill/>+34 617 82 97 86</a>
                </div>

            </div>
            <p className="mx-auto mt-4 lg:text-3xl">© 2026 ISI</p>
        </footer>
    )
}
export default Footer;