import { ratingSection } from '~/constants'
import RatingNumber from './RatingComponent/RatingNumber'

const RatingSection = () => {
    return (
        <div className='w-full bg-silver mt-12'>
            <div className='flex items-center mx-36 py-16 gap-[72px]'>
                <div className='min-w-fit mr-32'>
                    <h1 className='text-headline-2 font-semibold'>
                        Helping a local <span className='block text-primary'>business reinvent itself</span>
                    </h1>
                    <p className='text-body-regular-2 text-[#18191F] mt-2'>
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 gap-[30px]'>
                    {ratingSection.map((rating) => (
                        <RatingNumber key={rating.id} data={rating} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RatingSection
