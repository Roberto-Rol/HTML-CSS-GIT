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
                    <li><strong>Gather Tools and Parts:</strong> Make sure you have all the necessary tools and replacement parts. Websites like [CarCareKiosk](https://www.carcarekiosk.com/) offer helpful videos and guides.</li>
                    <li><strong>Follow Instructions:</strong> Use repair manuals or online tutorials to guide you through the process. For example, you can find detailed guides on [AutoZone](https://www.autozone.com/diy/how-to).</li>
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
    }
}