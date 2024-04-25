import axios from "axios";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const CreateForm = () => {
    const basicURL = "http://172.16.18.82:3001/api/posts";
    const [inputs, setInputs] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setInputs({ ...inputs, post_image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append("post_title", inputs.post_title);
            formData.append("post_desc", inputs.post_desc);
            formData.append("post_image", inputs.post_image);
    
            const response = await axios.post(`${basicURL}/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Response:', response.data);
            navigate("/")
            

            alert('Post created successfully!');
            setInputs({
                post_title: '',
                post_desc: '',
                post_image: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create post.');
        }
    };
    

    return (
        <div className="container">
            <div className="mt-5 ">
                <Link className="btn btn-primary  rounded-0 add-post" to="/" ><i className="fa-solid fa-arrow-left"></i> Yza</Link>
                <form onSubmit={handleSubmit}>
                    <div className="card rounded-0 mt-3">
                        <div className="card-header">
                            <h2 className="card-title my-0 fs-4 fw-bold"> Create Post</h2>
                        </div>

                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    name="post_title"
                                    className="form-control rounded-0"
                                    id="title"
                                    placeholder="Title..."
                                    value={inputs.post_title || "" }
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="surat" className="form-label">Surat</label>
                                <input
                                    type="file"
                                    name="post_image"
                                    className="form-control rounded-0"
                                    id="surat" 
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">Desc</label>
                                <textarea
                                    className="form-control rounded-0"
                                    name="post_desc"
                                    id="desc"
                                    rows="3"
                                    placeholder="Description..."
                                    onChange={handleChange}
                                    value={inputs.post_desc || "" }
                                ></textarea>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary rounded-0 w-25 float-end add-post" >  Ýatda sakla </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateForm;
