import { FC } from 'react'
import Link from 'next/link'

const Menu: FC<{ className: string, list: { name: string, href: string }[] }> = ({ className, list }) => {
  return (
    <div className={`${className} grid grid-flow-col grid-rows-2 gap-xl justify-center`}>
      {list.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <a
              className="w-[300px] h-[150px] 
                         rounded-lg
                         bg-white/80 backdrop-blur
                         leading-[150px]
                         bg-cover
                         hover:bg-gradient-to-l from-[#ddd]/80
                         active:bg-[#eee]/80"
            >
              <span className="inline-block leading-normal text-xl font-bold align-middle mx-[3rem]">{item.name}</span>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu