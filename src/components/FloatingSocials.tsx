'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const FloatingSocials = () => {
    return (
        <div className="fixed bottom-0 right-0 z-[9999] p-4 flex flex-col items-end gap-3 pointer-events-none">
            <div className="flex flex-col gap-3 pointer-events-auto mr-2">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        href="https://www.linkedin.com/in/anubhav-raj-singh-88a03b2b5/"
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-400 hover:text-white hover:bg-white/20 hover:border-[#0077b5]/50 hover:glow-linkedin transition-all duration-300 shadow-xl"
                    >
                        <Linkedin size={20} />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <Link
                        href="https://github.com/Anubhav88s"
                        target="_blank"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-400 hover:text-white hover:bg-white/20 hover:border-white/40 hover:glow-github transition-all duration-300 shadow-xl"
                    >
                        <Github size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default FloatingSocials
