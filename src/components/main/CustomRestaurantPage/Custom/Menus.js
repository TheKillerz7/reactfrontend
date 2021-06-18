const Menus = ({ steps, setIndex }) => {
    return(
        <div className="lg:tw-px-36 md:tw-w-full tw-pb-16 tw-px-5 tw-transition tw-duration-300 tw-flex tw-flex-col tw-items-center tw-justify-center" style={{ transform: (`translateX(-${100*steps}%)`) }}>
           <div className="tw-text-gray-500 tw-text-xl tw-mb-6">เลือกเมนูที่ชอบ</div>
           <p className="tw-text-center tw-text-gray-500 tw-mb-20">Lorem eafeaf feafea feafae faefeaf eafea</p>
           <div className="hover:tw-border-pGreen hover:tw-bg-lightGreen tw-cursor-pointer tw-transition tw-duration-300 tw-border-2 tw-border-dashed tw-border-gray-400 tw-rounded-2xl tw-py-2 tw-px-20">
               <div className="flex items-center justify-center">
                   <div className="tw-p-1 tw-mr-3 tw-rounded-full tw-w-6 tw-h-6 tw-pl-1 tw-pb-1.5 tw-text-white tw-text-xl tw-flex tw-justify-center tw-items-center tw-bg-gray-400 tw-font-semibold">+</div>
                   <div className="tw-text-gray-500">เลือกเมนู</div>
               </div>
           </div>
        </div>
    )
}

export default Menus