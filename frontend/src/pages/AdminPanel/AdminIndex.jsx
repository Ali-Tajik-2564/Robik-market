import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from '../../component/AdminPanel/SideBar/AdminSideBar'
import CmsTopBar from '../../component/CmsTopBar/CmsTopBar'
export default function AdminIndex() {
    return (
        <div className=' flex  flex-row-reverse items-start'>
            <span className='w-1/5 min-w-[15rem] '>
                <AdminSideBar />
            </span>
            <div className="w-4/5 flex flex-col">
                <span className='w-full'>
                    <CmsTopBar />
                </span>
                <Outlet />
            </div>
        </div>
    )
}
