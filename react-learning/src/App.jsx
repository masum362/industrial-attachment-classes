import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
// import Card from "./components/Card";

function App() {
  // const cards = [
  //   { id: 1, title: "Card 1", description: "This is the first card." },
  //   { id: 2, title: "Card 2", description: "This is the second card." },
  //   { id: 3, title: "Card 3", description: "This is the third card." },
  // ];

  // const handleLifting = (user) => {
  //   console.log(user);
  // };

  const users = [
    { id: 1, name: "Humayun", isGood: true },
    { id: 2, name: "Rakib", isGood: false },
    { id: 3, name: "Animesh", isGood: true },
    { id: 4, name: "Rimon", isGood: false },
    { id: 5, name: "Rabbi", isGood: true },
    { id: 6, name: "Rashida", isGood: false },
  ];

  return (
    <Fragment>
      <Navbar />
      <main className="main-content">
        <h2>Welcome to Our Site</h2>
        <p>This is the main content area.</p>
        {/* {cards.map((card) => (
          <Card handleLifting={handleLifting} key={card.id} title={card.title}>
            {card.description}
          </Card>
        ))} */}

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

      <Footer />
    </Fragment>
  );
}

export default App;
