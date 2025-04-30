import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-black text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you are looking for does not exist</p>
            <Link 
                to="/" 
                className="px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-primary-green/90 transition-colors"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound 