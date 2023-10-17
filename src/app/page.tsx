"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Hero from '@/Components/Hero/Hero'
import About from '@/Components/About/About'
import Skills from '@/Components/Skills/Skills'
import Projects from '@/Components/Projects/Projects'
import Footer from '@/Components/Footer/Footer'

import { useRef } from 'react'
export default function Home() {

  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <main className={styles.main}>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <Hero projectsRef={projectsRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </main>
  )
}
