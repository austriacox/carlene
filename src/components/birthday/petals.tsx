import { useEffect, useState } from "react";

type Petal = { left: string; duration: string; delay: string; rotate: string };

export function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: 18 }, () => ({
        left: `${Math.random() * 100}%`,
        duration: `${7 + Math.random() * 8}s`,
        delay: `${-Math.random() * 12}s`,
        rotate: `${Math.random() * 180}deg`,
      })),
    );
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            transform: `rotate(${p.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
