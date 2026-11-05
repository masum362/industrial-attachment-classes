import type { ReactNode } from "react"

const Wrapper = ({children}:{children:ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default Wrapper