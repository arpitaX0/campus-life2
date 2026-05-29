import { useEffect, useRef } from 'react'

export default function Hero() {
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
      className="relative min-h-screen flex items-end overflow-hidden"
      id="activities"
    >
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Campus Activities"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(7,11,43,0.85) 0%, rgba(7,11,43,0.5) 40%, rgba(7,11,43,0.3) 100%)',
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pb-24 pt-[220px]">
        {/* Label */}
        <div data-animate className="flex items-center gap-3 mb-8">
          <div
            className="h-px flex-shrink-0"
            style={{ width: 40, background: 'rgba(255,255,255,0.5)' }}
          ></div>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <i className="ph-fill ph-diamond" style={{ fontSize: 8 }}></i>
            Student Activities
          </span>
        </div>

        {/* Headline */}
        <h1
          data-animate
          className="font-display leading-[1.05] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(44px, 6vw, 80px)', color: '#ffffff' }}
        >
          <span className="italic">Where Education</span>
          <br />
          <span className="italic">Meets </span>
          <span className="italic" style={{ color: '#E56D24' }}>Enthusiasm</span>
          <span className="italic" style={{ color: '#ffffff' }}>,</span>
          <br />
          <span style={{ color: '#ffffff' }}>Beyond the Classroom.</span>
        </h1>

        {/* Subtitle — real content from tat.ac.in */}
        <p
          data-animate
          className="text-lg leading-[1.75] mb-10"
          style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 580 }}
        >
          Education in Trident is not just about books and classrooms. Students achieve and accomplish many goals through 20+ student clubs, annual festivals, innovation cells, and world-class sports facilities.
        </p>


      </div>
    </section>
  )
}
