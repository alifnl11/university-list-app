import React, { useState, useEffect} from 'react';
import axios from 'axios';
import 'boxicons';
import './styles.scss';

import Posts from './../../component/UniversityList/index'
import Pagination from './../../component/Pagination/pagination'


import UniversityList from './../../component/UniversityList/index'


const HomePage = () => {
    const [posts, setPosts ] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://universities.hipolabs.com/search?country=indonesia');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <main className="l-main">
                {/* HOME */}
                <section className="home" id="home">

                </section>
        
                {/* UNIVERSITY LIST */}
                <section className="collection section">
                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                    {/* <UniversityList /> */}
                </section>
            </main>
        </div>
    );
};

export default HomePage;