import React from 'react'
import '../index.css'
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircle'
import Layout from '../components/Layout'

function Home() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center mb-16 bg-gray-800 rounded-2xl p-5">
        <h1 className="text-4xl text-amber-200 font-bold mb-4">
          Build Your Online Presence Fast.
        </h1>
        <p className="text-lg text-white mb-6">
          I create custom landing pages, handle your hosting, and make sure everything just works.
        </p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#contact"
        >
          Get a Free Quote
        </Button>
      </section>

      {/* Services */}
      <section id="services" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Landing Pages</h3>
            <p className="text-gray-300">
              High-converting, fast, and mobile-friendly landing pages tailored to your brand.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Hosting & Domains</h3>
            <p className="text-gray-300">
              I'll handle the hosting setup, domain configuration, and deployment — zero stress.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Ongoing Support</h3>
            <p className="text-gray-300">
              Need changes or updates later? I offer affordable, flexible support options.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-16 text-center max-w-2xl mx-auto p-5 bg-gray-800 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-amber-200">About Me</h2>
        <p className="text-white">
          I'm a freelance web developer who loves building clean, modern websites that solve real problems.
          Whether you’re launching a new product or need a personal site, I’ll work with you one-on-one to make it happen.
        </p>
      </section>

      {/* Call to Action */}
      <section id="contact" className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-gray-900 mb-6 text-lg font-bold">
          Ready to launch your website? Reach out and I’ll get back to you within 24 hours.
        </p>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="mailto:nadasentheolin@gmail.com"
        >
          Contact Me
        </Button>
      </section>
    </Layout>
  )
}

export default Home