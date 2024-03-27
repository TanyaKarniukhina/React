import { IPost } from "../interfaces";
import './BigPostCard.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function BigPostCard({ post }: {post: IPost}) {
    return (
        <div className="big-post-card">
            <div className="big-post-card-container">
                <div className="big-post-card-container-text">
                    <h3 className="big-post-card__date">{post.date}</h3>
                    <h2 className="big-post-card__title">{post.title}</h2>
                    <h6 className="big-post-card__text">{post.text}</h6>
                </div>
                <img className="big-post-card__image" src={post.image} alt="Post" />
            </div>
            <div className="big-post-card-details">
                <div className="big-post-card-details-reaction">
                    <div className="big-post-card-details__like-container">
                        <AiOutlineLike className="big-post-card-details__like"/>
                        <h3 className="big-post-card-details__like-amount">20</h3>
                    </div>
                    <AiOutlineDislike className="big-post-card-details__dislike"/>
                </div>
                <div className="big-post-card-details-extra">
                    <FaRegBookmark className="big-post-card-details__bookmark"/>
                    <BsThreeDots className="big-post-card-details__dots"/>
                </div>
            </div>
            <div className="big-post-card-separator"></div>
        </div>
    );
};

export default BigPostCard;