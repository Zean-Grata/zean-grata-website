import troubleshoot from '/src/assets/troubleshoot.svg';import work from '/src/assets/work.svg'; 
import web from '/src/assets/web.svg';import email from '/src/assets/email.svg';
import backup from '/src/assets/backup.svg';import advice from '/src/assets/advice.svg'

interface ServiceCardProps {
    icon: string;
    title: string;
    content: string;
}

function getIcon(type: string) {
    switch(type) {
        case "troubleshoot":
            return troubleshoot;
        case "work":
            return work;
        case "web":
            return web;
        case "email":
            return email;
        case "backup":
            return backup;
        case "advice":
            return advice;
        default:
            throw new Error(`Unknown icon type: ${type}`);
    }
}

const ServiceCard = ({icon, title, content}: ServiceCardProps) => {
    return(
        <div className="flex flex-col space-y-2 w-fit">
            <div className="flex items-center space-x-2">
                <img src={getIcon(icon)} className="w-[30px] h-[30px]"/>
                <h2 className="text-[#2E2E2E] font-medium text-sm lg:text-lg">{title}</h2>
            </div>
            <p className='text-[#5E5E5E] max-w-[30ch]'>{content}</p>
        </div>
    )
}

export default ServiceCard