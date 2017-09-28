import React, {Component} from 'react';
import {ListView, ScrollView, Text, View} from "react-native";
import MovieCard from "./MovieCard";
import {MOVIE_URL} from "../utils/Constants";

class MovieListing extends Component {


    constructor() {
        super();
        this.state = {movies: []}
        this.createDataSource(this.state.movies);
    }

    createDataSource(movies) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(movies);
    }


    componentWillMount() {
        fetch(MOVIE_URL)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response.results);
                this.createDataSource(response.results);
                this.setState({movies: response.results});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <ListView
                style={{paddingTop:8,marginLeft:8,marginRight:8}}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow(movie) {
        return <MovieCard key={movie.id} movie={movie}/>
    }
}

export default MovieListing;