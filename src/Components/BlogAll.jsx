import { useContext, useEffect } from "react";
import "./style.css";
import NotesContext from "../Context/Note/NotesContext";
import { Link } from "react-router-dom";
const BlogAll = (props) => {
  const context = useContext(NotesContext)
  const GetUserById = context.GetUserById
  const Name = context.Name
  const setName = context.setName

  const bid = "/blog/" + props.bid

  useEffect(()=>{
    GetUserById(props.userid)
    // console.log(Name);
  },[]);
  return (
    <>
      <div className="blogshort">
        <Link to={bid} style={{textDecoration:"none", color:"black"}}><h1 className="headingblog">
          {props.title}
        </h1></Link>
        <h3 className="descblog">
          {props.desc.slice(0, 80)}
        </h3>
        <p className="info">It was posted on <span> {props.date.slice(0, 10)}</span></p>
        {/* <br /> */}
        <hr />
      </div>
    </>
    
  );
};

export default BlogAll