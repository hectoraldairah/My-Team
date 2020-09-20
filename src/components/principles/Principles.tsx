import React from "react"

interface PrinciplesProps {
  icon: string
  title: string
  text: string
}
const Principles: React.FC<PrinciplesProps> = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <i className="my-5">
        <img src={icon} alt="icon person" />{" "}
      </i>
      <div className="flex flex-col justify-center items-center">
        <h5 className="font-bold text-light-coral">{title}</h5>
        <p className="font-semibold text-base text-center">{text}</p>
      </div>
    </div>
  )
}

export default Principles
