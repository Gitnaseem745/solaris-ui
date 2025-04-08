"use client";

import { FAQItem, FAQList } from "@/components/ui/faq-list";

export default function FAQListDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:p-4">
      <FAQList>
        <FAQItem question="What is your return policy?" answer="You can return any item within 30 days." />
        <FAQItem question="How do I track my order?" answer="You can track your order in your account." />
        <FAQItem question="What payment methods do you accept?" answer="We accept credit cards, PayPal, and more." />
      </FAQList>
    </div>
  );
}   
