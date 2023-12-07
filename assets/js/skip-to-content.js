// Skip to content button on header
function skipToContent() {
    // Get a reference to the "Discover the data story" button
    const button = document.querySelector('#discover-button');

    // Add a click event listener to the button
    button.addEventListener('click', (e) => {
        // Prevent the default action
        e.preventDefault();
        // Scroll to the content section
        const contentSection = document.querySelector('#content');
        contentSection.scrollIntoView({ behavior: 'smooth' });
    });
}

export { skipToContent };