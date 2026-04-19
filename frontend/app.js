async function getWeather() {
  const city = document.getElementById("city").value;

  try {
    const res = await fetch(`http://16.171.29.7:5000/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      document.getElementById("result").innerText = data.error;
      return;
    }

    document.getElementById("result").innerHTML = `
  <h3>${data.city}</h3>
  <p>🌡 Temp: ${data.temp} °C</p>
  <p>☁ Weather: ${data.weather}</p>
`;
  } catch (error) {
    document.getElementById("result").innerText = "Server not responding";
  }
}