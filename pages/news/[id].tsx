import { client } from '@/libs/client';
import Head from 'next/head';
import GoodButton from '@/components/GoodButton';

type NewsProps = {
    title: string;
    content: string;
};

const NewsId = (props: NewsProps) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="bg-pink-100 min-h-screen h-auto">
                <div className="flex">
                    <div className="mb-5 font-bold text-xl">{props.title}</div>
                    <div className="mx-10">
                        <GoodButton />
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const data = await client.getList({ endpoint: 'blogs' });
    const ids = data.contents.map((content) => `/news/${content.id}`);
    return {
        paths: ids,
        fallback: false,
    };
};

export const getStaticProps = async (ctx: any) => {
    const data = await client.getListDetail({
        endpoint: 'blogs',
        contentId: ctx.params.id,
    });
    return {
        props: data,
    };
};

export default NewsId;
