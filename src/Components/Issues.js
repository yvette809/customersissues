import React from 'react'
import { useEffect,useState } from 'react'

import IssuesList from './IssuesList'


const Issues = () => {

    const [issues, setIssues] = useState([])
    const sortedIssues = issues.sort((a, b) => new Date(a.date) - new Date(b.date))

    
  const  getIssues =  async ()=>{
    const res = await fetch('https://localhost:7219/api/Cases')
    const data = await res.json()
    console.log('data', data)
    setIssues(data)

}

useEffect(()=>{
    getIssues()
}, [])
  return (
    <div>
    {sortedIssues.length < 0 ? <h1>There are no cases to show </h1> : (

        sortedIssues.map(issue=>{

            let today = new Date().toISOString()
            if(issue.created>= today){
                return  <IssuesList issue ={issue}/>
            }
           
})

    )}
    </div>
  )
}

export default Issues