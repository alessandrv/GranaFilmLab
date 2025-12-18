'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-xl text-gray-400 mb-16">Ready to develop your film? Contact us today</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <a href="mailto:info@granafilmlab.com" className="hover:text-white transition-colors">
                  info@granafilmlab.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <a href="tel:+447404105088" className="hover:text-white transition-colors">
                  +44 (0) 7404 105088
                </a>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Opening Hours</p>
                <p>Mon-Fri: 9:30AM - 6:00PM</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-white/30 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
