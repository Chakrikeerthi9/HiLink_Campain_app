
import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface CampProps{
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[900px] ${backgroundImage} bg-cover bg-no-repeat sm:rounded-2xl lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:py-10 lg:px-20'>
        <div className='flexCenter gap-8'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image 
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {
              PEOPLE_URL.map((person) => (
                <Image 
                  className='inline-block h-10 w-10 rounded-full'
                  key={person}
                  src={person}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))
            }
          </span>
          <p className='bold-12 text-white lg:bold-16'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}


const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[450px] xl:h-[590px]'>
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="45+ Joined"
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-20 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[400px] xl:max-w-[530px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full gap-8 rounded-3xl overflow-hidden'>
          <h2 className='regular-12 md:regular-16 2xl:text-[28px] capitalize text-white'>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='regular-12 xl:regular-16 text-white'>
            Start your journey today and discover the beauty of the world with us.
            That&apos;s why we decided to create a new camp with a unique experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Camp
