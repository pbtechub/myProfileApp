import OrangeBar from "./components/OrangeBar";
import Sidebar from "./components/Sidebar";
import MenuPage from "./components/MenuPage";
import { useState } from "react";
import { BrowserRouter} from 'react-router-dom';


function App() {
  const [selected, setSelected] = useState('Password');
  const [searchMenu, setSearchMenu] = useState('')

 
  return (
    <div className="">
      <BrowserRouter>
        <OrangeBar />
        <div className="bg-[#fff] rounded-3xl z-30 h-[85vh] flex overflow-hidden" >
          <Sidebar 
            selected = {selected}
            setSelected={setSelected}
            
            />
          <MenuPage 
            selected = {selected}
            setSelected={setSelected}
            searchMenu={searchMenu}
            setSearchMenu={setSearchMenu}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
