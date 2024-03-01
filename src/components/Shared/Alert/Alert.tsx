import React from 'react'

interface AlertProps {
  message: string
  variant?: 'default' | 'danger' | 'success'
}

const Alert: React.FC<AlertProps> = ({ message, variant = 'default' }) => {
  let bgColor = ''
  let textColor = ''

  switch (variant) {
    case 'danger':
      bgColor = 'bg-red-50'
      textColor = 'text-red-800'
      break
    case 'success':
      bgColor = 'bg-green-50'
      textColor = 'text-green-800'
      break
    default:
      bgColor = 'bg-gray-50'
      textColor = 'text-gray-800'
      break
  }

  return (
    <div
      data-testid='alert'
      className={`mb-4 rounded-lg p-4 text-sm ${bgColor} ${textColor}`}
      role='alert'
    >
      <span className='font-medium'>{message}</span>
    </div>
  )
}

export default Alert
