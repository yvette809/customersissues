import React from 'react'
import { useEffect,useState } from 'react'

const IssuesRegistration = () => {
    const[title, SetTitle] = useState("")
    const [description, setDescription] = useState("")
    const[created, SetCreated] = useState(new Date())
    const[isCompleted, SetIsCompleted] = useState(false)
    const [users,setUsers] = useState([])
    const [userId, setUserId]  = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://localhost:7219/api/users')
            setUsers(await res.json())
            console.log('res', res)
        }
        fetchData()
    }, [])

    console.log('users',users)
  return (
    <div>IssuesRegistration</div>
  )
}

export default IssuesRegistration