/* ============================================================
   Ubicu i18n dictionary (ES / EN)
   Ported from ../Ubicu Landing/assets/landing.js + nav/footer/
   inner-page chrome. Values may contain inline HTML (rendered with
   set:html in components).
   ============================================================ */

export const languages = {
  es: "Español",
  en: "English",
} as const

export const defaultLang = "es" as const

export type Lang = keyof typeof languages

export const ui = {
  es: {
    // Nav
    "nav.about": "Quiénes somos",
    "nav.product": "Producto",
    "nav.how": "Cómo funciona",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar demo",
    "nav.menu": "Menú",
    // Product dropdown (real sub-pages)
    "nav.escalamiento": "Escalamiento del producto",
    "nav.produccion": "Producción científica",
    "nav.proceso": "Proceso de diseño",
    // Hero
    "hero.eyebrow": "Producto de apoyo clínico",
    "hero.h1": 'Respira mejor.<br>Mide cada <span class="text-accent">avance</span>.',
    "hero.lead":
      "La fisioterapia respiratoria con incentivo, reinventada: ejercicios entretenidos en casa y una plataforma en la nube que cuantifica el desempeño del paciente.",
    "hero.cta1": "Contacta con nosotros",
    "hero.cta2": "Cómo funciona →",
    "hero.s1l": "volúmenes medidos: inspirado y espirado",
    "hero.s2l": "supervisión remota desde el hogar",
    "hero.s3l": "capacidades para el fisioterapeuta",
    marq: "Fisioterapia respiratoria · Incentivo gamificado · Supervisión remota · Datos en la nube · Tratamiento ambulatorio · Rehabilitación pulmonar",
    // Video
    "video.kick": "Ubicu en acción",
    "video.h2": "Un videojuego que enseña a respirar.",
    "video.p":
      "Mira cómo el paciente realiza sus ejercicios respiratorios desde casa mientras el fisioterapeuta recibe datos en tiempo real.",
    "video.label": "Demo del producto · 1:00",
    "video.play": "Reproducir video",
    // Intro
    "intro.kick": "Qué es Ubicu",
    "intro.h2": 'Apoyo para la <span class="hl">fisioterapia respiratoria</span> con incentivo.',
    "intro.p":
      "UBICU permite al paciente realizar sus ejercicios respiratorios de manera entretenida, con un videojuego, desde la comodidad de su hogar y con supervisión remota. Al fisioterapeuta le brinda una plataforma en la nube para ampliar el servicio y obtener información cuantitativa del desempeño.",
    "intro.pt1": "Ejercicios respiratorios convertidos en juego",
    "intro.pt2": "Supervisión remota, en cualquier momento",
    "intro.pt3": "Datos cuantitativos del desempeño",
    "intro.pt4": "Una plataforma en la nube para la clínica",
    "intro.iv": "Dispositivo + app + plataforma",
    // Features
    "feat.kick": "Sus principales características",
    "feat.h2": "Con nuestro sistema incentivo respiratorio podrás:",
    "feat.p":
      "Una caja de herramientas completa para llevar la fisioterapia respiratoria más allá del consultorio.",
    "f1.t": "Prescribir remotamente",
    "f1.d": "La fisioterapia a partir de los datos de evolución del paciente.",
    "f2.t": "Medir",
    "f2.d": "Tanto el volumen inspirado como el espirado, en cada sesión.",
    "f3.t": "Presentar resultados",
    "f3.d": "A través de nuestra aplicación que muestra el desempeño de los ejercicios.",
    "f4.t": "Tratamiento ambulatorio",
    "f4.d": "Gracias a su portabilidad, el paciente realiza los ejercicios en su hogar.",
    "f5.t": "Evaluar el desempeño",
    "f5.d": "De forma remota a través de nuestra aplicación web.",
    "f6.t": "Llegar a más pacientes",
    "f6.d": "De forma eficiente y con todas las herramientas para un tratamiento personalizado.",
    // How it works
    "how.kick": "Cómo funciona",
    "how.h2": "De la prescripción al progreso, en cuatro pasos.",
    "how.p": "Un flujo simple que conecta al paciente en casa con el fisioterapeuta en la nube.",
    "h1.t": "Prescribe",
    "h1.d": "El fisioterapeuta define el plan respiratorio desde la plataforma en la nube.",
    "h1.g": "Clínica",
    "h2.t": "Respira y juega",
    "h2.d": "El paciente realiza los ejercicios en casa con el incentivo del videojuego.",
    "h2.g": "Hogar",
    "h3.t": "Mide",
    "h3.d": "El dispositivo captura el volumen inspirado y espirado en cada repetición.",
    "h3.g": "Dispositivo",
    "h4.t": "Evalúa",
    "h4.d": "Los datos llegan a la nube y el fisioterapeuta ajusta el tratamiento.",
    "h4.g": "Datos",
    // CTA
    "cta.h2": "Lleva la fisioterapia respiratoria a más hogares.",
    "cta.p":
      "Hablemos sobre cómo Ubicu puede ampliar tu servicio de rehabilitación pulmonar con datos y supervisión remota.",
    "cta.b1": "Contacta con nosotros",
    "cta.b2": "Ver el video",
    // Sponsors
    "spon.kick": "Patrocinado por",
    "spon.role": "Promotor",
    // Collections (listing/detail pages)
    "col.esc.desc":
      'Presentación de ubicu en los distintos niveles de maduración tecnológica (<a class="no-underline hover:underline text-navy" href="https://www.mincotur.gob.es/publicaciones/publicacionesperiodicas/economiaindustrial/revistaeconomiaindustrial/393/notas.pdf" target="_blank" rel="noopener">TRL</a>).',
    "col.esc.back": "← Regresar a escalamiento del producto",
    "col.prod.desc":
      "Presentación de los recursos científicos, académicos e informativos de Ubicu.",
    "col.prod.back": "← Regresar a producción científica",
    "col.proc.desc": "Presentación de las distintas etapas de diseño de Ubicu.",
    "col.proc.back": "← Regresar a proceso de diseño",
    // Footer
    "f.blurb":
      "Producto de apoyo para la fisioterapia respiratoria con incentivo. Ejercicios desde casa, datos en la nube.",
    "f.col1": "Producto",
    "f.col2": "Compañía",
    "f.l1": "Cómo funciona",
    "f.l2": "Características",
    "f.l3": "Demo",
    "f.l4": "Quiénes somos",
    "f.l5": "Contacto",
    "f.privacy": "Política de privacidad",
    "f.rights": "Ubicu. Todos los derechos reservados.",
    "f.location": "Cali, Colombia",
    // Inner pages (chrome)
    "about.title": "Quiénes somos",
    "about.desc": "Conoce nuestro equipo y las alianzas que hacen posible Ubicu.",
    "about.team": "Nuestro equipo",
    "about.teamLead":
      "Somos un equipo interdisciplinario que aborda el problema de la adherencia de los pacientes a la fisioterapia respiratoria con incentivo.",
    "about.partners": "Nuestras alianzas",
    "contact.title": "Contacto",
    "contact.desc": "Conoce nuestros canales de contacto.",
    "contact.h2": "Contacto Ubicu",
    "contact.lead":
      "¿Tienes algo que comentarnos? Llena el formulario y recibiremos tu mensaje, o escríbenos por email.",
    "form.name": "Nombre completo",
    "form.email": "Correo electrónico",
    "form.message": "Tu mensaje",
    "form.send": "Enviar mensaje",
    "form.errName": "Por favor ingresa tu nombre completo.",
    "form.errEmail": "Por favor ingresa tu correo electrónico.",
    "form.errEmailValid": "Por favor ingresa un correo electrónico válido.",
    "form.errMsg": "Por favor ingresa tu mensaje.",
    "form.sending": "Enviando...",
    "form.wrong": "Algo salió mal.",
    "privacy.eyebrow": "Privacidad",
    "privacy.title": "Política de privacidad",
    "privacy.desc":
      "Cómo recopilamos, usamos y protegemos tus datos personales en el sitio web y en la aplicación móvil de Ubicu. Última actualización: 18 de junio de 2026.",
    "notfound.title": "Página no encontrada",
    "notfound.p": "La página que buscas no existe o fue movida.",
    "notfound.back": "Volver al inicio",
  },
  en: {
    "nav.about": "About us",
    "nav.product": "Product",
    "nav.how": "How it works",
    "nav.contact": "Contact",
    "nav.cta": "Request a demo",
    "nav.menu": "Menu",
    "nav.escalamiento": "Product scaling",
    "nav.produccion": "Scientific output",
    "nav.proceso": "Design process",
    "hero.eyebrow": "Clinical support product",
    "hero.h1": 'Breathe better.<br>Measure every <span class="text-accent">gain</span>.',
    "hero.lead":
      "Incentive respiratory therapy, reinvented: engaging exercises at home and a cloud platform that quantifies each patient's performance.",
    "hero.cta1": "Get in touch",
    "hero.cta2": "How it works →",
    "hero.s1l": "volumes measured: inhaled and exhaled",
    "hero.s2l": "remote supervision, from home",
    "hero.s3l": "capabilities for the therapist",
    marq: "Respiratory therapy · Gamified incentive · Remote supervision · Cloud data · Ambulatory treatment · Pulmonary rehab",
    "video.kick": "Ubicu in action",
    "video.h2": "A videogame that teaches you to breathe.",
    "video.p":
      "See how patients do their breathing exercises at home while the therapist receives real-time data.",
    "video.label": "Product demo · 1:00",
    "video.play": "Play video",
    "intro.kick": "What is Ubicu",
    "intro.h2": 'Support for incentive <span class="hl">respiratory therapy</span>.',
    "intro.p":
      "UBICU lets patients do their breathing exercises in an engaging way — through a videogame — from the comfort of home, with remote supervision. For therapists, it provides a cloud platform to extend their service and gain quantitative insight into performance.",
    "intro.pt1": "Breathing exercises turned into a game",
    "intro.pt2": "Remote supervision, anytime",
    "intro.pt3": "Quantitative performance data",
    "intro.pt4": "A cloud platform for the clinic",
    "intro.iv": "Device + app + platform",
    "feat.kick": "Key features",
    "feat.h2": "With our incentive respiratory system you can:",
    "feat.p": "A complete toolkit to take respiratory therapy beyond the clinic.",
    "f1.t": "Prescribe remotely",
    "f1.d": "Therapy based on the patient's progress data.",
    "f2.t": "Measure",
    "f2.d": "Both inhaled and exhaled volume, every session.",
    "f3.t": "Present results",
    "f3.d": "Through our app that shows exercise performance.",
    "f4.t": "Ambulatory treatment",
    "f4.d": "Thanks to its portability, patients exercise at home.",
    "f5.t": "Evaluate performance",
    "f5.d": "Remotely, through our web application.",
    "f6.t": "Reach more patients",
    "f6.d": "Efficiently, with every tool for personalized treatment.",
    "how.kick": "How it works",
    "how.h2": "From prescription to progress, in four steps.",
    "how.p": "A simple flow connecting the patient at home with the therapist in the cloud.",
    "h1.t": "Prescribe",
    "h1.d": "The therapist sets the breathing plan from the cloud platform.",
    "h1.g": "Clinic",
    "h2.t": "Breathe & play",
    "h2.d": "The patient does the exercises at home with the videogame incentive.",
    "h2.g": "Home",
    "h3.t": "Measure",
    "h3.d": "The device captures inhaled and exhaled volume on every rep.",
    "h3.g": "Device",
    "h4.t": "Evaluate",
    "h4.d": "Data flows to the cloud and the therapist adjusts the treatment.",
    "h4.g": "Data",
    "cta.h2": "Bring respiratory therapy to more homes.",
    "cta.p":
      "Let's talk about how Ubicu can extend your pulmonary rehab service with data and remote supervision.",
    "cta.b1": "Get in touch",
    "cta.b2": "Watch the video",
    "spon.kick": "Backed by",
    "spon.role": "Sponsor",
    "col.esc.desc":
      'Ubicu presented across the different technology readiness levels (<a class="no-underline hover:underline text-navy" href="https://www.mincotur.gob.es/publicaciones/publicacionesperiodicas/economiaindustrial/revistaeconomiaindustrial/393/notas.pdf" target="_blank" rel="noopener">TRL</a>).',
    "col.esc.back": "← Back to product scaling",
    "col.prod.desc":
      "An overview of Ubicu's scientific, academic and informational resources.",
    "col.prod.back": "← Back to scientific output",
    "col.proc.desc": "An overview of Ubicu's design stages.",
    "col.proc.back": "← Back to design process",
    "f.blurb":
      "Support product for incentive respiratory therapy. Exercises from home, data in the cloud.",
    "f.col1": "Product",
    "f.col2": "Company",
    "f.l1": "How it works",
    "f.l2": "Features",
    "f.l3": "Demo",
    "f.l4": "About us",
    "f.l5": "Contact",
    "f.privacy": "Privacy Policy",
    "f.rights": "Ubicu. All rights reserved.",
    "f.location": "Cali, Colombia",
    "about.title": "About us",
    "about.desc": "Meet our team and the partners that make Ubicu possible.",
    "about.team": "Our team",
    "about.teamLead":
      "We are an interdisciplinary team tackling patient adherence to incentive respiratory therapy.",
    "about.partners": "Our partners",
    "contact.title": "Contact",
    "contact.desc": "Reach us through any of our channels.",
    "contact.h2": "Contact Ubicu",
    "contact.lead":
      "Have something to tell us? Fill out the form and we'll get your message, or write to us by email.",
    "form.name": "Full name",
    "form.email": "Email address",
    "form.message": "Your message",
    "form.send": "Send message",
    "form.errName": "Please enter your full name.",
    "form.errEmail": "Please enter your email address.",
    "form.errEmailValid": "Please enter a valid email address.",
    "form.errMsg": "Please enter your message.",
    "form.sending": "Sending...",
    "form.wrong": "Something went wrong.",
    "privacy.eyebrow": "Privacy",
    "privacy.title": "Privacy Policy",
    "privacy.desc":
      "How we collect, use and protect your personal data across the Ubicu website and mobile app. Last updated: June 18, 2026.",
    "notfound.title": "Page not found",
    "notfound.p": "The page you are looking for does not exist or was moved.",
    "notfound.back": "Back to home",
  },
} as const

export type UIKey = keyof (typeof ui)["es"]

/* Team/partner role labels live in collection frontmatter (Spanish).
   Map each distinct Spanish value to its English equivalent; unmapped
   values fall back to the original string. */
export const roleLabels: Record<string, string> = {
  Coinvestigador: "Co-investigator",
  "Desarollador de software": "Software developer",
  "Desarrollador de software": "Software developer",
  "Director del proyecto": "Project director",
  "Diseñador, Gerente de Prompack": "Designer, Prompack Manager",
  "Diseño Industrial": "Industrial Design",
  "Diseño Visual": "Visual Design",
  "Escalamiento del producto": "Product scaling",
  "Estudios clínicos": "Clinical studies",
  "Ingeniero de hardware y firmware": "Hardware & firmware engineer",
  Promotor: "Promoter",
}
