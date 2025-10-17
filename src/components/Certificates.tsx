import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      icon: 'Award',
      title: 'ISO 9001:2015',
      description: 'Система менеджмента качества',
    },
    {
      icon: 'Shield',
      title: 'СРО',
      description: 'Свидетельство о допуске к работам',
    },
    {
      icon: 'FileCheck',
      title: 'Лицензия МЧС',
      description: 'На проектирование систем пожарной безопасности',
    },
    {
      icon: 'BadgeCheck',
      title: 'Сертификаты партнеров',
      description: 'Авторизованные специалисты ведущих производителей',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Сертификаты и лицензии</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Вся наша деятельность сертифицирована и соответствует требованиям законодательства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={40} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
