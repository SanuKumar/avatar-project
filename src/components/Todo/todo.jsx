import React, { useState } from "react";
import { Button, Toast, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Todo = (props) => {
  const {
    t,
    // i18n
  } = useTranslation();
  const [todolist, settodolist] = useState([]);
  const [newTodo, setnewtodo] = useState({ name: "", id: "" });
  const [show, setShow] = useState(false);
  const toggleShowA = () => setShow(!show);
  const [upd, setupd] = useState(false);

  const handleAddToDo = (e) => {
    e.preventDefault();
    console.log("newTodo", newTodo);
    const newVal = todolist.concat(newTodo);
    if (newTodo.name) {
      if (upd) {
        console.log("to update");

        // setfielddata({
        //   ...fielddata,
        //   setting_attributes: {
        //     ...fielddata.setting_attributes,
        //     sections: newArr,
        //   },
        // });
        settodolist(newVal);
      } else {
        settodolist(newVal);
        setnewtodo({ name: "", id: "" });
        setupd(false);
      }
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
    setupd(false);
  };

  const handleUpdate = (id) => {
    setupd(true);
    todolist.map((t) => {
      if (t.id === id) {
        let del = todolist.filter((list) => list.id !== id);
        setnewtodo({
          name: t.name,
          id: t.id,
        });
        console.log("del", del);
      } else {
        console.log("Update ==> ", id);
        return t;
      }
      return null;
    });
  };

  console.log("props ==> ", props);

  console.log("local  ", localStorage.i18nextLng);

  return (
    <div>
      <h1>Hello From Todo</h1>

      <div style={{ padding: "20px", float: "right" }}>
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
          <label style={{ paddingRight: "20px" }}>{t("New Todo's")}</label>
          <input
            name="name"
            type="text"
            value={newTodo.name}
            placeholder="Enter New Todo"
            onChange={(e) => handleInput(e)}
            refs="name"
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
