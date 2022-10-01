import react, { useContext } from "react";
import { useEffect, useState } from "react";


const Dogs = () => {
    const [dog, setDog] = useState([{}])

    useEffect(() => {

        fetch('https://api.thedogapi.com/v1/images/search')
            .then((res) => res.json()
                .then((data) => setDog(data))
            )
    }, [])



    console.log(dog[0])

    return (
        <div>
            <p>dog id</p>
            <p>{dog[0].id} </p>
            <img src={dog[0].url} alt="" />




        </div>
    )
}
export default Dogs