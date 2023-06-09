import {useState} from "react";


function MakeGame(){
    const [body, setBody] = useState("");
    const [posts, setPosts] = useState("");

    const addPosts = async (obj) => {
        await fetch("http://localhost:9090/library/libraryCreateGame", {
            method: "POST",

            body: JSON.stringify({name: "Halo", price: 100}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())

            .then((data) => {
                setPosts((posts) => [data, ...posts]);
                setBody("");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(body);
        console.log("Lets GOOO");
        alert('You clicked me!');
    };
    return(
        <button onClick={handleSubmit}>MakeGame</button>
    )
}

function MakeUser(){
    const [bodyUser, setBodyUser] = useState("");
    const [postsUser, setPostsUser] = useState("");

    const addPosts = async (obj) => {
        await fetch("http://localhost:9090/library/addUser", {
            method: "POST",

            body: JSON.stringify({name: "Floris", password: "WW123", address: "straat de groot"}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())

            .then((data) => {
                setPostsUser((posts) => [data, ...posts])
                setBodyUser("");
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

        const handleSubmit = (e) =>  {
            e.preventDefault();
            addPosts(bodyUser);
            console.log("added user");
            alert("you clicked it");
        }
        return(
            <button onClick={handleSubmit}>add user</button>
        )
}

export default function MyApp(){

    const [getStuff, setGetStuff] = useState([]);
    const [getUser, setGetUser] = useState([]);

    const handleData = () => {
        fetch("http://localhost:9090/library/GetAllGames")
            .then((response) => response.json())

            .then((data) => {
                //setGetStuff(data);
                setGetStuff(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
        console.log(getStuff)
    }

    const getUserToFront = () => {
        fetch("http://localhost:9090/library/users")
            .then((response) => response.json())

            .then((data) => {
                setGetUser(data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return(
        <div>
            <MakeGame/>
            <MakeUser/>
            <button onClick={handleData}>get the created game</button>
            {getStuff.map((getStuff) => {
                return(
                    <div>
                        {getStuff.price}
                        {getStuff.name}
                    </div>
                )
            })}
            <button onClick={getUserToFront}>get the user</button>
            {getUser.map((getUser) => {
                return(
                    <div>
                        {getUser.name}
                    </div>
                )
            })}
            {/*{getUser[0].name}*/}
            {/*<GetData/>*/}
        </div>)
};