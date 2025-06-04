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
          Join the Code With Me Community!
        </h1>
        <p className="text-lg text-white mb-6">
          A friendly space for developers of all levels to connect, share knowledge, and help each other grow in their coding journey. Let's learn and build together!
        </p>
        <Button
          variant="contained"
          color="primary" // You might want to adjust colors to fit your new brand if needed
          size="large"
          href="https://discord.gg/m985ARgFKG" // Your Discord link
          target="_blank" // Opens Discord in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
          Join Our Discord
        </Button>
      </section>

      {/* Community Highlights (formerly Services) */}
      <section id="services" className="mb-16"> {/* Changed id to be more relevant */}
        <h2 className="text-2xl font-semibold mb-6 text-center">What Our Community Offers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Get Coding Help</h3>
            <p className="text-gray-300">
              Stuck on a bug or a tricky concept? Ask questions and get support from fellow community members.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Share & Collaborate</h3>
            <p className="text-gray-300">
              Showcase your projects, get valuable feedback, and find opportunities to collaborate with other coders.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-md bg-gray-800">
            <h3 className="font-bold text-lg mb-2 text-amber-200">Learn & Grow Together</h3>
            <p className="text-gray-300">
              Share resources, discuss new technologies, and learn from the collective experience of a supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-16 text-center max-w-2xl mx-auto p-5 bg-gray-800 rounded-2xl"> {/* Changed id */}
        <h2 className="text-2xl font-semibold mb-4 text-amber-200">About Code With Me</h2>
        <p className="text-white">
          Code With Me is more than just a YouTube channel; it's a vibrant community built around the passion for coding. Our goal is to create an inclusive and encouraging environment where everyone feels empowered to learn, share their experiences, and help one another succeed in the world of software development.
        </p>
      </section>

      {/* Call to Action */}
      <section id="join-us" className="text-center"> {/* Changed id */}
        <h2 className="text-2xl font-semibold mb-4">Ready to Code With Us?</h2>
        <p className="text-gray-900 mb-6 text-lg font-bold">
          Become a part of our growing family of coders. Click the button below to join our Discord server!
        </p>
        <Button
          variant="contained"
          id='contact'
          color="secondary" // You might want to adjust colors
          size="large"
          href="https://discord.gg/m985ARgFKG" // Your Discord link
          target="_blank" // Opens Discord in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
          Join the Community
        </Button>
      </section>
    </Layout>
  )
}

export default Home