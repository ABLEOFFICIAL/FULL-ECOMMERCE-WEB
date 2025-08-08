import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your service about?",
      answer:
        "Our service is designed to provide innovative solutions tailored to your needs, ensuring a seamless experience with cutting-edge technology.",
    },
    {
      question: "How do I get started?",
      answer:
        "To get started, simply sign up on our website and follow the onboarding process. You'll receive a welcome email with further instructions.",
    },
    {
      question: "Is there a cost involved?",
      answer:
        "We offer a free tier with basic features, and premium plans are available for advanced functionality. Check our pricing page for details.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email at support@example.com or through our 24/7 live chat feature on the website.",
    },
    {
      question: "When will your service be available?",
      answer:
        "We are launching on September 1, 2025. Stay tuned for updates and sign up for notifications!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg ">Find answers to your queries here</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full text-left py-4 text-xl font-semibold focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="float-right">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className=" leading-relaxed py-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FAQs;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const FAQS = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="py-6 text-center">
//         <h1 className="text-4xl font-bold">Coming Soon</h1>
//         <Link
//           to={"/"}
//           className="w-[234px] h-[56px] rounded-sm bg-[var(--red)] text-white my-10 mx-auto flex justify-center items-center cursor-pointer "
//         >
//           Go back home
//         </Link>{" "}
//         {/* <p className="mt-2 text-lg ">
//           Something amazing is on the way!
//         </p> */}
//       </header>
//     </div>
//   );
// };

// export default FAQS;
