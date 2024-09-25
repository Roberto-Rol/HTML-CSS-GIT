document.addEventListener('DOMContentLoaded', function() {
    loadSection('home'); // Load the Home section by default

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');
            loadSection(section);
        });
    });
});

const carBrands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai'];

function loadSection(section) {
    const content = document.getElementById('content');
    if (section === 'home') {
        content.innerHTML = `
            <h2>Welcome to CarFix</h2>
            <p>Your one-stop solution for car repairs and parts.</p>
            <h6>We are a specialized website that born in 2024 with the mission of helping people with their car issues, 
            and to provide them with solutions to repair their cars without spending a lot of money, or to avoid discard
            a vehicle.
            </h6>
            <section id="car-brands">
                <h2>Car Brands</h2>
                <ul id="brand-list"></ul>
            <section>
            <section id="car-brands-2">
                <img src="brands\ 1.jpg" alt="Car Brands">
            </section>
        `;

        const brandList = document.getElementById('brand-list');
        carBrands.forEach(brand => {
            const listItem = document.createElement('li');
            listItem.textContent = brand;
            brandList.appendChild(listItem);
        });    } else if (section === 'cars') {
        content.innerHTML = `
            <h2>Cars & Parts</h2>
            <p>Explore our wide range of cars and auto parts.</p>
            <label for="car-brand">Choose a brand:</label>
            <select id="car-brand">
                <option value="ford">Ford</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="suzuki">Suzuki</option>
                <option value="mercedes-benz">Mercedes-Benz</option>
                <option value="jaguar">Jaguar</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="mitsubishi">Mitsubishi</option>
                <option value="land-rover">Land-Rover</option>
                <!-- Add more options as needed -->
            </select>
            <button id="getCarButton">Get Car Info</button>
            <div id="car-info"></div>
        `;
        addCarInfoEventListener(); // Add event listener for the button
    } else if (section === 'blog') {
        content.innerHTML = `
            <h2>Blog</h2>
            <article>
                <h3>How to change a tire</h3>
                <p>Changing a tire is a useful skill that can save you time and money. Follow these steps to safely change a tire:</p> 
                <ul> 
                    <li><strong>Tools and materials:</strong> Spare tire, car jack, lug wrench, wheel chocks, and a reflective safety vest (optional).</li> 
                    <li><strong>Steps:</strong></li> 
                    <li>Step 1: Find a safe and level place to stop. Turn on your hazard lights and apply the parking brake.</li> 
                    <li>Step 2: Place wheel chocks or heavy objects in front of and behind the tires to prevent the car from rolling.</li> 
                    <li>Step 3: Remove the hubcap or wheel cover if your car has one.</li> 
                    <li>Step 4: Use the lug wrench to slightly loosen the lug nuts on the flat tire, but do not remove them completely.</li> 
                    <li>Step 5: Position the car jack under the vehicle’s frame near the flat tire. Refer to your owner’s manual for the correct jacking points.</li> 
                    <li>Step 6: Raise the vehicle with the jack until the flat tire is about six inches off the ground.</li> 
                    <li>Step 7: Remove the lug nuts completely and take off the flat tire.</li> 
                    <li>Step 8: Mount the spare tire onto the wheel studs and hand-tighten the lug nuts.</li> 
                    <li>Step 9: Lower the vehicle until the spare tire is just touching the ground, then use the lug wrench to fully tighten the lug nuts in a star pattern.</li> 
                    <li>Step 10: Lower the vehicle completely and remove the jack.</li> 
                    <li>Step 11: Replace the hubcap or wheel cover if applicable.</li> 
                    <li>Step 12: Check the tire pressure of the spare tire and adjust if necessary. Drive carefully and get the flat tire repaired or replaced as soon as possible.</li> 
                </ul> 
            </article>
            <article>
                <h3>Oil change for ZD30 Patrol Y61</h3>
                <p>These are the recommended steps:</p>
                <ul>
                    <li><strong>Tools and materials:</strong> A wrench to release the filter cover, the filter, a wrench for the 22 mm cube/socket and the cube/socket, 8.2 l of engine oil (brand of your preference and 15w40, if possible), a funnel, and an oil tray.</li>
                    <li><strong>Steps:</strong> </li>
                    <li>Step 1: Remove the crankcase bolt/screw to extract the old oil.</li>
                    <li>Step 2: Make sure to put the screw back into the crankcase.</li>
                    <li>Step 3: Remove the old oil filter and replace it with the new one.</li>
                    <li>Step 4: Fill the engine with the new oil.</li>
                    <li>Step 5: Start the engine and check that everything is working well.</li>
                    <li>Step 6: Let the engine run for a few minutes and then turn it off.</li>
                    <li>Step 7: Check the oil level and verify that it is within the correct range.</li>
                </ul>
            </article>
            <article>
                <h3>How to Repair a Car</h3>
                <p>Some basic steps to get you started:</p>
                <ul>
                    <li>With the right tools and knowledge, repairing a car can be a rewarding experience. </li>
                    <li><strong>Steps:</strong> </li>
                    <li>Diagnose the Problem: Identify what needs to be fixed. This could be anything from a flat tire to a faulty engine part.</li>
                    <li>Gather Tools and Parts: Make sure you have all the necessary tools and replacement parts. Websites like <a href="https://www.carcarekiosk.com" target="_blank">CarCareKiosk</a> offer helpful videos and guides.</li>
                    <li>Follow Instructions: Use repair manuals or online tutorials to guide you through the process. For example, you can find detailed guides on <a href="https://www.autozone.com" target="_blank">AutoZone</a>.</li>
                    <li>Test the Repair: After completing the repair, test your car to ensure everything is working correctly.</li>
                    <li>And remember, safety first! Always wear protective gear and work in a well-ventilated area.</li>
                </ul>
            </article>
        `;
    } else if (section === 'links') {
        content.innerHTML = `
            <h2>Multimedia</h2>
            <p>Check out our multimedia content.</p>
            <h3>How to change a tire</h3>
                <p><a href="https://www.youtube.com/watch?v=QjZ5ohr7sGA">Watch this video tutorial on how to change a tire</a></p> 
            <h3>Oil change for ZD30 Patrol Y61</h3>
                <p><a href="https://www.youtube.com/watch?v=6Px0J75S354&t=575s">Watch this video tutorial on how to change the engine oil</a></p>
            <h3>How to Repair a Car</h3> 
                <p><a href="https://www.youtube.com/watch?v=nFtbf4prm78">Watch this video tutorial on how to repair a car or provide maintenance (Part I)</a></p>
                <p><a href="https://www.youtube.com/watch?v=QxIUekEy3Q8">And watch this video tutorial on how to repair a car or provide maintenance (Part II)</a></p>
        `;
    } else if (section === 'contact') {
        content.innerHTML = `
            <h2>Contact Us</h2>
            <p>Get in touch with us.</p>
            <form id="contactForm" onsubmit="handleFormSubmit(event)">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <div id="contactDetails">
                <h5>Our Contact Details</h5>
                <p><strong>Phone:</strong> +1-234-567-890</p>
                <p><strong>Email:</strong> contact@carfix.com</p>
                <p><strong>Address:</strong> 123 CarFix Street, San Juan, Alajuela, Costa Rica</p>
                <div id="map"></div>
            </div>
        `;
    }
}

function addCarInfoEventListener() {
    const getCarButton = document.getElementById('getCarButton');
    getCarButton.addEventListener('click', () => {
        const selectedBrand = document.getElementById('car-brand').value;
        const carInfo = document.getElementById('car-info');
        carInfo.innerHTML = `<p>Information about ${selectedBrand} will be displayed here.</p>`;
    });
}
async function fetchCarInfo() {
    const brand = document.getElementById('car-brand').value;
    const carInfoDiv = document.getElementById('car-info');
    carInfoDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`https://api.carsxe.com/specs?make=${brand}`, {
            method: 'GET',
            headers: {
                'Authorization': '4ia5yke9l_3eghib9pu_8iu4prunm'
            }
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        carInfoDiv.innerHTML = ''; // Clear previous data
        if (data && data.length > 0) {
            data.forEach(car => {
                const carElement = document.createElement('div');
                carElement.innerHTML = `
                    <h3>${car.model}</h3>
                    <p>Year: ${car.year}</p>
                    <p>Price: ${car.price}</p>
                `;
                carInfoDiv.appendChild(carElement);
            });
        } else {
            carInfoDiv.innerHTML = '<p>No cars found for this brand.</p>';
        }
    } catch (error) {
        console.error('Error fetching car data:', error);
        carInfoDiv.innerHTML = `Error fetching car data: ${error.message}. Please try again later.`;
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a message or send the form data to a server
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form fields
    document.getElementById('contactForm').reset();
}

function displayMessage(message) {
    const content = document.getElementById('content');
    content.innerHTML = `<h4>${message}</h4>`;
}

function initMap() {
    const location = { lat: 10.0167, lng: -84.2167 }; // Coordinates for San Juan, Alajuela, Costa Rica
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the Google Maps script
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCS6x18cKKGsT0iNt7iiLRgP0xCEDB9Cqg&callback=initMap');

function addAnimation() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes moveImage {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(100px);
            }
        }
        #car-brands-2 {
            background-image: url('brands\\ 1.jpg');
            background-repeat: no-repeat;
            margin-right: 20px;
            animation: moveImage 5s infinite alternate;
        }
    `;
    document.head.appendChild(style);
}

// Call the function to add the animation
addAnimation();