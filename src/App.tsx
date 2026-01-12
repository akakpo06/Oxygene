import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { QuotePage } from './components/QuotePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { Chatbot } from './components/Chatbot';
import { AnimatedHero } from './components/AnimatedHero';
import { ReferencesPage } from './components/ReferencesPage';
import { GalleryPage } from './components/GalleryPage';
import { CareersPage } from './components/CareersPage';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

// Scroll to top whenever the current page changes
useEffect(() => {
  if (typeof window !== 'undefined') {
    try { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); } catch { window.scrollTo(0, 0); }
  }
}, [currentPage]);
''
 const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'quote':
        return <QuotePage />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      // case 'references':
      //   return <ReferencesPage onPageChange={setCurrentPage} />;
      // case 'gallery':
      //   return <GalleryPage onPageChange={setCurrentPage} />;
      case 'careers':
        return <CareersPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer onPageChange={setCurrentPage} />
        {/* <Chatbot onPageChange={setCurrentPage} /> */}
      </div>
    </LanguageProvider>
  );
}