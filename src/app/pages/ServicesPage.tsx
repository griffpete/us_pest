import {
  Building2,
  Home,
  Search,
  Bug,
  Shield,
  Sparkles,
  Sprout,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router';

export function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: 'Residential Services',
      description:
        'Comprehensive pest control solutions tailored for your home and family. We treat common household pests including ants, spiders, roaches, mice, and more with safe, effective methods.',
      color: 'bg-blue-500',
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description:
        'Professional pest management for businesses, offices, restaurants, and commercial properties. We help you maintain a pest-free environment that meets health and safety standards.',
      color: 'bg-red-500',
    },
    {
      icon: Search,
      title: 'General Inspection',
      description:
        'Thorough property inspections to identify potential pest problems early. Our experts spot entry points, nests, and damage before they become costly issues.',
      color: 'bg-blue-600',
    },
    {
      icon: Shield,
      title: 'Termite Prevention',
      description:
        'Protect your property investment with our advanced termite prevention solutions. We create barriers that keep termites from ever gaining a foothold in your structure.',
      color: 'bg-red-600',
    },
    {
      icon: Bug,
      title: 'Termite Inspections',
      description:
        'Expert termite detection and assessment to keep your structure safe. We identify active colonies, damage, and high-risk areas with precision and care.',
      color: 'bg-blue-700',
    },
    {
      icon: Sparkles,
      title: 'Dust Fumigation',
      description:
        'Effective dust-based treatments for hard-to-reach areas, wall voids, and structural cavities. Ideal for drywood termites and hidden insect infestations.',
      color: 'bg-red-500',
    },
    {
      icon: Sprout,
      title: 'Grub Control',
      description:
        'Keep your lawn healthy and beautiful with professional grub management. We eliminate Japanese beetle larvae and other grubs before they destroy your turf.',
      color: 'bg-blue-500',
    },
    {
      icon: Leaf,
      title: 'Fungus Control',
      description:
        'Advanced treatments to eliminate and prevent fungal growth in your property. We address root rot, wood decay fungi, and moisture-related issues that attract pests.',
      color: 'bg-red-600',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 text-sm">
            What We Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Complete pest control solutions for homes and businesses throughout St. George, Utah.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          {/* No Contracts Banner */}
          <div className="mt-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">No Long-Term Contracts Required</h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              We believe in earning your business with quality service, not contracts. Get the pest control you need, when you need it.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-all hover:gap-3 font-semibold"
            >
              Schedule a Service
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
