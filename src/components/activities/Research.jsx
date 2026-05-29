import { useEffect, useRef } from 'react'

const programmes = [
  {
    icon: 'ph ph-mask-happy',
    title: 'TRIFEST',
    desc: 'The Annual Cultural Show — a grand celebration of music, dance, drama, art, and talent across the campus.',
    href: 'https://tat.ac.in/trifest-2/',
    delay: 0,
  },
  {
    icon: 'ph ph-cpu',
    title: 'UDAYAN',
    desc: 'The Annual Techfest — showcasing engineering innovations, project exhibitions, and technical competitions.',
    href: 'https://tat.ac.in/udayan/',
    delay: 100,
  },
  {
    icon: 'ph ph-briefcase',
    title: 'ELIXIR',
    desc: 'The Business Meet — connecting aspiring entrepreneurs with industry exposure and business strategy challenges.',
    href: 'https://tat.ac.in/elixer/',
    delay: 200,
  },
  {
    icon: 'ph ph-brain',
    title: 'MANAN',
    desc: 'The Intellectual Group — fostering critical thinking, academic debate, and scholarly discourse.',
    href: 'https://tat.ac.in/manan-2/',
    delay: 300,
  },
  {
    icon: 'ph ph-hand-heart',
    title: 'KARTAVYA',
    desc: 'The Service Group — community outreach, social responsibility drives, and civic engagement activities.',
    href: 'https://tat.ac.in/kartabya/',
    delay: 400,
  },
  {
    icon: 'ph ph-person-simple-run',
    title: 'TRIFIT',
    desc: 'Personality development, yoga, meditation, and physical wellness programmes strengthening body and mind.',
    href: 'https://tat.ac.in/trifit/',
    delay: 500,
  },
]

export default function Research() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#F5EEEC' }} id="programmes">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            EXTRA-CURRICULAR PROGRAMMES
          </p>
          <h2 className="section-title">Beyond Academics</h2>
          <p className="text-lg mx-auto" style={{ color: 'rgba(62,58,54,0.6)', maxWidth: 620 }}>
            All work and no play makes you a dull boy. At Trident, students get to demonstrate talents and creative ability through cultural clubs and programmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map(({ icon, title, desc, href, delay }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-animate
              className="block p-8 rounded-2xl bg-white transition-all duration-300 cursor-pointer group no-underline"
              style={{
                border: '1px solid rgba(62,58,54,0.1)',
                transitionDelay: `${delay}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(44,58,140,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-2xl transition-colors group-hover:text-white"
                style={{ background: 'rgba(44,58,140,0.06)', color: '#2C3A8C' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2C3A8C'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(44,58,140,0.06)'; e.currentTarget.style.color = '#2C3A8C' }}
              >
                <i className={icon}></i>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(62,58,54,0.6)' }}>{desc}</p>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase"
                style={{ color: '#2C3A8C' }}
              >
                Read More <i className="ph ph-arrow-right"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
