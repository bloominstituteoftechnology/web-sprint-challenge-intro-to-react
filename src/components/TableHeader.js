import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeader = ({ headers, onSorting }) => {
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");
         headers = [
        {name: "Name", field: "name", sortable: true },
        {name: "Birth Year", field: "birth_year", sortable: true },
        {name: "Gender", field: "gender", sortable: true },
        {name: "Height", field: "height", sortable: true },
        {name: "Mass", field: "mass", sortable: true },
        {name: "Eye Color", field: "eye_color", sortable: true },
        {name: "Skin Color", field: "skin_color", sortable: true },
        ];

    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th
                        key={name}
                        onClick={() =>
                            sortable ? onSortingChange(field) : null
                        }
                    >
                        {name}

                        {sortingField && sortingField === field && (
                            <FontAwesomeIcon
                                icon={
                                    sortingOrder === "asc"
                                        ? "arrow-down"
                                        : "arrow-up"
                                }
                            />
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;