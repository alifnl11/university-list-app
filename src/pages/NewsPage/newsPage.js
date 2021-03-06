import React, { useState, useEffect} from 'react';
import 'boxicons';
import './styles.scss';
import data from '../../users.json'       

// component
import Pagination from '../../component/Pagination/pagination'

import Search from '../../component/Search/search';
import News from '../../component/NewsList/news';


const NewsPage = () => {
    const dataNews = data.News;  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [searchTerm, setSearchTerm] = useState('') 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = dataNews.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div>
            <main className="l-main">
                {/* Search Header */}
                <section className="home" id="home">
                    <Search setSearchTerm={setSearchTerm} title={'Newsletter'}></Search>
                </section>
                
                {/* UNIVERSITY LIST */}
                <section className="collection section">
                    <News dataNews={currentPosts} searchTerm={searchTerm} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={dataNews.length} paginate={paginate} />
                </section>

            </main>
        </div>
    );
};

export default NewsPage;