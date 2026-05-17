import { useState } from 'react'
import ContactModal from '../components/ContactModal'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='contact' className="pt-32 pb-32 bg-zinc-950 text-white">
        
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Section Header */}
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            I'm always interested in discussing software engineering,
            scalable systems, frontend architecture, backend services,
            and new project opportunities.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              Email Me
            </button>

            <a
              href="https://github.com/althaffazil"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/althaffazil"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Contact