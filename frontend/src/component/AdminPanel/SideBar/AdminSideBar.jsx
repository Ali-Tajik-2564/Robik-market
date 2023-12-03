import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../../Contexts/AuthContext'
import Swal from 'sweetalert2'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxCross2 } from "react-icons/Rx"
export default function AdminSideBar({ onSlideShow, setOnSlideShow }) {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const handleClose = () => setOnSlideShow(false);
  const handleShow = () => setOnSlideShow(true);
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
    <div>
      <div className=' w-full hidden lg:block  h-screen sticky top-0 right-0    text-right rounded-l-md'>
        <div className="w-[97%] mx-auto border-b-2 border-mainPrimary h-auto p-3 pb-2 flex items-center justify-between flex-row-reverse">
          <img src=".././images/logo-1.png" className='w-24' alt="" />
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
      <div className=" w-full block lg:hidden  h-screen sticky top-0 right-0    text-right rounded-l-md">
        {
          onSlideShow && (
            <Offcanvas show={onSlideShow} onHide={handleClose} placement='end' dir="rtl" >
              <Offcanvas.Header closeButton className='bg-mainPrimaryLight'>
                <Offcanvas.Title className='  w-full  flex flex-row-reverse justify-between items-center ' >
                  <RxCross2 onClick={() => handleClose()} className='hover:text-gray-700 text-primaryText p-1 cursor-pointer rounded-md border border-mainPrimary  shadow-sm w-8 h-8' />
                  <img src=".././images/logo-1.png" className='w-24' alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body dir='rtl' className='primary-gradient'>

                <ul className=' flex flex-col items-start justify-start  mt-3 text-right gap-y-4 w-full'>
                  <Link to="/admin-panel" className='w-full ' onClick={() => handleClose()}>
                    <li className='text-primaryText w-full  bg-mainPrimary text-lg font-medium py-2 px-3   hover:text-shadowPrimary'>
                      پنل مدیریت
                    </li>
                  </Link>
                  <Link to="users" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      کاربران
                    </li>
                  </Link>
                  <Link to="products" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      محصولات
                    </li>
                  </Link>
                  <Link to="articles" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      مقاله ها
                    </li>
                  </Link>
                  <Link to="orders" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      سفارشات
                    </li>
                  </Link>
                  <Link to="comments" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      کامنت ها
                    </li>
                  </Link>
                  <Link to="offs" onClick={() => handleClose()}>
                    <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary'>
                      تخفیف ها
                    </li>
                  </Link>

                  <li className='text-primaryText text-lg font-medium p-1 mr-3 hover:text-shadowPrimary cursor-pointer' onClick={useLogOut} >
                    خروج
                  </li>

                </ul>

              </Offcanvas.Body>
            </Offcanvas>
          )
        }
      </div>
    </div >
  )
}
