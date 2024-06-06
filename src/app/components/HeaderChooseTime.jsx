import Image from "next/image"


export default function HeaderChooseTime(){
    return (
        <header className="w-full h-[600px] md:h-[300px] flex items-center flex-col">
            <div className="w-full ">
                <h1 className='font-extrabold'><strong>MeTime</strong></h1>
                <span>Por favor, escolha um dia e horário:</span>
            </div>
            <div className="w-full flex justify-between items-center">
                <Image src="/woman-meditating.png" width={125} height={125}/>
                <Image src="/woman-meditating.png" width={125} height={125}/>
            </div>
        </header>
    )
}