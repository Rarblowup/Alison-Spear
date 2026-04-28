import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const faqs = [
    { q: 'What is the design process?', a: 'Our design process is deeply rooted in understanding your needs, site analysis, and creating harmonious spaces.' },
    { q: 'How to start a project?', a: 'You can start by booking a free initial consultation using the contact form below.' },
    { q: 'What are the fees?', a: 'Fees vary depending on the scope of the project. Please reach out to discuss your specific requirements.' },
  ];

  return (
    <div className="font-sans text-[#1a1a1a] bg-[#fbfaf8]">
      {/* 1. Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center overflow-hidden [perspective:1000px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
        <motion.div
           initial={{ opacity: 0, rotateX: 20, y: 100 }}
           animate={{ opacity: 1, rotateX: 0, y: 0 }}
           transition={{ duration: 1.5, ease: 'easeOut' }}
           className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white font-light mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
            A Legacy of <br/><span className="italic">Architectural Luxury</span>
          </h2>
          <Link to="/contact" className="px-8 py-4 bg-white text-black uppercase text-[11px] tracking-[0.2em] hover:bg-gray-200 transition">
            Contact
          </Link>
        </motion.div>
      </section>

      {/* 2. Vision */}
        <motion.section 
          whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }}
          className="py-16 md:py-32 px-6 max-w-4xl mx-auto text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 block">* OUR PHILOSOPHY</span>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-snug">
            Deeply rooted in architectural traditions, our studio integrates natural materials, intentional light, and the philosophy of refined living.
          </h3>
        </motion.section>
  
        {/* 3. Virtual Walkthrough */}
        <section className="py-10 md:py-20 bg-[#eae7e2]">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 block">* VIRTUAL EXPERIENCE</span>
              <div className="aspect-video shadow-2xl relative group cursor-pointer overflow-hidden rounded-xl">
                   <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src="/0818.mp4"
                      className="absolute inset-0 w-full h-full object-cover"
                   />
              </div>
          </div>
        </section>
  
        {/* 4. Residential Projects */}
        <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 block">* RESIDENTIAL</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
              {[1, 2, 3].map(i => (
                  <motion.div key={i} whileHover={{ rotateY: 5, scale: 1.02 }} className="cursor-pointer">
                      <div className="aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-xl">
                          <img src={`https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80`} alt={`Luxury Residence ${i}`} className="w-full h-full object-cover"/>
                      </div>
                      <h4 className="font-serif text-lg">Luxury Residence {i}</h4>
                  </motion.div>
              ))}
          </div>
        </section>
  
        {/* 5. Design Philosophy */}
        <section className="py-16 md:py-32 bg-[#1a1a1a] text-[#fbfaf8] text-center px-6">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-3xl font-serif italic max-w-3xl mx-auto">
            "Architecture should speak of its time and place, but yearn for timelessness."
          </motion.p>
        </section>
  
        {/* 6. Commercial Projects */}
        <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 block">* COMMERCIAL</span>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             <h2 className="text-3xl md:text-5xl font-serif font-light">Commercial spaces re-imagined for modern balance.</h2>
             <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Commercial space" className="w-full h-full object-cover"/>
             </div>
          </div>
        </section>
  
        {/* 7. Awards & Memberships */}
        <section className="py-10 md:py-20 bg-[#eae7e2] text-center px-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 block">* RECOGNITION</span>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 opacity-60 grayscale">
              <span>AIA</span><span>LEED AP</span><span>IIDA</span>
          </div>
        </section>
  
        {/* 8. Showroom & Furniture */}
        <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 block">* SHOWROOM</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-full overflow-hidden shadow-lg">
                      <img src={`https://images.unsplash.com/photo-1519961976073-61d02c3e1e40?auto=format&fit=crop&w=400&q=80`} alt="Showroom item" className="w-full h-full object-cover"/>
                  </div>
              ))}
          </div>
        </section>

      {/* 9. FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-light mb-12 italic">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="py-6 w-full text-left flex justify-between">
                    <p className="font-medium">{faq.q}</p>
                    <ChevronDown />
                </button>
            </div>
        ))}
      </section>

      {/* 10. CTA */}
      <section className="py-32 px-6 bg-[#1a1a1a] text-[#fbfaf8] text-center">
        <h2 className="text-5xl font-serif font-light mb-8 italic">Let's build calm, timeless spaces together</h2>
        <Link to="/contact" className="px-8 py-4 bg-white text-black uppercase text-[11px] tracking-[0.2em] hover:bg-gray-200 transition">Contact</Link>
      </section>
    </div>
  );
}
