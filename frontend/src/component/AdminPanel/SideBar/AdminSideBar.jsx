import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../../Contexts/AuthContext'
import Swal from 'sweetalert2'

export default function AdminSideBar() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const useLogOut = (event) => {
    event.preventDefault()
    Swal.fire({
      title: "خروج شما با موفقیت انجام شد",
      icon: "success",
      confirmButtonText: "حله"

    })
      .then(() => {

        authContext.logout()
        navigate("/")
      })
  }
  return (
    <div className='w-full  h-screen sticky top-0 right-0    text-right rounded-l-md'>
      <div className="w-[97%] mx-auto border-b-2 border-mainPrimary h-auto p-3 pb-2 flex items-center justify-between flex-row-reverse">
        <img src=".././images/logo.png" className='w-14 h-12' alt="" />
        <span className="text-xl font-semibold text-primaryText">روبیک مارکت</span>
      </div>
      <ul className='flex flex-col items-end justify-start  mt-3 text-right gap-y-4 w-full'>
        <Link to="/admin-panel" className='w-full '>
          <li className='text-primaryText w-full  bg-mainPrimary text-lg font-medium py-2 px-3   hover:text-shadowPrimary'>
            پنل مدیریت
          </li>
        </Link>
        <Link to="users">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            کاربران
          </li>
        </Link>
        <Link to="products">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            محصولات
          </li>
        </Link>
        <Link to="articles">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            مقاله ها
          </li>
        </Link>
        <Link to="orders">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            سفارشات
          </li>
        </Link>
        <Link to="comments">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            کامنت ها
          </li>
        </Link>
        <Link to="offs">
          <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
            تخفیف ها
          </li>
        </Link>

        <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary cursor-pointer' onClick={useLogOut}>
          خروج
        </li>

      </ul>
    </div>
  )
}
