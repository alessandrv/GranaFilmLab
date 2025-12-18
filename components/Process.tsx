'use client';

const steps = [
  {
    number: '01',
    title: 'Submit Your Film',
    description: 'Send us your exposed film or drop it off at our laboratory. We accept all major film formats and types.'
  },
  {
    number: '02',
    title: 'Professional Development',
    description: 'Your film is processed in our temperature-controlled darkroom using fresh chemistry and precise techniques.'
  },
  {
    number: '03',
    title: 'Quality Scanning',
    description: 'Each frame is carefully scanned at your chosen resolution with color correction and dust removal.'
  },
  {
    number: '04',
    title: 'Receive Your Images',
    description: 'Download high-resolution scans online and receive your developed negatives by mail or pickup.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Our Process</h2>
        <p className="text-xl text-gray-400 mb-16">From film to final image in four simple steps</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-6xl font-bold text-white/10 leading-none">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
