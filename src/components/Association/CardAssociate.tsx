interface AssociateCardProps {
    data: {
        id: number
        img: string
        title: string
        description: string
    }
}

const CardAssociate: React.FC<AssociateCardProps> = ({ data }) => {
    return (
        <div className='w-full min-[90rem]:max-w-[300px] mx-auto md:mx-8 my-4 md:my-6 shadow-card rounded-lg'>
            <div className='flex flex-col text-center items-center p-4 md:p-6'>
                <img
                    src={data.img}
                    alt={`Associate ${data.id}`}
                    width={64}
                    height={56}
                    className='w-12 h-12 md:w-16 md:h-14 lg:w-[64px] lg:h-[56px]'
                />
                <h1 className='text-lg md:text-xl lg:text-headline-3 text-d-grey line-clamp-2 font-bold mt-3 md:mt-4'>
                    {data.title}
                </h1>
            </div>
            <div className='px-4 md:px-6 pb-4 md:pb-6'>
                <p className='text-sm md:text-base lg:text-body-regular-3 text-grey text-center'>{data.description}</p>
            </div>
        </div>
    )
}

export default CardAssociate
