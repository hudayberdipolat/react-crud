import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import imageSrc from "../assets/images/image.jpg";

const PostTable = () => {
    const [posts, setPosts] = useState([]);
    const basicURL = "http://172.16.18.82:3001/api/posts";

    useEffect(() => {
        axios.get(basicURL)
            .then((res) => {
                setPosts(res.data.data); // Assuming res.data.data contains the posts array
            })
            .catch(err => {
                alert(err.message);
            });
    }, []);

    console.log(posts);

    return (
        <div className="container">
             <Link className="btn btn-primary  rounded-0 add-post mt-5" to="/posts/create">
                                <i className="fa fa-plus"></i> Add Post
                            </Link>
            <div className="card rounded-0 mt-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="card-title my-0 fs-4 fw-bold"> List Post</h2>
                        </div>
                        <div className="col-6">
                           
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Created At</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <tr key={index}>
                                        <td className="p-1 align-middle">
                                            <img src={imageSrc} alt="Image" width="125" height="75" />
                                        </td>
                                        <td className="p-1 align-middle">{post.post_title}</td>
                                        <td className="p-1 align-middle">{post.created_at}</td>
                                        <td className="p-1 align-middle">
                                            <Link to={`/posts/${post.id}/edit`} className="btn btn-sm btn-outline-info m-1">
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                            <Link to={`/posts/${post.id}/edit`} className="btn btn-sm btn-outline-primary m-1">
                                                <i className="fa fa-edit"></i>
                                            </Link>
                                            <Link to={`/posts/${post.id}`} className="btn btn-sm btn-outline-danger m-1">
                                                <i className="fa fa-trash"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No posts available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    );
}

export default PostTable;
