import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

function PokemonCard(props) {
    let cardColor;
    if(props.card.rarity === 'Common') {
        cardColor = 'black';
    } else if(props.card.rarity === 'Uncommon') {
        cardColor = 'green';
    } else if(props.card.rarity === 'Rare') {
        cardColor = 'blue';
    } else {
        cardColor = 'darkBlue';
    }

    return (
        <div id={props.card.id} style={{height:"390px",width:"20%",float:"left",margin:"12px", padding:"6px", background:"rgba(255,255,255,0.8", borderRadius:"10px"}}>
            
            <Card>
                <CardBody>
                    <CardTitle style={{fontWeight:"bold",fontSize:"1.3rem",textAlign:"center"}}>{props.card.name}</CardTitle>
                    {/* Was trying to get all the rarity types in here for unique styling for each.
                        But could not figure out how to use more than two conditions in the ternary.
                        Will return to this attempt at a later time. */}
                        {
                            <CardSubtitle style={{color:cardColor,fontStyle:"italic",textAlign:"center"}}>{props.card.rarity}</CardSubtitle>
                        }
                            <CardImg src={props.card.imageUrl} alt={props.card.name + ' Pokemon Card'} />
                </CardBody>
            </Card>
        </div>
    );
}

export default PokemonCard;