import React, { useState } from 'react'
import Darrow from "../assets/Darrow.png"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there allergens in Crumble cookies?",
      answer: "Yes, our cookies may contain allergens such as nuts, dairy, eggs, and wheat."
    },
    {
      question: "How should I store Crumble cookies?",
      answer: "You can store them in an airtight container at room temperature for up to 3 days."
    },
    {
      question: "What is the shipping time of the order?",
      answer: "Orders are typically shipped within 2-4 business days."
    },
    {
      question: "What if the recipient is unavailable to take the delivery?",
      answer: "If the recipient is unavailable, the delivery may be rescheduled or left at a secure location."
    }
  ];

  return (
    <div className='flex justify-center items-center text-[#050897] pt-20 pb-30'>
      <div className='flex flex-col w-200'>
        <h1 className='text-4xl font-medium text-center pb-16'>FAQs</h1>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <hr />
            <div className='flex justify-between p-3 cursor-pointer' onClick={() => toggleFAQ(index)}>
              <h1 className='text-2xl'>{faq.question}</h1>
              <img
                src={Darrow}
                alt="Expand"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
                }`}
              />

            </div>
            {openIndex === index && (
              <div className='px-3 pb-3'>
                <p className='text-2xl text-white bg-amber-700'>{faq.answer}</p>
              </div>
            )}
          </React.Fragment>
        ))}
        <hr />
      </div>
    </div>
  )
}

export default FAQs
