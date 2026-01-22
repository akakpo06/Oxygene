import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: {
  fr: { [key: string]: string };
  en: { [key: string]: string };
} = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.blog': 'Nos astuces',
    'nav.references': 'Nos références',
    'nav.gallery': 'Galerie',
    'nav.careers': 'Emploi',
    'nav.contact': 'Contact',
    'nav.cta': 'Nous contacter',
    
    // Common
    'common.readMore': 'Lire la suite',
    'common.contact': 'Nous contacter',
    'common.learn-more': 'En savoir plus',
    'common.our-services': 'Nos services',
    'common.view-all': 'Voir tout',
    'finalcta.title': 'Prêt à transformer vos espaces ?',
    'finalcta.subtitle': 'Contactez-nous dès aujourd\'hui pour un devis gratuit et personnalisé',

    //Footer
    'footer.description': 'Solutions de nettoyage professionnelles depuis 2008. Qualité, fiabilité et respect de l\'environnement.', 
    'footer.companyName': 'Oxygene Hygiène et Propreté',
    'footer.navigation': 'Navigation',
    'footer.address1': `Rue AOUISSI (En face du centre de 
    santé communautaire de Be-Klikamé),`,
    'footer.address2': `Lomé 22 BP 
    354 Lomé-Togo`,
    'footer.copyright': '© 2025 Oxygene Hygiène et Propreté. Tous droits réservés.',

    // Homepage
    'home.hero.title1': 'Solutions de nettoyage professionnelles',
    'home.hero.subtitle1': 'Oxygene, votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. Qualité, fiabilité et respect de l\'environnement.',
    'home.hero.title2': 'Nettoyage de vitres professionnel',
    'home.hero.subtitle2': 'Des vitres impeccables pour une image parfaite de votre entreprise',
    'home.hero.title3': 'Expertise en nettoyage de tapis',
    'home.hero.subtitle3': 'Redonnez vie à vos tapis avec nos techniques professionnelles',
    'home.hero.cta': 'Découvrir nos services',
    
    'home.values.title': 'Nos valeurs',
    'home.values.trust': 'Confiance',
    'home.values.trust-desc': 'Des relations solides avec clients, partenaires et collaborateurs',
    'home.values.respect': 'Respect',
    'home.values.respect-desc': 'Nous respectons nos clients, partenaires, équipes et valeurs fondamentales',
    'home.values.passion': 'Passion',
    'home.values.passion-desc': 'Nous exerçons nos métiers avec enthousiasme et recherche d\'excellence',
    'home.values.loyalty': 'Loyauté',
    'home.values.loyalty-desc': 'Loyauté envers nos clients et nos équipes',
    'home.values.teamwork': 'Travail d\'équipe',
    'home.values.teamwork-desc': 'Collaboration et solidarité au sein de l\'équipe',
    
    'home.services.title': 'Nos services',
    'home.services.subtitle': 'Des solutions adaptées à tous vos besoins',
    
    'home.why.title': 'Pourquoi nous choisir ?',
    'home.why.experience': '+ de 15 ans d\'expérience',
    'home.why.certified': 'Équipe certifiée',
    'home.why.available': 'Disponible 7j/7',
    'home.why.guarantee': 'Satisfaction garantie',
    
    'home.clients.title': 'Ils nous font confiance',
    'home.blog.title': 'Nos derniers conseils',
    'home.services.desc.offices': 'Espaces de travail propres et sains',
    'home.services.desc.commercial': 'Commerces et magasins impeccables',
    'home.services.desc.buildings': 'Entretien complet de bâtiments',
    'home.services.desc.homes': 'Ménage résidentiel de qualité',
    'home.services.desc.windows': 'Vitres cristallines',
    'home.services.desc.carpet': 'Tapis et moquettes comme neufs',
    
    // Services
    'services.title': 'Nos services',
    'services.subtitle': 'Solutions professionnelles pour tous vos besoins de nettoyage',
    'services.parquet': 'Nettoyage de parquet',
    'services.carpet': 'Nettoyage de tapis',
    'services.marble': 'Nettoyage de marbre',
    'services.windows': 'Nettoyage de vitres',
    'services.offices': 'Nettoyage de bureaux',
    'services.commercial': 'Nettoyage commercial',
    'services.buildings': 'Nettoyage de bâtiments',
    'services.homes': 'Nettoyage de maisons',
    
    // About
    'about.title': 'À propos de Oxygene',
    'about.subtitle': 'Notre histoire, notre équipe, nos engagements',
    'about.history.title': 'Notre histoire',
    'about.history.content': 'Fondée en 2008, Oxygene s\'est imposée comme un leader dans le domaine du nettoyage professionnel. Notre engagement envers la qualité et l\'innovation nous a permis de développer une clientèle fidèle.',
    'about.team.title': 'Notre équipe',
    'about.team.content': 'Une équipe de professionnels expérimentés et formés aux dernières techniques de nettoyage. Chaque membre de notre équipe partage nos valeurs de qualité et de respect.',
    'about.csr.title': 'Responsabilité sociale',
    'about.csr.content': 'Nous nous engageons à utiliser des produits écologiques et à adopter des pratiques durables pour préserver l\'environnement.',
    'about.csr.button': 'En savoir plus',
    'about.stats.founded': 'Fondée en 2008',
    'about.stats.clients': 'Plus de 500 clients satisfaits',
    'about.stats.years': "15+ années d'expérience",
    'about.csr.products.title': 'Produits écologiques',
    'about.csr.products.desc': "100% de nos produits sont certifiés éco-responsables",
    'about.csr.actions.title': 'Actions solidaires',
    'about.csr.actions.desc': 'Partenariats avec des associations locales',
    'about.csr.certifications.title': 'Certifications',
    'about.csr.certifications.desc': 'ISO 14001 et labels environnementaux',
    'about.team.member1.role': 'Directrice générale',
    'about.team.member1.bio': "15 ans d'expérience dans le secteur",
    'about.team.member2.role': "Chef d'équipe",
    'about.team.member2.bio': 'Spécialiste en nettoyage industriel',
    'about.team.member3.role': 'Responsable qualité',
    'about.team.member3.bio': 'Certifiée en produits écologiques',
    
    // Blog
    'blog.title': 'Nos astuces',
    'blog.subtitle': 'Conseils et astuces pour l\'entretien et le nettoyage',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.hours': 'Horaires',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.sent.title': 'Message envoyé !',
    'contact.sent.thanks': 'Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.',
    'contact.info.title': 'Nos coordonnées',
    'contact.map.title': 'Notre localisation',
    'contact.phone.value': '+228 93252996 / +228 96130264',
    'contact.email.value': 'oxygenecontact@yahoo.com',
    'contact.email.responseTime': 'Réponse sous 24h',
    'contact.hours.lines': 'Lundi - Vendredi: 8h00 - 18h00\nSamedi: 9h00 - 16h00',
    
    // Quote form
    'quote.title': 'Demander un devis',
    'quote.subtitle': 'Obtenez un devis personnalisé gratuitement',
    'quote.form.name': 'Nom complet',
    'quote.form.email': 'Adresse email',
    'quote.form.phone': 'Téléphone',
    'quote.form.service': 'Type de service',
    'quote.form.area': 'Surface / Description',
    'quote.form.urgency': 'Urgence',
    'quote.form.message': 'Message complémentaire',
    'quote.form.submit': 'Demander le devis',
    'quote.form.title': 'Formulaire de demande',
    'quote.contact.title': 'Contact direct',
    'quote.select.service.placeholder': 'Sélectionnez un service',
    'quote.select.urgency.placeholder': 'Sélectionnez l\'urgence',
    
    // Chatbot
    'chatbot.placeholder': 'Posez votre question...',
    'chatbot.send': 'Envoyer',
    'chatbot.welcome': 'Bonjour ! Comment puis-je vous aider ?',
    'chatbot.msg.devis': "Je serais ravi de vous aider avec un devis ! Cliquez sur 'Demander un devis' pour remplir notre formulaire détaillé, ou appelez-nous au +33 1 23 45 67 89.",
    'chatbot.msg.service': "Nous offrons une gamme complète de services : nettoyage de bureaux, commerces, bâtiments, maisons, vitres, tapis et parquet. Quel type de service vous intéresse ?",
    'chatbot.msg.hours': "Nous sommes ouverts du lundi au vendredi de 8h à 18h, le samedi de 9h à 16h, et disponibles sur demande le dimanche. Pour les urgences, nous intervenons 7j/7.",
    'chatbot.msg.contact': "Vous pouvez nous contacter au +33 1 23 45 67 89 ou par email à contact@oxygene-proprete.fr. Notre adresse : 123 Rue de la Propreté, 75001 Paris.",
    'chatbot.msg.emergency': "Pour les interventions urgentes, appelez-nous directement au +33 1 23 45 67 89. Nous avons une équipe d'astreinte disponible 24h/24 pour les urgences.",
    'chatbot.msg.greeting': "Bonjour ! Je suis là pour vous aider avec toutes vos questions sur nos services de nettoyage. Comment puis-je vous assister aujourd'hui ?",
    'chatbot.msg.default': "Merci pour votre question ! Pour une réponse détaillée, je vous recommande de nous contacter directement au +33 1 23 45 67 89 ou de remplir notre formulaire de contact. Notre équipe sera ravie de vous aider !",
    'chatbot.quick.quote': 'Demander un devis',
    'chatbot.quick.services': 'Voir nos services',
    'chatbot.quick.contact': 'Nous contacter',
    'chatbot.title': 'Assistant Oxygene',

    // Blog
    'blog.search.placeholder': 'Rechercher un article...',
    'blog.filter.all': 'Tous',
    'blog.no.results': 'Aucun article trouvé pour votre recherche.',
    'blog.categories.Bureaux': 'Bureaux',
    'blog.categories.Écologie': 'Écologie',
    'blog.categories.Techniques': 'Techniques',
    'blog.categories.Spécialisé': 'Spécialisé',
    'blog.categories.Restauration': 'Restauration',
    'blog.categories.Santé': 'Santé',

    // Blog posts (FR)
    'blog.post.1.title': '5 conseils pour maintenir un bureau propre',
    'blog.post.1.excerpt': 'Découvrez nos astuces pour garder votre espace de travail impeccable au quotidien et améliorer la productivité.',
    'blog.post.1.fulltext': 'Découvrez nos astuces pour garder votre espace de travail impeccable au quotidien et améliorer la productivité. Un bureau propre favorise un environnement sain et agréable, propice à la concentration et à l’efficacité. Voici cinq conseils essentiels pour y parvenir : 1. Établissez une routine de nettoyage quotidienne : Prenez quelques minutes chaque jour pour ranger votre bureau, jeter les déchets et essuyer les surfaces. 2. Utilisez des produits adaptés : Choisissez des produits de nettoyage efficaces mais respectueux de l\'environnement pour éviter les allergies et préserver la qualité de l\'air. 3. Organisez vos fournitures : Utilisez des boîtes, des tiroirs et des organisateurs pour garder vos affaires en ordre et éviter l\'encombrement. 4. Nettoyez régulièrement les équipements électroniques : Claviers, souris et écrans accumulent poussière et bactéries, pensez à les désinfecter fréquemment. 5. Impliquez toute l\'équipe : Encouragez vos collègues à participer au maintien de la propreté du bureau pour créer un environnement collectif agréable.',
    'blog.post.1.date': '15 Nov 2024',
    'blog.post.1.readTime': '5 min',

    // post 3
    'blog.post.3.title': 'Entretien des sols : techniques professionnelles',
    'blog.post.3.excerpt': 'Les secrets d\'un nettoyage de sol durable et efficace selon le type de revêtement.',
    'blog.post.3.fulltext': 'Les secrets d\'un nettoyage de sol durable et efficace selon le type de revêtement. L\'entretien des sols est une tâche essentielle pour maintenir la propreté et l\'esthétique des espaces intérieurs. Chaque type de revêtement, qu\'il s\'agisse de carrelage, de bois, de moquette ou de vinyle, nécessite des techniques spécifiques pour garantir un nettoyage optimal sans endommager la surface. Pour les sols en carrelage, l\'utilisation d\'un balai à franges humide avec un détergent doux est recommandée pour éliminer la saleté sans rayer. Les sols en bois nécessitent un soin particulier avec des produits spécialement formulés pour préserver leur finition et éviter l\'humidité excessive. La moquette, quant à elle, bénéficie d\'un nettoyage régulier à l\'aspirateur et d\'un shampooing périodique pour éliminer les taches et les allergènes. Enfin, les sols en vinyle peuvent être nettoyés efficacement avec une solution d\'eau tiède et de savon doux. En adoptant ces techniques professionnelles adaptées à chaque type de sol, il est possible de prolonger la durée de vie des revêtements tout en assurant un environnement propre et sain.',
    'blog.post.3.date': '8 Nov 2024',
    'blog.post.3.readTime': '6 min',

    // post 4
    'blog.post.4.title': 'Nettoyage après travaux : guide complet',
    'blog.post.4.excerpt': 'Tout ce qu\'il faut savoir pour un nettoyage efficace après des travaux de rénovation.',
    'blog.post.4.fulltext': 'Tout ce qu\'il faut savoir pour un nettoyage efficace après des travaux de rénovation. Le nettoyage après travaux est une étape cruciale pour rendre un espace habitable et agréable après des rénovations ou des constructions. Ce processus peut être complexe en raison de la poussière, des débris et des résidus laissés par les travaux. Pour un nettoyage efficace, il est essentiel de suivre une approche méthodique. Commencez par éliminer les gros débris à l\'aide d\'une pelle et d\'un balai, puis utilisez un aspirateur industriel pour enlever la poussière fine qui s\'est déposée sur toutes les surfaces. Les fenêtres, les murs et les sols doivent être nettoyés avec des produits adaptés pour éliminer les taches de peinture, de colle ou de plâtre. N\'oubliez pas de vérifier les systèmes de ventilation et les conduits d\'air, qui peuvent également accumuler de la poussière. Enfin, un nettoyage en profondeur des sanitaires et des cuisines est nécessaire pour garantir un environnement sain. En suivant ces étapes, vous assurerez un nettoyage complet et professionnel après vos travaux.',
    'blog.post.4.date': '5 Nov 2024',
    'blog.post.4.readTime': '8 min',
    'blog.readTimeSuffix': 'de lecture',

    // Quote / Request
    'quote.submitted.title': 'Demande reçue !',
    'quote.submitted.thanks': 'Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais pour discuter de vos besoins et vous proposer une solution adaptée.',
    'quote.submitted.responseTime': 'Temps de réponse habituel : Moins de 2 heures pendant les heures ouvrables',
    'quote.newRequest': 'Faire une nouvelle demande',
    'quote.form.placeholder.area': 'Décrivez la surface à nettoyer, le nombre de pièces, étages, etc.',
    'quote.form.placeholder.message': 'Informations complémentaires, demandes spéciales, etc.',
    'quote.urgent.call': "Appeler l'urgence",
    'quote.urgent.title': "Intervention d'urgence",
    'quote.urgent.desc': "Besoin d'une intervention immédiate ? Notre équipe d'astreinte est disponible 24h/24.",
    'quote.free.title': 'Devis gratuit',
    'quote.free.desc': 'Tous nos devis sont gratuits et sans engagement. Réponse sous 2h pendant les heures ouvrables.',
    'quote.urgency.low': 'Pas urgent (dans la semaine)',
    'quote.urgency.medium': 'Modéré (dans 2-3 jours)',
    'quote.urgency.high': 'Urgent (dans 24h)',
    'quote.urgency.emergency': 'Urgence (immédiat)',

    // references
    'references.lct' : 'Terminal de Conteneurs de Lomé',
    'references.scan' : 'SCAN Togo',
    'references.cimtogo' : 'Cimtogo',
    'references.cofina' : 'Cofina',
    'references.oryx' : 'Oryx Energies',
    'references.sunu' : 'Sunu Assurances',
    'references.living_ressource_centre' : 'The Living Stones Resources Center',
    'references.hotel_sarakawa' : 'Hotel Sarakawa',
    'references.ecobank' : 'Ecobank Togo',
    'references.presidence' : 'Présidence de la République du Togo',
    'references.oms' : 'OMS Togo',
    'references.ambassade_allemagne' : 'Ambassade d\'Allemagne au Togo',
    'references.airfrance' : 'Air France',
    'references.fhi' : 'FHI 360',
    'references.ambassade_bresil' : 'Ambassade du Brésil au Togo',
    'references.ambassade_gabon' : 'Ambassade du Gabon au Togo',
    'references.africa_fund' : 'African Guarantee Fund',
    'references.aige' : 'Aéroport International Gnassingbé Eyadéma',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Tips',
    'nav.references': 'References',
    'nav.gallery': 'Gallery',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact us',
    
    // Common
    'common.readMore': 'Read more',
    'common.contact': 'Contact us',
    'common.learn-more': 'Learn more',
    'common.our-services': 'Our services',
    'common.view-all': 'View all',
    'finalcta.title': 'Ready to transform your spaces?',
    'finalcta.subtitle': 'Contact us today for a free, personalized quote',
    
    //Footer
    'footer.description': 'Professional cleaning solutions since 2008. Quality, reliability and environmental respect.',
    'footer.companyName': 'Oxygene Hygiène et Propreté',
    'footer.navigation': 'Navigation',
    'footer.copyright': '© 2025 Oxygene Hygiène et Propreté. All rights reserved.',
    'footer.address1': 'Rue AOUISSI (In front of the Be-Klikamé community health center),',
    'footer.address2': 'Lomé 22 BP 354 Lomé-Togo',

    // Homepage
    'home.hero.title1': 'Professional Cleaning Solutions',
    'home.hero.subtitle1': 'Oxygene, your trusted partner for all your professional cleaning needs. Quality, reliability and environmental respect.',
    'home.hero.title2': 'Professional window cleaning',
    'home.hero.subtitle2': 'Spotless windows for a perfect image of your business',
    'home.hero.title3': 'Carpet cleaning expertise',
    'home.hero.subtitle3': 'Bring your carpets back to life with our professional techniques',
    'home.hero.cta': 'Discover our services',
    
    'home.values.title': 'Our values',
    'home.values.trust': 'Professionalism',
    'home.values.trust-desc': 'Punctual and professional service',
    'home.values.respect': 'Respect',
    'home.values.respect-desc': 'Respect of the environment and clients',
    'home.values.passion': 'Passion',
    'home.values.passion-desc': 'Passion for cleaning and excellence',
    'home.values.loyalty': 'Loyalty',
    'home.values.loyalty-desc': 'Loyalty towards our clients and teams',
    'home.values.teamwork': 'Teamwork',
    'home.values.teamwork-desc': 'Collaboration and solidarity within the team',
    
    'home.services.title': 'Our services',
    'home.services.subtitle': 'Solutions adapted to all your needs',
    
    'home.why.title': 'Why choose us?',
    'home.why.experience': '15+ years of experience',
    'home.why.certified': 'Certified team',
    'home.why.available': 'Available 7 days a week',
    'home.why.guarantee': 'Satisfaction guaranteed',
    
    'home.clients.title': 'They trust us',
    'home.blog.title': 'Our latest tips',
    'home.services.desc.offices': 'Clean and healthy workspaces',
    'home.services.desc.commercial': 'Impeccable shops and stores',
    'home.services.desc.buildings': 'Comprehensive building maintenance',
    'home.services.desc.homes': 'Quality residential cleaning',
    'home.services.desc.windows': 'Crystal-clear windows',
    'home.services.desc.carpet': 'Carpets and rugs like new',
    
    // Services
    'services.title': 'Our services',
    'services.subtitle': 'Professional solutions for all your cleaning needs',
    'services.parquet': 'Parquet cleaning',
    'services.carpet': 'Carpet cleaning',
    'services.marble': 'Marble cleaning',
    'services.windows': 'Window cleaning',
    'services.offices': 'Office cleaning',
    'services.commercial': 'Commercial cleaning',
    'services.buildings': 'Building cleaning',
    'services.homes': 'House cleaning',
    
    // About
    'about.title': 'About Oxygene',
    'about.subtitle': 'Our story, our team, our commitments',
    'about.history.title': 'Our history',
    'about.history.content': 'Founded in 2008, Oxygene has established itself as a leader in professional cleaning. Our commitment to quality and innovation has allowed us to develop a loyal clientele.',
    'about.team.title': 'Our team',
    'about.team.content': 'A team of experienced professionals trained in the latest cleaning techniques. Each team member shares our values of quality and respect.',
    'about.csr.title': 'Social responsibility',
    'about.csr.content': 'We are committed to using eco-friendly products and adopting sustainable practices to preserve the environment.',
    'about.csr.button': 'Learn more', 
    'about.stats.founded': 'Founded in 2008',
    'about.stats.clients': 'Over 500 satisfied clients',
    'about.stats.years': '15+ years of experience',
    'about.csr.products.title': 'Eco-friendly products',
    'about.csr.products.desc': '100% of our products are eco-certified',
    'about.csr.actions.title': 'Solidarity actions',
    'about.csr.actions.desc': 'Partnerships with local charities',
    'about.csr.certifications.title': 'Certifications',
    'about.csr.certifications.desc': 'ISO 14001 and environmental labels',
    'about.team.member1.role': 'General Manager',
    'about.team.member1.bio': '15 years of experience in the industry',
    'about.team.member2.role': 'Team Lead',
    'about.team.member2.bio': 'Industrial cleaning specialist',
    'about.team.member3.role': 'Quality Manager',
    'about.team.member3.bio': 'Certified in eco-friendly products',
    
    // Blog
    'blog.title': 'Our tips',
    'blog.subtitle': 'Tips and advice for maintenance and cleaning',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'We are here to listen',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Hours',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.sent.title': 'Message sent!',
    'contact.sent.thanks': 'Thank you for your message. Our team will contact you shortly.',
    'contact.info.title': 'Contact information',
    'contact.map.title': 'Our location',
    'contact.phone.value': '+228 93252996 / +228 96130264',
    'contact.email.value': 'oxygenecontact@yahoo.com',
    'contact.email.responseTime': 'Response within 24h',
    'contact.hours.lines': 'Monday - Friday: 8:00 - 18:00\nSaturday: 9:00 - 16:00',
    
    // Quote form
    'quote.title': 'Get a quote',
    'quote.subtitle': 'Get a personalized quote for free',
    'quote.form.name': 'Full name',
    'quote.form.email': 'Email address',
    'quote.form.phone': 'Phone',
    'quote.form.service': 'Service type',
    'quote.form.area': 'Area / Description',
    'quote.form.urgency': 'Urgency',
    'quote.form.message': 'Additional message',
    'quote.form.submit': 'Request quote',
    'quote.form.title': 'Request form',
    'quote.contact.title': 'Direct contact',
    'quote.select.service.placeholder': 'Select a service',
    'quote.select.urgency.placeholder': 'Select urgency',
    
    // Chatbot
    'chatbot.placeholder': 'Ask your question...',
    'chatbot.send': 'Send',
    'chatbot.welcome': 'Hello! How can I help you?',
    'chatbot.msg.devis': "I'd be happy to help with a quote! Click 'Request quote' to fill our detailed form, or call us at +33 1 23 45 67 89.",
    'chatbot.msg.service': 'We offer a full range of services: office, retail, building, home, window, carpet and parquet cleaning. Which service are you interested in?',
    'chatbot.msg.hours': 'We are open Monday to Friday 8am-6pm, Saturday 9am-4pm, and available on request on Sundays. For emergencies, we operate 7 days a week.',
    'chatbot.msg.contact': 'You can contact us at +33 1 23 45 67 89 or by email at contact@oxygene-proprete.fr. Our address: 123 Rue de la Propreté, 75001 Paris.',
    'chatbot.msg.emergency': 'For urgent interventions, call us at +33 1 23 45 67 89. Our on-call team is available 24/7 for emergencies.',
    'chatbot.msg.greeting': "Hello! I'm here to help with any questions about our cleaning services. How can I assist today?",
    'chatbot.msg.default': "Thanks for your question! For a detailed answer, please contact us at +33 1 23 45 67 89 or fill our contact form. Our team will be happy to help!",
    'chatbot.quick.quote': 'Request quote',
    'chatbot.quick.services': 'View our services',
    'chatbot.quick.contact': 'Contact us',
    'chatbot.title': 'Oxygene Assistant',

    // Blog
    'blog.search.placeholder': 'Search an article...',
    'blog.filter.all': 'All',
    'blog.no.results': 'No articles found for your search.',
    'blog.categories.Bureaux': 'Offices',
    'blog.categories.Écologie': 'Ecology',
    'blog.categories.Techniques': 'Techniques',
    'blog.categories.Spécialisé': 'Specialized',
    'blog.categories.Restauration': 'Catering',
    'blog.categories.Santé': 'Health',

    // Blog posts (EN)
    'blog.post.1.title': '5 tips to keep an office clean',
    'blog.post.1.excerpt': 'Discover our tips to keep your workspace spotless every day and improve productivity.',
    'blog.post.1.fulltext': 'Discover our tips to keep your workspace spotless every day and improve productivity. A clean office promotes a healthy and pleasant environment, conducive to concentration and efficiency. Here are five essential tips: 1. Establish a daily cleaning routine: Take a few minutes each day to tidy your desk, throw away rubbish and wipe surfaces. 2. Use appropriate products: Choose cleaning products that are effective yet environmentally friendly to avoid allergies and preserve air quality. 3. Organize your supplies: Use boxes, drawers and organizers to keep your things in order and avoid clutter. 4. Clean electronic equipment regularly: Keyboards, mice and screens accumulate dust and bacteria—disinfect them often. 5. Involve the whole team: Encourage colleagues to help maintain office cleanliness to create a pleasant collective environment.',
    'blog.post.1.date': '15 Nov 2024',
    'blog.post.1.readTime': '5 min',
    'blog.post.3.title': 'Floor maintenance: professional techniques',
    'blog.post.3.excerpt': 'The secrets of durable and effective floor cleaning depending on the type of covering.',
    'blog.post.3.fulltext': 'The secrets of durable and effective floor cleaning depending on the type of covering. Floor maintenance is essential to keep indoor spaces clean and attractive. Each type of covering—tile, wood, carpet or vinyl—requires specific techniques to ensure optimal cleaning without damaging the surface. For tiled floors, use a damp mop with a mild detergent to remove dirt without scratching. Wooden floors need special care with products formulated to preserve the finish and avoid excess moisture. Carpets benefit from regular vacuuming and periodic shampooing to remove stains and allergens. Vinyl floors can be cleaned effectively with warm water and mild soap. Applying these professional techniques adapted to each floor type helps extend the life of the coverings while ensuring a clean, healthy environment.',
    'blog.post.3.date': '8 Nov 2024',
    'blog.post.3.readTime': '6 min',
    'blog.post.4.title': 'Post-construction cleaning: complete guide',
    'blog.post.4.excerpt': 'Everything you need to know for effective cleaning after renovation work.',
    'blog.post.4.fulltext': 'Everything you need to know for effective cleaning after renovation work. Post-construction cleaning is crucial to make a space habitable and pleasant after renovations or building work. This process can be complex due to dust, debris and residues left by the works. To clean effectively, start by removing large debris with a shovel and broom, then use an industrial vacuum to remove fine dust from all surfaces. Windows, walls and floors should be cleaned with suitable products to remove paint, glue or plaster stains. Also check ventilation systems and air ducts, which can accumulate dust. Finally, deep cleaning of bathrooms and kitchens is necessary to ensure a healthy environment. By following these steps, you will achieve a complete, professional post-construction cleaning.',
    'blog.post.4.date': '5 Nov 2024',
    'blog.post.4.readTime': '8 min',
    'blog.readTimeSuffix': 'read',
    
    // Quote / Request
    'quote.submitted.title': 'Request received!',
    'quote.submitted.thanks': 'Thank you for your quote request. Our team will contact you shortly to discuss your needs and propose a suitable solution.',
    'quote.submitted.responseTime': 'Typical response time: Less than 2 hours during business hours',
    'quote.newRequest': 'Make a new request',
    'quote.form.placeholder.area': 'Describe the area to be cleaned, number of rooms, floors, etc.',
    'quote.form.placeholder.message': 'Additional information, special requests, etc.',
    'quote.urgent.call': 'Call emergency',
    'quote.urgent.title': 'Emergency intervention',
    'quote.urgent.desc': "Need immediate intervention? Our on-call team is available 24/7.",
    'quote.free.title': 'Free quote',
    'quote.free.desc': 'All our quotes are free and without obligation. Response within 2 hours during business hours.',
    'quote.urgency.low': 'Not urgent (within the week)',
    'quote.urgency.medium': 'Moderate (within 2-3 days)',
    'quote.urgency.high': 'Urgent (within 24h)',
    'quote.urgency.emergency': 'Emergency (immediate)',

    // references
    'references.lct' : 'Lomé Container Terminal',
    'references.scan' : 'SCAN Togo',
    'references.cimtogo' : 'Cimtogo',
    'references.cofina' : 'Cofina',
    'references.oryx' : 'Oryx Energy',
    'references.sunu' : 'Sunu Insurances',
    'references.living_ressource_centre' : 'The Living Stones Resources Center',
    'references.hotel_sarakawa' : 'Sarakawa Hotel',
    'references.ecobank' : 'Ecobank Togo',
    'references.presidence' : 'Presidency of the Republic of Togo',
    'references.oms' : 'WHO Togo',
    'references.ambassade_allemagne' : 'German Embassy in Togo',
    'references.airfrance' : 'Air France',
    'references.fhi' : 'FHI 360',
    'references.ambassade_bresil' : 'Brazilian Embassy in Togo',
    'references.ambassade_gabon' : 'Gabon Embassy in Togo',
    'references.africa_fund' : 'African Guarantee Fund',
    'references.aige' : 'Gnassingbé Eyadéma International Airport',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}