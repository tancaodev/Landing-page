import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import CarouselSection from './components/Carousel/CarouselSection'
import { firstLearnMoreSection, secondLearnMoreSection } from './constants'

// Lazy load các components không cần thiết ngay lập tức
const Association = lazy(() => import('./components/Association/Association'))
const BlogSection = lazy(() => import('./components/Blog'))
const Clients = lazy(() => import('./components/Clients'))
const CustomerSection = lazy(() => import('./components/Customer'))
const Footer = lazy(() => import('./components/Footer'))
const GetADemo = lazy(() => import('./components/GetADemo'))
const LearnmoreSection = lazy(() => import('./components/Learnmore'))
const RatingSection = lazy(() => import('./components/Rating'))

function App() {
    return (
        <main>
            <Navbar />
            <CarouselSection />
            <Clients />
            <Suspense fallback={<div>Loading...</div>}>
                <Association />
                <LearnmoreSection data={firstLearnMoreSection} />
                <RatingSection />
                <LearnmoreSection data={secondLearnMoreSection} />
                <CustomerSection />
                <BlogSection />
                <GetADemo />
                <Footer />
            </Suspense>
        </main>
    )
}

export default App
