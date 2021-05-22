import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';

const Data = () => {

const herokuBackend = 'https://itesm-project2-backend.herokuapp.com'
let tbody = d3.select("tbody");

const filterData = async () => {
    try {
        const response = await fetch(`${herokuBackend}/all_movies`);
        const data = await response.json();
        deleteTable();
        console.log("click");
    } catch(err) {
        console.log(err);
    }
}




//  function filterData(){
//     console.log("click");
    
//     let movie_data = general;
//     console.log(movie_data);


//  }
 
 function deleteTable(){
     tbody.selectAll("tr").remove()
        .selectAll("td").remove();
 }
    
    
    return (
        <div>
            <div class="container">
            <div class="row pt-5">
                <div class="col">
                    <h4 class="pb-3 mb-0">Search for Movies</h4>
                    <form action="" onSubmit="return false;">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="genre" placeholder="Romance" />
                            <label for="genre">Romance, Drama, Crime, Fantasy, Comedy, Biography...</label>
                        </div>
                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" id="language" placeholder="English" />
                            <label for="language">English, Spanish, Italian, French, German...</label>
                        </div>
                        <button type='button' onClick={filterData} class="btn btn-dark mt-3">Find Movies</button>
                    </form>
                </div>
            </div>

                <div class="row py-5">
                    <div class="col">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <td>Movie Title</td>
                                    <td>Genre</td>
                                    <td>Language</td>
                                    <td>Country</td>
                                    <td>Duration</td>
                                    <td>Rating</td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
