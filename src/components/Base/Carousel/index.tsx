import { useState, useEffect, ReactChild, ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from './Arrows'
import { Indicators } from './Indcators'

type CarouselProps = {
  children: ReactChild[]
  className?: string
}

export const Carousel = ({ children, className }: CarouselProps) => {
  // ...
  const [currentIndex, setCurrentIndex] = useState(0)

  const [length, setLength] = useState(children && children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])
  // ...

  // ...
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    } else {
      setCurrentIndex(2)
    }
  }
  // ...

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <div className='w-full flex relative'>
        <ArrowLeft onClick={prev} />
        <div className='w-full h-full overflow-hidden'>
          <div
            className={`flex transition-transform  duration-300 ease-linear`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
          <Indicators itemCount={children} currentIndex={currentIndex} />
        </div>
        <ArrowRight onClick={next} />
      </div>
    </div>
  )
}

type SliderItemProps = {
  children: ReactNode
}

export const SliderItem = ({ children }: SliderItemProps) => {
  return (
    <div className='w-full flex justify-center flex-shrink-0 flex-grow'>
      {children}
    </div>
  )
}
