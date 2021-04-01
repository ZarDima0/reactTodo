import "./index.scss";
import ClassNames from "classnames";
import Badge from "../badge/index";
import RemoveSvg from "../../assets/remove.svg";

const List = ({ items, onClick, isRemove, onRemove }) => {
  function removeList(item) {
    if (window.confirm("Действительно удалить список?")) {
      onRemove(item);
    }
  }
  console.log(items)
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={ClassNames(item.className, { active: item.active })}
          >
            <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
            <span>{item.name}</span>
            {isRemove && (
              <img
                className="list_Remove_Icon"
                src={RemoveSvg}
                onClick={() => {
                  removeList(item);
                }}
                alt=""
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
export default List;
