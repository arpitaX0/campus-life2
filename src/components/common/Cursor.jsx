import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0
    let rafId = null

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        dotRef.current.style.opacity = '1'
      }
      if (trailRef.current) trailRef.current.style.opacity = '1'
    }

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15
      trailY += (mouseY - trailY) * 0.15
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX}px, ${trailY}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (trailRef.current) trailRef.current.style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <style>{`@media (min-width: 1024px) { html, a, button { cursor: none !important; } }`}</style>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={trailRef} className="cursor-trail hidden lg:block" />
    </>
  )
}
