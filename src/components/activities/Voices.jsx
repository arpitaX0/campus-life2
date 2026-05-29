import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote: "It's a new world and a completely new life for students stepping into Trident Education. New friends, a lively environment, experienced faculty, renewed ambitions and inspired goals are what every student can look forward to at Trident.",
    name: 'Student Experience',
    detail: 'Trident Academy of Technology',
  },
  {
    quote: "Trident is all about opportunity. The opportunity to make the best of friends, to meet interesting people from all over, to learn and grow under the guidance of the most respected academicians, to study in an innovative environment, and to land the best of jobs.",
    name: 'Campus Life',
    detail: 'TAT Student Community',
  },
  {
    quote: "Education in Trident is not just about books and classrooms. A student can achieve and accomplish many goals because of the easy access provided to a variety of facilities. Trident is second to none in this respect.",
    name: 'Holistic Growth',
    detail: 'Trident Activities',
  },
]

export default function Voices() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[active]

  return (
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#F5EEEC' }} id="voices">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            THE TRIDENT SPIRIT
          </p>
          <h2 className="section-title">Voices of Trident</h2>
        </div>

        <div data-animate className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl p-10 md:p-14"
            style={{
              background: 'white',
              boxShadow: '0 20px 80px rgba(44,58,140,0.12)',
              border: '1px solid rgba(44,58,140,0.08)',
            }}
          >
            {/* Background quote mark */}
            <span
              className="absolute top-6 left-8 leading-none pointer-events-none select-none font-serif"
              style={{ color: 'rgba(44,58,140,0.06)', fontSize: '10rem' }}
            >
              "
            </span>

            {/* Accent line */}
            <div
              className="mb-6"
              style={{
                width: 50,
                height: 3,
                background: 'linear-gradient(90deg, #2C3A8C, #E56D24)',
                borderRadius: 2,
              }}
            ></div>

            {/* Quote */}
            <p
              className="font-display text-lg md:text-xl leading-relaxed font-medium italic relative z-10 mb-8"
              style={{ color: '#3E3A36' }}
            >
              "{t.quote}"
            </p>

            {/* Divider */}
            <div className="mb-6" style={{ height: 1, background: 'rgba(62,58,54,0.1)' }}></div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{ background: 'rgba(44,58,140,0.08)', color: '#2C3A8C' }}
              >
                <i className="ph-fill ph-graduation-cap"></i>
              </div>
              <div>
                <span className="block font-bold text-base">{t.name}</span>
                <span className="block text-xs" style={{ color: 'rgba(62,58,54,0.5)' }}>{t.detail}</span>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="border-none cursor-pointer transition-all"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === active ? '#2C3A8C' : 'rgba(44,58,140,0.15)',
                  }}
                  aria-label={`View quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
