// Enhanced Indian destinations data with images
const destinations = [
    {
        name: "Goa",
        state: "Goa",
        costPerDay: 3500,
        description: "Beautiful beaches and vibrant nightlife with Portuguese heritage",
        climate: "tropical",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Basilica of Bom Jesus"
    },
    {
        name: "Kerala ",
        state: "Kerala",
        costPerDay: 4000,
        description: "God's own country with backwaters, tea plantations and hills",
        climate: "tropical",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Tea Gardens & Backwaters"
    },
    {
        name: "Rajasthan ",
        state: "Rajasthan",
        costPerDay: 3000,
        description: "Pink City with royal palaces and magnificent forts",
        climate: "desert",
        image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww",
        landmark: "Hawa Mahal & Amber Fort"
    },
    {
        name: "Himachal Pradesh ",
        state: "Himachal Pradesh",
        costPerDay: 2500,
        description: "Snow-capped mountains, adventure sports and pristine valleys",
        climate: "mountain",
        image: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
        landmark: "Rohtang Pass & Solang Valley"
    },
    {
        name: "Uttarakhand ",
        state: "Uttarakhand",
        costPerDay: 2000,
        description: "Yoga capital of the world on the banks of holy Ganges",
        climate: "mountain",
        image: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpc2hpa2VzaHxlbnwwfHwwfHx8MA%3D%3D",
        landmark: "Laxman Jhula & Ram Jhula"
    },
    {
        name: "Tamil Nadu ",
        state: "Tamil Nadu",
        costPerDay: 2800,
        description: "Rich Dravidian culture with magnificent ancient temples",
        climate: "tropical",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Meenakshi Temple & Marina Beach"
    },
    {
        name: "Karnataka ",
        state: "Karnataka",
        costPerDay: 3200,
        description: "Silicon Valley of India with beautiful gardens and parks",
        climate: "moderate",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Bangalore Palace & Lalbagh"
    },
    {
        name: "Maharashtra (Mumbai)",
        state: "Maharashtra",
        costPerDay: 4500,
        description: "Bollywood capital and financial hub of India",
        climate: "tropical",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Gateway of India & Marine Drive"
    },
    {
        name: "West Bengal (Kolkata)",
        state: "West Bengal",
        costPerDay: 2200,
        description: "Cultural capital with colonial architecture and art",
        climate: "tropical",
        image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D",
        landmark: "Victoria Memorial & Howrah Bridge"
    },
    {
        name: "Delhi",
        state: "Delhi",
        costPerDay: 3800,
        description: "Capital city blending Mughal heritage with modern India",
        climate: "continental",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        landmark: "Red Fort & India Gate"
    }
];

// Weather simulation data (same as before)
const weatherPatterns = {
    tropical: {
        summer: { temp: "28-35°C", condition: "Hot & Humid", rain: "Medium" },
        monsoon: { temp: "25-30°C", condition: "Rainy", rain: "High" },
        winter: { temp: "20-28°C", condition: "Pleasant", rain: "Low" }
    },
    desert: {
        summer: { temp: "35-45°C", condition: "Very Hot", rain: "Very Low" },
        monsoon: { temp: "30-38°C", condition: "Hot", rain: "Low" },
        winter: { temp: "10-25°C", condition: "Pleasant", rain: "Very Low" }
    },
    mountain: {
        summer: { temp: "15-25°C", condition: "Pleasant", rain: "Medium" },
        monsoon: { temp: "12-20°C", condition: "Cool & Rainy", rain: "High" },
        winter: { temp: "-5-10°C", condition: "Cold", rain: "Low (Snow)" }
    },
    moderate: {
        summer: { temp: "25-32°C", condition: "Warm", rain: "Medium" },
        monsoon: { temp: "22-28°C", condition: "Mild & Rainy", rain: "High" },
        winter: { temp: "15-25°C", condition: "Pleasant", rain: "Low" }
    },
    continental: {
        summer: { temp: "30-42°C", condition: "Hot", rain: "Low" },
        monsoon: { temp: "25-35°C", condition: "Hot & Humid", rain: "High" },
        winter: { temp: "5-20°C", condition: "Cold", rain: "Low" }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadDestinations();
    setupEventListeners();
    setMinDate();
});

// Enhanced destination loading with images
function loadDestinations() {
    const grid = document.getElementById('destinationsGrid');
    const select = document.getElementById('destination');
    
    destinations.forEach((dest, index) => {
        // Create destination card with image
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <div class="destination-image" style="background-image: url('${dest.image}')"></div>
            <div class="destination-content">
                <h3>${dest.name}</h3>
                <p><strong>Famous for:</strong> ${dest.landmark}</p>
                <p>${dest.description}</p>
                <div class="price">₹${dest.costPerDay.toLocaleString()}/day</div>
            </div>
        `;
        
        // Add click event to select destination
        card.addEventListener('click', () => {
            document.getElementById('destination').value = index;
            document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
        });
        
        grid.appendChild(card);
        
        // Add to dropdown
        const option = document.createElement('option');
        option.value = index;
        option.textContent = dest.name;
        select.appendChild(option);
    });
}

// Rest of the JavaScript functions remain the same
function setupEventListeners() {
    document.getElementById('calculateTrip').addEventListener('click', calculateTrip);
    document.getElementById('startDate').addEventListener('change', updateEndDateMin);
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').min = today;
    document.getElementById('endDate').min = today;
}

function updateEndDateMin() {
    const startDate = document.getElementById('startDate').value;
    document.getElementById('endDate').min = startDate;
}

function calculateTrip() {
    const destIndex = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const travelers = parseInt(document.getElementById('travelers').value);
    
    if (!destIndex || !startDate || !endDate) {
        alert('Please fill in all fields');
        return;
    }
    
    const destination = destinations[destIndex];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    
    if (days <= 0) {
        alert('End date must be after start date');
        return;
    }
    
    // Calculate costs
    const accommodationCost = destination.costPerDay * 0.4 * days * travelers;
    const foodCost = destination.costPerDay * 0.3 * days * travelers;
    const transportCost = destination.costPerDay * 0.2 * days * travelers;
    const activitiesCost = destination.costPerDay * 0.1 * days * travelers;
    const totalCost = accommodationCost + foodCost + transportCost + activitiesCost;
    
    showResults(destination, days, travelers, {
        accommodation: accommodationCost,
        food: foodCost,
        transport: transportCost,
        activities: activitiesCost,
        total: totalCost
    });
    
    generateWeatherForecast(destination, start, end);
}

function showResults(destination, days, travelers, costs) {
    const resultSection = document.getElementById('resultSection');
    const resultsDiv = document.getElementById('tripResults');
    
    resultsDiv.innerHTML = `
        <div class="cost-breakdown">
            <h4>🎯 Trip to ${destination.name}</h4>
            <p><strong>📍 Famous Landmark:</strong> ${destination.landmark}</p>
            <p><strong>⏰ Duration:</strong> ${days} days</p>
            <p><strong>👥 Travelers:</strong> ${travelers}</p>
            <hr style="margin: 1rem 0;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <span>🏨 Accommodation:</span><span>₹${costs.accommodation.toLocaleString()}</span>
                <span>🍽️ Food & Dining:</span><span>₹${costs.food.toLocaleString()}</span>
                <span>🚗 Transportation:</span><span>₹${costs.transport.toLocaleString()}</span>
                <span>🎪 Activities:</span><span>₹${costs.activities.toLocaleString()}</span>
            </div>
            <hr style="margin: 1rem 0;">
            <div style="font-size: 1.3rem; font-weight: 700; color: #667eea;">
                <span>💰 Total Cost:</span> <span>₹${costs.total.toLocaleString()}</span>
            </div>
        </div>
    `;
    
    resultSection.style.display = 'block';
}

function generateWeatherForecast(destination, startDate, endDate) {
    const forecastDiv = document.getElementById('weatherForecast');
    const season = getSeason(startDate);
    const weather = weatherPatterns[destination.climate][season];
    
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    forecastDiv.innerHTML = `
        <div class="weather-card">
            <h4>🌤️ Weather Forecast for ${destination.name}</h4>
            <div class="weather-item">
                <span>🗓️ Season:</span>
                <span>${season.charAt(0).toUpperCase() + season.slice(1)}</span>
            </div>
            <div class="weather-item">
                <span>🌡️ Temperature Range:</span>
                <span>${weather.temp}</span>
            </div>
            <div class="weather-item">
                <span>☁️ Weather Condition:</span>
                <span>${weather.condition}</span>
            </div>
            <div class="weather-item">
                <span>🌧️ Rainfall Expectation:</span>
                <span>${weather.rain}</span>
            </div>
            <div class="weather-item">
                <span>📅 Trip Duration:</span>
                <span>${days} days</span>
            </div>
        </div>
    `;
}

function getSeason(date) {
    const month = date.getMonth() + 1;
    
    if (month >= 3 && month <= 5) {
        return 'summer';
    } else if (month >= 6 && month <= 9) {
        return 'monsoon';
    } else {
        return 'winter';
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
