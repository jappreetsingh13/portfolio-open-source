import { skills } from '@/constants/data'

function Skills() {
  return (
     <section id="skills" className="py-24 max-md:py-12  px-2.5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills