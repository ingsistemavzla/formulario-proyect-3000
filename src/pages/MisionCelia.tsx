import { ContactForm } from '@/components/ContactForm'
import { CuposProgress } from '@/components/CuposProgress'
import { Heart } from 'lucide-react'

export function MisionCelia() {
  return (
    <div className="bg-gradient-to-br from-neutral-100 via-white to-neutral-50 min-h-screen py-2 sm:py-4 md:py-8 px-0 sm:px-2 md:px-4 overflow-x-hidden">
      <div className="w-full md:max-w-6xl md:mx-auto bg-white sm:rounded-2xl sm:shadow-2xl overflow-hidden max-w-full">
        <header className="bg-gradient-to-br from-slate-800 via-indigo-900 to-indigo-800 text-white py-6 sm:py-8 px-4 sm:px-6 md:px-8 sm:rounded-t-2xl relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 text-center">
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/70 mb-3">
              Ingeniería con propósito
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-tight text-white px-1">
              Proyecto 3000 | Misión Celia Delgado
            </h1>
          </div>
        </header>

        <div className="p-4 sm:p-6 md:p-10 lg:p-12 space-y-8 sm:space-y-10 animate-fade-in">
          <section className="space-y-5">
            <div className="flex items-center gap-2 text-indigo-700">
              <Heart className="w-5 h-5 shrink-0 fill-indigo-100 stroke-indigo-700" strokeWidth={1.5} />
              <span className="text-xs font-semibold uppercase tracking-wider">Historia de la misión</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-neutral-900 leading-tight">
              30 Sitios de Élite para salvar a mi abuela
            </p>
            <CuposProgress current={2} total={30} />
            <div className="max-w-none border-t border-neutral-200 pt-6">
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                Cada cupo financiado se convierte en horas de ingeniería de software de alto rendimiento — y en recursos concretos para la salud de{' '}
                <strong className="text-neutral-900">Celia Delgado</strong>. No es marketing vacío: es código, arquitectura y un sitio que carga cuando debe
                cargar, para quienes confían en ti.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-4">
                Solo abrimos <strong className="text-neutral-900">30 lugares</strong>. Si encajas con esta misión, el siguiente paso es dejar tus datos y
                hablamos por WhatsApp para confirmar y arrancar.
              </p>
            </div>
          </section>

          <ContactForm />
        </div>

        <footer className="border-t border-neutral-200 bg-neutral-50/80 px-4 py-6 sm:px-8 text-center text-sm text-neutral-500">
          Misión Celia Delgado · Proyecto 3000
        </footer>
      </div>
    </div>
  )
}
