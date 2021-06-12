const Menus = ({ steps, setIndex }) => {
    return(
        <div className="lg:px-36 md:w-full pb-16 px-5 transition duration-300 flex flex-col items-center justify-center" style={{ transform: (`translateX(-${100*steps}%)`) }}>
           <div className="text-gray-500 text-xl mb-6">เลือกเมนูที่ชอบ</div>
           <p className="text-center text-gray-500 mb-20">Lorem eafeaf feafea feafae faefeaf eafea</p>
           <div className="hover:border-pGreen hover:bg-lightGreen cursor-pointer transition duration-300 border-2 border-dashed border-gray-400 rounded-2xl py-2 px-20">
               <div className="flex items-center justify-center">
                   <div className="p-1 mr-3 rounded-full w-6 h-6 pl-1 pb-1.5 text-white text-xl flex justify-center items-center bg-gray-400 font-semibold">+</div>
                   <div className="text-gray-500">เลือกเมนู</div>
               </div>
           </div>
        </div>
    )
}

export default Menus