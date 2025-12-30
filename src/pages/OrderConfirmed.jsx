import { useNavigate } from 'react-router-dom'
const OrderConfirmed = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col">
        <p>Order Confirmed!</p>
       <button type="button" className="mt-4 bg-black
       hover:cursor-pointer text-white font-semibold py-2 px-4 
       rounded" onClick={()=> navigate('/')}>Back to home</button>
    </div>
  )
}

export default OrderConfirmed