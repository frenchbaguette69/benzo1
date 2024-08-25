import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Cart from "@/assets/cart.png"

export const Header = ({ announcementBar, productLink }: { announcementBar: string, productLink: string}) => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        {/* Gebruik de announcementBar prop hier */}
        <p className="text-white/60 hidden md:block">
          {announcementBar}
        </p>
        <div className="inline-flex gap-1 items-center">
          <a href={productLink}>bestellen</a>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image className="md:block hidden" src={Logo} alt="Saas Logo" height={200} width={150} />
            <div className="flex flex-row items-center gap-2">
            <MenuIcon className="h-5 w-5 md:hidden" />
            <Image className="md:hidden " src={Logo} alt="Saas Logo" height={150} width={125} />
            </div>
            <div>
            <button className="bg-black text-white px-2 py-2 rounded-lg font-medium inline-flex align-items justify-end tracking-tight md:hidden">
                <Image src={Cart} alt="Cart" height={20} width={20}/>
              </button>
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Medicijnen</a>
              <a href="#">Slaappillen</a>
              <a href="#">Over</a>
              <a href="#">Blog</a>
              <a href="#">Trustpilot</a>
              <a href="#">Contact</a>
              <button className="bg-black text-white px-2 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                <Image src={Cart} alt="Cart" height={20} width={20}/>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
