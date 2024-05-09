import React from 'react'

type Props = {
  link: any
  titulo: string
  subtitulo: string
}

export function PerguntaSugestao({
  link,
  titulo,
  subtitulo
}: Props) {

  return (
    <div onClick={link} className="w-[80%] lg:w-full mx-auto  border-gray-300 border-2 p-2 rounded-md hover:bg-green-800/80 cursor-pointer hover:border-green-200">
      <h2 className='text-white text-md font-medium'>
        {titulo}
      </h2>
      <span className='text-white text-[14px] font-light'>
        {subtitulo}
      </span>
    </div>
  )
}