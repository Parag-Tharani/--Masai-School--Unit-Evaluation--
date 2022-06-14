import { getAllByAltText } from "@testing-library/react";
import React from "react";
import { ProductDisplay } from "./ProductDisplay";

export const ProductList = () => {

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const perPageLimit = 5
    const [select, setSelect] = React.useState("relevant")
    const [gender, setGender] = React.useState("")
    const [genboo, setGenboo] = React.useState(false)

    const fetchData = () => {
        setLoading(true)
        fetch(`http://localhost:4000/info?_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }
    const fetchDataGender = () => {
        setLoading(true)
        fetch(`http://localhost:4000/info?gender=${gender}&_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }

    const fetchDataAccen = () =>{
        setLoading(true)
        fetch(`http://localhost:4000/info?_sort=price&_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }
    const fetchDataAccenGender = () =>{
        setLoading(true)
        fetch(`http://localhost:4000/info?gender=${gender}&_sort=price&_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }

    const fetchDataDes = () => {
        setLoading(true)
        fetch(`http://localhost:4000/info?_sort=price&_order=desc&_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }
    const fetchDataDesGender = () => {
        setLoading(true)
        fetch(`http://localhost:4000/info?gender=${gender}&_sort=price&_order=desc&_page=${page}&_limit=${perPageLimit}`)
        .then((res) => res.json())
        .then((res) => { setData(res); setLoading(false) })
        .catch(() => { setError(true); setData([]); setLoading(false)})
    }

    React.useEffect(() => {
        
    if(genboo == false){
        if(select === "relevant"){
            fetchData()
        }else if(select === "lth"){
            fetchDataAccen()
        }else if(select === "htl"){
            fetchDataDes()
        }
    }else{

        if(select === "relevant"){
            fetchDataGender()
        }else if(select === "lth"){
            fetchDataAccenGender()
        }else if(select === "htl"){
            fetchDataDesGender()
        }
    }
    },[page,select,genboo,gender])

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
        <div id="sort">
            <label>Sort</label>
            <select id="selectSort" onClick={(items) => setSelect(items.target.value)}>
                <option></option>
                <option  value={"relevant"}>Relevant</option>
                <option  value={"lth"}>low to high</option>
                <option  value={"htl"}>high to low</option>
            </select>
            <button id="mensButton" onClick={() => {setGender("male"); setGenboo(!genboo)}}>Mens</button>
            <button id="womenButton" onClick={() => {setGender("female"); setGenboo(!genboo)}}>Womens</button>
        </div>
        <div id="displayProduct">{data.map((items => <ProductDisplay key={items.id} {...items} HandleDelete={HandleDelete}/>))}</div>
        <div id="pnButton">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} >Prev</button>
        <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(20/perPageLimit)}>Next</button>
        </div>
    </div>
    )
}