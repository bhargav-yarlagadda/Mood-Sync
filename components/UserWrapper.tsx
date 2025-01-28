'use client'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const UserWrapper = ({children}:{children:React.ReactNode}) => {
    const router = useRouter()
    const {isLoaded, isSignedIn} = useUser()

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.push('/sign-in') 
        }
    }, [isLoaded, isSignedIn, router])  

    return (
        <div>
            {children}
        </div>
    )
}

export default UserWrapper
