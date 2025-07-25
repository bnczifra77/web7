import React from 'react'

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 bg-white text-blue-900 shadow-md">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="bg-blue-900 text-white px-2 py-1 rounded">C</div>
          Czifra Consulting
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex gap-2">
          <button className="border border-blue-900 px-4 py-1 rounded hover:bg-blue-100">Call Now</button>
          <button className="bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-800">Get Quote</button>
        </div>
      </header>

      <main className="p-10">
        <section className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10 py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Czifra Consulting</h1>
            <h2 className="text-xl mb-4">Helping YOU Succeed</h2>
            <p className="mb-6">Transform your business with strategic consulting solutions. We deliver expert guidance, innovative strategies, and measurable results that drive sustainable growth.</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-900 px-6 py-2 rounded shadow hover:bg-gray-200">Get Started Today</button>
              <button className="bg-white text-blue-900 px-6 py-2 rounded shadow">Learn More</button>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <span>✅ Strategic Planning</span>
              <span>✅ Business Growth</span>
              <span>✅ Expert Guidance</span>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-lg w-full md:max-w-md">
            <h3 className="text-xl font-bold mb-2">Ready to Grow?</h3>
            <p className="mb-4">Let's discuss your business goals and create a roadmap to success.</p>
            <ul className="space-y-2 mb-4">
              <li>✅ Free Consultation</li>
              <li>✅ Custom Strategy</li>
              <li>✅ Proven Results</li>
            </ul>
            <button className="w-full bg-white text-blue-900 py-2 rounded shadow hover:bg-gray-100">Schedule Consultation</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
