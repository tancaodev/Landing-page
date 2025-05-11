import { clients } from '~/constants'
import { userImage } from '~/utils'
import AnimatedButton from '../ArrowButton'

const CustomerSection = () => {
    return (
        <div className='w-full bg-silver mt-12'>
            <div className='flex flex-col lg:flex-row items-center py-8 px-4 md:px-8 lg:mx-36 gap-8 lg:gap-[78px]'>
                <div className='block w-full lg:w-[326px] aspect-square'>
                    <img
                        src={userImage}
                        alt='User image'
                        width={326}
                        height={326}
                        className='w-full h-full object-cover'
                        loading="eager"
                    />
                </div>

                <div className='w-full'>
                    <p className='text-sm md:text-base lg:text-body-regular-2 text-grey'>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                        gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                        nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
                        malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
                        efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>

                    <div className='mt-4'>
                        <h1 className='text-xl md:text-2xl lg:text-headline-4 text-primary'>Tim Smith</h1>
                        <p className='text-sm md:text-base lg:text-body-regular-2 text-light-grey mt-2'>
                            British Dragon Boat Racing Association
                        </p>
                    </div>

                    <div className='flex flex-col xl:flex-row mt-8 gap-8'>
                        <div className='grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-10'>
                            {clients.logos.slice(0, 6).map((img, index) => (
                                <div key={index} className="aspect-square w-[48px]">
                                    <img
                                        src={img}
                                        alt={`Client ${index}`}
                                        width={48}
                                        height={48}
                                        className='w-full h-full object-contain'
                                        loading="eager"
                                    />
                                </div>
                            ))}
                        </div>

                        <AnimatedButton text='Meet all customers' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSection
