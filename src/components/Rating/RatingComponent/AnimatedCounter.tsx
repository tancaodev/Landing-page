import { motion, useSpring, useInView } from 'motion/react'
import { useEffect, useState, useRef } from 'react'

type AnimatedCounterProps = {
    from: number
    to: number
}

const AnimatedCounter = ({ from, to }: AnimatedCounterProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [displayNumber, setDisplayNumber] = useState(from)

    // const springNumberCount = useSpring(0, { bounce: 0, duration: 2000 })

    const springNumberCount = useSpring(from, {
        stiffness: 70, // Lower stiffness makes it more "stretchy"
        damping: 20, // Higher damping slows it down at the end
        mass: 1.5, // Higher mass makes it feel "heavier" near the end
        duration: 3000 // Slightly longer duration
    })

    useEffect(() => {
        if (isInView) {
            springNumberCount.set(to)
        }
    }, [isInView, to])

    useEffect(() => {
        const unsubcribe = springNumberCount.on('change', (value) => {
            if (to > 1000) {
                const progress = value / to
                const roundTo = progress > 0.9 ? 1 : 10
                setDisplayNumber(Math.round(value / roundTo) * roundTo)
            } else if (to > 100) {
                const progress = value / to
                if (progress > 0.9) {
                    setDisplayNumber(Math.round(value))
                } else {
                    setDisplayNumber(Math.round(value))
                }
            } else {
                const progress = value / to
                if (progress > 0.8) {
                    // Show 1 decimal place near the end
                    setDisplayNumber(Math.round(value * 10) / 10)
                } else {
                    setDisplayNumber(Math.round(value))
                }
            }
        })
        // springNumberCount.on('change', (value) => {
        //     setDisplayNumber(Math.round(value))
        // })

        return () => unsubcribe()
    }, [])

    return (
        <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {displayNumber.toLocaleString()}
        </motion.span>
    )
}

export default AnimatedCounter
