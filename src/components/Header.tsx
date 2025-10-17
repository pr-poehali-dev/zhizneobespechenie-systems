import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">ИнженерСистемы</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-foreground hover:text-primary transition-colors">
              Сертификаты
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
            Заказать консультацию
          </Button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-foreground hover:text-primary transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-left text-foreground hover:text-primary transition-colors">
              Сертификаты
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contacts')} className="w-full">
              Заказать консультацию
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
