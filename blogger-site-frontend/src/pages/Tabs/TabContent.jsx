/* eslint-disable no-unused-vars */
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const TabContent = () => {
  return (
<>
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
</>
  )
}

export default TabContent