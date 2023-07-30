import Head from 'next/head';
import Balancer from 'react-wrap-balancer';

const Amante = () => {
    return (
        <>
            <Head>
                <title>アマンテビアンコ</title>
            </Head>
            <main className="min-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl font-bold mt-5">
                    アマンテビアンコ(2歳)
                </div>
                <div className="mt-10 mx-10 text-2xl">戦績</div>
                <h1 className="mx-10 text-xl">1-0-0-0(1勝クラス)</h1>
                <div className="mt-10 mx-10 text-2xl">直近の情報</div>
                <h1 className="mx-10 text-xl my-5">
                    <Balancer>6/21 ノーザン天栄に放牧済み</Balancer>
                </h1>
            </main>
        </>
    );
};

export default Amante;
