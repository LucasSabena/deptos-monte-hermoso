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
      password: 'MonteAgreste2024'
    },
    appliances: [
      {
        icon: Utensils,
        name: 'Horno y Anafe Eléctrico',
        instructions: 'Horno y anafe eléctrico disponibles en cocina.',
        tips: 'Ideal para cocinar todo tipo de comidas'
      },
      {
        icon: Coffee,
        name: 'Lavarropas',
        instructions: 'En el baño. Usar detergente líquido recomendado.',
        tips: 'Programa delicado para ropa fina, normal para ropa de diario'
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
    shoppingPlaces: [
      {
        icon: ShoppingCart,
        name: 'La Cooperativa Obrera - Avenida Principal',
        description: 'Supermercado cooperativo con productos locales',
        url: 'https://maps.app.goo.gl/EWnejggCP3n2dACo7',
        hours: '8:00 - 22:00'
      },
      {
        icon: ShoppingCart,
        name: 'La Cooperativa Obrera - Centro',
        description: 'Sucursal céntrica de la cooperativa',
        url: 'https://maps.app.goo.gl/MxZTKe8bSxVyRZAe6',
        hours: '8:00 - 22:00'
      },
      {
        icon: ShoppingCart,
        name: 'El Rosarino III',
        description: 'Supermercado familiar con productos regionales',
        url: 'https://maps.app.goo.gl/rEB12KJhvnF7e2b1A',
        hours: '8:00 - 21:00'
      },
      {
        icon: ShoppingCart,
        name: 'La Ilusión',
        description: 'Almacén y provisiones generales',
        url: 'https://maps.app.goo.gl/b6BH6vX7uKq7yYEo6',
        hours: '7:00 - 20:00'
      }
    ],
    diningPlaces: [
      {
        icon: UtensilsCrossed,
        name: 'Parador Ex Espigón de Pesca y Embarcadero',
        description: 'Restaurante con vista al mar (por cercanía)',
        hours: '12:00 - 24:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Parador Bronx Beer Station',
        description: 'Parador cervecero con comidas (por cercanía)',
        hours: '18:00 - 02:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Parador La Vieja Mostro',
        description: 'Parador tradicional (por cercanía)',
        hours: '12:00 - 24:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Restaurante La Estación',
        description: 'Restaurante temático ferroviario',
        hours: '12:00 - 15:00, 20:00 - 24:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Restaurante Medio Mundo',
        description: 'Cocina internacional y local',
        hours: '19:00 - 01:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Restaurante La Alemana',
        description: 'Especialidad en cocina alemana',
        hours: '20:00 - 24:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Restaurante Bigua',
        description: 'Mariscos y pescados frescos',
        hours: '12:00 - 15:00, 20:00 - 24:00'
      },
      {
        icon: UtensilsCrossed,
        name: 'Parador Lupita',
        description: 'Parador costero (por cercanía)',
        hours: '11:00 - 23:00'
      },
    ],
    deliveryRestaurants: [
      {
        icon: Truck,
        name: 'Faster Delivery',
        description: 'App de delivery con múltiples opciones',
        phone: '',
        whatsapp: '',
        hours: 'Varía según restaurante',
        speciality: 'Plataforma de delivery',
        url: 'https://fasterdelivery.com.ar/'
      },
      {
        icon: UtensilsCrossed,
        name: 'Monchito',
        description: 'Rotiseria, empanadas, pizza, bebidas y más',
        phone: '',
        whatsapp: '',
        hours: 'Consultar disponibilidad',
        speciality: 'Comida casera y rotiseria'
      },
      {
        icon: UtensilsCrossed,
        name: 'Planeta Empanadas Monte Hermoso',
        description: 'Empanadas y pizza',
        phone: '',
        whatsapp: '',
        hours: 'Consultar disponibilidad',
        speciality: 'Empanadas artesanales'
      }
    ],
    checkInOut: {
      checkIn: {
        time: '15:00',
        procedure: [
          'Llegada partir de las 15:00 hs',
          'Llave en caja de seguridad'
        ]
      },
      checkOut: {
        time: '11:00',
        procedure: [
          'Salida hasta las 11:00 hs'
        ]
      }
    },
    contacts: [
      {
        name: 'Valeria (Anfitrión)',
        phone: '+5492916480599',
        whatsapp: '5492916480599',
        description: 'Para cualquier consulta sobre el departamento'
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
        onClick: () => alert('Cochera al frente, la segunda de derecha a izquierda, PA2')
      }
    ]
  }
};