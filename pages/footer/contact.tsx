import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

const Contact = () => {
    return (
        <>
            <Head>
                <title>メール連絡</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="text-2xl mx-5">メール</div>
                <div className="text-red-700 mt-10 mb-5 underline text-xl font-bold hover:underline flex justify-center">
                    <a href="mailto:jungle379@gmail.com">
                        メールはこちらをクリック
                    </a>
                </div>
                <div className="text-sm flex justify-center">
                    ※メーラーが自動で起動します！
                </div>
                <div className="text-2xl mx-5 mt-10">持ち馬の最新情報</div>
                <li className="mx-10 my-5 underline text-xl">
                    <Link href="/horse/amante">アマンテビアンコ</Link>
                </li>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
