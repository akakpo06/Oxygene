import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  onPageChange: (page: string) => void;
}

export function Chatbot({ onPageChange }: ChatbotProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.welcome'),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('devis') || message.includes('quote') || message.includes('prix') || message.includes('price')) {
      return t('chatbot.msg.devis');
    }
    
    if (message.includes('service') || message.includes('nettoyage') || message.includes('cleaning')) {
      return t('chatbot.msg.service');
    }
    
    if (message.includes('horaire') || message.includes('hour') || message.includes('quand') || message.includes('when')) {
      return t('chatbot.msg.hours');
    }
    
    if (message.includes('contact') || message.includes('téléphone') || message.includes('phone') || message.includes('adresse')) {
      return t('chatbot.msg.contact');
    }
    
    if (message.includes('urgence') || message.includes('emergency') || message.includes('urgent')) {
      return t('chatbot.msg.emergency');
    }
    
    if (message.includes('bonjour') || message.includes('hello') || message.includes('salut')) {
      return t('chatbot.msg.greeting');
    }
    
    return t('chatbot.msg.default');
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: t('chatbot.quick.quote'), action: () => onPageChange('contact') },
    { text: t('chatbot.quick.services'), action: () => onPageChange('services') },
    { text: t('chatbot.quick.contact'), action: () => onPageChange('contact') }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-xl">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>{t('chatbot.title')}</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}