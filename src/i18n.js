import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
     navbar:{
        home: "Home",
        about: "About Us",
        products: "Products",
        projects: "Projects",
        contactUs: "Contact Us",
        selectLanguage: "Select Language:",
     },
     header:{
        title: "Al-Mayadin Company for Building Materials & Ready Mix Concrete",
        description:
          "We are a leading company with a trusted brand in every sector we operate in. We strive to grow and expand regionally through a consistent and well-thought-out strategy to ensure success for our company and our partners.",
        contact: "Contact Us",
     },
     about: {
        title: "About the Company",
        heading: "We Are Al-Mayadin",
        description:
          "Al-Mayadin Distinguished General Trading and Contracting Company was established in 2003 under Professional License No. (2126). It was registered in the Commercial Register under No. (96554) and was also listed with the Kuwait Chamber of Commerce and Industry in 2014 under No. (148103) to engage in general trading and contracting activities in Kuwait and abroad. It is a leading company with a trusted brand in every sector we operate in. We strive to grow and expand regionally through a consistent and well-thought-out strategy to achieve success for the company and its partnering businesses.",
      },
      accordion: {
        strategy: "Strategy",
        strategyContent:
          "Our mission is to remain committed to always being the best choice for our clients. This is why we earned our reputation as a leading company offering excellent services and valuable products across different fields. We aim to be a reference company, a model in the quality and variety of our building materials, both locally and regionally, maintaining our leadership and originality to surpass our customers' expectations and satisfy our shareholders, communities, and overall growth.",
        vision: "Vision",
        visionContent:
          "Our future vision is to continuously progress while maintaining our leading position in Kuwait in our company’s fields of work. Additionally, we aim to expand our work globally, particularly in the Gulf Cooperation Council (GCC) and the Middle East regions. We are committed to continuing satisfying our clients.",
        coreValues: "Core Values",
        coreValuesContent:
          "Al-Mayadin always strives to adhere to a set of core values that are not only factors contributing to the company's success but also serve as a continuous source of guidance. The company adheres to the following principles:\n• Strive to satisfy customers.\n• Work with absolute integrity and high ethical standards.\n• Implement strict quality standards.\n• Relentlessly work to provide the best and most suitable products.\n• Excel in customer service.",
        companyActivities: "Company Activities",
        companyActivitiesContent:
          "• Specialized in executing all types of construction projects, including black structures and full finishing.\n• Residential plots and private villas.\n• Residential investment complexes and commercial complexes.\n• Industrial or artisanal plots.\n• Special section for additions, refurbishments, and construction maintenance.\n• Known for quality and precision with the shortest possible timeframe.\n• Execute architectural plans before implementation and track plans after execution.",
      },
      aboutProduc: {
        title: "About Our Products",
        productDetails: "Product Details",
        viewMore: "View More",
      },
      aboutProjects: {
        title: "About Our Projects",
        viewMore: "View More",
      },
      importers: {
        title: "Our Importers",
      },
      footer: {
        contact: "Contact Us",
        pages: "Pages",
        home: "Home",
        about: "About Us",
        products: "Products",
        projects: "Projects",
        contactUs: "Contact Us",
        copyright: "All rights reserved by Al Mayadeen &copy; 2025",
        discrip:"Al Mayadeen Company for Construction Materials and Ready Mix Concrete",
        address: "Khaitan- Block (8)-Nasser Sanhat Al Osaimi st.- Al Alanda Commercial Complex -Floor (4)-office (1)"
      },
      productsMenu: {
        title: "Company Products",
        all: "All",
        viewDetails: "View Details",
      },
      "aboutProjects": {
        "title": "Projects",
      },
      "vehicles": {
        "title": "Company Vehicles"
      },
      "contact": {
        "title": "Contact Us",
        "phone": "Phone",
        "whatsapp": "WhatsApp",
        "email": "Email",
        "location": "Location",
        "address": "Kuwait - Khaitan - Block 8 - Nasser Sunhat Al-Asimi Street - Al-Alanda Commercial Complex - 4th Floor - Office No. 1"
      },
      "categories": {
        "cement": "Cement",
        "sand": "Sand",
        "reinforcedSteel": "Steel",
        "wood": "Wood",
        "readyMixConcrete": "Ready Mix Concrete",
        "wires": "Wires",
        "whiteBlock": "White Block",
        "blackBlock": "Black Block",
        "precast": "Precast",
        "gravel": "Gravel",
        "ceramicPorcelain": "Ceramic & Porcelain",
        "megaBoards": "Mega Boards",
        "eliSabb": "Eli Sabb",
        "interlock": "Interlock"
      },
      "productDetail": {
        "notFound": "Product not found",
        "type": "Type",
        "description": "Description"
      },
      "products": {
        "whiteCement": "White Cement",
        "regularCement": "Regular Cement",
        "mortarCement": "Mortar Cement",
        "sand": "Sand",
        "steel": "Steel",
        "wood": "Wood",
        "readyMixConcrete": "readyMixConcrete",
        "wires": "wires",
        "whiteBlock": "white Block",
        "blackBlock": "black Block",
        "precast": "precast",
        "gravel": "gravel",
        "ceramicPorcelain": "Ceramic & Porcelain",
        "megaBoards": "Mega Boards",
        "eliSabb": "EliSabb",
        "interlock": "Interlock"
      },
      "descriptions": {
        "whiteCementDesc": "The company provides and supplies all types of high-quality cement that is certified and compliant with the highest quality standards and specifications in Kuwait and the Gulf Cooperation Council countries.",

        "regularCementDesc": "The company provides and supplies all types of high-quality cement that is certified and compliant with the highest quality standards and specifications in Kuwait and the Gulf Cooperation Council countries.",

        "mortarCementDesc": "The company provides and supplies all types of high-quality cement that is certified and compliant with the highest quality standards and specifications in Kuwait and the Gulf Cooperation Council countries.",

        "sandDesc": "The company provides and supplies all types of high-quality sand that is certified and compliant with the highest quality standards and specifications in Kuwait and the Gulf Cooperation Council countries.",

        "steelDesc": "The company provides and supplies all types of high-quality steel, approved and compliant with the highest global quality standards, and matching the standard specifications within the State of Kuwait and the Gulf Cooperation Council countries",

        "woodDesc": "Al Mayadeen Company provides and supplies all types of wood in various sizes and dimensions, high-quality, approved and compliant with the highest global quality standards, and matching the standard specifications within the State of Kuwait and the Gulf Cooperation Council countries.",

        "readyMixConcreteDesc": "The company provides and supplies all types of ready-mix concrete of high quality, compliant with the highest global quality standards and approved within the State of Kuwait and the Gulf Cooperation Council countries.",

        "wiresDesc": "Al-Mayyadeen Company provides all types of wires of high quality, compliant with the highest global quality standards and approved within the State of Kuwait and the Gulf Cooperation Council countries",

        "whiteBlockDesc": "Al-Mayyadeen Company provides and supplies all types of white bricks and lintels in all sizes and dimensions, of high quality, certified and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "blackBlockDesc": "Al-Mayyadeen Company provides and supplies all types of black bricks and lintels in all sizes and dimensions, of high quality, certified and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "precastDesc": "Al-Mayyadeen Company provides and supplies all types of precast in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "gravelDesc": "Al-Mayyadeen Company provides and supplies all types of Saloob in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "ceramicPorcelainDesc": "Al-Mayyadeen Company provides and supplies all types of ceramic and porcelain in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "megaBoardsDesc": "Al-Mayyadeen Company provides and supplies all types of Mega boards in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "eliSabbDesc": "Al-Mayyadeen Company provides and supplies all types of Ely-Sabb tiles in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries.",

        "interlockDesc": "Al-Mayyadeen Company provides and supplies all types of interlocking tiles in all sizes and dimensions, of high quality, certified, and compliant with the highest global quality standards and specifications, within the State of Kuwait and the Gulf Cooperation Council countries."
      }
    },
  },
  ar: {
    translation: {
      navbar: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        projects: "المشاريع",
        contactUs: "تواصل معنا",
        selectLanguage: "اختر اللغة",
      },
      header: {
        title: "شركة الميادين لمواد البناء والخرسانة الجاهزة",
        description:
          "هى شركة رائدة ذات علامة تجارية موثوق بها في كل قطاع نعمل به. حيث نسعى إلى التقدم والانتشار إقليميا من خلال سياسة واستراتيجية ثابتة ومدروسة لتحقيق النجاح للشركة ولمن يعمل معها من الشركات الزميلة.",
        contact: "تواصل معنا",
      },
      about: {
        title: "نبذة عن الشركة",
        heading: "نحن شركة الميادين",
        description:
          "تم تأسيس شركة الميادين المتميزة للتجارة العامة والمقاولات عام 2003 تحت ترخيص مزاولة المهنة رقم (2126)، وتم تسجيلها بالسجل التجاري رقم (96554)، كما تم قيدها بغرفة تجارة وصناعة الكويت عام 2014 تحت رقم (148103) لمزاولة نشاط التجارة العامة والمقاولات بدولة الكويت وخارجها، هى شركة رائدة ذات علامة تجارية موثوق بها في كل قطاع نعمل به. حيث نسعى إلى التقدم والانتشار إقليميا من خلال سياسة واستراتيجية ثابتة ومدروسة لتحقيق النجاح للشركة ولمن يعمل معها من الشركات الزميلة.",
      },
      accordion: {
        strategy: "الإستراتيجيـة",
        strategyContent:
          "مهمتنا هي أن نستمر في التزامنا لنكون دائماً الخيار الأفضل لعملائنا وهذا ما جعلنا نكتسب سمعتنا كشركة رائدة تقدم الخدمات المميزة والمنتجات القيمة في مجالات متعددة. وأن تكــون الشـركـة نموذجاً مرجعياً متميزاً في جـودة وتنـوع منتجاتهـا من مـواد البنـاء، محليـاً وإقليمياً، وأن تحافظ على الريادة والأصالة وتسبق طموحات عملائها في مستوى خدماتها وإرضاء مساهميها ورقي مجتمعها وتنميته.",
        vision: "الـرؤيـــة",
        visionContent:
          "رؤيتنا المستقبلية هي دوام التقدم والتطور مع الحفاظ على موقعنا الريادي في الكويت في مجالات عمل الشركة. بالإضافة إلى الاستمرار في توسيع نطاق أعمالنا في كافة دول العالم وخاصة في مجلس التعاون الخليجي والشرق الأوسط. حيث إننا مستمرون في إرضاء عملاؤنا.",
        coreValues: "القيم الأساسية",
        coreValuesContent:
          "حرصت شركة الميادين المتميزة للتجارة العامة والمقاولات دوماً على الالتزام بمجموعة من القيم الأساسية لا تقتصر على عوامل نجاح الشركة، بل تتعداها لتكون مصدراً مستمراً لتوجيهها، حيث تقوم الشركة بالتالي:\n• بذل أقصى الجهد لإرضاء العملاء.\n• العمل بنزاهة مطلقة وبأعلى معايير أخلاقية.\n• العمل بأدق معايير الجودة.\n• مزاولة العمل الدؤوب لتقديم الأفضل والأنسب من المنتجات.\n• التميز في خدمة العملاء.",
        companyActivities: "نشاط الشركة",
        companyActivitiesContent:
          "• متخصصون في تنفيذ كافة المشاريع الانشائية هيكل اسود وتشطيبات كاملة علي المفتاح.\n• قسائم سكنية وشاليهات سكن خاص.\n• مجمعات سكنية استثماري ومجمعات تجارية.\n• قسائم صناعية او حرفية.\n• قسم خاص بالإضافات والتعليات والترميمات الانشائية والصيانات.\n• نتميز بجودة ودقة في التنفيذ في اقل مدة زمنية ممكنة.\n• عمل مخططات تنفيذية قبل التنفيذ ومخططات ما تم تنفيذه على الطبيعة.",
      },
      aboutProduc: {
        title: "نبذة عن منتجاتنا",
        productDetails: "تفاصيل المنتج",
        viewMore: "عرض المزيد",
      },
      aboutProjects: {
        title: "نبذة عن المشاريع",
        viewMore: "عرض المزيد",
      },
      importers: {
        title: "الموردين",
      },
      footer: {
        contact: "اتصل بنا",
        pages: "الصفحات",
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        projects: "المشاريع",
        contactUs: "تواصل معنا",
        discrip:"شركة الميادين لمواد البناء والخرسانة الجاهزة",
        copyright: "جميع حقوق النشر محفوظة لشركة الميادين &copy; 2025",
        address:"الكويت-خيطان-قطعة8-شارع ناصر صنهات العصيمى-مجمع العلندا التجارى-الدور الرابع-مكتب رقم 1"
      },
      productsMenu: {
        title: "منتجات الشركة",
        all: "الكل",
        viewDetails: "تفاصيل المنتج",
      },
      "aboutProjects": {
        "title": "المشاريع",
      },
      "vehicles": {
        "title": "آليات الشركة"
      },
      "contact": {
        "title": "اتصل بنا",
        "phone": "هاتف",
        "whatsapp": "واتساب",
        "email": "البريد الإلكتروني",
        "location": "الموقع",
        "address": "الكويت-خيطان-قطعة8-شارع ناصر صنهات العصيمى-مجمع العلندا التجارى-الدور الرابع-مكتب رقم 1"
      },
      "categories": {
        "cement": "الأسمنت",
        "sand": "رمال",
        "reinforcedSteel": "الحديد المسلح",
        "wood": "أخشاب",
        "readyMixConcrete": "خرسانة جاهزة",
        "wires": "أسلاك",
        "whiteBlock": "الطابوق الأبيض",
        "blackBlock": "الطابوق الأسود",
        "precast": "بريكاست",
        "gravel": "سلبوخ",
        "ceramicPorcelain": "سيراميك وبورسلين",
        "megaBoards": "ألواح ميجا",
        "eliSabb": "إيلى صعب",
        "interlock": "إنترلوك"
      },
      "productDetail": {
        "notFound": "المنتج غير موجود",
        "type": "النوع",
        "description": "الوصف"
      },
      "products": {
        "whiteCement": "أسمنت أبيض",
        "regularCement": "أسمنت عادي",
        "mortarCement": "أسمنت مورتر",
        "sand": "رمال",
        "steel": "الحديد الصلب",
        "wood": "الأخشاب",
        "readyMixConcrete": "خرسانة جاهزة",
        "wires": "أسلاك",
        "whiteBlock": "طابوق أبيض",
        "blackBlock": "طابوق أسود",
        "precast": "بريكاست",
        "gravel": "سلبوخ",
        "ceramicPorcelain": "سيراميك وبورسلين",
        "megaBoards": "ألواح ميجا",
        "eliSabb": "إيلى صعب",
        "interlock": "إنترلوك"
      },
      "descriptions": {
        "whiteCementDesc": "تقوم الشركة بتوفير وتوريد كافة أنواع الأسمنت عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة والمطابقة للمواصفات القياسية داخل دولة الكويت و دول مجلس التعاون الخليجى",

        "regularCementDesc":"تقوم الشركة بتوفير وتوريد كافة أنواع الأسمنت عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة والمطابقة للمواصفات القياسية داخل دولة الكويت و دول مجلس التعاون الخليجى",

        "mortarCementDesc":"تقوم الشركة بتوفير وتوريد كافة أنواع الأسمنت عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة والمطابقة للمواصفات القياسية داخل دولة الكويت و دول مجلس التعاون الخليجى",

        "sandDesc":"تقوم الشركة بتوفير وتوريد كافة أنواع الرمال عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة والمطابقة للمواصفات القياسية داخل دولة الكويت و دول مجلس التعاون الخليجى",

        "steelDesc":"تقوم الشركة بتوفير وتوريد كافة أنواع الحديد الصلب عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالمية والمطابقة للمواصفات القياسية داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "woodDesc":"تقوم شركة الميادين بتوفير وتوريد كافة أصناف الأخشاب بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "readyMixConcreteDesc":"تقوم الشركة بتوفير وتوريد كافة أنواع الخرسانة الجاهزة ذات جودة عالية والمطابقة لأعلى معايير الجودة العالمية والمعتمدة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "wiresDesc": " تقوم شركة الميادين بتوفير كافة أنواع الاسلاك ذات جودة عالية والمطابقة لأعلى معايير الجودة العالمية والمعتمدة داخل دولة الكويت ودول مجلس اتعاون الخليجى",

        "whiteBlockDesc": "تقوم شركة الميادين بتوفير وتوريد كافة أنواع الطابوق الأبيض والأعتاب بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى", 

        "blackBlockDesc":"تقوم شركة الميادين بتوفير وتوريد كافة أنواع الطابوق الأسود والأعتاب بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "precastDesc":  "تقوم شركة الميادين بتوفير وتوريد كافة أنواع البريكاست بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "gravelDesc":  "تقوم شركة الميادين بتوفير وتوريد كافة أنواع السلبوخ بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "ceramicPorcelainDesc":  "تقوم شركة الميادين بتوفير وتوريد كافة أنواع السيراميك والبورسلين بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى",

        "megaBoardsDesc": "تقوم شركة الميادين بتوفير وتوريد كافة أنواع ألواح الميجا بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى", 

        "eliSabbDesc": "تقوم شركة الميادين بتوفير وتوريد كافة أنواع بلاط ايلى صعب بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى"
        ,
        "interlockDesc": "تقوم شركة الميادين بتوفير وتوريد كافة أنواع الانترلوك بجميع الأحجام والمقاسات عالية الجودة المعتمدة والمتوافقة مع أعلى معايير الجودة العالميةوالمطابقة للمواصفات القيايسة داخل دولة الكويت ودول مجلس التعاون الخليجى"
      }
      
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
