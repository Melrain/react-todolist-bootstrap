import { useEffect, useState } from 'react';
import './App.css';
import { Filter } from './components/filter';
import { Frame } from './components/frame';
import { Input } from './components/input';

import { ListItem01 } from './components/listItem01';
import { ListItem02 } from './components/listItem02';
import { ListItem03 } from './components/listItem03';

function App() {


  const [ListData, setData] = useState([
    { id: 1, listContent: "今天要把这个好好地完成" },
    { id: 2, listContent: "不能搞砸了" }
  ]);

  const [newValue, setNewValue] = useState("");

  const [display, setDisplay] = useState("none");

  const [editValue, setEditValue] = useState("");

  const handlerOnchange = (event) => {
    const { value, id } = event.target;
    setNewValue(value);
    event.preventDefault();
  }

  const handleOnClicke = () => {
    setNewValue("");
    document.getElementById("myInput").value = "";
    console.log("addButtonClicked");
    //useState 添加item的方式
    if (newValue != "" && newValue != null) {
      setData([...ListData, { id: ListData.length + 1, listContent: newValue }])
    }

  }

  const handleEditButtonOnClicke = (event) => {

    console.log("edit button clicked");
    setDisplay(display == "none" ? "" : "none");

  }

  //从state array 中删除item
  const handleDeleteButtonOnClick = (data) => {
    console.log("delete button clicked");
    setData((prevValue) => {
      return prevValue.filter((item) => item !== data)
    })
  }

  //重新编辑文本
  const handleEditInput = (event) => {
    const { value } = event.target;
    setEditValue(value);
  }

  //监听键盘
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, []);

  const detectKeyDown = (event) => {
    console.log("Clicked key:" + event.key);

    if (event.key === " ") {
      console.log("key clicked: SpaceBar");
    }
  }



  const renderFunction = ListData.map((item, key) => {
    return <ListItem01 editInputOnchangeHandler={handleEditInput} editButtonClick={handleEditButtonOnClicke} deleteButtonClick={() => { handleDeleteButtonOnClick(item) }} key={item.id} content={item.listContent} editInputDisplay={display} />
  }
  )

  //渲染
  return (
    <div>
      <Frame
        input={<Input onChangeHandler={handlerOnchange} onClickHandle={handleOnClicke} />}
        filter={<Filter />}
        renderListFunction={renderFunction}
      />

    </div>
  )
}

export default App;
