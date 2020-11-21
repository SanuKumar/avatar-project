import React, { useState, useEffect } from "react";
import { Button, Toast, Dropdown } from "react-bootstrap";
// import Toaster from "../toast";
import { useTranslation } from "react-i18next";

const Todo = () => {
  const { t, i18n } = useTranslation();
  const [todolist, settodolist] = useState([]);
  const [newTodo, setnewtodo] = useState({ name: "", id: "" });
  const [show, setShow] = useState(false);
  const toggleShowA = () => setShow(!show);

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (newTodo.name) {
      const newVal = todolist.concat(newTodo);
      settodolist(newVal);
      setnewtodo({ name: "", id: "" });
    } else {
      console.log("error");
      setShow(true);
    }
  };

  const handleInput = (e) => {
    setnewtodo({
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const handleRemove = (id) => {
    console.log("id", id);
    let del = todolist.filter((list) => list.id !== id);
    settodolist(del);
    setnewtodo({ name: "", id: "" });
  };

  const handleUpdate = () => {
    setnewtodo({});
    console.log("Update");
  };

  console.log("local  ", localStorage);

  useEffect(() => {
    console.log("local  ", localStorage);
  }, [localStorage]);

  return (
    <div>
      <h1>Hello From Todo</h1>
      <div style={{ padding: "20px" }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Language
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onSelect={() => localStorage.setItem("i18nextLng", "Hindi")}
            >
              Hindi
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => localStorage.setItem("i18nextLng", "Telugu")}
            >
              Telugu
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {todolist.map((t) => {
        return (
          <div key={t.id} style={{ display: "flex", padding: "20px" }}>
            <li>{t.name}</li>
            <span style={{ paddingLeft: "20px" }}>
              <span style={{ paddingLeft: "20px" }}>
                <Button onClick={() => handleUpdate(t.id)}>Update</Button>
              </span>
              <span style={{ paddingLeft: "20px" }}>
                <Button onClick={() => handleRemove(t.id)}>Remove</Button>
              </span>
            </span>
          </div>
        );
      })}

      <form>
        <div>
          <label style={{ paddingRight: "20px" }}>New Todo's</label>
          <input
            name="name"
            type="text"
            value={newTodo.name}
            placeholder="Enter New Todo"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <Button type="submit" onClick={(e) => handleAddToDo(e)}>
          {t("Add More")}
        </Button>
      </form>

      <div
        style={{
          position: "absolute",
          top: "4%",
          right: 0,
          padding: "20px",
        }}
      >
        <Toast show={show} onClose={toggleShowA} delay={2000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, Please Enter a valid Todo name!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default Todo;
