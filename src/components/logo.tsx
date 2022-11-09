import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row">
      <svg 
        className="h-[6rem]"
        viewBox="0 0 192 192"
      >
        <defs>
          <radialGradient id="logoa" cx="96" cy="96" r="89" gradientUnits="userSpaceOnUse">
            <stop offset="0.47" stopColor="#bbdab2"/>
            <stop offset="0.8" stopColor="#d9dfb3"/>
            <stop offset="1" stopColor="#ffe5b5"/>
          </radialGradient>
          <radialGradient id="logob" cx="96" cy="96" r="69" gradientUnits="userSpaceOnUse">
            <stop offset="0.28" stopColor="#4bb5a2"/>
            <stop offset="0.7" stopColor="#85c7aa"/>
            <stop offset="1" stopColor="#cfddb3"/>
          </radialGradient>
          <radialGradient id="logoc" cx="96" cy="96" r="65" gradientUnits="userSpaceOnUse">
            <stop offset="0.75" stopColor="#31898f"/>
            <stop offset="0.85" stopColor="#52a893"/>
            <stop offset="1" stopColor="#a2cfad"/>
          </radialGradient>
          <radialGradient id="logod" cx="208" cy="96" r="24" gradientTransform="scale(0.76 1)" gradientUnits="userSpaceOnUse">
            <stop offset="0.73" stopColor="#6db247"/>
            <stop offset="1" stopColor="#8cbc3b"/>
          </radialGradient>
        </defs>
        <g>
          <path 
            d="M189,96
              c0,20 -13,27 -26,45
              s-17,34 -36,42 -34,-3 -55,-10 -39,-5 -52,-22
              S15,114 15,96 8,60 20,42 44,27 70,20 103,0 124,7
              s24,23 38,42
              S189,76 189,96
              Z" 
            fill="url(#logoa)"
          />
          <path
            d="M160,96
              c0,21 5,44 -38,60
              s-53,12 -77,-19
              S22,86 45,57
              s36-36 78-20
              S160,75 160,96
              Z"
            fill="url(#logob)"
          />
          <path
            d="M138,96
              c0,11 15,40 -9,55
              s-41,-12 -53,-19
              S32,124 32,96 64,66 76,60
              s33,-32 54,-18
              S138,85 138,96
              Z"
            opacity="0.65"
            fill="url(#logoc)"
          />
          <path
            d="M135,96
              c0,14 4,34 -11,42
              s-27,2 -42,-9
              S49,117 49,96
              s19,-26 34,-34 24,-18 40,-9
              S135,82 135,96
              Z"
            fill="#01677b"
          />
          <path
            d="M180,96
              c0,-8 0,-17 -6,-23 -3,-3 -6,-6 -9,-9
              S156,52 152,50
              c-9,-3 -6,14 -7,20 0,9 -3,17 -3,25
              s3,17 3,25
              c0,5 -2,22 7,20 5,0 10,-10 13,-13
              s7,-6 9,-9
              C180,114 180,105 180,96
              Z"
            fill="#ebece1"
            opacity="0.5"
          />
          <path
            d="M146,96
              a61,61 0 0 0 1,9
              c1,11 0,24 12,15 9,-5 16,-5 16,-24
              s-7,-19 -16,-24
              c-14,-9 -11,4 -12,15
              A61,61 0 0 0 146,96
              Z"
            fill="url(#logod)"
          />
        </g>
      </svg>
      <span 
        className="ml-[.3rem] mb-[.9rem]
                    self-end
                    text-4xl
                    leading-[2rem]
                    font-latin
                    font-bold
                    tracking-tight
                    text-carmine"
      >
        Bramble<br/>Cay
      </span>
    </Link>
  )
}

export default Logo