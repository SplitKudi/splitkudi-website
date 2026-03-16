import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver that adds the 'visible' class
 * when the element enters the viewport, triggering the CSS reveal animation.
 */
export function useReveal(delayMs = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return ref
}
