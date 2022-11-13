import React from 'react'
import Moment from 'react-moment'

const IssuesList = ({issue}) => {
  return (
    <div key = {issue.id}>
     <h1>{issue.title}</h1>
     <p>{issue.description}</p>
     <p>{issue.isCompleted?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-x"></i>}</p>
     <p>Date Created : <Moment >{issue.created}</Moment></p>
     <p>{issue.user.firstName}-{issue.user.lastName}</p>

    </div>
      
  )
}

export default IssuesList