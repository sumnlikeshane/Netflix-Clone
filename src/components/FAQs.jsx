import { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

const faqs = [
  {
    question: 'What is Netflix?',
    answer: (<><p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p> <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. Theres always something new to discover, and new TV shows and movies are added every week!</p></>)
  },
  {
    question: 'How much does Netflix cost?',
    answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
  },
  {
    question: 'Where can I watch?',
    answer:(<><p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p> <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.</p></>)
  },
  {
    question: 'How do I cancel?',
    answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    question: 'What can I watch on Netflix?',
    answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
  },
  {
    question: 'Is Netflix good for kids?',
    answer: (<><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p> <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></>)
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                {openIndex === index ? <GrClose size={24} /> : <GrAdd size={24} />}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="faq-email-signup">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="email-form">
            <input
              type="email"
              placeholder="Email address"
              className="faq-email-input"
              required
            />
            <button type="submit" className="faq-get-started-btn">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQs;