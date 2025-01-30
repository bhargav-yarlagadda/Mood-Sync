'use client'
import CodeEditor from '@/components/CodeEditor'
import CodeOutput from '@/components/CodeOutput'
import Landing from '@/components/Landing'
import React from 'react'
import { useEditorContext } from '@/context/EditorContext'
import Loader from '@/components/Loader'
const page = () => {
  const {isLoading} = useEditorContext()
  return (
    <div className='w-full  grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2'>
      
      {
        isLoading?(<Loader/>):(<>
        
        <div className='col-span-1  h-full px-8'>
        <CodeEditor/>
        </div>
        <div className='col-span-1  h-full px-8'>
        <CodeOutput/>
        </div>
        </>)
      }

      
    </div>
  )
}

export default page