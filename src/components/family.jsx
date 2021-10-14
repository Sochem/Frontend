import React, { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { useCookies } from "react-cookie";
import EachPerson from "./eachperson";
import Navbar from "./navbar";
import "./family.css";
//  #ID class/id/tag

function Family() {
  const [token] = useCookies(["mr-token"]);
  const [family, setFamily] = useState(null);
  const [users, setUsers] = useState(null);
  const [usersExtra, setUsersExtra] = useState(null);
  const [showUser, setShowUser] = useState(null);
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
            <div className="family__table border p-4 m-3 bg-light">
              <h1 style={{ marginBottom: "2rem" }}>
                {year.batch.toUpperCase()}
              </h1>

              <table>
                <thead >
                  <tr>
                    <th>Dp</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Bio</th>
                  </tr>
                </thead>

               

                {/* <tr style={{textAlign:"center"}}>
                                <th>Dp</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Bio</th>
                            </tr> */}
                {JSON.parse(year.user_id).map((members) => {
                  var member = users.filter((item) => item.id == members)[0];
                  var memberExtra = usersExtra.filter(
                    (item) => item.user == members
                  )[0];

                  if (!member || !memberExtra) return <div />;
                  return (
                    <tr onClick={() => setShowUser(members)}>
                      <td
                        style={{ padding: "1.5rem",  }}
                      >
                        <img
                          style={{ height: "4rem", borderRadius: "50%" }}
                          src={memberExtra.profile_photo}
                          alt="profile"
                        />
                      </td>
                      <td
                        style={{ padding: "1.5rem", }}
                      >
                        {member.first_name}
                      </td>
                      <td
                        style={{ padding: "1.5rem", }}
                      >
                        {member.last_name}
                      </td>
                      <td
                        style={{ padding: "1.5rem", }}
                      >
                        {member.email}
                      </td>
                      <td
                        style={{ padding: "1.5rem", }}
                      >
                        {memberExtra.bio}
                      </td>
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







{/* <tr>
{" "}
<td>
  <a href="#">INV1001</a>
</td>
<td>Paragon</td>
<td>1/5/2021</td>
<td>
  <p class="status status-unpaid">Unpaid</p>
</td>
</tr>

<tr>
<td>
  <a href="#">INV1002</a>
</td>
<td>Sonic</td>
<td>1/4/2021</td>
<td>
  <p class="status status-paid">Paid</p>
</td>
</tr>
<tr>
<td>
  <a href="#">INV1003</a>
</td>
<td>Innercircle</td>
<td>1/2/2021</td>
<td>
  <p class="status status-pending">Pending</p>
</td>
</tr>
<tr>
<td>
  <a href="#">INV1004</a>
</td>
<td>Varsity Plus</td>
<td>12/30/2020</td>
<td>
  <p class="status status-pending">Pending</p>
</td>
</tr>
<tr>
<td>
  <a href="#">INV1005</a>
</td>
<td>Highlander</td>
<td>12/18/2020</td>
<td>
  <p class="status status-paid">Paid</p>
</td>
</tr> */}