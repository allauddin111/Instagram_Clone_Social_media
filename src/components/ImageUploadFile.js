import React,{useState} from 'react'
import { db,storage } from "../firebase"
import firebase from "firebase";
import {Button,Input,} from '@material-ui/core';
import './ImageUpload.css'
function ImageUploadFile(username) {

const [progress,setProgress]=useState('');
const [caption,setCaption]=useState('');
const [image,setImage]=useState('');

const handleChange =(e)=>{
    if(e.target.files[0]){
        setImage(e.target.files[0]);
    }
}

const handleUpload=()=>{

const uploadTask= storage.ref(`images/${image.name}`).put(image);
uploadTask.on(
    "state_changed",
    (snapshot)=>{
        const progress=Math.round(
            (snapshot.bytesTransferred/snapshot.totalBytes)*100
        );
        setProgress(progress);
    },
    (error)=>{
        console.log(error);
        alert(error.message);
    },
    ()=>{
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url =>{
        db.collection("post").add({
            caption:caption,
            imgUrl:url,
            username:username
        });
setProgress(0);
setCaption("");
setImage(null);

        }
        )
    }
)

}


    return (
        <div className="uploadForm">
        <progress value={progress} max="100"/>
            <input type="text" placeholder="Enter the Caption" onChange={event=>setCaption(event.target.value)} value={caption}/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUploadFile
