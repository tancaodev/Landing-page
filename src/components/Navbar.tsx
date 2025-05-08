import { useState } from 'react'

import { navigation } from '../constants'
import { pageLogo } from '../utils'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='w-full bg-silver py-8'>
            <nav className='flex items-center justify-between mx-4 md:mx-8 lg:mx-36'>
                <img src={pageLogo} alt='Logo' width={155} height={25} />

                {/* Mobile Menu Button */}
                <button className='lg:hidden p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        {isMenuOpen ? (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ) : (
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex justify-center gap-12'>
                    {navigation.navLists.map((nav) => (
                        <div
                            key={nav}
                            className='text-body-regular-2 hover:text-body-md-2 transition-all cursor-pointer'
                        >
                            {nav}
                        </div>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className='hidden lg:flex gap-3'>
                    <button className='login-btn text-body-regular-3 px-5 py-2.5'>Login</button>
                    <button className='btn-primary text-body-regular-3 px-5 py-2.5'>Sign up</button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='absolute z-10 top-24 left-0 right-0 bg-silver p-4 lg:hidden'>
                        <div className='flex flex-col gap-4'>
                            {navigation.navLists.map((nav) => (
                                <div
                                    key={nav}
                                    className='text-body-regular-2 hover:text-body-md-2 transition-all cursor-pointer'
                                >
                                    {nav}
                                </div>
                            ))}
                            <div className='flex flex-col gap-3 mt-4'>
                                <button className='login-btn text-body-regular-3 w-full py-2.5'>Login</button>
                                <button className='btn-primary text-body-regular-3 w-full py-2.5'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar
