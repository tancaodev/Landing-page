interface learnmoreSectionProps {
    data: {
        img: string
        title: string
        description: string
    }
}
const LearnmoreSection: React.FC<learnmoreSectionProps> = ({ data }) => {
    return (
        <div className='w-full bg-white mt-10'>
            <div className='flex mx-36 items-center gap-12'>
                <img src={data.img} alt={`Learn more`} />

                <div className='mr-16'>
                    <h1 className='text-headline-2 text-d-grey font-semibold'>{data.title}</h1>
                    <p className='text-body-regular-3 text-grey mt-4'>{data.description}</p>
                    <button className='btn-primary mt-8'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default LearnmoreSection
