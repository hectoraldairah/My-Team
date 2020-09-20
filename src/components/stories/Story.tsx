import React from "react"
import iconQuotes from "../../assets/icon-quotes.svg"

interface StoryProps {
  autorName: string
  autorJobDescription: string
  text: string
  autorImage: string
}

const Story: React.FC<StoryProps> = ({
  autorName,
  text,
  autorJobDescription,
  autorImage,
}) => {
  return (
    <div className="pt-10 pb-5">
      <header className="flex flex-col items-center relative">
        <div className="absolute">
          <i>
            <img alt="icon quote" src={iconQuotes} />
          </i>
        </div>
        <p className="text-sm text-center z-50 mt-6">{`“${text}”`}</p>
      </header>
      <div className="flex flex-col items-center mt-5">
        <h4 className="font-bold text-lg text-rapture-blue">{autorName}</h4>
        <h5 className="text-xs italic font-medium -mt-1 mb-3">
          {autorJobDescription}
        </h5>
        <img
          className="rounded-full object-cover h-16 w-16 border-2 border-rapture-blue "
          alt="Avatar"
          src={autorImage}
        />
      </div>
    </div>
  )
}

export default Story
