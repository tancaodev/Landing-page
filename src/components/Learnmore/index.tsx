interface learnmoreSectionProps {
    data: {
        img: string
        title: string
        description: string
    }
}
const LearnmoreSection: React.FC<learnmoreSectionProps> = ({ data }) => {
    return (
        <div className='w-full bg-white mt-6 md:mt-8 lg:mt-10'>
            <div className='flex flex-col md:flex-row px-4 md:px-8 lg:mx-36 items-center gap-6 md:gap-8 lg:gap-12'>
                <img src={data.img} alt={`Learn more`} className='w-full md:w-1/2 lg:w-auto' />

                <div className='md:mr-8 lg:mr-16 text-center md:text-left'>
                    <h1 className='text-2xl md:text-3xl lg:text-headline-2 text-d-grey font-semibold'>{data.title}</h1>
                    <p className='text-sm md:text-base lg:text-body-regular-3 text-grey mt-3 md:mt-4'>
                        {data.description}
                    </p>
                    <button className='btn-primary mt-6 md:mt-8'>Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default LearnmoreSection
