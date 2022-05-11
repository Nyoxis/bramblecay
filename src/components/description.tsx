import { FC } from 'react'

const Description: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} text-xl text-stamp w-[250px] leading-tight`}>
      <span className="font-latin text-3xl">Bramble Cay</span>
      &nbsp;–&nbsp;это
      сообщество энтузиастов,
      <br/>с целью помочь большему
      числу людей восхищаться
      чудесами живой природы
    </div>
  )
}

export default Description