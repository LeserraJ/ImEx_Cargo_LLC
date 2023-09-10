import NavBar from "../header/components/Nav";
import Footer from "../footer/footer";
export default function Services() {
  return (
    <>
      <NavBar />
      <div id="services_"className="dark:bg-gray-900 h-full">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Logistics Services
              </h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Neque volutpat ac tincidunt vitae semper quis.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Features
                </h3>
                <div className="">
                <p className="text-gray-500 dark:text-gray-400 grid grid-row-1">
                  <span>– Oversized Cargo/ Cargo Freighter Operations</span>
                  <span>– Aerospace /AOG cargo solutions </span>
                  <span>– Seafood & Pharmaceutical Shipping/Envirotainers</span> 
                  <span>– Next Flight Out/ Counter to Counter</span>
                  
                </p>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                General Sales Agent
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  We Build
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  WBE
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                EDWOSB
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"></div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                Certified
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
      
    </>
  );
}
