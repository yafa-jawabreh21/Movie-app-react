import Card from "./Card";
import { NavLink } from "react-router-dom";
function Cards({title ,toprated=[] , trending=[] , series=[] ,movies=[]  , type}) {
  return (
    <div className="mt-12">
      <div className="flex justify-between text-white relative">
        <h3 className="font-bold mb-6 text-xl after:content-[''] after:absolute after:w-[16%] after:h-[2.75px] after:bg-red-500 after:bottom-[15px] after:left-0 after:rounded-[20px]">{title}</h3>
        <NavLink className="bg-inherit rounded-2xl text-center text-white pl-2 pr-2 text-sm pt-0 h-fit  border-white border-[0.2px]" to={`${type}`}>View All</NavLink>
      </div>
      <div className="secondPart">
        <Card  toprated={toprated} series={series} movies= {movies} trending={trending}/>
      </div>
    </div>
  );
}

export default Cards;
