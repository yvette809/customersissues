import React from 'react'
import { useState,useEffect } from 'react'
import {Button,Modal} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Moment from "react-moment"
import Issues from './Issues'


const IssueDetails = () => {

    const {id} = useParams()

    const [issue, setIssue] = useState({})

    const[title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const[isCompleted, setIsCompleted] = useState(false)
    const [userId, setUserId]  = useState(0)
    const [users,setUsers] = useState([])

    const[caseId, setCaseId] = useState(0)
    const [showModal, setShowModal] = useState(false)


    // get user by id
    const  getIssueById =  async (caseId)=>{
        const res = await fetch(`https://localhost:7219/api/Cases/${caseId}`)  
        if(res.ok){
            const data = await res.json()
            console.log('issue', data)
            setIssue(data)
            setTitle(data.title)
            setDescription(data.description)
            setUserId(data.user.id)
            setIsCompleted(data.isCompleted)

        }
       
    
    }

    // update issue
   
const updateById = async (id) => {
    
        const issue = { title, description, isCompleted,userId }
        const res = await fetch(`https://localhost:7219/api/Cases/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        })

}

const handleUpdate = (e)=>{
    e.preventDefault()
    updateById(issue.id)

}
    // get modal
      function getModal  (){
        setShowModal(true)
        getIssueById(issue.id)
       
    }

    // get users
    const fetchData = async () => {
        const res = await fetch('http://localhost:5219/api/users')
        setUsers(await res.json())
       
    }
  
    // add comment
    const submitComment = async(e)=>{
    e.preventDefault()
   
    const comment= {description, caseId}
    const res = await fetch('https://localhost:7219/api/Comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })

    setCaseId('')
    setDescription('')
}


useEffect(()=>{
    getIssueById(id)
    fetchData()
      
}, [id])


    

  return (
    <>
    <h2 className='text-center mt-5 case-details'>Case Details</h2>
    <div className=" details-container mt-5">
        <h3> Title: {issue.title}</h3>
        <p>Description: {issue.description}</p>
        <p>Created: <Moment>{issue.created}</Moment></p>
        <div>Case Completed : {issue.isCompleted?<button><i onClick={getModal} className="fa-solid fa-check fa.2x green"></i></button>:<button><i onClick={getModal} className="fa-solid fa-x red"></i></button>}</div>
        </div>
        {showModal &&
        <Modal.Dialog className='modal-div'>
      <Modal.Header closeButton onClick={() => setShowModal(false)} className="pt-2">
        <Modal.Title className='modal-title'>Edit Case</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form className="issues-form mt-5" onSubmit = {handleUpdate}>
    <div className="mb-3">
        <label className="form-label">customer</label>
        <select className="form-select" onChange={(e) => setUserId(e.target.value)}>
            <option value={0}>-- state the customer --</option>
            {users.map(user=> <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>)}
        </select>
    </div>
    <div className="mb-3">
        <label className="form-label">Write Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
    
    <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
    </div>
    <div className="mb-3">
        <label className="form-label">Completed</label>
        <input type="check" className="form-control" value={isCompleted} onChange={(e) => setIsCompleted(!isCompleted)} ></input>
    </div>

    <button type="submit" className="btn btn-success">Save</button>
</form>
      </Modal.Body>
    </Modal.Dialog>}
 <ul className='comments'>
    {issue && issue.comments?.length >0 && issue.comments.map(comment=>{
        return <li>{comment.description}</li>
  })}
</ul>
    

    <h2 className='text-center mt-5 case-details'>Add Comment</h2>
 
    <form className="issues-form mt-5"  onSubmit={submitComment}>
    <div className="mb-3">
        <label className="form-label">Write a comment</label>
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
       </div>
       <div className="mb-3">
        <label className="form-label">caseId</label>
        <input type="text" className="form-control" value={caseId} onChange={(e) => setCaseId(e.target.value)} />
       </div>
       <button type="submit" className="btn btn-success">Add</button>

    </form>
   
</>

    
  )
}

export default IssueDetails