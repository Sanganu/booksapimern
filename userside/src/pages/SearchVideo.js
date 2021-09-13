import React,{ useState } from "react";
import { TextInput, Button, Row, Col } from "react-materialize";
import API from "../APICall/API";
import Videodetail from "./Videodetail";

const SearchVideo = (props) => {
    const[searchTerm,setSearchTerm]=useState("")
    const[videoDetails,setVideoDetails] =  useState([])
    const getVideos = () =>{
        API.getReferenceVideo(searchTerm)
        .then( response => {
                console.log("Response",response)
               let videoRecords =  response.map(video => {
                        let videoDetail = {
                                channelTitle:video.channelTitle,
                                channelId:video.channelId,
                                description:video.description,
                                link: video.link,
                                published:video.publishedAt,
                                title: video.title,
                                id:video.id,
                                thumbnail:video.thumbnails.default.url
                        }
                        return videoDetail
                })
                setVideoDetails(videoRecords)
        })
        .catch((error)=>{
                console.log("Error",error)
        })
    }
    const saveVideo = (video) =>{
            console.log(video)
    }
  
        return(<div>
     
                <TextInput placeholder="Enter Search string" name={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <Button onClick={getVideos}>Search Video</Button>
                <Row>
                        <Col >
                {videoDetails.map( (video,key) => (
                        <Videodetail
                          title = {video.title}
                          description = {video.description}
                          channelTitle = {video.channelTitle}
                          channelId = {video.channelId}
                          published = {video.published}
                          link = {video.link}
                          id={video.id}
                          saveVideo={saveVideo}
                          key={key} />
                ))}
                </Col>
   </Row>
        </div>)

}

export default SearchVideo;

