import Header from '../components/header'
import TriMask from './triMask'
import Menu from './menu'
import Description from './description'
import React from 'react'

const Index = () => {
  return (
    <div className="bg-paper min-h-screen">
      <Header className="text-purple-900" />
      <Menu
        className="absolute w-full mt-[80px]"
        list={[
          { name: 'Животные', href: '/animalia' },
          { name: 'Оборудование для животных', href: '/'},
          { name: 'Растения', href: '/' },
          { name: 'Оборудование для растений', href: '/'},
        ]}
      />
      <TriMask
        className="w-[600px] h-[600px] bg-cover bg-center ml-[62%] -mt-[50px]"
        src={[
          'https://www.promgidroponica.ru/sites/default/files/P6110006.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/10/1f/73/74/caption.jpg',
          'https://rossaprimavera.ru/static/files/064cfacc62c6.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/a/ad/%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82._%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_%D0%B8%D0%BC._%D0%93%D0%B5%D0%BD%D0%BA%D0%B5%D0%BB%D1%8F_-_panoramio_%282%29.jpg'
        ]}
      />
      <div className="absolute h-[500px] xl:-mt-[200px] xl:ml-[calc(50%-350px-250px)] ml-[10%]">
        <Description className="sticky top-[150px]" />
      </div>
      <div className="h-[2160px]"></div>
    </div>
  )
}

export default Index