import { ContactForm } from "@/components/contactform"

export const ContactHome = () => {
    return (
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#8C52FF,#fff_50%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center justify-between">
            <div>
              <div className="tag md:mt-32">Contact Opnemen</div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#213507] text-transparent bg-clip-text mt-6 pb-5">
                Contact
              </h2>
            </div>
          </div>
         <ContactForm />
        </div>
      </section>
    );
  };
  