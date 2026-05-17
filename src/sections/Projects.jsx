import { motion } from 'framer-motion'


const projects = [
  {
    title: "Melanoma Detection and Segmentation",
    description:
      "An end-to-end deep learning system for automated skin lesion segmentation and melanoma classification.",
    tech: [" PyTorch", "OpenCV", "Scikit-learn"],
    github: "https://github.com/althaffazil/melanoma-detection-system",
    live: "https://melanoma-detection-system.streamlit.app/",
  },
  {
    title: "Aerial Human Detection System",
    description:
      "A YOLOv8-based aerial small-object detection system for identifying and counting people in drone imagery.",
    tech: ["YOLOv8", "OpenCV", "Matplotlib"],
    github: "https://github.com/althaffazil/aerial-human-detection",
    live: null,
  },
  {
    title: "Toxic Comment Classification System",
    description:
      "A production-ready multi-label toxic comment classification service powered by a fine-tuned DistilBERT model.",
    tech: ["PyTorch", "Flask", "HuggingFace"],
    github: "https://github.com/althaffazil/toxic-comment-classifier",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 pb-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div className="bg-zinc-950 border border-gray-800 rounded-2xl p-8 hover:border-purple-500 hover:-translate-y-2 transition duration-300"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-black border border-gray-700 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-white hover:text-black transition cursor-pointer"
                >
                  GitHub
                </a>

                <a
                  href={project.live || undefined}
                  target={project.live ? "_blank" : undefined}
                  rel={project.live ? "noreferrer" : undefined}
                  className={`px-4 py-2 rounded-lg transition ${
                    project.live
                      ? 'bg-white text-black hover:bg-gray-200 cursor-pointer'
                      : 'bg-white text-black opacity-40 cursor-default pointer-events-none'
                  }`}
                >
                  Live Demo
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
