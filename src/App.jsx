import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Input, Space } from 'antd'
import PlansPricing from "./pages/PlansPricing";
const { Search } = Input;
import { Dropdown} from 'antd';
import Eductaion from "./pages/ZoomTypes/Eductaion";
function App() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <header class="text-gray-600 body-font border">
        <div class="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
          <Link to='/'>
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-[120px]" src="https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png" alt="" />
            </a>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Link ><a class="mr-9 text-[18px] font-[500] text-[#666484] hover:text-[#0b5cff]">Products</a></Link>
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <Link><a class="mr-9 text-[18px] font-[500] text-[#666484] hover:text-[#0b5cff]">Solutions</a></Link>
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                <Link><a class="mr-9 text-[18px] font-[500] text-[#666484] hover:text-[#0b5cff]">Resources</a></Link>
                </Space>
              </a>
            </Dropdown>
            <Link to='/pricing'><a class="mr-9 text-[18px] font-[500] text-[#666484] hover:text-[#0b5cff]">Plans & Pricing</a></Link>
          </nav>
          <Search placeholder="Enter search here..." className="w-[300px] mr-[20px]" onSearch={onSearch} enterButton />
          <div className="navButtons flex gap-[10px]">
            <button className="bg-white py-[8px] px-[20px] border border-1 border-[#007aff] rounded-[25px] text-[#007aff] text-[18px] font-[700]">Sign In</button>
            <button className="bg-[#007aff] py-[8px] px-[20px] rounded-[25px] text-white text-[18px] font-[700]">Sign Up Free </button>
          </div>
        </div>
      </header>
      {/* <Eductaion /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pricing' element={<PlansPricing />} />
      </Routes>
    </>
  )
}

export default App
