import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

const ChevronDown = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export function Header() {
  return (
    <header className="bg-white/1 border-b border-gray-100 backdrop-blur-md sticky top-0 z-50">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/specialty-capital-logo.png"
            alt="Specialty Capital"
            width={200}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
              <span>Products</span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-4">
              <DropdownMenuItem className="flex flex-col items-start p-4 hover:bg-gray-50">
                <h3 className="font-semibold text-blue-600 mb-2">Revenue Based Financing</h3>
                <p className="text-sm text-gray-600">
                  Get quick and affordable access to capital based on your business's revenue. Our experts take the
                  guess work out of financing so you can focus on running your business.
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-4 hover:bg-gray-50">
                <h3 className="font-semibold text-blue-600 mb-2">Prepayment Discounts</h3>
                <p className="text-sm text-gray-600">
                  Lower the cost of financing with industry leading prepayment discounts so you can expand your
                  operations and grow your business.
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-4 hover:bg-gray-50">
                <h3 className="font-semibold text-blue-600 mb-2">Multi-Draw Advances</h3>
                <p className="text-sm text-gray-600">
                  Get approved for higher limits with multi-draw advances that offer more flexibility and limited
                  friction to keep your business moving.
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Company Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
              <span>Company</span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-4">
              <DropdownMenuItem className="flex flex-col items-start p-4 hover:bg-gray-50">
                <h3 className="font-semibold text-blue-600 mb-2">About Us</h3>
                <p className="text-sm text-gray-600">
                  Experienced financing experts that go the extra mile to understand your unique business and needs.
                </p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-4 hover:bg-gray-50">
                <h3 className="font-semibold text-blue-600 mb-2">Contact</h3>
                <p className="text-sm text-gray-600">
                  Please get in touch and our expert support team will answer all your questions.
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Links */}
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Resources</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Partners</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Why Specialty</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
          >
            Partner Sign Up 
          </Button>
          <Link href="/contact">
            <Button className="bg-[#4631b3] hover:bg-[#352690] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
