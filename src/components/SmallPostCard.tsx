import { IPost } from '../interfaces';
import './SmallPostCard.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function SmallPostCard({ post }: {post: IPost}) {
    return (
        <div className="small-post-card">
            <div className="small-post-card-container">
                <div className="small-post-card-container-text">
                    <h3 className="small-post-card__date">{post.date}</h3>
                    <h2 className="small-post-card__title">{post.title}</h2>
                </div>
                <img className="small-post-card__image" src={post.image} alt="Post" />
            </div>
            <div className="small-post-card-details">
                <div className="small-post-card-details-reaction">
                    <div className="small-post-card-details__like-container">
                        <AiOutlineLike className="small-post-card-details__like"/>
                        <h3 className="small-post-card-details__like-amount">20</h3>
                    </div>
                    <AiOutlineDislike className="small-post-card-details__dislike"/>
                </div>
                <div className="small-post-card-details-extra">
                    <FaRegBookmark className="small-post-card-details__bookmark"/>
                    <BsThreeDots className="small-post-card-details__dots"/>
                </div>
            </div>
            <div className="small-post-card-separator"></div>
        </div>
    );
}

export default SmallPostCard;