import { ChatWidget } from './components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a365d]">
        <div className="container-custom flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ed8936] rounded-lg flex items-center justify-center text-2xl">
              🚿
            </div>
            <span className="text-white text-2xl font-bold">Swift Plumbing</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/90 hover:text-[#ed8936] transition-colors">Home</a>
            <a href="#services" className="text-white/90 hover:text-[#ed8936] transition-colors">Services</a>
            <a href="#faq" className="text-white/90 hover:text-[#ed8936] transition-colors">FAQ</a>
            <a href="#contact" className="text-white/90 hover:text-[#ed8936] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <span className="text-white font-semibold hidden sm:block">📞 (555) 123-4567</span>
            <a href="#contact" className="btn-primary">Get Free Quote</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-bg py-20">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">✓ Licensed & Insured</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">⚡ Same-Day Service</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">📝 Free Estimates</span>
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight mb-5">
              Expert Plumbing Services You Can Trust
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Fast, reliable, and professional plumbing solutions for your home and business. Licensed, insured, and ready to help 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:5551234567" className="btn-primary text-lg">
                📞 Call (555) 123-4567
              </a>
              <a href="#contact" className="btn-secondary">
                Schedule Service
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
              <img 
                src="/images/plumber-photo-v4.png" 
                alt="Professional Plumber"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-[#f7fafc]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Our Plumbing Services</h2>
            <p className="text-[#718096] text-lg">From emergency repairs to full installations, we handle all your plumbing needs with expertise and professionalism.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                🚨
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Emergency Repairs</h3>
              <p className="text-[#718096] mb-4">Available 24/7 for urgent plumbing issues. Fast response times guaranteed.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Burst pipes</li>
                <li>• Gas leaks</li>
                <li>• Flooding</li>
                <li>• No hot water</li>
              </ul>
            </div>
            
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                💧
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Leak Detection & Repair</h3>
              <p className="text-[#718096] mb-4">Advanced technology to find and fix leaks before they cause major damage.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Hidden leaks</li>
                <li>• Pipe repairs</li>
                <li>• Faucet fixes</li>
                <li>• Toilet repairs</li>
              </ul>
            </div>
            
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                🚿
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Drain Cleaning</h3>
              <p className="text-[#718096] mb-4">Professional drain cleaning services to keep your plumbing flowing smoothly.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Clogged drains</li>
                <li>• Sewer lines</li>
                <li>• Hydro jetting</li>
                <li>• Camera inspection</li>
              </ul>
            </div>
            
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                🔥
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Water Heater Services</h3>
              <p className="text-[#718096] mb-4">Installation, repair, and maintenance of all water heater types.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Tank & tankless</li>
                <li>• Repairs</li>
                <li>• Replacements</li>
                <li>• Maintenance</li>
              </ul>
            </div>
            
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                🛁
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">Bathroom Plumbing</h3>
              <p className="text-[#718096] mb-4">Complete bathroom plumbing solutions from fixtures to full remodels.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Fixture installation</li>
                <li>• Shower repairs</li>
                <li>• Toilet installation</li>
                <li>• Remodeling</li>
              </ul>
            </div>
            
            <div className="card p-8 text-left">
              <div className="w-[60px] h-[60px] bg-[#ed8936] rounded-xl mb-5 flex items-center justify-center text-3xl">
                🔧
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">General Plumbing</h3>
              <p className="text-[#718096] mb-4">Comprehensive plumbing services for all your residential and commercial needs.</p>
              <ul className="text-[#718096] text-sm space-y-1">
                <li>• Pipe installation</li>
                <li>• Fixture repairs</li>
                <li>• Inspections</li>
                <li>• Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#f7fafc] rounded-full mx-auto mb-5 flex items-center justify-center text-4xl">
                ✅
              </div>
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Licensed & Insured</h3>
              <p className="text-[#718096] text-sm">Fully certified professionals you can trust</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#f7fafc] rounded-full mx-auto mb-5 flex items-center justify-center text-4xl">
                ⏰
              </div>
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">24/7 Emergency</h3>
              <p className="text-[#718096] text-sm">Available around the clock for urgent needs</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#f7fafc] rounded-full mx-auto mb-5 flex items-center justify-center text-4xl">
                💰
              </div>
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Upfront Pricing</h3>
              <p className="text-[#718096] text-sm">No hidden fees, always know the cost</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-[#f7fafc] rounded-full mx-auto mb-5 flex items-center justify-center text-4xl">
                🏆
              </div>
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Satisfaction Guaranteed</h3>
              <p className="text-[#718096] text-sm">90-day warranty on all repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-[#f7fafc]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#718096] text-lg">Find answers to common questions about our plumbing services. Don't see your question? Contact us directly!</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Do you offer 24/7 emergency plumbing services?</h3>
              <p className="text-[#718096]">Yes! We are available 24 hours a day, 7 days a week for emergency plumbing services. Call our emergency line anytime for immediate assistance.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">What areas do you service?</h3>
              <p className="text-[#718096]">We service the greater metro area within 25 miles of our location. Contact us to confirm we service your specific area.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Are your plumbers licensed and insured?</h3>
              <p className="text-[#718096]">Absolutely! All our plumbers are fully licensed, insured, and background-checked. We take pride in our professional team.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Do you provide free estimates?</h3>
              <p className="text-[#718096]">Yes, we provide free estimates on all projects. Contact us for a quote or use our AI chat to get a rough estimate.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">How quickly can you respond to a service call?</h3>
              <p className="text-[#718096]">We offer same-day service for most requests. Emergency calls are responded to within 1-2 hours. Scheduled appointments can be arranged at your convenience.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">What payment methods do you accept?</h3>
              <p className="text-[#718096]">We accept Visa, Mastercard, American Express, and checks. We also offer payment plans for larger projects.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Do you offer warranties on your work?</h3>
              <p className="text-[#718096]">Yes! We offer a 90-day warranty on all parts and labor. Extended warranties are available for certain services.</p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-bold text-[#1a365d] mb-2">Can you help with commercial plumbing needs?</h3>
              <p className="text-[#718096]">Absolutely! We handle both residential and commercial plumbing projects, including restaurants, offices, and retail spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#1a365d]">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "Swift Plumbing saved the day! They arrived within an hour and fixed our burst pipe. Professional and reasonably priced."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="/images/testimonial-1.png" 
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">Sarah Johnson</p>
                  <p className="text-white/70 text-sm">Local Homeowner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "We've used them for years. Always on time, clean work, and they explain everything before starting."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="/images/testimonial-2.png" 
                  alt="Mike Thompson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">Mike Thompson</p>
                  <p className="text-white/70 text-sm">Property Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-white/90 mb-6 leading-relaxed">
                "Best plumbers in the area! The AI chat answered all my questions before they even arrived."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ed8936] rounded-full flex items-center justify-center text-white font-semibold">EC</div>
                <div>
                  <p className="text-white font-semibold">Emily Chen</p>
                  <p className="text-white/70 text-sm">Local Resident</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#f7fafc]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1a365d] mb-5">Get In Touch</h2>
            <p className="text-[#718096] text-lg mb-8 leading-relaxed">
              Ready to schedule your service? Contact us today for a free estimate. We're here to help with all your plumbing needs.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ed8936] rounded-xl flex items-center justify-center text-xl">📍</div>
                <span className="text-[#2d3748]">123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ed8936] rounded-xl flex items-center justify-center text-xl">📞</div>
                <span className="text-[#2d3748]">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ed8936] rounded-xl flex items-center justify-center text-xl">✉️</div>
                <span className="text-[#2d3748]">info@swiftplumbing.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ed8936] rounded-xl flex items-center justify-center text-xl">🕐</div>
                <span className="text-[#2d3748]">Mon-Fri: 8am-6pm, Emergency: 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="card p-10">
            <form className="space-y-5">
              <div>
                <label className="block text-[#2d3748] font-semibold mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Smith"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#ed8936] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#2d3748] font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#ed8936] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#2d3748] font-semibold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#ed8936] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#2d3748] font-semibold mb-2">Message</label>
                <textarea 
                  placeholder="Tell us about your plumbing needs..."
                  rows={4}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-[#ed8936] transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a365d] py-10">
        <div className="container-custom text-center">
          <p className="text-white/70 mb-2">© 2024 Swift Plumbing. All rights reserved.</p>
          <p className="text-white/70">Licensed & Insured | Serving the Greater Metro Area</p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  )
}