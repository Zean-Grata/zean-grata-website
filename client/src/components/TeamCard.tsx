import avatar from '/src/assets/avatar.svg'

interface TeamCardProps {
    name: string;
    position: string;
    phone: string;
    email: string;
}


const TeamCard = ({name, position, phone, email}: TeamCardProps) => {
    return(
        <div className='flex flex-col justify-around w-[250px] h-[200px] lg:w-[300px] lg:h-[250px] bg-[#083833DD] p-5 space-y-5'>
            <div className='flex flex-1 justify-center'>
                <img src={avatar} alt="Zean Grata Logo" className='w-[50px] h-[50px]'/>
            </div>
                <div className='flex flex-1 items-end'>
                    <p className='text-sm text-white lg:text-lg'>
                        {name}<br/>
                        {position}<br/>
                        {phone}<br/> 
                        {email}
                    </p>
                </div>   
        </div>
    )
}

export default TeamCard