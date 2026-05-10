import { stats } from "@/constants/data";

function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
          >
            <h3 className="text-5xl font-bold text-violet-400">{item.value}</h3>

            <p className="mt-4 text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
