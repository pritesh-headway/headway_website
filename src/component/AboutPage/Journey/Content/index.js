import React from 'react'

const JourneyImages = () => {
  return (

    <div className="justify-between">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-end self-stretch px-5 my-auto text-lg max-md:mt-10 max-md:max-w-full">
            <div className="self-stretch text-5xl font-medium max-md:max-w-full max-md:text-4xl">
              01
            </div>
            <div className="mt-5 text-zinc-600 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <div className="mt-4 text-zinc-600 max-md:max-w-full">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="grow w-full shadow-2xl aspect-[1.47] max-md:mt-10 max-md:max-w-full"
            alt="Images"
          />
        </div>
      </div>
    </div>



  )
}

export default JourneyImages