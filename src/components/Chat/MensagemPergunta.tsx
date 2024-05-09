import React from 'react'

type Props = {
  children: React.ReactNode,
}

export function MensagemPergunta({
  children,
}: Props) {

  return (
    <div className="flex justify-end">
      <div className="bg-[#22A966] text-white rounded-lg rounded-tr-none p-2 lg:max-w-[40%] my-2 lg:mt-0">
        {children}
      </div>
    </div>
  )
}