const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    link: 'https://github.com/eleBlue7/proyecto1'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    link: 'https://github.com/eleBlue7/proyecto2'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    link: 'https://github.com/eleBlue7/proyecto3'
  }
]

function Projects() {
  return (
    <section id='projects' className='py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Proyectos</h2>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project) => (
            <div key={project.title} className='bg-white rounded-lg shadow-md p-6 flex flex-col'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-600 mb-4 flex-grow'>{project.description}</p>
              <a href={project.link} target='_blank' rel='noreferrer' className='text-blue-500 hover:underline mt-auto'>
                Ver más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects