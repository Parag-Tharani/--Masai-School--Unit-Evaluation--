import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const FormSchema = yup.object().shape({
    title: yup.string().required("Required"),
    gender: yup.string().required("Required"),
    price: yup.number().positive().integer().required("Required"),
    category: yup.string().required("Required"),
    image: yup.string().required("Required"),
});


const ProductForm = () => {

    // const { value, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    //     initialValues: {
    //         title: "",
    //         gender: "",
    //         price: "",
    //         category: "",
    //         image: ""
    //     },
    //     validationSchema: FormSchema
    // })

    const data = (title,gender,price,category,image) => {
        var payload= {
            title,
            gender,
            price,
            category,
            image
        }

        if(title !== "" && gender !== "" && price !== "" && category !== "" && image !== ""){
            fetch(`http://localhost:4000/info`,{
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "content-type" : "application/json"
                }
            })
            .then((res) => res.json())
            .catch((err) => {console.log(err)})

            window.location.reload()
            }
    }

    return (
    <div id="productform">
        <h2>Fill Details</h2>
        <hr />
        <div >
            <div>
            <label htmlFor="title">Title</label><input
            id="title"
            placeholder="Please Provide Title"
            type={"text"}/>
            </div>
            <br />

            <div>
            <label htmlFor="selGen">Gender</label><select id="selGen">
                <option></option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
            </select>
            </div>
            <br />

            <div>
            <label htmlFor="num">Price</label><input
            id="num"
            placeholder="Set Price"
            type={"number"} />
            </div>
            <br />

            <div>
            <label htmlFor="category">Category</label><input
            id="category"
            placeholder="Set Category"
            type={"text"} />
            </div>
            <br />

            <div>
            <label htmlFor="image">Image</label><input
            id="image"
            type={"text"} 
            value={"https://picsum.photos/200"}
            placeholder="Please provide link"/>
            </div>
            <br />

            <div><button id="submit" type={"submit"} 
            onClick={() => data(document.getElementById("title").value,
            document.getElementById("selGen").value,
            document.getElementById("num").value,
            document.getElementById("category").value,
            document.getElementById("image").value)} > 
            Submit</button>
            </div>
        </div>
    </div>
    )
}

export {ProductForm}