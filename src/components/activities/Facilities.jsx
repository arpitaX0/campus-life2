import { useEffect, useRef } from 'react'

const facilities = [
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', icon: 'ph ph-barbell', title: 'Gymnasium & Fitness Center', desc: 'Fully equipped gym with modern fitness equipment for students and staff.', wide: true },
  { img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: 'ph ph-volleyball', title: 'Volleyball Court', desc: '5 consecutive inter-college championships.', wide: false },
  { img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: 'ph ph-racquet', title: 'Badminton Arena', desc: 'Indoor singles/doubles facility.', wide: false },
  { img: 'https://images.unsplash.com/photo-1611251135345-18c56206b863?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', icon: 'ph ph-table', title: 'Table Tennis', desc: 'Indoor facility for boys and girls.', wide: false },
  { img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', icon: 'ph ph-baseball', title: 'Cricket & Football Ground', desc: 'Annual athletic meets, inter-college cricket and football tournaments held at dedicated grounds.', wide: true },
]

export default function Facilities() {
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
    <section
      ref={sectionRef}
      className="py-[100px]"
      style={{ background: '#EFEBE6' }}
      id="facilities"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-14" data-animate>
          <div>
            <p
              className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
              style={{ color: '#E56D24' }}
            >
              SPORTS & RECREATION FACILITIES
            </p>
            <h2 className="section-title">World-Class Sports Infrastructure</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(0,0,0,0.65)' }}>
            TAT provides comprehensive indoor and outdoor sports facilities including table tennis, badminton, volleyball, cricket, football, basketball, chess, carom, and a holistic yoga centre.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {facilities.map(({ img, icon, title, desc }, i) => (
            <div
              key={title}
              data-animate
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${(i === 0 || i === 4) ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{ height: 300 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,10,30,0.85) 0%, transparent 55%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}
                  >
                    <i className={icon}></i>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">{title}</h3>
                </div>
                {desc && <p className="text-white/65 text-sm mt-2">{desc}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Holistic Centre mention */}
        <div
          data-animate
          className="mt-10 p-6 rounded-2xl flex items-center gap-4"
          style={{ background: 'rgba(44,58,140,0.06)', border: '1px solid rgba(44,58,140,0.1)' }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: '#2C3A8C', color: '#fff' }}
          >
            <i className="ph ph-flower-lotus"></i>
          </div>
          <div>
            <h4 className="font-display font-bold text-base">Holistic Centre — Yoga & Wellness</h4>
            <p className="text-sm" style={{ color: 'rgba(62,58,54,0.6)' }}>
              TAT has a dedicated Holistic Centre providing yoga classes for students and staff. Specialist yoga instructors conduct sessions for better life management, physical health, and mindfulness.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
