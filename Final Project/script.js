document.addEventListener('DOMContentLoaded', function() {
    loadSection('cars'); // Load the Cars & Auto Parts section by default
});

function loadSection(section) {
    const content = document.getElementById('content');
    if (section === 'cars') {
        content.innerHTML = `
            <h2>Cars & Auto Parts</h2>
            <div class="gallery">
                <img src="car1.jpg" alt="Car 1">
                <img src="car2.jpg" alt="Car 2">
                <img src="autopart1.jpg" alt="Auto Part 1">
            </div>
        `;
    } else if (section === 'blog') {
        content.innerHTML = `
            <h2>Blog</h2>
            <article>
                <h3>Blog Post Title</h3>
                <p>This is a sample blog post.</p>
            </article>
            <article>
                <h3>New Blog Post Title</h3>
                <p>This is a new blog post.</p>
            </article>
            <article>
                <h3>How to Repair a Car</h3>
                <p>Repairing a car can seem daunting, but with the right tools and knowledge, it can be a rewarding experience. Here are some basic steps to get you started:</p>
                <ul>
                    <li><strong>Diagnose the Problem:</strong> Identify what needs to be fixed. This could be anything from a flat tire to a faulty engine part.</li>
                    <li><strong>Gather Tools and Parts:</strong> Make sure you have all the necessary tools and replacement parts. Websites like CarCareKiosk offer helpful videos and guides.</li>
                    <li><strong>Follow Instructions:</strong> Use repair manuals or online tutorials to guide you through the process. For example, you can find detailed guides on AutoZone.</li>
                    <li><strong>Test the Repair:</strong> After completing the repair, test your car to ensure everything is working correctly.</li>
                </ul>
                <p>Remember, safety first! Always wear protective gear and work in a well-ventilated area.</p>
            </article>
        `;
    } else if (section === 'links') {
        content.innerHTML = `
            <h2>Links & Videos</h2>
            <ul>
                <li><a href="#" onclick="loadSection('blog')">Go to Blog</a></li>
                <li><a href="https://www.youtube.com/watch?v=example" target="_blank">Watch Video</a></li>
            </ul>
        `;
    } else if (section === 'contact') {
        content.innerHTML = `
            <h2>Contact Us</h2>
            <form id="contactForm" onsubmit="handleFormSubmit(event)">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        `;
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // Form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Message to the user
    displayMessage(`Thank you for being part of 4 Your Car, ${name}! Your message has been sent.`);

    // Server possibility
}

function displayMessage(message) {
    const content = document.getElementById('content');
    content.innerHTML = `<p>${message}</p>`;
}
