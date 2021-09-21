import { ReactNode } from 'react'

type TitleProps = {
  className?: string
  children: ReactNode
}

export const Title = ({ className, children }: TitleProps) => {
  return (
    <h2 className={`${className} pb-3 w-full text-center text-heading text-lg`}>
      {children}
    </h2>
  )
}
