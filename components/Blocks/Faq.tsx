import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = ({ id }: { id: string[] }) => {
  return (
    <Accordion className="w-full space-y-3" type="single" collapsible>
      {id.map((id) => (
        <AccordionItem key={id} value={`item-${id}`}>
          <AccordionTrigger>Is it accessible? {id}</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
