import { useInView } from "@/hooks/useInView";

const ResponsiblePlaySection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section id="responsible" className="py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-casino-dark to-casino-darker" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Fading cards silhouette */}
          <div className="flex justify-center mb-8 opacity-30">
            <div className="flex -space-x-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-18 bg-gradient-to-b from-muted to-transparent rounded-lg transform"
                  style={{
                    transform: `rotate(${(i - 2) * 10}deg)`,
                    opacity: 1 - Math.abs(i - 2) * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-8 border border-border/30">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Play Responsibly
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Gambling should be entertaining and enjoyable. Set limits, take breaks, 
              and never chase losses. If you feel you may have a problem, seek help.
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
              <span className="text-2xl font-bold text-primary">18+</span>
              <span className="text-muted-foreground">Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiblePlaySection;
