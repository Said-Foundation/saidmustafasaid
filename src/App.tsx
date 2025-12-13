import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { APP_URLS } from './config/navigation'
import './App.css'

const App = () => {
  const [activeSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const services = [
    {
      title: 'Portfolio',
      description: 'Professional portfolio showcasing expertise in AI/ML engineering, DevOps, and cloud architecture with real-world projects and certifications.',
      url: APP_URLS.PORTFOLIO,
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'TargetedCV',
      description: 'AI-powered resume builder that creates job-targeted CVs with intelligent content optimization, automated formatting, and ATS compatibility.',
      url: APP_URLS.TARGETED_CV,
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Minimal Landing Page - Focused on Services */}
      <section id="home" className="section flex items-center justify-center pt-32 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            {/* Minimal Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Welcome
              </h1>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Choose a service to get started
              </p>
            </motion.div>

            {/* Service Cards - Main Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {services.map((service, index) => (
                <motion.a
                  key={service.title}
                  href={service.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="service-card group"
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <div className="service-link">
                    Visit {service.title}
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Subtle Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-16"
            >
              <p className="text-sm text-secondary">
                AI/ML Specialist & DevOps Engineer
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
