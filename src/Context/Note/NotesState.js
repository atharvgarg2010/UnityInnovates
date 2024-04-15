import { useState } from "react";
import NotesContext from "./NotesContext";
const NotesState = (props) => {

    const [userdata, setUserData] = useState({ name: "", email: "", tag :"" })
    const [Notes, setNotes] = useState([])
    const [Notesss, setNotesss] = useState([])
    const [Note, setNote] = useState([])
    const [Name, setName] = useState([])
    // const [User, setUSER] = useState("")
    const [Comment, setComment] = useState([])
    const [updata, setUpdata] = useState({ "name": "", "email": "", "password": "", "tag":"" })
    // const [id, setId] = useState("")
    const url = "http://localhost:5001"
    const fetchallnotes = async () => {
        const response = await fetch(`${url}/api/notes/fetchallyourblogs`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.authtoken
            },
        });
        const json = await response.json()
        setNotes(json)
    }
    const fetchallblogs = async () => {
        const response = await fetch(`${url}/api/notes/fetchallblogs`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json()
        setNotesss(json)
    }
    const getUser = async () => {

        const response = await fetch(`${url}/api/auth/getuser`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.authtoken
            },

        });
        const json = await response.json()
        setUserData({ name: json.name, email: json.email, tag:json.tag })


    }

    const GetNoteById = async (id) => {

        const response = await fetch(`${url}/api/notes/fetchoneblog/${id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.authtoken
            },

        });
        const json = await response.json()
        setNote(json)
        // console.log(json);

    }
    const GetUserById = async (id) => {

        const response = await fetch(`${url}/api/auth/getusersbyid/${id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.authtoken
            },

        });
        const json = await response.json()
        setName(json)
        // setUSER(json.name)      
        // console.log(json);

    }
    const GetCommentByBlogId = async (id) => {

        const response = await fetch(`${url}/api/notes/BlogCommentById/${id}`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.authtoken
            },

        });
        const json = await response.json()
        // setName(json)     
        // console.log(Comment);

        setComment(json)
        // (json)
        // GetUserById(json.userId)
        // console.log(json);

    }
    const addComment = async (id, desc) => {

        const response = await fetch(`${url}/api/notes/addComment/${id}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.authtoken
            },
            body: JSON.stringify({ desc })
        });
        const json = await response.json()
        // setName(json)      
        console.log(json);
        GetCommentByBlogId(id)
        // GetUserById(id)
    }
    const DeleteYourBlog = async (id) => {

        const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.authtoken
            },
        });
        const json = await response.json()
        // setName(json)     
        fetchallnotes()
        console.log(json);
    }
    return (
        <NotesContext.Provider value={{ setUpdata, updata, GetUserById, DeleteYourBlog, GetCommentByBlogId, Comment, addComment, getUser, userdata, fetchallnotes, Notes, GetNoteById, Note, Notesss, fetchallblogs, Name }}>
            {props.children}
        </NotesContext.Provider>
    )
}
export default NotesState;

