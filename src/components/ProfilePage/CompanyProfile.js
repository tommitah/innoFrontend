import React from 'react'

const CompanyProfile = ({ profile }) => {
  return (
    <div>
      <p>agency/business</p>
      <p>{JSON.stringify(profile)}</p>
    </div>
  )
}

export default CompanyProfile