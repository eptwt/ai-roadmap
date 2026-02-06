import RoadmapSVG from "@/components/RoadmapSVG";

export default function Home() {
  return (
    <>
      <a
        href="https://frontrunning.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="top-banner"
      >
        CLICK HERE to learn how to use what you learn from this roadmap to make money...
      </a>

      <div className="roadmap-container">
        <div className="roadmap-header">
          <h1>AI Learning Roadmap</h1>
          <p>Master AI from fundamentals to practical applications</p>
        </div>

        <div className="instructions">
          <p>
            <strong>How to use:</strong> Click on any topic to open the tutorial video.
          </p>
        </div>

        <div className="roadmap-legend">
          <div className="roadmap-legend-item">
            <div className="roadmap-legend-icon foundation"></div>
            <span className="roadmap-legend-text">Foundation</span>
          </div>
          <div className="roadmap-legend-item">
            <div className="roadmap-legend-icon coding"></div>
            <span className="roadmap-legend-text">Coding</span>
          </div>
          <div className="roadmap-legend-item">
            <div className="roadmap-legend-icon creative"></div>
            <span className="roadmap-legend-text">Creative</span>
          </div>
          <div className="roadmap-legend-item">
            <div className="roadmap-legend-icon automation"></div>
            <span className="roadmap-legend-text">Automation</span>
          </div>
          <div className="roadmap-legend-item">
            <div className="roadmap-legend-icon monetization"></div>
            <span className="roadmap-legend-text">Monetization</span>
          </div>
        </div>

        <div id="editor-roadmap">
          <RoadmapSVG />
        </div>
      </div>
    </>
  );
}
