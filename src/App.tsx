import moment from "moment";
import "./css/index.css";
import { daysOfWeek } from "./data";
import ListItem from "./components/ListItem";
import React, { useState } from "react";
import { TListItem } from "./types";
import FormInput from "./components/FormInput";
import toast from "react-hot-toast";

function App() {
  const [listItems, setListItems] = useState<TListItem[]>([]);
  const [titleInput, setTitleInput] = useState("");
  const [subTitleInput, setSubTitleInput] = useState("");

  const today = new Date();
  const weekday = daysOfWeek[today.getDay()];
  const dateString = moment(today).format("ll");

  const getNewTask = () => {
    return subTitleInput.length > 0
      ? { title: titleInput, subTitle: subTitleInput }
      : { title: titleInput };
  };

  const addNewItem = () => {
    setListItems([...listItems, getNewTask()]);
  };

  const resetNewTaskForm = () => {
    setTitleInput("");
    setSubTitleInput("");
  };

  const newTaskHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (titleInput.length > 2) {
      addNewItem();
      resetNewTaskForm();
      toast.success("✅ Added your new task");
    } else {
      toast.error("❌ Title is not long enough");
    }
  };

  return (
    <div className="content-container">
      <div className="content-header">
        <h1 className="weekday">{weekday}</h1>
        <span className="date">{dateString}</span>
      </div>

      <form onSubmit={newTaskHandler} className="task-form">
        Add Task:
        <FormInput
          inputProps={{
            name: "title",
            placeholder: "Title",
            value: titleInput,
            onChange: (e) => {
              setTitleInput(e.target.value);
            },
          }}
        />
        <FormInput
          inputProps={{
            name: "subTitle",
            placeholder: "Sub Title",
            value: subTitleInput,
            onChange: (e) => {
              setSubTitleInput(e.target.value);
            },
          }}
        />
        <button className="new-task-btn" type="submit">
          +
        </button>
      </form>

      <hr className="tasks-separator" />
      <div className="list-items">
        {listItems.map((item, index) => (
          <ListItem content={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
