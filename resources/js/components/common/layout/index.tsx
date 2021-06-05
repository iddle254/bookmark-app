import React from "react"

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>
}
