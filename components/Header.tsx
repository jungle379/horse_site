import Link from 'next/link';
import { IconContext } from 'react-icons';
import { GiHorseHead } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="flex justify-between h-[120px] w-[100%] lg:h-[150px] px-5 lg:px-20 py-5 lg:py-10 bg-blue-200 fixed top-0 left-0 right-0 z-50">
                <IconContext.Provider value={{ size: '100px' }}>
                    <div>
                        <Link href="/">
                            <GiHorseHead />
                        </Link>
                    </div>
                </IconContext.Provider>
                {!isMobile && (
                    <div className="flex justify-evenly my-10 font-bold text-xl">
                        <div>
                            <Link href="/news">予想</Link>
                        </div>
                        <div className="mx-10">
                            <Link href="../footer/result">結果</Link>
                        </div>
                        <div>
                            <Link href="../footer/contact">連絡する</Link>
                        </div>
                    </div>
                )}
                {isMobile &&
                    typeof window !== 'undefined' &&
                    window.location.pathname == '/' && (
                        <div className="flex justify-evenly underline pr-5 py-10 font-bold text-sm">
                            <Link href="../header/atFirst">はじめに</Link>
                        </div>
                    )}
            </div>
        </>
    );
};

export default Header;
