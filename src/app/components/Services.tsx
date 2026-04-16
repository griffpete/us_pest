import {
  Building2,
  Home,
  Search,
  Bug,
  Shield,
  Sparkles,
  Sprout,
  Leaf,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Services',
      description: 'Comprehensive pest control solutions tailored for your home and family.',
      color: 'bg-blue-500',
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description: 'Professional pest management for businesses, offices, and commercial properties.',
      color: 'bg-red-500',
    },
    {
      icon: Search,
      title: 'General Inspection',
      description: 'Thorough property inspections to identify potential pest problems early.',
      color: 'bg-blue-600',
    },
    {
      icon: Shield,
      title: 'Termite Prevention',
      description: 'Protect your property investment with our advanced termite prevention solutions.',
      color: 'bg-red-600',
    },
    {
      icon: Bug,
      title: 'Termite Inspections',
      description: 'Expert termite detection and assessment to keep your structure safe.',
      color: 'bg-blue-700',
    },
    {
      icon: Sparkles,
      title: 'Dust Fumigation',
      description: 'Effective dust-based treatments for hard-to-reach areas and prevention.',
      color: 'bg-red-500',
    },
    {
      icon: Sprout,
      title: 'Grub Control',
      description: 'Keep your lawn healthy and beautiful with professional grub management.',
      color: 'bg-blue-500',
    },
    {
      icon: Leaf,
      title: 'Fungus Control',
      description: 'Advanced treatments to eliminate and prevent fungal growth in your property.',
      color: 'bg-red-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Pest Control <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential to commercial properties, we offer a comprehensive range of pest control services to meet all your needs.
          </p>
        </div>

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
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* No Contracts Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">No Long-Term Contracts Required</h3>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We believe in earning your business with quality service, not contracts. Get the pest control you need, when you need it.
          </p>
        </div>
      </div>
    </section>
  );
}