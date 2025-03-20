import { blogSection } from '~/constants'
import BlogCard from './BlogCard'

const BlogSection = () => {
    return (
        <div className='w-full bg-white mt-12 pb-24'>
            <div className='mx-36'>
                <div className='text-center mx-5'>
                    <h1 className='text-headline-2 text-d-grey'>Caring is the new marketing</h1>
                    <p className='w-[55%] text-body-regular-2 text-grey m-auto mt-2'>
                        The Nexcent blog is the best place to read about the latest membership insights, trends and
                        more. See who's joining the community, read about how our community are increasing their
                        membership income and lot's more.​
                    </p>
                </div>

                <div className='flex gap-6 justify-center'>
                    {blogSection.map((blog) => (
                        <BlogCard key={blog.id} data={blog} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection
