// FIX: Export 'departments' directly to be used as an ES module, instead of attaching it to the window object.
export const departments = [
  {
    id: 'depto-brava',
    name: 'Brava',
    tagline: 'Confort, tranquilidad a pasos del mar',
    capacity: 4,
    features: ['2 Ambientes', 'A pasos del mar', 'Parrilla'],
    mainImage: 'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-4_vu5gqy.jpg',
    photoCategories: [
      {
        category: 'Pileta',
        photos: ['https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-4_vu5gqy.jpg']
      },
      {
        category: 'Ingreso y Cochera',
        photos: ['https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-15_aooogc.jpg']
      },
      {
        category: 'Cocina y Comedor',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487775/Brava-7_rbbtsb.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487779/Brava-8_evzxhp.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-1_dzoyw9.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-6_qy2ptl.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-12_aozuj0.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-5_hluprm.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-11_l5cfuf.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-2_d2acj0.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-0_dox87i.jpg'
        ]
      },
      {
        category: 'Dormitorio',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-3_xsury0.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487779/Brava-9_occhts.jpg'
        ]
      },
      {
        category: 'Baño',
        photos: ['https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-13_wffq0r.jpg']
      },
      {
        category: 'Lavarropas',
        photos: ['https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487778/Brava-14_uplae7.jpg']
      },
      {
        category: 'Parrilla',
        photos: ['https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-10_h85uwt.jpg']
      }
    ],
    // Mantener gallery para compatibilidad con formato anterior
    gallery: [
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-15_aooogc.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487775/Brava-7_rbbtsb.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-1_dzoyw9.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487779/Brava-8_evzxhp.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-12_aozuj0.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-6_qy2ptl.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-5_hluprm.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487777/Brava-11_l5cfuf.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-2_d2acj0.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-0_dox87i.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-3_xsury0.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487779/Brava-9_occhts.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487780/Brava-13_wffq0r.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487778/Brava-14_uplae7.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487776/Brava-10_h85uwt.jpg'
    ],
    videos: [],
    amenities: [
      { icon: 'Wifi', text: 'Wi-Fi' },
      { icon: 'BedDouble', text: 'Cama matrimonial' },
      { icon: 'Sofa', text: 'Sofá cama para 2 personas' },
      { icon: 'Tv', text: 'Smart TV con cable' },
      { icon: 'Wind', text: 'Aire acondicionado' },
      { icon: 'CookingPot', text: 'Cocina equipada' },
      { icon: 'Car', text: 'Cochera semi cubierta' },
      { icon: 'Grill', text: 'Parrilla en el depto.' },
      { icon: 'WavesLadder', text: 'Pileta' },
      { icon: 'Washing', text: 'Lavarropas' }
    ],
    location: {
        lat: -38.9902,
        lng: -61.2855,
        address: 'Juan Manuel de Rosas 142B8153 Monte Hermoso, Provincia de Buenos Aires',
        embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1709324860035!2d-61.3178429!3d-38.988060999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958d52b04c6c5fc5%3A0x3bd8ed709f13b11b!2sJuan%20Manuel%20de%20Rosas%20142%2C%20B8153%20Monte%20Hermoso%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1758490717505!5m2!1ses-419!2sar'
    }
  },
  {
    id: 'depto-agreste-ii',
    name: 'Agreste II',
    tagline: 'Tranquilidad y privacidad a metros del mar',
    capacity: 4,
    features: ['2 Ambientes', 'Salida directa al mar', 'Cochera privada'],
    mainImage: 'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-0_w5vmwe.jpg',
    photoCategories: [
      {
        category: 'Cochera e Ingreso',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-17_vvbujt.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-11_g027q5.jpg'
        ]
      },
      {
        category: 'Pileta',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-5_en3ewa.jpg'
        ]
      },
      {
        category: 'Parrilla y Balcón',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-12_xykmpx.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-6_awkxxa.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-18_t2kbvh.jpg'
        ]
      },
      {
        category: 'Cocina y Comedor',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-8_kxpkur.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-2_tizbf7.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-9_qcmwkm.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-14_pntafp.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-13_giwzai.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-0_w5vmwe.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-1_gezs5r.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-7_ncxrr3.jpg'
        ]
      },
      {
        category: 'Pasillo',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-15_v02o3c.jpg'
        ]
      },
      {
        category: 'Baño',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-3_i02gui.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-10_cxmyp7.jpg'
        ]
      },
      {
        category: 'Pieza',
        photos: [
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-16_yvusjy.jpg',
          'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-4_sdqb5t.jpg'
        ]
      }
    ],
    // Mantener gallery para compatibilidad
    gallery: [
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-1_gezs5r.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-3_i02gui.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-2_tizbf7.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-4_sdqb5t.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-5_en3ewa.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-12_xykmpx.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487767/AgresteII-9_qcmwkm.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-6_awkxxa.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-14_pntafp.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-10_cxmyp7.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-13_giwzai.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-18_t2kbvh.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487766/AgresteII-8_kxpkur.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-11_g027q5.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-17_vvbujt.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-7_ncxrr3.jpg',
      'https://res.cloudinary.com/dzey3hyfq/image/upload/v1758487765/AgresteII-15_v02o3c.jpg'
    ],
    videos: [
        'https://res.cloudinary.com/dzey3hyfq/video/upload/v1758488178/Agreste_videos_tilnou.mp4'
    ],
    amenities: [
      { icon: 'Wifi', text: 'Wi-Fi' },
      { icon: 'BedDouble', text: 'Cama matrimonial' },
      { icon: 'Sofa', text: 'Sofá cama para 2 personas' },
      { icon: 'Tv', text: 'Smart TV con cable' },
      { icon: 'Wind', text: 'Aire acondicionado' },
      { icon: 'CookingPot', text: 'Cocina equipada' },
      { icon: 'Car', text: 'Cochera semi cubierta' },
      { icon: 'Grill', text: 'Parrilla en el depto.' },
      { icon: 'WavesLadder', text: 'Pileta' },
      { icon: 'Washing', text: 'Lavarropas' }
    ],
    location: {
        lat: -38.9855,
        lng: -61.2951,
        address: 'Río Iguazú 104B8153 Monte Hermoso, Provincia de Buenos Aires',
        embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1921416000278!2d-61.3118135!3d-38.987607600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958d52bb2df0fb85%3A0xe26ab7b075e52c10!2sR%C3%ADo%20Iguaz%C3%BA%20104%2C%20B8153%20Monte%20Hermoso%2C%20Provincia%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1758490740388!5m2!1ses-419!2sar'
    }
  },
];
