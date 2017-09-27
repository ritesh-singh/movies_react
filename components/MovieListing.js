import React, {Component} from 'react';
import {ListView, ScrollView, Text, View} from "react-native";
import MovieCard from "./MovieCard";

class MovieListing extends Component {


    constructor() {
        super();
        this.url = "https://api.themoviedb.org/3/movie/popular?api_key=4044a8bd5cb54041a37ff2c5a62facc0";
        this.state = {movies: []}
        this.createDataSource(this.state.movies);
    }

    createDataSource(movies){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(movies);
    }


    componentWillMount() {
        fetch(this.url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
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
                style={{marginLeft:10,marginRight:10,marginTop:20}}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

    renderRow(movie){
        return <MovieCard key={movie.id} movie={movie}/>
    }
}

export default MovieListing;