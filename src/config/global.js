export default {
  global: {
    componenteFormativo: 'Mercados financieros y destinación del efectivo',
    descripcionCurso:
      'Las estrategias financieras pertinentes y bien estructuradas, que garanticen la consecución de fuentes de ingresos, representan herramientas fundamentales para el funcionamiento de las empresas puesto que estas sustentarán la marcha continua de sus operaciones, además de permitir a las organizaciones crear políticas de gasto e inversión que hagan más eficiente el uso del efectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Activos y pasivos financieros',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fuentes y usos del efectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Inversión',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Financiación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mercados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Monetario',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mercado de capitales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Mercado de derivados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Indicadores bursátiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de indicadores bursátiles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos de cálculo de índices bursátiles',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_06_123500.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Activos y pasivos financieros',
      referencia:
        'AulaDeEconomia. (2022). Activos financieros - rentabilidad, riesgo y liquidez [video]. Youtube. https://www.youtube.com/watch?v=Dcbgadkrehw',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Dcbgadkrehw',
    },
    {
      tema: '3. Mercados financieros',
      referencia:
        'EALDE Business School. (marzo 5, 2018). Análisis del Riesgo de Crédito y de Mercado en los Instrumentos Financieros [video]. Youtube. https://www.youtube.com/watch?v=_q9UcSkbjh0&t=3s',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_q9UcSkbjh0&t=3s',
    },
    {
      tema: '3. Mercados financieros',
      referencia:
        'Pérez Fernández, R. T. (2010). Teoría y práctica de la bolsa: todo lo que debe saber el inversor sobre los mercados financieros. Madrid [España]: Diaz De Santos.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000066171',
    },
  ],
  glosario: [
    {
      termino: '<em>Benchmark</em>',
      significado:
        'Punto de referencia utilizado para medir el rendimiento de una inversión.',
    },
    {
      termino: 'Cupón',
      significado:
        'Tipo de interés que debe pagar el emisor y es expresado como un porcentaje del principal.',
    },
    {
      termino: 'Emisor',
      significado:
        'Entidad pública o privada que emite la deuda, es decir, los títulos. Es la entidad que pide la deuda. (ZonaValue.com, 2019)',
    },
    {
      termino: 'Fecha de vencimiento',
      significado:
        'Momento en el que el emisor debe devolver el dinero, momento en que termina el préstamo. (ZonaValue.com, 2019)',
    },
    {
      termino: 'Principal o nominal del bono',
      significado:
        'Cantidad de dinero que pide prestado el emisor, correspondiente a cada título. (ZonaValue.com, 2019)',
    },
  ],
  referencias: [
    {
      referencia: 'ING. (2021). ¿Cómo se miden los índices bursátiles?',
      link:
        'https://www.ing.es/ennaranja/invertir-dinero/conceptos-utiles/indices-bursatiles-como-se-miden/#',
    },
    {
      referencia: 'ZonaValue.com. (2019). Argentina, invertir en renta fija.',
      link:
        'https://stagingclon.zonavalue.com/blog/nivel-principiante/argentina-invertir-en-renta-fija',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jair Yovanny Castro Morales',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseño y evaluación instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría Metodológica',
          centro: 'Regional Distrito Capital, Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Guiza',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
