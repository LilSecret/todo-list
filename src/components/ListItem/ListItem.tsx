import { useDispatch } from "react-redux";
import { TListItem } from "../../types";
import "./list-item.css";
import { deleteListItem } from "../../state/listItems/listItemsSlice";

export default function ListItem({ item }: { item: TListItem }) {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      <input type="checkbox" className="list-item-checkbox" />
      <div className="list-item-info">
        <h4 className="title">{item.title}</h4>
        {item.subTitle && <p className="sub-title">{item.subTitle}</p>}
      </div>
      <div
        className="list-exit-icon"
        onClick={() => {
          dispatch(deleteListItem(item));
        }}
      >
        <img src="/src/assets/close.svg" alt="delete icon" />
      </div>
    </li>
  );
}
