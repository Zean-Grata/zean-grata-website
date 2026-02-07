import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';


interface ButtonProps {
    icon?: string;
    title: string;
    width: string;
    height: string;
}

function getIcon(type: string | null) {
    switch(type) {
        case "arrowRight":
            return faArrowRight;
        case "dollarSign":
            return faDollarSign;
        default:
            throw new Error(`Unknown icon type: ${type}`);
    }
}

const PrimaryButton = ({icon, title, width, height}: ButtonProps) => {
    return(
        <button className={`flex justify-center items-center space-x-1 ${width} ${height} p-6  bg-[#EC4899] 
        text-[#FFFFFF] text-md font-body rounded-3xl transition delay-50 duration-300 ease-in-out 
        hover:scale-105 hover:bg-[#fb1186]`}>
            <span>{title}</span>
            {icon && <FontAwesomeIcon icon={getIcon(icon)} />}
        </button>
    )
}

const SecondaryButton = ({icon, title, width, height }: ButtonProps) => {
    return(
        <button className={`flex justify-center items-center space-x-1 ${width} ${height} p-6 
        border border-[#C6C5ED] text-white text-md font-body rounded-3xl transition delay-50 duration-300 ease-in-out 
        hover:scale-105 hover:bg-white hover:text-[#EC4899]`}>
            <span>{title}</span>
            {icon && <FontAwesomeIcon icon={getIcon(icon)} />}
        </button>
    )
}

export {
    PrimaryButton, 
    SecondaryButton
}