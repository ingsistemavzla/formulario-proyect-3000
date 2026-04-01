import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/utils/cn'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzvqjbb'

const ARCHETYPES = ['Producto', 'Servicio', 'Experiencia'] as const

export function ContactForm() {
  const [businessName, setBusinessName] = useState('')
  const [archetype, setArchetype] = useState<string>('')
  const [valueProposition, setValueProposition] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData()
    data.append('business_name', businessName.trim())
    data.append('archetype', archetype)
    data.append('value_proposition', valueProposition.trim())
    data.append('email', email.trim())
    data.append('whatsapp', whatsapp.trim())
    data.append('_subject', 'Proyecto 3000 — Misión Celia Delgado')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.status === 200 || res.ok) {
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
    return (
      <div
        className="sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-emerald-200 sm:shadow-lg bg-gradient-to-br from-emerald-50/90 to-white"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg sm:text-xl text-neutral-800 leading-relaxed font-medium text-center max-w-2xl mx-auto">
          ¡Datos recibidos, Francisco! Tu cupo está pre-reservado. Te contactaré por WhatsApp en breve para confirmar el pago y comenzar.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-neutral-200 sm:shadow-lg">
      <h2 className="text-lg sm:text-2xl font-black text-primary-800 mb-2 border-b-2 border-primary-600 pb-2">
        Reserva tu cupo
      </h2>
      <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">
        Cuéntanos sobre tu negocio y cómo quieres que te encuentre tu audiencia. Con estos datos preparo tu propuesta y el siguiente paso por WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          name="business_name"
          type="text"
          label="Nombre del negocio o marca"
          placeholder="Ej. Café Aurora"
          required
          autoComplete="organization"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />

        <div className="w-full">
          <label htmlFor="archetype" className="block text-sm font-medium text-gray-700 mb-1.5">
            Arquetipo
          </label>
          <select
            id="archetype"
            name="archetype"
            required
            value={archetype}
            onChange={(e) => setArchetype(e.target.value)}
            className={cn(
              'w-full px-4 py-2 border rounded-lg transition-colors bg-white',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'border-gray-300'
            )}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {ARCHETYPES.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="value_proposition" className="block text-sm font-medium text-gray-700 mb-1.5">
            Propuesta de valor
          </label>
          <textarea
            id="value_proposition"
            name="value_proposition"
            rows={5}
            required
            value={valueProposition}
            onChange={(e) => setValueProposition(e.target.value)}
            className={cn(
              'w-full px-4 py-2 border rounded-lg transition-colors resize-y min-h-[120px]',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'border-gray-300'
            )}
            placeholder="¿Qué ofreces, a quién ayudas y qué te hace distinto?"
          />
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
        />

        <Input
          name="whatsapp"
          type="tel"
          label="WhatsApp"
          placeholder="+58 412 0000000"
          required
          autoComplete="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <div className="flex flex-col gap-3 pt-2">
          <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} className="sm:w-fit sm:min-w-[200px]">
            {status === 'loading' ? 'Enviando…' : 'Enviar y pre-reservar cupo'}
          </Button>
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600" role="alert">
              No se pudo enviar. Inténtalo de nuevo en unos minutos.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
