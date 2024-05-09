import React from 'react'
import { IconInfo } from '../Svg/IconInfo'
import { IconClean } from '../Svg/IconClean'
import { IconToPaste } from '../Svg/IconToPaste'
import { IconBook } from '../Svg/IconBook'

type Props = {
  link: any
  titulo: string
  type: "info" | "clean" | "toPaste" | "book"
}

export function InfoIcons({
  link,
  type,
  titulo,
}: Props) {

  return (
    <div
      onClick={link}
      title={titulo}
      className="
    cursor-pointer
    w-9 h-9 p-2 rounded-md
    flex items-center justify-center
    bg-gray-400 hover:bg-green-700
    transition duration-300 ease-in-out
    ">
      {type === "info" && <IconInfo />}
      {type === "clean" && <IconClean />}
      {type === "toPaste" && <IconToPaste />}
      {type === "book" && <IconBook />}
    </div>
  )
}