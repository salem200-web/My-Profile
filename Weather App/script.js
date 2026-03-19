function updateDashboard() {
    const location = document.getElementById("locationInput").value || "Amman, Jordan";

    document.getElementById("weatherSection").classList.remove("hidden");
    document.getElementById("historySection").classList.remove("hidden");
    document.getElementById("mapSection").classList.remove("hidden");

    document.getElementById("cityName").textContent = location;
    
    const now = new Date();
    document.getElementById("localTime").textContent = "Time: " + now.toLocaleTimeString();
    document.getElementById("temperature").textContent = "Temperature: 28 °C";
    document.getElementById("description").textContent = "Weather: Sunny ☀️";
    document.getElementById("weatherIcon").src = "https://openweathermap.org/img/wn/01d@2x.png";

    document.getElementById("date").textContent = "Date: " + now.toLocaleDateString();

    document.body.style.background = "linear-gradient(135deg,#fceabb,#f8b500)";
}