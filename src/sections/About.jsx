import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="pt-32 pb-32 bg-zinc-950 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Designing Smart Solutions with Modern Technology
            </h2>

          </div>

          {/* Right Side */}
          <div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a Computer Science graduate passionate about Artificial
              Intelligence, Machine Learning, and modern software engineering.
              I enjoy building AI-powered applications and solving real-world
              problems through clean, scalable technology.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Currently focused on growing as an AI/ML engineer while actively
              seeking opportunities to contribute, learn, and build impactful
              products with modern technologies.
            </p>

          </div>

        </div>

      </motion.div>
    </section>
  )
}

export default About