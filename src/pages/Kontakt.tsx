import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.avif";
import bestellformular from "@/assets/docs/Bestellformular.pdf";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <PageHero
        title="Kontakt"
        subtitle="Kontaktieren Sie uns gerne via E-Mail — wir melden uns so schnell wie möglich."
        kicker="Biohof Halten"
        image={heroImage}
        alignment="center"
      />

      <main>
        <section id="kontakt" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Contact */}
              <div className="bg-card rounded-sm border border-border/50 p-6 md:p-8 space-y-6">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-gold/70 mb-3">Kontakt</p>
                  <h2 className="font-heading text-2xl font-light text-foreground">
                    Schreiben Sie uns
                  </h2>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Kontaktieren Sie uns direkt per E-Mail — wir melden uns so schnell wie möglich.
                </p>
                <a
                  href="mailto:biohof.halten@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 rounded-sm"
                >
                  E-Mail schreiben
                </a>
              </div>

              {/* Maps */}
              <div className="rounded-sm overflow-hidden h-full min-h-[360px]">
                <iframe
                  title="Biohof Halten Karte"
                  src="https://www.google.com/maps?q=Halten%202,%206418%20Rothenthurm&output=embed"
                  className="w-full h-full min-h-[360px]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Terminal CTA */}
        <section className="py-20 bg-bark text-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-8 h-px bg-gold/60 mx-auto mb-8" />
              <h3 className="font-heading text-3xl font-light tracking-tight mb-4">
                Bio-Fleisch bestellen
              </h3>
              <p className="font-body text-base font-light text-cream/70 mb-10 leading-relaxed">
                Bestellen Sie ganz einfach online Bio-Kalbsfleisch ab Hof. Oder laden Sie das{" "}
                <a
                  href={bestellformular}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-cream/80 hover:text-cream transition-colors"
                >
                  PDF-Bestellformular
                </a>{" "}herunter.
              </p>
              <Link
                to="/bestellen"
                className="inline-flex items-center justify-center px-8 py-3 font-body text-sm font-medium tracking-[0.1em] uppercase border border-cream/70 text-cream hover:bg-cream/10 transition-all duration-500 rounded-sm"
              >
                Online-Bestellformular
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
