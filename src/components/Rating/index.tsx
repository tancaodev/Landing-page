import { ratingSection } from '~/constants'
import RatingNumber from './RatingComponent/RatingNumber'

const RatingSection = () => {
    return (
        <div className='w-full bg-silver mt-6 md:mt-8 lg:mt-12'>
            <div className='flex flex-col md:flex-row px-4 md:px-8 lg:mx-36 py-8 md:py-12 lg:py-16 gap-8 md:gap-12 lg:gap-[72px]'>
                <div className='text-center md:text-left md:min-w-fit md:mr-8 lg:mr-32'>
                    <h1 className='text-2xl md:text-3xl lg:text-headline-2 font-semibold'>
                        Helping a local{' '}
                        <span className='block text-primary mt-1 md:mt-2'>business reinvent itself</span>
                    </h1>
                    <p className='text-sm  md:text-base lg:text-body-regular-2 text-[#18191F] mt-2 md:mt-3'>
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 gap-4 md:gap-[30px]'>
                    {ratingSection.map((rating) => (
                        <RatingNumber key={rating.id} data={rating} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RatingSection
