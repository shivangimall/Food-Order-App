import { CDN_URL } from "../utils/constant";
import { useContext } from "react";


const ResturantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    return (
         <div className="w-[250] m-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className = "rounded-lg" alt ="res-logo" src = {CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} star</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
         </div>
    );
  };

  export default ResturantCard;
  
 