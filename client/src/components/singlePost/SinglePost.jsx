import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import "./singlePost.css"
import axios from "axios";

export default function SinglePost() {
    const location = useLocation();
    // console.log(location); pathname obtained is pathname: "/post/625008204cfc550d805c7759". we need the post id. 
    // console.log(location.pathname.split("/")[2]);
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]) //Whenever this path changes, fire useEffect
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img className="singlePostImg"
                        src={post.photo}
                        alt=""
                    />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
