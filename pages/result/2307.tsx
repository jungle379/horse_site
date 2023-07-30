import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const Result07 = () => {
    return (
        <>
            <Head>
                <title>23/07の結果</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl mx-5">23年7月の結果</div>
                <div className="mx-10 font-bold">単勝回収率</div>
                <h1 className="mx-10">4000-3220</h1>
                <h2 className="mx-10">回収率:81%</h2>
                <div className="mt-10 mx-10 font-bold">複勝回収率</div>
                <h1 className="mx-10">4000-3720</h1>
                <h2 className="mx-10">回収率:93%</h2>
            </main>
            <Footer />
        </>
    );
};

export default Result07;
