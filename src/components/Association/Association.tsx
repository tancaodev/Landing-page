import { associateSection } from '~/constants'
import CardAssociate from './CardAssociate'

const Association = () => {
    return (
        <div className='w-full bg-white mt-10'>
            <div className='w-fit text-center m-auto'>
                <h1 className='text-headline-2 text-d-grey'>
                    Manage your entire community <span className='block'>in a single system </span>
                </h1>
                <p className='text-body-regular-2 text-grey mt-2'>Who is Nextcent suitable for?</p>
            </div>

            <div className='flex justify-between mt-4 mx-36'>
                {associateSection.map((card) => (
                    <CardAssociate key={card.id} data={card} />
                ))}
            </div>
        </div>
    )
}

export default Association
