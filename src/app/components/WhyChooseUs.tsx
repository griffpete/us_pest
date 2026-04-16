import { FileCheck, MapPin, Users2, Clock, CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: FileCheck,
      title: 'No Contracts',
      description: 'Flexible service options without long-term commitments',
    },
    {
      icon: MapPin,
      title: 'Local Experts',
      description: '26 years serving St. George and surrounding areas',
    },
    {
      icon: Users2,
      title: 'Family Owned',
      description: 'Personalized service with a community-first approach',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Quick scheduling and same-day service available',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Why Choose US Pest
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-blue-600">US Pest</span> Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a trusted local business that puts your needs first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <reason.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            What You Can Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Licensed and insured professionals',
              'Eco-friendly treatment options available',
              'Transparent pricing with no hidden fees',
              'Satisfaction guaranteed on all services',
              'Latest pest control technology and methods',
              'Educational approach to prevention',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}