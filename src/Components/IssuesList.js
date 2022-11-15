import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const IssuesList = ({issue}) => {
  return (
    <tr scope="row" key= {issue.id}>
    <td> <Link to={`issues/${issue.id}`}>{issue.title}</Link></td>
      <td><Moment>{issue.created}</Moment></td>
      <td>{issue.user.firstName}-{issue.user.lastName}</td>
      <td>{issue.isCompleted?<i className="fa-solid fa-check green"></i>:<i className="fa-solid fa-x red"></i>}</td>
    </tr>
  )
}

export default IssuesList

