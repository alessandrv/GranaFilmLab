'use client';

const services = [
  {
    title: 'Film Developing',
    description: 'Professional C-41, E-6, and black & white film processing with precise temperature control and quality chemistry.',
    formats: ['35mm', '120', '4x5', '8x10']
  },
  {
    title: 'Scanning',
    description: 'High-resolution drum and flatbed scanning that captures every detail and grain structure of your negatives.',
    formats: ['2400 DPI', '4800 DPI', 'Drum Scan']
  },
  {
    title: 'Printing',
    description: 'Traditional darkroom printing and modern digital printing on archival papers for lasting quality.',
    formats: ['Darkroom', 'Giclée', 'Fine Art']
  },
  {
    title: 'Push/Pull',
    description: 'Custom processing services for over or underexposed film with push and pull development techniques.',
    formats: ['+1 to +3', '-1 to -2', 'Custom']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Services</h2>
        <p className="text-xl text-gray-400 mb-16">Professional analog processing for every need</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.formats.map((format, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-sm"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
