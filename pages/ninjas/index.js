import Link from "next/link"
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {

    return (
        <div>
            <h1>All ninjas</h1>
            {ninjas.map((ninja) => {

                return (
                    <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                        <a href="">
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                )

            })}
        </div>
    )

}
export default Ninjas