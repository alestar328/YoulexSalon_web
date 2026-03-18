import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, generateBreadcrumbSchema } from '@/lib/seo'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Servicios de Barbería y Belleza en Terrassa',
  description: 'Descubre todos los servicios de Youlex Salón en Terrassa: cortes masculinos, trenzas africanas, cejas con hilo, tratamientos capilares y limpieza facial. Profesionalidad y trato cercano.',
  alternates: {
    canonical: `${siteConfig.url}/servicios/`,
  },
}

const services = [
  {
    id: 'cortes-masculinos',
    image: '/img/services/cortes.jpg',
    title: 'Cortes masculinos',
    subtitle: 'El mejor barbero en Terrassa',
    description: 'En Youlex Salón somos especialistas en cortes masculinos. Dominamos tanto los estilos clásicos como las tendencias más actuales. Cada corte es único, adaptado a la forma de tu rostro, tu tipo de cabello y tu estilo personal.',
    features: [
      'Cortes clásicos y modernos',
      'Degradados y fade de precisión',
      'Arreglo de barba y bigote',
      'Diseños personalizados',
      'Asesoramiento de imagen',
    ],
  },
  {
    id: 'trenzas-africanas',
    image: '/img/services/trenzas.jpg',
    title: 'Trenzas africanas',
    subtitle: 'Trenzas femeninas en Terrassa',
    description: 'Nuestras trenzas africanas son un arte. Utilizamos técnicas tradicionales combinadas con estilos modernos para crear diseños únicos que resaltan tu belleza natural. Trabajamos con paciencia y dedicación para lograr resultados espectaculares.',
    features: [
      'Box braids',
      'Cornrows',
      'Twist',
      'Trenzas con extensiones',
      'Diseños personalizados',
    ],
  },
  {
    id: 'cejas-con-hilo',
    image: '/img/services/cejas.jpg',
    title: 'Cejas con hilo',
    subtitle: 'Técnica ancestral, resultados perfectos',
    description: 'La depilación de cejas con hilo es una técnica milenaria que ofrece resultados precisos y duraderos. En Youlex Salón dominamos esta técnica para darte unas cejas perfectamente definidas, respetando tu forma natural y realzando tu mirada.',
    features: [
      'Definición perfecta',
      'Técnica precisa y delicada',
      'Resultados duraderos',
      'Apto para pieles sensibles',
      'Diseño personalizado',
    ],
  },
  {
    id: 'tratamientos-capilares',
    image: '/img/services/capilar.jpg',
    title: 'Tratamientos capilares',
    subtitle: 'Cuida la salud de tu cabello',
    description: 'Ofrecemos tratamientos capilares profesionales para mantener tu cabello sano, fuerte y brillante. Analizamos las necesidades específicas de tu cabello y aplicamos tratamientos personalizados con productos de alta calidad.',
    features: [
      'Hidratación profunda',
      'Tratamientos anticaída',
      'Nutrición y reparación',
      'Tratamientos para cuero cabelludo',
      'Asesoramiento personalizado',
    ],
  },
  {
    id: 'limpieza-facial',
    image: '/img/services/facial.jpg',
    title: 'Limpieza facial',
    subtitle: 'Cuida tu piel con profesionales',
    description: 'Nuestra limpieza facial profunda elimina impurezas y células muertas, dejando tu piel limpia, fresca y rejuvenecida. Utilizamos productos de calidad y técnicas profesionales para cuidar tu rostro.',
    features: [
      'Limpieza profunda de poros',
      'Exfoliación profesional',
      'Hidratación facial',
      'Productos de alta calidad',
      'Tratamiento relajante',
    ],
  },
]

export default function ServiciosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Servicios', url: `${siteConfig.url}/servicios/` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28" style={{ backgroundImage: "url('/img/service_background.jpg')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container-width">
          <div className="max-w-3xl">
          <h1 className="heading-1 text-white">
              Servicios de barbería y belleza en Terrassa
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed">
              En Youlex Salón ofrecemos una amplia gama de servicios de barbería y belleza.
              Desde cortes masculinos hasta trenzas africanas, cuidamos cada detalle
              con profesionalidad y pasión.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-width">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-sm font-medium text-youlex-gray uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="heading-2 mb-6">{service.title}</h2>
                  <p className="body-text mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-youlex-black flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-youlex-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto/" className="btn-primary">
                    Reservar cita
                  </Link>
                </div>

                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-youlex-black text-white">
        <div className="container-width text-center">
          <h2 className="heading-2 text-white mb-6">
            ¿Quieres reservar tu cita?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
            Contacta con nosotros y reserva tu cita en Youlex Salón.
            Estamos en Terrassa, listos para cuidar tu imagen.
          </p>
          <Link
            href="/contacto/"
            className="inline-flex items-center justify-center bg-white text-youlex-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </>
  )
}
