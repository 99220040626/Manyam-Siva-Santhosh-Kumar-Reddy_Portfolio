"use client";
import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";

export default function FridayAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "F.R.I.D.A.Y.",
      text: "Greetings! I am the AI Assistant for Manyam Siva Santhosh Kumar Reddy. Ask me about his projects, Java & Spring Boot skills, 92% accuracy TensorFlow ANN, CGPA (8.34), or contact info!",
    },
  ]);

  const handleAsk = (query: string) => {
    const q = query.toLowerCase();
    let reply =
      "Manyam Siva Santhosh Kumar Reddy is a Full-Stack Software Engineer (B.E. CSE at Kalasalingam University, CGPA 8.34) skilled in Java, Spring Boot, Python, TensorFlow, SQL, MySQL, and React.";

    if (q.includes("project")) {
      reply =
        "Santhosh built: (1) E-Commerce Web Application (Jan–Mar 2024) using React, Spring Boot, RESTful APIs, Spring Data JPA/Hibernate, and MySQL; and (2) Thyroid Disease Detection System (Jan–Mar 2025) using Python & TensorFlow ANN with SMOTE and dropout, achieving 92% test accuracy.";
    } else if (q.includes("java") || q.includes("skill")) {
      reply =
        "Core Skills: Java, Python, SQL, Spring Boot, RESTful APIs, HTML5, CSS3, React, MySQL, TensorFlow, Scikit-learn, Pandas, NumPy, Git & GitHub. 5x CodeChef Certified (2025).";
    } else if (q.includes("resume") || q.includes("download")) {
      reply = `You can download Santhosh's PDF resume directly at ${RESUME_DATA.resumePdfPath}`;
    } else if (q.includes("github") || q.includes("leetcode")) {
      reply = `GitHub: ${RESUME_DATA.github} | LeetCode: ${RESUME_DATA.leetcode} | Portfolio: ${RESUME_DATA.portfolio}`;
    } else if (q.includes("interview") || q.includes("contact")) {
      reply = `Reach Santhosh directly at ${RESUME_DATA.email} or ${RESUME_DATA.phone}.`;
    }

    setMessages((prev) => [...prev, { sender: "YOU", text: query }, { sender: "F.R.I.D.A.Y.", text: reply }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#0B1020]/95 backdrop-blur-xl border border-cyan-400/50 p-4 shadow-2xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-xs font-bold text-cyan-300">F.R.I.D.A.Y // SANTHOSH-AI</span>
            <button type="button" onClick={() => setOpen(false)} className="text-xs font-mono text-slate-400 hover:text-white">
              CLOSE
            </button>
          </div>
          <div className="h-56 overflow-y-auto space-y-2 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200">
                <div className="font-mono text-[10px] text-cyan-300 mb-0.5">{m.sender}</div>
                <div>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {["Tell me about your projects", "Show Java Skills", "Download Resume", "Open GitHub", "Schedule Interview"].map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleAsk(chip)}
                className="px-2 py-1 rounded bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-mono text-cyan-300"
              >
                {chip}
              </button>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim()) return;
              handleAsk(input.trim());
              setInput("");
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask F.R.I.D.A.Y..."
              className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
            />
            <button type="submit" className="px-3 py-1.5 rounded-xl bg-cyan-400 text-slate-950 font-mono text-xs font-bold">
              SEND
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-3 rounded-2xl font-mono text-xs font-bold text-slate-950 shadow-xl"
        style={{ background: "linear-gradient(135deg, #00F5FF, #4ADE80)" }}
      >
        F.R.I.D.A.Y. AI ASSISTANT
      </button>
    </div>
  );
}
