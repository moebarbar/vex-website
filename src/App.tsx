import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Story } from './components/Story'
import { Investing } from './components/Investing'
import { Building } from './components/Building'
import { Advisory } from './components/Advisory'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Investing />
      <Building />
      <Advisory />
      <Contact />
      <Footer />
    </div>
  )
}
