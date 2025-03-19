import { clientsSection } from '~/constants'
import { pageLogo } from '../utils'

const Clients = () => {
    return (
        <div className='w-full bg-white mt-10 enable-animation'>
            <div className='text-center mx-40'>
                <h1 className='text-headline-2 text-d-grey'>Our Clients</h1>
                <p className='mt-2 text-body-regular-2 text-grey'>
                    We have been working with some Fortune 500+ clients
                </p>
            </div>
            <div className='flex gap-36 mx-36 mt-4 marquee fadeout-horizontal'>
                <div className='marquee__content'>
                    {clientsSection.concat(clientsSection).map((img, index) => (
                        <div key={`client-${index}`} className='marquee__item'>
                            <img src={img || pageLogo} alt={`Client ${(index % clientsSection.length) + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients
