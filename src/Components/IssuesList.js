import React from 'react'
import { Link } from 'react-router-dom'

const IssuesList = ({issue}) => {
  return (
    <tr scope="row">
     <Link to={`issues/${issue.id}`}><td>{issue.title}</td></Link>
      <td>{issue.created.toString()}</td>
      <td>{issue.user.firstName}-{issue.user.lastName}</td>
      <td>{issue.isCompleted?<i class="fa-solid fa-check"></i>:<i class="fa-solid fa-x"></i>}</td>
    </tr>
  )
}

export default IssuesList

