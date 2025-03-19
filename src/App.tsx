import Association from './components/Association/Association'
import BlogSection from './components/Blog'
import CarouselSection from './components/Carousel/CarouselSection'
import Clients from './components/Clients'
import CustomerSection from './components/Customer'
import LearnmoreSection from './components/Learnmore'
import Navbar from './components/Navbar'
import RatingSection from './components/Rating'
import { firstLearnMoreSection, secondLearnMoreSection } from './constants'

function App() {
    return (
        <main>
            <Navbar />
            <CarouselSection />
            <Clients />
            <Association />
            <LearnmoreSection data={firstLearnMoreSection} />
            <RatingSection />
            <LearnmoreSection data={secondLearnMoreSection} />
            <CustomerSection />
            <BlogSection />
        </main>
    )
}

export default App
