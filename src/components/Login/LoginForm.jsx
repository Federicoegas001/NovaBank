import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="mb-8">
        <div className="w-14 h-14 rounded-2xl bg-nova-purple-dim flex items-center justify-center mb-6 border border-nova-purple/20">
          <Lock className="w-6 h-6 text-nova-purple-light" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-1.5">Iniciar sesión</h1>
        <p className="text-nova-muted text-sm">
          Ingresá a tu cuenta de{' '}
          <span className="text-nova-purple-light font-medium">NovaBank</span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-nova-muted-light mb-2">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-nova-muted pointer-events-none" />
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="nova-input"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-nova-muted-light mb-2">
            Contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-nova-muted pointer-events-none" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Ingresá tu contraseña"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="nova-input"
              style={{ paddingLeft: '2.75rem', paddingRight: '3rem' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-nova-muted hover:text-nova-muted-light transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mt-1 gap-8">
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <div
              onClick={() => setRemember(!remember)}
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 flex-shrink-0
                ${remember
                  ? 'bg-nova-purple border-nova-purple'
                  : 'border-white/20 bg-transparent group-hover:border-nova-purple/50'
                }`}
            >
              {remember && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm text-nova-muted-light">Recordarme</span>
          </label>
          <a href="#" className="text-sm text-nova-purple-light hover:text-white transition-colors">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-2 py-3.5 rounded-xl bg-nova-purple hover:bg-nova-purple-light text-white font-semibold text-base transition-all duration-200 hover:shadow-btn active:scale-[0.98]"
          style={{ boxShadow: '0 4px 24px rgba(124,58,237,0.35)' }}
        >
          Iniciar sesión
        </button>

        {/* Security note */}
        <div className="flex items-start gap-3 mt-auto pt-4 border-t border-white/5">
          <ShieldCheck className="w-4 h-4 text-nova-purple-light flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-nova-muted-light">
              Tu seguridad es nuestra prioridad
            </p>
            <p className="text-xs text-nova-muted mt-0.5">
              Utilizamos cifrado de extremo a extremo para proteger tu información.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
