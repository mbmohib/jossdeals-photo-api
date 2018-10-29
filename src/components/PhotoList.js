import React from 'react';
import fetchData from '../api/fetchData';

class PhotoList extends React.Component {

    componentDidMount() {
        // this.getData();
    }

    getData() {
        const data = fetchData('https://jsonplaceholder.typicode.com/photos');
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default PhotoList;