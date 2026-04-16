import { Heart, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { icon: Award, label: 'Years of Experience', value: '26+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Heart, label: 'Family Owned', value: '100%' },
    { icon: TrendingUp, label: 'Success Rate', value: '99%' },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 text-sm">
            Who We Are
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About US Pest</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Family-owned, community-focused, and committed to your peace of mind since 1998.
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-200/40 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-500/10 rounded-3xl -z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzczODgwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy family"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Local <span className="text-blue-600">Pest Control</span> Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                For over 26 years, US Pest has been proudly serving the St. George, Utah community with honest, effective pest control solutions. As a family-owned and operated business, we understand the importance of protecting your home and loved ones.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Unlike other companies, we don't believe in locking you into long-term contracts. We earn your trust with every service, delivering results that speak for themselves. Our team is licensed, insured, and dedicated to the Southern Utah community we call home.
              </p>

              <button
                onClick={() => navigate('/contact')}
                className="group inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full text-lg hover:bg-red-600 transition-all hover:gap-3"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center">
                <stat.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built on Trust &amp; Integrity
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Honesty First',
                desc: 'We give you straightforward assessments and transparent pricing. No surprise fees, no upselling you on services you don\'t need.',
              },
              {
                title: 'Community Roots',
                desc: 'We live and work right here in St. George. Your neighbors are our neighbors, and we take pride in keeping our community pest-free.',
              },
              {
                title: 'Results Driven',
                desc: 'Our 99% success rate speaks for itself. We don\'t rest until the job is done right and your property is protected.',
              },
            ].map((val, i) => (
              <div key={i} className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-2xl p-8">
                <div className="w-12 h-1.5 bg-red-500 rounded-full mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
