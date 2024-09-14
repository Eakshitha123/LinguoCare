// /src/components/Faq.js

import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file for styling

const Faq = () => {
  // State to track the index of the active (open) FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data
  const faqData = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month.',
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web or on the Netflix app.',
    },
    {
      question: 'How do I cancel?',
      answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.',
    },
    {
      question: 'What can I watch on Netflix?',
      answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.',
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
