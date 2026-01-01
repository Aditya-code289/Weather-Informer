let data;
let user_city;
let city_access= document.querySelector("#enter_city")
let button=document.querySelector('#submit')
let infor=document.querySelector('#info')
let failed=document.querySelector('#fail')



async function getdata(){

    let entered_city=city_access.value

    try {
        
        user_city=entered_city;
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d6bc8e8ceb6a4bac98d183846253112&q=${user_city}&days=1&aqi=yes&alerts=no`)

        data = await response.json()
        
        if(data.error){
            failed.classList.remove('hidden')
            failed.textContent="Invalid city name"
            infor.classList.add("hidden")


        }
        else{
    
    failed.textContent=" "
    let city=(data.location.name)
    let temp=(data.current.temp_c)
    let l_up=data.current.last_updated
    let state=data.location.region
    let wind=data.current.wind_kph
    let feel_like=data.current.feelslike_c


    document.querySelector("#city").textContent=city
    document.querySelector("#state").textContent=state
    document.querySelector("#temp").textContent=`${temp} °C`
    document.querySelector("#feel_temp").textContent=`${feel_like} °C`
    document.querySelector("#last_up").textContent=l_up
    document.querySelector("#wind").textContent=`${wind} kph`

    infor.classList.remove('hidden')

    } 
    }
    
    catch {
        failed.classList.remove('hidden')
        failed.textContent="Invalid city name"
    }

}


button.addEventListener('click',()=>{
    getdata()
})



 






















//http://api.weatherapi.com/v1/forecast.json?key=d6bc8e8ceb6a4bac98d183846253112&q=Gwalior&days=1&aqi=no&alerts=no


// d6bc8e8ceb6a4bac98d183846253112
