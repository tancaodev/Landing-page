import { associates } from '~/constants'
import CardAssociate from './CardAssociate'

const Association = () => {
    return (
        <div className='w-full bg-white mt-6 md:mt-8 lg:mt-10'>
            <div className='w-full md:w-fit text-center px-4 md:px-8 lg:mx-auto'>
                <h1 className='text-xl md:text-2xl lg:text-headline-2 text-d-grey'>
                    Manage your entire community <span className='block mt-1 md:mt-2'>in a single system</span>
                </h1>
                <p className='text-sm md:text-base lg:text-body-regular-2 text-grey mt-2 md:mt-3'>
                    Who is Nextcent suitable for?
                </p>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 mt-6 md:mt-8 lg:mt-12 px-4 md:px-8 lg:mx-36'>
                {associates.items.map((card) => (
                    <CardAssociate key={card.id} data={card} />
                ))}
            </div>
        </div>
    )
}

export default Association
