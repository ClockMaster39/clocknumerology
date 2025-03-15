document.addEventListener('DOMContentLoaded', function() {
    function addInfoLink(containerId, text, detailedContent) {
        const container = document.getElementById(containerId);
        const infoLink = document.createElement('span');
        infoLink.textContent = text;
        infoLink.classList.add('info-link');  // Custom class for styling

        // Append to the designated container
        container.appendChild(infoLink);

        // Event listener for mouse click or hover
        infoLink.addEventListener('mouseenter', () => {
            const displayArea = document.getElementById('dynamicInfo');
            displayArea.querySelector('.content').innerHTML = detailedContent;
        });

        // Optionally clear on mouseleave or keep it persistent
        infoLink.addEventListener('mouseleave', () => {
            const displayArea = document.getElementById('dynamicInfo');
            displayArea.querySelector('.content').innerHTML = "Select a topic for more information.";
        });
    }

    // Add info "links" to the footer with dynamic content update
    addInfoLink('infoLinks', 'About', '<p>Learn more about our mission and the methods we use.</p>');
    addInfoLink('infoLinks', 'Contact', '<p>Contact us via email at example@example.com or phone at (123) 456-7890.</p>');
    addInfoLink('infoLinks', 'The Messiah', '<p>Detailed information about "The Messiah" including historical context and impact.</p>');
});
