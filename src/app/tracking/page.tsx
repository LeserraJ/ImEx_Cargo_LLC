import NavBar from "../header/components/Nav";
import Footer from "../footer/footer";



import { document } from "postcss";
export default function Tracking() {

 return (
  <><NavBar />
  <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Check and Find the Location of Your Package</h2>
          <div className="w-1/2 border-2 border-red-500">
              <label 
              id="packageId"
              htmlFor="package"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tracking Number:
              </label>
              <input
              
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Your Tracking Number"
              required
              />
              </div>

              <div className="mt-5">
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                className="w-full"
                src="https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=US&markers=color:0x88b06a|42.5182262,-70.9971697&zoom=16&client=google-presto&signature=dDX_7cNNlD14Yt6aR8HFzNhcW5w"
                alt="map"
                />

                
              </div>
      </div>
  </div>
  <Footer />
</section>
  
  </>
  
  );
}
