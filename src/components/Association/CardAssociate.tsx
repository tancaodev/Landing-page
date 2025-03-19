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
        <div className='mx-8 my-6 max-w-[300px] shadow-card'>
            <div className='flex flex-col text-center items-center mx-4'>
                <img src={data.img} alt={`Associate ${data.id}`} width={64} height={56} />
                <h1
                    className={`text-headline-3 text-d-grey line-clamp-2 font-bold mt-4 ${data.id === 3 ? 'mx-[18px]' : ''}`}
                >
                    {data.title}
                </h1>
            </div>
            <div className="mt-2">
                <p className='text-body-regular-3 text-grey text-center'>{data.description}</p>
            </div>
        </div>
    )
}

export default CardAssociate
