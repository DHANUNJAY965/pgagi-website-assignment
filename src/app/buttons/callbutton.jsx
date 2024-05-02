
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendlylink = () => {
    // Initialize state to hold the root element
    const [rootElement, setRootElement] = useState(null);
    const url = "https://calendly.com/vivek-_ou/30min";

    useEffect(() => {
        // Dynamically set the root element after the component mounts
        setRootElement(document.getElementById("root"));
    }, []);

    return (
        <div className="App" id="root">
           <div className="box-border absolute w-116 h-35 left-1073 top-98 border border-solid border-blue-600 rounded-10">

    {rootElement && (
        <PopupButton
            url={url}
            rootElement={rootElement}
            text="Contact us"
        ></PopupButton>
        
    )}
</div>

        </div>
    );
};

export default Calendlylink;




