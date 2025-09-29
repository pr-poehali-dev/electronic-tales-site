import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Character {
  name: string;
  role: string;
  age?: string;
}

interface StoryExample {
  title: string;
  description: string;
  image: string;
  price: string;
  characters: string[];
}

const storyExamples: StoryExample[] = [
  {
    title: "Волшебное приключение Лизы",
    description: "Захватывающая история о том, как девочка Лиза отправилась в волшебный лес и подружилась с говорящими животными.",
    image: "img/e1c5633e-5338-4e77-bc91-bcd8483d604d.jpg",
    price: "990₽",
    characters: ["Лиза", "Мама", "Волшебный единорог"]
  },
  {
    title: "Космическое путешествие Максима",
    description: "Удивительная сказка о мальчике, который полетел к звёздам и встретил добрых инопланетян.",
    image: "img/e1c5633e-5338-4e77-bc91-bcd8483d604d.jpg",
    price: "990₽",
    characters: ["Максим", "Папа", "Робот Зум"]
  },
  {
    title: "Подводное царство Софии",
    description: "Волшебная история о девочке, которая превратилась в русалочку и спасла морское королевство.",
    image: "img/e1c5633e-5338-4e77-bc91-bcd8483d604d.jpg",
    price: "990₽",
    characters: ["София", "Бабушка", "Дельфин Плеш"]
  }
];

function Index() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [newCharacter, setNewCharacter] = useState<Character>({ name: '', role: '', age: '' });
  const [storyTheme, setStoryTheme] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const addCharacter = () => {
    if (newCharacter.name && newCharacter.role) {
      setCharacters([...characters, newCharacter]);
      setNewCharacter({ name: '', role: '', age: '' });
    }
  };

  const removeCharacter = (index: number) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  const Header = () => (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Icon name="Sparkles" className="text-fairy-purple" size={32} />
          <h1 className="text-2xl font-fredoka text-fairy-purple">Волшебные Сказки</h1>
        </div>
        <nav className="flex space-x-6">
          <button
            onClick={() => setActiveTab('home')}
            className={`font-semibold transition-colors ${activeTab === 'home' ? 'text-fairy-purple' : 'text-gray-600 hover:text-fairy-purple'}`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`font-semibold transition-colors ${activeTab === 'examples' ? 'text-fairy-purple' : 'text-gray-600 hover:text-fairy-purple'}`}
          >
            Примеры сказок
          </button>
          <button
            onClick={() => setActiveTab('order')}
            className={`font-semibold transition-colors ${activeTab === 'order' ? 'text-fairy-purple' : 'text-gray-600 hover:text-fairy-purple'}`}
          >
            Заказать сказку
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`font-semibold transition-colors ${activeTab === 'about' ? 'text-fairy-purple' : 'text-gray-600 hover:text-fairy-purple'}`}
          >
            О нас
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`font-semibold transition-colors ${activeTab === 'contact' ? 'text-fairy-purple' : 'text-gray-600 hover:text-fairy-purple'}`}
          >
            Контакты
          </button>
        </nav>
      </div>
    </header>
  );

  const HeroSection = () => (
    <section className="py-20 text-center animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-fredoka text-white mb-6 drop-shadow-lg animate-float">
          ИНДИВИДУАЛЬНАЯ СКАЗКА
        </h2>
        <p className="text-2xl text-gray-800 mb-4 italic">с вашим ребёнком</p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto mb-8">
          <ul className="text-left space-y-3 text-gray-800 font-semibold">
            <li className="flex items-center"><Icon name="Check" className="text-fairy-purple mr-3" size={20} />ЭЛЕКТРОННЫЙ ФОРМАТ</li>
            <li className="flex items-center"><Icon name="Check" className="text-fairy-purple mr-3" size={20} />КРУПНЫЙ, ЧЁТКИЙ ШРИФТ</li>
            <li className="flex items-center"><Icon name="Check" className="text-fairy-purple mr-3" size={20} />ВАЖНЫЕ ЖИЗНЕННЫЕ УРОКИ</li>
            <li className="flex items-center"><Icon name="Check" className="text-fairy-purple mr-3" size={20} />МОЖНО ЧИТАТЬ С ЛЮБОГО УСТРОЙСТВА</li>
            <li className="flex items-center"><Icon name="Check" className="text-fairy-purple mr-3" size={20} />УВЛЕКАТЕЛЬНЫЙ СЮЖЕТ</li>
          </ul>
        </div>

        <Button 
          onClick={() => setActiveTab('order')}
          className="bg-fairy-pink text-white px-8 py-4 text-xl font-semibold rounded-full hover:bg-fairy-purple transform hover:scale-105 transition-all shadow-lg"
        >
          Заказать сказку за 990₽
        </Button>
      </div>
    </section>
  );

  const StoryExamples = () => (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-fredoka text-center text-fairy-purple mb-12">Примеры готовых сказок</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {storyExamples.map((story, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="aspect-video bg-gradient-to-br from-fairy-blue to-fairy-lavender flex items-center justify-center">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-fredoka text-fairy-purple text-xl">{story.title}</CardTitle>
                <CardDescription className="text-gray-700">{story.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.characters.map((character, idx) => (
                    <Badge key={idx} className="bg-fairy-lavender text-fairy-purple">{character}</Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-fairy-purple">{story.price}</span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-fairy-pink hover:bg-fairy-purple text-white rounded-full">
                        Читать отрывок
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-fredoka text-fairy-purple">{story.title}</DialogTitle>
                        <DialogDescription className="text-lg">
                          Жила-была девочка по имени Лиза, которая очень любила приключения. 
                          Однажды утром она проснулась и увидела за окном необычное сияние...
                          <br /><br />
                          <em>Это только начало волшебной истории! Полная сказка содержит 20-25 страниц увлекательных приключений.</em>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const OrderForm = () => (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-fredoka text-fairy-purple text-center">Заказать персональную сказку</CardTitle>
            <CardDescription className="text-center text-lg">
              Создайте уникальную сказку с вашим ребёнком в главной роли
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-lg font-semibold">Тема сказки</Label>
              <Textarea
                placeholder="Расскажите, о чём должна быть сказка (приключения, волшебство, космос, подводный мир и т.д.)"
                value={storyTheme}
                onChange={(e) => setStoryTheme(e.target.value)}
                className="mt-2 rounded-xl"
                rows={3}
              />
            </div>

            <div>
              <Label className="text-lg font-semibold">Персонажи сказки</Label>
              <div className="mt-2 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <Input
                    placeholder="Имя"
                    value={newCharacter.name}
                    onChange={(e) => setNewCharacter({...newCharacter, name: e.target.value})}
                    className="rounded-xl"
                  />
                  <Input
                    placeholder="Роль (сын, дочь, друг)"
                    value={newCharacter.role}
                    onChange={(e) => setNewCharacter({...newCharacter, role: e.target.value})}
                    className="rounded-xl"
                  />
                  <Input
                    placeholder="Возраст (опц.)"
                    value={newCharacter.age}
                    onChange={(e) => setNewCharacter({...newCharacter, age: e.target.value})}
                    className="rounded-xl"
                  />
                </div>
                <Button
                  onClick={addCharacter}
                  className="w-full bg-fairy-blue hover:bg-fairy-purple text-white rounded-xl"
                >
                  <Icon name="Plus" className="mr-2" size={16} />
                  Добавить персонажа
                </Button>
              </div>

              {characters.length > 0 && (
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Добавленные персонажи:</h4>
                  {characters.map((character, index) => (
                    <div key={index} className="flex items-center justify-between bg-fairy-lavender p-3 rounded-xl">
                      <span>
                        <strong>{character.name}</strong> - {character.role}
                        {character.age && ` (${character.age} лет)`}
                      </span>
                      <Button
                        onClick={() => removeCharacter(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon name="X" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-fairy-lavender p-6 rounded-xl text-center">
              <h4 className="text-xl font-semibold text-fairy-purple mb-2">Стоимость: 990₽</h4>
              <p className="text-gray-700 mb-4">
                Готовая сказка будет отправлена на вашу электронную почту в течение 3-5 рабочих дней
              </p>
              <Button className="w-full bg-fairy-pink hover:bg-fairy-purple text-white text-lg py-3 rounded-xl">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Заказать сказку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-fredoka text-fairy-purple text-center">О нас</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <p>
              Мы создаём персонализированные электронные сказки, где главными героями становятся ваши дети. 
              Каждая история уникальна и написана специально для вашей семьи.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-fairy-purple mb-2">Что мы предлагаем:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Heart" className="text-fairy-pink mr-2" size={16} />Индивидуальный подход</li>
                  <li className="flex items-center"><Icon name="BookOpen" className="text-fairy-pink mr-2" size={16} />Поучительные сюжеты</li>
                  <li className="flex items-center"><Icon name="Smile" className="text-fairy-pink mr-2" size={16} />Возрастные особенности</li>
                  <li className="flex items-center"><Icon name="Star" className="text-fairy-pink mr-2" size={16} />Волшебная атмосфера</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-fairy-purple mb-2">Преимущества:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><Icon name="Zap" className="text-fairy-blue mr-2" size={16} />Быстрое создание</li>
                  <li className="flex items-center"><Icon name="Download" className="text-fairy-blue mr-2" size={16} />Электронный формат</li>
                  <li className="flex items-center"><Icon name="Users" className="text-fairy-blue mr-2" size={16} />Вся семья в сказке</li>
                  <li className="flex items-center"><Icon name="Globe" className="text-fairy-blue mr-2" size={16} />Доступно везде</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-fredoka text-fairy-purple text-center">Контакты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Mail" className="text-fairy-purple" size={24} />
                <span className="text-lg">info@magical-tales.ru</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Phone" className="text-fairy-purple" size={24} />
                <span className="text-lg">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" className="text-fairy-purple" size={24} />
                <span className="text-lg">Пн-Пт: 9:00 - 18:00</span>
              </div>
            </div>
            
            <div className="bg-fairy-lavender p-6 rounded-xl">
              <h4 className="font-semibold text-fairy-purple mb-3 text-center">Часто задаваемые вопросы</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Q: Как долго создаётся сказка?</strong>
                  <p>A: 3-5 рабочих дней с момента оплаты.</p>
                </div>
                <div>
                  <strong>Q: Можно ли внести изменения?</strong>
                  <p>A: Да, одну бесплатную правку в течение 7 дней.</p>
                </div>
                <div>
                  <strong>Q: В каком формате сказка?</strong>
                  <p>A: PDF с иллюстрациями, оптимизированный для чтения на любых устройствах.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {activeTab === 'home' && (
        <>
          <HeroSection />
          <StoryExamples />
        </>
      )}
      
      {activeTab === 'examples' && <StoryExamples />}
      {activeTab === 'order' && <OrderForm />}
      {activeTab === 'about' && <AboutSection />}
      {activeTab === 'contact' && <ContactSection />}
      
      <footer className="bg-white/90 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Icon name="Sparkles" className="text-fairy-purple animate-sparkle" size={24} />
            <span className="font-fredoka text-fairy-purple text-xl">Волшебные Сказки</span>
            <Icon name="Sparkles" className="text-fairy-purple animate-sparkle" size={24} />
          </div>
          <p className="text-gray-600">© 2024 Волшебные Сказки. Создаём магию для ваших детей.</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;