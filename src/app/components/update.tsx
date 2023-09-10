


export default function UpdateCard(){
return(
<div className="rounded overflow-hidden shadow-lg bg-gray-300">
  { /*eslint-disable-next-line @next/next/no-img-element*/}
  <img className="w-full" src="/img/card-top.jpg" alt="image here"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Title</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Learn More
    </button>
  </div>
</div>
);
}