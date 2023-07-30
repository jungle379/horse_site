import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const Result05 = () => {
    return (
        <>
            <Head>
                <title>23/05の結果</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl mx-5">23年5月の結果</div>
                <div className="mx-10 font-bold">単勝回収率</div>
                <h1 className="mx-10">4000 → 1670</h1>
                <h2 className="mx-10">回収率:42%</h2>
                <div className="mt-10 mx-10 font-bold">複勝回収率</div>
                <h1 className="mx-10">4000 → 2010</h1>
                <h2 className="mx-10">回収率:50%</h2>
            </main>
            <Footer />
        </>
    );
};

export default Result05;
