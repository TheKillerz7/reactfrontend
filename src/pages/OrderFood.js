import Status from '../components/main/CheckOrderPage/Status'
import Profile from '../components/main/CheckOrderPage/Profile'
import Shipping from '../components/main/CheckOrderPage/Shipping'
import Products from '../components/main/CheckOrderPage/Products'
import Bills from '../components/main/CheckOrderPage/Bills'

const OrderFood = () => {

  //order status and order code
  const order = {
    code: "21526498",
    status: "new"
  }

  //billing object
  const bill = {
    status: 'paid',
    pricing: [
      {
        text: 'รวมค่าอาหาร',
        price: 1000
      },
      {
        text: 'ค่าจัดส่ง',
        price: 100
      },
      {
        text: 'ส่วนลด',
        price: -1000
      },
    ]
  }

  //ordered products object
  const products = [
    {
      name: "",
      description: "This is the test product, it's good.",
      price: 20,
      amount: 2
    },
    {
      name: "",
      description: "This is the test product, it's good.",
      price: 20,
      amount: 2
    },
    {
      name: "",
      description: "This is the test product, it's good.",
      price: 20,
      amount: 2
    },
  ]
  
  //shipping object
  const shipping = {
    name: "พันณิต่า สุดสะวัน",
    address: "11/11 หมู่ 6 ตำบลบ้านเมือง อำเภอเมือง"
  }


  //profile object
  const profile = {
    name: "Parsanan Buranapattama",
    member: "silver",
    point: "1 K",
    orders: "30",
    budget: "300 K"
  }

    return(
        <div className="lg:tw-grid lg:tw-items-center lg:tw-gap-10 lg:tw-justify-between lg:tw-px-14 lg:tw-pt-10 tw-bg-gray-50 tw-mx-auto" style={{ gridTemplateColumns: "max-content 1fr", maxWidth: "1500px" }}>
            <Profile profile={profile} />
            <div className="tw-w-full">
                <Status order={order} />
                <Products products={products} />
                <Bills bill={bill} />
                <Shipping shipping={shipping} />
            </div>
        </div>
    )
}

export default OrderFood