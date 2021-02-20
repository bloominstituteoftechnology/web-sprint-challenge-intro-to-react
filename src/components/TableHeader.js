import React from "react";
import styled from 'styled-components';

const Thead = styled.th`
display: table-cell;
font-family: 'Roboto', sans-serif;
font-weight: 500;
word-spacing: 3px;
text-align: left;
padding: $table-cell-padding;
padding-left: 10px;
vertical-align: top;
border-top: $table-border-width solid $table-border-color;
`;
export default function TableHeader({ headers, onSorting }){
         headers = [
        {name: "Name", field: "name", sortable: true },
        {name: "Birth Year", field: "birth_year", sortable: true },
        {name: "Gender", field: "gender", sortable: true },
        {name: "Height", field: "height", sortable: true },
        {name: "Mass", field: "mass", sortable: true },
        {name: "Eye Color", field: "eye_color", sortable: true },
        {name: "Skin Color", field: "skin_color", sortable: true },
        ];

    return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <Thead key={name}>
                        {name}
                    </Thead>
                ))}
            </tr>
        </thead>
    );
}
