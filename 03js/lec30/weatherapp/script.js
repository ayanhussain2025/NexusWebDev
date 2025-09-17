function update(data)
{
    document.getElementById("weatherInfo").innerText = `Temperature is ${data.current.temp_c} degree celcius`;
}
const button = document.querySelector('button').addEventListener('click',(event)=>{
    event.preventDefault();
    const input = document.getElementById("location").value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=f87d05e3fe0344fdace103157251709&q=${input}&aqi=yes`)
    .then(response => response.json())
    .then(data=>update(data))
    .catch(error=>console.log(error));
})