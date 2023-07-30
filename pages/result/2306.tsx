import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const Result06 = () => {
    return (
        <>
            <Head>
                <title>23/06の結果</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl mx-5">23年6月の結果</div>
                <div className="mx-10 font-bold">単勝回収率</div>
                <h1 className="mx-10">3000-3740</h1>
                <h2 className="mx-10">回収率:125%</h2>
                <div className="mt-10 mx-10 font-bold">複勝回収率</div>
                <h1 className="mx-10">3000-3070</h1>
                <h2 className="mx-10">回収率:102%</h2>
            </main>
            <Footer />
        </>
    );
};

export default Result06;
