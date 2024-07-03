import { useGetAllBlogQuery } from '../../redux/features/blog/blogApi';
import './Blog.css';
import BlogItem from './BlogItem';
import Loader from './Loader';

const Blog = () => {
    const { data: blogs, isLoading } = useGetAllBlogQuery();

    return (
        <section className='blog section' id='blogs'>
            <h2 className='section__title'>Blogs</h2>
            <span className='section__subtitle'>Most recent blogs</span>
            <div className='blog__container container'>
                {
                    isLoading ? <Loader /> :
                    blogs.map(item => <BlogItem 
                        item={item} 
                        key={item._id} 
                    />)
                }
            </div>
        </section>
    );
};

export default Blog;