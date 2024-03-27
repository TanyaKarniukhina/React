import { IPost } from '../interfaces';
import './MediumPostCard.css';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function MediumPostCard({ post }: { post: IPost }) {
    return (
        <div className="medium-post-card">
            <img className="medium-post-card__image" src={post.image} alt="Post" />
            <div className="medium-post-card-container">
                <div className="medium-post-card-container-text">
                    <h3 className="medium-post-card__date">{post.date}</h3>
                    <h2 className="medium-post-card__title">{post.title}</h2>
                </div>
            </div>
            <div className="medium-post-card-details">
                <div className="medium-post-card-details-reaction">
                    <div className="medium-post-card-details__like-container">
                        <AiOutlineLike className="medium-post-card-details__like"/>
                        <h3 className="medium-post-card-details__like-amount">20</h3>
                    </div>
                    <AiOutlineDislike className="medium-post-card-details__dislike"/>
                </div>
                <div className="medium-post-card-details-extra">
                    <FaRegBookmark className="medium-post-card-details__bookmark"/>
                    <BsThreeDots className="medium-post-card-details__dots"/>
                </div>
            </div>
            <div className="medium-post-card-separator"></div>
        </div>
    );
}

export default MediumPostCard;