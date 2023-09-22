import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
function Comments() {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            dir='rtl'
        >
            <Tab eventKey="نقد و بررسی" title="نقد و بررسی">
                <p className='text-sm font-medium'>
                    {/* {props.desc} */}
                </p>
            </Tab>
            <Tab eventKey="جدول مشخصات" title="جدول مشخصات">
                <div>
                    <h2 className="text-lg text right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        مشخصات کلی
                    </h2>
                    <Table dir='rtl'  >
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>

                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div>
                    <h2 className="text-lg text right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        مشخصات کلی
                    </h2>
                    <Table dir='rtl'  >
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>Thornton</td>

                            </tr>

                        </tbody>
                    </Table>

                </div>

            </Tab>
            <Tab eventKey="دیدگاه کاربران" title="دیدگاه کاربران" >
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default Comments;