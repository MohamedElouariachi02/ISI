import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";


function Footer({avisoLegal}) {

    return (
        <footer className="flex flex-col bg-marron w-full text-white pb-6">
            <div className="flex items-center mx-10 gap-x-3 justify-center lg:gap-x-20">
                <img className="size-25 object-cover mb-2 mt-2 lg:size-40" src="/isi_logo_vec_blanco.svg" alt={"isi_logo_vec_blanco"} />
                <p className="text-white font-bold text-xl text-left lg:text-5xl">Intermediario de <br/>servicios integrales</p>
            </div>
            <div className="ml-4 mt-4 lg:text-2xl lg:ml-15">
                <p className="font-bold lg:text-4xl mb-3 lg:mb-10">Contactanos</p>
                <div className="ml-4 lg:ml-10">
                    <a href={"mailto:isibusiness@gmail.com"} className="flex items-center gap-x-2 lg:gap-x-4 hover:text-white/60"><HiMail/>isibusinesscontact@gmail.com</a>
                    <p className="mt-2 lg:mt-4">Airam del Rosario</p>
                    <a href={"tel:+34676055670"} className="flex items-center gap-x-2 lg:gap-x-4 hover:text-white/60"><BsFillTelephoneFill/>+34 676 055 670</a>
                    <p className="mt-2 lg:mt-4">Ulises Cabrera</p>
                    <a href={"tel:+34617829786"} className="flex items-center gap-x-2 lg:gap-x-4 hover:text-white/60"><BsFillTelephoneFill/>+34 617 82 97 86</a>
                </div>
            </div>
            <div className="mx-auto flex lg:text-3xl mt-4 lg:gap-x-5 gap-x-2">
                <p>© 2026 ISI</p>
                <p>|</p>
                <button className="hover:text-white/80"
                onClick={() => {avisoLegal(true)}}>Aviso legal</button>
            </div>

        </footer>
    )
}
export default Footer;