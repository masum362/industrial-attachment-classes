import { Suspense, use, useContext, useRef } from "react";
import Forms from "./components/Forms";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import ShowUsers from "./components/ShowUsers";
import Footer from "./components/footer";
import { Outlet } from "react-router";
import { Context } from "./context/ContextProvider";

function App() {

  const {user, setUser} = use(Context)

  console.log(user)
  const h1Ref= useRef(null)

  return (
    <>
      <Navbar />
      {/* <h1 ref={h1Ref}>hello world</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
        <ShowUsers h1Ref={h1Ref}/>
      </Suspense>  */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
