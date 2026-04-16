import { ArrowRight, Shield, FileCheck, MapPin, Users2, Clock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const navigate = useNavigate();

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
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768765397301-8a64df3d41ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yJTIwY2xlYW58ZW58MXx8fHwxNzczODg0NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/70 to-gray-900/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm">26 Years of Trusted Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Protect Your Home,{' '}
              <span className="text-red-400">Naturally</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Family-owned pest control serving St. George, Utah. Professional service without the long-term contracts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full text-lg hover:bg-red-600 transition-all hover:gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="tel:435-628-4581"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-colors"
              >
                Call: 435-628-4581
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <reason.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

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

          {/* CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/services')}
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full text-lg hover:bg-blue-700 transition-all hover:gap-3"
            >
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
