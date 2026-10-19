/** The real heading text is progressively uncovered by a one-time SVG brush pass. */
export function ParticleName() {
  return (
    <div className="paint-name-wrap relative w-full">
      <h1 id="home-title" className="painted-name display relative z-0 text-ink">
        <span className="painted-name-line">Varun Karthikeya</span>
        <span className="painted-name-line painted-name-line-second">Rayasam</span>
      </h1>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="paint-name-brush absolute inset-0 z-10 h-full w-full overflow-visible"
      >
        <g className="paint-name-brush-travel">
          <path
            d="M-15 -38 C 17 18 -25 73 -3 130 C 20 194 -26 261 2 326 C 26 394 -22 455 5 522 C 22 570 -5 611 -14 644 C 7 615 29 579 17 523 C 3 456 39 394 14 326 C -8 258 35 198 8 130 C -14 72 35 22 8 -38 Z"
            fill="#315CE8"
          />
          <path
            d="M-3 -12 C 15 60 -17 82 2 152 C 17 218 -20 276 3 343 C 17 408 -12 470 8 531 C 17 563 9 598 2 620"
            fill="none"
            stroke="#315CE8"
            strokeLinecap="round"
            strokeWidth="10"
            opacity="0.72"
          />
        </g>
      </svg>
    </div>
  );
}
