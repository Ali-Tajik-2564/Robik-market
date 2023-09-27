import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
function Comments() {
    return (
        <div className="w-full flex flex-col items-end justify-center gap-8  ">
            <div>
                <div className='shadow-md p-2 w-[85%]  block ml-auto'>
                    <div className="flex flex-row-reverse justify-start items-center gap-x-2 m-2">
                        <img src="../images/profile-1.png" alt="" className=' w-14 h-14 rounded-lg' />
                        <span className='flex flex-col gap-y-2 justify-center items-center'>
                            <h2 className='text-xl font-semibold '> مصطفی کلانتری</h2>
                            <p className="text-sm font-medium text-gray-300">ارسال شده در 18 تیر 1400</p>
                        </span>
                    </div>
                    <div className='flex flex-col justify-end items-end m-3 p-1 space-y-2 '>
                        <p className='text-md font-medium text-right'>این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.</p>
                        <button className=' flex flex-row-reverse items-center justify-end  text-sm font-semibold hover:shadow-lg rounded-md p-1 transition-all duration-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lg font-bold text-blue-900">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                            ارسال پاسخ
                        </button>
                    </div>

                </div>
                {/* //////// if we had a anwser for this comment this div will render ////// */}
                <div className='shadow-md p-2 w-[85%] m-3  text-right bg-gray-100 block'>
                    <div className="flex flex-row-reverse justify-start items-center gap-x-2 m-2">
                        <img src="../images/profile-1.png" alt="" className=' w-14 h-14 rounded-lg' />
                        <span className='flex flex-col gap-y-2 justify-center items-center'>
                            <h2 className='text-xl font-semibold '> امین کیانی</h2>
                            <p className="text-sm font-medium text-gray-300">ارسال شده در 18 تیر 1400</p>
                        </span>
                    </div>
                    <div className='flex flex-col justify-end items-end m-3 p-1 space-y-2 '>
                        <p className='text-md font-medium text-right'>صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند..</p>

                    </div>

                </div>
                {/* //////// if we had a anwser for this comment this div will render ////// */}
            </div>
            <div className='space-y-2 w-full mb-6'>
                <h2 className="text-xl font-bold text-yellow-500">دیدگاه خود را ارسال کنید</h2>
                <div className="w-full  flex flex-row-reverse gap-4">
                    <input type="text" className='w-1/2 bg-none p-2 border rounded-lg text-lg font-bold' placeholder='*نام شما' dir='rtl' />
                    <input type="text" className='w-1/2 bg-none p-2 border rounded-lg text-lg font-bold' placeholder='*پست الکترونیک' dir='rtl' />
                </div>
                <textarea className='w-full h-44 bg-none border rounded-lg text-lg font-bold p-2' placeholder='متن دیدگاه' dir='rtl' />
                <button className="w-1/5 h-10 bg-green-600 text-white rounded-xl text-lg font-bold p-1">ثبت دیدگاه</button>
            </div>
        </div>

    );
}

export default Comments;