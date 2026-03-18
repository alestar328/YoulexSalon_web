import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, generateBreadcrumbSchema } from '@/lib/seo'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre Youlex | Nuestra Historia',
  description: 'Conoce la historia de Youlex Salón, tu barbería y salón de belleza de confianza en Terrassa. Descubre nuestra filosofía, valores y compromiso con la excelencia.',
  alternates: {
    canonical: `${siteConfig.url}/sobre-youlex/`,
  },
}

const values = [
  {
    title: 'Profesionalidad',
    description: 'Cada servicio que ofrecemos está respaldado por años de experiencia y formación continua. Nos mantenemos actualizados con las últimas técnicas y tendencias.',
  },
  {
    title: 'Trato humano',
    description: 'Para nosotros, cada cliente es único. Escuchamos tus necesidades, entendemos tus gustos y creamos un ambiente donde te sientas como en casa.',
  },
  {
    title: 'Compromiso',
    description: 'Nos comprometemos con tu satisfacción. No descansamos hasta que salgas del salón sintiéndote mejor que cuando entraste.',
  },
  {
    title: 'Cercanía',
    description: 'Más que un salón, somos una familia. Aquí encontrarás un espacio de confianza donde podrás relajarte y disfrutar del cuidado de tu imagen.',
  },
]

export default function SobreYoulexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Sobre Youlex', url: `${siteConfig.url}/sobre-youlex/` },
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
      <section className="bg-youlex-light py-20 md:py-28">
        <div className="container-width">
          <div className="max-w-3xl">
            <h1 className="heading-1">
              Conoce Youlex Salón
            </h1>
            <p className="mt-6 text-lg md:text-xl text-youlex-gray leading-relaxed">
              Más que un salón de belleza, somos un espacio donde la profesionalidad
              se encuentra con el trato humano. Descubre nuestra historia y filosofía.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="heading-2 mb-6">Nuestra historia</h2>
              <div className="space-y-6 body-text">
                <p>
                  Youlex Salón nació de una pasión profunda por el cuidado personal
                  y la belleza. Ubicados en el corazón de Terrassa, hemos construido
                  un espacio donde cada cliente encuentra no solo servicios de calidad,
                  sino también un ambiente familiar y acogedor.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a perfeccionar nuestras
                  técnicas y a mantenernos a la vanguardia de las tendencias en barbería
                  y belleza. Ya sea un corte masculino clásico, unas elaboradas trenzas
                  africanas o una depilación de cejas con hilo, ponemos el mismo nivel
                  de dedicación y profesionalidad.
                </p>
                <p>
                  Lo que nos distingue no es solo nuestra habilidad técnica, sino
                  nuestra forma de tratar a las personas. Creemos que cada visita
                  debe ser una experiencia positiva, donde te sientas escuchado,
                  valorado y cuidado.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/img/profile.jpg"
                alt="Youlex Salón Terrassa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-youlex-light">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">Nuestra filosofía</h2>
            <p className="body-text text-lg">
              En Youlex Salón creemos que el cuidado personal va más allá de
              la estética. Se trata de cómo te hace sentir. Por eso, combinamos
              técnicas profesionales con un ambiente donde cada cliente se
              siente especial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <article key={index} className="bg-white p-8 md:p-10">
                <h3 className="heading-3 mb-4">{value.title}</h3>
                <p className="body-text">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <h2 className="heading-2 mb-6">Un equipo apasionado</h2>
              <div className="space-y-6 body-text">
                <p>
                  Detrás de Youlex Salón hay un equipo de profesionales
                  apasionados por su trabajo. Cada miembro aporta su experiencia
                  y dedicación para ofrecerte el mejor servicio posible.
                </p>
                <p>
                  Nos formamos constantemente para estar al día con las últimas
                  técnicas y tendencias. Pero más importante aún, nos esforzamos
                  por crear conexiones genuinas con nuestros clientes.
                </p>
                <p>
                  Cuando visitas Youlex Salón, no eres un número más.
                  Eres parte de nuestra familia, y te tratamos como tal.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contacto/" className="btn-primary">
                  Ven a conocernos
                </Link>
              </div>
            </div>
            <div className="bg-youlex-light aspect-square flex items-center justify-center lg:order-1">
              <div className="text-center p-8">
                <p className="text-youlex-gray text-sm uppercase tracking-wider">
                  Imagen del equipo
                </p>
                <p className="text-youlex-gray/60 text-xs mt-2">
                  Equipo Youlex Salón
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-youlex-black text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              Tu confianza, nuestro mayor orgullo
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Más de 150 clientes satisfechos en Terrassa nos avalan. Sus valoraciones
              positivas son el reflejo de nuestro compromiso con la excelencia y
              el trato humano.
            </p>
            <div className="flex flex-wrap justify-center gap-12 mb-10">
              <div className="text-center">
                <p className="text-5xl font-semibold text-white mb-2">4.9</p>
                <p className="text-neutral-400 text-sm">Valoración media</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-semibold text-white mb-2">150+</p>
                <p className="text-neutral-400 text-sm">Reseñas positivas</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-semibold text-white mb-2">5</p>
                <p className="text-neutral-400 text-sm">Años de experiencia</p>
              </div>
            </div>
            <Link
              href="/contacto/"
              className="inline-flex items-center justify-center bg-white text-youlex-black px-8 py-4 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Reservar cita
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
