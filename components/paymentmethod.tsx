import Image from "next/image";
import Ideal from "@/assets/ideal.png";
import Visa from "@/assets/visa.png";
import Mastercard from "@/assets/mastercard.png";
import Bancontact from "@/assets/bancontact.png";
import Bitcoin from "@/assets/bitcoin.png"
import Postnl from "@/assets/postnl.png"

export const PaymentMethods = () => {
    return (
        <div className="container pt-10">
            <div className="flex flex-row justify-center">
            <Image src={Ideal} alt="ideal" height={50} width={50}/>
            <Image src={Visa} alt="Visa" height={50} width={50}/>
            <Image src={Mastercard} alt="Mastercard" height={50} width={50}/>
            <Image src={Bancontact} alt="Bancontact" height={50} width={50}/>
            <Image src={Bitcoin} alt="Bitcoin" height={50} width={50}/>
            <Image src={Postnl} alt="Post NL" height={50} width={50}/>
            </div>
            <h2 className="text-center text-xl mt-4">betaal methodes</h2>
        </div>
    );
}
