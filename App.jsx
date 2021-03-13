import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [newContents,setnewContent]=useState([]);
  function addNote (newNote){
    setnewContent(prevValue =>{
     return [...prevValue,newNote]
    });
  }
  function setDel (id){
    setnewContent(prevValue =>{
      return prevValue.filter((contentItems, index) => {
        return index !== id 
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
     { newContents.map( (contentItems, index) => {
        return <Note  
        key={index}
        id={index}
        title={contentItems.title}
        content={contentItems.content}
        onDelet={setDel}
         />
      })}
   
      <Footer />
    </div>
  );
}

export default App;
