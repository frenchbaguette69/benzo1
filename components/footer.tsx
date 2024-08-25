import Logo from "@/assets/logoWhite.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101221] text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Populair Column - First on Mobile */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-center">
            <h3 className="text-xl font-bold text-purple-400">Populair</h3>
            {/* Add your links or content here */}
          </div>

          {/* Klantenservice Column - Second on Mobile */}
          <div className="order-2 md:order-3 flex flex-col items-center md:items-center">
            <h3 className="text-xl font-bold text-purple-400">Klantenservice</h3>
            {/* Add your links or content here */}
          </div>

          {/* Logo and other content - Last on Mobile */}
          <div className="order-3 md:order-1 flex flex-col items-center md:items-start">
            <Image src={Logo} alt="Logofooter"  className="hidden md:block"height={200} width={400} />
            <Image src={Logo} alt="Logofooter2"  className="md:hidden"height={100} width={200} />
            <div className="flex flex-col md:items-center md:flex-row gap-2 mt-4">
              <span className="text-green-400">⭐⭐⭐⭐⭐</span>
              <span className="text-white font-bold">4.8/5</span>
              <span className="text-white">met 198 beoordelingen</span>
            </div>
            <p className="text-sm text-white mt-4">
              Copyright © {currentYear} – {currentYear + 1} ApothekerMedicijnen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
