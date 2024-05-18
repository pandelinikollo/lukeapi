import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function People() {
    const { id } = useParams();
    const [people, setPeople] = useState({});
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`).
        then(response => {
            setPeople(response.data)
            setError("")
        }).
        catch(err => setError(err))
    }, [id])



  return (
    <div>
      {
        error ?
        <>
        <h3>There arent the droids your looking for</h3>
        </>
        :
        <>
        <h1>{people.name}</h1>
        <p>Height: {people.height}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Eye Color: {people.eye_color}</p>
        <p>Skin Color: {people.skin_color}</p>
        </>
      }
    </div>
  )
}

export default People
