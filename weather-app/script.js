const btn = document.getElementById("getWeather");
const result = document.getElementById("result");

const apiKey = "YOUR_API_KEY_HERE"; // yahan apni key daalo

btn.onclick = function () {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    result.innerText = "Please enter city name";
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerText = "City not found";
        return;
      }

      result.innerHTML = `
         City: ${data.name}<br>
         Temp: ${data.main.temp} °C<br>
         Weather: ${data.weather[0].main}
      `;
    })
    .catch(error => {
      result.innerText = "Error fetching data";
    });
};
