import { Metadata } from 'next'

export const siteConfig = {
  name: 'Youlex Salón',
  description: 'Barbería y salón de belleza en Terrassa. Especialistas en cortes masculinos, trenzas africanas, cejas con hilo y tratamientos capilares. Trato cercano y profesional.',
  url: 'https://youlexsalon.com',
  phone: '+34 627 174 137',
  whatsapp: '34XXXXXXXXX',
  address: {
    street: 'Carrer del Moixeró, 6',
    city: 'Terrassa',
    region: 'Barcelona',
    postalCode: '08221',
    country: 'ES',
  },
  hours: {
    weekdays: '10:00 - 20:00',
    saturday: '10:00 - 14:00',
    sunday: 'Cerrado',
  },
  social: {
    instagram: 'https://www.instagram.com/youlex_salon/',
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Barbería y Salón de Belleza en Terrassa`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'barbería en Terrassa',
    'barbero en Terrassa',
    'cortes masculinos Terrassa',
    'trenzas africanas Terrassa',
    'cejas con hilo Terrassa',
    'salón de belleza Terrassa',
    'peluquería Terrassa',
    'tratamientos capilares Terrassa',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Barbería y Salón de Belleza en Terrassa`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Barbería y Salón de Belleza en Terrassa`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['BarberShop', 'BeautySalon'],
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5630,
      longitude: 2.0089,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    priceRange: '€€',
    image: `${siteConfig.url}/images/youlex-salon.jpg`,
    sameAs: [siteConfig.social.instagram],
    areaServed: {
      '@type': 'City',
      name: 'Terrassa',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Barcelona',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de barbería y belleza',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cortes masculinos',
            description: 'Cortes de pelo masculinos profesionales con técnicas modernas y clásicas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trenzas africanas',
            description: 'Trenzas africanas femeninas con técnicas tradicionales y estilos modernos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cejas con hilo',
            description: 'Depilación de cejas con técnica de hilo para un acabado perfecto',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tratamientos capilares',
            description: 'Tratamientos profesionales para el cuidado y salud del cabello',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Limpieza facial',
            description: 'Limpieza facial profunda para una piel sana y cuidada',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
