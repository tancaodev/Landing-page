import AnimatedCounter from './AnimatedCounter'

interface ratingNumberProps {
    data: {
        id: number
        img: string
        title: string
        number: number
    }
}

const RatingNumber: React.FC<ratingNumberProps> = ({ data }) => {
    return (
        <div className='flex items-center gap-2 md:gap-3 lg:gap-4'>
            <img
                src={data.img}
                alt={`Rating ${data.id}`}
                width={48}
                height={48}
                className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 my-[6px]'
            />

            <div className='min-w-0'>
                <h1 className='text-lg md:text-xl lg:text-headline-3 text-d-grey font-bold'>
                    <AnimatedCounter from={0} to={data.number} />
                </h1>
                <p className='text-xs md:text-sm lg:text-body-regular-2 text-grey truncate'>{data.title}</p>
            </div>
        </div>
    )
}

export default RatingNumber
