import AdminSideBar from 'components/admin/AdminSideBar'
import AdminSideBarResponsive from 'components/admin/AdminSideBarResponsive'
import React from 'react'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex w-screen h-screen flex-col lg:flex-row ">
            <AdminSideBarResponsive/>
            <AdminSideBar/>
            <main className="flex h-full w-full overflow-y-scroll bg-gray-400">
                { children }
            </main>
        </div>
    )
}

export default AdminLayout
