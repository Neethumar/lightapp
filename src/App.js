import './App.css';
import Header from './components/Header/header';
import Light from './components/light/Light';
import react,{useState} from 'react';

function App() {
  const [value1,setvalue1]=useState('ON');
  const [value2,setvalue2]=useState('ON');
  return (
    <>
    <Header />
    <div className='container'>
      <div className='bulb1'>
    <Light isON={value1} toggle={()=>setvalue1(value1==='ON'?'OFF':'ON')} /></div>
    <div className='bulb2'>
    <Light isON={value2} toggle={()=>setvalue2(value2==='ON'?'OFF':'ON')}/></div>
    </div>
    </>
  );
}

export default App;
