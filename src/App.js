
import './App.css';
import { useState,useEffect } from 'react';

function App() {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  const InputElement = (elem) =>{
    //console.log(elem.target.value);
    setSearch(elem.target.value)
  }

 useEffect(() => {
   
  const getData = async () =>{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=90b070f7741ec946706d0d504713fcb5 `);
        const res = await response.json();
       console.log(res );
      //  console.log(res.main);
       setCity(res.main)

  }
  getData();

 }, [search]);


  return (
   <>
    <div className="container">
      <div className="row">
        <div className="col-6 m-auto">
          <div className="card p-3">
          <h1>Weather App</h1>
            <input type="search" placeholder='Serach Your City' className='form-control' onChange={InputElement}/>

           {/*  Ternary oprater condition ? value if true : value if false */}
            {!city? (
                <p className='error'>No Data Found</p>
                ): (
                  <>
                    <div className="content-header">
                    <h3><i className="bi bi-universal-access"></i> <span>{search}</span></h3>
                    <h4>{city.temp}°Cel</h4>
                    <p>Min: {city.temp_min}°Cel | Max : {city.temp_max}°Cel</p>
                    <p>Humidity: {city.humidity} | Pressure : {city.pressure}</p>
                    </div>
                  </>
                )
            }



          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
