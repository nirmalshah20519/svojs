import './App.css';
import Header from './components/header';
import { CgProfile, CgMail } from 'react-icons/cg';
import { IoIosBusiness } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import PersonalInfo from './components/personalInfo';
import { useState} from 'react';
import ContactInfo from './components/ContactInfo';
import BusinessInfo from './components/BusinessInfo';
import Done from './components/Done';


function App() {
  
  const [i, setI]=useState(0)
  const [finalData1, setFinalData1]=useState({})
  const [finalData2, setFinalData2]=useState({})
  const [finalData3, setFinalData3]=useState({})  
  const finalData={...finalData1, ...finalData2, ...finalData3}
 
  const myDict={
    0: ()=>{return<><CgProfile/> <span style={{fontSize:'1.5rem', fontFamily:'Signika Negative'}}> Personal Details</span></>},
    1: ()=>{return<><CgMail/> <span style={{fontSize:'1.5rem', fontFamily:'Signika Negative'}}> Contact Details</span></>},
    2: ()=>{return<><IoIosBusiness/> <span style={{fontSize:'1.5rem', fontFamily:'Signika Negative'}}> Business Details</span></>},
    3: ()=>{return<><TiTick/> <span style={{fontSize:'1.5rem', fontFamily:'Signika Negative'}}>Thanks For Your response</span></>}

  }

  return (
    <>
      <Header/>
      <div className="form-container">
        <div className="header">{myDict[i]()}</div>
        <div className="body">{i===0?
        <PersonalInfo setI={setI} setFinalData={setFinalData1}/>:
        i===1?<ContactInfo setI={setI} setFinalData={setFinalData2}/>:
        i===2?<BusinessInfo setI={setI} setFinalData={setFinalData3}/>:
        <Done finalData={finalData}/>}</div>
        {/* <div className="footer">
          <Button variant='primary' id='p-btn' className={`left ${pBtn?'':'invisible'}`} onClick={handlePrev}>Previous</Button>
          <Button variant='primary' id='n-btn' className={`right ${nBtn?'':'invisible'}`} onClick={handleNext}>Next</Button>
          <Button variant='success' id='s-btn' className={`right ${sBtn?'':'invisible'}`} >Submit</Button>
        </div> */}
      </div>
    </>
  );
}

export default App;
