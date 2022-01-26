import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useCookies } from "react-cookie";
import EachPerson from "./eachperson";
import Navbar from "./navbar";
import "./family.css";

function Family(){
  const [token] = useCookies(["mr-token"]);
  const [family, setFamily] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersExtra, setUsersExtra] = useState(null);
  const [showUser, setShowUser] = useState(null);

  useEffect( () => {
    if(!token['mr-token']) window.location.href = '/login';
  },[token])


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/family`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mr-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setFamily(res))
      .catch((error) => console.log(error));

    fetch(`${process.env.REACT_APP_API_URL}/api/user-from-token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mr-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
    fetch(`${process.env.REACT_APP_API_URL}/api/user-extension/full_list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mr-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsersExtra(res);
        window.x = res;
      })
      .catch((error) => console.log(error));
  }, []);

  const ChangeShowUser = (item) => {
    setShowUser(item);
  };

  if (!family || !users || !usersExtra) return <div />;

  if (showUser)
    return (
      <EachPerson
        ChangeShowUser={ChangeShowUser}
        user={users.filter((item) => item.id == showUser)[0]}
        userExtra={usersExtra.filter((item) => item.user == showUser)[0]}
      />
    );

  if (!showUser)
    return (
      <div id="family">
        <Navbar />
        <div className="jumbotron text-center cont-home-sochem text-light">
          <h1 className="mb-4">SoChem Family</h1>
        </div>
        {family.map((year) => {
          return (
            <div className="family__table border p-4 m-5 bg-light">
              <h1 style={{ marginBottom: "2rem" }}>
              
               Batch of 20{parseInt(year.batch.slice(3,5)) + 4}
              </h1>

              <table>
                <thead>
                  <tr>
                    <th style={{fontSize:"1.3rem"}}>Dp</th>
                    <th style={{fontSize:"1.3rem"}}>Name</th>
                    <th className="d-none d-lg-block" style={{fontSize:"1.3rem"}}>Email</th>
                  </tr>
                </thead>

                {JSON.parse(year.user_id).map((members) => {
                  var member = users.filter((item) => item.id == members)[0];
                  var memberExtra = usersExtra.filter(
                    (item) => item.user == members
                  )[0];

                  if (!member || !memberExtra) return <div />;
                  return (
                    <tr onClick={() => setShowUser(members)}>
                      <td style={{ padding: "1.5rem" }}>
                        <img
                          style={{ height: "4.8rem", borderRadius: "50%" }}
                          src={memberExtra.profile_photo}
                          alt="profile"
                        />
                      </td>
                      <td style={{ padding: "1.5rem" }}>
                        {member.first_name} {member.last_name}
                      </td>
                      <td className="d-none d-lg-block" style={{ padding: "1.5rem" }}>{member.email}</td>
                    </tr>
                  );
                })}
              </table>

              <br />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );

  return <div />;
}

export default Family;
