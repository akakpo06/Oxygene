import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { Search, Calendar, ArrowRight, Tag, Fullscreen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BlogPostModal } from "./ui/blogpost_modal";

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: t('blog.post.1.title'),
      excerpt: t('blog.post.1.excerpt'),
      fulltext: t('blog.post.1.fulltext'),
      image: "../../assets/images/blogpost/office_lady.jpg",
      date: t('blog.post.1.date'),
      category: 'blog.categories.Bureaux',
      readTime: t('blog.post.1.readTime')
    },
    // {
    //   id: 2,
    //   title: 'Produits écologiques : l\'avenir du nettoyage',
    //   excerpt: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur du nettoyage professionnel.',
    //   fulltext: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur du nettoyage professionnel. L\'utilisation de produits écologiques dans le nettoyage professionnel est devenue une priorité pour de nombreuses entreprises soucieuses de leur impact environnemental. Ces produits, souvent biodégradables et non toxiques, offrent une alternative sûre aux produits chimiques traditionnels qui peuvent être nocifs pour la santé humaine et l\'écosystème. En adoptant des solutions de nettoyage vertes, les entreprises contribuent à la réduction des émissions de gaz à effet de serre, à la préservation de la biodiversité et à la protection des ressources en eau. De plus, les produits écologiques sont souvent tout aussi efficaces que leurs homologues chimiques, offrant des résultats impeccables sans compromettre la sécurité. En intégrant ces pratiques durables, le secteur du nettoyage professionnel joue un rôle crucial dans la promotion d\'un avenir plus vert et plus sain pour tous.',
    //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    //   date: '12 Nov 2024',
    //   category: 'Écologie',
    //   readTime: '7 min'
    // },
    {
      id: 3,
      title: t('blog.post.3.title'),
      excerpt: t('blog.post.3.excerpt'),
      fulltext: t('blog.post.3.fulltext'),
      image: "../../assets/images/cleaning_man_machine.png",
      date: t('blog.post.3.date'),
      category: 'blog.categories.Techniques',
      readTime: t('blog.post.3.readTime')
    },
    {
      id: 4,
      title: t('blog.post.4.title'),
      excerpt: t('blog.post.4.excerpt'),
      fulltext: t('blog.post.4.fulltext'),
      image: "../../assets/images/teamwork.png",
      date: t('blog.post.4.date'),
      category: 'blog.categories.Spécialisé',
      readTime: t('blog.post.4.readTime')
    },
    // {
    //   id: 5,
    //   title: 'Hygiène en cuisine professionnelle',
    //   excerpt: 'Normes et bonnes pratiques pour maintenir une hygiène irréprochable en restauration.',
    //   fulltext: 'Normes et bonnes pratiques pour maintenir une hygiène irréprochable en restauration. L\'hygiène en cuisine professionnelle est un élément fondamental pour garantir la sécurité alimentaire et la satisfaction des clients. Le respect des normes sanitaires est impératif pour prévenir les contaminations et assurer un environnement de travail sain. Parmi les bonnes pratiques à adopter, le lavage régulier des mains, le port de vêtements appropriés et l\'utilisation de gants sont essentiels pour minimiser les risques de transmission de bactéries. De plus, il est crucial de nettoyer et désinfecter fréquemment les surfaces de travail, les ustensiles et les équipements de cuisine. La gestion correcte des déchets et le stockage adéquat des aliments, notamment en respectant les températures recommandées, contribuent également à maintenir un haut niveau d\'hygiène. En formant le personnel aux procédures d\'hygiène et en effectuant des contrôles réguliers, les établissements de restauration peuvent garantir la sécurité alimentaire et offrir une expérience culinaire de qualité à leurs clients.',
    //   image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    //   date: '2 Nov 2024',
    //   category: 'Restauration',
    //   readTime: '10 min'
    // },
    // {
    //   id: 6,
    //   title: 'Désinfection : protocoles COVID-19',
    //   excerpt: 'Mise en place des protocoles de désinfection adaptés aux nouvelles exigences sanitaires.',
    //   fulltext: 'Mise en place des protocoles de désinfection adaptés aux nouvelles exigences sanitaires. La pandémie de COVID-19 a mis en lumière l\'importance cruciale des protocoles de désinfection dans les espaces publics et professionnels. Pour minimiser la propagation du virus, il est essentiel d\'adopter des mesures rigoureuses de nettoyage et de désinfection. Cela inclut l\'utilisation de produits homologués par les autorités sanitaires, tels que l\'eau de Javel diluée ou les solutions à base d\'alcool, pour désinfecter les surfaces fréquemment touchées comme les poignées de porte, les interrupteurs, les comptoirs et les équipements partagés. Il est également recommandé d\'aérer régulièrement les espaces intérieurs pour renouveler l\'air et réduire la concentration virale. La formation du personnel aux bonnes pratiques de désinfection et le respect des consignes sanitaires sont des éléments clés pour assurer un environnement sûr. En mettant en œuvre ces protocoles adaptés, les entreprises peuvent contribuer à la protection de la santé publique tout en rassurant leurs clients et employés.',
    //   image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600",
    //   date: '30 Oct 2024',
    //   category: 'Santé',
    //   readTime: '9 min'
    // }
  ];

  const categories = ['blog.filter.all', 'blog.categories.Bureaux', 'blog.categories.Écologie', 'blog.categories.Techniques', 'blog.categories.Spécialisé', 'blog.categories.Restauration', 'blog.categories.Santé'];
  const [selectedCategory, setSelectedCategory] = useState('blog.filter.all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'blog.filter.all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        backgroundImage="/assets/images/simple_cleaning_woman.png"
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
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-primary' : ''}
                >
                  {t(category)}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostModal
                key={post.id}
                post={{
                  title: post.title,
                  description: post.excerpt,
                  content: (
                    <div>
                      <p>{post.fulltext}</p>
                    </div>
                  ),
                  image: post.image,
                }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {t(post.category)}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime} {t('blog.readTimeSuffix')}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                  
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </BlogPostModal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('blog.no.results')}</p>
            </div>
          )}

          {/* Newsletter Signup */}
          {/* <div className="mt-16">
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
                <p className="mb-6 opacity-90">
                  Recevez nos derniers conseils et astuces de nettoyage directement dans votre boîte mail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Votre adresse email"
                    className="bg-white text-black"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    S'abonner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>
    </div>
  );
}