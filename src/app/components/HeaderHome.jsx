import Image from 'next/image';

export default function HeaderHome() {
    return (
        <header className="w-full h-[300px] md:h-[300px] flex items-center flex-col">
            <h1 className='font-extrabold'><strong>MeTime</strong></h1>
            <Image
                className=''
                src="/woman-meditating.png"
                alt="Mulher meditando"
                width={250}
                height={200}
            />
        </header>
    )
}