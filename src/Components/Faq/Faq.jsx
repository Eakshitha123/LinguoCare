import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file for styling

const Faq = () => {
  // State to track the index of the active (open) FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Updated FAQ data for speech-language therapy
  const faqData = [
    {
      question: 'What is speech-language therapy?',
      answer: 'Speech-language therapy involves the assessment and treatment of communication disorders and speech issues. It helps individuals improve their speech, language, and communication skills.',
    },
    {
      question: 'Who can benefit from speech-language therapy?',
      answer: 'Speech-language therapy can benefit people of all ages, including children with speech delays, adults with communication disorders due to injury or illness, and anyone needing assistance with speech clarity or language skills.',
    },
    {
      question: 'What types of disorders can speech-language therapy address?',
      answer: 'Speech-language therapy can address a variety of disorders including articulation disorders, fluency disorders (like stuttering), language delays, voice disorders, and cognitive-communication disorders.',
    },
    {
      question: 'How do I know if I or my child need speech-language therapy?',
      answer: 'If you or your child have difficulties with speaking clearly, understanding language, or using language effectively, it may be beneficial to consult a speech-language pathologist. Early intervention can be crucial for better outcomes.',
    },
    {
      question: 'How do I find a qualified speech-language pathologist?',
      answer: 'You can find a qualified speech-language pathologist through referrals from healthcare providers, professional associations, or online directories. It is important to choose someone who is licensed and has experience in treating the specific issues you are concerned about.',
    },
  ];

  // Function to handle click on a question
  const handleClick = (index) => {
    // Toggle the current FAQ item
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="questions">
        {faqData.map((item, index) => (
          <li key={index}>
            <div
              className="faq-question"
              onClick={() => handleClick(index)}
            >
              <label>{item.question}</label>
              <span className="faq-icon">
                {activeIndex === index ? '×' : '+'}
              </span>
            </div>
            <div
              className={`answer ${activeIndex === index ? 'open' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
