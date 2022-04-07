import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod delectus sapiente
                distinctio aliquam at quas iusto
                exercitationem sed! Quae nesciunt delectus officiis itaque. Delectus, quis
                similique eius ullam reiciendis ducimus.
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod delectus sapiente
                distinctio aliquam at quas iusto
                exercitationem sed! Quae nesciunt delectus officiis itaque. Delectus, quis
                similique eius ullam reiciendis ducimus.
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod delectus sapiente
                distinctio aliquam at quas iusto
                exercitationem sed! Quae nesciunt delectus officiis itaque. Delectus, quis
                similique eius ullam reiciendis ducimus.
            </p>
        </div>
    );
}
