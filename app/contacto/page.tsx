import type { Metadata } from 'next'
import { siteConfig, generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contacto | Reserva tu Cita',
  description: 'Contacta con Youlex Salón en Terrassa. Reserva tu cita para cortes masculinos, trenzas africanas, cejas con hilo y más. Estamos en el centro de Terrassa, Barcelona.',
  alternates: {
    canonical: `${siteConfig.url}/contacto/`,
  },
}

export default function ContactoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: siteConfig.url },
    { name: 'Contacto', url: `${siteConfig.url}/contacto/` },
  ])

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hola, me gustaría reservar una cita en Youlex Salón.')}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative bg-neutral-900 py-20 md:py-28">        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container-width">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white">
              Contacta con nosotros
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed">
              ¿Quieres reservar una cita o tienes alguna pregunta?
              Estamos aquí para ayudarte. Visítanos en nuestro salón
              en Terrassa o contáctanos por teléfono o WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Details */}
            <div>
              <h2 className="heading-2 mb-8">Información de contacto</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-youlex-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-youlex-black mb-1">Dirección</h3>
                    <address className="not-italic text-youlex-gray">
                      <p>{siteConfig.address.street}</p>
                      <p>{siteConfig.address.postalCode} {siteConfig.address.city}</p>
                      <p>{siteConfig.address.region}, España</p>
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-youlex-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-youlex-black mb-1">Teléfono</h3>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-youlex-gray hover:text-youlex-black transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-youlex-black">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-youlex-black mb-1">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-youlex-gray hover:text-youlex-black transition-colors"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-youlex-black">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-youlex-black mb-1">Horario</h3>
                    <div className="text-youlex-gray space-y-1">
                      <p><span className="font-medium">Lunes a Viernes:</span> {siteConfig.hours.weekdays}</p>
                      <p><span className="font-medium">Sábado:</span> {siteConfig.hours.saturday}</p>
                      <p><span className="font-medium">Domingo:</span> {siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary"
                >
                  Llamar ahora
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-2 mb-8">Cómo llegar</h2>
              <div className="bg-youlex-light aspect-[4/3] flex items-center justify-center">
                {/* Placeholder for Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1492.5009749774283!2d2.038955338910305!3d41.56920239952819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a493f08ef572bf%3A0x29cc2fe0bed9d03!2sBarberia%20%7C%20Youlex%20Sal%C3%B3n%20%7C!5e0!3m2!1ses!2ses!4v1773792073033!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mt-4 text-sm text-youlex-gray">
                Estamos en el centro de Terrassa, con fácil acceso en transporte
                público y aparcamiento cercano.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-youlex-light">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Preguntas frecuentes</h2>
            <div className="space-y-6">
              <article className="bg-white p-6 md:p-8">
                <h3 className="font-semibold text-youlex-black mb-3">
                  ¿Es necesario pedir cita previa?
                </h3>
                <p className="text-youlex-gray">
                  Recomendamos pedir cita previa para garantizar tu horario,
                  especialmente para servicios como trenzas africanas.
                  Sin embargo, también atendemos sin cita si hay disponibilidad.
                </p>
              </article>
              <article className="bg-white p-6 md:p-8">
                <h3 className="font-semibold text-youlex-black mb-3">
                  ¿Qué formas de pago aceptáis?
                </h3>
                <p className="text-youlex-gray">
                  Aceptamos efectivo y tarjeta de crédito/débito.
                </p>
              </article>
              <article className="bg-white p-6 md:p-8">
                <h3 className="font-semibold text-youlex-black mb-3">
                  ¿Cuánto dura una sesión de trenzas africanas?
                </h3>
                <p className="text-youlex-gray">
                  El tiempo varía según el estilo y la longitud del cabello.
                  Te informaremos del tiempo estimado cuando reserves tu cita.
                </p>
              </article>
              <article className="bg-white p-6 md:p-8">
                <h3 className="font-semibold text-youlex-black mb-3">
                  ¿Trabajáis con productos específicos para cabello afro?
                </h3>
                <p className="text-youlex-gray">
                  Sí, utilizamos productos de alta calidad específicos para
                  cada tipo de cabello, incluyendo cabello afro y rizado.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
