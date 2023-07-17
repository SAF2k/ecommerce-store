'use client'

import { Product } from "@/types"
import { useRouter } from "next/navigation"

interface ProductCardProps {
    data: Product
}

import React from 'react'

const ProductCard = ({data} : ProductCardProps) => {

    const router = useRouter()

  return (
    <div>ProductCard</div>
  )
}

export default ProductCard