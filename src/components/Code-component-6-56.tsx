import React, { useState } from 'react';
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
}

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    setIsSubmitted(true);
    reset();
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
            onClick: () => onPageChange('contact'),
            className: 'bg-yellow-500 hover:bg-yellow-600 text-black'
          }
        ]}
        height="h-[400px]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{t('contact.address')}</h3>
                        <p className="text-gray-600">123 Rue de la Propreté<br />75001 Paris, France</p>
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
                        <p className="text-gray-600">+33 1 23 45 67 89</p>
                        <p className="text-sm text-gray-500">Urgences 24h/24</p>
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
                        <p className="text-gray-600">contact@oxygene-proprete.fr</p>
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

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <Card className="text-center p-8">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t('contact.sent.title')}</h3>
                    <p className="text-gray-600 mb-6">{t('contact.sent.thanks')}</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Notre localisation</h2>
          <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-600">Carte interactive - 123 Rue de la Propreté, 75001 Paris</p>
          </div>
        </div>
      </section>
    </div>
  );
}