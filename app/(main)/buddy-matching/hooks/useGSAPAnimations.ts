import { useEffect, useRef } from "react"

export default function useGSAPAnimations() {
  const headerGirlRef = useRef(null)
  const girl1Ref = useRef(null)
  const girl2Ref = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap")

      gsap.fromTo(headerGirlRef.current,
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      )

      gsap.fromTo(card1Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )

      gsap.fromTo(card2Ref.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
    }

    init()
  }, [])

  return {
    headerGirlRef,
    girl1Ref,
    girl2Ref,
    card1Ref,
    card2Ref,
    btn1Ref,
    btn2Ref,
  }
}