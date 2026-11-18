"use client";
import React, { useEffect, useRef } from "react";

export default function BackgroundHud() {
  const starsRef = useRef<HTMLCanvasElement | null>(null);
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 85 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vy: Math.random() * 0.35 + 0.1,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0, 245, 255, 0.55)";
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y -= s.vy;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }
      }
      frameId = requestAnimationFrame(draw);
    };
    frameId = requestAnimationFrame(draw);

    const onMouseMove = (e: MouseEvent) => {
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(550px circle at ${e.clientX}px ${e.clientY}px, rgba(var(--os-primary-rgb), 0.08), transparent 60%)`;
      }
    };

    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "24px";
      ripple.style.height = "24px";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div
        ref={spotRef}
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{ background: "radial-gradient(550px circle at 50% 50%, rgba(var(--os-primary-rgb), 0.07), transparent 60%)" }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 cyber-grid" />
        <canvas ref={starsRef} className="absolute inset-0 w-full h-full opacity-70" />
        <div className="aurora-blob absolute -top-28 -left-28 w-96 h-96 rounded-full" style={{ background: "var(--os-primary)" }} />
        <div
          className="aurora-blob absolute top-1/3 -right-28 w-[28rem] h-[28rem] rounded-full"
          style={{ background: "var(--os-secondary)", animationDelay: "-5s" }}
        />
        <div
          className="aurora-blob absolute -bottom-32 left-1/3 w-96 h-96 rounded-full"
          style={{ background: "var(--os-accent)", animationDelay: "-9s" }}
        />
        <div className="absolute inset-0 scanlines" />
      </div>
    </>
  );
}
