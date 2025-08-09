
import FAQItem  from "./components/FAQItem";

const FAQSection = () => {
  // Sample data array for the FAQ items lorem data
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.'
    },
  ];

  return (
    <section className="py-16 md:py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-[27px] font-semibold font-secondary text-primary text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;