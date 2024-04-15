import FrameComponent4 from "./FrameComponent4";
import FrameComponent2 from "./FrameComponent2";
import "./User.css";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import NotesContext from "../Context/Note/NotesContext";
import Blogpersonal from "./Blogpersonal";
const User = () => {
  const Navigate = useNavigate()
  const context = useContext(NotesContext)
  const getuser = context.getUser
  const fetchallnotes = context.fetchallnotes

  const userdata = context.userdata
  const Notes = context.Notes

  useEffect(() => {

    if (localStorage.authtoken) {
      getuser()
      fetchallnotes()
    }
  }, [])
  const logout = () => {
    localStorage.removeItem("authtoken")
    Navigate("/")
    window.location.reload(false);

  }
  // console.log(Notes);


  return (
    <>
      <div className="user">
        <div className="profile-screen-light-mood">
          <main className="frame-main">
            <FrameComponent4 name={userdata.name} tag={userdata.tag} />
            <FrameComponent2 email={userdata.email} />
            <Link style={{ background: "#3a5b22", borderRadius: "29px", textDecoration:"none" }} to={'/newpost'} className="logout-wrapper">
              <b className="logout" style={{color:"white"}}>Write a new Post</b>
            </Link>
            <button style={{ background: "#3a5b22", borderRadius: "29px" }} onClick={logout} className="logout-wrapper">
              <b style={{color:"white"}} className="logout">Logout</b>
            </button>
          </main>
          <div className="profile-screen-light-mood-inner">
            <div className="rectangle-div" />
          </div>
        </div>
      </div>
      <div className="blogs" style={{ margin: " 0 4%" }}>
        <div className="blogtitle">
          <h1 style={{ color: "#3a5b22" }}>All Your Blogs</h1>
        </div>
        {
          Notes.map((note) => {
            console.log(note.user);
            return (
              <Blogpersonal bid = {note._id} title={note.title} desc={note.description} date = {note.date} userid={note.user}/>
            )
          })
        }

      </div>
    </>
  );
};

export default User;
