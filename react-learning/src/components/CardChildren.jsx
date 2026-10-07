
const CardChildren = ({children,handleLifting}) => {
  
  const user = {
    id:1,
    name:"Humayun"
  }
  return (
    <div>
      {children}
  
  <button onClick={()=>handleLifting(user)}>Lift Data</button>
    
    </div>
  )
}

export default CardChildren