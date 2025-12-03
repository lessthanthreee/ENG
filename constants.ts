import { Scissors, Zap, Clock, CalendarCheck, User, Sparkles } from 'lucide-react';
import { ServiceItem, BarberProfile, FeatureItem, TestimonialItem, Language } from './types';

export const WHATSAPP_NUMBER = "77001234567";

export const TRANSLATIONS = {
  ru: {
    nav: {
      services: "Услуги",
      automation: "Авто-запись",
      barbers: "Мастера",
      location: "Контакты",
      bookBtn: "Записаться",
    },
    hero: {
      status: "Открыто • Живая очередь",
      titleStart: "Стрижка.",
      titleHighlight: "Запись за 10 сек.",
      subtitle: "Быстро, современно, полная автоматизация через WhatsApp.",
      ctaPrimary: "Записаться в WhatsApp",
      ctaSecondary: "Прайс-лист",
      badges: ["Быстрая запись", "Без звонков", "Рейтинг 5.0"],
      whatsappMsg: "Привет! Хочу записаться на стрижку."
    },
    services: {
      label: "Наш Прайс",
      title: "Услуги и Цены",
      bookBtn: "Записаться",
      whatsappPrefix: "Привет! Хочу записаться на услугу: ",
      items: [
        {
          id: 'haircut',
          name: "Мужская стрижка",
          price: "4000₸",
          description: "Мытье головы, подбор стиля, укладка. Идеальная форма.",
          icon: Scissors,
        },
        {
          id: 'beard',
          name: "Моделирование бороды",
          price: "3000₸",
          description: "Оформление контуров, распаривание, уход маслами.",
          icon: User,
        },
        {
          id: 'combo',
          name: "Комплекс (Стрижка+Борода)",
          price: "6000₸",
          description: "Полный уход для современного джентльмена.",
          icon: Sparkles,
        },
        {
          id: 'kids',
          name: "Детская стрижка",
          price: "3500₸",
          description: "Стильная стрижка для юных джентльменов (до 12 лет).",
          icon: Zap,
        },
      ]
    },
    automation: {
      label: "Смарт-Бот",
      title: "Авто-запись 24/7",
      description: "Забудьте о звонках. Наш бот запишет вас за пару кликов в любое время суток.",
      cta: "Запустить Бота",
      whatsappMsg: "Привет! Хочу записаться.",
      mockupUser: "Привет! Хочу записаться.",
      mockupBot1: "Отлично! Выберите услугу:\n1. Стрижка (4000₸)\n2. Борода (3000₸)",
      mockupUser2: "1",
      mockupBot2: "Принято. Выберите мастера:\n1. Алексей\n2. Данияр",
      features: [
        {
          id: 'instant',
          title: "Мгновенно",
          description: "Выбор услуги, мастера и времени прямо в чате.",
          icon: Zap,
        },
        {
          id: 'reminders',
          title: "Напоминания",
          description: "Напомним за 1 час до визита. Вы не пропустите стрижку.",
          icon: Clock,
        },
        {
          id: 'sync',
          title: "Синхронизация",
          description: "Умный календарь. Никаких накладок по времени.",
          icon: CalendarCheck,
        },
      ]
    },
    gallery: {
      label: "Портфолио",
      title: "Наши Работы",
      overlay: "Свежий лук"
    },
    barbers: {
      label: "Команда",
      title: "Топ Барберы",
      bookBtn: "Записаться к",
      whatsappPrefix: "Привет! Хочу записаться к мастеру: ",
      list: [
        {
          id: 'alex',
          name: "Алексей Волков",
          role: "Топ-Барбер",
          experience: "Опыт 8 лет",
          image: "https://picsum.photos/id/1005/400/500",
        },
        {
          id: 'daniyar',
          name: "Данияр К.",
          role: "Старший Барбер",
          experience: "Опыт 5 лет",
          image: "https://picsum.photos/id/338/400/500",
        },
        {
          id: 'ruslan',
          name: "Руслан Б.",
          role: "Мастер Фейда",
          experience: "Опыт 4 года",
          image: "https://picsum.photos/id/64/400/500",
        },
      ]
    },
    testimonials: {
      items: [
        {
          id: '1',
          name: "Мурат С.",
          text: "Лучшая стрижка в Астане. Запись через WhatsApp — это просто пушка, никаких лишних звонков.",
          rating: 5,
        },
        {
          id: '2',
          name: "Дмитрий П.",
          text: "Сервис на высоте. Королевское бритье — это нечто. Рекомендую Алексея.",
          rating: 5,
        },
        {
          id: '3',
          name: "Ерлан А.",
          text: "Наконец-то нашел место, где умеют стричь кудрявые волосы. Авто-запись очень удобная.",
          rating: 5,
        },
      ]
    },
    location: {
      title: "Контакты",
      addressLabel: "Адрес",
      address: "пр. Мангилик Ел, 17,\nАстана, 010000",
      phoneLabel: "Телефон",
      hoursLabel: "График",
      hours: "Пн - Вс: 10:00 - 22:00",
      mapBtn: "Открыть в Google Maps"
    },
    finalCta: {
      titleStart: "Готовы к",
      titleHighlight: "Стрижке?",
      subtitle: "Никаких очередей. Никаких звонков. Бронируйте в один клик.",
      btn: "Записаться Онлайн",
      whatsappMsg: "Привет! Хочу записаться на стрижку."
    },
    footer: {
      rights: "Все права защищены."
    }
  },
  kz: {
    nav: {
      services: "Қызметтер",
      automation: "Авто-жазу",
      barbers: "Шеберлер",
      location: "Байланыс",
      bookBtn: "Жазылу",
    },
    hero: {
      status: "Ашық • Жанды кезек",
      titleStart: "Сәнді шаш.",
      titleHighlight: "10 секундта жазыл.",
      subtitle: "Жылдам, заманауи, WhatsApp арқылы автоматты тіркелу.",
      ctaPrimary: "WhatsApp арқылы жазылу",
      ctaSecondary: "Бағалар",
      badges: ["Жылдам жазылу", "Қоңыраусыз", "5.0 Рейтинг"],
      whatsappMsg: "Сәлем! Шаш қиюға жазылғым келеді."
    },
    services: {
      label: "Бағалар",
      title: "Қызмет түрлері",
      bookBtn: "Таңдау",
      whatsappPrefix: "Сәлем! Осы қызметке жазылғым келеді: ",
      items: [
        {
          id: 'haircut',
          name: "Ерлер шаш үлгісі",
          price: "4000₸",
          description: "Бас жуу, стиль таңдау, сәндеу. Мінсіз пішін.",
          icon: Scissors,
        },
        {
          id: 'beard',
          name: "Сақал сәндеу",
          price: "3000₸",
          description: "Контур жасау, булап жібіту, маймен күту.",
          icon: User,
        },
        {
          id: 'combo',
          name: "Кешенді (Шаш+Сақал)",
          price: "6000₸",
          description: "Заманауи ерлерге арналған толық күтім.",
          icon: Sparkles,
        },
        {
          id: 'kids',
          name: "Балалар шаш үлгісі",
          price: "3500₸",
          description: "Жас жігіттерге арналған сәнді қырқу (12 жасқа дейін).",
          icon: Zap,
        },
      ]
    },
    automation: {
      label: "Смарт-Бот",
      title: "Авто-жазылу 24/7",
      description: "Қоңырау шалуды ұмытыңыз. Біздің бот сізді кез келген уақытта жылдам жазады.",
      cta: "Ботты қосу",
      whatsappMsg: "Сәлем! Жазылғым келеді.",
      mockupUser: "Сәлем! Жазылғым келеді.",
      mockupBot1: "Керемет! Қызметті таңдаңыз:\n1. Шаш қию (4000₸)\n2. Сақал (3000₸)",
      mockupUser2: "1",
      mockupBot2: "Қабылданды. Шеберді таңдаңыз:\n1. Алексей\n2. Данияр",
      features: [
        {
          id: 'instant',
          title: "Лезде",
          description: "Чат ішінде қызметті, шеберді және уақытты таңдау.",
          icon: Zap,
        },
        {
          id: 'reminders',
          title: "Еске салу",
          description: "Келуге 1 сағат қалғанда еске саламыз.",
          icon: Clock,
        },
        {
          id: 'sync',
          title: "Синхрондау",
          description: "Ақылды күнтізбе. Уақыт бойынша қателіктер жоқ.",
          icon: CalendarCheck,
        },
      ]
    },
    gallery: {
      label: "Портфолио",
      title: "Біздің жұмыстар",
      overlay: "Керемет стиль"
    },
    barbers: {
      label: "Команда",
      title: "Топ Шеберлер",
      bookBtn: "Жазылу: ",
      whatsappPrefix: "Сәлем! Шеберге жазылғым келеді: ",
      list: [
        {
          id: 'alex',
          name: "Алексей Волков",
          role: "Топ-Барбер",
          experience: "8 жыл тәжірибе",
          image: "https://picsum.photos/id/1005/400/500",
        },
        {
          id: 'daniyar',
          name: "Данияр К.",
          role: "Аға Барбер",
          experience: "5 жыл тәжірибе",
          image: "https://picsum.photos/id/338/400/500",
        },
        {
          id: 'ruslan',
          name: "Руслан Б.",
          role: "Фейд Шебері",
          experience: "4 жыл тәжірибе",
          image: "https://picsum.photos/id/64/400/500",
        },
      ]
    },
    testimonials: {
      items: [
        {
          id: '1',
          name: "Мұрат С.",
          text: "Астанадағы ең жақсы шаштараз. WhatsApp арқылы жазылу өте ыңғайлы, артық қоңырау жоқ.",
          rating: 5,
        },
        {
          id: '2',
          name: "Дмитрий П.",
          text: "Сервис жоғары деңгейде. Патшаларға лайық қызмет. Алексейді ұсынамын.",
          rating: 5,
        },
        {
          id: '3',
          name: "Ерлан А.",
          text: "Бұйра шашты қалай қию керектігін білетін жер. Автоматты жазылу жүйесі керемет.",
          rating: 5,
        },
      ]
    },
    location: {
      title: "Байланыс",
      addressLabel: "Мекен-жай",
      address: "Мәңгілік Ел даңғ., 17,\nАстана, 010000",
      phoneLabel: "Телефон",
      hoursLabel: "Жұмыс уақыты",
      hours: "Дс - Жс: 10:00 - 22:00",
      mapBtn: "Google Maps-та ашу"
    },
    finalCta: {
      titleStart: "Келесі стрижкаға",
      titleHighlight: "Дайынсыз ба?",
      subtitle: "Кезексіз. Қоңыраусыз. Бір батырмамен жазылыңыз.",
      btn: "Онлайн Жазылу",
      whatsappMsg: "Сәлем! Шаш қиюға жазылғым келеді."
    },
    footer: {
      rights: "Барлық құқықтар қорғалған."
    }
  }
};

export const GALLERY_IMAGES = [
  "https://picsum.photos/seed/barber1/600/800",
  "https://picsum.photos/seed/barber2/600/600",
  "https://picsum.photos/seed/barber3/600/900",
  "https://picsum.photos/seed/barber4/600/600",
  "https://picsum.photos/seed/barber5/600/800",
  "https://picsum.photos/seed/barber6/600/700",
];
