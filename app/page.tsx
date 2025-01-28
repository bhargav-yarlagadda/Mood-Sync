"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
const page = () => {
  const router = useRouter()
  const {isLoaded,isSignedIn} = useUser()

  return (
    <div>
      Page
    </div>
  )
}

export default page
