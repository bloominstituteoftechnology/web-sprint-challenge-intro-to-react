// Write your Character component here
import React from "react";

export default ({data}) => {console.log(data); return data[0] ? <p>{data[0].name}</p> : <p></p>};