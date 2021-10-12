import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


export default function InnovationCard({ innovation }) {

  
  return (
    <Card>
      <CardHeader
        title={innovation.innovation_title}
        subheader={innovation.innovation_status}
      />
      <CardMedia component="img" height="194" image={innovation.innovation_pictures} />
      <CardContent>
        <Typography>{innovation.innovation_description}</Typography>

        <Typography>
          Innovator: <strong>innovator #{innovation.innovator_id}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Link
        to={{
          pathname: "/innovationSpecific",
          state: {innovation : innovation}
          
        }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          href= "/innovationSpecific"  

> 
          View Item
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
