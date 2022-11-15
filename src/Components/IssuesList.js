import React from 'react'
import { Link } from 'react-router-dom'

const IssuesList = ({issue}) => {
  return (
    <tr scope="row" key= {issue.id}>
    <td> <Link to={`issues/${issue.id}`}>{issue.title}</Link></td>
      <td>{issue.created.toString()}</td>
      <td>{issue.user.firstName}-{issue.user.lastName}</td>
      <td>{issue.isCompleted?<i className="fa-solid fa-check"></i>:<i className="fa-solid fa-x"></i>}</td>
    </tr>
  )
}

export default IssuesList

