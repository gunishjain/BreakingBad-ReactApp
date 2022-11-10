import React from 'react'
import { useState } from 'react'

const Search = ({getQuery}) => {

    const [text,setText] =useState("");

    const onChangeText=(q)=>{
        setText(q);
        getQuery(q);
    }


  return (
    <section className='search'>
        <input type="text" className='form-control' placeholder='Search Characters' value={text} autoFocus onChange={(e)=>onChangeText(e.target.value)}></input>
    </section>
  )
}

export default Search