'use client'

import { useState } from 'react'
import { ChatWidget } from './components/ChatWidget'
import {
  Wrench, Droplets, Flame, ShowerHead, AlertTriangle, Settings2,
  Phone, MapPin, Mail, Clock, CheckCircle2, Shield, Star,
  ChevronDown, ArrowRight, Menu, X, BadgeCheck, Zap, FileText
} from 'lucide-react'

/* ─── Mobile Nav ──────────────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <nav
        className="absolute top-0 right-0 h-full w-72 bg-[#0F172A] shadow-2xl flex flex-col p-6 gap-2"
        style={{ animation: 'slideUp 0.22s ease-out' }}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        {(['Home', 'Services', 'FAQ', 'Contact'] as const).map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="mt-auto pt-6 border-t border-white/10">
          <a href="tel:5551234567" className="btn-primary w-full justify-center text-base">
            <Phone size={18} />
            (555) 123-4567
          </a>
        </div>
      </nav>
    </div>
  )
}

/* ─── FAQ Item ────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-[#0F172A] text-base leading-snug group-hover:text-[#2563EB] transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            open ? 'bg-[#2563EB] text-white rotate-180' : 'bg-[#F1F5F9] text-[#64748B]'
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <p className="px-6 pb-6 text-[#64748B] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Service Card ────────────────────────────────────────── */
function ServiceCard({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: React.ElementType
  title: string
  desc: string
  items: string[]
}) {
  return (
    <div className="card p-8 flex flex-col gap-5 group">
      <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:scale-110 transition-transform duration-200">
        <Icon size={24} aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#0F172A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
      </div>
      <ul className="space-y-2 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-[#475569]">
            <CheckCircle2 size={14} className="text-[#2563EB] shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─── Stat Card ───────────────────────────────────────────── */
function StatCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white mb-5 shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const services = [
    { icon: AlertTriangle, title: 'Emergency Repairs', desc: 'Available 24/7 for urgent plumbing issues. Fast response times guaranteed.', items: ['Burst pipes', 'Gas leaks', 'Flooding', 'No hot water'] },
    { icon: Droplets,      title: 'Leak Detection & Repair', desc: 'Advanced technology to find and fix leaks before they cause major damage.', items: ['Hidden leaks', 'Pipe repairs', 'Faucet fixes', 'Toilet repairs'] },
    { icon: ShowerHead,    title: 'Drain Cleaning', desc: 'Professional drain cleaning services to keep your plumbing flowing smoothly.', items: ['Clogged drains', 'Sewer lines', 'Hydro jetting', 'Camera inspection'] },
    { icon: Flame,         title: 'Water Heater Services', desc: 'Installation, repair, and maintenance of all water heater types.', items: ['Tank & tankless', 'Repairs', 'Replacements', 'Maintenance'] },
    { icon: Wrench,        title: 'Bathroom Plumbing', desc: 'Complete bathroom plumbing solutions from fixtures to full remodels.', items: ['Fixture installation', 'Shower repairs', 'Toilet installation', 'Remodeling'] },
    { icon: Settings2,     title: 'General Plumbing', desc: 'Comprehensive plumbing services for all your residential and commercial needs.', items: ['Pipe installation', 'Fixture repairs', 'Inspections', 'Maintenance'] },
  ]

  const faqs = [
    { q: 'Do you offer 24/7 emergency plumbing services?', a: 'Yes! We are available 24 hours a day, 7 days a week for emergency plumbing services. Call our emergency line anytime for immediate assistance.' },
    { q: 'What areas do you service?', a: 'We service the greater metro area within 25 miles of our location. Contact us to confirm we service your specific area.' },
    { q: 'Are your plumbers licensed and insured?', a: 'Absolutely! All our plumbers are fully licensed, insured, and background-checked. We take pride in our professional team.' },
    { q: 'Do you provide free estimates?', a: 'Yes, we provide free estimates on all projects. Contact us for a quote or use our AI chat to get a rough estimate.' },
    { q: 'How quickly can you respond to a service call?', a: 'We offer same-day service for most requests. Emergency calls are responded to within 1–2 hours. Scheduled appointments can be arranged at your convenience.' },
    { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, and checks. We also offer payment plans for larger projects.' },
    { q: 'Do you offer warranties on your work?', a: 'Yes! We offer a 90-day warranty on all parts and labor. Extended warranties are available for certain services.' },
    { q: 'Can you help with commercial plumbing needs?', a: 'Absolutely! We handle both residential and commercial plumbing projects, including restaurants, offices, and retail spaces.' },
  ]

  return (
    <main className="min-h-screen">

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
        <div className="container-custom flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" aria-label="Swift Plumbing home">
            <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(249,115,22,0.3)] group-hover:scale-105 transition-transform">
              <Droplets size={20} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-white text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Swift <span className="text-[#F97316]">Plumbing</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {['Home', 'Services', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white px-4 py-2 rounded-lg hover:bg-white/8 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:5551234567" className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
              <Phone size={15} aria-hidden="true" />
              (555) 123-4567
            </a>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Get Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section id="home" className="hero-bg py-20 md:py-28">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-7">
              <span className="badge bg-white/10 text-white/90 border-white/20">
                <BadgeCheck size={13} aria-hidden="true" className="text-[#F97316]" />
                Licensed & Insured
              </span>
              <span className="badge bg-white/10 text-white/90 border-white/20">
                <Zap size={13} aria-hidden="true" className="text-[#F97316]" />
                Same-Day Service
              </span>
              <span className="badge bg-white/10 text-white/90 border-white/20">
                <FileText size={13} aria-hidden="true" className="text-[#F97316]" />
                Free Estimates
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Expert Plumbing<br />
              <span className="text-[#F97316]">You Can Trust</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-9 max-w-lg">
              Fast, reliable, and professional plumbing solutions for your home and business. Licensed, insured, and ready to help 24/7.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="tel:5551234567" className="btn-primary text-base">
                <Phone size={18} aria-hidden="true" />
                Call (555) 123-4567
              </a>
              <a href="#contact" className="btn-secondary text-base">
                Schedule Service
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/10">
              {[['500+', 'Happy Clients'], ['15+', 'Years Experience'], ['90-Day', 'Warranty']].map(([stat, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/images/plumber-photo-v4.png"
                alt="Professional Swift Plumbing technician"
                className="w-full h-full object-cover object-top"
                width={600}
                height={480}
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-500" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-bold text-[#0F172A] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Available Now</div>
                  <div className="text-[#64748B] text-xs">Avg. response: 45 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section id="services" className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="section-heading">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>What We Do</p>
            <h2>Our Plumbing Services</h2>
            <p>From emergency repairs to full installations, we handle all your plumbing needs with expertise and professionalism.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────── */}
      <section id="about" className="section-padding bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container-custom">
          <div className="section-heading">
            <p className="text-[#F97316] font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Swift Plumbing</p>
            <h2 className="text-white">Built on Trust & Expertise</h2>
            <p className="text-white/60">Every job, big or small, is handled with the same level of care and professionalism.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard icon={BadgeCheck} title="Licensed & Insured"     desc="Fully certified professionals you can trust on every job" />
            <StatCard icon={Clock}      title="24/7 Emergency"          desc="Available around the clock for urgent plumbing needs" />
            <StatCard icon={Shield}     title="Upfront Pricing"         desc="No hidden fees — always know your total cost upfront" />
            <StatCard icon={Star}       title="Satisfaction Guaranteed" desc="90-day warranty on all parts and labor, every time" />
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="section-heading">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>FAQ</p>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions. Don't see yours? Chat with our AI assistant or call us directly.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-heading">
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Reviews</p>
            <h2>What Our Customers Say</h2>
            <p>Trusted by hundreds of homeowners and businesses across the metro area.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Local Homeowner',
                img: '/images/testimonial-1.png',
                text: 'Swift Plumbing saved the day! They arrived within an hour and fixed our burst pipe. Professional, clean, and reasonably priced.',
              },
              {
                name: 'Mike Thompson',
                role: 'Property Manager',
                img: '/images/testimonial-2.png',
                text: "We've used them for years. Always on time, clean work, and they explain everything before starting. Wouldn't use anyone else.",
              },
              {
                name: 'Emily Chen',
                role: 'Local Resident',
                img: null,
                text: 'Best plumbers in the area! The AI chat answered all my questions before they even arrived. Highly recommend.',
              },
            ].map(({ name, role, img, text }) => (
              <div
                key={name}
                className="card p-8 flex flex-col gap-5"
              >
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[#334155] leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  {img ? (
                    <img src={img} alt={name} className="w-11 h-11 rounded-full object-cover" width={44} height={44} />
                  ) : (
                    <div className="w-11 h-11 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</p>
                    <p className="text-[#64748B] text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section id="contact" className="section-padding bg-[#F8FAFC]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Ready to schedule your service? Contact us today for a free estimate. We're here to help with all your plumbing needs.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: '123 Main Street, City, State 12345' },
                { icon: Phone, label: '(555) 123-4567' },
                { icon: Mail,  label: 'info@swiftplumbing.com' },
                { icon: Clock, label: 'Mon–Fri: 8am–6pm · Emergency: 24/7' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#2563EB] shrink-0">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span className="text-[#334155]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card p-8 sm:p-10">
            <form className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-[#0F172A] font-semibold text-sm mb-2">
                  Your Name <span className="text-[#F97316]" aria-label="required">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-xl text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#0F172A] font-semibold text-sm mb-2">
                  Email Address <span className="text-[#F97316]" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-xl text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#0F172A] font-semibold text-sm mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                  className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-xl text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#0F172A] font-semibold text-sm mb-2">
                  Message <span className="text-[#F97316]" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your plumbing needs..."
                  rows={4}
                  required
                  className="w-full px-4 py-3.5 border-2 border-[#E2E8F0] rounded-xl text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Send Message
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#0F172A] border-t border-white/8 py-10">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-lg flex items-center justify-center">
              <Droplets size={16} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Swift Plumbing</span>
          </div>
          <p className="text-white/40 text-sm text-center">© 2024 Swift Plumbing. All rights reserved.</p>
          <p className="text-white/40 text-sm text-center">Licensed & Insured · Greater Metro Area</p>
        </div>
      </footer>

      {/* ── Chat Widget ────────────────────────────────────── */}
      <ChatWidget />
    </main>
  )
}
