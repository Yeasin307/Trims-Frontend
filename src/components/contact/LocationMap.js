import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { PropTypes } from "prop-types";

const LocationMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${process.env.PUBLIC_URL + "/assets/img/icon-img/2.png"}`
        }}
        animation={props?.google?.maps?.Animation?.BOUNCE}
      />
    </Map>
  );
};

LocationMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

const LoadingContainer = () => (
  <div className="flone-preloader">
    <span></span>
    <span></span>
  </div>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyBDqzysVw3ix_7FepCo9f1Zxcr9VI-bKpI",
  LoadingContainer: LoadingContainer
})(LocationMap);