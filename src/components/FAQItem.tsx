import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl"
      onClick={toggleAccordion}
    >
      <div>
        <div className="pr-5">
          <h5 className="text-lg font-medium">{question}</h5>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden pr-5 duration-500"
          style={{ height }}
        >
          <p className="text-gray-700 mt-4">{answer}</p>
        </div>
      </div>
      <span className="flex-shrink-0">
        <div className={isOpen ? 'hidden' : ''}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.69995V18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
        <div className={isOpen ? '' : 'hidden'}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </span>
    </button>
  );
};

export default FAQItem;