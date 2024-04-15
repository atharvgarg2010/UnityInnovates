import "./FrameComponent4.css";
import  Usericon  from "./Usericon.png";

const FrameComponent4 = (props) => {
  return (
    <section className="frame-section">
      <div className="frame-parent14">
        <div className="ellipse-parent">
          <img className="ellipse-icon" alt="" src={Usericon} />
          {/* <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-6847.svg"
          /> */}
        </div>
        <div className="gfxagency-parent">
          <h3 className="gfxagency">{props.name}</h3>
          <div className="ui-ux-design-wrapper">
            <div className="ui-ux-design">{props.tag}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
