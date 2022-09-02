import React, { useState, useEffect } from 'react';
// import AuthContext from 'src/context/AuthContext';
import useAxios from './utils/useAxios';

function Test() {
  const [notes, setNotes] = useState([]);
  //   const { authTokens, logoutUser } = useContext(AuthContext);

  const api = useAxios();

  const getNotes = async () => {
    const response = await api.get('/api/notes/');

    if (response.status === 200) {
      setNotes(response.data);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
