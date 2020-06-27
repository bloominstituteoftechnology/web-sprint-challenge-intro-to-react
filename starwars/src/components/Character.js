// Write your Character component here
import React from 'react';


const Profile = (props) => {
 let {data} = props;
    return(
        <div>
            {data.map(item =>{
                return(
            <div>
            <h3>Name:{item.name}</h3>
            <h3>Gender:{item.gender}</h3>
            <h3>Birth Year:{item.birth_year}</h3>
        </div>


    )
})}
</div>
    )
}
export default Profile;