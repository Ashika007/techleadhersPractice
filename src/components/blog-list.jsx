import React from "react"

export default function BlogList(props) {
    debugger;
    const { blogList } = props
    return (
        <div>
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white rounded-full w-full px-4 py-2 mt-4">
                Add
            </button>
            {blogList.map((blog, index) => {
                return <div key={index}>
                    <h6>{blog.title}</h6>
                    <p>{blog.description}</p>
                </div>
            })}
        </div>
    )

}


