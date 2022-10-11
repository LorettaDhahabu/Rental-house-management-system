import React from 'react'
import {NavLink}  from 'react-router-dom'

function Sidebar({children}) {
    const menuItem = [
      { path: "/dashboard", name: Dashboard },
      { path: "/apartments", name: Houses },
      { path: "/tenants", name: Tenants },
      { path: "/payments", name: Payments },
      { path: "/reports", name: Reports },
      { path: "/profile", name: Landlord }
    ];
  return (
    <div className = "container">
        <div className = "sidebar">
            {menuItem.map((item, index)=> (
                <NavLink to={item.path} key={index} className = "link" activeclassName="active">
                    <div>{item.name}</div>
                </NavLink>
            ))}
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar