import { TListItem } from "../types";

export default function ListItem({ content }: { content: TListItem }) {
  return (
    <li className="list-item">
      <input type="checkbox" className="list-checkbox" />
      <div className="list-info">
        <h4 className="title">{content.title}</h4>
        {content.subTitle && <p className="sub-title">{content.subTitle}</p>}
      </div>
      <div className="list-menu">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </li>
  );
}
