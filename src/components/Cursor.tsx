import { useEffect, useRef } from 'react'

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    // Current rendered position (lerped)
    let cx = -100
    let cy = -100
    // Target position (raw mouse)
    let mx = -100
    let my = -100
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    // Use event delegation on document — no listener buildup, no MutationObserver needed
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button')) {
        el.classList.add('grow')
      } else {
        el.classList.remove('grow')
      }
    }

    const loop = () => {
      // Lerp toward mouse
      cx += (mx - cx) * 0.15
      cy += (my - cy) * 0.15
      // Position via left/top so CSS transform: translate(-50%,-50%) centers it cleanly
      el.style.left = cx + 'px'
      el.style.top = cy + 'px'
      rafId = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />
}
