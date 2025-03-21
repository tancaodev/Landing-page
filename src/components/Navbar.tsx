import { navigation } from '../constants'
import { pageLogo } from '../utils'

const Navbar = () => {
    return (
        <header className='w-full bg-silver px-8 py-8'>
            <nav className='screen-max-width flex w-full items-center'>
                <img src={pageLogo} alt='Logo' width={155} height={25} />

                <div className='flex flex-1 justify-center gap-12 max-sm:hidden'>
                    {navigation.navLists.map((nav) => (
                        <div key={nav} className='text-body-regular-2 hover:text-body-md-2 transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>

                <div className='flex gap-3'>
                    <button
                        className='login-btn text-body-regular-3'
                        style={{
                            padding: '10px 20px'
                        }}
                    >
                        Login
                    </button>
                    <button
                        className='btn-primary text-body-regular-3'
                        style={{
                            padding: '10px 20px'
                        }}
                    >
                        Sign up
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
