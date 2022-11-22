import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Body = ({children}: Props) => {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-blue-100 break-words leading-6 transition-colors duration-500">
      {children}
    </div>
  )
}

export default Body;