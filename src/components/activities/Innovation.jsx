import { useEffect, useRef } from 'react'

const labs = [
  { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600', title: 'ED Cell — Entrepreneurship Development', delay: 100 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_innovation_lab.jpg', title: 'IEDC — Innovation & Entrepreneurship Development Centre', delay: 200 },
  { img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/cta_research_scholars.jpg', title: 'Incubation Cell — Startup Support', delay: 300 },
]

export default function Innovation() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#0a0b1a' }} id="innovation">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-14" data-animate>
          <div>
            <p
              className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-4"
              style={{ color: '#E56D24' }}
            >
              INNOVATION & ENTREPRENEURSHIP
            </p>
            <h2 className="section-title-light">Innovation & Incubation</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            TAT has established an ED Cell and an IEDC supported by DST, Government of India. The institution encourages all students to embark on the journey to achieving innovative entrepreneurship.
          </p>
        </div>

        {/* Innovation philosophy cards */}
        <div
          data-animate
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10"
        >
          {[
            { icon: 'ph ph-eye', tip: 'Vision for Change' },
            { icon: 'ph ph-lightning', tip: 'Fight Fear of Change' },
            { icon: 'ph ph-handshake', tip: 'Collaborate' },
            { icon: 'ph ph-flask', tip: 'Build Prototypes' },
            { icon: 'ph ph-fire', tip: 'Be Passionate' },
          ].map(({ icon, tip }) => (
            <div
              key={tip}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <i className={icon} style={{ color: '#E56D24', fontSize: '1.2rem' }}></i>
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>{tip}</span>
            </div>
          ))}
        </div>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Hero Image */}
          <div
            data-animate
            className="rounded-3xl overflow-hidden"
            style={{ height: 420 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="Innovation Lab at TAT"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lab list */}
          <div className="flex flex-col gap-4">
            {labs.map(({ img, title, delay }) => (
              <div
                key={title}
                data-animate
                className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  transitionDelay: `${delay}ms`,
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(107,77,255,0.4)'
                  e.currentTarget.style.background = 'rgba(107,77,255,0.08)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <img src={img} alt={title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <h3 className="font-display font-bold text-base" style={{ color: 'white' }}>{title}</h3>
              </div>
            ))}

            {/* Policy links */}
            <div
              data-animate
              className="flex flex-wrap gap-3 mt-4"
            >
              {[
                { label: "MoE's Startup Policy", href: 'https://api.mic.gov.in/uploads/images/announcements/81345_download.pdf' },
                { label: "TAT's Innovation Policy", href: 'https://tat.ac.in/wp-content/uploads/2023/08/startup-policy-TAT.pdf' },
                { label: 'Innovation at TAT', href: 'http://www.tat.ac.in/wp-content/uploads/2016/05/Innovations_TAT.pdf' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                >
                  <i className="ph ph-file-pdf"></i> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
