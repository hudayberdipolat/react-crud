import { Link } from "react-router-dom";
// eslint-disable-next-line
import imageSrc from "../assets/images/image.jpg"
const PostTable = () => {
    return (
        <>
            <div className="card rounded-0 mt-5">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="card-title my-0 fs-4 fw-bold"> List Post</h2>
                        </div>
                        <div className="col-6">
                            <Link className="btn btn-primary w-100 rounded-0 add-post" to="/posts/create" ><i className="fa fa-plus"></i> Add Post</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th >Image</th>
                                <th >Title</th>
                                <th >Created At</th>
                                <th >Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-1 align-middle"><img src={imageSrc} alt="Image" width="125" height="75" /></td>
                                <td className="p-1 align-middle">Mark</td>
                                <td className="p-1 align-middle">@mdo</td>
                                <td className="p-1 align-middle">
                                    <Link to="/posts/id/edit" className="btn btn-sm btn-outline-info m-1 "> <i className="fa fa-eye"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-primary m-1"> <i className="fa fa-edit"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-danger m-1 "> <i className="fa fa-trash"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1 align-middle"><img src={imageSrc} alt="Image" width="125" height="75" /></td>
                                <td className="p-1 align-middle">Mark</td>
                                <td className="p-1 align-middle">@mdo</td>
                                <td className="p-1 align-middle">
                                    <Link to="/posts/id/edit" className="btn btn-sm btn-outline-info m-1 "> <i className="fa fa-eye"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-primary m-1"> <i className="fa fa-edit"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-danger m-1 "> <i className="fa fa-trash"></i></Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-1 align-middle"><img src={imageSrc} alt="Image" width="125" height="75" /></td>
                                <td className="p-1 align-middle">Mark</td>
                                <td className="p-1 align-middle">@mdo</td>
                                <td className="p-1 align-middle">
                                    <Link to="/posts/id/edit" className="btn btn-sm btn-outline-info m-1 "> <i className="fa fa-eye"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-primary m-1"> <i className="fa fa-edit"></i></Link>
                                    <Link to="" className="btn btn-sm btn-outline-danger m-1 "> <i className="fa fa-trash"></i></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </>
    )
}


export default PostTable;