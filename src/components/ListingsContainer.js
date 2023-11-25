import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({lists,onItemDelete}) {
  return (
    <main>
      <ul className="cards">
        {lists!=null && lists.map((list)=>
        <ListingCard key={list.id} listings={list} onItemDelete={onItemDelete}/>
        )}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
