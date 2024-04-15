import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";

const FrameComponent2 = (props) => {
    return (
        <section className="frame-parent15">
            <FrameComponent3
                yourEmail="Your Email"

                frame6Placeholder={props.email}
            />
            


        </section>
    );
};

export default FrameComponent2;
