'use client'

import { Category } from "@/types"

interface MainNavProps {
    data: Category[]
}

const MainNav = ({ data }: MainNavProps) => {

    const pathname = usePathname()


    const routers = data.map((route) => ({
        href: `/category/$(router.id)`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return(

    )
}


export default MainNav