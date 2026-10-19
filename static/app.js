// Main JavaScript for Abdelkader Bouzourine Portfolio

(function () {
  'use strict';

  // Translation dictionaries
  const i18n = {
    fr: {
      nav: {
        home: "Accueil",
        works: "Travaux",
        skills: "Compétences",
        timeline: "Parcours",
        contact: "Contact",
        resume: "CV ↓",
        chat: "Café ☕"
      },
      hero: {
        badge: "DISPONIBLE POUR MISSIONS · DATA ANALYST & CONSULTANT BI",
        titlePrefix: "Abdelkader",
        titleSuffix: "Bouzourine",
        role: "Data Analyst · Consultant Business Intelligence",
        lead: "J'aide les équipes à découvrir l'histoire cachée derrière leurs données et à la transformer en décisions mesurables et en actions concrètes.",
        ctaWorks: "Explorer mes travaux ↓",
        ctaChat: "Discussion autour d'un café ☕",
        ctaResume: "Télécharger CV ↓",
        scrollPrompt: "Faites défiler vers le bas et vous comprendrez ce que je veux dire"
      },
      works: {
        eyebrow: "Mes travaux",
        title: "Là où je garde ma curiosité",
        subtitle: "Des analyses interactives et des modèles de données qui relient la complexité des chiffres aux décisions d'affaires.",
        filters: {
          all: "En vedette (5)",
          bi: "BI & Tableaux de bord (2)",
          business: "Commerce & Export (1)",
          research: "Territoire & Sport (2)"
        }
      },
      skills: {
        eyebrow: "Mes compétences",
        title: "Les outils que j'utilise le plus",
        subtitle: "Une boîte à outils moderne pour passer de la question métier brute à une solution d'intelligence décisionnelle pérenne.",
        groups: {
          bi: "BI & Visualisation",
          cloud: "Données & ETL",
          dev: "CRM & Plateformes de dons",
          ai: "Automatisation & IA appliquée"
        }
      },
      timeline: {
        eyebrow: "Parcours",
        title: "Du support TI au conseil en BI",
        subtitle: "Mon parcours professionnel, étape par étape, jusqu'au poste de consultant BI que j'occupe aujourd'hui."
      },
      marquee: {
        t1: "Intelligence d'Affaires · Tableaux de bord Power BI · Modélisation DAX · Nettoyage Power Query · Modèle en Étoile · KPI Métier · Reporting Exécutif · Architecture Décisionnelle · ",
        t2: "Python & SQL · Pandas · Google Colab · Salesforce NPSP · Traitement ETL · Qualité des données · Automatisation · Data Storytelling · "
      },
      contact: {
        eyebrow: "Disponible pour une collaboration",
        title: "Donnons une direction à vos données.",
        subtitle: "Besoin d'un tableau de bord sur mesure, d'une refonte de modèle décisionnel ou d'un accompagnement analytique ? Échangeons dès aujourd'hui.",
        emailBtn: "Planifier un échange par Email ↗",
        chatBtn: "Discussion autour d'un café ☕",
        cvBtn: "Télécharger mon CV ↓",
        phoneBtn: "438-221-3326",
        linkedinBtn: "LinkedIn ↗"
      },
      footer: {
        name: "Abdelkader Bouzourine",
        tagline: "Data Analyst · Consultant BI",
        rights: "Tous droits réservés."
      },
      modal: {
        close: "Fermer",
        metricsTitle: "Métriques & Impact Clés",
        highlightsTitle: "Points Forts & Démarche",
        toolsTitle: "Stack Technologique",
        openDirect: "Ouvrir le PDF ↗"
      }
    },
    en: {
      nav: {
        home: "Home",
        works: "Works",
        skills: "Skills",
        timeline: "Journey",
        contact: "Contact",
        resume: "Resume ↓",
        chat: "Coffee ☕"
      },
      hero: {
        badge: "AVAILABLE FOR MISSIONS · DATA ANALYST & BI CONSULTANT",
        titlePrefix: "Abdelkader",
        titleSuffix: "Bouzourine",
        role: "Data Analyst · Business Intelligence Consultant",
        lead: "I help teams uncover the story behind their data and turn it into actionable decisions and measurable impact.",
        ctaWorks: "See my works ↓",
        ctaChat: "Coffee chat ☕",
        ctaResume: "Download CV ↓",
        scrollPrompt: "scroll down and see what I mean"
      },
      works: {
        eyebrow: "My works",
        title: "Where I keep my curiosity",
        subtitle: "Interactive analytics and robust data models connecting numbers to strategic business decisions.",
        filters: {
          all: "Featured (5)",
          bi: "BI & Dashboards (2)",
          business: "Trade & Export (1)",
          research: "Territory & Sports (2)"
        }
      },
      skills: {
        eyebrow: "My skills",
        title: "The tools I use the most",
        subtitle: "A modern toolkit built to go from raw business questions to reliable, high-impact intelligence systems.",
        groups: {
          bi: "BI & Visualization",
          cloud: "Data & ETL",
          dev: "CRM & Donation Platforms",
          ai: "Automation & Applied AI"
        }
      },
      timeline: {
        eyebrow: "Journey",
        title: "From IT support to BI consulting",
        subtitle: "My professional path, step by step, up to the BI consultant role I hold today."
      },
      marquee: {
        t1: "Business Intelligence · Power BI Dashboards · DAX Modeling · Power Query ETL · Star Schemas · Business KPIs · Executive Reporting · Data Architecture · ",
        t2: "Python & SQL · Pandas · Google Colab · Salesforce NPSP · ETL Pipelines · Data Quality · Automation · Data Storytelling · "
      },
      contact: {
        eyebrow: "Available for collaboration",
        title: "Let's give your data a direction.",
        subtitle: "Need a tailored dashboard, an audit of your data model, or dedicated analytical consulting? Let's connect today.",
        emailBtn: "Schedule an Email chat ↗",
        chatBtn: "Coffee chat ☕",
        cvBtn: "Download my CV ↓",
        phoneBtn: "438-221-3326",
        linkedinBtn: "LinkedIn ↗"
      },
      footer: {
        name: "Abdelkader Bouzourine",
        tagline: "Data Analyst · BI Consultant",
        rights: "All rights reserved."
      },
      modal: {
        close: "Close",
        metricsTitle: "Key Metrics & Impact",
        highlightsTitle: "Methodology & Highlights",
        toolsTitle: "Technology Stack",
        openDirect: "Open PDF ↗"
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        works: "الأعمال",
        skills: "المهارات",
        timeline: "المسار",
        contact: "تواصل",
        resume: "السيرة الذاتية ↓",
        chat: "محادثة ☕"
      },
      hero: {
        badge: "متاح للمشاريع والاستشارات · محلل بيانات وخبير ذكاء أعمال",
        titlePrefix: "عبد القادر",
        titleSuffix: "بوزورين",
        role: "محلل بيانات · مستشار ذكاء الأعمال (BI)",
        lead: "أساعد الفرق والشركات على استكشاف القصة الكامنة خلف بياناتهم وتحويلها إلى قرارات استراتيجية ونتائج عملية ملموسة.",
        ctaWorks: "اكتشف أعمالي ↓",
        ctaChat: "محادثة على فنجان قهوة ☕",
        ctaResume: "تحميل السيرة الذاتية ↓",
        scrollPrompt: "مرر للأسفل لاكتشاف التفاصيل"
      },
      works: {
        eyebrow: "أعمالي",
        title: "حيث أضع شغفي وفضولي التحليلي",
        subtitle: "تحليلات تفاعلية ونماذج بيانات تربط الأرقام المعقدة بالقرارات الإدارية الذكية.",
        filters: {
          all: "المختارات (5)",
          bi: "ذكاء الأعمال ولوحات المعلومات (2)",
          business: "التجارة والتصدير (1)",
          research: "الأقاليم والرياضة (2)"
        }
      },
      skills: {
        eyebrow: "مهاراتي",
        title: "الأدوات والتقنيات التي أتقنها",
        subtitle: "مجموعة أدوات متقدمة للانتقال من السؤال التجاري إلى حلول معلوماتية دقيقة وقابلة للتطوير.",
        groups: {
          bi: "ذكاء الأعمال والعرض المرئي",
          cloud: "البيانات والمعالجة ETL",
          dev: "أنظمة CRM ومنصات التبرعات",
          ai: "الأتمتة والذكاء الاصطناعي"
        }
      },
      timeline: {
        eyebrow: "المسار",
        title: "من الدعم التقني إلى استشارات ذكاء الأعمال",
        subtitle: "مساري المهني خطوة بخطوة، حتى وصلت إلى منصب مستشار ذكاء أعمال الذي أشغله اليوم."
      },
      marquee: {
        t1: "ذكاء الأعمال · لوحات تحكم Power BI · نمذجة DAX · معالجة Power Query · نماذج Star Schema · مؤشرات أداء KPI · تقارير تنفيذية · بنية البيانات · ",
        t2: "بايثون و SQL · Pandas · Google Colab · Salesforce NPSP · مسارات ETL · جودة البيانات · الأتمتة · سرد البيانات القصصي · "
      },
      contact: {
        eyebrow: "متاح للتعاون والشراكات",
        title: "لنمنح بياناتك اتجاهاً واضحاً ورؤية ثاقبة.",
        subtitle: "هل تبحث عن لوحة تحكم مخصصة، أو إعادة هيكلة لنظامك التحليلي، أو استشارة دقيقة في ذكاء الأعمال؟ يسعدني التواصل معك.",
        emailBtn: "مراسلة عبر البريد الإلكتروني ↗",
        chatBtn: "محادثة على فنجان قهوة ☕",
        cvBtn: "تحميل السيرة الذاتية ↓",
        phoneBtn: "438-221-3326",
        linkedinBtn: "لينكد إن ↗"
      },
      footer: {
        name: "عبد القادر بوزورين",
        tagline: "محلل بيانات · مستشار ذكاء الأعمال",
        rights: "جميع الحقوق محفوظة."
      },
      modal: {
        close: "إغلاق",
        metricsTitle: "المؤشرات والأثر الرئيسي",
        highlightsTitle: "المنهجية وأبرز النقاط",
        toolsTitle: "التقنيات المستخدمة",
        openDirect: "فتح ملف PDF ↗"
      }
    }
  };

  // Projets issus du dossier "Projet BI" (PDF Power BI). Les descriptions sont en français ;
  // EN/AR retombent sur le français tant qu'elles ne sont pas traduites.
  const projectCatalog = [
    {
      id: "coffee-sales",
      category: "bi",
      image: "static/assets/projects/coffee-sales.jpg",
      pdf: "static/projects/coffee-sales.pdf",
      chips: [
        { name: "Power BI", icon: "static/assets/PowerBI.svg" },
        { name: "DAX", icon: null },
        { name: "Analyse des ventes", icon: null }
      ],
      fr: {
        title: "Coffee Sales — Ventes, produits et canaux",
        tag: "BI & Tableaux de bord",
        desc: "Tableau de bord exécutif sur 12 mois : chiffre d'affaires, transactions, panier moyen et canaux de vente, avec pistes d'explication des variations.",
        modal: {
          headline: "Pilotage commercial : revenus, produits et canaux de vente",
          overview: "Vue exécutive de juillet 2025 à juin 2026 sur les ventes au Moyen-Orient (Jordanie et Palestine). Le tableau compare chaque mois au précédent et propose des pistes d'analyse : mix produit, mix client, remises et canaux.",
          metrics: [
            "102,7 K$ de chiffre d'affaires sur 12 mois",
            "500 transactions et 3 174 kg vendus",
            "Panier moyen de 205 $ et remise effective de 10,1 %",
            "151 clients actifs, 3 canaux comparés (magasin, téléphone, en ligne)"
          ],
          highlights: [
            "Filtres dynamiques par pays, canal, mois et type de jour.",
            "Mesures DAX de comparaison mensuelle (chiffre d'affaires, transactions, panier moyen).",
            "Lecture des variations : en juin 2026, plus de transactions mais un panier moyen en baisse de 28,1 %."
          ]
        }
      }
    },
    {
      id: "car-analytics",
      category: "bi",
      image: "static/assets/projects/car-analytics.jpg",
      pdf: "static/projects/car-analytics.pdf",
      chips: [
        { name: "Power BI", icon: "static/assets/PowerBI.svg" },
        { name: "DAX", icon: null },
        { name: "Marché automobile", icon: null }
      ],
      fr: {
        title: "CarAnalytics — Marché automobile au Caire",
        tag: "BI & Tableaux de bord",
        desc: "Analyse de près de 30 000 annonces de véhicules : prix, segments, marques, villes et équipements, pour comparer le neuf et l'occasion.",
        modal: {
          headline: "Analyse du marché automobile : prix, marques et équipements",
          overview: "Tableau de bord Power BI qui décrit le marché des véhicules neufs et d'occasion au Caire : répartition des prix, marques dominantes, villes et équipements.",
          metrics: [
            "29 924 annonces analysées",
            "Prix typique de 970 K EGP, prix moyen de 6,7 M EGP",
            "70,9 % de véhicules d'occasion, 29,1 % de neufs",
            "Kilométrage typique de 62 000 km"
          ],
          highlights: [
            "Segmentation des prix, de moins de 500 K EGP à plus de 5 M EGP.",
            "Classement des marques et des villes (New Cairo, Nasr City, Sheikh Zayed, Madinaty…).",
            "Analyse des équipements : climatisation, direction assistée, télécommande, boîte automatique."
          ]
        }
      }
    },
    {
      id: "global-tea-trade",
      category: "business",
      image: "static/assets/projects/global-tea-trade.jpg",
      pdf: "static/projects/global-tea-trade.pdf",
      chips: [
        { name: "Power BI", icon: "static/assets/PowerBI.svg" },
        { name: "DAX", icon: null },
        { name: "Commerce international", icon: null }
      ],
      fr: {
        title: "Global Tea Trade — Import, export et tendances",
        tag: "Commerce & Export",
        desc: "Suivi des échanges mondiaux de thé de 2014 à 2023 : principaux exportateurs et importateurs, écart commercial et évolution annuelle.",
        modal: {
          headline: "Analyse des flux mondiaux d'import et d'export de thé",
          overview: "Tableau de bord Power BI à deux onglets (export et import) permettant de comparer les pays, de suivre l'écart commercial année après année et d'identifier les fournisseurs clés.",
          metrics: [
            "Top 5 exportateurs : Chine, Kenya, Sri Lanka, Inde, Allemagne",
            "Top 5 importateurs : Pakistan, États-Unis, Russie, Royaume-Uni, EAU",
            "Suivi annuel de l'écart commercial, 2014 à 2023",
            "Variation annuelle des exportations et importations par pays"
          ],
          highlights: [
            "Navigation par pays avec sélection de l'année et du sens du flux.",
            "Tableau comparatif : volume, médiane, variation annuelle et tendance.",
            "Synthèse exécutive générée à partir des indicateurs filtrés."
          ]
        }
      }
    },
    {
      id: "gatineau-traffic",
      category: "research",
      image: "static/assets/projects/gatineau-traffic.jpg",
      pdf: "static/projects/gatineau-traffic.pdf",
      chips: [
        { name: "Power BI", icon: "static/assets/PowerBI.svg" },
        { name: "Power Query", icon: "static/assets/powerquery.svg" },
        { name: "Données géographiques", icon: null }
      ],
      fr: {
        title: "Gatineau — Débit de circulation et véhicules lourds",
        tag: "Territoire & Mobilité",
        desc: "Analyse de 7 155 points de circulation entre 2016 et 2025 : volumes par secteur, direction et rue, part des véhicules lourds et qualité des données.",
        modal: {
          headline: "Intelligence territoriale : circulation et véhicules lourds à Gatineau",
          overview: "Tableau de bord qui transforme les données ouvertes de circulation en lecture claire des volumes, des secteurs les plus chargés et des axes à surveiller.",
          metrics: [
            "7 155 points de circulation analysés",
            "Environ 36,6 M de véhicules par 24 h (réseau cumulé)",
            "6,51 % de véhicules lourds pondérés",
            "Baisse de 30,4 % du débit entre 2016 et 2025"
          ],
          highlights: [
            "Filtres par année, secteur et direction, avec classement par classe de débit.",
            "Secteur prioritaire : Gatineau (33,2 % du total) ; rue prioritaire : boulevard Saint-Raymond.",
            "Contrôle qualité : 35,72 % des points présentent des données incomplètes, signalées dans le tableau de bord."
          ]
        }
      }
    },
    {
      id: "soccer-data",
      category: "research",
      image: "static/assets/projects/soccer-data.jpg",
      pdf: "static/projects/soccer-data.pdf",
      chips: [
        { name: "Power BI", icon: "static/assets/PowerBI.svg" },
        { name: "Analyse sportive", icon: null }
      ],
      fr: {
        title: "Football européen — 25 saisons de données",
        tag: "Sport & Données",
        desc: "Analyse de 24 625 matchs sur 25 saisons et 3 championnats : buts, avantage du domicile et classement offensif des équipes.",
        modal: {
          headline: "Analyse statistique de 25 saisons de football",
          overview: "Tableau de bord Power BI qui compare les championnats (Premier League, Bundesliga 1 et 2) et met en évidence la production offensive et la répartition des scores.",
          metrics: [
            "24 625 matchs analysés sur 25 saisons",
            "66 831 buts, soit 2,71 buts par match",
            "47,8 % de victoires à domicile",
            "125 équipes uniques ; record de 13 buts sur un match"
          ],
          highlights: [
            "Classement offensif des équipes (buts par match) : Bayern Munich en tête avec 2,10.",
            "Répartition des scores par tranches de buts.",
            "Comparaison des buts marqués et encaissés par championnat."
          ]
        }
      }
    }
  ];

  // Parcours professionnel (source : CV). Les textes sont en français.
  // "pin" : position du point d'étape sur la scène (viewBox 1129 x 681).
  const careerIcons = {
    support: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    chart: '<path d="M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'
  };

  const careerSteps = [
    {
      year: "2007",
      country: "Algérie · Canada",
      period: "2007 — Janv. 2022",
      title: "Consultant TI / Expert BI",
      company: "Entreprise PC Service · Algérie et Canada",
      icon: "support",
      pin: { x: 215, y: 612 },
      desc: "Conseil aux clients en solutions informatiques et modernisation des processus. Définition des KPI sur les ventes, les stocks et les activités, et soutien technique aux outils et aux données."
    },
    {
      year: "2023",
      country: "Canada",
      period: "Mars 2023 — Août 2024",
      title: "Analyste Power BI",
      company: "LB Technologie · Montréal, QC",
      icon: "chart",
      pin: { x: 716, y: 595 },
      desc: "Recueil des besoins clients, modèles de données et rapports Power BI. Optimisation des flux ETL dans Power Query, avec une préparation des données réduite de 30 %."
    },
    {
      year: "2024",
      country: "Canada",
      period: "Août 2024 — Avril 2026",
      title: "Analyste-conseiller en données (performance)",
      company: "SPCA de Montréal · Montréal, QC",
      icon: "database",
      pin: { x: 876, y: 435 },
      desc: "Qualité des données Salesforce NPSP (plus de 40 000 enregistrements), pipelines Python de normalisation des adresses et plus de 10 tableaux de bord Power BI : délais d'analyse réduits de 50 %, erreurs de saisie réduites de 80 % grâce au scan."
    },
    {
      year: "2026",
      country: "Canada",
      period: "Avril 2026 — Aujourd'hui",
      title: "Consultant BI / Analyste Power BI",
      company: "Consultant indépendant · Montréal, QC",
      icon: "target",
      current: true,
      pin: { x: 600, y: 210 },
      desc: "Tableaux de bord de performance, modèles de données et mesures DAX, applications Streamlit et automatisation avec Python, SQL, Power Query, n8n et agents d'IA."
    }
  ];

  // SEO: title and description per language (kept in sync with the language switcher)
  const seoMeta = {
    fr: {
      title: "Abdelkader Bouzourine · Data Analyst & Consultant BI | Power BI, Montréal",
      description: "Portfolio d'Abdelkader Bouzourine, data analyst et consultant BI à Montréal : tableaux de bord Power BI, modélisation DAX, Power Query, automatisation Python et projets analytiques.",
      ogTitle: "Abdelkader Bouzourine · Data Analyst & Consultant BI",
      ogDescription: "Tableaux de bord Power BI, modélisation DAX, Power Query et automatisation Python. Projets analytiques et parcours professionnel."
    },
    en: {
      title: "Abdelkader Bouzourine · Data Analyst & BI Consultant | Power BI, Montreal",
      description: "Portfolio of Abdelkader Bouzourine, data analyst and BI consultant in Montreal: Power BI dashboards, DAX modeling, Power Query, Python automation and analytics projects.",
      ogTitle: "Abdelkader Bouzourine · Data Analyst & BI Consultant",
      ogDescription: "Power BI dashboards, DAX modeling, Power Query and Python automation. Analytics projects and professional journey."
    },
    ar: {
      title: "عبد القادر بوزورين · محلل بيانات ومستشار ذكاء أعمال | Power BI",
      description: "معرض أعمال عبد القادر بوزورين، محلل بيانات ومستشار ذكاء أعمال في مونتريال: لوحات Power BI ونمذجة DAX ومعالجة Power Query وأتمتة Python.",
      ogTitle: "عبد القادر بوزورين · محلل بيانات ومستشار ذكاء أعمال",
      ogDescription: "لوحات Power BI ونمذجة DAX ومعالجة Power Query وأتمتة Python، ومشاريع تحليلية ومسار مهني."
    }
  };

  function updateSeoMeta(lang) {
    const meta = seoMeta[lang] || seoMeta.fr;
    document.title = meta.title;
    const setMeta = (selector, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', value);
    };
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.ogTitle);
    setMeta('meta[property="og:description"]', meta.ogDescription);
    setMeta('meta[name="twitter:title"]', meta.ogTitle);
    setMeta('meta[name="twitter:description"]', meta.ogDescription);
  }

  // State
  let currentLang = localStorage.getItem('portfolio-language') || 'fr';
  let currentFilter = 'all';
  let selectedCareer = careerSteps.length - 1;

  // DOM Elements
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.top-progress-bar');
  const backToTop = document.querySelector('.back-to-top-btn');
  const projectGrid = document.getElementById('project-grid');
  const careerPins = document.getElementById('career-pins');
  const careerCallout = document.getElementById('career-callout');
  const careerCounter = document.getElementById('career-counter-value');
  const modalBackdrop = document.getElementById('project-modal');
  const modalDialog = document.getElementById('modal-dialog-content');
  const modalClose = document.getElementById('modal-close-btn');
  const menuBtn = document.querySelector('.menu-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  // Helper selectors
  const $ = (selector, ctx = document) => ctx.querySelector(selector);
  const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

  // Render Project Cards
  function renderProjects() {
    if (!projectGrid) return;
    projectGrid.innerHTML = '';

    projectCatalog.forEach((proj) => {
      const data = proj[currentLang] || proj.fr;
      const card = document.createElement('div');
      card.className = 'project-card-outer';
      card.setAttribute('data-category', proj.category);
      card.setAttribute('data-id', proj.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');

      if (currentFilter !== 'all' && proj.category !== currentFilter) {
        card.classList.add('is-hidden');
      }

      // Tech chips HTML
      const chipsHtml = proj.chips.map(chip => {
        const iconHtml = chip.icon ? `<img src="${chip.icon}" alt="${chip.name}">` : '';
        return `<span class="tech-chip">${iconHtml}<span>${chip.name}</span></span>`;
      }).join('');

      card.innerHTML = `
        <div class="project-card-inner">
          <div class="card-img-wrap">
            <div class="card-overlay"></div>
            <img src="${proj.image}" alt="${data.title}" loading="lazy">
            <div class="card-tag">${data.tag}</div>
            <div class="card-arrow-pill" title="${i18n[currentLang].modal.openDirect}">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7"/>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <h3 class="card-title">${data.title}</h3>
            <p class="card-desc">${data.desc}</p>
            <div class="tech-chips">
              ${chipsHtml}
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(proj));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(proj);
        }
      });
      projectGrid.appendChild(card);
    });
  }

  // Open Modal
  function openModal(proj) {
    if (!modalBackdrop || !modalDialog) return;
    const data = proj[currentLang] || proj.fr;
    const tModal = i18n[currentLang].modal;

    const metricsHtml = data.modal.metrics.map(m => `
      <li class="flex items-start gap-2.5 text-sm text-gray-200">
        <span class="w-1.5 h-1.5 rounded-full bg-[#57C785] mt-2 flex-shrink-0"></span>
        <span>${m}</span>
      </li>
    `).join('');

    const highlightsHtml = data.modal.highlights.map(h => `
      <li class="flex items-start gap-2.5 text-sm text-gray-300">
        <span class="w-1.5 h-1.5 rounded-full bg-[#219190] mt-2 flex-shrink-0"></span>
        <span>${h}</span>
      </li>
    `).join('');

    const chipsHtml = proj.chips.map(chip => {
      const iconHtml = chip.icon ? `<img src="${chip.icon}" class="w-4 h-4 object-contain" alt="${chip.name}">` : '';
      return `<span class="tech-chip">${iconHtml}<span>${chip.name}</span></span>`;
    }).join('');

    modalDialog.innerHTML = `
      <div class="relative aspect-video w-full overflow-hidden bg-gray-950 rounded-t-xl">
        <img src="${proj.image}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#11161f] via-transparent to-black/40"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/85 backdrop-blur-md border border-white/10 text-white">
            ${data.tag}
          </span>
        </div>
      </div>
      <div class="p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">${data.modal.headline}</h2>
        <p class="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">${data.modal.overview}</p>

        <div class="grid md:grid-cols-2 gap-6 my-6 p-5 rounded-xl bg-gray-900/60 border border-white/5">
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#57C785] mb-3">${tModal.metricsTitle}</h4>
            <ul class="space-y-2">
              ${metricsHtml}
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#219190] mb-3">${tModal.highlightsTitle}</h4>
            <ul class="space-y-2">
              ${highlightsHtml}
            </ul>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-white/5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">${tModal.toolsTitle}</h4>
          <div class="flex flex-wrap gap-2">
            ${chipsHtml}
          </div>
        </div>

        <div class="mt-8">
          <a href="${proj.pdf}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#0c0e12] bg-gradient-to-r from-[#219190] via-[#57C785] to-[#34d399] hover:scale-105 transition-transform">
            ${tModal.openDirect}
          </a>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Apply Language
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-language', lang);

    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', isRtl);

    const dict = i18n[lang] || i18n.fr;

    // Update data-i18n elements
    $$('[data-i18n]').forEach(el => {
      const path = el.dataset.i18n.split('.');
      let val = dict;
      for (const p of path) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        el.textContent = val;
      }
    });

    // Update active lang buttons
    $$('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    updateSeoMeta(lang);

    // Re-render projects with translated content
    renderProjects();

    // Re-render career scene
    renderCareer();
  }

  // Render Career Scene: pins on the map, details of the selected checkpoint, and a car driving along the path
  const careerPathLine = document.getElementById('career-path-line');
  const careerCarEl = document.getElementById('career-car');
  const careerPathLength = careerPathLine ? careerPathLine.getTotalLength() : 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let carProgress = 0;
  let carFrame = 0;

  // Distance along the path (in path units) closest to a checkpoint position
  function findPathProgress(point) {
    let best = { dist: Infinity, at: 0 };
    const samples = 600;
    for (let i = 0; i <= samples; i++) {
      const at = (i / samples) * careerPathLength;
      const p = careerPathLine.getPointAtLength(at);
      const dist = Math.hypot(p.x - point.x, p.y - point.y);
      if (dist < best.dist) best = { dist, at };
    }
    return best.at;
  }

  // Put the car on the path, oriented along the direction of travel
  function placeCar(at, direction = 1) {
    if (!careerCarEl) return;
    const p = careerPathLine.getPointAtLength(at);
    // Tangent from a small step either side of the car, so the angle stays valid at both ends of the path
    const after = careerPathLine.getPointAtLength(Math.min(careerPathLength, at + 2));
    const before = careerPathLine.getPointAtLength(Math.max(0, at - 2));
    const sign = direction < 0 ? -1 : 1;
    const angle = Math.atan2((after.y - before.y) * sign, (after.x - before.x) * sign) * 180 / Math.PI;
    careerCarEl.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)})`);
  }

  // Drive the car from its current position to a checkpoint
  function driveCarTo(target, instant) {
    cancelAnimationFrame(carFrame);
    if (instant || prefersReducedMotion) {
      carProgress = target;
      placeCar(target);
      return;
    }

    const start = carProgress;
    const direction = target >= start ? 1 : -1;
    const duration = Math.min(2400, 600 + Math.abs(target - start) * 2);
    const startTime = performance.now();

    const step = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      carProgress = start + (target - start) * eased;
      placeCar(carProgress, direction);
      if (t < 1) carFrame = requestAnimationFrame(step);
    };
    carFrame = requestAnimationFrame(step);
  }

  function renderCareer() {
    if (!careerPins) return;
    careerPins.innerHTML = '';

    careerSteps.forEach((step, idx) => {
      if (step.progress === undefined) {
        step.progress = careerPathLine ? findPathProgress(step.pin) : 0;
      }

      const pin = document.createElement('button');
      pin.type = 'button';
      pin.className = 'career-pin' + (step.pin.x > 800 ? ' is-edge' : '');
      pin.style.left = (step.pin.x / 1129 * 100) + '%';
      pin.style.top = (step.pin.y / 681 * 100) + '%';
      pin.setAttribute('aria-label', `${step.year} — ${step.title}, ${step.country}`);
      pin.innerHTML = `
        <span class="career-pin-tip">
          <strong>${step.title}</strong>
          <span>${step.country}</span>
        </span>
        <span class="career-pin-bubble">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${careerIcons[step.icon]}</svg>
          <span>${step.year}</span>
        </span>
        <span class="career-pin-dot"></span>
      `;
      pin.addEventListener('click', () => selectCareer(idx));
      pin.addEventListener('pointerenter', () => selectCareer(idx));
      pin.addEventListener('focus', () => selectCareer(idx));
      careerPins.appendChild(pin);
    });

    selectCareer(selectedCareer, true);
  }

  function selectCareer(idx, instant = false) {
    selectedCareer = idx;
    const step = careerSteps[idx];

    $$('.career-pin', careerPins).forEach((pin, i) => {
      pin.classList.toggle('is-active', i === idx);
      pin.setAttribute('aria-pressed', String(i === idx));
    });

    if (careerCounter) {
      careerCounter.textContent = `${idx + 1}/${careerSteps.length}`;
    }

    if (careerCallout) {
      careerCallout.innerHTML = `
        <div class="career-callout-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${careerIcons[step.icon]}</svg>
        </div>
        <div>
          <p class="career-callout-tag">${step.period} · ${step.company}${step.current ? ' · Poste actuel' : ''}</p>
          <h4 class="career-callout-title">${step.title}</h4>
          <p class="career-callout-text">${step.desc}</p>
        </div>
      `;
    }

    driveCarTo(step.progress, instant);
  }

  // Terminal Typing Animation in Hero
  const terminalSnippets = [
    'SELECT insight, strategic_impact FROM analytics.bi_model;',
    'CALCULATE([TotalSalesGrowth], DATESYTD(DimCalendar[Date]))',
    'A good dashboard answers the question before you ask it.',
    'python -m pipeline.etl --source "production_db" --status "verified"'
  ];

  let snippetIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const terminalTextEl = document.getElementById('hero-terminal-code');

  function typeTerminal() {
    if (!terminalTextEl) return;
    const currentText = terminalSnippets[snippetIdx];

    if (isDeleting) {
      charIdx--;
      terminalTextEl.textContent = currentText.substring(0, charIdx);
    } else {
      charIdx++;
      terminalTextEl.textContent = currentText.substring(0, charIdx);
    }

    let speed = isDeleting ? 25 : 50;

    if (!isDeleting && charIdx === currentText.length) {
      speed = 2400; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      snippetIdx = (snippetIdx + 1) % terminalSnippets.length;
      speed = 500;
    }

    setTimeout(typeTerminal, speed);
  }

  // Filter Buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter || 'all';
      $$('.project-card-outer').forEach(card => {
        const cat = card.dataset.category;
        const matches = (currentFilter === 'all') || (cat === currentFilter);
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });

  // Language buttons
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Scroll listeners
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar
    if (progressBar && maxScroll > 0) {
      const pct = Math.min(100, Math.max(0, (scrollY / maxScroll) * 100));
      progressBar.style.width = pct + '%';
    }

    // Header blur / scroll
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }

    // Back to top button
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  menuBtn?.addEventListener('click', () => {
    const open = mobileDrawer?.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  $$('#mobile-drawer a').forEach(a => {
    a.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Initialization
  setLanguage(currentLang);
  typeTerminal();

})();
