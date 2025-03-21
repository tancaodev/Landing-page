import { clients } from '~/constants'
import { userImage } from '~/utils'
import AnimatedButton from '../ArrowButton'

const CustomerSection = () => {
    return (
        <div className='w-full bg-silver mt-12'>
            <div className='flex items-center py-8 mx-36 gap-[78px]'>
                <div className='block min-w-fit'>
                    <img src={userImage} alt='User image' width={326} height={326} className='object-contain' />
                </div>

                <div>
                    <p className='text-body-regular-2 text-grey'>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                        gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                        nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
                        malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
                        efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>

                    <div className='mt-4'>
                        <h1 className='text-headline-4 text-primary'>Tim Smith</h1>
                        <p className='text-body-regular-2 text-light-grey mt-2'>
                            British Dragon Boat Racing Association
                        </p>
                    </div>

                    <div className='flex mt-8 gap-8'>
                        <div className='flex gap-10'>
                            {clients.logos.slice(0, 6).map((img, index) => (
                                <img key={index} src={img} alt={`Client ${index}`} />
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
