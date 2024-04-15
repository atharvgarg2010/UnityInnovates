import { useContext, useEffect } from "react";
import "./style.css";
import NotesContext from "../Context/Note/NotesContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Icon from 'awesome-react-icons';
const Blogpersonal = (props) => {
  const navi = useNavigate()
  const context = useContext(NotesContext)
  const GetUserById = context.GetUserById
  const Name = context.Name
  const DeleteYourBlog = context.DeleteYourBlog
  const setName = context.setName
  const GetNoteById = context.GetNoteById
  const Gets = context.GetUserById
  const Note = context.Note
  const GetNote = () => {
    // console.log(Note);
    GetNoteById(props.bid)
    // console.log(Note);
    // console.log(Gets);
    navi("/postall")
  }
  const bid = "/blog/" + props.bid

  const deleteblog = () => {
    DeleteYourBlog(props.bid)
  }

  useEffect(() => {
    GetUserById(props.userid)
    console.log(Name);
  }, [])
  return (
    <>
      <div className="blogshort">
        <p onClick={GetNote} style={{ textDecoration: "none", color: "black", border: "none", background:"none" }}><h1 className="headingblog">
          {props.title}
        </h1></p>
        <h3 className="descblog">
          {props.desc.slice(0, 80)}
        </h3>
        <p style={{ display: "inline" }} className="info">It was posted on <span> {props.date.slice(0, 10)}</span></p>
        {/* <br /> */}
        <button onClick={deleteblog} style={{ background: "none", border: "none", display: "inline", padding: "20px", fontSize: "30px" }}><Icon style={{ fontSize: "20px" }} name="trash" /></button>
        <hr />

      </div>
    </>

  );
};

export default Blogpersonal