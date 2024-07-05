import { Banner } from "@/components/Banner";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";


export const metadata = {
 title: 'Claro Sports',
 description: 'Claro Sports Sochi 2014',
};

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner title="Faltan">
        <Countdown targetDate="2024-12-31T00:00:00" />
        <Section title="Claro Sports En Sochi 2014" />
      </Banner>
      <Footer />
    </main>
  );
}
