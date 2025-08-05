import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className='flex-grow pt-20 text-center'>
        <h1 className='text-4xl font-bold'>¡Bienvenido a mi landing page!</h1>
        <p className='mt-4 text-gray-600'>Este es un ejemplo con Vite + Tailwind</p>
      </main>
      <Footer />
    </div>
  )
}

export default App