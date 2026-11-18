"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Shuffle } from "lucide-react";

export const AI_CORE_MODES = [
  { id: "brain", label: "AI Brain", telemetry: "2,048 CORTEX NODES" },
  { id: "quantum", label: "Quantum Core", telemetry: "1,024 QUBIT RINGS" },
  { id: "neural", label: "Neural Network", telemetry: "4,096 SYNAPTIC LINKS" },
  { id: "sphere", label: "Glass Sphere", telemetry: "HOLOGRAPHIC REFRACTION" },
  { id: "cube", label: "Energy Cube", telemetry: "TESSERACT HYPER-MATRIX" },
  { id: "processor", label: "Floating Processor", telemetry: "64-CORE TENSOR DIE" },
  { id: "orb", label: "Digital Orb", telemetry: "PLASMA CONTAINMENT" },
  { id: "chip", label: "Holographic Chip", telemetry: "BIONIC SILICON WAFER" },
] as const;

export type CoreModeId = (typeof AI_CORE_MODES)[number]["id"];

export default function AiCoreCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const coreGroupRef = useRef<THREE.Group | null>(null);
  const [activeCore, setActiveCore] = useState<CoreModeId>("quantum");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const randomInitial = AI_CORE_MODES[Math.floor(Math.random() * AI_CORE_MODES.length)].id;
    setActiveCore(randomInitial);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.clientWidth || 420;
    const height = canvas.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 5.4;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const p1 = new THREE.PointLight(0x00f5ff, 2.4, 20);
    p1.position.set(4, 4, 4);
    scene.add(p1);
    const p2 = new THREE.PointLight(0x7c4dff, 2.2, 20);
    p2.position.set(-4, -3, 3);
    scene.add(p2);

    const coreGroup = new THREE.Group();
    coreGroupRef.current = coreGroup;
    scene.add(coreGroup);

    const ringGroup = new THREE.Group();
    const rMat1 = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.35 });
    const rMat2 = new THREE.MeshBasicMaterial({ color: 0x7c4dff, wireframe: true, transparent: true, opacity: 0.28 });
    const r1 = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.018, 12, 90), rMat1);
    r1.rotation.x = Math.PI / 2.6;
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.015, 12, 90), rMat2);
    r2.rotation.y = Math.PI / 3.2;
    ringGroup.add(r1, r2);
    scene.add(ringGroup);

    const pCount = 260;
    const pGeom = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) {
      pPositions[i] = (Math.random() - 0.5) * 7.5;
    }
    pGeom.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x4ade80, size: 0.045, transparent: true, opacity: 0.75 });
    const particles = new THREE.Points(pGeom, pMat);
    scene.add(particles);

    let targetRotX = 0.2;
    let targetRotY = 0.4;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };
    const onMouseUp = () => {
      isDragging = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        targetRotY += (e.clientX - prevX) * 0.01;
        targetRotX += (e.clientY - prevY) * 0.01;
        prevX = e.clientX;
        prevY = e.clientY;
      } else {
        const nx = (e.clientX / window.innerWidth - 0.5) * 0.6;
        const ny = (e.clientY / window.innerHeight - 0.5) * 0.6;
        targetRotY += (nx - targetRotY) * 0.03;
        targetRotX += (ny - targetRotX) * 0.03;
      }
    };
    const onResize = () => {
      const w = canvas.clientWidth || 420;
      const h = canvas.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    let frameId = 0;
    let lastTime = performance.now();
    let frames = 0;

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      frames++;
      if (now - lastTime >= 1000) {
        setFps(frames);
        frames = 0;
        lastTime = now;
      }
      coreGroup.rotation.y += 0.0065 + (targetRotY - coreGroup.rotation.y) * 0.04;
      coreGroup.rotation.x += 0.0035 + (targetRotX - coreGroup.rotation.x) * 0.04;
      ringGroup.rotation.z -= 0.004;
      ringGroup.rotation.y += 0.003;
      particles.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const group = coreGroupRef.current;
    if (!group) return;
    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    const wireCyan = new THREE.MeshStandardMaterial({ color: 0x00f5ff, emissive: 0x003344, wireframe: true, transparent: true, opacity: 0.78 });
    const solidGlass = new THREE.MeshPhongMaterial({ color: 0x0b1020, emissive: 0x162044, specular: 0x00f5ff, shininess: 90, transparent: true, opacity: 0.72 });
    const accentMat = new THREE.MeshBasicMaterial({ color: 0x7c4dff, wireframe: true });

    if (activeCore === "brain") {
      const left = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 2), wireCyan);
      left.position.x = -0.22;
      left.scale.set(0.85, 1.05, 1.25);
      const right = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 2), accentMat);
      right.position.x = 0.22;
      right.scale.set(0.85, 1.05, 1.25);
      const inner = new THREE.Mesh(new THREE.SphereGeometry(0.65, 24, 24), solidGlass);
      group.add(left, right, inner);
    } else if (activeCore === "quantum") {
      group.add(
        new THREE.Mesh(new THREE.OctahedronGeometry(1.35, 1), wireCyan),
        new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 0), solidGlass),
        new THREE.Mesh(new THREE.TorusKnotGeometry(0.65, 0.12, 64, 12), accentMat)
      );
    } else if (activeCore === "neural") {
      group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 2), wireCyan));
      for (let i = 0; i < 12; i++) {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(0.11, 12, 12),
          new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00f5ff : 0x4ade80 })
        );
        const phi = Math.acos(-1 + (2 * i) / 12);
        const theta = Math.sqrt(12 * Math.PI) * phi;
        node.position.setFromSphericalCoords(1.42, phi, theta);
        group.add(node);
      }
    } else if (activeCore === "sphere") {
      group.add(
        new THREE.Mesh(new THREE.SphereGeometry(1.32, 32, 32), solidGlass),
        new THREE.Mesh(new THREE.SphereGeometry(1.38, 16, 16), wireCyan)
      );
    } else if (activeCore === "cube") {
      const innerCube = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.95), solidGlass);
      innerCube.rotation.set(Math.PI / 4, Math.PI / 4, 0);
      group.add(new THREE.Mesh(new THREE.BoxGeometry(1.65, 1.65, 1.65), wireCyan), innerCube);
    } else if (activeCore === "processor") {
      const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.65, 0), accentMat);
      core.position.y = 0.45;
      group.add(
        new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 1.8), solidGlass),
        new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.38, 1.9), wireCyan),
        core
      );
    } else if (activeCore === "orb") {
      group.add(
        new THREE.Mesh(new THREE.TorusKnotGeometry(0.95, 0.24, 96, 16), wireCyan),
        new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 24), solidGlass)
      );
    } else {
      group.add(
        new THREE.Mesh(new THREE.CylinderGeometry(1.45, 1.45, 0.22, 8), solidGlass),
        new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 0.26, 16), wireCyan)
      );
    }
  }, [activeCore]);

  const activeObj = AI_CORE_MODES.find((m) => m.id === activeCore) || AI_CORE_MODES[0];

  return (
    <div className="holo-card hud-corners rounded-3xl p-4 sm:p-5 relative">
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-white">
            AI CORE // <span style={{ color: "var(--os-primary)" }}>{activeObj.label.toUpperCase()}</span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            const others = AI_CORE_MODES.filter((m) => m.id !== activeCore);
            const next = others[Math.floor(Math.random() * others.length)];
            setActiveCore(next.id);
          }}
          className="px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1 transition"
        >
          <Shuffle className="w-3 h-3" />
          <span>RANDOMIZE</span>
        </button>
      </div>

      <div className="relative w-full h-[340px] sm:h-[390px] rounded-2xl bg-slate-950/90 border border-slate-800/90 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />

        {/* Radar Sweep Mini-HUD Top-Left */}
        <div className="absolute top-3 left-3 flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-xl p-2 pointer-events-none">
          <div className="relative w-9 h-9 rounded-full border border-cyan-400/40 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 radar-sweep rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
          </div>
          <div className="font-mono text-[10px] leading-tight">
            <div className="text-cyan-300 font-semibold">RADAR // ACTIVE</div>
            <div className="text-slate-400">{fps} FPS • WEBGL2</div>
          </div>
        </div>

        {/* Live Telemetry Overlay Bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 bg-slate-950/80 backdrop-blur-md border border-slate-800/90 rounded-xl px-3 py-2 pointer-events-none text-[10px] font-mono">
          <span className="text-slate-400">DRAG TO ROTATE • MOVE MOUSE FOR PARALLAX</span>
          <span className="text-emerald-400">TELEMETRY: {activeObj.telemetry}</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex items-center justify-between">
          <span>SELECT HOLOGRAPHIC AI CORE ARCHITECTURE (8 MODES):</span>
          <span className="text-cyan-400">INTERACTIVE 3D</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {AI_CORE_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveCore(m.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-mono border transition truncate ${
                activeCore === m.id
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                  : "border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-400/50"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
