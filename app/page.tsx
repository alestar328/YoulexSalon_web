import Link from 'next/link'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Barbería y Salón de Belleza en Terrassa | Youlex Salón',
  description: 'Youlex Salón es tu barbería y salón de belleza de confianza en Terrassa. Especialistas en cortes masculinos, trenzas africanas, cejas con hilo y tratamientos capilares. Trato cercano y profesional.',
  alternates: {
    canonical: siteConfig.url,
  },
}

const services = [
  {
    title: 'Cortes masculinos',
    description: 'Cortes clásicos y modernos con la máxima precisión. Cada corte adaptado a tu estilo personal.',
  },
  {
    title: 'Trenzas africanas',
    description: 'Trenzas femeninas con técnicas tradicionales. Diseños únicos que resaltan tu belleza natural.',
  },
  {
    title: 'Cejas con hilo',
    description: 'Técnica ancestral para unas cejas perfectamente definidas. Resultados precisos y duraderos.',
  },
  {
    title: 'Tratamientos capilares',
    description: 'Cuidados profesionales para la salud de tu cabello. Tratamientos personalizados para cada necesidad.',
  },
]

const testimonials = [
  {
    text: 'El mejor barbero de Terrassa. Llevo años viniendo y siempre salgo encantado. Trato familiar y profesionalidad.',
    author: 'Carlos M.',
  },
  {
    text: 'Las trenzas quedan espectaculares. Muy profesional y con mucha paciencia. Totalmente recomendado.',
    author: 'Aminata K.',
  },
  {
    text: 'Excelente servicio de cejas con hilo. El resultado es perfecto y el trato muy cercano.',
    author: 'Laura G.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/hero_background.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container-width">
            <div className="py-24 md:py-32 lg:py-40">
                  <div className="max-w-3xl">
                    <h1 className="heading-1 text-balance text-white">
                      Tu barbería y salón de belleza en{' '}
                      <span className="text-neutral-200">Terrassa</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-100 leading-relaxed max-w-2xl">                
                      En Youlex Salón combinamos profesionalidad con trato cercano.
                      Especialistas en cortes masculinos, trenzas africanas y cejas con hilo.
                      Tu imagen, nuestra pasión.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <Link href="/contacto/" className="btn-primary">
                        Reservar cita
                      </Link>
                      <Link href="/servicios/" className="btn-secondary text-white">
                        Ver servicios
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2">Por qué elegirnos</h2>
            <p className="mt-4 body-text">
              En Youlex Salón no solo cuidamos tu imagen, creamos experiencias.
              Nuestro compromiso es hacerte sentir como en casa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-youlex-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Profesionalidad</h3>
              <p className="body-text">
                Técnicas depuradas y formación continua para ofrecerte siempre el mejor resultado.
                Somos especialistas en lo que hacemos.
              </p>
            </article>
            <article className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-youlex-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Trato cercano</h3>
              <p className="body-text">
                Aquí eres más que un cliente. Te escuchamos, te aconsejamos y
                creamos un ambiente familiar donde te sientas cómodo.
              </p>
            </article>
            <article className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-youlex-black">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Excelentes valoraciones</h3>
              <p className="body-text">
                Nuestros clientes nos avalan. Más de 150 reseñas positivas en Google
                reflejan nuestro compromiso con la calidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-neutral-900">
         <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-white">Nuestros servicios</h2>
            <p className="mt-4 body-text text-neutral-300">
              Desde cortes masculinos hasta trenzas africanas, ofrecemos una amplia gama
              de servicios de barbería y belleza en Terrassa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="heading-3 mb-4">{service.title}</h3>
                <p className="body-text">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
          <Link href="/servicios/" className="btn-primary bg-white text-black hover:bg-neutral-200">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2">Lo que dicen nuestros clientes</h2>
            <p className="mt-4 body-text">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
              Descubre por qué nos eligen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="p-8 border border-neutral-200"
              >
                <svg className="w-10 h-10 text-neutral-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="body-text mb-6 italic">"{testimonial.text}"</p>
                <p className="font-medium text-youlex-black">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-youlex-black text-white">
        <div className="container-width text-center">
          <h2 className="heading-2 text-white mb-6">
            ¿Listo para tu próximo cambio de look?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
            Visítanos en Youlex Salón, tu barbería de confianza en Terrassa.
            Te esperamos para cuidar tu imagen con profesionalidad y cariño.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center bg-white text-youlex-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Reservar cita
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-youlex-black transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
