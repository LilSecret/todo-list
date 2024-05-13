import { useState } from "react";
import Input from "../Input/Input";
import toast from "react-hot-toast";
import { capitalize } from "../../utils/transformations";
import "./new-task-form.css";
import { useListItems } from "../../hooks/ListItemContext";

export const NewTaskForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [subTitleInput, setSubTitleInput] = useState("");

  const { listItems, setListItems } = useListItems();

  const getNewTask = () => {
    const capitalizedTitle = capitalize(titleInput);
    return subTitleInput.length > 0
      ? { title: capitalizedTitle, subTitle: subTitleInput }
      : { title: capitalizedTitle };
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
    <form onSubmit={newTaskHandler} className="task-form">
      Add Task:
      <Input
        inputProps={{
          name: "title",
          placeholder: "Title",
          value: titleInput,
          onChange: (e) => {
            setTitleInput(e.target.value);
          },
        }}
      />
      <Input
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
  );
};
