import { Heart, Users, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '26+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Heart, label: 'Family Owned', value: '100%' },
    { icon: TrendingUp, label: 'Success Rate', value: '99%' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-200/40 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-500/10 rounded-3xl -z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzczODgwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy family"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Local <span className="text-blue-600">Pest Control</span> Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 26 years, US Pest has been proudly serving the St. George, Utah community with honest, effective pest control solutions. As a family-owned and operated business, we understand the importance of protecting your home and loved ones.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unlike other companies, we don't believe in locking you into long-term contracts. We earn your trust with every service, delivering results that speak for themselves.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <stat.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}