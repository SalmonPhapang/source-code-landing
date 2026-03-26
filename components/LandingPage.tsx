
'use client';

import Image from "next/image";
import { ArrowRight, CheckCircle2, Code2, Globe, Layers, Layout, Smartphone, ShieldCheck, Zap, ChevronRight, Search, PenTool, Rocket, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import Link from "next/link";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="min-h-screen bg-white text-dark-900 selection:bg-brand-100 selection:text-brand-900">
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="w-20 h-20 relative group-hover:scale-105 transition-transform duration-300">
                <Image src="/logo.png" alt="Source Code Development Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-gray-900 font-mono">
                SourceCode<span className="text-brand-600">Development</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-10">
              {['Services', 'Portfolio', 'Process', 'Pricing', 'Why Us'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div>
              <button 
                onClick={openModal}
                className="bg-dark-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 text-sm tracking-wide"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-hero-pattern opacity-100"></div>
        <div className="absolute top-20 right-0 -z-10 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl opacity-50"></div>

        <div className="text-center max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8 border border-brand-100 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
            Accepting New Projects for 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            We Build Software That Powers <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 relative">
              Real Businesses
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            From concept to launch, we combine a <span className="font-semibold text-gray-900">product-owner mindset</span> with battle-tested development expertise to create custom software that delivers measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={openModal}
              className="group bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center gap-2 translate-y-0 hover:-translate-y-1"
            >
              Start Your Project 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              View Our Work
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            {[
              { label: 'Successful Launches', value: '50+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Years Experience', value: '10+' },
              { label: 'Lines of Code', value: '1M+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section id="services" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Custom Development That Fits Your Goals</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three core offerings, all backed by full-stack expertise and a product-first approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Custom Websites",
                desc: "Your website isn't just a digital brochure—it's your most powerful sales and marketing asset. We build sites that convert.",
                color: "blue",
                features: ["Speed & SEO Optimized", "Fully Responsive", "CMS Integration"]
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                desc: "Native iOS and Android experiences that users engage with daily. Built to be intuitive, stable, and store-ready.",
                color: "purple",
                features: ["Native iOS & Android", "Secure API Integration", "App Store Support"]
              },
              {
                icon: Layout,
                title: "Web Applications",
                desc: "Complex workflows, large datasets, and high user volumes. We build robust tools that scale with your business.",
                color: "indigo",
                features: ["Full-Stack Development", "Cloud-Ready Architecture", "Role-Based Security"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className={`w-14 h-14 bg-${service.color}-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 text-${service.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full bg-${service.color}-50 flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className={`w-4 h-4 text-${service.color}-600`} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Proven Results for Visionary Brands</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of our latest projects across web, mobile, and custom applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Queless",
                category: "Mobile App",
                desc: "A revolutionary mobile delivery service specifically designed for small and informal traders in townships, bridging the gap in logistics.",
                tags: ["React Native", "Logistics", "Traders"],
                icon: Smartphone
              },
              {
                title: "Cartique",
                category: "Mobile App",
                desc: "The ultimate car maintenance app. Book services, search for genuine car parts, and manage your vehicle's health in one place.",
                tags: ["React Native", "E-commerce", "Automotive"],
                icon: Smartphone
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-dark-900 flex items-center justify-center p-12 group-hover:scale-105 transition-transform duration-500">
                   <project.icon className="w-16 h-16 text-brand-400 opacity-20" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-8">
                     <div>
                       <span className="text-brand-400 text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                       <h4 className="text-2xl font-bold text-white mt-2">{project.title}</h4>
                     </div>
                   </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Our Process</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">How We Turn Your Vision Into Reality</h3>
              <p className="text-lg text-gray-600 mb-10">
                A transparent, agile process designed to mitigate risk and deliver value at every step. We keep you informed and involved.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: Search,
                    title: "Discovery & Strategy",
                    desc: "We align on business goals, target audience, and technical requirements. This roadmap sets the foundation for success."
                  },
                  {
                    icon: PenTool,
                    title: "Design & Development",
                    desc: "Our full-stack team builds with clean, scalable code. You get regular updates and working prototypes to test."
                  },
                  {
                    icon: Code2,
                    title: "Testing & Launch",
                    desc: "Rigorous QA for performance and security. We deploy with confidence and ensure a smooth transition to production."
                  },
                  {
                    icon: Rocket,
                    title: "Support & Growth",
                    desc: "We don't just leave. We offer ongoing maintenance and feature enhancements to keep your software competitive."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {index !== 3 && <div className="absolute left-[22px] top-14 bottom-0 w-0.5 bg-gray-100"></div>}
                    <div className="flex-shrink-0 w-11 h-11 bg-dark-900 text-white rounded-xl flex items-center justify-center font-bold font-mono text-lg shadow-lg z-10">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="pb-2">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="bg-dark-900 rounded-3xl p-8 shadow-2xl relative border border-gray-800">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-xs text-gray-500 font-mono">deployment-script.tsx</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">1</span>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">deploy</span> <span className="text-gray-300">=</span> <span className="text-purple-400">async</span> <span className="text-gray-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-gray-300">{`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">2</span>
                    <span className="text-gray-500 ml-4">// Initialize production environment</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">3</span>
                    <span className="text-purple-400 ml-4">await</span> <span className="text-blue-400">system</span><span className="text-gray-300">.</span><span className="text-yellow-400">optimize</span><span className="text-gray-300">({`{`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">4</span>
                    <span className="text-green-400 ml-8">performance</span><span className="text-gray-300">:</span> <span className="text-orange-400">true</span><span className="text-gray-300">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">5</span>
                    <span className="text-green-400 ml-8">security</span><span className="text-gray-300">:</span> <span className="text-orange-400">"max"</span><span className="text-gray-300">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">6</span>
                    <span className="text-green-400 ml-8">scalability</span><span className="text-gray-300">:</span> <span className="text-orange-400">"auto"</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">7</span>
                    <span className="text-gray-300 ml-4">{`}`});</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">8</span>
                    
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">9</span>
                    <span className="text-purple-400 ml-4">return</span> <span className="text-green-400">"Launch Successful"</span><span className="text-gray-300">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-8 text-right mr-4 select-none">10</span>
                    <span className="text-gray-300">{`}`}</span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-gray-400">Build Passing</span>
                  </div>
                  <span className="text-xs text-gray-500">v2.4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase mb-3">Transparent Pricing</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Investment Built for Success</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the path that fits your current needs, from MVP to enterprise-scale solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Launchpad",
                price: "Starts at R15,000",
                desc: "Perfect for MVPs and startups looking to validate their product with core features.",
                features: ["Single Core Feature", "Standard Design", "30-Day Support", "Deployment Ready"]
              },
              {
                title: "Growth",
                price: "Starts at R35,000",
                desc: "Comprehensive solutions for growing businesses that need custom workflows and scalability.",
                features: ["Multiple Complex Features", "Premium Custom Design", "60-Day Priority Support", "Performance Optimization"],
                popular: true
              },
              {
                title: "Enterprise",
                price: "Custom Quote",
                desc: "Full-scale digital transformation with enterprise-grade security and 24/7 dedicated support.",
                features: ["Unlimited Features", "Advanced Security", "Lifetime Maintenance", "Dedicated Team"]
              }
            ].map((plan, idx) => (
              <div key={idx} className={`relative p-10 bg-white rounded-3xl border ${plan.popular ? 'border-brand-600 ring-4 ring-brand-50 shadow-xl' : 'border-gray-100 shadow-sm'} hover:shadow-lg transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h4>
                <div className="text-3xl font-extrabold text-brand-600 mb-6">{plan.price}</div>
                <p className="text-gray-500 mb-10 text-sm leading-relaxed">{plan.desc}</p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={openModal}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${plan.popular ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/20' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                  Choose {plan.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-dark-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase mb-3">Why Us</h2>
            <h3 className="text-4xl font-bold mb-6">Partners, Not Just Vendors</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We bring the experience of building our own successful products to your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: "Product-Owner Mindset",
                desc: "We build our own apps, so we understand the full lifecycle—from launch to scale."
              },
              {
                icon: Layers,
                title: "Full-Stack Expertise",
                desc: "One team, end-to-end. Frontend, backend, DevOps, and everything in between."
              },
              {
                icon: ShieldCheck,
                title: "Security First",
                desc: "Battle-tested best practices. Because downtime and breaches cost you money."
              },
              {
                icon: Zap,
                title: "Built to Scale",
                desc: "Architecture that grows with you. Handle tomorrow's demands today."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-800 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors group">
                <item.icon className="w-10 h-10 text-brand-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
          <p className="text-brand-100 text-xl mb-10">
            Let's discuss your project and how we can help you achieve your business goals.
          </p>
          <button 
            onClick={openModal}
            className="bg-white text-brand-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 relative">
                  <Image src="/logo.png" alt="Source Code Development Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold text-gray-900 font-mono">SourceCodeDevelopment</span>
              </div>
              <p className="text-gray-500 max-w-sm">
                Empowering businesses with custom software solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#services" className="hover:text-brand-600 transition-colors">Custom Websites</a></li>
                <li><a href="#services" className="hover:text-brand-600 transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="hover:text-brand-600 transition-colors">Web Applications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-600">
                <li><Link href="/terms" className="hover:text-brand-600 transition-colors">Terms of Use</Link></li>
                <li><Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-brand-600 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span className="text-sm">info@sourcecodes.co.za</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span className="text-sm">072 541 3028</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span className="text-sm text-balance">11740 sekwati street,zone7a sebokeng 1983</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 Source Code Development. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Social icons would go here */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
