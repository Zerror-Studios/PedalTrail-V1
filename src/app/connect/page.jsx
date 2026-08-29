import ContactSection from '@/components/connect/ContactSection'
import CPage from '@/components/connect/CPage'
import FaqSection from '@/components/connect/FaqSection'
import DetailSection from '@/components/home/DetailSection'
import React from 'react'

const page = () => {
  return (
    <>
      <CPage />
      <ContactSection />
      <DetailSection />
      <FaqSection />
    </>
  )
}

export default page
