import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Said Mustafa Said</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="section">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Welcome to My Digital Space
            </h1>
            <p className="text-xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of work and discover innovative solutions in AI, cloud computing, and software development.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Portfolio */}
              <div className="card p-8 group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Portfolio</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Explore my professional journey, skills, and projects in AI/ML engineering, DevOps, and cloud architecture.
                </p>
                <Link href="https://saidmustafasaid.com" className="btn btn-primary w-full">
                  View Portfolio
                </Link>
              </div>

              {/* TargetedCV */}
              <div className="card p-8 group">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">TargetedCV</h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  AI-powered resume builder that helps you create job-targeted CVs with intelligent content optimization and automated formatting.
                </p>
                <Link href="https://targetedcv.saidmustafasaid.com" className="btn btn-secondary w-full">
                  Try TargetedCV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-secondary">
            <p>&copy; 2024 Said Mustafa Said. Crafting innovative solutions at the intersection of AI and cloud technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
