import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "./Docs.css"; // 👈 Import external CSS file

export default function Docs() {
  const htmlCode = `<div class="spinner1"></div>`;
  const cssCode = `.spinner1 {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 0, 0, 0.75);
  border-top: 4px solid #60a5fa;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}
@keyframes spin { to { transform: rotate(360deg); } }`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="div">
      <div className="docs-container">
        <h2 style={{ color: "#60a5fa", textAlign: "center" }}>🧩 Spinner Demo Doc</h2>

        {/* Live Preview */}
        <div className="docs-preview">
          <div className="spinner1"></div>
        </div>

        {/* HTML Code */}
        <h3 className="docs-html-title">💡 HTML Code:</h3>
        <pre className="docs-code-block">
          <code className="language-html">{htmlCode}</code>
        </pre>

        {/* CSS Code */}
        <h3 className="docs-css-title">🎨Add css file</h3>
        <pre className="docs-code-block">
          <code className="language-css">{cssCode}</code>
        </pre>
      </div>
    </div>
    
    
  );
}
