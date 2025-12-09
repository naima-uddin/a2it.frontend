import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-500">A2IT</span>
              <span className="text-yellow-500"> STUDIOS</span>
            </h3>
            <p className="text-gray-400 text-sm">
              We're a full-service creative digital marketing agency, collaborating with brands all over the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/design-development" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-blue-500 transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/seo-sem-ppc" className="text-gray-400 hover:text-blue-500 transition-colors">
                  SEO / SEM / PPC
                </Link>
              </li>
              <li>
                <Link href="/services/erp-system" className="text-gray-400 hover:text-blue-500 transition-colors">
                  ERP System
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <strong className="text-white">Address:</strong><br />
                Plot No 470, Road No 06 (Old 29),<br />
                DOHS Mirpur, Dhaka Division, Bangladesh
              </p>
              <p>
                <strong className="text-white">Phone:</strong><br />
                +880 1848-937387
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                info@a2itltd.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} A2IT Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
