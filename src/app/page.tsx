"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/Components/Navbar/Navbar'
import Hero from '@/Components/Hero/Hero'
import About from '@/Components/About/About'
import Skills from '@/Components/Skills/Skills'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  )
}
