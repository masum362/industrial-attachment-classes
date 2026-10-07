import CardChildren from "./CardChildren"



const Card = ({cardId,title,children,handleLifting}) => {
  return (
    <div>
        {title}{cardId}<br/>
       <CardChildren handleLifting={handleLifting}>{children}</CardChildren>
    </div>
  )
}

export default Card