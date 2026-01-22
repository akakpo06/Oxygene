import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { Users, Heart, Award, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        backgroundImage="/assets/images/teamwork.png"
        actions={[
          {
            label: t('common.contact'),
            onClick: () =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                ),
            className: 'bg-yellow-500 hover:bg-yellow-600 text-black'
          }
        ]}
        height="h-[450px]"
      />

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.history.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.history.content')}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span>{t('about.stats.founded')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>{t('about.stats.clients')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-accent" />
                  <span>{t('about.stats.years')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="../../assets/images/oxygene_team.jpg"
                alt="Histoire de l'entreprise"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.team.content')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Marie Dubois</h3>
                <p className="text-gray-600 text-sm mb-2">Directrice générale</p>
                <p className="text-gray-500 text-sm">15 ans d'expérience dans le secteur</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Pierre Martin</h3>
                <p className="text-gray-600 text-sm mb-2">Chef d'équipe</p>
                <p className="text-gray-500 text-sm">Spécialiste en nettoyage industriel</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Sophie Laurent</h3>
                <p className="text-gray-600 text-sm mb-2">Responsable qualité</p>
                <p className="text-gray-500 text-sm">Certifiée en produits écologiques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CSR Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="../../assets/images/mother_charity.jpg"
                alt="Responsabilité sociale"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.csr.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.csr.content')}</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{t('about.csr.products.title')}</h3>
                    <p className="text-gray-600">{t('about.csr.products.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{t('about.csr.actions.title')}</h3>
                    <p className="text-gray-600">{t('about.csr.actions.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{t('about.csr.certifications.title')}</h3>
                    <p className="text-gray-600">{t('about.csr.certifications.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://assocoeurhumanitaire.org/",
                          "_blank"
                      )
                    }
                    className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
                  >
                    {t('about.csr.button')}
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}