import { Link } from 'react-router-dom';

const BlogItem = ({ item }) => {
    return (
        <Link to={`/blogs/${item._id}`} className='blog__card'>
            <figure className='blog__figure'>
                <img src={item.imageUrl} alt='' loading='lazy' className='blog__img' />
            </figure>
            <div className='blog__content'>
                <h3 className='blog__title'>{item.title}</h3>
                <p className='blog__description'>{item.description}</p>
                <p className='blog__time'>{item.uploadedTime}</p>
            </div>
        </Link>
    );
};

export default BlogItem;