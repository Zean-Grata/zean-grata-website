import troubleshoot from '/src/assets/troubleshoot.svg';import work from '/src/assets/work.svg'; 
import web from '/src/assets/web.svg';import email from '/src/assets/email.svg';
import backup from '/src/assets/backup.svg';import advice from '/src/assets/advice.svg'

interface ServiceCardProps {
    iconName: string;
    title: string;
    content: string;
}

const ServiceCard = ({iconName, title, content}: ServiceCardProps) => {
    return(
        <div>
            <img src={iconName}/>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default ServiceCard