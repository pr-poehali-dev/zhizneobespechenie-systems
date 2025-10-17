import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Wind',
      title: 'Вентиляция и кондиционирование',
      description: 'Проектирование и монтаж систем приточно-вытяжной вентиляции, кондиционирования воздуха',
    },
    {
      icon: 'Flame',
      title: 'Отопление и теплоснабжение',
      description: 'Системы отопления, теплые полы, котельные, тепловые пункты',
    },
    {
      icon: 'Droplet',
      title: 'Водоснабжение и канализация',
      description: 'Внутренние сети водоснабжения, канализации, насосные станции',
    },
    {
      icon: 'Zap',
      title: 'Электроснабжение',
      description: 'Электрические сети, освещение, системы бесперебойного питания',
    },
    {
      icon: 'AlertTriangle',
      title: 'Пожарная безопасность',
      description: 'Системы пожаротушения, дымоудаления, пожарной сигнализации',
    },
    {
      icon: 'Cpu',
      title: 'Автоматизация',
      description: 'Умные системы управления инженерными сетями, диспетчеризация',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный комплекс инженерных решений для жилых, коммерческих и промышленных объектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
