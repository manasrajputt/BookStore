import React ,{useState}from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Course'

function Course() {

  const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

  return (
    <>
        <Navbar inputValue={inputValue} handleInputChange={handleInputChange} />
        <div className='min-h-screen'>
        <Courses inputValue={inputValue} />
        </div>
        <Footer/>
    </>
  )
}

export default Course