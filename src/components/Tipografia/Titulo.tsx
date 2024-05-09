import React from 'react'

type Props = {
  size?: number
  color?: string
  align?: any
  children: React.ReactNode
  weight?: 'light' | 'normal' | 'bold'
}

export function Titulo({
  children,
  weight,
  size,
  align,
  color
}: Props) {

  return (
    <h1
      style={{
        fontWeight: weight ?? 'normal',
        textAlign: align ?? "start",
        fontSize: size ?? 24,
        color: color ?? ''
      }}
      className='dark:text-white text-black'
    >
      {children}
    </h1>
  )
}