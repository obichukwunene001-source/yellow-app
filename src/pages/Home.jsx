import Pricing from "../pages/Pricing";
import What from "../pages/What";
import Globalbrands from "../pages/Globalbrands";
import Footer from "../pages/Footer";
import yellow from '../assets/yellow.jpg'
import tshirt from '../assets/tshirt.jpg'
const Home = () => {

  return (
    <>
    <section className="bg-[#C8C8C0] -mt-13 -ml-4">
      <div className="max-w-7xl mx-auto px-5 lg:px-18 pt-20 py-2 lg:py-30 lg:pt-14  ">
        <div className="lg:grid lg:grid-cols-2 lg:items-center gap-12">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Presence that commands attention</h1>
            <p className="lg:mt-25 mt-6 text-gray-900 max-w-xl">Elevate your event or campaign with authentic star power. From intimate gatherings to global stages, bring something unforgettable to your vision.</p>

            <div className="lg:mt-10 mt-4 flex items-center">
              <button className="bg-blue-950/95 text-white font-bold px-6 py-3 rounded-full hover:cursor-pointer">Book now</button>
              <button className="ml-3 bg-white/8 text-black border border-black/20 font-bold px-5 py-2  rounded-full hover:cursor-pointer">Membership</button>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 relative flex justify-center">
            <img src={yellow} alt="Hero Image" className=" w-[250px] h-[340px] lg:w-[380px] lg:h-[520px] object-cover rounded-2xl shadow-sm border-1 border-gray-500 "/>
            <img src={tshirt} alt="Accent Image" className="absolute right-5  -top-6 lg:-right-6  md:right-55 w-20 h-20 lg:w-36 lg:h-36 object-cover rounded-2xl shadow-sm border-1 border-blue-950"/>
          </div>
        </div>
      </div>
    </section>
    <Pricing />
    <What />
    <Globalbrands />
    <Footer />
    </>
  )
}

export default Home;