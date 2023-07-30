import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const AtFirst = () => {
    return (
        <>
            <Head>
                <title>はじめに</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl px-[10px]">
                    はじめに(購入時の考え方)
                </div>
                <div className="font-bold px-5 py-5">
                    <li>馬券は基本、単複勝負</li>
                    <li>上位人気から勝ち馬を見抜いて勝負する</li>
                    <li>穴馬が好走するローカル競馬場は避ける</li>
                    <li>損益を考えて、深みにハマる自滅は防ぐ</li>
                    <li>近走の結果より、血統・バイアスを重視</li>
                    <li>重賞より、条件戦で稼ぐ</li>
                    <li>騎手・競馬場の特徴も認識の上、予想する</li>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AtFirst;
