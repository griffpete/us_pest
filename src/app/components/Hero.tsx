import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/truck.JPG"
          alt="US Pest service truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/45 via-blue-900/35 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-24 relative z-10">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Protect Your Home,{' '}
            <span className="text-red-400">Naturally</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Family-owned pest control serving St. George, Utah. Professional service without the long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
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
    </section>
  );
}
