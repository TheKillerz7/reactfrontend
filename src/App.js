import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar'
import Footer from './components/partials/Footer'
import Status from './components/main/Status'
import Profile from './components/main/Profile'
import Shipping from './components/main/Shipping'
import Products from './components/main/Products'
import Bills from './components/main/Bills'

function App() {
  const navInfo = {
    picture: "P",
    name: "patsanan"
  }

  const order = {
    code: "21526498",
    status: "new"
  }

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
  
  const shipping = {
    name: "พันณิต่า สุดสะวัน",
    address: "11/11 หมู่ 6 ตำบลบ้านเมือง อำเภอเมือง"
  }

  const profile = {
    name: "Parsanan Buranapattama",
    member: "silver",
    point: "1 K",
    orders: "30",
    budget: "300 K"
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar info={navInfo} />
      <div className="bg-gray-50">
        <div className="lg:grid lg:items-center lg:gap-10 lg:justify-between lg:px-14 lg:pt-10 bg-gray-50 mx-auto" style={{ gridTemplateColumns: "max-content 1fr", maxWidth: "1500px" }}>
          <Profile profile={profile} />
          <div className="w-full">
            <Status order={order} />
            <Products products={products} />
            <Bills bill={bill} />
            <Shipping shipping={shipping} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
