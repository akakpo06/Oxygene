import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Sparkles, 
  Shield, 
  Leaf, 
  CheckCircle, 
  Users, 
  Clock, 
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Handshake,
  Flame,
  HandHeart,
  BadgeCheck,
  Users2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/assets/images/cleaners_group1.png",
      title: t('home.hero.title1'),
      subtitle: t('home.hero.subtitle1')
    },
    {
      image: "/assets/images/cleaning_window_man.jpg",
      title: t('home.hero.title2'),
      subtitle: t('home.hero.subtitle2')
    },
    {
      image: "/assets/images/indoor_cleaning.png",
      title: t('home.hero.title3'),
      subtitle: t('home.hero.subtitle3')
    }
  ];

  const services = [
    { 
      icon: '🏢', 
      title: t('services.offices'), 
      description: t('home.services.desc.offices')
    },
    { 
      icon: '🏪', 
      title: t('services.commercial'), 
      description: t('home.services.desc.commercial')
    },
    { 
      icon: '🏗️', 
      title: t('services.buildings'), 
      description: t('home.services.desc.buildings')
    },
    { 
      icon: '🏠', 
      title: t('services.homes'), 
      description: t('home.services.desc.homes')
    },
    { 
      icon: '🪟', 
      title: t('services.windows'), 
      description: t('home.services.desc.windows')
    },
    { 
      icon: '🪑', 
      title: t('services.carpet'), 
      description: t('home.services.desc.carpet')
    }
  ];

  const clientLogos = [
    { name: t('references.lct'),
      logo: '/assets/images/references/ref_lct.png'
    },
    { name: t('references.scan'),
      logo: '/assets/images/references/ref_scan_togo.png' 
    },
    { name: t('references.cimtogo'),
      logo: '/assets/images/references/ref_cimtogo.png'
    },
    { name: t('references.cofina'), 
      logo: '/assets/images/references/ref_cofina.png'
    },
    { name: t('references.oryx'),
      logo: '/assets/images/references/ref_oryx_energies.png'
    },
    { name: t('references.sunu'),
      logo: '/assets/images/references/ref_sunu.png'
    },
    { name: t('references.living_ressource_centre'),
      logo: '/assets/images/references/ref_living_ressource_centre.png'
    },
    { name: t('references.hotel_sarakawa'),
      logo: '/assets/images/references/ref_hotel_sarakawa.png'
    },
    { name: t('references.ecobank'),
      logo: '/assets/images/references/ref_ecobank.png'
    },
    { name: t('references.presidence'),
      logo: '/assets/images/references/ref_presidence_togo.png'
    },
    { name: t('references.oms'),
      logo: '/assets/images/references/ref_oms.png'
    },
    { name: t('references.ambassade_allemagne'),
      logo: '/assets/images/references/ref_ambassade_allemagne.png'
    },
    { name: t('references.airfrance'),
      logo: '/assets/images/references/ref_airfrance.png'
    },
    { name: t('references.fhi'),
      logo: '/assets/images/references/ref_fhi360.png'
    },
    { name: t('references.ambassade_bresil'),
      logo: '/assets/images/references/ref_ambassade_bresil.png'
    },
    { name: t('references.ambassade_gabon'),
      logo: '/assets/images/references/ref_ambassade_gabon.png'
    },
    { name: t('references.africa_fund'),
      logo: '/assets/images/references/ref_africa_fund.png'
    },
    { name: t('references.aige'),
      logo: '/assets/images/references/ref_aige.png'
    }
  ];

  const blogPosts = [
    {
      title: t('blog.post.1.title'),
      excerpt: t('blog.post.1.excerpt'),
      image: "/assets/images/blogpost/office_lady.jpg",
      date: t('blog.post.1.date')
    },
    {
      title: t('blog.post.3.title'),
      excerpt: t('blog.post.3.excerpt'),
      image: "../../assets/images/cleaning_man_machine.png",
      date: t('blog.post.3.date'),
    },
    {
      title: t('blog.post.4.title'),
      excerpt: t('blog.post.4.excerpt'),
      image: "../../assets/images/teamwork.png",
      date: t('blog.post.4.date'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                <div className="space-x-4">
                  <Button 
                    size="lg" 
                    onClick={() => onPageChange('services')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {t('home.hero.cta')}
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={() =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                  )}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black border-0"
                  >
                    {t('common.contact')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button type="button" title={`Slide ${index + 1}`}
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center-safe" >
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.trust')}</h3>
                <p className="text-gray-600">{t('home.values.trust-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <HandHeart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.respect')}</h3>
                <p className="text-gray-600">{t('home.values.respect-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.passion')}</h3>
                <p className="text-gray-600">{t('home.values.passion-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <BadgeCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.loyalty')}</h3>
                <p className="text-gray-600">{t('home.values.loyalty-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.teamwork')}</h3>
                <p className="text-gray-600">{t('home.values.teamwork-desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600 text-lg">{t('home.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => onPageChange('services')}
              className="bg-primary hover:bg-primary/90"
            >
              {t('common.view-all')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-600">{t('home.why.experience')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">✓</h3>
              <p className="text-gray-600">{t('home.why.certified')}</p>
            </div>
            {/* <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">7/7</h3>
              <p className="text-gray-600">{t('home.why.available')}</p>
            </div> */}
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-600">{t('home.why.guarantee')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Continuous Scroll Carousel */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.clients.title')}</h2>
          
          {/* Scrolling Container */}
          <div className="relative overflow-hidden">
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .carousel-scroll {
                display: flex;
                align-items: center;
                width: max-content;
                animation: scroll 60s linear infinite;
                gap: 2rem;
              }
              
              .carousel-scroll:hover {
                animation-play-state: paused;
              }
              
              .carousel-item {
                flex: 0 0 calc(100vw / 6);
              }

              /* Tablette */
              @media (max-width: 1024px) {
                .carousel-item {
                  flex: 0 0 calc(100vw / 3);
                }
              }

              /* Mobile */
              @media (max-width: 640px) {
                .carousel-item {
                  flex: 0 0 100vw;
                }
              }
                .logo-card {
                height: 8rem; /* 128px */
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `}</style>
            
            <div className="carousel-scroll">
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <div key={`scroll-1-${index}`} className="carousel-item text-center p-4 hover:grayscale-0 transition-all group">
                  <div className="border-0 rounded-lg h-32 flex items-center justify-center flex-col-reverse mb-4 bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                    <ImageWithFallback
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-black group-hover:text-primary transition-colors">{client.name}</span>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <div key={`scroll-2-${index}`} className="carousel-item text-center p-4 hover:grayscale-0 transition-all group">
                  <div className="border-0 rounded-lg h-32 flex items-center justify-center flex-col-reverse mb-4 bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                    <ImageWithFallback
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-black group-hover:text-primary transition-colors">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-100 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.blog.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="ghost" className="p-0 h-auto"
                    onClick={() => onPageChange('blog')}
                    >
                    {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => onPageChange('blog')}
              variant="outline"
            >
              {t('common.view-all')}
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-white" 
      style={{
        background: 'linear-gradient(135deg, #13008B 0%, #2B7DCD 50%, #13008B 100%)'
      }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('finalcta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('finalcta.subtitle')}
          </p>
          <Button 
            size="lg" 
            onClick={() =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                )}
            className="bg-yellow-500 hover:bg-yellow-600 text-black border-0"
          >
            {t('common.contact')}
          </Button>
        </div>
      </section>
    </div>
  );
}