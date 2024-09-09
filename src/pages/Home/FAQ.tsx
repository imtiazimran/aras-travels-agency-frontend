import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { HeroHighlight } from "../../components/ui/hero-highlight";

export function FAQ() {
  const [active, setActive] = useState<{
    question: string;
    answer: string;
  } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including visa processing, travel bookings, and consultancy. Please visit our Services page for more details.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "The processing time varies depending on the type of visa and your specific circumstances. Generally, it can take anywhere from a few days to several weeks. We provide estimated processing times for each visa type on our website.",
    },
    {
      question: "Can I track the status of my visa application?",
      answer:
        "Yes, you can track the status of your visa application through our online tracking system. You'll receive a tracking ID once your application is submitted.",
    },
    {
      question: "What documents are required for a visa application?",
      answer:
        "The required documents vary depending on the type of visa. Commonly required documents include a valid passport, proof of accommodation, and financial statements. Please check the specific requirements for your visa type on our website.",
    },
    {
      question: "Do you offer refunds if my visa is denied?",
      answer:
        "Refunds are not typically provided if a visa application is denied. However, you can review our refund policy on our website or contact our support team for more information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or by calling +1234567890. We are available Monday through Friday from 9 AM to 5 PM.",
    },
  ];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.question}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`faq-${active.question}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900  overflow-hidden"
            >
                <motion.h2
                 layoutId={`question-${active.question}-${id}`}
                  className="relative inline-flex  overflow-hidden  p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className=" h-full w-full cursor-pointer items-center justify-center rounded-sm bg-slate-950 px-3 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                    <motion.h3
                      className="font-bold text-neutral-200"
                    >
                      {active.question}
                    </motion.h3>
                    <motion.p
                      className="text-neutral-200 mt-2"
                    >
                      {active.answer}
                    </motion.p>
                  </span>
                </motion.h2>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <HeroHighlight className="w-full  ">
        <div className="max-w-2xl  mx-auto w-full  flex justify-center items-center flex-col">
          {faqs.map((faq, index) => (
            <motion.div
              layoutId={`faq-${faq.question}-${id}`}
              key={`faq-${faq.question}-${index}`}
              onClick={() => setActive(faq)}
              className="p-2 flex flex-col justify-between items-center hover:bg-neutral-400 rounded-xl cursor-pointer"
            >
              <div className="flex flex-col">
                <motion.h2
                  layoutId={`question-${faq.question}-${id}`}
                  className="relative inline-flex  overflow-hidden rounded-full p-0.5  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                    {faq.question}
                  </span>
                </motion.h2>
              </div>
            </motion.div>
          ))}
        </div>
      </HeroHighlight>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
