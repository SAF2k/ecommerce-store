"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";
import { Expand, ShoppingCartIcon } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import UsePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const cart = useCart();
  const previewModal = UsePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl boarder p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt="image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCartIcon size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description  */}
      <div>
        <p className="font-semibold text-lg"> {data.name}</p>
        <p className="text-gray-500 text-sm"> {data.category?.name}</p>
      </div>
      {/* Price & Review  */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
