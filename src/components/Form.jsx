import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Form () {
    const [option, setOption] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        if(!id) {
            alert('Please add an ID')
            } else {
                navigate(`/${option}/${id}`)
                setId("")
                console.log(option, id);
            }
        }
    


  return (
    <form onSubmit={submitForm}>
      <label htmlFor="options">Select:</label>
      <select onChange={e => setOption(e.target.value)} name="" id="options">
        <option value="">Select an option</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>

      <label htmlFor="id">ID:</label>
      <input type={id} onChange={e => setId(e.target.value)} placeholder='EnterID' id ='id'/>
      <button type='submit'>Search</button>

    </form>
  )
}

export default Form
