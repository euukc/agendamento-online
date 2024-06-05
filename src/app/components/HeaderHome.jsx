import Image from "next/image"


export default function HeaderHome(){
    return (
        <header className="w-full h-[200px] md:h-[300px] flex justify-center items-center flex-col pt-[100px] gap-2 md:pt-[70px]">
            <Image src="/logo-icon.png" width={300} height={100} className="rounded-[300px] border-2 w-[153px] md:w-[300px]"/>
            <h1 className="text-[32px] text-white"> Esmalteria Eduarda Dias</h1>
            <h2 className="text-[20px] text-[#867BEE]"> Escolha um horário para se mimar!</h2>

        </header>
    )
}