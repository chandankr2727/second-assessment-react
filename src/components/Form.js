import React,{useState} from 'react'
import './Form.css'

const Form = () => {
    const [state, setstate] = useState({
        name:"",
        department:"",
        rating:""
    })
    const [record, setRecord] = useState([])

    const handlechange = (e) => {
        setstate({...state,[e.target.name]: e.target.value});
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const newRecord = {...state, id:new Date().getTime().toString()}
        setRecord([...record, newRecord]);
        setstate({name:"",department:"",rating:""})
    }
    return (
        <>
        <div className='form'>
                <form onSubmit={handlesubmit}>
                    <label className="label">Name : </label>
                    <input type="text" autoComplete='off' className="input" name='name' id='name' value={state.name} onChange={handlechange} />
                    <br/>
                    <label className="label">Department : </label>
                    <input type="text" autoComplete='off' className="input" name='department' id='department' value={state.department} onChange={handlechange} />
                    <br/>
                    <label className="label">Rating : </label>
                    <input type="number" autoComplete='off' className="input" name='rating' id='rating' value={state.rating} onChange={handlechange} />
                    <br/>
                    <br/>
                    <button type='submit' className='btn'>SUBMIT</button>
                </form>
            </div>
                 <div className='displaycontainer'>
                 {
                     record.map((a) => {
                         return (
                             <div className='displayinfo' key={a.id}>
                                 <p> Name : {a.name} | Department : {a.department} | Rating  : {a.rating}</p>
                             </div>
                         )
                     })
                 }
             </div>
             </>
    )
}

export default Form
