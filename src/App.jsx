import Information from "./components/information";
import { Profile } from "./components/information";
import Blog from "./app/blog";

const profileList = [
  {
    name: "john",
    age: 20,
    email: "abc@gmail.com"
  },
  {
    name: "john cena",
    age: 20,
    email: "abc@gmail.com"
  },
  {
    name: "john doe",
    age: 20,
    email: "abc@gmail.com"
  }
]


function App() {
  return <Blog />
}

// function App() {
//   return (
//     <div>
//       <Information title="New Inforamtion" description="hello world" />
//       <Information title="Old Inforamtion" description="hello world" />

//       {profileList.map((user, index) => {
//         {/* return <Profile name="Gopal"/>; */ }
//         return <Profile name={user.name} age={user.age} email={user.email} />
//       })}
//       <Blog />

//     </div>
//   )

// }
export default App;
