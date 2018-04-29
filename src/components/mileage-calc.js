import React, { Component } from 'react';
//import distance from 'google-distance-matrix';

class MileageCalc extends Component {

//google api key: AIzaSyCodRWSFX-atzFYcHTNJamzJNnoi-g-37k
calcDistance() {
  const distance = require('google-distance-matrix');

let origins = ['San Francisco CA', '40.7421,-73.9914'];
let destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];

distance.key('<AIzaSyCodRWSFX-atzFYcHTNJamzJNnoi-g-37k>');
distance.units('imperial');

distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status === 'OK') {
        for (let i=0; i < origins.length; i++) {
            for (let j = 0; j < destinations.length; j++) {
                let origin = distances.origin_addresses[i];
                let destination = distances.destination_addresses[j];
                if (distances.rows[0].elements[j].status === 'OK') {
                    let distance = distances.rows[i].elements[j].distance.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                }
            }
        }
    }
});
}

  render() {
    return (
      <p>{this.calcDistance()}</p>

)}
}
export default MileageCalc;
