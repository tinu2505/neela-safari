import React, {useEffect, useRef} from "react";

function Uploadwidget({onUpload}) {
    const widgetRef = useRef(null);

    useEffect(() => {
        if(!window.cloudinary) return;

        widgetRef.current = window.cloudinary.createUploadWidget(
            {
                cloudName: "dbjm1xcza",
                uploadPreset: "ml_default",
                sources: ["local", "url", "camera"],
                multiple: true,
                maxFiles: 5
            },
            (error, result) => {
                if(!error && result && result.event === "success"){
                    const url = result.info.secure_url;
                    if(onUpload) onUpload(url);
                } 
            }
        );
    }, [onUpload]);

    const openWidget = () => {
        if(widgetRef.current){
            widgetRef.current.open();
        } else{
            alert("Opload widget is not ready yet. Please refresh the page.");
        }
    };

    return(
        <button type="button" onClick={openWidget}>Upload Image</button>
    );
}

export default Uploadwidget;