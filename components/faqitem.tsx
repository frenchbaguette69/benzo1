import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trpc } from "@/utils/trpc";

export function FaqItem({

}) {

  const { data } = trpc.faqRouter.getall.useQuery();

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8C52FF,#fff_50%)] overflow-x-clip mt-20">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="">
            <div className="tag md:mt-32">Bekijk de antwoorden</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#213507] text-transparent bg-clip-text mt-6 pb-5">
              Veelgestelde Vragen
            </h2>
          </div>
        </div>
        {data?.map(({ id, question, answer }) => (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={id.toString()}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}

      </div>
    </section>
  );
}


