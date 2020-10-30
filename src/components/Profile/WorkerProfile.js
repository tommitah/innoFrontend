import React from 'react'

const WorkerProfile = ({ profile }) => {
  return (
    <div>
      <p>{JSON.stringify(profile)}</p>
    </div>
  )
}

export default WorkerProfile