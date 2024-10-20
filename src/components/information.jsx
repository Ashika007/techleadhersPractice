function Information(props){
    console.log(props)
    const {title,description}= props;
    return (
    <div>
        <h1>{title}</h1>;
        <p>{description}</p>
        </div>
    )
}
function Profile(props){

    console.log(props)
    const{name, age, email="Email Mising"}=props;// default value assign cause high change API bata value aaudaina
    return (
        <div>
            <h1>{name}</h1>
            {/* conditional rendering */}
            {age && <p>{age}</p>}
            <p>{email}</p>
        </div>
    )
}


export {Profile};
export default Information;