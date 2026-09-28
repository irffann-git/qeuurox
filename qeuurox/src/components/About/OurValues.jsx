import React, { useRef } from 'react';
import PaperCrumple from '../PaperCrumple';
import ColorBends from '../ColorBends';
import FoldText from '../FoldText';
import VariableProximity from '../VariableProximity';

// Whole-card artwork, since PaperCrumple can only crumple a real image
// (it loads the src as a WebGL texture) — not live DOM/React content.
// Icon glyph, title and description are all baked into one SVG per card.
//
// Every glyph below is authored inside the same nominal 100x100 box,
// centered on (50,50), so a single transform on the wrapping <g> lines
// all four icons up consistently regardless of each glyph's own shape.
const ICON_SCALE = 0.9;
const ICON_CENTER_X = 150; // card is 300 wide
const ICON_CENTER_Y = 95; // icon vertical center, above the title
const iconTranslateX = ICON_CENTER_X - 50 * ICON_SCALE;
const iconTranslateY = ICON_CENTER_Y - 50 * ICON_SCALE;

const buildCardSvg = ({ title, glyphPaths, lines }) => {
  const lineHeight = 18;
  const descStartY = 230;
  const descLines = lines
    .map(
      (line, i) =>
        `<tspan x="150" dy="${i === 0 ? 0 : lineHeight}">${line}</tspan>`
    )
    .join('');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="380" viewBox="0 0 300 380">
      <rect width="300" height="380" rx="18" fill="#030712"/>
      <rect x="1.5" y="1.5" width="297" height="377" rx="17" fill="none" stroke="#1d3a8a" stroke-opacity="0.5" stroke-width="2"/>
      <g transform="translate(${iconTranslateX},${iconTranslateY}) scale(${ICON_SCALE})" stroke="#3b82f6" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round">
        ${glyphPaths}
      </g>
      <text x="150" y="188" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="17" letter-spacing="1.5" fill="#ffffff">${title}</text>
      <text x="150" y="${descStartY}" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" fill="#9ca3af">${descLines}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const valuesData = [
  {
    title: 'INNOVATE',
    lines: ['We embrace creativity and new', 'technologies to build smarter', 'solutions.'],
    // Bulb: spans roughly x 26-74, y 6-84 within the 0-100 box
    glyphPaths: `
      <path d="M50 6C64 6 74 16 74 30C74 40 68 47 63 53C59 58 57 62 57 68H43C43 62 41 58 37 53C32 47 26 40 26 30C26 16 36 6 50 6Z"/>
      <line x1="40" y1="76" x2="60" y2="76"/>
      <line x1="43" y1="84" x2="57" y2="84"/>
    `,
  },
  {
    title: 'BUILD',
    lines: ['We build with precision, focus', 'and a commitment to quality.'],
    // Code brackets: spans x 8-92, y 20-80
    glyphPaths: `
      <polyline points="30,30 8,50 30,70"/>
      <polyline points="70,30 92,50 70,70"/>
      <line x1="58" y1="20" x2="42" y2="80"/>
    `,
  },
  {
    title: 'DELIVER',
    lines: ['We are dedicated to delivering', 'results that drive measurable', 'success.'],
    // Target: perfectly symmetric, spans x/y 8-92 centered on 50,50
    glyphPaths: `
      <circle cx="50" cy="50" r="42"/>
      <circle cx="50" cy="50" r="26"/>
      <circle cx="50" cy="50" r="8" fill="#3b82f6"/>
    `,
  },
  {
    title: 'GROW TOGETHER',
    lines: ['We grow together with our', 'clients, as partners in their', 'success.'],
    // Two people: spans roughly x 8-92, y 13-82
    glyphPaths: `
      <circle cx="34" cy="26" r="13"/>
      <circle cx="66" cy="26" r="13"/>
      <path d="M8 82C8 66 20 54 34 54S60 66 60 82"/>
      <path d="M40 82C40 66 52 54 66 54S92 66 92 82"/>
    `,
  },
];

export default function OurValues() {
  const headingRef = useRef(null);
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white py-20 px-6 sm:px-10 lg:px-16 min-h-screen flex items-center">
      {/* Color bends WebGL background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends
          colors={['#1e3a8a', '#3b82f6', '#60a5fa']}
          speed={0.15}
          scale={1.2}
          frequency={0.8}
          warpStrength={1.2}
          intensity={1.2}
          bandWidth={5}
          noise={0.08}
          parallax={0.4}
          mouseInfluence={0.6}
          transparent={true}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        {/* Left Column: Heading & Section Label */}
        <div className="lg:col-span-4 space-y-6">
          {/* Subheading */}
          <div className="flex items-center text-blue-500 font-semibold text-xs tracking-widest uppercase">
            <FoldText
              text="What Drives Us"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.5}
              stagger={0.03}
              fontSize="0.75rem"
              fontWeight={600}
              color="#3b82f6"
            />
          </div>

          {/* Title */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <VariableProximity
                label="OUR"
                className="text-white"
                style={{ display: 'block' }}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={headingRef}
                radius={110}
                falloff="linear"
              />
              <VariableProximity
                label="VALUES."
                className="text-blue-500"
                style={{ display: 'block' }}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={headingRef}
                radius={110}
                falloff="linear"
              />
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <VariableProximity
                label="OUR"
                className="text-white"
                style={{ display: 'block' }}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={headingRef}
                radius={110}
                falloff="linear"
              />
              <VariableProximity
                label="PROMISE."
                className="text-blue-500"
                style={{ display: 'block' }}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={headingRef}
                radius={110}
                falloff="linear"
              />
            </div>
          </h2>
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');`}</style>
        </div>

        {/* Right Column: Crumplable Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {valuesData.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              <PaperCrumple
                src={buildCardSvg(item)}
                alt={`${item.title}: ${item.lines.join(' ')}`}
                width={280}
                height={340}
                sceneHeight={360}
                paperColor="#030712"
                roughness={0.85}
                paperTexture={0.05}
                crumpleAmount={0.82}
                crumpleDuration={0.5}
                releaseDuration={0.4}
                releaseBehavior="restore"
                draggable={true}
                dragRadius={60}
                shadow={true}
                shadowOpacity={0.25}
                lightIntensity={1.6}
                className="w-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}