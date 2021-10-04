import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import EachPerson from "./eachperson";
import Navbar from './navbar';

//  #ID class/id/tag

function Family(){
    const [token] = useCookies(['mr-token'])
    const [family, setFamily] = useState(null)
    const [users, setUsers] = useState(null)
    const [usersExtra, setUsersExtra] = useState(null)
    const [showUser, setShowUser] = useState(null)
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/family`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            })
            .then(res => res.json())
            .then(res => setFamily(res))
            .catch( error => console.log(error))

        fetch(`${process.env.REACT_APP_API_URL}/api/user-from-token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            })
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch( error => console.log(error))    
        fetch(`${process.env.REACT_APP_API_URL}/api/user-extension/full_list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`,
            }
            })
            .then(res => res.json())
            .then(res => {setUsersExtra(res);window.x=res})
            .catch( error => console.log(error))    
    },[])

    const ChangeShowUser = item => {
        setShowUser(item)
    }

    if(!family||!users||!usersExtra) return <div/>

    if(showUser)
        return <EachPerson
            ChangeShowUser={ChangeShowUser} 
            user={users.filter(item => item.id==showUser)[0]} 
            userExtra={usersExtra.filter(item => item.user==showUser)[0]}
        />

    if(!showUser)
    return(
        <div>
            <Navbar />
            <div className="jumbotron text-center cont-home-sochem text-light">
                <h1>SoChem Family</h1>
            </div>
            {family.map(year => {
                return (
                    <div>
                        <h1>{year.batch}</h1>
                        <table>
                            <tr>
                                <th>Dp</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Bio</th>
                            </tr>
                        {JSON.parse(year.user_id).map(members => {
                            var member=users.filter(item => item.id==members)[0]
                            var memberExtra=usersExtra.filter(item => item.user==members)[0]

                            if(!member||!memberExtra)
                                return <div />
                            return(
                                <tr onClick={()=> setShowUser(members)}>
                                    <td style={{padding:'2px',border:'1px solid black'}}><img style={{height:'40px'}} src={memberExtra.profile_photo} alt="profile" /></td>
                                    <td style={{padding:'2px',border:'1px solid black'}}>{member.first_name}</td>
                                    <td style={{padding:'2px',border:'1px solid black'}}>{member.last_name}</td>
                                    <td style={{padding:'2px',border:'1px solid black'}}>{member.email}</td>
                                    <td style={{padding:'2px',border:'1px solid black'}}>{memberExtra.bio}</td>
                                </tr>
                            );
                        })}
                        </table>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                );
            })}
        </div>
    );

    if(showUser)
        return(
            <div>
                <Navbar/>
                {showUser}
            </div>
        );
    return <div />
}

export default Family