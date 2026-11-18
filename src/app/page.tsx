"use client";
import React, { useEffect } from "react";
import { EXACT_OS_HTML, EXACT_OS_SCRIPT } from "@/data/exactOsTemplate";

export default function PortfolioOSPage() {
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.textContent = EXACT_OS_SCRIPT;
    document.body.appendChild(scriptEl);
    return () => {
      scriptEl.remove();
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: EXACT_OS_HTML }}
    />
  );
}
