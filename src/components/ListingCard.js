import { useState } from "react";
import React from "react";

function ListingCard({listings,onItemDelete}) {
  const[isFav,setIsFav]=useState(false);
  function handleFav()
  {
    setIsFav(!isFav);
  }
  const handleDelete=()=>
  {
   
    fetch(`http://localhost:6001/listings/${listings.id}` , {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(()=> onItemDelete(listings.id))
    
    
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={listings.description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite"onClick={handleFav}>☆</button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button className="emoji-button delete"onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
