import React from 'react';
import { IPost } from '../interfaces';
import { useTheme } from './Theme';
import './PostList.css';
import BigPostCard from './BigPostCard';
import MediumPostCard from './MediumPostCard';
import SmallPostCard from './SmallPostCard';

const PostList = ({ posts }: { posts: IPost[] }) => {
    const { theme } = useTheme();

    return (
        <div className={`post-list ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="first-container">
                <div className="big-post-container">    
                    <BigPostCard post={posts[0]} />
                </div>
                <div className="small-post-first-container">
                    <SmallPostCard post={posts[1]} />
                    <SmallPostCard post={posts[2]} />
                </div>
            </div>
            <div className="second-container">
                <div className="medium-post-container">
                    <MediumPostCard post={posts[3]} />
                    <MediumPostCard post={posts[4]} />
                </div>
                <div className="small-post-second-container">
                    <SmallPostCard post={posts[5]} />
                    <SmallPostCard post={posts[6]} />
                </div>
            </div>
            <div className="third-container">
                <div className="medium-post-container">
                    <MediumPostCard post={posts[7]} />
                    <MediumPostCard post={posts[8]} />
                </div>
                <div className="small-post-third-container">
                    <SmallPostCard post={posts[9]} />
                    <SmallPostCard post={posts[10]} />
                </div>
            </div>
        </div>
    );
};

export default PostList;
