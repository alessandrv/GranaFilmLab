'use client';

const pricingData = {
  filmProcessing: {
    title: 'C41/BW Processing & Scanning',
    subtitle: 'Approx. 38MB for 35mm and 180MB for 6x7',
    items: [
      { service: 'Dev Only', price35: '£7', price120: '£9' },
      { service: 'Dev + Scan Hi JPG', price35: '£13', price120: '£15' },
      { service: 'Dev + Scan Hi TIFF', price35: '£16', price120: '£18' },
      { service: 'Dev + Scan Super Hi TIFF (35mm only)', price35: '£20', price120: '£22' },
      { service: 'Contact Sheet + Scan', price35: '+£8', price120: '+£10' }
    ]
  },
  printing: {
    title: 'RA4/BW Printing',
    subtitle: 'Fuji DPII Glossy/Matte, includes flatbed scan @600DPI',
    items: [
      { service: 'Enlargement 12x10 + Scan', price: '£25/£28' },
      { service: 'Enlargement 12x16 + Scan', price: '£32/£35' }
    ]
  },
  darkroom: {
    title: 'Printing & Darkroom Hire',
    items: [
      { service: 'Darkroom Rental', price: '£70/day', note: '10AM - 5PM, scanner usage included' },
      { service: 'Photographic Paper 12x10/12x16', price: '£45/£55', note: 'Fuji DPII Glossy/Matte' }
    ]
  },
  additional: {
    title: 'Additional Services',
    items: [
      { service: 'Push/pull processing', price: 'No Charge' },
      { service: 'Rush Next Day (24hrs)', price: '+50%' },
      { service: 'Rush Same Day (12hrs)', price: '+100%' },
      { service: 'Cut + Sleeved', price: 'Included' }
    ]
  }
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Pricing</h2>
        <p className="text-xl text-gray-400 mb-16">Professional film processing at competitive rates</p>
        
        <div className="space-y-12">
          {/* Film Processing & Scanning */}
          <div className="border border-white/10 p-8">
            <h3 className="text-3xl font-bold mb-2">{pricingData.filmProcessing.title}</h3>
            <p className="text-sm text-gray-400 mb-6">{pricingData.filmProcessing.subtitle}</p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 pb-3 border-b border-white/10 font-semibold">
                <div>Service</div>
                <div className="text-right">C41</div>
                <div className="text-right">BW</div>
              </div>
              {pricingData.filmProcessing.items.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-2 hover:bg-white/5 transition-colors">
                  <div className="text-gray-300">{item.service}</div>
                  <div className="text-right font-mono">{item.price35}</div>
                  <div className="text-right font-mono">{item.price120}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Printing */}
          <div className="border border-white/10 p-8">
            <h3 className="text-3xl font-bold mb-2">{pricingData.printing.title}</h3>
            <p className="text-sm text-gray-400 mb-6">{pricingData.printing.subtitle}</p>
            <div className="space-y-4">
              {pricingData.printing.items.map((item, index) => (
                <div key={index} className="flex justify-between py-2 hover:bg-white/5 transition-colors">
                  <div className="text-gray-300">{item.service}</div>
                  <div className="font-mono">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Darkroom Hire */}
            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-bold mb-6">{pricingData.darkroom.title}</h3>
              <div className="space-y-4">
                {pricingData.darkroom.items.map((item, index) => (
                  <div key={index} className="hover:bg-white/5 transition-colors p-2">
                    <div className="flex justify-between mb-1">
                      <div className="text-gray-300">{item.service}</div>
                      <div className="font-mono">{item.price}</div>
                    </div>
                    {item.note && <div className="text-sm text-gray-500">{item.note}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="border border-white/10 p-8">
              <h3 className="text-3xl font-bold mb-6">{pricingData.additional.title}</h3>
              <div className="space-y-4">
                {pricingData.additional.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 hover:bg-white/5 transition-colors">
                    <div className="text-gray-300">{item.service}</div>
                    <div className="font-mono">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-12 p-6 bg-white/5 border border-white/10 space-y-2 text-sm text-gray-400">
          <p>• All prices are in £ and inclusive of VAT</p>
          <p>• File delivery via WeTransfer Pro</p>
          <p>• T&Cs apply</p>
        </div>
      </div>
    </section>
  );
}
