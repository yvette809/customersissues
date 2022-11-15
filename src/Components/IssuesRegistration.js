import React from 'react'
import { useEffect,useState } from 'react'

const IssuesRegistration = () => {
    const[title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [userId, setUserId]  = useState(0)
    const [users,setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5219/api/users')
            setUsers(await res.json())
            console.log('res', res)
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      if (userId !== 0) {
          const issue = { title, description, userId }
          const res = await fetch('https://localhost:7219/api/Cases', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(issue)
          })

          console.log('issueData', await res.json())

          setTitle('')
          setDescription('')
          setUserId(0)
      }
  }

 
  return (
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
  )
}

export default IssuesRegistration