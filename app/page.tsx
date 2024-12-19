import React from 'react'
import Header from '@/components/header'
import CoreConceptsList from '@/components/core-concepts-list'
import TabExampleSection from '@/components/tab-examples-section'
import Footer from '@/components/footer'
import DropdownElement from '@/components/dropdown'

export default function Homepage() {
  return (
    <>
        <Header/>
        <DropdownElement menuText="Menu"/>
        <CoreConceptsList/>
        <TabExampleSection/>
        <Footer/>
        
    </>
  )
}
