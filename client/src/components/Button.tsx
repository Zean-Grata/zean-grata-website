import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faDollarSign } from '@fortawesome/free-solid-svg-icons';


interface ButtonProps {
    icon?: string;
    title: string;
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

const Button = ({icon, title}: ButtonProps) => {
    return(
        <button className='flex justify-center items-center space-x-1 w-60 h-15 p-6 bg-[#EC4899] 
        text-[#FFFFFF] text-md font-body rounded-2xl transition delay-50 duration-300 ease-in-out 
        hover:scale-105 hover:bg-[#F472B6]'>
            <span>{title}</span>
            {icon && <FontAwesomeIcon icon={getIcon(icon)} />}
        </button>
    )
}

export default Button