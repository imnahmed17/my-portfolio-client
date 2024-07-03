import { useParams } from 'react-router-dom';
import { useGetBlogByIdQuery } from '../../redux/features/blog/blogApi';
import './BlogDetails.css';

const BlogDetails = () => {
    const blogId = useParams();
    const { data: blog } = useGetBlogByIdQuery(`${blogId.id}`);
    
    return (
        <div className='container'>
            <div className='blog__post__container'>
                <figure>
                    <img src={blog?.imageUrl} alt='' className='blog__post__image' />
                </figure>
                <h2 className='blog__post__title'>{blog?.title}</h2>
                <div dangerouslySetInnerHTML={{__html:blog?.content}}></div>
            </div>
        </div>
    );
};

export default BlogDetails;