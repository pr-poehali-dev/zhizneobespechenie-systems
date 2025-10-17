import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Бизнес-центр "Технопарк"',
      category: 'Коммерческая недвижимость',
      area: '15 000 м²',
      year: '2024',
      description: 'Комплексное обеспечение инженерными системами современного бизнес-центра класса А. Реализованы системы вентиляции, кондиционирования, автоматизации и энергосбережения.',
      systems: ['Вентиляция', 'Кондиционирование', 'Электроснабжение', 'Автоматизация'],
      image: 'https://cdn.poehali.dev/projects/be49e1b0-89cc-4e8a-ba8c-7835819a4b57/files/8a210a44-c1f5-403f-9116-081799119f64.jpg',
      tourUrl: '#',
    },
    {
      title: 'Производственный комплекс',
      category: 'Промышленность',
      area: '8 000 м²',
      year: '2023',
      description: 'Модернизация инженерных систем производственного комплекса с внедрением энергоэффективных решений и систем автоматического управления.',
      systems: ['Вентиляция', 'Отопление', 'Водоснабжение', 'Пожаротушение'],
      image: 'https://cdn.poehali.dev/projects/be49e1b0-89cc-4e8a-ba8c-7835819a4b57/files/961391f1-cb47-4da8-8727-97450be87fd6.jpg',
      tourUrl: '#',
    },
    {
      title: 'ЖК "Современный квартал"',
      category: 'Жилая недвижимость',
      area: '25 000 м²',
      year: '2023',
      description: 'Полный цикл инженерного обеспечения жилого комплекса: от проектирования до ввода в эксплуатацию и дальнейшего обслуживания.',
      systems: ['Отопление', 'Водоснабжение', 'Канализация', 'Электроснабжение'],
      image: 'https://cdn.poehali.dev/projects/be49e1b0-89cc-4e8a-ba8c-7835819a4b57/files/4e6ee80f-dd90-40da-b8cf-58f062025f7e.jpg',
      tourUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Реализованные проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры наших работ с возможностью виртуальных 3D-туров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <Badge className="mb-2 bg-primary">{project.category}</Badge>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <Icon name="Eye" size={20} className="text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Ruler" size={16} />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{project.year}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{projects[selectedProject].title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="text-center text-white">
                      <Icon name="Move3d" size={64} className="mx-auto mb-4" />
                      <p className="text-lg font-semibold">3D-тур доступен</p>
                      <p className="text-sm">Кликните для просмотра</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Tag" size={20} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Категория</p>
                      <p className="font-semibold">{projects[selectedProject].category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={20} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Площадь</p>
                      <p className="font-semibold">{projects[selectedProject].area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Год реализации</p>
                      <p className="font-semibold">{projects[selectedProject].year}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Описание проекта</h4>
                  <p className="text-muted-foreground">{projects[selectedProject].description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Реализованные системы</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].systems.map((system, idx) => (
                      <Badge key={idx} variant="secondary">{system}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
