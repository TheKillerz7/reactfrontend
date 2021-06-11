const Home = ({ index, setIndex }) => {
    return(
        <div className="px-5 transition duration-200 pb-10">
            <div className="pt-10 pb-5 mb-5">
                <div className="rounded-full h-72 bg-gray-400"></div>
            </div>
            <p className="text-xs text-gray-400 mb-7">Lorem iqrun isd rqu rudct</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 items-center justify-start mb-10">
                <div className="shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                    <div className="">
                        <p className="text-xs text-gray-500">เลือก</p>
                        <p className="text-sm font-medium text-gray-500">ตกแต่งตัวละคร</p>
                    </div>
                    <div className="w-7 h-7 bg-gray-400"></div>
                </div>
                <div className="shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                    <div className="">
                        <p className="text-xs text-gray-500">เลือก</p>
                        <p className="text-sm font-medium text-gray-500">ตกแต่งตัวละคร</p>
                    </div>
                    <div className="w-7 h-7 bg-gray-400"></div>
                </div>
                <div className="shadow-md rounded-lg px-5 py-8 flex items-center justify-between">
                    <div className="">
                        <p className="text-xs text-gray-500">เลือก</p>
                        <p className="text-sm font-medium text-gray-500">ตกแต่งตัวละคร</p>
                    </div>
                    <div className="w-7 h-7 bg-gray-400"></div>
                </div>
            </div>
            <button onClick={() => setIndex("custom")} className="py-3 bg-yellow-600 text-white text-xs font-medium rounded-full px-7">Get Started &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--{'>'}</button>
        </div>
    )
}

export default Home