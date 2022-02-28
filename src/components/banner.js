import FlexJB from "../templates/flex_justifyBetween";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return ( 
        <div className="w-full bg-[#162A41] h-[3.1vw] px-[21%] pl-[21%] text-[0.9375vw] text-white font-normal">
            <FlexJB>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <p className="pr-[17px] pl-[8px]">4000@dinmaegler.com</p>
                    <FontAwesomeIcon icon={faPhone}/>
                    <p className="pl-[8px]">+45 7070 4000</p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <p className="pl-[8px]">Log ind</p>
                </div>
            </FlexJB>
        </div>
     );
}
 
export default Banner;