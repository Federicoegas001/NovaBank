import { Shield, Zap, BarChart3, Lock } from 'lucide-react'
import LoginForm from './LoginForm'
import RegisterPanel from './RegisterPanel'

const features = [
  {
    icon: Shield,
    title: 'Seguridad de nivel bancario',
    desc: 'Protegemos tus datos y operaciones con tecnología de punta.',
  },
  {
    icon: Zap,
    title: 'Operaciones en segundos',
    desc: 'Hacé transferencias y pagos de forma rápida y sin complicaciones.',
  },
  {
    icon: BarChart3,
    title: 'Control total de tus finanzas',
    desc: 'Visualizá tus movimientos y administrá tus cuentas en un solo lugar.',
  },
]

function NovaBankLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-nova-purple flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
          <path
            d="M4 19V7L12 4L20 7V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 19V13H15V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-white font-bold text-lg tracking-tight">
        Nova<span className="font-extrabold">Bank</span>
      </span>
    </div>
  )
}

function CreditCard() {
  return (
    <div className="relative w-64 select-none">
      {/* Card shadow behind */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-56 h-36 rounded-2xl opacity-30"
        style={{
          background: 'linear-gradient(135deg, #4c1d95, #1e1b4b)',
          filter: 'blur(8px)',
          transform: 'translateX(-50%) perspective(600px) rotateX(10deg) translateY(8px)',
        }}
      />
      {/* Card */}
      <div
        className="relative rounded-2xl p-5 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3b0764 0%, #1e1b4b 60%, #312e81 100%)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
        }}
      >
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)',
          }}
        />
        {/* Chip + contactless */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-7 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-90" />
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/60">
            <path d="M5 12.5C5 8.91 7.91 6 11.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2 12.5C2 7.25 6.25 3 11.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 12.5C8 10.57 9.57 9 11.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Number */}
        <p className="text-white/80 text-sm font-mono tracking-[0.2em] mb-4">
          1234 5678 9012 3456
        </p>
        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <span className="text-white/50 text-xs">08/28</span>
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
            Nova Bank
          </span>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: 'linear-gradient(160deg, #060818 0%, #080920 50%, #0a0b28 100%)' }}
    >
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl flex gap-10 items-center">

          {/* LEFT — Hero */}
          <div className="hidden lg:flex flex-col flex-1 min-w-0 pr-4">
            <NovaBankLogo />

            <div className="mt-12 mb-10">
              <h1 className="text-5xl font-extrabold text-white leading-tight mb-5">
                Tu banco,
                <br />
                siempre{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
                  }}
                >
                  cerca.
                </span>
              </h1>
              <p className="text-nova-muted text-base leading-relaxed max-w-sm">
                Gestioná tus cuentas, realizá transferencias y mucho más, de forma segura y simple.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5 mb-12">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-nova-purple-dim border border-nova-purple/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-nova-purple-light" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                    <p className="text-xs text-nova-muted leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card illustration */}
            <div className="flex justify-center lg:justify-start pl-4">
              <CreditCard />
            </div>
          </div>

          {/* RIGHT — Auth card */}
          <div
            className="w-full lg:w-auto lg:flex-shrink-0"
            style={{ width: 'min(720px, 100%)' }}
          >
            <div
              className="rounded-3xl p-1"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(255,255,255,0.04) 100%)',
              }}
            >
              <div
                className="rounded-[22px] overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, #0d0f30 0%, #0a0c27 100%)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                }}
              >
                <div className="flex divide-x divide-white/[0.06]">
                  {/* Login column */}
                  <div className="flex-1 p-8 lg:p-10">
                    <LoginForm />
                  </div>

                  {/* Register column */}
                  <div className="flex-1 p-8 lg:p-10 bg-white/[0.02]">
                    <RegisterPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer security bar */}
      <footer className="border-t border-white/[0.06] py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <Lock className="w-4 h-4 text-nova-purple-light flex-shrink-0" />
          <p className="text-xs text-nova-muted">
            Tu seguridad es nuestra prioridad. Utilizamos cifrado de extremo a extremo para proteger tu información.
          </p>
        </div>
      </footer>
    </div>
  )
}
