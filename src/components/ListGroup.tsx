import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Chicago", "London", "Tokyo", "Paris"];
  const [seletedIndex, setSeletedIndex] = useState(-1)
  
  return (
    <>
      <h1>List</h1>

      {items.length == 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              seletedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
                setSeletedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
