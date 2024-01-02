import React from "react";
import Form from "react-bootstrap/Form";
const InputGroup = ({total, name, setId}) => {
    // console.log([...Array(total).keys])
  return (
    <div>
      <Form.Select 
      onChange={e => setId(e.target.value)}
      aria-label="Default select example" id={name}>
        <option value={1}>Open this select menu</option>
        { [...Array(total).keys()].map(x => {
            return <option value={x+1}> {name} -  {x+1}</option>
        })}
      </Form.Select>
    </div>
  );
};

export default InputGroup;
