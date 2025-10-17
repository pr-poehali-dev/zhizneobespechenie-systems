import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Building2" size={28} className="text-primary" />
              <span className="text-xl font-bold">ИнженерСистемы</span>
            </div>
            <p className="text-white/70">
              Профессиональные инженерные решения для вашего объекта
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/70">
              <li>Вентиляция</li>
              <li>Отопление</li>
              <li>Водоснабжение</li>
              <li>Электроснабжение</li>
              <li>Пожарная безопасность</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/70">
              <li>О нас</li>
              <li>Проекты</li>
              <li>Сертификаты</li>
              <li>Вакансии</li>
              <li>Блог</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>+7 (495) 123-45-67</li>
              <li>info@engineer-systems.ru</li>
              <li>г. Москва, ул. Инженерная, 15</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 ИнженерСистемы. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
