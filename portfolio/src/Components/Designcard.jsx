import { motion } from "framer-motion";

export default function DesignCard({ design, index }) {
  return (
    <motion.div
      className="min-w-[300px] h-[400px] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 60 }}
    >
      <img
        src={design.image}
        alt={design.title}
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{design.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-300">
          {design.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-white/10 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
