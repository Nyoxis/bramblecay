import { FC, useState, useEffect } from "react";

const TriMask: FC<{ src: string | string[], className?: string }> = ({ src, className }) => {
  const [state, setState] = useState<'appear' | 'fade' | undefined>(undefined)
  const [index, setIndex] = useState(0)
  const [imgs, setImgs] = useState<HTMLImageElement[]>([])

  const pushImg = (index: number) => {
    const img = new Image()
    img.addEventListener('load', function() {
      const w = this.naturalWidth;
      const h = this.naturalHeight;
      let that = this;
      [that.width, that.height] = w > h ? [w/h*100, 100] : [100, h/w*100]
      setImgs([...imgs.slice(0, index), that, ...imgs.slice(index + 1)])

    }, { once: true, capture: false })
    img.src = Array.isArray(src) ? src[index] : src
    imgs.push(img)
  }
  
  useEffect(() => {
    pushImg(0)
  }, [])
  
  useEffect(() => {
    const e = document.getElementById("clover")
    e.addEventListener('animationend', () => {
      if (state === 'fade') {
        setIndex((index + 1) % src.length)
        setState('appear')
      }
    }, { once: true, capture: false })
  }, [state])
  
  const appear = () => {
    setState('appear')
    if (Array.isArray(src) && src?.length>1) {
      setTimeout(() => {
        const nextIndex = (index + 1) % src.length
        imgs[nextIndex].complete
        ? setState('fade')
        : imgs[nextIndex].addEventListener('load', () => {
          setState('fade')
        }, { once: true, capture: false })
      }, 3000)
    }
  }
  useEffect(() => {
    imgs[index].complete
    ? appear()
    : imgs[index].addEventListener('load', appear, { once: true, capture: false })
    
    if (Array.isArray(src)) {
      const nextIndex = (index + 1) % src.length
      if (imgs.length < src.length) {
        pushImg(nextIndex)
      }
    }
  }, [index])
  
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient id="radial" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0.6" stopColor="#fff"/>
          <stop id="rim" offset="1" stopColor="#000"/>
        </radialGradient>
        <mask id="trimask" className={state}>
          <path
            id="rim"
            d="M69,8
              C39,-3 30,2 14,22
              s-17,35 0,57 24,25 55,14 27,-28 27,-43
              S99,19 69,8
              Z"
            fill="url(#radial)"
          />
          <path
            id="clover"
            d="M73,89
              c-17,11-29-9-38-13
              S5,70 5,50 27,28 36,24 59,2 74,11 80,42 80,50 90,78 73,89
              Z"
            fill="#fff"
          />
        </mask>
      </defs>
      <image
        mask="url(#trimask)"
        xlinkHref={imgs[index]?.src}
        x={imgs[index] ? -(imgs[index]?.width-100)/2 : undefined}
        y={imgs[index] ? -(imgs[index]?.height-100)/2 : undefined}
        width={imgs[index]?.width}
        height={imgs[index]?.height}
      />
    </svg>
  )
}

export default TriMask