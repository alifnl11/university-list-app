import React, { useState, useEffect} from 'react';
import axios from 'axios';
import 'boxicons';
import './styles.scss';
import Footer from './../../component/Footer/index'

// page
import Subscribe from './content/Subscribe/subscribe';

import Posts from './../../component/UniversityList/index'
import Pagination from './../../component/Pagination/pagination'

import Search from '../../component/Search/search';


const HomePage = () => {
    const [posts, setPosts ] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [searchTerm, setSearchTerm] = useState('') 

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
                <Search setSearchTerm={setSearchTerm} title={'Univ Search : React Aplication'}/>
                </section>
                
                {/* UNIVERSITY LIST */}
                <section className="collection section">
                    <Posts posts={currentPosts} loading={loading} searchTerm={searchTerm} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                    {/* <UniversityList /> */}
                </section>

                <section class="newsletter section" id="subscribed">
                       <Subscribe />
                </section>
            </main>
        </div>
    );
};

export default HomePage;