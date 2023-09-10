import HeaderMain from "./header/Header";
import { Inter } from "next/font/google";
import Image from "next/image";
import UpdateCard from "./components/update";
import Footer from "./footer/footer";
export default function Home() {
  return (
    <>
      <div>
        <HeaderMain />

        <div className="text-center pt-8 mt-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 xs:text-3x1 sm:text-4x1 md:text-5xl lg:text-5xl dark:text-black">
            Woman Owned Cargo Company - ImEx Cargo
          </h1>
          <h2 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black">
            Cargo Transportation & Logistics Service -Boston, MA
          </h2>
          <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get Quote
          </button>
        </div>
        <Image
          className="mx-auto pt-8 mt-8 "
          src={"/truck.jpg"}
          alt="truck"
          width={600}
          height={100}
        ></Image>
        <h3 className="text-center overline mt-11 pt-11 decoration-blue-700 decoration-2 uppercase font-bold mb-11">
          Recent Updates
        </h3>
        <div className="  justify-center gap-10 text-center  grid grid-rows-3 grid-cols-3 grid-flow-col">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
        <div className="flex items-center justify-center">
          <button className=" mt-10 px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg">
            View All Updates
          </button>
        </div>



        <div className="text-center flex justify-center">
        <div className=" text-center w-1/2 bg-gray-200 py-11 my-48">
          <h3 className="overline decoration-black decoration-2 uppercase font-bold">Shipping-International & Domestic</h3>
          <p className="mt-9">We ship your shipments with honesty, integrity and transparency! </p>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
