import { useEffect, useRef, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '~/components/ui/carousel'
import { carousel } from '~/constants'
import Autoplay from 'embla-carousel-autoplay'

const CarouselSection = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))

    useEffect(() => {
        if (!carouselApi) return

        const updateCarouselState = () => {
            setCurrentIndex(carouselApi.selectedScrollSnap())
            setTotalItems(carouselApi.scrollSnapList().length)
        }

        updateCarouselState()

        carouselApi.on('select', updateCarouselState)

        return () => {
            carouselApi.off('select', updateCarouselState)
        }
    }, [carouselApi])

    const scrollToIndex = (index: number) => {
        carouselApi?.scrollTo(index)
    }

    return (
        <Carousel setApi={setCarouselApi} className='w-full bg-silver' plugins={[plugin.current]}>
            <CarouselContent className='w-full h-5/6 ml-0'>
                {carousel.highlights.map((carousel) => (
                    <CarouselItem
                        key={carousel.id}
                        className='flex flex-col lg:flex-row px-4 md:px-8 lg:px-36 py-12 lg:py-24 justify-between items-center'
                    >
                        <div className='text-center lg:text-left mb-8 lg:mb-0'>
                            <h1 className='text-3xl md:text-4xl lg:text-headline-1 text-d-grey'>
                                {carousel.title.black}
                            </h1>
                            <h1 className='text-3xl md:text-4xl lg:text-headline-1 text-primary'>
                                {carousel.title.green}
                            </h1>
                            <p className='text-base md:text-lg lg:text-body-regular-2 text-grey mt-4 max-w-[600px] mx-auto lg:mx-0'>
                                {carousel.description}
                            </p>
                            <button className='btn-primary mt-8 px-6 py-3 text-sm md:text-base'>
                                {carousel.button}
                            </button>
                        </div>
                        <div className='w-full lg:w-auto'>
                            <img
                                src={carousel.image}
                                alt={`Image ${carousel.id}`}
                                className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-none mx-auto'
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* Navigation Dots */}
            <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20'>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-2 h-2 md:w-[10px] md:h-[10px] rounded-full ${
                            currentIndex === index ? 'bg-primary' : 'bg-primary opacity-30'
                        }`}
                    />
                ))}
            </div>
        </Carousel>
    )
}

export default CarouselSection
