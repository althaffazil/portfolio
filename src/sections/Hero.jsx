import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Main Content */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 text-center px-6 max-w-4xl">
        
        <p className="text-purple-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Software Engineer
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Building Intelligent <br />
          AI-Powered Solutions
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I design and develop scalable, high-performance applications
          with modern technologies focused on user experience,
          maintainability, and performance.
        </p>

        {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            
            <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition duration-300"
            >
                View Projects
            </a>

            <a
                href="#contact"
                className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
            >
                Contact Me
            </a>

            </div>

      </motion.div>
    </section>
  )
}

export default Hero