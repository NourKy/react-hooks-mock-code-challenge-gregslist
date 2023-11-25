import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[lists,setLists]=useState([]);
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listing) => { setLists(listing)}) 
  },[])
  const onItemDelete=(itemId)=>
  {
    const newList=lists.filter((list)=>list.id!==itemId);
    setLists(newList);

  }
  return (
    <div className="app">
      <Header />
      <ListingsContainer lists={lists}onItemDelete={onItemDelete}/>
    </div>
  );
}

export default App;
