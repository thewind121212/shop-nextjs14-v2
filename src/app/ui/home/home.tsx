import {TopCarousel, MiddleCarousel, PolicyCarousel} from "./carousel";
import CategoriesPeak from "./categoriesPeak";
import HightlightCollection from "./hightlightColletion";
import Collections from "./collections/index";
import FeedBack from "./feedback";
import News from "./news";
import HotProduct from "../products-mixer/hotProducts";
import FixUI from "../fix-ui";

export default function Home({hotProducts}: any) {


    return (

        <div className="w-[100vw] h-auto">
            <FixUI />
            <div className="w-full h-auto">
                <TopCarousel />
            </div>
            <div className="w-[100vw] h-auto flex justify-center items-center">
                <CategoriesPeak />
            </div>
                <HotProduct hotProducts={hotProducts} />
                <MiddleCarousel />
                <HightlightCollection />
                <Collections />
                <PolicyCarousel />
                <FeedBack/>
                <News/>
        </div>
    )
}