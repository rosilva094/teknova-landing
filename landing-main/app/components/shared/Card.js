'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function Card({ icon, title, summary, details }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => setIsOpen(true)
  const handleMouseLeave = () => setIsOpen(false)
  const handleClick = () => setIsOpen((prev) => !prev)

  return (
    <div
      className="relative w-full min-h-[210px] bg-background border border-accent rounded-4xl shadow-md transition-shadow hover:shadow-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Contenido principal */}
      <div className="p-6 pb-5">
        <div className="text-center mb-3">
          <h3 className="text-2xl font-semibold text-text-dark">{title}</h3>
          <div className="h-1 w-1/5 bg-accent mt-2 mx-auto rounded-full" />
        </div>
        <p className="text-text-dark text-xl">{summary}</p>
          <div className="relative flex justify-center items-center z-10 text-[90px] mt-2">{icon}</div>
      </div>

      {/* Bloque oculto que sube como cortina */}
      <motion.div
        initial={false}
        animate={{ y: isOpen ? 0 : 100 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute bottom-[5px] left-0 right-0 bg-background z-10 rounded-t-lg shadow-inner"
      >
        {/* Barra controladora completa como botón */}
        <button
          onClick={handleClick}
          className="w-full cursor-pointer flex items-center justify-center py-2 border border-accent bg-secondary text-lg font-semibold transition focus:outline-none"
        >
          {isOpen ? (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
            </>
          ) : (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
            </>
          )}
        </button>

        {/* Detalle */}
        <div className="h-[95px] px-4 py-4 text-base italic text-text-dark text-center">
          "{details}"
        </div>
      </motion.div>
    </div>
  )
}
