import AnimatedButton from '~/components/ArrowButton'

type BlogDataProps = {
    data: {
        id: number
        img: string
        title: string
    }
}

const BlogCard = ({ data }: BlogDataProps) => {
    return (
        <div className='bg-white mt-16 md:mt-12 relative'>
            <img src={data.img} alt={`Blog ${data.id}`} className='w-full h-auto object-cover rounded-lg' />
            <div className='w-[90%] md:w-10/12 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-silver rounded-[8px] p-3 md:p-4 text-center shadow-md'>
                <h1 className='text-lg md:text-xl lg:text-headline-4 text-grey'>{data.title}</h1>
                <AnimatedButton text='Read more' className='mt-2 md:mt-4' />
            </div>
        </div>
    )
}

export default BlogCard
