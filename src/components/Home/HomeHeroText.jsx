import { Video } from './Video'

export const HomeHeroText = () => {
  return (
    <div className='text-white font-[font1] pt-2 text-center'>
        <div className='text-[9.5vw] uppercase leading-[9.5vw] justify-center flex items-center '>
        The spark for
        </div>
        <div className='text-[9.5vw] uppercase leading-[9.5vw] justify-center flex items-center'>
        all<div className='h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden'><Video/></div>things
        </div>
        <div className='text-[9.5vw] uppercase leading-[9.5vw] justify-center flex items-center'>
        creative
        </div>
    </div>
  )
}
