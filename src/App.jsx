import Navbar from './components/Navbar'

import Test from './components/test'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Footer from './components/Footer'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />
      <main className='flex-grow pt-20'>
        <section className='text-center mb-20'>
          <h1 className='text-4xl font-bold'>¡Bienvenido a mi landing page!</h1>
          <p className='mt-4 text-gray-600'>Este es un ejemplo con Vite + Tailwind</p>
        </section>
        <About />
        <Projects />
        <Contact />
        </main>
      <Footer />
    </div>
  )
}

export default App