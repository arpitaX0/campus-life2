import { useEffect, useRef } from 'react'

const milestones = [
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_seminar.jpg',
    tag: 'CO-CURRICULAR',
    title: 'Student Enrichment Clubs',
    desc: '14 college-level Technovation clubs and 10 departmental clubs covering cultural and academic platforms.',
    cta: 'Explore Clubs',
    href: 'https://tat.ac.in/activities/co-curricullar/',
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/news_campus_life.jpg',
    tag: 'EXTRA-CURRICULAR',
    title: 'Cultural Programmes',
    desc: 'TRIFEST, UDAYAN, ELIXIR, MANAN, KARTAVYA — annual events nurturing diverse student talents.',
    cta: 'View Events',
    href: 'https://tat.ac.in/activities/extra-curricullar/',
  },
  {
    img: 'https://raw.githubusercontent.com/shubhranshux/trident/main/temp-app/src/assets/discover_graduation.jpg',
    tag: 'INNOVATION',
    title: 'IEDC & Incubation Cell',
    desc: 'ED Cell and IEDC supported by DST, GoI — fostering innovation and startup entrepreneurship.',
    cta: 'Learn More',
    href: 'https://tat.ac.in/activities/innovation-2/',
  },
]

export default function Milestones() {
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
    <section ref={sectionRef} className="py-[100px]" style={{ background: '#EFE7DF' }} id="milestones">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-14" data-animate>
          <p
            className="font-inter text-[11px] font-black tracking-[0.22em] uppercase mb-3"
            style={{ color: '#E56D24' }}
          >
            ACTIVITY HIGHLIGHTS
          </p>
          <h2 className="section-title">Key Activity Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map(({ img, tag, title, desc, cta, href }) => (
            <div
              key={title}
              data-animate
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 400 }}
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,15,30,0.9) 0%, transparent 55%)' }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="text-xs font-black tracking-widest"
                  style={{ color: '#349FCC' }}
                >
                  {tag}
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">{title}</h3>
                <p className="text-white/60 text-sm mb-4">{desc}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-all hover:gap-3"
                >
                  {cta} <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional links from tat.ac.in */}
        <div className="mt-10 flex flex-wrap justify-center gap-4" data-animate>
          {[
            { label: 'TRILOGY: Annual Magazine', href: 'https://tat.ac.in/activities/trilogy/', icon: 'ph ph-book-open' },
            { label: 'IEDC Projects', href: 'https://tat.ac.in/activities/innovation/', icon: 'ph ph-lightbulb' },
            { label: 'Communication Workshops', href: 'https://tat.ac.in/communication-training/', icon: 'ph ph-chats-circle' },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: 'white', border: '1px solid rgba(62,58,54,0.12)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <i className={icon} style={{ color: '#2C3A8C' }}></i> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
