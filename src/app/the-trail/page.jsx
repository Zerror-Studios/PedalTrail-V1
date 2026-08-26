import EventCalendar from '@/components/thetrail/EventCalendar'
import EventOverview from '@/components/thetrail/EventOverview'
import InvitationBanner from '@/components/thetrail/InvitationBanner'
import TTHero from '@/components/thetrail/TTHero'
import React from 'react'

const page = () => {
  return (
    <>
      <TTHero/>
      <EventOverview />

      <div className='w-full h-fit px-10 py-20 relative overflow-hidden'>
        
        <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-1'>
            <img src="/images/the-trail/TH2.png" alt="IMG" className='w-full h-full object-cover object-center' />
        </div>

      <EventCalendar />
      <InvitationBanner />
      </div>
    </>
  )
}

export default page
