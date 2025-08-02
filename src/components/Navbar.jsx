function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Ele Portfolio</h1>
        <ul className='flex gap-6'>
          <li><a href='#about' className='hover:underline'>Sobre mí</a></li>
          <li><a href='#projects' className='hover:underline'>Proyectos</a></li>
          <li><a href='#contact' className='hover:underline'>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar