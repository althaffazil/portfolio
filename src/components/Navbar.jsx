import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-white text-xl font-bold"
        >
          Althaf Fazil
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">

          <li>
            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">

          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-300">

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-white transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar