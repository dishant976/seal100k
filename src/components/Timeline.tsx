export default function Timeline() {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Historical Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20" />
          
          <div className="space-y-24">
            {/* Timeline items */}
            <TimelineItem
              year="3000 BCE"
              title="Early Mesopotamian Seals"
              description="The emergence of cylinder seals in ancient Sumer, marking the beginning of sophisticated administrative systems."
              align="left"
            />
            <TimelineItem
              year="2000 BCE"
              title="Egyptian Scarab Seals"
              description="Development of scarab seals in ancient Egypt, combining administrative function with religious symbolism."
              align="right"
            />
            <TimelineItem
              year="1000 BCE"
              title="Persian Empire Seals"
              description="Introduction of elaborate royal seals in the Persian Empire, featuring intricate designs and cuneiform inscriptions."
              align="left"
            />
            <TimelineItem
              year="500 BCE"
              title="Greek and Roman Seals"
              description="Adoption and adaptation of seal practices in classical antiquity, influencing European traditions."
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, description, align }: {
  year: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}) {
  return (
    <div className={`relative flex ${align === 'left' ? 'justify-start' : 'justify-end'} items-center`}>
      <div className={`w-5/12 ${align === 'right' && 'order-2'}`}>
        <div className={`p-6 bg-white/5 rounded-lg border border-white/10 ${
          align === 'left' ? 'text-right' : 'text-left'
        }`}>
          <span className="text-orange-500 font-bold">{year}</span>
          <h3 className="text-xl text-white font-semibold mt-2">{title}</h3>
          <p className="text-white/60 mt-2">{description}</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />
    </div>
  );
} 