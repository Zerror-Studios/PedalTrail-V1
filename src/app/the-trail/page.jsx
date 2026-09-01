import DetailSection from '@/components/home/DetailSection'
import EventCalendar from '@/components/thetrail/EventCalendar'
import EventOverview from '@/components/thetrail/EventOverview'
import ExperienceSection from '@/components/thetrail/ExperienceSection'
import GameTrailSection from '@/components/thetrail/GameTrailSection'
import InvitationBanner from '@/components/thetrail/InvitationBanner'
import TTHero from '@/components/thetrail/TTHero'
import WhatWeBelieve from '@/components/thetrail/WhatWeBelieve'
import React from 'react'

const page = () => {
  return (
    <>
      <TTHero />
      <EventOverview />

      <div className='w-full h-fit px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 relative overflow-hidden'>

        <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-1'>
          <img src="/images/the-trail/TH2.png" alt="IMG" className='w-full h-full object-cover object-center' />
        </div>

        <EventCalendar />
        <InvitationBanner />
      </div>
      <ExperienceSection />
      <WhatWeBelieve />
      <GameTrailSection />
      <DetailSection />
    </>
  )
}

export default page