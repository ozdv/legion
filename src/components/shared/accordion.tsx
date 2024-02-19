import { FC, useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border ${isOpen ? 'border-gray-300' : 'border-transparent'} rounded-lg`}>
      <button
        className="w-full px-4 py-2 text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
