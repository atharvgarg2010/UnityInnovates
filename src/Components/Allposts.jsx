import React, { useContext, useEffect } from 'react'
import Blogpersonal from './Blogpersonal'
import NotesContext from '../Context/Note/NotesContext'
import BlogAll from './BlogAll'
function Allposts() {
    const context = useContext(NotesContext)
    const fetchallnotes = context.fetchallblogs

    const Notes = context.Notesss
    useEffect(() => {
        fetchallnotes()
    }, [])
    return (
        <>
            <div className="allpost">
                <h1 style={{width:"90%"}} className='h1'><span>A</span><span>L</span><span>L</span>&nbsp;<span>P</span><span>O</span><span>S</span><span>T</span><span>S</span></h1>
                <div className="posts">
                    {
                        Notes.slice(0,10).map((note) => {
                            // console.log(note._id);
                            return (
                                <BlogAll bid= {note._id} title={note.title} desc={note.description} date={note.date} userid={note.user} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Allposts