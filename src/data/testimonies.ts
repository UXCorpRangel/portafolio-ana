interface DataTestimonies {
  /**
   * URL of the company's logo image
   */
  companyLogoUrl: string

  /**
   * Name of the company providing the testimony
   */
  companyName: string

  /**
   * Full name of the person providing the testimony
   */
  personFullName: string

  /**
   * Job title or profession of the person providing the testimony
   */
  personJobTitle: string

  /**
   * Testimonial text provided by the person
   */
  testimonyText: string

  /**
   * URL to the full testimonial
   */
  fullTestimonyUrl: string
}
export const dataTestimonies: DataTestimonies[] = [
  {
    companyLogoUrl: '/assets/images/neoris_logo.jpg',
    companyName: 'Neoris',
    personFullName: 'Jesús Contreras',
    personJobTitle: 'UX Researcher',
    testimonyText:
      'Ana es una Product Designer dedicada y creativa, capaz de resolver problemas complejos de manera inspiradora. Su pasión y habilidad para fomentar la colaboración impactan positivamente en cualquier equipo. Recomiendo su talento a cualquier organización.',
    fullTestimonyUrl: ''
  },
  {
    companyLogoUrl: '/assets/images/bancoRipley_logo.webp',
    companyName: 'Banco Ripley',
    personFullName: 'Viviana de Toledo',
    personJobTitle: 'Lead UX I Researcher',
    testimonyText:
      'Trabajar con Ana fue un placer debido a su enfoque en los objetivos del negocio y su exhaustiva investigación previa al diseño. Destaca en presentaciones técnicas y es flexible para aceptar recomendaciones. Es una profesional excelente con habilidades en gestión de proyectos y trabajo en equipos multidisciplinarios.',
    fullTestimonyUrl: ''
  },
  {
    companyLogoUrl: '/assets/images/neoris_logo.jpg',
    companyName: 'Neoris',
    personFullName: 'Luís Felipe A. Amaral ',
    personJobTitle: 'UX Researcher',
    testimonyText:
      'Ana Rangel is an extremely talented individual with unparalleled operational and leadership skills. When it comes to operational work, she translates data collected in surveys and creates designs with absolute care both technically and emotionally. Her leadership skills include her charisma, her communicative and mediation skills that make her stand out.',
    fullTestimonyUrl: ''
  },
  {
    companyLogoUrl: '/assets/images/timining.webp',
    companyName: 'Timining',
    personFullName: 'Caro Retamal',
    personJobTitle: 'Sr. Product Manager',
    testimonyText:
      'Ana es proactiva, autodidacta y resolutiva. Fundamenta sus propuestas con investigación y no asume comportamientos de usuarios sin datos. Es colaborativa y tiene buenas aptitudes para el trabajo en equipo.',
    fullTestimonyUrl: ''
  }
]
