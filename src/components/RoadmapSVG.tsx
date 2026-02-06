'use client';

interface NodeProps {
  id: string;
  title: string;
  desc: string;
  video?: string;
  link?: string;
  x: number;
  y: number;
  width: number;
  fill: string;
  textFill?: string;
}

const RoadmapNode = ({ id, title, video, link, x, y, width, fill, textFill = 'black' }: NodeProps) => {
  const handleClick = () => {
    if (video) {
      window.open(video, '_blank');
    } else if (link) {
      window.open(`https://${link}`, '_blank');
    }
  };

  return (
    <g
      className="clickable-group"
      onClick={handleClick}
      transform={`translate(${x}, ${y})`}
    >
      <rect
        x="0"
        y="0"
        width={width}
        height="46.3"
        rx="5"
        fill={fill}
        stroke="black"
        strokeWidth="2.7"
      />
      <text
        x={width / 2}
        y="28"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="17"
        fill={textFill}
      >
        {title}
      </text>
    </g>
  );
};

export default function RoadmapSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -20 1100 3000" width="1100" height="3000">
      {/* Main vertical line */}
      <path d="M 500 50 L 500 2850" stroke="#555555" strokeWidth="3" fill="none" />

      {/* ==================== FOUNDATION (Yellow) ==================== */}

      {/* LLM Fundamentals */}
      <RoadmapNode id="llm-fundamentals" title="LLM Fundamentals" desc="Core concepts of Large Language Models" x={412.35} y={50} width={175.3} fill="#feff00" />

      <path d="M 587.65 73 C 620 73, 650 50, 670 50" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 73 C 620 73, 650 100, 670 100" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 73 C 620 73, 650 150, 670 150" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 73 C 620 73, 650 200, 670 200" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="what-is-llm" title="What is an LLM?" desc="Introduction to Large Language Models" video="https://www.youtube.com/watch?v=LPZh9BOjkQs" x={670} y={27} width={180} fill="#feff99" />
      <RoadmapNode id="how-llms-generate" title="How LLMs Generate Text" desc="Understanding text generation in LLMs" video="https://www.youtube.com/watch?v=NKnZYvZA7w4" x={670} y={77} width={220} fill="#feff99" />
      <RoadmapNode id="context-windows" title="Context Windows" desc="Understanding context length and memory" video="https://www.youtube.com/watch?v=-QVoIxEpFkM" x={670} y={127} width={180} fill="#feff99" />
      <RoadmapNode id="connecting-api" title="Connecting to an LLM's API" desc="How to connect and use LLM APIs" video="https://www.youtube.com/watch?v=qgT-quk3JEo" x={670} y={177} width={240} fill="#feff99" />

      {/* The Big 3 Models */}
      <RoadmapNode id="big-3-models" title="The Big 3 Models" desc="The leading AI models you need to know" x={412.35} y={280} width={175.3} fill="#feff00" />

      <path d="M 412.35 303 C 380 303, 350 280, 330 280" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 303 C 380 303, 350 330, 330 330" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 303 C 380 303, 350 380, 330 380" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="chatgpt" title="ChatGPT" desc="OpenAI's flagship conversational AI" video="https://www.youtube.com/watch?v=rYLT4vXb73I" x={190} y={257} width={140} fill="#feff99" />
      <RoadmapNode id="claude" title="Claude" desc="Anthropic's helpful AI assistant" video="https://www.youtube.com/watch?v=t1eHNDB2LOM" x={190} y={307} width={140} fill="#feff99" />
      <RoadmapNode id="gemini" title="Gemini" desc="Google's multimodal AI model" video="https://www.youtube.com/watch?v=-_FizlRlfYs" x={190} y={357} width={140} fill="#feff99" />

      {/* Prompt Engineering */}
      <RoadmapNode id="prompt-engineering" title="Prompt Engineering" desc="The art of crafting effective prompts" x={412.35} y={480} width={175.3} fill="#feff00" />

      <path d="M 587.65 503 C 620 503, 650 480, 670 480" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 503 C 620 503, 650 530, 670 530" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 503 C 620 503, 650 580, 670 580" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="basic-prompt" title="Basic Prompt Engineering" desc="Fundamentals of writing effective prompts" video="https://www.youtube.com/watch?v=p09yRj47kNM" x={670} y={457} width={250} fill="#feff99" />
      <RoadmapNode id="structured-outputs" title="Structured Outputs" desc="Getting consistent, formatted responses" video="https://www.youtube.com/watch?v=fuMKrKlaku4" x={670} y={507} width={200} fill="#feff99" />
      <RoadmapNode id="guardrails" title="Guardrails" desc="Implementing safety and constraints" video="https://www.youtube.com/watch?v=rMUycP_cp9g" x={670} y={557} width={140} fill="#feff99" />

      {/* Context Engineering */}
      <RoadmapNode id="context-engineering" title="Context Engineering" desc="Advanced techniques for providing context to LLMs" x={412.35} y={680} width={175.3} fill="#feff00" />

      <path d="M 412.35 703 C 380 703, 350 660, 330 660" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 703 C 380 703, 350 710, 250 710" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 703 C 380 703, 350 760, 270 760" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 703 C 380 703, 350 810, 330 810" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 703 C 380 703, 350 860, 290 860" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="context-101" title="Context Engineering 101" desc="Introduction to context engineering" video="https://www.youtube.com/watch?v=wzhpkhJZYhA" x={100} y={637} width={230} fill="#feff99" />
      <RoadmapNode id="claude-skills" title="Claude Skills" desc="Using Claude's CLAUDE.md and skills" video="https://www.youtube.com/watch?v=loz60mALXxA" x={100} y={687} width={150} fill="#feff99" />
      <RoadmapNode id="mcp" title="Model Context Protocol" desc="Model Context Protocol for tool use" video="https://www.youtube.com/watch?v=kOhLoixrJXo" x={30} y={737} width={240} fill="#feff99" />
      <RoadmapNode id="rag" title="Retrieval Augmented Generation" desc="Enhancing LLMs with external knowledge" video="https://www.youtube.com/watch?v=_HQ2H_0Ayy0" x={30} y={787} width={300} fill="#feff99" />
      <RoadmapNode id="knowledge-graphs" title="Knowledge Graphs" desc="Structured knowledge for AI systems" video="https://www.youtube.com/watch?v=O-T_6KOXML4" x={100} y={837} width={190} fill="#feff99" />

      {/* ==================== CODING (Red) ==================== */}

      {/* AI-Native IDEs */}
      <RoadmapNode id="ai-native-ides" title="AI-Native IDEs" desc="Code editors built for AI-assisted development" x={412.35} y={990} width={175.3} fill="#ff6b6b" textFill="white" />

      <path d="M 587.65 1013 C 620 1013, 650 1013, 670 1013" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="cursor" title="Cursor" desc="The AI-first code editor" video="https://www.youtube.com/watch?v=Qcxq4iXLZbY" x={670} y={990} width={130} fill="#ffb5b5" />

      {/* Terminal Agents */}
      <RoadmapNode id="terminal-agents" title="Terminal Agents" desc="AI coding assistants in your terminal" x={412.35} y={1120} width={175.3} fill="#ff6b6b" textFill="white" />

      <path d="M 412.35 1143 C 380 1143, 350 1120, 330 1120" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 1143 C 380 1143, 350 1170, 320 1170" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 412.35 1143 C 380 1143, 350 1220, 320 1220" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="claude-code" title="Claude Code" desc="Anthropic's terminal-based coding agent" video="https://www.youtube.com/watch?v=2JEzjfs6Kew" x={180} y={1097} width={150} fill="#ffb5b5" />
      <RoadmapNode id="open-code" title="Open Code" desc="Open source terminal coding assistant" video="https://www.youtube.com/watch?v=WOOzCHaQipU" x={180} y={1147} width={140} fill="#ffb5b5" />
      <RoadmapNode id="gemini-cli" title="Gemini CLI" desc="Google's command-line AI assistant" video="https://www.youtube.com/watch?v=WxXUbiz6RQE" x={180} y={1197} width={140} fill="#ffb5b5" />

      {/* Prompt to App Platforms */}
      <RoadmapNode id="prompt-to-app" title="Prompt to App Platforms" desc="Build apps with natural language" x={387.35} y={1320} width={225} fill="#ff6b6b" textFill="white" />

      <path d="M 612.35 1343 C 650 1343, 680 1300, 700 1300" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 612.35 1343 C 650 1343, 680 1350, 700 1350" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 612.35 1343 C 650 1343, 680 1400, 700 1400" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 612.35 1343 C 650 1343, 680 1450, 700 1450" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="codex" title="Codex" desc="OpenAI's code generation platform" video="https://www.youtube.com/watch?v=lSeR9RdrIdA" x={700} y={1277} width={130} fill="#ffb5b5" />
      <RoadmapNode id="lovable" title="Lovable" desc="AI-powered app builder" video="https://www.youtube.com/watch?v=rqvtLxwMklo" x={700} y={1327} width={130} fill="#ffb5b5" />
      <RoadmapNode id="bolt-new" title="Bolt.new" desc="Instant full-stack web apps" video="https://www.youtube.com/watch?v=5zfOitaKfmM" x={700} y={1377} width={130} fill="#ffb5b5" />
      <RoadmapNode id="replit" title="Replit" desc="AI-powered collaborative coding" video="https://www.youtube.com/watch?v=TAXRZyGV1Dw" x={700} y={1427} width={130} fill="#ffb5b5" />

      {/* ==================== CREATIVE (Purple) ==================== */}

      {/* AI Creative Tool Suites */}
      <RoadmapNode id="creative-suites" title="AI Creative Tool Suites" desc="All-in-one creative AI platforms" x={400} y={1590} width={200} fill="#9b59b6" textFill="white" />

      <path d="M 400 1613 C 370 1613, 340 1600, 320 1600" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 400 1613 C 370 1613, 340 1650, 310 1650" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="higgsfield" title="Higgsfield" desc="AI creative suite for video and more" video="https://www.youtube.com/watch?v=nnGFEUeL-P0" x={180} y={1577} width={140} fill="#cdacdb" />
      <RoadmapNode id="freepik" title="Freepik" desc="AI-powered design resources" video="https://www.youtube.com/watch?v=Z08JELD20Nc" x={180} y={1627} width={130} fill="#cdacdb" />

      {/* AI Image */}
      <RoadmapNode id="ai-image" title="AI Image" desc="AI image generation tools" x={437.35} y={1750} width={125} fill="#9b59b6" textFill="white" />

      <path d="M 562.35 1773 C 600 1773, 630 1730, 650 1730" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 562.35 1773 C 600 1773, 630 1780, 650 1780" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 562.35 1773 C 600 1773, 630 1830, 650 1830" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 562.35 1773 C 600 1773, 630 1880, 650 1880" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="nano-banana" title="Nano Banana Pro" desc="Advanced AI image generation" video="https://www.youtube.com/watch?v=ZCw325FiS78" x={650} y={1707} width={180} fill="#cdacdb" />
      <RoadmapNode id="gpt-image" title="GPT-Image" desc="OpenAI's image generation" video="https://www.youtube.com/watch?v=QT1nMo-QMDQ" x={650} y={1757} width={140} fill="#cdacdb" />
      <RoadmapNode id="midjourney" title="Midjourney" desc="Premium AI art generation" video="https://www.youtube.com/watch?v=xoZG5WQbgMw" x={650} y={1807} width={140} fill="#cdacdb" />
      <RoadmapNode id="seedream" title="Seedream" desc="Creative AI image platform" video="https://www.youtube.com/watch?v=fYVXpDNlSVs" x={650} y={1857} width={130} fill="#cdacdb" />

      {/* AI Video */}
      <RoadmapNode id="ai-video" title="AI Video" desc="AI video generation tools" x={437.35} y={1970} width={125} fill="#9b59b6" textFill="white" />

      <path d="M 437.35 1993 C 400 1993, 370 1960, 350 1960" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 437.35 1993 C 400 1993, 370 2010, 300 2010" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 437.35 1993 C 400 1993, 370 2060, 310 2060" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="veo" title="Google Veo 3.1" desc="Google's video generation model" video="https://www.youtube.com/watch?v=-g0z62mBSr8" x={180} y={1937} width={170} fill="#cdacdb" />
      <RoadmapNode id="sora" title="Sora 2" desc="OpenAI's video generation" video="https://www.youtube.com/watch?v=lHhHEw-Nkg0" x={180} y={1987} width={120} fill="#cdacdb" />
      <RoadmapNode id="kling" title="Kling 3.0" desc="Advanced AI video creation" video="https://www.youtube.com/watch?v=z84WQAn6U0I" x={180} y={2037} width={130} fill="#cdacdb" />

      {/* AI Copywriting */}
      <RoadmapNode id="ai-copywriting" title="AI Copywriting" desc="AI-powered writing and content creation" x={412.35} y={2150} width={175.3} fill="#9b59b6" textFill="white" />

      <path d="M 587.65 2173 C 620 2173, 650 2150, 670 2150" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 587.65 2173 C 620 2173, 650 2200, 670 2200" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="copywriting-fundamentals" title="Copywriting Fundamentals" desc="Essential copywriting techniques with AI" video="https://www.youtube.com/watch?v=pZ82pzVoAZo" x={670} y={2127} width={230} fill="#cdacdb" />
      <RoadmapNode id="copywriting-claude" title="Copywriting w/ Claude" desc="Using Claude for professional copywriting" video="https://www.youtube.com/watch?v=ICnZ8DhfetE" x={670} y={2177} width={220} fill="#cdacdb" />

      {/* AI Audio */}
      <RoadmapNode id="ai-audio" title="AI Audio" desc="AI audio and music generation" x={437.35} y={2310} width={125} fill="#9b59b6" textFill="white" />

      <path d="M 437.35 2333 C 400 2333, 370 2320, 350 2320" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 437.35 2333 C 400 2333, 370 2370, 310 2370" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="elevenlabs" title="ElevenLabs" desc="AI voice synthesis and cloning" video="https://www.youtube.com/watch?v=s7p6OLwV_50" x={210} y={2297} width={140} fill="#cdacdb" />
      <RoadmapNode id="suno" title="Suno" desc="AI music generation" video="https://www.youtube.com/watch?v=72R1NjNaUnE" x={210} y={2347} width={100} fill="#cdacdb" />

      {/* ==================== AUTOMATION (Blue) ==================== */}

      {/* No-Code Automation Tools */}
      <RoadmapNode id="no-code-automation" title="No-Code Automation Tools" desc="Build automations without coding" x={375} y={2510} width={250} fill="#3498db" textFill="white" />

      <path d="M 625 2533 C 660 2533, 690 2520, 710 2520" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 625 2533 C 660 2533, 690 2570, 710 2570" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="n8n" title="n8n" desc="Open source workflow automation" video="https://www.youtube.com/watch?v=Fy1UCBcgF2o" x={710} y={2497} width={100} fill="#9acced" />
      <RoadmapNode id="make" title="Make" desc="Visual automation platform" video="https://www.youtube.com/watch?v=JSA2oezQWOU" x={710} y={2547} width={100} fill="#9acced" />

      {/* Automation Tools */}
      <RoadmapNode id="code-automation" title="Automation Tools" desc="Programmatic automation with AI" x={400} y={2680} width={200} fill="#3498db" textFill="white" />

      <path d="M 400 2703 C 365 2703, 330 2680, 310 2680" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />
      <path d="M 400 2703 C 365 2703, 330 2730, 310 2730" stroke="#555555" strokeWidth="2" strokeDasharray="6, 4" fill="none" />

      <RoadmapNode id="automation-claude-code" title="Automation w/ Claude Code" desc="Building automations with Claude Code" video="https://www.youtube.com/watch?v=saggDHHnmtQ" x={50} y={2657} width={260} fill="#9acced" />
      <RoadmapNode id="clawdbot" title="Clawdbot" desc="AI-powered automation bot" video="https://www.youtube.com/watch?v=a63dUwXUgDo" x={170} y={2707} width={140} fill="#9acced" />

      {/* ==================== MONETIZATION (Green) ==================== */}

      {/* Monetization */}
      <RoadmapNode id="monetization" title="Monetization" desc="Learn how to MAKE MONEY with AI" link="frontrunning.ai" x={400} y={2850} width={200} fill="#2ecc71" textFill="white" />
    </svg>
  );
}
