import React from 'react'

interface ButtonProps {
  className?: string
  text: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  icon,
  iconPosition = 'left',
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && iconPosition === 'left' && icon}
      {text}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}

export default Button
