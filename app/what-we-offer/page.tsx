import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function WhatWeOfferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-blue-600">We Offer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A variety of small business funding options to suit any need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Revenue Based Decisions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="mb-8">
              <img
                src="/revenue-based-financing-illustration-with-laptop-a.jpg"
                alt="Revenue Based Financing"
                className="w-full h-48 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Revenue Based <span className="text-blue-600">Decisions</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Say goodbye to lousy, statistically driven funding decisions and say hello to a tailored, holistic
              approach to your financing. Specialty Capital looks beyond the numbers and can often approve you for
              financing with just four months of stable or increasing revenue, regardless of your credit score or
              history.
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
              Learn More →
            </Button>
          </div>

          {/* Prepayment Discounts */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="mb-8">
              <img src="/prepayment-discounts-illustration-with-documents-a.jpg" alt="Prepayment Discounts" className="w-full h-48 object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Prepayment <span className="text-blue-600">Discounts</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe in offering the most affordable solutions possible to our clients. That's why we offer
              industry-leading prepayment discounts to drastically reduce the cost of your financing and gain valuable
              pay history — perfect for bridging accounts receivable gaps and more.
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
              Learn More →
            </Button>
          </div>

          {/* Multi-Draw Advances */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="mb-8">
              <img src="/multi-draw-advances-illustration-with-credit-cards.jpg" alt="Multi-Draw Advances" className="w-full h-48 object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Multi-Draw <span className="text-blue-600">Advances</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Need flexibility with your financing? We offer multi-draw advances that allow you to easily access capital
              as you need it, rather than a large lump sum. This cost-effective solution limits friction and enhances
              flexibility so you can exceed your business goals without the extra burden of unnecessary debt.
            </p>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
              Learn More →
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get <span className="text-blue-600">Started?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our financing experts are standing by to help you find the perfect funding solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Apply Now</Button>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent px-8 py-3"
            >
              Speak with Expert
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
