import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../src/context/AuthContext'
import useAxios from '../src/utils/useAxios'

const Test = () => {
                let [notes, setNotes] = useState([])
                let {authTokens, logoutUser} = useContext(AuthContext)
            
                let api = useAxios()
            
                useEffect(()=> {
                    getNotes()
                }, [])
            
            
                let getNotes = async() =>{
                    let response = await api.get('/api/notes/')
            
                    if(response.status === 200){
                        setNotes(response.data)
                    }
                    
                }
            
                return (
                    <div>
                        <p>You are logged to the home page!</p>
            
            
                        <ul>
                            {notes.map(note => (
                                <li key={note.id} >{note.body}</li>
                            ))}
                        </ul>
                    </div>
                )
}

export default Test