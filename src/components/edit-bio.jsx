import React, { useState } from 'react';
import './forum-home.css';
import { useCookies } from 'react-cookie';

function EditBio(props){
    const [body, setBody] = useState(props.lastBio);
    const [token] = useCookies(['mr-token']);
    const bodyChaned = evt =>{
        setBody(evt.target.value);
    }
    const submitClicked = evt =>{
        
        fetch(`${process.env.REACT_APP_API_URL}/api/user-extension/${props.userDetail[0].id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            },
            body: JSON.stringify({
                'bio' : body,
                'batch' : props.userDetail[0].batch,
                'user' : props.userDetail[0].user,
                'profile_photo' : props.userDetail[0].profile_photo
            })
            }).then( resp => resp.json())
            .catch( error => console.log(error))
            props.updateBio(body);
            props.cancelClicked();
        }
    return(
        <div>
            <form>
                <div className="form-group">
                    <textarea rows="6" type="text" value={body} className="form-control" id="body" onChange={bodyChaned}/>
                </div>
                <h3 className="btn btn-success" onClick={submitClicked}>Submit</h3>
                <h3 className="btn btn-warning ml-4" onClick={props.cancelClicked}>Cancel</h3>
            </form>
        </div>
    );
}

export default EditBio;