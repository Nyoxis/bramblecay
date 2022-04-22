
import Logo from './logo'

const Header = ({ heading, className }: { heading: string, className?: string }) => {
  return (
    <>
      <header className="absolute top-[30px] left-1/4 flex flex-row gap-[4rem]">
        <Logo />
        <h1 
          className={`${className}
                      self-end
                      mb-[0.9rem]
                      text-4xl
                      font-latin
                      font-bold
                      tracking-tight
                      text-carmine`}
        >
          {heading}
        </h1>
      </header>
      <svg
        className="w-full h-[250px]"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="crescent" x2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#8cbc39"/>
            <stop offset="1" stopColor="#50b598"/>
          </linearGradient>
        </defs>
        <path
          d="M 0 0
             H 1000
             V 98
             c -400 -2, -600 24, -600 24
             s -20 4, -40 5
             s -30 5, -60 6
             s -40 13, -80 10
             s -40 20, -110 13
             S 30 200, 0 200
             Z"
          fill="url(#crescent)"
        />
        <path 
          d="M 0 0
             H 1000
             V 100
             C 600 90, 0 150, 0 150
             Z"
          fill="#fff"
        />
      </svg>
    </>
  )
}

export default Header