import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

const ITEMS = [
    {
        href: '/result/2304',
        title: '4月',
    },
    {
        href: '/result/2305',
        title: '5月',
    },
    {
        href: '/result/2306',
        title: '6月',
    },
    {
        href: '/result/2307',
        title: '7月',
    },
    {
        href: '/result/2308',
        title: '8月',
    },
    {
        href: '/result/2309',
        title: '9月',
    },
    // {
    //     href: '/result/23upper',
    //     title: '23年上期',
    // },
];

const Result = () => {
    return (
        <>
            <Head>
                <title>結果</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl px-5 font-bold">
                    月間結果(単勝・複勝回収率)
                </div>
                <div>
                    {ITEMS.map((item) => {
                        return (
                            <div className="py-5 px-10 text-2xl hover:underline">
                                <li>
                                    <Link href={item.href}>{item.title}</Link>
                                </li>
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Result;
