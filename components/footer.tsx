import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ballade Coffee</h3>
            <p className="text-green-100">Tempat penuh warna dan cerita.</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-green-100 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-green-100 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-green-100 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <ul className="space-y-2 text-green-100">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7AM - 9PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>8AM - 8PM</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <address className="not-italic text-green-100 space-y-2">
              <p>Jl. Kaliurang, Sumbersari, Jember</p>
              <p>Jember Town Square</p>
              <p className="hover:text-white transition-colors duration-300">0832 1821 9844</p>
              <p className="hover:text-white transition-colors duration-300">info@balladecoffee.com</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-800 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Ballade Coffee. Site by Archyst.</p>
        </div>
      </div>
    </footer>
  )
}
