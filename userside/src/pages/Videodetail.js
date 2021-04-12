import React from "react";
import { Card, Row, Col , Button} from "react-materialize";
import "./VideoDetailStyle.css"

function Videodetails(props) {
  let videolink = `https://www.youtube.com/embed/${props.id}?autoplay=0`
  return (

    <Card>
      <Row>
        <Col m={6}>
          <iframe className="embed-responsive-item videoplayer"
            title={props.title}
            src={videolink}>
          </iframe>
          {/* <Button onClick={}>Save</Button> */}
          
        </Col>
        <Col m={6}>
          <h4> {props.title}</h4>

          <p>{props.description}</p>
          <p>{props.channelTitle}</p>
          <p>{props.published}</p>
          <a key="1" href={props.link} rel="noopener noreferrer" target="_blank">YOUTUBE LINK</a>
          <Button onClick= {}>Save</Button>
        </Col>
      </Row>
    </Card>

  )
}

export default Videodetails;
