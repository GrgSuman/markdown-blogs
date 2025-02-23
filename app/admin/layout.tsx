import { redirect } from 'next/navigation';
import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
      if(process.env.NODE_ENV=="production"){
        return null
        // redirect('/')
      }
  return (
    <div>
        {children}
    </div>
  )
}

export default AdminLayout