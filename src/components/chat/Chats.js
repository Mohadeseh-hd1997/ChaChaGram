import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

//styles 
import styles from './Chats.module.css';

//components
import Navbar from '../Navbar/Navbar';
import { Auth_Firbase } from '../../firebase';

//context
import { AuthContext } from '../../context/AuthContextProvider';

function Chats() {

  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();


  useEffect(() => {
    // if userData not exist
    if (!user) {
      history.push('/');
      return;
    }
    // if user exist check it
    axios.get("http://api.chatengine.io/users.me", {
      headers: {
        "project-id": "c6d1d31d-02b5-4cdc-bcec-74db0f00ede4",
        "user-name": user.email,
        'user-secret': user.uid
      }
    }).then(() => {
      setLoading(false)
    }).catch(() => {
      let formData = new FormData();
      formData.append("email", user.email);
      formData.append("username", user.email);
      formData.append("secret", user.uid);
      getFile(user.photoURL)
        .then(avatar => {
          formData.append("avatar", avatar)
          axios.post("https://api.chatengine.io/users/",
            formData,
            {
              headers: {
                "private-key": "c6d1d31d-02b5-4cdc-bcec-74db0f00ede4"
              }
            })
            .then(() => {
              setLoading(false)
            }).catch((error) => {
              console.log(error)
              history.push("/");
            })
        })
    })
  }, [user, history])


  // get image user from context
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }


  const logOut = async () => {
    await Auth_Firbase.signOut();
    history.push('/');
  }


  if (!user || loading) return "!Loading ..."
  return (
    <div className={styles.container}>
      <Navbar logout={logOut} />
      <ChatEngine
        height="calc(100vh-50px)"
        projectID="c6d1d31d-02b5-4cdc-bcec-74db0f00ede4"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}

export default Chats