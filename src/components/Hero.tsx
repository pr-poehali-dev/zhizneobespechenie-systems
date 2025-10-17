import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Инженерные системы для вашего объекта
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Проектирование, монтаж и обслуживание систем жизнеобеспечения зданий. 
            Энергоэффективность, комфорт и безопасность — наши приоритеты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg">
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')}>
              Посмотреть проекты
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Award" size={48} className="text-primary" />
              <h3 className="text-xl font-semibold">15+ лет опыта</h3>
              <p className="text-muted-foreground text-center">
                Реализовали более 200 проектов различной сложности
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Shield" size={48} className="text-primary" />
              <h3 className="text-xl font-semibold">Гарантия качества</h3>
              <p className="text-muted-foreground text-center">
                Все работы сертифицированы и застрахованы
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Clock" size={48} className="text-primary" />
              <h3 className="text-xl font-semibold">Соблюдение сроков</h3>
              <p className="text-muted-foreground text-center">
                Точное планирование и выполнение в договорные сроки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
