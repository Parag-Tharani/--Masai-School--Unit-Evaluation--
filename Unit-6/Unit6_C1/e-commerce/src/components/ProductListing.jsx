import React from "react";
import { ProductDisplay } from "./ProductDisplay";

export const ProductList = () => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const perPageLimit = 5

    const fetchData = () => {
        setLoading(true)
        fetch(`http://localhost:4000/info?_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }

    React.useEffect(() => {
        fetchData()
    },[page])

    const HandleDelete = (id) => {

        setLoading(true)
        fetch(`http://localhost:4000/info/${ id }`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => {return fetchData()}, setLoading(false))
        .catch(() => {setError(true); setLoading(false)})
      }

    return loading ? (<h2> Please Wait <br />Loading ahead...</h2>)
    : error ? (<h2> Aghh...Something Went Wrong :( </h2>)
    : ( <div >
        <div id="displayProduct">{data.map((items => <ProductDisplay key={items.id} {...items} HandleDelete={HandleDelete}/>))}</div>
        <div id="pnButton">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} >Prev</button>
        <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(20/perPageLimit)}>Next</button>
        </div>
    </div>
    )
}