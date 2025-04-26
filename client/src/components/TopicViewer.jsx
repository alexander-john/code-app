import React from 'react';
import { useParams } from 'react-router-dom';

export default function DynamicPage() {
    const { name } = useParams(); // Extract the dynamic part of the URL

    return (
        <div>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1> {/* Capitalize the name */}
            <p>Welcome to the {name} page!</p>
        </div>
    );
}