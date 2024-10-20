import { useState } from "react";

const Blog = () => {

    const [blogList, setBlogList] = useState([])
    const [form, setForm] = useState({
        title: "",
        description: "",
    });
    const { title, description } = form;




    const onInputChange = (event) => {
        debugger;
        console.log(event)
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });


    };
    const handleAdd = () => {
        setBlogList([...blogList, form]);// add additional content to Bloglist
        // to clear out the form after content is added below
        setForm({
            title: "",
            description: "",
        });

    };

    return (
        <div className="w-[400px] border shadow-sm rounded-lg p-6 mx-auto">

            <div>
                <label htmlFor="title">Title</label>
                <input
                    className=" border p-2 rounded-md w-full focus:border-blue-50"

                    type="text" name="title" value={title} onChange={onInputChange} placeholder="enter message" />
            </div>

            <div >
                <label htmlFor="description">Description</label>
                <textarea
                    className=" border p-2 rounded-md w-full focus:border-blue-50"
                    name="description" value={description} onChange={onInputChange} rows={5} />


            </div>
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white rounded-full w-full px-4 py-2 mt-4">Add</button>
            {blogList.map((blog, index) => {
                return <div>
                    <h1> {blog.title}</h1><p>{blog.description}</p>
                </div>

            })}
        </div>
    )
}
export default Blog;