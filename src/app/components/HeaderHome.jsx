import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHome() {
    return (
        <header className="w-full h-[300px] md:h-[300px] flex items-center flex-col md:pt-[100px]">
            <h1 className='font-extrabold md:text-[20px] cursor-pointer'>
                <strong>
                    <Link href="/">MeTime</Link>
                </strong>
            </h1>
            <Image
                className='md:w-[300px]'
                src="/woman-meditating.png"
                alt="Mulher meditando"
                width={250}
                height={200}
            />
        </header>
    )
}