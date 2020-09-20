import React from "react"

interface PrimaryButtonProps {
  title: string
  disabled?: boolean
  isDark?: boolean
  color?: string
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  disabled = false,
  isDark = false,
  color,
}) => {
  return (
    <button
      type="button"
      className={`inline-block font-semibold rounded-full border-3 py-2 px-8 transition duration-200 ease-in-out ${
        isDark
          ? "border-sacramento-green text-border-sacramento-green text-sacramento-green bg-white hover:bg-sacramento-green hover:text-gray-100"
          : "border-white text-white hover:bg-white hover:text-sacramento-green"
      }
      ${disabled && "opacity-25 pointer-events-none "} ${color}`}
    >
      {title}
    </button>
  )
}

interface SecondaryButtonProps {
  title: string
  disabled?: boolean
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className={`inline-block bg-white rounded-full text-sacramento-green py-2 px-6
      transition duration-200 ease-in-out 
      ${disabled ? "opacity-25" : "hover:bg-rapture-blue"}`}
    >
      {title}
    </button>
  )
}
