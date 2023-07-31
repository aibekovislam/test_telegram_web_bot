import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx';
import Form from './components/Form/Form.jsx';


function App() {

  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductList/>}></Route>
        <Route path={'form'} element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
