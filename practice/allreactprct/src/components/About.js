import React, { useContext } from 'react'
import { GlobalContext } from '../context/Datacontext'

const About = () => {
  const { Profiles } = useContext(GlobalContext);
  return (
    <div>
      <h1>list of users Profiles</h1>
      {Profiles.map((profile) => {
        return (
          <h5 key={profile.id}>{profile.name}---{profile.id}</h5>
        )
      })}
    </div>
  )
}

export default About