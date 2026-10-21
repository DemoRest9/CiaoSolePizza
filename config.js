/* ====== CIAO SOLE PIZZA (Batumi) — demo config ====== */
window.SITE = {
  name: "Ciao Sole Pizza",
  logo: "assets/logo.webp",          // <- ჩადე ლოგო (Instagram-იდან)
  phone: "+995591449094",
  currency: "GEL",

  // <- ჩასვი ახალი Google Sheet-ის Apps Script /exec ბმული
  sheetUrl: "https://script.google.com/macros/s/AKfycbwEkFlU1fgbuo82XYYGRX2aIZx2VHBn2LcqkleiQsQa0ACGOhV20VGT28hrIDMZ6Jwq0g/exec",

  orderEndpoint: "",                  // ცარიელი = DEMO რეჟიმი
  allowedIps: [],

  langs: ["ka", "en", "ru"],
  defaultLang: "en",
  slides: [],

  // მზიანი თემა: მუქი ყავისფერი + მზისფერი ყვითელი + პომიდვრისფერი წითელი
  theme: {
    "charcoal": "#2b1a14", "charcoal-soft": "#3a251c",
    "parchment": "#fbf3e2", "parchment-dim": "#f0e2c2",
    "ink": "#2a1c16", "ink-soft": "#6e5a4c",
    "brass": "#e0a526", "brass-bright": "#f2bd44",
    "wine": "#b8321f", "wine-bright": "#d24530"
  },

  rating: { score: "4.9", count: "35" },

  // ნამდვილი საჯარო Google Maps მიმოხილვები (სიტყვასიტყვით, ავტორებით).
  reviews: [
    { author: "Vio Troic", text: "Great taste. Not 100% authentic as the topping were slipping a little bit too easy of the doug and the tomato sauce + mozzarella wasn't the greatest one. But that didn't bother us a lot. We had a prosciutto funghi and a spicy salami …" },
    { author: "Rafał Lee", text: "Very good pizza, like in Italy." },
    { author: "Konstantin Shlykov", text: "Great hot and fresh pizza, love to eat it every time I visit Friends" }
  ],

  about: {
    ka: { eyebrow: "ჩვენ შესახებ", title: "კეთილი იყოს თქვენი მობრძანება {name}-ში",
      lede: "პიცერია ბათუმში — ცხელი, ახალი პიცა და მზიანი განწყობა.",
      story: "Ciao Sole Pizza ბათუმში პიცას გთავაზობთ. შეგიძლიათ ისადილოთ ადგილზე, წაიღოთ თან ან შეუკვეთოთ მიწოდებით. ვცდილობთ, პიცა ყოველ ჯერზე უკეთესი გავაკეთოთ და ვიყენებთ ხარისხიან იტალიურ ინგრედიენტებს.",
      address: "მემედ აბაშიძის გამზ. 57, ბათუმი",
      hours: [["დახურვა", "00:30"]] },
    en: { eyebrow: "About Us", title: "Welcome to {name}",
      lede: "A pizzeria in Batumi — hot, fresh pizza and a sunny mood.",
      story: "Ciao Sole Pizza serves pizza in Batumi. Dine in, take away or order delivery. We put energy and passion into every pizza and keep working to make it better, sourcing quality Italian ingredients.",
      address: "57 Memed Abashidze Ave, Batumi",
      hours: [["Closing time", "00:30"]] },
    ru: { eyebrow: "О нас", title: "Добро пожаловать в {name}",
      lede: "Пиццерия в Батуми — горячая, свежая пицца и солнечное настроение.",
      story: "Ciao Sole Pizza готовит пиццу в Батуми. Можно поесть в зале, взять с собой или заказать доставку. Мы вкладываем душу в каждую пиццу и стараемся делать её ещё лучше, используя качественные итальянские ингредиенты.",
      address: "пр. Мемеда Абашидзе, 57, Батуми",
      hours: [["Закрытие", "00:30"]] }
  }
};
