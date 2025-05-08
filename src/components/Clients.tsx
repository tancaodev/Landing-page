import { clients } from '~/constants'
import { pageLogo } from '../utils'

const Clients = () => {
    return (
        <div className='w-full bg-white mt-6 md:mt-8 lg:mt-10 enable-animation'>
            <div className='text-center px-4 md:px-8 lg:mx-40'>
                <h1 className='text-2xl md:text-3xl lg:text-headline-2 text-d-grey'>Our Clients</h1>
                <p className='mt-2 text-sm md:text-base lg:text-body-regular-2 text-grey max-w-[600px] mx-auto'>
                    We have been working with some Fortune 500+ clients
                </p>
            </div>
            <div className='mt-4 md:mt-6 lg:mt-8 marquee fadeout-horizontal'>
                <div className='marquee__content flex items-center'>
                    {clients.logos.concat(clients.logos).map((img, index) => (
                        <div key={`client-${index}`} className='marquee__item'>
                            <img
                                src={img || pageLogo}
                                alt={`Client ${(index % clients.logos.length) + 1}`}
                                className='w-20 h-auto object-contain'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
