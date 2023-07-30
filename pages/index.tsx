import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BackgroundImageSlider } from '@/components/Slider';
import { staticPath } from '@/lib/$path';

const images = [staticPath.$1_jpeg, staticPath.$2_jpeg];

const Home = () => {
    return (
        <>
            <Head>
                <title>ホーム</title>
            </Head>
            <Header />
            <main className="md:min-h-screen bg-green-300 pt-[100px] pb-[100px] md:pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="py-10">
                    <BackgroundImageSlider images={images} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
