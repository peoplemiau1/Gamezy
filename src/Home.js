import React from "react";
import { MessageSquare, Users, UserPlus, Download, Smartphone, History, Target, Lightbulb } from "lucide-react";
import { Button } from "./components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/Card";

const GamezyLogo = () => (
  <img
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2d2900fb4b4369c832503/284bdb5c4_image.png"
    alt="Gamezy Logo"
    className="w-10 h-10"
  />
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GamezyLogo />
              <span className="text-2xl font-black text-white">
                GAME<span className="text-red-600">ZY</span>
              </span>
            </div>

            <a href="https://github.com/KiPeR7788/FOXGO/releases/download/0.5.2.full/gamezy-patch-v0.5.2.apk" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold">
                <Download className="w-4 h-4 mr-2" />
                Скачать
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 animate-pulse">
            <div className="w-32 h-32 mx-auto mb-6">
              <GamezyLogo />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            GAME<span className="text-red-600">ZY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            Наследник Omlet Arcade
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Общайся с друзьями-геймерами и делись своими игровыми достижениями
          </p>
          
          <a href="https://github.com/KiPeR7788/FOXGO/releases/download/0.5.2.full/gamezy-patch-v0.5.2.apk" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg shadow-red-600/50 transform hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать приложение
            </Button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Возможности <span className="text-red-600">Gamezy</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Всё для общения с игровым сообществом
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-600/20 rounded-2xl flex items-center justify-center border-2 border-red-600">
                  <MessageSquare className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Посты</h3>
                <p className="text-gray-400 text-lg">
                  Делись игровыми моментами и достижениями с сообществом
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-600/20 rounded-2xl flex items-center justify-center border-2 border-blue-600">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Чаты</h3>
                <p className="text-gray-400 text-lg">
                  Общайся с друзьями и другими геймерами в реальном времени
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600 transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-600/20 rounded-2xl flex items-center justify-center border-2 border-green-600">
                  <UserPlus className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Регистрация</h3>
                <p className="text-gray-400 text-lg">
                  Быстрая и простая регистрация для доступа ко всем возможностям
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Наследие Omlet Arcade</h3>
                <p className="text-gray-300 text-lg">
                  Мы взяли лучшее от легендарной платформы и создали новое пространство для геймеров, где можно общаться и делиться своими игровыми моментами.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Простота использования</h3>
                <p className="text-gray-300 text-lg">
                  Интуитивный интерфейс позволяет сразу начать общаться и делиться контентом. Никаких сложных настроек.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Игровое сообщество</h3>
                <p className="text-gray-300 text-lg">
                  Присоединяйся к геймерам со всего мира, находи единомышленников и обсуждай любимые игры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              О <span className="text-red-600">Gamezy</span>
            </h2>
            <p className="text-xl text-gray-300">
              Новое пространство для общения геймеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <History className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-white text-2xl">Наша история</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Gamezy создан командой энтузиастов, которые любили Omlet Arcade и хотели продолжить его наследие. 
                  Мы создали платформу для общения геймеров и обмена игровым контентом.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-white text-2xl">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Создать удобную платформу для общения геймеров, где можно делиться достижениями, 
                  находить друзей и обсуждать любимые игры.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-white text-2xl">Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Простота, доступность и сообщество. Мы верим, что каждый геймер заслуживает 
                  удобного места для общения с единомышленниками.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-white text-2xl">Комьюнити</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Наше главное достояние - это сообщество. Геймеры со всего мира 
                  выбирают Gamezy для общения и обмена игровым контентом.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              От Omlet Arcade к Gamezy
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              Omlet Arcade был пионером в создании игрового сообщества для мобильных геймеров. 
              Gamezy продолжает эту традицию, предоставляя удобное пространство для общения, 
              публикации постов и чатов. Мы гордимся быть частью этой истории 
              и обещаем развивать платформу дальше!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <Smartphone className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Присоединяйся прямо сейчас!
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Скачай Gamezy и стань частью игрового сообщества
          </p>
          <a href="https://github.com/KiPeR7788/FOXGO/releases/download/0.5.2.full/gamezy-patch-v0.5.2.apk" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать для Android
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GamezyLogo />
                <span className="text-xl font-black text-white">
                  GAME<span className="text-red-600">ZY</span>
                </span>
              </div>
              <p className="text-gray-400">
                Наследник Omlet Arcade. Общайся с друзьями-геймерами!
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Возможности</h3>
              <div className="space-y-2">
                <p className="text-gray-400">Посты</p>
                <p className="text-gray-400">Чаты</p>
                <p className="text-gray-400">Регистрация</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Поддержка</h3>
              <div className="space-y-2">
                <button className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Помощь
                </button>
                <button className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </button>
                <button className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Контакты
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Социальные сети</h3>
              <div className="space-y-2">
                <a href="https://t.me/gamezyofficiall" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Gamezy. Все права защищены. Наследник Omlet Arcade.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
