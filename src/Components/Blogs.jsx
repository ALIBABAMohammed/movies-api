import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setBlogData, selectUserInput } from '../features/userSlice';
import "../styling/blogs.css";

function Blogs() {
    const searchInput = useSelector(selectUserInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=3d97d3900dea0648651462e367093151`;
    // const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=74da443369bd202a1f3146a275d761fc`;
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(blog_url)
        .then((response) => {
            dispatch(setBlogData(response.data));
            setBlogs(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [searchInput]);

  return (
    <div className='blog__page'>
        <h1 className='blog__page__header'>Blogs</h1>
        {loading ? <h1 className='loading'>Loading...</h1> : ""}
        <div className='blogs'>
            {blogs?.articls?.map((blog) => {
                <a className='blog' target='_blank' href={blog.url}>
                    <img src={blog.image} alt='blog'></img>
                    <div>
                        <h3 className='sourceName'>
                            <span>{blog.source.name}</span>
                            <p>{blog.publishedAt}</p>
                        </h3>
                        <h1>{blog.title}</h1>
                        <p>{blog.description}</p>
                    </div>
                </a>
            })}
            {blogs?.totalArticles === 0 && (
                <h1 className='no__blogs'>
                    No blogs available 😞. Search something else to read blogs on the
                    greatest platform.
                </h1>
            )}
        </div>       
    </div>
  );
};

export default Blogs