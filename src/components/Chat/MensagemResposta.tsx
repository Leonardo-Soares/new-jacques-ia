import React from 'react'

type Props = {
  children: React.ReactNode,
}

export function MensagemResposta({
  children,
}: Props) {

  return (
    <div className="flex justify-start">
      <div className="bg-gray-300 dark:bg-gray-200 rounded-lg rounded-tl-none p-2 lg:max-w-[40%] my-2 lg:mt-0">
        {children}
      </div>
    </div>
  )
}