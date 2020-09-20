import React, { ReactElement } from "react"
import { PrimaryButton, SecondaryButton } from "../components/button/Buttons"
import Layout from "../components/layout/layout"
import Principles from "../components/principles/Principles"
import sty from "../css/index.module.css"
import iconPerson from "../assets/icon-person.svg"
import iconCog from "../assets/icon-cog.svg"
import iconChart from "../assets/icon-chart.svg"
import Story from "../components/stories/Story"
import AvatarKady from "../assets/avatar-kady.jpg"
import AvatarAiysha from "../assets/avatar-aiysha.jpg"
import AvatarArhur from "../assets/avatar-arthur.jpg"

const pagePrinciples = [
  {
    key: 0,
    title: "Experienced Individuals",
    text:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
    icon: iconPerson,
  },
  {
    key: 1,
    title: "Easy to Implement",
    text:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
    icon: iconCog,
  },
  {
    key: 2,
    title: "Enhanced Productivity",
    text:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
    icon: iconChart,
  },
]

const pageStories = [
  {
    key: "story 1",
    autorName: "Kady Baker",
    text: `The team perfectly fit the specialized skill set required.
      They focused on the most essential features helping us launch the platform eight months 
      faster than planned.`,
    autorJobDescription: "Product Manager at Bookmark",
    autorImage: AvatarKady,
  },
  {
    key: "story 2",
    autorName: "Aiysha Reese",
    text: `We needed to automate our entire onboarding process. 
    The team came in and built out the whole journey. 
    Since going live, user retention has gone through the roof!`,
    autorJobDescription: "Founder of Manage",
    autorImage: AvatarAiysha,
  },
  {
    key: "story 3",
    autorName: "Arthur Clarke",
    text: `Amazing. Our team helped us build an app that delivered a new experience for hiring a physio.
    The launch was an instant success with 100k downloads in the first month.`,
    autorJobDescription: "Co-founder of MyPhysio",
    autorImage: AvatarArhur,
  },
]

interface Props {}

function Index({}: Props): ReactElement {
  return (
    <>
      <Layout>
        <section className="bg-midnight-blue relative pb-40">
          <div className="max-w-screen-sm px-5 m-auto flex flex-col justify-center items-center">
            <h1 className="text-4xl px-10 leading-none font-bold text-center mt-8">
              Find the best <span className="text-light-coral">talent</span>
            </h1>
            <p className="text-sm leading-normal font-semibold text-center mt-5">
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
          <div className={sty.bgPattern}></div>
        </section>
        <section className="bg-sacramento-green relative px-5 pb-20 pt-10 overflow-x-hidden">
          <div className={sty.bgPatternSecond}></div>
          <div className="h-1 w-10 bg-light-coral"></div>
          <div className="max-w-screen-sm m-auto">
            <h2 className="text-3xl mt-10 w-2/3 leading-none font-bold">
              Build & manage distributed teams like no one else.
            </h2>
          </div>
          <div className="mt-10">
            {pagePrinciples.map(item => {
              return (
                <Principles
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              )
            })}
          </div>
        </section>
        <section className="bg-deep-jungle-green relative pb-40 pt-32 px-5">
          <div className={sty.bgPatternThird}></div>
          <div className={sty.bgPatternFourth}></div>
          <div className="flex flex-col jutify-center items-center relative">
            <h1 className="text-3xl text-center font-bold leading-none">
              Delivering real results for top companies. Some of our
              <span className="text-rapture-blue"> success stories.</span>
            </h1>
            {pageStories.map(item => {
              return (
                <Story
                  key={item.key}
                  autorName={item.autorName}
                  text={item.text}
                  autorJobDescription={item.autorJobDescription}
                  autorImage={item.autorImage}
                />
              )
            })}
          </div>
        </section>
        <section
          className={`bg-light-coral relative pb-20 px-5 overflow-y-hidden`}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-center font-bold text-sacramento-green text-3xl leading-none mt-20">
              Ready to get started?
            </h1>
            <div className="mt-5 ">
              <PrimaryButton title="contact us" isDark />
            </div>
          </div>
          <div className={sty.bgPatternFive}></div>
        </section>
      </Layout>
    </>
  )
}

export default Index
