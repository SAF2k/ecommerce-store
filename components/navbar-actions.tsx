'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react";

import Button  from "./ui/button"


const NavbarActions = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const router = useRouter()


    if (!isMounted) return null

    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button
                onClick={() => router.push('/cart')}
                className="flex items-center rounded-full bg-black px-4 py-2"
            >
                <ShoppingBag className="w-6 h-6 text-white" />
            </Button>
        </div>
    )
}

export default NavbarActions