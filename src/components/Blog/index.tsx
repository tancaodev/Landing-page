import { blogSection } from '~/constants'
import BlogCard from './BlogCard'

const BlogSection = () => {
    return (
        <div className='w-full bg-white mt-12 pb-12 md:pb-24'>
            <div className='px-4 md:px-8 lg:mx-36'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-headline-2 text-d-grey'>Caring is the new marketing</h1>
                    <p className='w-full md:w-[75%] lg:w-[55%] text-sm md:text-base lg:text-body-regular-2 text-grey m-auto mt-2'>
                        The Nexcent blog is the best place to read about the latest membership insights, trends and
                        more. See who's joining the community, read about how our community are increasing their
                        membership income and lot's more.​
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-6 justify-center mt-8 md:mt-12'>
                    {blogSection.map((blog) => (
                        <BlogCard key={blog.id} data={blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection
