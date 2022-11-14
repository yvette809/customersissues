import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateIssues = () => {
    const[title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userId, setUserId]  = useState(0)
    const [users,setUsers] = useState([])
    const [openModal, setOpenModal] = useState(true)

    const {id} = useParams()

    const issuesUpdate = async(issueId)=>{
        
        const issue = { title, description, userId }
        const res = await fetch(`https://localhost:7219/api/Cases/${issueId}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        })  

        const data = await res.json()
        console.log('update', data)

        useEffect(()=>{
            issuesUpdate(id)
        },[])

    }
 
  return (
    <div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit issue</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handleSubmit} className="issues-form mt-5">
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

    <button type="submit" className="btn btn-success">Save</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={setOpenModal(false)}>Close</button>
       
      </div>
    </div>
  </div>
</div>
  )
}

export default UpdateIssues