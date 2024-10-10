// src/components/LandingPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">EduTech+</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Courses</a>
                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
              <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Welcome to EduTech+</h1>
              <p className="text-gray-600 mb-8">Empowering learners with cutting-edge educational technology.</p>
              <Link to="/signup" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">Get Started</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Personalized Learning</h3>
                  <p className="text-gray-600">Tailored courses and content to match your learning style and goals.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Interactive Lessons</h3>
                  <p className="text-gray-600">Engage with dynamic content and real-time feedback for optimal learning.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
                  <p className="text-gray-600">Monitor your advancement with detailed analytics and insights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">EduTech+</h3>
              <p className="text-sm">Empowering education through technology.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-green-500">About Us</a></li>
                <li><a href="#" className="hover:text-green-500">Courses</a></li>
                <li><a href="#" className="hover:text-green-500">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:text-green-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}