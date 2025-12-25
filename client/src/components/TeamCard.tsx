interface TeamCardProps {
    name: string;
    position: string;
    phone: string;
    email: string;
}


const TeamCard = ({name, position, phone, email}: TeamCardProps) => {
    return(
        <div className='flex flex-col justify-around w-[250px] h-[200px] lg:w-[280px] lg:h-[250px] bg-[#08383399] p-2 space-y-5'>
            <div className='flex flex-1 justify-center'>
                <img src="/favicon.svg" alt="Zean Grata Logo" className='w-[50px] h-[50px]'/>
            </div>
                <div className='flex flex-1 items-end'>
                    <p className='text-sm lg:text-lg'>
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