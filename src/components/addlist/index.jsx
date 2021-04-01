import React, { useEffect,useState } from "react";
import List from "../list/List";
import close from "../../assets/close.svg";
import "./addlistbutton.scss";
import Badge from "../badge/index";
import axios from "axios";

import { CSSTransition } from "react-transition-group";

const AddListButton = ({ colors, onAdd }) => {
  const [visblePopup, setvisblePopup] = useState(false);
  const [select, setSelect] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setValue] = useState("");

  useEffect(() => {
    if (Array.isArray(colors)) {
      setSelect(colors[0].id);
    }
  }, [colors]);

  function onClose() {
    setvisblePopup(false);
    setSelect(colors[0].id);
    setValue("");
  }

  function addList() {
    if (inputValue === "") {
      console.log("Значения нет");
      return;
    }
    setIsLoading(true);
    axios
      .post('http://localhost:3001/lists', {
        name: inputValue,
        colorId: setSelect
      })
      .then(({ data }) => {
        const color = colors.filter(c => c.id === setSelect)[0].name;
        const listObj = { ...data, color: { name: color } };
        onAdd(listObj);
        onClose();
      })
      .finally(() => {
        setIsLoading(false);
      });

    const color = colors.filter((color) => color.id === select)[0].name;
    onAdd({
      id: Math.random(),
      name: inputValue,
      color,
    });
    onClose();
  }
  return (
    <div className="add__list">
      <List
        onClick={() => {
          setvisblePopup(true);
        }}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Создать список ",
          },
        ]}
      />
      <CSSTransition
        in={visblePopup}
        unmountOnExit
        timeout={1000}
        classNames="alert"
      >
        <div className="add__list__popap">
          <img
            onClick={onClose}
            src={close}
            alt=""
            className="add__list__popap_close_btn"
          />
          <input
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            className="field"
            type="text"
            placeholder="Новая папка"
          />
          <div className="add__list__popap_colors">
            {colors.map((color) => {
              return (
                <Badge
                  onClick={() => setSelect(color.id)}
                  className={select === color.id && "active"}
                  key={color.id}
                  color={color.name}
                />
              );
            })}
          </div>
          <button onClick={addList} className="button">
          {isLoading ? 'Добавление...' : 'Добавить'}
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};
export default AddListButton;
