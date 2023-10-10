import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({rw}) {
    const [open, setOpen] = useState(false);
console.log(rw);
  return (
    <div>
<Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {
          rw?.map((item)=>(
            <div>
              <h1>{item.name}</h1>
              <h4>{item.date}</h4>
              <h1>{item.rating}</h1>
            </div>
          ))
        }
        
        </div>
      </Collapse>
    </div>
  )
}

export default Restreview