import styled, { keyframes } from 'styled-components'


export default function CharacterButton({ info, details }) {
    return (
        
            <div onClick={() => details(info)}>{info.name}<br></br><div>Show Character</div>
</div>

        
    )

    }