import react, { useContext } from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/button"


const People = () => {
    const [rob, setRob] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setRob(data))
    }, [])

    const people1 = rob.slice(0, 5)
    const people2 = rob.slice(5, 11)

    return (
        <div  >
            <div className="grid justify-items-center ">
                <h1 className="flex  text-3xl font-bold underline my-5">  Team one </h1>


                <div className="flex  ">
                    {people1.map((data) => {
                        return (
                            <div key={data.id} className="flex-wrap self-auto border-double border-4 border-indigo-500 p-1 m-1  rounded-lg h-auto min-width: max-content;box-content grow will-change-auto  ">
                                <ul className="  " >
                                    <li className="flex  text-2xl font-bold underline "> {data.name}</li>
                                    <li className=" "><span className="font-bold">id:</span> {data.id}</li>
                                    <li className="" ><span className="font-bold">username:</span>{data.username}</li>
                                    <li className=""><span className="font-bold"  > phone:</span> {data.phone}</li>
                                    <li className=""> <span className="font-bold"  > website:</span> {data.website}</li>
                                    <li className=""> <span className="font-bold"  > city:</span> {data.address.city}</li>
                                    <li className=""><span className="font-bold"  > street:</span> {data.address.street}</li>
                                    <li className=""><span className="font-bold"  > company-name:</span> {data.company.name}</li>
                                </ul>
                            </div>)

                    })}

                </div>
            </div>
            <div className="grid justify-items-center">
                <h1 className="flex  text-3xl font-bold underline my-5">  Team Two </h1>


                <div className="flex  ">
                    {people2.map((data) => {
                        return (
                            <div key={data.id} className="flex-wrap self-auto border-double border-4 border-indigo-500 p-1 m-1  rounded-lg h-auto min-width: max-content;box-content grow will-change-auto  ">
                                <ul className="  " >
                                    <li className="flex  text-2xl font-bold underline "> {data.name}</li>
                                    <li className=" "><span className="font-bold">id:</span> {data.id}</li>
                                    <li className="" ><span className="font-bold">username:</span>{data.username}</li>
                                    <li className=""><span className="font-bold"  > phone:</span> {data.phone}</li>
                                    <li className=""> <span className="font-bold"  > website:</span> {data.website}</li>
                                    <li className=""> <span className="font-bold"  > city:</span> {data.address.city}</li>
                                    <li className=""><span className="font-bold"  > street:</span> {data.address.street}</li>
                                    <li className=""><span className="font-bold"  > company-name:</span> {data.company.name}</li>
                                </ul>
                            </div>)

                    })}

                </div>
                <a href="/" className="text-teal-400  ">
                    <Button variant="success" > <span className="text-inherit ">Back to home</span> </Button>
                </a>

            </div>




        </div >
    )
}
export default People