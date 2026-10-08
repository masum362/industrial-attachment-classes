import { Fragment, useContext, useEffect, useReducer, useRef, useState } from "react";
// import { useState } from "react";
import "./App.css";
// import Demo from "./components/Demo";
// import { ThumbsDown, ThumbsUp } from "lucide-react";
// import Forms from "./components/Forms";
// import { ThumbsUp } from "lucide-react";
import axios from 'axios'
import { Context } from "./context/ContextProvider";

// import Card from "./components/Card";



function PriceBadge({ price }) {
  const prevPriceRef = useRef(price);
  const {user,setUser} = useContext(Context)
  console.log(user  )

  useEffect(() => {
    prevPriceRef.current = price;
  }, [price]);
  console.log(prevPriceRef)

  const direction =
    prevPriceRef.current === price ? 'same' : price > prevPriceRef.current ? 'up' : 'down';

  return <span>Price moved {direction} {user.name}</span>;
}

function App() {
  // const [accessories, setAccessories] = useState(["laptop", "phone"]);
  const [isLiked, setIsLiked] = useState(false);
  const [Isloading, setIsloading] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  // const handleClick = (type) => {
  //   // setCount((prev) => prev + 1);
  //   if (type === "like") {
  //     setIsLiked((prev) => !prev);
  //     // setIsDisliked(false);
  //   }
  // };

  

  // const cards = [
  //   { id: 1, title: "Card 1", description: "This is the first card." },
  //   { id: 2, title: "Card 2", description: "This is the second card." },
  //   { id: 3, title: "Card 3", description: "This is the third card." },
  // ];

  // const handleLifting = (user) => {
  //   console.log(user);
  // };

  // useEffect(() => {
  //   console.log("user clicked");
  // },[isLiked]);

  const getUsers = async () => {
    try {
      setIsloading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data= response.data;
      setData(data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      setErrorMessage("Failed to fetch users.");
    }
  }

  const inputRef = useRef(null);
  console.log(inputRef.current)

  useEffect(() => {
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  },[]);

  const conterReducer = (state, action) =>{
    switch(action.type){
      case "increment":
        return state + 1;
      case "decrement":
        if(state === 0){
          return state;
        }
        return state - 1;
      default:
        return state;
    }
  }

  const [count,dispatch] = useReducer(conterReducer,0)


  return (
    <Fragment>
      {/* <Navbar />
      <main className="main-content">
        <h2>Welcome to Our Site</h2>
        <p>This is the main content area.</p>
         {cards.map((card) => (
          <Card handleLifting={handleLifting} key={card.id} title={card.title}>
            {card.description}
          </Card>
        ))} 

         {users.map((user) => {
          const isLoading = user.isGood;
          return (
              <div key={user.id}>
                <h3>{user.name}</h3>
                <p>User ID: {user.id}</p>
                <div>{isLoading ? "Loading..." : "Permission denied."}</div>
              </div>
            )
          
        })}
      </main>

       <Footer />  */}

      {/* {accessories.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}

       {/* <button onClick={()=>handleClick("like")}>
        <ThumbsUp className={`${isLiked ? "text-blue-400" : " "}`} />
      </button> */}
     {/* <button onClick={()=>handleClick("dislike")}>
        <ThumbsDown className={`${isDisliked ? "text-red-400" : " "}`} />
      </button>
      <Demo /> */}
      {/* <Forms /> */}


      {Isloading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>
          {data.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>User ID: {user.id}</p>
            </div>
          ))}
        </div>
      )}

      {/* <input type="text" ref={inputRef} /> */}

      <PriceBadge price={10} />

      <p>{count}</p>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>

    </Fragment>
  );
}

export default App;
