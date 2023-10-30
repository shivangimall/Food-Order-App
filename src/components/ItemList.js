import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) =>{

    return (
        <div>
            {
                items.map((item) => 
                <div className = "m-2 p-2 border-gray-200 border-b-2 flex justify-between text-left" key ={item.card.info.id}>
                    <div className="w-8/12">
                        <div className="py-2">
                        <span >{item.card.info.name}</span>
                        <span> - ₹ {" "}{item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice /100}</span>
                        </div>
                        <p className="text-sm">{item.card.info.description }</p>
                    </div>
                    <div className="w-4/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-14 bg-black text-white rounded-lg shadow-lg">Add+</button>
                        </div>
                        <img src = {CDN_URL+item.card.info.imageId} className="w-ful"/>
                    </div>
                </div>)
            }
        </div>
    );
}

export default ItemList;