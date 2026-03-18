'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios/' },
  { name: 'Sobre Youlex', href: '/sobre-youlex/' },
  { name: 'Contacto', href: '/contacto/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/img/logo_black.png"
            alt="Youlex Salón"
            width={70}  // ajusta según tamaño deseado
            height={20}  // ajusta según proporción del logo
            priority
          />
        </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-youlex-gray hover:text-youlex-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contacto/"
              className="bg-youlex-black text-white px-6 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Reservar cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-youlex-gray hover:text-youlex-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-youlex-gray hover:text-youlex-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contacto/"
                className="bg-youlex-black text-white px-6 py-3 text-center text-sm font-medium hover:bg-neutral-800 transition-colors mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservar cita
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
