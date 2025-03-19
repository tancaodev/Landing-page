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
        <div className='flex items-center gap-4'>
            <img src={data.img} alt={`Rating ${data.id}`} width={48} height={48} className='my-[6px]' />

            <div>
                <h1 className='text-headline-3 text-d-grey font-bold'>
                    <AnimatedCounter from={0} to={data.number} />
                </h1>
                <p className='text-body-regular-2 text-grey'>{data.title}</p>
            </div>
        </div>
    )
}

export default RatingNumber
