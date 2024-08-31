import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Chicago", "London", "Tokyo", "Paris"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
