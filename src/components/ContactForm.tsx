import { FormEvent, type ReactNode, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/cn'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzvqjbb'
/** +58 412 356 3070 */
const WHATSAPP_NUMBER = '584123563070'

const ACTIVITY_OPTIONS = [
  'Servicios Profesionales (Asesoría, Salud, Freelance)',
  'Venta de Productos (Tienda, E-commerce, Catálogo)',
  'Negocio Local (Restaurante, Estética, Taller)',
] as const

const VISUAL_STYLE_OPTIONS = [
  'Audaz y Moderno: (Fuertes contrastes, tipografías grandes, ideal para Tech/Agencias).',
  'Contemporáneo y Limpio: (Minimalismo tipo Apple, mucho aire, ideal para Servicios/Salud).',
  'Clásico y Conservador: (Elegancia sobria, fuentes con serifa, ideal para Legal/Finanzas).',
] as const

const PAYMENT_LINES_WHATSAPP = `Datos de pago ($99 · Proyecto 3000):
Zelle → Sandryquezada@gmail.com (Sandra Quezada Da Silva)
Binance → gabrieldelgado110@gmail.com | User: ingenierogd10 | UID: 336165001`

const fieldClass =
  'rounded-[12px] border-gray-300 shadow-sm transition-all hover:border-coach-500/40 focus:border-coach-700 focus:ring-coach-700'

function Helper({ children }: { children: ReactNode }) {
  return <p className="mt-1 text-xs text-slate-500">{children}</p>
}

function SectorGuide() {
  return (
    <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500">
      <p className="font-semibold text-slate-600">💡 Guía rápida para elegir:</p>
      <ul className="mt-2 list-none space-y-2 pl-0">
        <li>
          <strong className="text-slate-700">Servicios Profesionales:</strong> Si vendes tu conocimiento (Abogados, Médicos, Coaches, Agencias, Freelance).
        </li>
        <li>
          <strong className="text-slate-700">Venta de Productos:</strong> Si tienes un inventario físico o digital que quieres mostrar (Tiendas de ropa, gadgets,
          cursos).
        </li>
        <li>
          <strong className="text-slate-700">Negocio Local:</strong> Si tu fuerza es el punto físico y la atención directa (Restaurantes, Talleres, Estéticas,
          Clínicas locales).
        </li>
      </ul>
    </div>
  )
}

function ReservationFicha({ clientName, businessName }: { clientName: string; businessName: string }) {
  const waBody = [
    `Hola Gabriel, acabo de enviar mi solicitud para ${businessName}.`,
    '',
    'Adjunto el comprobante de pago de $99 para asegurar mi cupo (Proyecto 3000).',
    '',
    PAYMENT_LINES_WHATSAPP,
    '',
    'Quedo atento/a a la confirmación.',
  ].join('\n')

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waBody)}`

  return (
    <div
      className="overflow-hidden rounded-sm border-2 border-coach-900 bg-white shadow-coach"
      role="status"
      aria-live="polite"
    >
      <header className="border-b-2 border-coach-900 bg-coach-900 px-4 py-4 sm:px-6">
        <p className="font-display text-center text-base font-bold tracking-wide text-white sm:text-lg">
          ✅ Solicitud Recibida - Paso Final para Reserva
        </p>
        <p className="mt-1 text-center text-xs font-medium uppercase tracking-[0.12em] text-white/75">
          Ficha de reserva · Proyecto 3000
        </p>
      </header>

      <div className="space-y-6 border-b border-neutral-200 bg-neutral-50/40 px-4 py-6 sm:px-8 sm:py-8">
        <div className="border-l-4 border-coach-700 bg-white py-3 pl-4 pr-3 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-coach-900">Resumen de solicitud</p>
          <p className="mt-3 text-base leading-relaxed text-neutral-800">
            Hola <strong className="text-coach-900">{clientName}</strong>, he recibido tus datos para{' '}
            <strong className="text-coach-900">{businessName}</strong>. Para asegurar tu cupo de los{' '}
            <strong>30 disponibles</strong> y congelar el precio de <strong>$99</strong>, realiza el pago y adjunta el comprobante.
          </p>
        </div>

        <div>
          <h3 className="mb-3 border-b border-coach-200 pb-2 font-display text-sm font-bold uppercase tracking-wider text-coach-900">
            Instrucciones de pago
          </h3>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="rounded-md border-2 border-neutral-300 bg-white p-4 shadow-sm">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-coach-800">Zelle</p>
              <p className="mt-2 font-mono text-sm text-neutral-900 break-all">Sandryquezada@gmail.com</p>
              <p className="mt-2 text-sm text-neutral-600">Sandra Quezada Da Silva</p>
            </div>
            <div className="rounded-md border-2 border-neutral-300 bg-white p-4 shadow-sm">
              <p className="font-display text-xs font-bold uppercase tracking-wider text-coach-800">Binance</p>
              <p className="mt-2 font-mono text-sm text-neutral-900 break-all">gabrieldelgado110@gmail.com</p>
              <p className="mt-2 text-sm text-neutral-600">
                User: <span className="font-mono">ingenierogd10</span>
                <span className="mx-1 text-neutral-400">·</span>
                UID: <span className="font-mono">336165001</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white px-4 py-6 sm:px-8">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'font-display flex w-full items-center justify-center rounded-lg px-6 py-4 text-center text-base font-bold text-white shadow-coach-sm transition-all',
            'bg-[#25D366] hover:bg-[#20BD5A] hover:shadow-coach-md hover:-translate-y-0.5',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]'
          )}
        >
          Enviar Comprobante por WhatsApp (+58 412 356 3070)
        </a>
        <p className="mt-3 text-center text-xs text-slate-500">
          El mensaje incluye Zelle (Sandra) y Binance (Gabriel) para que no pierdas los datos. Adjunta tu capture de pago antes de enviar.
        </p>
      </footer>
    </div>
  )
}

export function ContactForm() {
  const [clientName, setClientName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [activity, setActivity] = useState<string>('')
  const [valueProposition, setValueProposition] = useState('')
  const [identityReferences, setIdentityReferences] = useState('')
  const [visualStyle, setVisualStyle] = useState<string>('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [submitted, setSubmitted] = useState(false)
  const [successName, setSuccessName] = useState('')
  const [successBusiness, setSuccessBusiness] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const trimmedName = clientName.trim()
    const trimmedBusiness = businessName.trim()

    const data = new FormData()
    data.append('client_name', trimmedName)
    data.append('business_name', trimmedBusiness)
    data.append('activity', activity)
    data.append('value_proposition', valueProposition.trim())
    if (identityReferences.trim()) {
      data.append('identity_references', identityReferences.trim())
    }
    data.append('visual_style', visualStyle)
    data.append('email', email.trim())
    data.append('whatsapp', whatsapp.trim())
    data.append('_subject', 'Proyecto 3000 — Gabriel Delgado')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.status === 200 || res.ok) {
        setSuccessName(trimmedName)
        setSuccessBusiness(trimmedBusiness)
        setSubmitted(true)
        setStatus('idle')
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (submitted) {
    return <ReservationFicha clientName={successName} businessName={successBusiness} />
  }

  return (
    <div className="rounded-[15px] border border-neutral-200/90 bg-white p-4 shadow-coach sm:p-6 md:p-8">
      <h2 className="font-display relative mb-2 border-b-4 border-coach-700 pb-3 text-xl font-black text-coach-900 sm:text-2xl">
        Pre-calificación técnica
      </h2>
      <p className="mb-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
        Unos datos concretos bastan para ver si tu proyecto encaja y preparar una respuesta clara. Te escribo por correo o WhatsApp con el siguiente paso.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 [&_label]:font-semibold [&_label]:text-neutral-800">
        <Input
          name="client_name"
          type="text"
          label="¿Cómo te llamas?"
          placeholder="Tu nombre"
          required
          autoComplete="name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className={fieldClass}
        />

        <Input
          name="business_name"
          type="text"
          label="Nombre de tu empresa o proyecto"
          placeholder="Marca, razón social o nombre del proyecto"
          required
          autoComplete="organization"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className={fieldClass}
        />

        <div className="w-full">
          <label htmlFor="activity" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿A qué se dedica tu negocio?
          </label>
          <select
            id="activity"
            name="activity"
            required
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className={cn(
              'w-full border bg-white px-4 py-2 text-neutral-800',
              fieldClass,
              'focus:outline-none focus:ring-2'
            )}
          >
            <option value="" disabled>
              Elige la opción que mejor encaje
            </option>
            {ACTIVITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <Helper>Esto me ayuda a elegir la arquitectura de carga (SSG o Dinámica) más eficiente para ti.</Helper>
          <SectorGuide />
        </div>

        <div className="w-full">
          <label htmlFor="value_proposition" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿Cuál es el objetivo principal de tu nueva web?
          </label>
          <textarea
            id="value_proposition"
            name="value_proposition"
            rows={5}
            required
            value={valueProposition}
            onChange={(e) => setValueProposition(e.target.value)}
            className={cn(
              'w-full resize-y border px-4 py-2 text-neutral-800',
              fieldClass,
              'min-h-[120px] focus:outline-none focus:ring-2'
            )}
            placeholder="Ej. captar leads, vender online, reservas, credibilidad profesional…"
          />
          <Helper>Sé específico: ¿Quieres captar leads, vender productos o marca personal?</Helper>
        </div>

        <div className="w-full">
          <label htmlFor="identity_references" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿Tienes una web actual, referencia o nombre ideal para tu dominio?{' '}
            <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <Input
            id="identity_references"
            name="identity_references"
            type="text"
            placeholder="URL, referencia o el dominio que imaginas"
            value={identityReferences}
            onChange={(e) => setIdentityReferences(e.target.value)}
            className={fieldClass}
          />
          <Helper>
            Dime si ya tienes una página, algún sitio que te guste como referencia o simplemente el nombre que sueñas para tu dirección web.
          </Helper>
        </div>

        <div className="w-full">
          <label htmlFor="visual_style" className="mb-1.5 block text-sm font-semibold text-neutral-800">
            ¿Qué personalidad visual buscas para tu sitio?
          </label>
          <select
            id="visual_style"
            name="visual_style"
            required
            value={visualStyle}
            onChange={(e) => setVisualStyle(e.target.value)}
            className={cn(
              'w-full border bg-white px-4 py-2 text-sm text-neutral-800 sm:text-base',
              fieldClass,
              'focus:outline-none focus:ring-2'
            )}
          >
            <option value="" disabled>
              Elige la personalidad visual
            </option>
            {VISUAL_STYLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <Helper>Esto define la tipografía, los colores y la fuerza del diseño.</Helper>
        </div>

        <Input
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="tu@correo.com"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />

        <div className="w-full">
          <Input
            name="whatsapp"
            type="tel"
            label="WhatsApp"
            placeholder="+58 412 356 3070"
            required
            autoComplete="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={fieldClass}
          />
          <Helper>Te escribiré personalmente para coordinar el despliegue técnico.</Helper>
        </div>

        <p className="rounded-lg border border-coach-100 bg-coach-light/60 px-3 py-2.5 text-xs leading-relaxed text-coach-900 sm:text-sm">
          <strong className="font-semibold">Recordatorio:</strong> Tu sitio será entregado en un bloque de{' '}
          <strong>48 a 72 horas</strong> tras la confirmación del pago.
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className={cn(
              'font-display w-full font-bold shadow-coach-sm transition-all sm:w-fit sm:min-w-[220px]',
              'rounded-[25px] bg-gradient-to-br from-coach-700 to-coach-900 hover:opacity-95',
              'hover:-translate-y-0.5 hover:shadow-coach-md focus:ring-coach-800',
              'disabled:hover:translate-y-0 disabled:hover:opacity-50'
            )}
          >
            {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
          </Button>
          {status === 'error' && (
            <p className="text-sm font-semibold text-alert" role="alert">
              No se pudo enviar. Inténtalo de nuevo en unos minutos.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
