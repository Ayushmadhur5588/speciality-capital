import { LoanApplicationForm } from "@/components/loan-application-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      

      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Get the funding your business needs to <span className="text-primary">grow</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Complete our secure application form and get access to tailored financing solutions designed to drive your
              business forward.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LoanApplicationFoam />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-primary">We Offer</span>
            </h2>
            <p className="text-xl text-gray-600">A variety of small business funding options to suit any need.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Revenue Based Decisions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="mb-8">
                <img
                  src="/revenue-based-financing-illustration-with-laptop-a.jpg"
                  alt="Revenue Based Financing"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Revenue Based</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Decisions</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Say goodbye to lousy, statistically driven funding decisions and say hello to a tailored, holistic
                approach to your financing. Specialty Capital looks beyond the numbers and can often approve you for
                financing with just four months of stable or increasing revenue, regardless of your credit score or
                history.
              </p>
              <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Prepayment Discounts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="mb-8">
                <img
                  src="/prepayment-discounts-illustration-with-documents-a.jpg"
                  alt="Prepayment Discounts"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Prepayment</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Discounts</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                We believe in offering the most affordable solutions possible to our clients. That's why we offer
                industry-leading prepayment discounts to drastically reduce the cost of your financing and gain valuable
                pay history — perfect for bridging accounts receivable gaps and more.
              </p>
              <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Multi-Draw Advances */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="mb-8">
                <img
                  src="/multi-draw-advances-illustration-with-credit-cards.jpg"
                  alt="Multi-Draw Advances"
                  className="w-full h-48 object-contain mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Multi-Draw</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Advances</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Need flexibility with your financing? We offer multi-draw advances that allow you to easily access
                capital as you need it, rather than a large lump sum. This cost-effective solution limits friction and
                enhances flexibility so you can exceed your business goals without the extra burden of unnecessary debt.
              </p>
              <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-xl text-gray-600">The process is simple.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Tell your story</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Because of our unique, tailored approach to financing, any additional insights into your business can
                help expedite the process and allow you to secure financing quickly. Submit your application in minutes
                and let us handle the rest!
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">Application</div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-3 rounded"></div>
                  <div className="bg-gray-200 h-3 rounded w-3/4"></div>
                  <div className="bg-gray-200 h-3 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Fast approval</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Once you submit your application, our team will work diligently to find the best offers for your
                business. We thoroughly analyze your unique situation and tailor offers that align with your financial
                needs and goals.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">Email</div>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    Congratulations! You've been approved for your loan with Specialty Capital!
                  </div>
                  <div className="bg-gray-200 h-2 rounded w-full"></div>
                  <div className="text-xs text-gray-500 text-center">Underwriting</div>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className={`h-8 rounded ${i < 6 ? "bg-primary" : "bg-gray-200"}`}></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-center">Jan Feb Mar Apr May Jun Jul Aug</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Grow Your Business</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                After accepting your financing, your funds will be dispersed so you can explore new opportunities to
                expand your business. Our financing is not designed to just sustain your business but to drive it
                forward so you can reach your goals.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded mb-3">
                  Specialty Capital Contract
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-2 rounded"></div>
                    <div className="bg-gray-200 h-2 rounded w-4/5"></div>
                    <div className="bg-gray-200 h-2 rounded w-3/5"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-primary text-sm font-medium">✓</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Draw terms</div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Term</span>
                        <span>12 MONTHS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rate</span>
                        <span>—</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Available Credit</span>
                        <span>$75,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Your Draw</span>
                        <span>$45,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We have 500+ <span className="text-primary">5-star reviews</span>
            </h2>
            <p className="text-xl text-gray-600">Check out what our customers have to say.</p>
          </div>

          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">5.0</span>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">502 reviews</span>
              </div>
            </div>
          </div>

          {/* Fixed-size review cards in a grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Zach Martinez</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "Specialty Capital provided exceptional service throughout the entire process. Their team was
                professional, knowledgeable, and made securing funding for my business incredibly smooth."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Bethany Hunt</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "Kevin at Specialty Capital is outstanding! He was professional, knowledgeable, and made the entire
                process smooth and stress-free. His clear communication and dedication truly set them apart."
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Jo Marks</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "Outstanding Service and Financial Expertise! Their team is professional, knowledgeable, and truly
                dedicated to helping businesses access the capital they need. The process was smooth and efficient."
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Maria Rodriguez</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "The funding process was incredibly fast and transparent. Specialty Capital helped us expand our
                restaurant chain with flexible financing options that worked perfectly for our business model."
              </p>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">David Chen</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "Quick approval and competitive rates. The team understood our tech startup's unique needs and provided
                flexible terms that helped us scale rapidly."
              </p>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-64 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Sarah Johnson</h4>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                "Excellent customer service and transparent communication throughout the entire process. They made
                business financing simple and stress-free."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600">Contact us today to discuss your business financing needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">Speak with our financing experts</p>
                  <p className="text-primary font-semibold">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">Get answers to your questions</p>
                  <p className="text-primary font-semibold">info@specialtycapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your financing needs..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  What are the <span className="text-primary">qualifications?</span>
                </h2>
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Annual revenue greater than $250,000</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Time in business of at least 1 year</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Fico Score of 550 or greater</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
