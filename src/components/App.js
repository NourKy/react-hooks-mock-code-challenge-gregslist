import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[lists,setLists]=useState([]);
  const[search,setSearch]=useState("");
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listing) => { setLists(listing)}) 
  },[]);
  const searchResult=lists.filter((list)=>
  {
    if (search==="") return true;
   return (list.description.toLowerCase().includes(search.toLocaleLowerCase()))
  }
  )
  const onItemDelete=(itemId)=>
  {
    const newList=lists.filter((list)=>list.id!==itemId);
    setLists(newList);

  }
  function handleSearch(newSearch)
  {
    setSearch(newSearch);

  }
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer lists={searchResult}onItemDelete={onItemDelete} />
    </div>
  );
}

export default App;
