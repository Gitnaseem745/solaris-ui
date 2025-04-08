"use client";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion"; 
import { cn } from "@/lib/utils";

// FAQ Animation Variants
const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const faqAnswerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

/**
 * FAQItem Component
 * @param {string} question - The question to display.
 * @param {string} answer - The answer to display.
 * @param {number} index - The index of the item in the list.
 * @param {boolean} isOpen - Whether the item is open or closed.
 * @param {function} onToggle - Function to toggle the item's open state.
 * @param {string} className - Additional class names for styling.
 * @returns {JSX.Element}  The FAQItem component.
 * @example
 * <FAQItem question="What is your return policy?" answer="You can return any item within 30 days." />
 */
const FAQItem = ({ question, answer, index, isOpen, onToggle, className }: FAQItemProps) => {
  return (
    <motion.div
      variants={faqItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={cn("border border-border rounded-md max-w-[400px] w-full", className)}
    >
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left min-h-[56px]"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold flex-1">{question}</span>
        <BiChevronDown
          className={`h-5 w-5 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {/* Answer Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={faqAnswerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="overflow-hidden max-w-[400px]"
          >
            <p className="p-4 pt-0 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQListProps {
  children: React.ReactElement[];
}

/**
 * FAQList Component
 * @param {React.ReactElement[]} children - The FAQItem components to display.
 * @returns {JSX.Element} The FAQList component.
 * @example
 * <FAQList>
 *  <FAQItem question="What is your return policy?" answer="You can return any item within 30 days." />
 * <FAQItem question="How do I track my order?" answer="You can track your order in your account." />
 * </FAQList>
 */
const FAQList = ({ children }: FAQListProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 flex flex-col items-center">
      {children.map((child, index) =>
        React.cloneElement(child, {
          index,
          isOpen: openIndex === index,
          onToggle: () => toggleFAQ(index),
          key: index,
        })
      )}
    </div>
  );
};

export { FAQItem, FAQList };
