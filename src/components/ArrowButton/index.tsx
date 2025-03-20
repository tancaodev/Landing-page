import { useState } from 'react'
import { motion } from 'framer-motion'

type ButtonTextProps = {
    text: string
    className?: string
}
const ArrowIcon = ({ isHovered }: { isHovered: boolean }) => {
    return (
        <motion.svg
            width='25'
            height='8'
            viewBox='0 0 14 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='inline-block'
            animate={{ width: isHovered ? 25 : 15, x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <path
                d='M10.2502 7.00018L12.7199 4.53045C13.0129 4.23755 13.0129 3.76266 12.7199 3.46976L10.2502 1.00003M12.5003 4.0001L1.5 4.00011'
                stroke='#4CAF4F'
                strokeWidth='1.1'
                strokeLinecap='round'
            />
        </motion.svg>
    )
}

const AnimatedButton = ({ text, className }: ButtonTextProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <button
            className={`text-headline-4 text-primary inline-flex items-center cursor-pointer ${className ? className : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className='mr-2'>{text}</span>
            <div className='w-[25px] flex items-center justify-start'>
                <ArrowIcon isHovered={isHovered} />
            </div>
        </button>
    )
}

export default AnimatedButton
