import { useCallback, useEffect, useState } from 'react'

export const useScrollReveal = <T extends HTMLElement>() => {
  const [node, setNode] = useState<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const ref = useCallback((element: T | null) => {
    setNode(element)
  }, [])

  useEffect(() => {
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [node])

  return { ref, isVisible }
}
