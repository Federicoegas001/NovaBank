import { UserCircle2, CheckCircle2, ArrowRight } from 'lucide-react'

const benefits = [
  'Apertura 100% online',
  'Sin costo de mantenimiento',
  'Transferencias ilimitadas',
  'Soporte 24/7',
]

export default function RegisterPanel() {
  return (
    <div className="flex flex-col h-full">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-nova-purple-dim flex items-center justify-center mb-6 border border-nova-purple/20">
        <UserCircle2 className="w-6 h-6 text-nova-purple-light" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-3">
        ¿No tenés cuenta?
      </h2>
      <p className="text-nova-muted text-sm leading-relaxed mb-7">
        Creá tu cuenta en segundos y empezá a disfrutar de todos los beneficios de NovaBank.
      </p>

      {/* Benefits */}
      <ul className="flex flex-col gap-3 mb-8">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-nova-purple-light flex-shrink-0" />
            <span className="text-sm text-nova-muted-light">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        className="w-full mt-auto py-3.5 rounded-xl border border-nova-purple/50 hover:border-nova-purple text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 hover:bg-nova-purple/10 group"
      >
        Registrarme
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  )
}
