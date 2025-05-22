"use client";

import Script from "next/script";
import React, { useEffect } from "react";

// Global type declaration is provided in yotpo.d.ts

const YotpoWidget = () => {
  useEffect(() => {
    const initYotpo = () => {
      if (window.yotpo) {
        window.yotpo.initWidgets();
      }
    };

    // Check if Yotpo script is already loaded
    if (window.yotpo) {
      initYotpo();
    } else {
      // Add event listener for script load
      const script = document.querySelector('script[src*="yotpo.com"]');
      if (script) {
        script.addEventListener("load", initYotpo);
      }
    }
  }, []);

  return (
    <>
      <Script
        src="//staticw2.yotpo.com/ab6bOJ030BjsaF6hJcljgRka0CLDzfybzHAtNhuh/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.yotpo) {
            window.yotpo.initWidgets();
          }
        }}
      />
      <div id="yotpo-testimonials-custom-tab"></div>
    </>
  );
};

export default YotpoWidget;
