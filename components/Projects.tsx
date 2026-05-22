import Image from "next/image";
import { projects } from "@/constants/data";

function Projects() {
  return (
    <section id="projects" className="py-24 px-2.5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="text-gray-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-violet-500/20 text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-violet-400 hover:text-violet-300">
                    Live Demo
                  </a>

                  <a href="#" className="text-cyan-400 hover:text-cyan-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
