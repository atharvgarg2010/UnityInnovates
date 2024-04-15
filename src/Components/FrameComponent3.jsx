import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
    yourEmail,
    // mail01,
    frame6Placeholder,
    propMinWidth,
    propWidth,
}) => {
    const yourEmailStyle = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    const frameInputStyle = useMemo(() => {
        return {
            width: propWidth,
        };
    }, [propWidth]);

    return (
        <div className="your-email-parent">
            <div className="your-email" style={yourEmailStyle}>
                {yourEmail}
            </div>
            <div className="mail-01-parent">
                {/* <img className="mail-01-icon" alt="" src={mail01} /> */}
                <p className="frame-parent15">
                    {frame6Placeholder}
                </p>
            </div>
        </div>
    );
};

export default FrameComponent3;
