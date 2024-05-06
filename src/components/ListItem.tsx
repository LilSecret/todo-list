export default function ListItem() {
  return (
    <li className="list-item">
      <input type="checkbox" className="list-checkbox" />
      <div className="list-info">
        <h4 className="title">Getting an invite for dribbble</h4>
        <p className="sub-title">one of my goals in 2017</p>
      </div>
      <div className="list-menu">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </li>
  );
}
