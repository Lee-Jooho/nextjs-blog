import Layout from '../components/MyInfoLayout'
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
// 걍 얘가 path 니까 더 빨리 타는듯? 
  const paths = getAllPostIds();
    // paths = [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
        <Layout home>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        </Layout>
    );
}