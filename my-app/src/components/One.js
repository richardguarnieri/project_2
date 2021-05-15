import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';




const One = () => {

    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');

    // const general = async () => {
    //     const response = await fetch(`${$API}/all_movies/xxxxx`);
    //     const data = await response.json();
    //     console.log(data);
    // };

    const hello = () => {
        console.log('hello world')
    }

    // const selected = async () => {
    //     const response = await fetch(`${$API}/all_movies/${year}/${genre}/${language}`);
    //     const data = await response.json();
    //     console.log(data);
    // };

    useEffect(() => {
        console.log('rendered')
    }, [hello])


    return (
        <div>
            <div className="container">
            <div className="row p-3">
                <div className='col'>
                    <h2 className="display-6 pt-3 pb-3">Chart: X vs. Y</h2>
                    <p className="lead">Chart Analysis - Written Description</p>
                    <p>The following chart shows... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <hr className='mt-4 mb-4'/>
                <div className="col">
                    <h1 className='text-center'>Chart Area</h1>
                    <select id='year' className="form-select" aria-label="Default select example" 
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}>
                        <option selected>Open this select menu</option>
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                    </select>
                    <select id='genre' className="form-select" aria-label="Default select example"
                    onChange={(e) => {
                        setGenre(e.target.value);
                    }}>
                        <option selected>Open this select menu</option>
                        <option value="Genre 1">Genre 1</option>
                        <option value="Genre 2">Genre 2</option>
                        <option value="Genre 3">Genre 3</option>
                    </select>
                    <select id='language' className="form-select" aria-label="Default select example"
                    onChange={(e) => {
                        setLanguage(e.target.value);
                    }}>
                        <option selected>Open this select menu</option>
                        <option value="Language 1">Language 1</option>
                        <option value="Language 2">Language 2</option>
                        <option value="Language 3">Language 3</option>
                    </select>

                    <hr></hr>
                    
                    {year}<br></br>
                    {genre}<br></br>
                    {language}<br></br>

                    <hr></hr>




                    <h2>CALL D3 CODE</h2>




                </div>
                <div className="d-flex justify-content-center pt-4">
                        <Link to="/visualizations" className="btn btn-dark btn-lg m-2">Back to Visualizations</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default One
