import React from 'react'
import list from '../../public/list.json';

function FreeBook() {
    const filterData = list.filter( (data)=>  data.category === "Free");

    console.log(filterData);
  return (
    <div>FreeBook</div>
  )
}

export default FreeBook