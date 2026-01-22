import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  _hp?: string;
}

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  useEffect(() => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITEKEY;
    if (!siteKey) return;
    const id = 'recaptcha-script';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    s.async = true;
    document.body.appendChild(s);
    return () => {
      // leave script in place — removing can break other pages
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const siteKey = import.meta.env.VITE_RECAPTCHA_SITEKEY;
      let token = '';
      if (siteKey && (window as any).grecaptcha && (window as any).grecaptcha.execute) {
        token = await (window as any).grecaptcha.execute(siteKey, { action: 'contact' });
      }

      const payload = { ...data, token, _hp: data._hp || '' };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        const json = await res.json();
        alert(json?.error || 'Erreur lors de l\'envoi');
      }
    } catch (e) {
      console.error(e);
      alert('Erreur lors de l\'envoi');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
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
        height="h-[400px]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12  mx-auto">
            {/* Contact Information */}
            <div className="lg:max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t('contact.address')}</h3>
                        <p className="text-gray-600">{t('footer.description')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
                        <p className="text-gray-600">{t('contact.phone.value')}</p>
                        {/* <p className="text-sm text-gray-500">Urgences 24h/24</p> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t('contact.email')}</h3>
                        <p className="text-gray-600">{t('contact.email.value')}</p>
                        <p className="text-sm text-gray-500">{t('contact.email.responseTime')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t('contact.hours')}</h3>
                        <div className="text-gray-600">
                          {t('contact.hours.lines').split('\n').map((l, i) => (
                            <p key={i}>{l}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */} {/* Honeypot field to deter bots first input*/}
            {/* <div>
              {isSubmitted ? (
                <Card className="text-center p-8">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                    <p className="text-gray-600 mb-6">
                      Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Envoyer un nouveau message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>{t('contact.form.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      <input type="text" className="hidden" {...register('_hp')} tabIndex={-1} autoComplete="off" />
                      <div>
                        <Label htmlFor="name">{t('contact.form.name')} *</Label>
                        <Input
                          id="name"
                          {...register('name', { required: 'Ce champ est obligatoire' })}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">{t('contact.form.email')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Ce champ est obligatoire',
                            pattern: {
                              value: /^\S+@\S+$/,
                              message: 'Email invalide'
                            }
                          })}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                        <Input
                          id="subject"
                          {...register('subject', { required: 'Ce champ est obligatoire' })}
                          className={errors.subject ? 'border-red-500' : ''}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">{t('contact.form.message')} *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          {...register('message', { required: 'Ce champ est obligatoire' })}
                          className={errors.message ? 'border-red-500' : ''}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                      >
                        {t('contact.form.send')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('contact.map.title')}</h2>
          <div className="bg-gray-300 rounded-lg h-64 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.8039883145827!2d1.2043970000000088!3d6.176727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102159b03d8ba009%3A0x49cb277a875520ec!2sOXYGENE%20Hygi%C3%A8ne%20et%20propret%C3%A9!5e0!3m2!1sfr!2sus!4v1758932909424!5m2!1sfr!2sus"
              title="Notre localisation"
              className="w-full h-full"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}