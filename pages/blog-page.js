import Layout from '../components/Layout/Lauout';
import Post from '../components//Layout/Post';
// Get data
import { getAllPostsData } from '../lib/posts';

function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
