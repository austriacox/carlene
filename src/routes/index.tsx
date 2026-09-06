import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Balloons } from "@/components/birthday/balloons";
import { Cake } from "@/components/birthday/cake";
import { Finale } from "@/components/birthday/finale";
import { Hero } from "@/components/birthday/hero";
import { Letter } from "@/components/birthday/letter";
import { Memories } from "@/components/birthday/memories";
import { SiteNav } from "@/components/birthday/nav";
import { Petals } from "@/components/birthday/petals";
import { Popup } from "@/components/birthday/popup";
import { Reasons } from "@/components/birthday/reasons";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [surprise, setSurprise] = useState<string | null>(null);

  return (
    <main className="relative min-h-dvh bg-paper">
      <Petals />
      <Hero />
      <SiteNav />
      <Letter />
      <Memories />
      <Reasons />
      <Balloons />
      <Cake />
      <Finale onSurprise={setSurprise} />
      <footer className="px-4 pb-16 text-center text-sm text-muted">
        Made with love for my coolest baby · August 26
      </footer>
      <Popup
        open={surprise !== null}
        text={surprise ?? ""}
        onClose={() => setSurprise(null)}
      />
    </main>
  );
}
