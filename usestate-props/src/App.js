import React,{useState} from "react";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import photo1 from "./assests/brooke-cagle-wKOKidNT14w-unsplash.jpg";
import photo2 from "./assests/freestocks-9UVmlIb0wJU-unsplash.jpg";
import photo3 from "./assests/gregory-hayes-h5cd51KXmRQ-unsplash.jpg";
import photo4 from "./assests/marco-chilese-nHIb0s-BZMA-unsplash.jpg";
import photo5 from "./assests/marie-michele-bouchard-3U9BCWHMhUw-unsplash.jpg";
function App() {
  const data = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      image:  photo1,
      friend: false,
    },
    {
      name: "Mimi Stone",
      profession: "Doctor",
      image: photo2,
      friend: false,
    },
    {
      name: "Sarkan Boltaz",
      profession: "Enterpreneur",
      image:  photo3 ,
      friend: false,
    },
    {
      name: "Mariam Khan",
      profession: "Pilot",
      image: photo4,
      friend: false,
    },
    {
      name: "Andrew Smith",
      profession: "Actor",
      image: photo5 ,
      friend: false,
    },
  ];

  const [friendVar, setFriend] = useState(data);
  const handleClick=(index)=>{
    setFriend((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(itemIndex===index){
          return{...item, friend: !item.friend};
        }
        return item;
      })
    })
  }
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar change={friendVar} />
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {friendVar.map((value, index) => (
            <Card key={index} value={value} handleClick={handleClick} index={index} />
          ))}
        </div>
      <footer className="bg-gray-800 text-white text-center py-4 mt-8 bottom-0 w-full">
        <p>By &copy; Ananya Mishra (Made for learning reactjs concepts). All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
