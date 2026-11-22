export function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="SVGID_1__xctFOOIVorz0_gr1"
        x1="30.718"
        x2="17.282"
        y1="17.282"
        y2="30.718"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fee460"></stop>
        <stop offset=".15" stopColor="#fee97f"></stop>
        <stop offset=".436" stopColor="#fff3b6"></stop>
        <stop offset=".684" stopColor="#fff9de"></stop>
        <stop offset=".88" stopColor="#fffdf6"></stop>
        <stop offset="1" stopColor="#fff"></stop>
      </linearGradient>
      <circle
        cx="24"
        cy="24"
        r="9.5"
        fill="url(#SVGID_1__xctFOOIVorz0_gr1)"
      ></circle>
      <line
        x1="24"
        x2="24"
        y1="5.5"
        y2="8.5"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="10.919"
        x2="13.04"
        y1="10.919"
        y2="13.04"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="5.5"
        x2="8.5"
        y1="24"
        y2="24"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="10.919"
        x2="13.04"
        y1="37.081"
        y2="34.96"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="24"
        x2="24"
        y1="42.5"
        y2="39.5"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="37.081"
        x2="34.96"
        y1="37.081"
        y2="34.96"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="42.5"
        x2="39.5"
        y1="24"
        y2="24"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <line
        x1="37.081"
        x2="34.96"
        y1="10.919"
        y2="13.04"
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      ></line>
      <path
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M26.853,33.064C25.953,33.347,24.994,33.5,24,33.5c-5.247,0-9.5-4.253-9.5-9.5 c0-1.121,0.194-2.196,0.55-3.194"
      ></path>
      <path
        fill="none"
        stroke="#fac400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M20.206,15.288C21.368,14.781,22.651,14.5,24,14.5c5.247,0,9.5,4.253,9.5,9.5 c0,1.098-0.186,2.152-0.529,3.133"
      ></path>
    </svg>
  );
}

export function CurvyLine() {
  return (
    <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 10 C 50 2, 100 14, 150 8 S 250 2, 298 9"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Mandala() {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="110" strokeDasharray="3 7" />
        <path d="M200 10 Q230 100 200 200 Q170 100 200 10Z M390 200 Q300 230 200 200 Q300 170 390 200Z M200 390 Q170 300 200 200 Q230 300 200 390Z M10 200 Q100 170 200 200 Q100 230 10 200Z" />
        <path d="M334 66 Q290 150 200 200 Q250 110 334 66Z M334 334 Q250 290 200 200 Q290 250 334 334Z M66 334 Q110 250 200 200 Q150 290 66 334Z M66 66 Q150 110 200 200 Q110 150 66 66Z" />
      </g>
    </svg>
  );
}

export function Lotus() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* centre petal */}
      <path d="M12 5c2.2 2.4 2.2 7.6 0 11-2.2-3.4-2.2-8.6 0-11z" />
      {/* inner side petals */}
      <path d="M12 16c-2.6-.4-5.4-2.6-6-6.4 2.8.2 5.2 2 6 6.4z" />
      <path d="M12 16c2.6-.4 5.4-2.6 6-6.4-2.8.2-5.2 2-6 6.4z" />
      {/* outer side petals */}
      <path d="M12 16c-3.6.6-7.4-.6-9-3.6 3.2-1 6.6.4 9 3.6z" />
      <path d="M12 16c3.6.6 7.4-.6 9-3.6-3.2-1-6.6.4-9 3.6z" />
      {/* water line */}
      <path d="M6 19.5h12" />
    </svg>
  );
}
