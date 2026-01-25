import Hero from '../components/Hero'
import PostList from '../components/PostList'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GridBackground from '../components/GridBackground'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-neural-bg">
      <GridBackground />
      <main className="relative z-10">
        <Hero />
        <PostList />
        <About />
        <Skills />
        <Portfolio />
        <YouTube />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
