import React, { useState, useEffect } from "react";
const Notification = () => {
  const [message, setMessage ] = useState("");
   useEffect(() => {
    const updateMessage = (newMessage) => {
      setMessage(newMessage);
      setTimeout(() => {
        setMessage(" ");
      }, 5000);
    };
    updateMessage("Notification Message");
  },[]) ;

  return(
    <div className="notification">{message}</div>
  )

};
 export default  Notification;