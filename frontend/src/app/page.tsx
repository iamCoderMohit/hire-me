import Companies from "@/components/Companies"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

function page() {
  return (
    <div className="bg-[#020617]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default page