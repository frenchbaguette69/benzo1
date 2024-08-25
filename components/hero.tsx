import Image from "next/image";

export const Hero = ({ 
    heroTitle, 
    heroDescription,
    heroLink,
    heroImage 
}: 
{ 
    heroTitle: string,
    heroDescription: string,
    heroLink: string,
    heroImage: string,
}) => {
  return (
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8C52FF,#fff_50%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <div className="tag">Bestel gemakkelijk online</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#213507] text-transparent bg-clip-text mt-6">
                {heroTitle}testprops
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              {heroDescription}testprops
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
            <a href={heroLink}>
              <button className="btn btn-primary">Bestellen</button>
            </a>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative md:flex items-center justify-center">
             <Image className=" md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-20" src={heroImage} alt="heroimage"/>
        </div>
        </div>
      </div>
    </section>
  );
};
