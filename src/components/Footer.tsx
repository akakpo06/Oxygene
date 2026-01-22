import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Goal} from 'lucide-react';
import Tiktok from './ui/tiktokIcon';


interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Oxygene Hygiène et Propreté</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook 
                onClick={() =>
                          window.open(
                            "https://www.facebook.com/oxygiene/",
                            "_blank"
                )}
                className="h-5 w-5 text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-colors" 
              />
              <Instagram 
                onClick={() =>
                          window.open(
                            "https://www.instagram.com/oxygene_sarl/",
                            "_blank"
                )}
                className="h-5 w-5 text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-colors" 
              />
              <Linkedin
                onClick={() =>
                          window.open(
                            "https://www.linkedin.com/company/oxygene-hygi%C3%A8ne-et-propret%C3%A9/",
                            "_blank"
                )}
                className="h-5 w-5 text-gray-400 hover:text-white hover:scale-105 cursor-pointer transition-colors" 
              />
              <Tiktok
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@oxygene_sarl",
                    "_blank",
                  )
                }
                className="h-20 w-20 text-gray-400 hover:text-white hover:scale-101 cursor-pointer transition-colors"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('footer.companyName')}</h3>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('services')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('about')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('blog')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.blog')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('gallery')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="text-gray-300 hover:text-white hover:scale-105 cursor-pointer transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('common.our-services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.offices')}</li>
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.commercial')}</li>
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.buildings')}</li>
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.homes')}</li>
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.windows')}</li>
              <li
                onClick={() => onPageChange('services')}
                className="hover:text-white hover:scale-105 cursor-pointer transition-colors"
              >{t('services.carpet')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-12 w-12 text-primary mt-0.5" />
                <div className="text-gray-300">
                  <p>{t('footer.address1')}</p>
                  <p>{t('footer.address2')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">{t('contact.phone.value')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <a href={`mailto:${t('contact.email.value')}`} className="text-gray-300 hover:text-white cursor-pointer transition-colors">{t('contact.email.value')}</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-300">
                  {t('contact.hours.lines').split('\n').map((l, i) => (
                    <p key={i}>{l}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Oxygene Hygiène et Propreté. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}