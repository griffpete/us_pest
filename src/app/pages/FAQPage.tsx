import { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // General
  {
    category: 'General',
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No! At US Pest, we don\'t believe in locking you into contracts. We earn your business with every service we perform. You can schedule one-time treatments or set up a recurring plan — completely on your terms.',
  },
  {
    category: 'General',
    question: 'How long has US Pest been in business?',
    answer:
      'US Pest has proudly served the St. George, Utah community for over 26 years. Since 1998, we\'ve been a family-owned and operated company built on trust, integrity, and results.',
  },
  {
    category: 'General',
    question: 'What areas do you serve?',
    answer:
      'We primarily serve St. George and the surrounding Southern Utah communities including Washington, Santa Clara, Ivins, Hurricane, La Verkin, and other nearby areas. Call us at 435-628-4581 to confirm service in your location.',
  },
  {
    category: 'General',
    question: 'Are your technicians licensed and insured?',
    answer:
      'Absolutely. All of our pest control technicians are fully licensed by the state of Utah and our company carries comprehensive liability insurance. Your safety and peace of mind are our top priorities.',
  },
  // Treatments
  {
    category: 'Treatments & Safety',
    question: 'Are your treatments safe for kids and pets?',
    answer:
      'We offer eco-friendly and family-safe treatment options. We always recommend keeping children and pets out of treated areas for the time specified by our technician — typically 30 minutes to a few hours after treatment. We\'ll walk you through all safety precautions before we begin.',
  },
  {
    category: 'Treatments & Safety',
    question: 'How long does a typical pest control treatment take?',
    answer:
      'Treatment time varies depending on the size of your property and the type of service. Most standard residential treatments take between 30 minutes and 1.5 hours. Termite inspections or fumigation services may take longer. We\'ll give you an estimated time when you schedule.',
  },
  {
    category: 'Treatments & Safety',
    question: 'How soon after treatment will I see results?',
    answer:
      'Many customers see a significant reduction in pest activity within 24–72 hours. Some treatments — particularly for termites or severe infestations — may take 1–2 weeks for full effect. If you\'re not satisfied, call us and we\'ll make it right.',
  },
  {
    category: 'Treatments & Safety',
    question: 'Do I need to do anything to prepare for a treatment?',
    answer:
      'Preparation depends on the type of treatment. For general pest control, we recommend clearing clutter from baseboards and under sinks. For fumigation or more intensive treatments, we\'ll provide a detailed preparation checklist when you book. Our team is always happy to answer prep questions beforehand.',
  },
  // Termites
  {
    category: 'Termites',
    question: 'How do I know if I have termites?',
    answer:
      'Common signs of termite activity include hollow-sounding wood, discarded wings near windowsills, mud tubes along your foundation, bubbling or warped paint, or visible damage to wood structures. If you suspect termites, don\'t wait — call us for an inspection at 435-628-4581.',
  },
  {
    category: 'Termites',
    question: 'What\'s the difference between a termite inspection and termite prevention?',
    answer:
      'A termite inspection is a thorough assessment of your property to detect current termite activity, damage, or high-risk conditions. Termite prevention involves proactive treatments and barriers installed to stop termites from ever entering your home. We recommend both for complete protection.',
  },
  {
    category: 'Termites',
    question: 'What is dust fumigation and when is it used?',
    answer:
      'Dust fumigation involves applying a specialized insecticidal dust into wall voids, structural cavities, and hard-to-reach areas. It\'s particularly effective for drywood termites, carpenter ants, and hidden insect colonies that can\'t be reached by liquid treatments. It\'s a targeted, long-lasting solution.',
  },
  // Lawn & Property
  {
    category: 'Lawn & Property',
    question: 'What is grub control and why does my lawn need it?',
    answer:
      'Grubs are the larvae of beetles (like Japanese beetles) that live underground and feed on grass roots. A grub infestation can cause large brown patches and even kill sections of your lawn. Our grub control treatments eliminate existing grubs and prevent future damage, keeping your yard lush and green.',
  },
  {
    category: 'Lawn & Property',
    question: 'What causes fungal problems in my yard or home, and how do you treat it?',
    answer:
      'Fungal issues are typically caused by excess moisture, poor drainage, or wood decay — conditions that also attract pests. We identify and treat fungal growth at the source using professional-grade fungicides and moisture management strategies, helping protect both your property and landscape.',
  },
  // Pricing & Scheduling
  {
    category: 'Pricing & Scheduling',
    question: 'How much does pest control cost?',
    answer:
      'Pricing depends on the type of service, the size of your property, and the severity of the infestation. We offer free quotes with no obligation. Call us at 435-628-4581 or fill out our contact form and we\'ll get you an accurate estimate.',
  },
  {
    category: 'Pricing & Scheduling',
    question: 'Do you offer same-day service?',
    answer:
      'Yes! We offer same-day service based on availability. If you\'re dealing with an urgent pest situation, give us a call at 435-628-4581 and we\'ll do our best to get someone out to you as quickly as possible.',
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

export function FAQPage() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs =
    activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 text-sm">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Everything you need to know about pest control, our services, and what to expect.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-blue-400 shadow-lg' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex-shrink-0 w-2.5 h-2.5 rounded-full ${
                          isOpen ? 'bg-blue-500' : 'bg-red-400'
                        } transition-colors`}
                      />
                      <span className="text-lg font-semibold text-gray-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-blue-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Answer with smooth expand */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6 pl-12">
                      <div className="w-full h-px bg-blue-100 mb-4" />
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Still Have Questions?</h3>
            <p className="text-blue-200 text-lg mb-6 max-w-xl mx-auto">
              Our friendly team is ready to answer anything. Give us a call or send us a message — we're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:435-628-4581"
                className="flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Call 435-628-4581
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="group flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-colors"
              >
                Send a Message
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
