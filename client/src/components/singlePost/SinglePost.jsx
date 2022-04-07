import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Meet</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas quidem,
                    corporis eum reiciendis nisi aperiam ullam inventore asperiores excepturi harum unde commodi cupiditate culpa nam,
                    repellat voluptate nulla veniam ad!
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas quidem,
                    corporis eum reiciendis nisi aperiam ullam inventore asperiores excepturi harum unde commodi cupiditate culpa nam,
                    repellat voluptate nulla veniam ad!
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas quidem,
                    corporis eum reiciendis nisi aperiam ullam inventore asperiores excepturi harum unde commodi cupiditate culpa nam,
                    repellat voluptate nulla veniam ad!
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas quidem,
                    corporis eum reiciendis nisi aperiam ullam inventore asperiores excepturi harum unde commodi cupiditate culpa nam,
                    repellat voluptate nulla veniam ad!
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Voluptas quidem,
                    corporis eum reiciendis nisi aperiam ullam inventore asperiores excepturi harum unde commodi cupiditate culpa nam,
                    repellat voluptate nulla veniam ad!
                </p>
            </div>
        </div>
    )
}
