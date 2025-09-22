import { 
  Wifi, 
  Lightbulb, 
  Thermometer, 
  Tv, 
  Car, 
  Utensils, 
  Coffee, 
  ShoppingCart, 
  MapPin, 
  UtensilsCrossed, 
  Waves,
  Building,
  Camera,
  TreePine,
  Fish,
  Fuel,
  Hospital,
  Phone,
  Truck,
  Clock,
  Cloud,
  LogIn,
  LogOut
} from 'lucide-react';

export const guestInfoData = {
  'depto-brava': {
    welcome: {
      title: '¡Bienvenido al Depto Brava!',
      subtitle: 'Toda la información que necesitas para disfrutar tu estadía'
    },
    wifi: {
      network: 'Brava_WiFi',
      password: 'MonteBrava2024',
      speed: 'Fibra óptica 100 Mbps'
    },
    appliances: [
      {
        icon: Tv,
        name: 'Smart TV Samsung',
        instructions: 'Control remoto en mesa de centro. Para Netflix, presiona el botón rojo del control.',
        tips: 'Cuenta con Netflix, YouTube y Amazon Prime incluidos'
      },
      {
        icon: Thermometer,
        name: 'Aire Acondicionado',
        instructions: 'Control en pared junto a la TV. Temperatura recomendada: 22-24°C',
        tips: 'Cierra puertas y ventanas para mejor eficiencia'
      },
      {
        icon: Coffee,
        name: 'Pava Eléctrica',
        instructions: 'En cocina, sobre mesada. Llenar con agua y presionar botón.',
        tips: 'Se apaga automáticamente cuando hierve el agua'
      },
      {
        icon: Utensils,
        name: 'Microondas',
        instructions: 'Sobre mesada de cocina. Potencia recomendada: 70% para recalentar.',
        tips: 'No usar recipientes metálicos'
      }
    ],
    inventory: {
      kitchen: [
        '4 Platos hondos',
        '4 Platos llanos', 
        '4 Vasos de vidrio',
        '4 Tazas',
        '4 Juegos de cubiertos',
        '1 Jarra de agua',
        '2 Sartenes',
        '1 Cacerola grande',
        '1 Cacerola mediana',
        'Tabla de cortar',
        'Cuchillos de cocina',
        'Abrelatas y sacacorchos'
      ],
      bedroom: [
        '1 Juego de sábanas extra',
        '2 Almohadas extra',
        '2 Toallas grandes',
        '2 Toallas pequeñas',
        '1 Frazada extra'
      ],
      general: [
        'Secador de pelo',
        'Plancha y tabla de planchar',
        'Aspiradora',
        'Escoba y trapo de piso',
        'Productos de limpieza básicos'
      ]
    },
    nearbyPlaces: [
      {
        icon: UtensilsCrossed,
        name: 'Parrilla La Costa',
        description: 'Excelentes parrilladas y mariscos frescos con vista al mar',
        distance: '3 cuadras',
        hours: '12:00 - 00:00'
      },
      {
        icon: ShoppingCart,
        name: 'Supermercado Día',
        description: 'Supermercado completo para todas tus compras',
        distance: '5 cuadras',
        hours: '8:00 - 22:00'
      },
      {
        icon: Coffee,
        name: 'Café del Puerto',
        description: 'Cafetería con excelentes desayunos y vista al puerto',
        distance: '4 cuadras',
        hours: '7:00 - 20:00'
      },
      {
        icon: Camera,
        name: 'Faro Monte Hermoso',
        description: 'Icónico faro con vistas panorámicas, ideal para fotos',
        distance: '10 cuadras',
        hours: '9:00 - 18:00'
      },
      {
        icon: Waves,
        name: 'Playa Central',
        description: 'Playa principal con todos los servicios y actividades',
        distance: '1 cuadra',
        hours: '24 horas'
      },
      {
        icon: Fuel,
        name: 'Estación de Servicio YPF',
        description: 'Combustible y shop las 24 horas',
        distance: '6 cuadras',
        hours: '24 horas'
      }
    ],
    deliveryRestaurants: [
      {
        icon: UtensilsCrossed,
        name: 'Pizza Express Monte Hermoso',
        description: 'Pizzas, empanadas y comida rápida',
        phone: '(0291) 648-1234',
        whatsapp: '5492916481234',
        hours: '19:00 - 00:00',
        speciality: 'Pizzas a la parrilla'
      },
      {
        icon: Truck,
        name: 'Mariscos del Puerto',
        description: 'Pescados, mariscos y parrilladas',
        phone: '(0291) 648-5678',
        whatsapp: '5492916485678',
        hours: '12:00 - 15:00, 20:00 - 24:00',
        speciality: 'Pescado fresco del día'
      },
      {
        icon: Coffee,
        name: 'Hamburguesería del Faro',
        description: 'Hamburguesas gourmet, papas y bebidas',
        phone: '(0291) 648-9999',
        whatsapp: '5492916489999',
        hours: '18:00 - 02:00',
        speciality: 'Hamburguesas artesanales'
      }
    ],
    checkInOut: {
      checkIn: {
        time: '15:00',
        procedure: [
          'Llegada partir de las 15:00 hs',
          'Contactar a Valeria 30 min antes',
          'Recibimiento en el departamento',
          'Entrega de llaves y explicación',
          'Tour rápido de instalaciones'
        ]
      },
      checkOut: {
        time: '11:00',
        procedure: [
          'Salida hasta las 11:00 hs',
          'Dejar llaves en mesa de entrada',
          'Reportar cualquier problema',
          'Check-out flexible disponible (consultar)',
          'Contactar a Valeria al partir'
        ]
      },
      earlyCheckIn: 'Disponible desde las 12:00 (sujeto a disponibilidad)',
      lateCheckOut: 'Hasta las 14:00 con cargo adicional'
    },
    contacts: [
      {
        name: 'Valeria (Anfitrión)',
        phone: '+5492916480599',
        whatsapp: '5492916480599',
        description: 'Para cualquier consulta sobre el departamento'
      },
      {
        name: 'Emergencias Médicas',
        phone: '107',
        emergencyOnly: true,
        description: 'Ambulancia y emergencias médicas'
      },
      {
        name: 'Policía',
        phone: '911',
        emergencyOnly: true,
        description: 'Emergencias policiales'
      },
      {
        name: 'Hospital Municipal',
        phone: '+54291648-2180',
        description: 'Hospital más cercano'
      }
    ],
    quickAccess: [
      {
        icon: Wifi,
        title: 'WiFi',
        subtitle: 'Ver contraseña',
        onClick: () => alert('Red: Brava_WiFi\\nContraseña: MonteBrava2024')
      },
      {
        icon: Phone,
        title: 'Contacto',
        subtitle: 'WhatsApp anfitrión',
        onClick: () => {
          window.open(`https://api.whatsapp.com/send?phone=5492916480599`, '_blank');
        }
      },
      {
        icon: MapPin,
        title: 'Ubicación',
        subtitle: 'Ver en mapa',
        onClick: () => window.open('https://goo.gl/maps/xyz', '_blank')
      },
      {
        icon: Lightbulb,
        title: 'Emergencia',
        subtitle: 'Números útiles',
        onClick: () => alert('Emergencias:\\n• Ambulancia: 107\\n• Policía: 911\\n• Hospital: (0291) 648-2180')
      }
    ]
  },
  'depto-agreste-ii': {
    welcome: {
      title: '¡Bienvenido al Depto Agreste II!',
      subtitle: 'Toda la información que necesitas para disfrutar tu estadía'
    },
    wifi: {
      network: 'Agreste_WiFi',
      password: 'MonteAgreste2024',
      speed: 'Fibra óptica 100 Mbps'
    },
    appliances: [
      {
        icon: Tv,
        name: 'Smart TV LG',
        instructions: 'Control remoto en mesa de centro. Para streaming, usa las apps preinstaladas.',
        tips: 'Cuenta con Netflix, YouTube y Disney+ incluidos'
      },
      {
        icon: Thermometer,
        name: 'Aire Acondicionado Split',
        instructions: 'Control remoto en dormitorio. Modo recomendado: AUTO a 23°C',
        tips: 'Ventilador de techo disponible como alternativa'
      },
      {
        icon: Coffee,
        name: 'Cafetera Nespresso',
        instructions: 'En cocina, junto a la ventana. Cápsulas disponibles en alacena.',
        tips: 'Prende el botón y espera que la luz se ponga fija'
      },
      {
        icon: Utensils,
        name: 'Horno Eléctrico',
        instructions: 'Perilla de temperatura y tiempo. Precalentar 10 minutos.',
        tips: 'Ideal para pizzas y tartas. Bandeja incluida'
      }
    ],
    inventory: {
      kitchen: [
        '4 Platos hondos',
        '4 Platos llanos',
        '4 Platos de postre',
        '4 Vasos de vidrio',
        '4 Copas de vino',
        '4 Tazas de café',
        '4 Juegos de cubiertos',
        '1 Jarra de agua grande',
        '1 Jarra pequeña',
        '2 Sartenes antiadherentes',
        '1 Cacerola grande',
        '2 Cacerolas medianas',
        'Tabla de cortar madera',
        'Set completo de cuchillos',
        'Batidora de mano',
        'Tostadora'
      ],
      bedroom: [
        '2 Juegos de sábanas extra',
        '4 Almohadas extra',
        '4 Toallas grandes',
        '4 Toallas pequeñas',
        '2 Frazadas extra',
        'Edredón extra'
      ],
      general: [
        'Secador de pelo profesional',
        'Plancha a vapor',
        'Tabla de planchar',
        'Aspiradora',
        'Escoba y trapo de piso',
        'Productos de limpieza completos',
        'Sillas de playa (2)',
        'Sombrilla de playa'
      ]
    },
    nearbyPlaces: [
      {
        icon: UtensilsCrossed,
        name: 'Restaurante Puerto Nuevo',
        description: 'Especialidad en mariscos y pescados frescos del día',
        distance: '2 cuadras',
        hours: '12:00 - 15:00, 20:00 - 24:00'
      },
      {
        icon: ShoppingCart,
        name: 'Carrefour Express',
        description: 'Supermercado con amplia variedad y productos gourmet',
        distance: '4 cuadras',
        hours: '8:00 - 23:00'
      },
      {
        icon: Coffee,
        name: 'Havanna Café',
        description: 'Famosa cadena argentina de café y alfajores',
        distance: '3 cuadras',
        hours: '8:00 - 22:00'
      },
      {
        icon: TreePine,
        name: 'Reserva Natural Pehuen-Có',
        description: 'Área protegida con senderos y avistaje de fauna',
        distance: '15 min en auto',
        hours: '9:00 - 18:00'
      },
      {
        icon: Fish,
        name: 'Muelle de Pescadores',
        description: 'Puerto pesquero donde llegan los barcos con pescado fresco',
        distance: '8 cuadras',
        hours: '6:00 - 18:00'
      },
      {
        icon: Building,
        name: 'Casino Club Hotel',
        description: 'Casino, espectáculos y gastronomía',
        distance: '6 cuadras',
        hours: '18:00 - 04:00'
      }
    ],
    deliveryRestaurants: [
      {
        icon: UtensilsCrossed,
        name: 'Pizza Express Monte Hermoso',
        description: 'Pizzas, empanadas y comida rápida',
        phone: '(0291) 648-1234',
        whatsapp: '5492916481234',
        hours: '19:00 - 00:00',
        speciality: 'Pizzas a la parrilla'
      },
      {
        icon: Truck,
        name: 'Mariscos del Puerto',
        description: 'Pescados, mariscos y parrilladas',
        phone: '(0291) 648-5678',
        whatsapp: '5492916485678',
        hours: '12:00 - 15:00, 20:00 - 24:00',
        speciality: 'Pescado fresco del día'
      },
      {
        icon: Coffee,
        name: 'Hamburguesería del Faro',
        description: 'Hamburguesas gourmet, papas y bebidas',
        phone: '(0291) 648-9999',
        whatsapp: '5492916489999',
        hours: '18:00 - 02:00',
        speciality: 'Hamburguesas artesanales'
      }
    ],
    checkInOut: {
      checkIn: {
        time: '15:00',
        procedure: [
          'Llegada partir de las 15:00 hs',
          'Contactar a Valeria 30 min antes',
          'Recibimiento en el departamento',
          'Entrega de llaves y explicación',
          'Tour rápido de instalaciones',
          'Explicación del portón automático'
        ]
      },
      checkOut: {
        time: '11:00',
        procedure: [
          'Salida hasta las 11:00 hs',
          'Dejar llaves en mesa de entrada',
          'Dejar control de cochera',
          'Reportar cualquier problema',
          'Check-out flexible disponible (consultar)',
          'Contactar a Valeria al partir'
        ]
      },
      earlyCheckIn: 'Disponible desde las 12:00 (sujeto a disponibilidad)',
      lateCheckOut: 'Hasta las 14:00 con cargo adicional'
    },
    contacts: [
      {
        name: 'Valeria (Anfitrión)',
        phone: '+5492916480599',
        whatsapp: '5492916480599',
        description: 'Para cualquier consulta sobre el departamento'
      },
      {
        name: 'Emergencias Médicas',
        phone: '107',
        emergencyOnly: true,
        description: 'Ambulancia y emergencias médicas'
      },
      {
        name: 'Policía',
        phone: '911',
        emergencyOnly: true,
        description: 'Emergencias policiales'
      },
      {
        name: 'Hospital Municipal',
        phone: '+54291648-2180',
        description: 'Hospital más cercano'
      }
    ],
    quickAccess: [
      {
        icon: Wifi,
        title: 'WiFi',
        subtitle: 'Ver contraseña',
        onClick: () => alert('Red: Agreste_WiFi\\nContraseña: MonteAgreste2024')
      },
      {
        icon: Phone,
        title: 'Contacto',
        subtitle: 'WhatsApp anfitrión', 
        onClick: () => {
          window.open(`https://api.whatsapp.com/send?phone=5492916480599`, '_blank');
        }
      },
      {
        icon: Car,
        title: 'Cochera',
        subtitle: 'Acceso privado',
        onClick: () => alert('Cochera privada incluida.\\nPortón automático - Control en el depto.')
      },
      {
        icon: Lightbulb,
        title: 'Emergencia',
        subtitle: 'Números útiles',
        onClick: () => alert('Emergencias:\\n• Ambulancia: 107\\n• Policía: 911\\n• Hospital: (0291) 648-2180')
      }
    ]
  }
};