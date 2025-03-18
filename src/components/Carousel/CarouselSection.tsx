import { useEffect, useRef, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '~/components/ui/carousel'
import { highlightsCarousel } from '~/constants'
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
                {highlightsCarousel.map((carousel) => (
                    <CarouselItem key={carousel.id} className='flex px-36 py-24 justify-between items-center'>
                        <div>
                            <h1 className='text-headline-1 text-d-grey'>{carousel.title.black}</h1>
                            <h1 className='text-headline-1 text-primary'>{carousel.title.green}</h1>
                            <p className='text-body-regular-2 text-grey mt-4'>{carousel.description}</p>
                            <button className='btn-primary mt-8'>{carousel.button}</button>
                        </div>
                        <img src={carousel.image} alt={`Image` + carousel.id} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* Navigation Dots */}
            <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20'>
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`w-[10px] h-[10px] rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-primary opacity-30'}`}
                    />
                ))}
            </div>
        </Carousel>
    )
}

export default CarouselSection
