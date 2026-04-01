/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  Instagram, 
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5519999999999"; // Placeholder number
const INSTAGRAM_LINK = "https://instagram.com";

const services = [
  { name: "Botox", description: "Redução de rugas e linhas de expressão com efeito natural" },
  { name: "Preenchimento Facial", description: "Harmonização e volume em áreas estratégicas do rosto" },
  { name: "Lipo de Papada", description: "Redução de gordura localizada abaixo do queixo" },
  { name: "Rinomodelação", description: "Correção estética do nariz sem cirurgia" },
  { name: "Preenchimento Labial", description: "Lábios mais volumosos e definidos" },
  { name: "Peeling", description: "Renovação da pele e melhora da textura" },
  { name: "Blefaroplastia sem corte", description: "Rejuvenescimento da região dos olhos" },
  { name: "Microcirurgias", description: "Procedimentos estéticos com alta precisão" },
];

const testimonials = [
  { text: "Atendimento incrível e resultados naturais!", author: "Mariana S." },
  { text: "Me senti muito mais confiante depois do procedimento", author: "Fernanda L." },
  { text: "Profissional super atenciosa e competente", author: "Cláudia M." },
];

const differentials = [
  "Supervisão médica",
  "Atendimento personalizado",
  "Técnicas minimamente invasivas",
  "Resultados naturais",
  "Ambiente seguro e profissional"
];

const resultImages = [
  "https://iili.io/BfU4l07.jpg",
  "https://iili.io/BfU4cfS.jpg",
  "https://iili.io/Bf8Rc7V.jpg"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl heading-serif font-bold text-brand-purple tracking-tight">
                Estética<span className="font-light italic">Paulínia</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-brand-purple transition-colors text-sm font-medium">Sobre</a>
              <a href="#servicos" className="text-gray-600 hover:text-brand-purple transition-colors text-sm font-medium">Procedimentos</a>
              <a href="#resultados" className="text-gray-600 hover:text-brand-purple transition-colors text-sm font-medium">Resultados</a>
              <a href="#contato" className="text-gray-600 hover:text-brand-purple transition-colors text-sm font-medium">Contato</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-brand-purple/20"
              >
                <MessageCircle size={18} />
                Agendar
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-purple">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-brand-light overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-600">Sobre</a>
                <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-600">Procedimentos</a>
                <a href="#resultados" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-600">Resultados</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-600">Contato</a>
                <a 
                  href={WHATSAPP_LINK}
                  className="w-full bg-brand-purple text-white px-6 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Agendar Avaliação
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/30 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-light text-brand-purple text-sm font-semibold mb-6 tracking-wide uppercase">
                Estética Avançada & Harmonização
              </span>
              <h1 className="text-5xl lg:text-7xl heading-serif font-bold text-gray-900 leading-[1.1] mb-8">
                Realce sua beleza natural com <span className="text-brand-purple italic">sofisticação</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Especialista em estética facial e harmonização com resultados naturais e seguros para você se sentir ainda mais confiante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-brand-purple text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-purple/20 group"
                >
                  Agendar avaliação
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#servicos"
                  className="border border-brand-purple text-brand-purple px-10 py-4 rounded-full text-lg font-semibold hover:bg-brand-light transition-all text-center"
                >
                  Ver procedimentos
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://iili.io/Bf8Rc7V.jpg" 
                  alt="Profissional de Estética" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-purple/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://iili.io/BfUYMBt.jpg" alt="Clínica" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://iili.io/BfUYW4n.jpg" alt="Atendimento" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <img src="https://iili.io/BfUYVEX.jpg" alt="Procedimento" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://iili.io/BfUYh2s.jpg" alt="Detalhe" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl heading-serif font-bold text-gray-900 mb-8">Sobre a profissional</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Esteticista especializada em harmonização facial e corporal, atuando com técnicas modernas e seguras. Atendimento com supervisão médica, focado em realçar a beleza natural e autoestima de cada paciente.
              </p>
              <div className="space-y-4">
                {differentials.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-brand-light p-1 rounded-full text-brand-purple">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl heading-serif font-bold text-gray-900 mb-4">Procedimentos</h2>
            <p className="text-lg text-gray-600">Oferecemos o que há de mais moderno em estética facial para resultados harmônicos e naturais.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-brand-light shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-brand-light rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Gallery */}
      <section id="resultados" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-serif font-bold text-gray-900 mb-4">Resultados reais</h2>
            <p className="text-lg text-gray-600">Veja antes e depois de pacientes atendidos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resultImages.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg">
                <img 
                  src={src} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-semibold text-lg">Ver detalhes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-purple text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-serif font-bold mb-4">O que dizem nossas clientes</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl border border-white/20">
                <p className="text-xl italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center font-bold">
                    {t.author[0]}
                  </div>
                  <span className="font-semibold">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl heading-serif font-bold text-gray-900 mb-8">Onde estamos</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-2xl text-brand-purple">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">Rua Divino Salvador 312, Paulínia - SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-2xl text-brand-purple">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Instagram</h4>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">@esteticapaulinia</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-brand-light/50 rounded-3xl border border-brand-light">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between"><span>Segunda - Sexta:</span> <span>09:00 - 19:00</span></div>
                  <div className="flex justify-between"><span>Sábado:</span> <span>09:00 - 13:00</span></div>
                </div>
              </div>
            </div>
            
            <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.966453915053!2d-47.1513256239169!3d-22.76662497935489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8959d6896959d%3A0x6896959d6896959d!2sR.%20Divino%20Salvador%2C%20312%20-%20Jardim%20dos%20Calegaris%2C%20Paul%C3%ADnia%20-%20SP%2C%2013140-000!5e0!3m2!1spt-BR!2sbr!4v1711984000000!5m2!1spt-BR!2sbr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-light/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl heading-serif font-bold text-gray-900 mb-6">Pronta para realçar sua melhor versão?</h2>
            <p className="text-xl text-gray-600 mb-12">Agende sua avaliação agora e descubra o procedimento ideal para você.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-purple text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all shadow-2xl shadow-brand-purple/30 group"
            >
              <MessageCircle size={28} />
              Falar no WhatsApp
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-light bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-2xl heading-serif font-bold text-brand-purple block mb-6">
            Estética<span className="font-light italic">Paulínia</span>
          </span>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Estética Facial Paulínia. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href={INSTAGRAM_LINK} className="text-gray-400 hover:text-brand-purple transition-colors"><Instagram size={20} /></a>
            <a href={WHATSAPP_LINK} className="text-gray-400 hover:text-brand-purple transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
