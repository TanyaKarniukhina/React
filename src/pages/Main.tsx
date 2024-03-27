import './Main.css';
import Title from '../components/Title'; 
import Tabs from '../components/Tabs';
import PostList from '../components/PostList'; 
import PostData from '../components/PostData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import { useTheme } from '../components/Theme';

function Main() {
    const { theme } = useTheme();
    return ( 
    <div className='main-container'>  
        <div className="main">
            <Header />
            <div className={`content ${theme === 'light' ? 'light' : 'dark'}`}>
                <Title text="Blog" />
                <Tabs isDisabled={false} />
                <PostList posts={PostData} />
                <Pagination />
                <Footer />
            </div>
        </div>
    </div>   
    );
}

export default Main;