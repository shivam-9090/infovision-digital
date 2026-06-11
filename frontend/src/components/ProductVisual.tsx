import React, { useEffect, useState } from "react";
import "./ProductVisual.css";

interface ProductVisualProps {
  id: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ id }) => {
  const [gptLines, setGptLines] = useState<string[]>([]);
  const [neuralPulse, setNeuralPulse] = useState(0);

  // Animate terminal lines for GPT
  useEffect(() => {
    if (id !== "infovision-gpt") return;

    const lines = [
      "system@infovision:~# npx infovision-gpt-run --t=0.7",
      "Initializing model tensors...",
      "Loading weights [4.5B params] on GPU:0... OK",
      "Model inference server listening on port 8080...",
      "Query: 'Optimize the user transaction pipeline'",
      "InfoVision-GPT: Analyzing sequence...",
      "Recommendation: Apply composite index (user_id, status)",
      "Recommendation: Enable multi-stage query batching",
      "Inference completed in 142ms. tokens/sec: 84.2",
    ];

    setGptLines([lines[0]]);
    let currentLine = 1;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setGptLines((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        // Reset to simulate loop
        setGptLines([lines[0]]);
        currentLine = 1;
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [id]);

  // Animate sifera node pulses
  useEffect(() => {
    if (id !== "sifera-v1") return;
    const interval = setInterval(() => {
      setNeuralPulse((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, [id]);

  switch (id) {
    case "crm-infovision":
      return (
        <div className="visual-container visual-crm">
          {/* Browser Chrome */}
          <div className="browser-chrome">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-url">crm.infovision.digital</div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="crm-dashboard">
            <div className="crm-sidebar">
              <div className="sidebar-logo"></div>
              <div className="sidebar-line long"></div>
              <div className="sidebar-line short"></div>
              <div className="sidebar-line long"></div>
              <div className="sidebar-line short"></div>
              <div className="sidebar-line long"></div>
            </div>
            <div className="crm-main">
              <div className="crm-header">
                <div className="crm-header-title">Sales Pipeline</div>
                <div className="crm-header-button">+ Add Deal</div>
              </div>
              <div className="crm-pipeline">
                <div className="pipeline-column">
                  <div className="column-header">LEAD</div>
                  <div className="deal-card">
                    <div className="deal-name">Acme Corp</div>
                    <div className="deal-value">$25,000</div>
                    <div className="deal-pill lead-pill">Inbound</div>
                  </div>
                  <div className="deal-card">
                    <div className="deal-name">Globex Inc</div>
                    <div className="deal-value">$12,500</div>
                    <div className="deal-pill lead-pill">Referral</div>
                  </div>
                </div>
                <div className="pipeline-column">
                  <div className="column-header">MEETING</div>
                  <div className="deal-card">
                    <div className="deal-name">Stark Industries</div>
                    <div className="deal-value">$120,000</div>
                    <div className="deal-pill meeting-pill">Demo Scheduled</div>
                  </div>
                </div>
                <div className="pipeline-column">
                  <div className="column-header">CLOSED</div>
                  <div className="deal-card">
                    <div className="deal-name">Wayne Ent.</div>
                    <div className="deal-value">$80,000</div>
                    <div className="deal-pill closed-pill">Closed Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "infovision-gpt":
      return (
        <div className="visual-container visual-gpt">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="terminal-title">shivam@infovision:~</div>
          </div>
          <div className="terminal-body">
            {gptLines.map((line, idx) => {
              if (!line) return null;
              const isCommand = line.startsWith("system@");
              const isInfo = line.startsWith("InfoVision-GPT:");
              const isQuery = line.startsWith("Query:");
              const isRecommendation = line.startsWith("Recommendation:");
              
              let className = "term-line";
              if (isCommand) className += " term-cmd";
              else if (isInfo) className += " term-info";
              else if (isQuery) className += " term-query";
              else if (isRecommendation) className += " term-rec";
              
              return (
                <div key={idx} className={className}>
                  {line}
                </div>
              );
            })}
            <div className="terminal-cursor"></div>
          </div>
        </div>
      );

    case "image-gen-art":
      return (
        <div className="visual-container visual-art">
          <div className="art-panel-left">
            <div className="param-group">
              <span className="param-label">CFG Scale</span>
              <div className="param-slider-track">
                <div className="param-slider-fill" style={{ width: "75%" }}></div>
                <div className="param-slider-thumb" style={{ left: "75%" }}></div>
              </div>
              <span className="param-value">7.5</span>
            </div>
            <div className="param-group">
              <span className="param-label">Steps</span>
              <div className="param-slider-track">
                <div className="param-slider-fill" style={{ width: "50%" }}></div>
                <div className="param-slider-thumb" style={{ left: "50%" }}></div>
              </div>
              <span className="param-value">50</span>
            </div>
            <div className="prompt-display">
              "Biophilic architectural glass tower at twilight, synthwave gradient, hyper-detailed vector illustration"
            </div>
          </div>
          <div className="art-panel-right">
            <div className="art-canvas">
              <svg viewBox="0 0 100 100" className="art-svg">
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="50%" stopColor="#4c1d95" />
                    <stop offset="100%" stopColor="#831843" />
                  </linearGradient>
                  <linearGradient id="towerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Sky */}
                <rect width="100" height="100" fill="url(#skyGrad)" />
                {/* Grid Floor */}
                <path d="M 0,90 Q 50,70 100,90" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.5" />
                <path d="M 0,93 L 50,75 L 100,93" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.3" />
                {/* Tower */}
                <polygon points="35,90 45,20 55,20 65,90" fill="url(#towerGrad)" stroke="#f472b6" strokeWidth="0.5" />
                {/* Windows lines */}
                <line x1="40" y1="90" x2="47" y2="20" stroke="#f472b6" strokeWidth="0.25" strokeOpacity="0.5" />
                <line x1="50" y1="90" x2="50" y2="20" stroke="#f472b6" strokeWidth="0.25" strokeOpacity="0.5" />
                <line x1="60" y1="90" x2="53" y2="20" stroke="#f472b6" strokeWidth="0.25" strokeOpacity="0.5" />
                {/* Bioluminescent dots */}
                <circle cx="20" cy="50" r="1" fill="#f472b6" />
                <circle cx="25" cy="40" r="1.5" fill="#a855f7" />
                <circle cx="75" cy="45" r="2" fill="#3b82f6" />
                <circle cx="80" cy="60" r="1.2" fill="#f472b6" />
              </svg>
            </div>
          </div>
        </div>
      );

    case "sifera-v1":
      return (
        <div className="visual-container visual-sifera">
          <div className="neural-stats">
            <div className="stat-row">
              <span className="stat-lbl">epoch:</span> <span className="stat-val">34 / 100</span>
            </div>
            <div className="stat-row">
              <span className="stat-lbl">loss:</span> <span className="stat-val">0.0418</span>
            </div>
            <div className="stat-row">
              <span className="stat-lbl">learning_rate:</span> <span className="stat-val">3e-4</span>
            </div>
          </div>
          <div className="neural-graph">
            {/* Input layer */}
            <div className="neural-layer">
              <div className={`neural-node ${neuralPulse === 0 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 0 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 0 ? "pulse" : ""}`}></div>
            </div>
            {/* Hidden layer */}
            <div className="neural-layer">
              <div className={`neural-node ${neuralPulse === 1 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 1 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 1 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 1 ? "pulse" : ""}`}></div>
            </div>
            {/* Output layer */}
            <div className="neural-layer">
              <div className={`neural-node ${neuralPulse === 2 ? "pulse" : ""}`}></div>
              <div className={`neural-node ${neuralPulse === 2 ? "pulse" : ""}`}></div>
            </div>
            {/* Svg lines connecting */}
            <svg className="neural-connections">
              {/* Inputs to Hidden */}
              <line x1="15%" y1="20%" x2="50%" y2="15%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="15%" y1="20%" x2="50%" y2="38%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="15%" y1="50%" x2="50%" y2="38%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="15%" y1="50%" x2="50%" y2="62%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <line x1="15%" y1="80%" x2="50%" y2="62%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="15%" y1="80%" x2="50%" y2="85%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              {/* Hidden to Output */}
              <line x1="50%" y1="15%" x2="85%" y2="35%" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
              <line x1="50%" y1="38%" x2="85%" y2="35%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50%" y1="62%" x2="85%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
              <line x1="50%" y1="85%" x2="85%" y2="65%" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      );

    case "catalstudio":
      return (
        <div className="visual-container visual-catal">
          <div className="catal-sidebar">
            <div className="catal-tool active">Studio</div>
            <div className="catal-tool">Assets</div>
            <div className="catal-tool">History</div>
            <div className="catal-divider"></div>
            <div className="catal-preset-grid">
              <div className="catal-preset active">Studio Light</div>
              <div className="catal-preset">Outdoors</div>
              <div className="catal-preset">Minimalist</div>
            </div>
          </div>
          <div className="catal-canvas-area">
            <div className="catal-canvas-header">
              <span className="catal-status">Active Canvas</span>
              <span className="catal-badge">AI Synthesis</span>
            </div>
            <div className="catal-canvas">
              <svg viewBox="0 0 100 100" className="catal-svg">
                <defs>
                  <linearGradient id="catalBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="productGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                </defs>
                {/* Background */}
                <rect width="100" height="100" rx="4" fill="url(#catalBg)" />
                {/* Grid lines */}
                <line x1="10" y1="80" x2="90" y2="80" stroke="#334155" strokeWidth="0.5" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#334155" strokeWidth="0.25" strokeDasharray="2,2" />
                {/* Pedestal */}
                <ellipse cx="50" cy="80" rx="30" ry="10" fill="url(#pedestalGrad)" stroke="#64748b" strokeWidth="0.5" />
                {/* Product Mockup: Sleek Bottle */}
                <path d="M 45,35 L 55,35 L 55,42 L 62,50 L 62,75 Q 50,78 38,75 L 38,50 L 45,42 Z" fill="url(#productGrad)" stroke="#94a3b8" strokeWidth="0.75" />
                <line x1="45" y1="42" x2="55" y2="42" stroke="#475569" strokeWidth="0.5" />
                <rect x="47" y="30" width="6" height="5" rx="1" fill="#64748b" />
                {/* Synthesis scan line */}
                <line x1="30" y1="55" x2="70" y2="55" stroke="#38bdf8" strokeWidth="0.75" className="catal-scan-line" />
                {/* Tag indicators */}
                <circle cx="62" cy="50" r="1.5" fill="#38bdf8" />
                <line x1="62" y1="50" x2="75" y2="45" stroke="#38bdf8" strokeWidth="0.5" />
                <text x="77" y="46.5" fill="#38bdf8" fontSize="3" fontFamily="sans-serif">Edge Detection</text>
              </svg>
            </div>
          </div>
        </div>
      );

    case "nivassetu":
      return (
        <div className="visual-container visual-nivas">
          {/* Map viewport */}
          <div className="nivas-map-header">
            <div className="nivas-search">
              <span className="nivas-search-icon">🔍</span>
              <span className="nivas-search-text">Ahmedabad, Gujarat</span>
            </div>
            <div className="nivas-filter">Zero Brokerage</div>
          </div>
          <div className="nivas-map-canvas">
            {/* Grid Map Background */}
            <svg viewBox="0 0 100 100" className="nivas-map-svg">
              {/* Roads */}
              <path d="M 0,20 L 100,20" stroke="#334155" strokeWidth="2" fill="none" />
              <path d="M 30,0 L 30,100" stroke="#334155" strokeWidth="1.5" fill="none" />
              <path d="M 70,0 L 70,100" stroke="#334155" strokeWidth="1.5" fill="none" />
              <path d="M 0,75 L 100,75" stroke="#334155" strokeWidth="2" fill="none" />
              {/* Parks */}
              <rect x="5" y="5" width="20" height="10" rx="1" fill="#065f46" opacity="0.4" />
              <rect x="75" y="30" width="20" height="35" rx="1" fill="#065f46" opacity="0.4" />
              {/* Property Markers */}
              <g className="nivas-marker" style={{ transform: "translate(30px, 45px)" }}>
                <circle cx="0" cy="0" r="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                <text x="0" y="2" textAnchor="middle" fill="#38bdf8" fontSize="4.5" fontWeight="bold">₹15k</text>
              </g>
              <g className="nivas-marker" style={{ transform: "translate(55px, 25px)" }}>
                <circle cx="0" cy="0" r="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                <text x="0" y="2" textAnchor="middle" fill="#38bdf8" fontSize="4.5" fontWeight="bold">₹18k</text>
              </g>
              <g className="nivas-marker active" style={{ transform: "translate(45px, 60px)" }}>
                {/* Custom map pin marker */}
                <path d="M 0,0 C -5,-5 -5,-12 0,-17 C 5,-12 5,-5 0,0 Z" fill="#38bdf8" style={{ transform: "scale(0.8) translate(0px, -2px)" }} />
                <circle cx="0" cy="-12" r="2" fill="#0f172a" />
              </g>
            </svg>
            {/* Active Listing Card (Floating on map) */}
            <div className="nivas-listing-card">
              <div className="listing-details">
                <div className="listing-title">Modern 2 BHK Apartment</div>
                <div className="listing-price">₹15,000/mo</div>
                <div className="listing-badges">
                  <span className="badge verified">Verified Owner</span>
                  <span className="badge fee">0% Brokerage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "trilunafashion":
      return (
        <div className="visual-container visual-triluna">
          <div className="triluna-header">
            <span className="triluna-logo-text">Triluna Fashion</span>
            <div className="triluna-cart-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="triluna-cart-icon">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>3</span>
            </div>
          </div>
          <div className="triluna-shop-body">
            <div className="triluna-sidebar">
              <span className="triluna-cat active">Sarees</span>
              <span className="triluna-cat">Banarasi</span>
              <span className="triluna-cat">Georgette</span>
            </div>
            <div className="triluna-product-display">
              <div className="triluna-product-card">
                <div className="triluna-svg-wrapper">
                  <svg viewBox="0 0 100 100" className="triluna-svg">
                    <defs>
                      <linearGradient id="sareeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                    {/* Hanger */}
                    <path d="M 50,15 C 50,10 53,10 53,12 C 53,15 50,18 50,18 L 35,26 L 65,26 Z" fill="none" stroke="#64748b" strokeWidth="0.8" />
                    {/* Fabric drape/saree vector outline */}
                    <path d="M 36,26 L 64,26 Q 66,35 60,50 Q 52,65 58,85 Q 50,88 42,85 Q 48,65 40,50 Q 34,35 36,26" fill="url(#sareeGrad)" stroke="#f472b6" strokeWidth="0.5" />
                    {/* Border embroidery pattern */}
                    <path d="M 36,26 L 40,50 L 42,85" fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="1,1" />
                    <path d="M 64,26 L 60,50 L 58,85" fill="none" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="1,1" />
                  </svg>
                </div>
                <div className="triluna-info">
                  <span className="triluna-title">Banarasi Silk Saree</span>
                  <span className="triluna-price">₹4,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "mclaren-infovision":
      return (
        <div className="visual-container visual-mclaren">
          {/* WebGL Viewport HUD overlay */}
          <div className="mclaren-hud">
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>
            <div className="hud-status">CAM_04: PERSPECTIVE</div>
            <div className="hud-pos">GRID POS: 7/7</div>
          </div>
          {/* Minimalist 3D Car Vector outline */}
          <div className="mclaren-vector">
            <svg viewBox="0 0 160 100" className="car-svg">
              <path
                d="M 10,65 Q 20,40 50,38 Q 65,30 90,32 Q 130,35 145,55 L 155,60 Q 150,68 140,68 L 125,68 Q 120,55 105,55 Q 90,55 85,68 L 55,68 Q 50,55 35,55 Q 20,55 15,68 L 10,65"
                fill="none"
                stroke="#f97316"
                strokeWidth="1.5"
                className="car-contour"
              />
              <circle cx="35" cy="62" r="10" fill="none" stroke="#f97316" strokeWidth="1" />
              <circle cx="105" cy="62" r="10" fill="none" stroke="#f97316" strokeWidth="1" />
              {/* Speed lines */}
              <line x1="20" y1="25" x2="40" y2="25" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" />
              <line x1="15" y1="35" x2="30" y2="35" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" />
            </svg>
          </div>
          {/* UI Controls Overlay */}
          <div className="mclaren-controls">
            <div className="control-slider">
              <span>Aero</span>
              <div className="slider-dot active"></div>
              <div className="slider-dot active"></div>
              <div className="slider-dot"></div>
            </div>
            <div className="color-pulses">
              <span className="color-dot color-orange active"></span>
              <span className="color-dot color-silver"></span>
              <span className="color-dot color-black"></span>
            </div>
          </div>
        </div>
      );

    default:
      return <div className="visual-container placeholder-visual">Visual Preview</div>;
  }
};
