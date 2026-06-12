import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import Model from './components/Model'
import Why from './components/Why'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Future from './components/Future'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="noise min-h-screen bg-obsidian text-stone">
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Model />
      <Why />
      <Stats />
      <Projects />
      <Future />
      <Contact />
      <Footer />
    </main>
  )
}
