import * as React from "react"
import Image from "next/image" 
 
export function CartCard({ id, imageSrc, name, price }: { id: number; imageSrc: string; name: string; price: number }) {
  return (
      <div className="block">
        <div className="flex flex-col p-8 border border-gray-300 rounded-lg max-w-sm bg-white">
          <Image src={imageSrc} alt={name} width={250} height={200} className="object-contain" />
          <h3 className="text-lg font-semibold mt-4">{name}</h3>
          <p className="text-xl mt-2">€ {price}</p>
        </div>
      </div>
  )
}