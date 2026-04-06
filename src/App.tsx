import { lazy, Suspense } from 'react'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'

// Named-export components wrapped for React.lazy (which requires a default export)
const Story    = lazy(() => import('./components/Story').then(m => ({ default: m.Story })))
const Investing = lazy(() => import('./components/Investing').then(m => ({ default: m.Investing })))
const Building  = lazy(() => import('./components/Building').then(m => ({ default: m.Building })))
const Advisory  = lazy(() => import('./components/Advisory').then(m => ({ default: m.Advisory })))
const Contact   = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Footer    = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Suspense fallback={null}>
        <Story />
        <Investing />
        <Building />
        <Advisory />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}
