import React, { useContext, useEffect } from 'react'
import NotesContext from "../Context/Note/NotesContext";

function Fullpost() {
    const context = useContext(NotesContext)
    const Note = context.Notes
    const GetUserById = context.GetUserById
    const Name = context.Name
    useEffect(()=>{
        GetUserById(Note[0].user);
        // console.log(Name);
    },[])
    console.log(Note);
    return (
        <div className='full'>
        <div className='fullpost'><h1>{Note[0].title}</h1><h2>{Name.name} - </h2> <h4>{Note[0].tag}</h4></div>
        <p>{Note[0].description}</p>
        <p className='email'>Email - {Note[0].email}</p>
        <p className='email'>Contact Number - {Note[0].phone}</p>

        </div>
        // <></>
    )
}

export default Fullpost