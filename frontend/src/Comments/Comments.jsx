import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
function Comments() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-4  "
            dir='rtl'
            bordered="true"
        >
            <Tab eventKey="نقد و بررسی" title="نقد و بررسی" tabClassName='text-gray-400 text-lg font-semibold ' >
                <p className=' w-full text-lg p-2 text-right font-medium space-x-2 '>
                    {/* {props.desc} */}
                    این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید.

                    صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند.

                    بنابراین نگران ویرایش و بروزرسانی محتوای این نوع صفحات نباشید. شما می‌توانید به سادگی و تنها با چند کلیک وارد ناحیه مدیریت وب‌سایت خود شده و مطلب مربوطه را ویرایش کنید.

                    این یک متن آزمایشی است که به زودی توسط نویسنده این سایت، تکمیل یا حذف خواهد شد. اگر شما نویسنده‌ی این سایت هستید، برای حذف یا ویرایش این صفحه، کافی است از طریق مرکز مدیریت سایت خود وارد بخش مربوطه شده و محتوای این صفحه را ویرایش یا حذف کنید. صفحات و محتوای آزمایشی همیشه بخشی از محتوای پیش‌نمایش قالب و افزونه های وب هستند که شما بتوانید ارتباط درستی با پیش نمایش قالب گرفته و تصمیم مناسبی بگیرید. این صفحات معمولا برای اطلاعات کلی در مورد سایت مثل «درباره ما»، «تماس با ما»، «فهرست» یا «نظرات شما» مفید هستند.
                </p>
            </Tab>
            <Tab eventKey="جدول مشخصات" tabClassName='text-gray-400 text-lg font-semibold ' title="جدول مشخصات">
                <div>
                    <h2 className="text-lg text-right flex flex-row-reverse font-semibold items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 font-semibold">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        مشخصات کلی
                    </h2>
                    <Table dir='rtl' className='block ' borderless  >
                        <tbody>
                            <tr className=' border-b-2 border-gray-400 rounded-md  '>
                                <td className='  rounded-lg  font-semibold w-1/3'>طول</td>
                                <td className='  rounded-lg  font-semibold'>32 سانتی متر</td>

                            </tr>
                            <tr className=' border-b-2 border-gray-400 rounded-md '>
                                <td className='  rounded-lg  font-semibold w-1/3'>عرض</td>
                                <td className='  rounded-lg  font-semibold'>15 سانتی متر</td>

                            </tr>
                            <tr className=' border-b-2 border-gray-400 rounded-md '>
                                <td className=' rounded-lg  font-semibold w-1/3'>ارتفاع</td>

                                <td className='  rounded-lg  font-semibold'>25 سانتی متر</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div>
                    <h2 className="text-lg text-right flex flex-row-reverse font-semibold items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 font-semibold">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                        صفحه نمایش
                    </h2>
                    <Table dir='rtl' className='block m-2 ' borderless  >
                        <tbody>
                            <tr className=' border-b-2 border-gray-400 rounded-md  '>
                                <td className='  rounded-lg  font-semibold w-1/3'>صفحه نمایش رنگی</td>
                                <td className='  rounded-lg  font-semibold'>بله</td>

                            </tr>
                            <tr className=' border-b-2 border-gray-400 rounded-md '>
                                <td className='  rounded-lg  font-semibold w-1/3'>صفحه نمایش لمسی</td>
                                <td className='  rounded-lg  font-semibold'>بله</td>

                            </tr>
                            <tr className=' border-b-2 border-gray-400 rounded-md '>
                                <td className=' rounded-lg  font-semibold w-1/3'>بازه‌ی اندازه صفحه نمایش</td>

                                <td className='  rounded-lg  font-semibold'>
                                    6.0 اینچ و بزرگتر</td>

                            </tr>
                            <tr className=' border-b-2 border-gray-400 rounded-md '>
                                <td className=' rounded-lg  font-semibold w-1/3'>نسبت صفحه‌نمایش به بدنه</td>

                                <td className='  rounded-lg  font-semibold'>
                                    87.4 درصد</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>

            </Tab >
            <Tab eventKey="دیدگاه کاربران" tabClassName='text-gray-400 text-lg font-semibold ' title="دیدگاه کاربران" >
                Tab content for Contact
            </Tab>
        </Tabs >
    );
}

export default Comments;