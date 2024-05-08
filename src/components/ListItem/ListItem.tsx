import { TListItem } from "../../types";
import "./list-item.css";

export default function ListItem({ content }: { content: TListItem }) {
  return (
    <li className="list-item">
      <input type="checkbox" className="list-item-checkbox" />
      <div className="list-item-info">
        <h4 className="title">{content.title}</h4>
        {content.subTitle && <p className="sub-title">{content.subTitle}</p>}
      </div>
      <div className="list-item-menu">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </li>
  );
}
