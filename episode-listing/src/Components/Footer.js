import React from 'react';

import {  Pagination} from 'react-bootstrap';


const Footer=({totalPage,currentpage,setcurrentpage})=>{




let items = [];


for (let number = 1; number <= totalPage; number++) {
    items.push(
        <span key={number} onClick={()=>{setcurrentpage(number)}}>
      <Pagination.Item key={number} active={number === currentpage}>
        
        {number}
      </Pagination.Item>
      </span>,
    );
  }


    return(
      <Pagination className="justify-content-md-center" size="lg">{items}</Pagination>

  )
}

export default Footer