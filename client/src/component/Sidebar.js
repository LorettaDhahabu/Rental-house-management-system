import React from 'react'

function Sidebar() {
    const menuItem = [
      { path: "/", name: Dashboard },
      { path: "/apartments", name: House Types },
      { path: "/tenants", name: Tenants },
      { path: "/payments", name: Payments },
      { path: "/reports", name: Reports },
      { path: "/profile", name: Landlord }
    ];
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar