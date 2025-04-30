import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Association from './components/Association/Association'
import BlogSection from './components/Blog'
import CarouselSection from './components/Carousel/CarouselSection'
import Clients from './components/Clients'
import CustomerSection from './components/Customer'
import Footer from './components/Footer'
import GetADemo from './components/GetADemo'
import LearnmoreSection from './components/Learnmore'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import RatingSection from './components/Rating'
import { sections } from './constants'

const HomePage = () => {
    return (
        <main>
            <Navbar />
            <CarouselSection />
            <Clients />
            <Association />
            <LearnmoreSection data={sections.firstLearnMore} />
            <RatingSection />
            <LearnmoreSection data={sections.secondLearnMore} />
            <CustomerSection />
            <BlogSection />
            <GetADemo />
            <Footer />
        </main>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
