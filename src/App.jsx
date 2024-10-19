import Information from "./components/information";
import {Profile} from "./components/information";
import {Counter} from "./app/counter";
import TrafficLight from "./app/trafficLight";
import Search from "./app/search";
function App() {

  const person={
    name:"JohnDoe",
    email:"john@email.com",
    address:{
      city:"Ktm",
      country:"Nepal",
      zip:44660
    }
  };


  // function handleClick(){
  //   alert('hello world')
  // }

  const handleClick = ()=>{
    alert("hello world");
  };

  const handleSubmit = ()=>{
    alert("Submitted");
  };

  return(

    <div>
      <Search/>
      <h1>Personam Information</h1>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <span>{person.address.city}</span>
      <span>{person.address.country}</span>
      <span>{person.address.zip}</span>
      <Profile/>
      <Information/>
      <Counter/>
      <TrafficLight/>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    );
  
}

// const App = () => {
//   const car={
//     model:"ev",
//     make:"2018",
//     company:"tata"
//   };
//   car.model="engine";
//   console.log(car.model);

//   const person={
//     name:"Ashika",
//     email:"abc@gmail.com",
//     age:20,
//     address:{
//       city:"Kathmandu",
//       country:"Nepal",
//       zip:44600
//     },
//     phoneNumber:"9867075904",
//     education:{
//       degree:"Masters",
//       level:"1",
//       schoolName:"Random School"
//     },
//     hasCitizenship:false,
//     interests:["football","cooking"]
//   };
//   console.log(person.education.degree);
//   console.log(person.education.schoolName);


//   const apple={
//     color:"Red",
//     price:25,
//     weight:"300gm",
//     releaseDate:"2nd November"

//   }
//   console.log(apple.color);
//   console.log(appple["releaseDate"]);

 
//   const carPerson={...car,...person, name:"rajan"};

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       {/* <User /> */}
//     </div>
//   );
// };

export default App;
