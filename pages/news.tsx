import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { client } from '@/libs/client';

type NewsProps = {
    contents: Content[];
};

type Content = {
    id: string;
    title: string;
    body: string;
};

export const getStaticProps = async () => {
    const data = await client.getList({
        endpoint: 'blogs',
        queries: { q: '' },
    });
    return {
        props: data,
    };
};

const News = (props: NewsProps) => {
    const contents = props.contents;

    return (
        <>
            <Head>
                <title>予想</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-green-300 pt-[150px] pb-[35px] md:pb-[130px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100">
                <div className="flex justify-center lg:justify-between">
                    <div className="lg:px-40 px-5">
                        <div className="sm:w-[300px]">
                            <ul>
                                {contents.map((content) => {
                                    return (
                                        <li key={content.id}>
                                            <div className="my-5 py-5 px-5 font-bold text-xl lg:text-2xl bg-gray-100">
                                                <Link
                                                    href={`news/${content.id}`}
                                                >
                                                    {content.title}
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default News;
