function Contact() {
  return (
    <section id='contact' className='py-20 bg-gray-100'>
      <div className='max-w-4xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Contacto</h2>
        <p className='text-gray-700'>
          Si deseas colaborar o saber más sobre mi trabajo, escríbeme a{' '}
          <a href='mailto:eleuteriorasa@gmail.com' className='text-blue-500 hover:underline'>
            eleuteriorasa@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Contact