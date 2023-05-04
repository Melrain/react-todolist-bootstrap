import { useState } from 'react';
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

  const renderFunction = ListData.map((item, key) => {
    return <ListItem01 key={item.id} content={item.listContent} />
  })

  const handlerOnchange = (event) => {
    setNewValue(event.target.value);
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

  return (
    <div>
      <Frame
        input={<Input onChangeHandler={handlerOnchange} onClickHandle={handleOnClicke} />}
        filter={<Filter />}
        renderListFunction={renderFunction}
        listItem02={<ListItem02 />}
        listItem03={<ListItem03 />}
      />

    </div>
  )
}

export default App;
