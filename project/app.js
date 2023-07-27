document.addEventListener("DOMContentLoaded", () => {
    const startStreamBtn = document.getElementById("start-stream-btn");
    const countSpan = document.getElementById("count");
    const commentsList = document.getElementById("comments-list");

    let viewerCount = 0;

    // Function to update the viewer count
    function updateViewerCount(count) {
        viewerCount = count;
        countSpan.textContent = viewerCount;
    }

    // Function to display a new comment
    function displayComment(comment) {
        const li = document.createElement("li");
        li.textContent = comment;
        commentsList.appendChild(li);
    }

    // Simulate fetching viewer count and comments from the server
    function fetchViewerData() {
        // Replace the following lines with actual API calls to fetch data from the server
        const newViewerCount = Math.floor(Math.random() * 100); // Random count for demo
        const newComment = `Comment ${Math.floor(Math.random() * 100)}`; // Random comment for demo

        updateViewerCount(newViewerCount);
        displayComment(newComment);
    }

    // Event listener for the "Start Stream" button
    startStreamBtn.addEventListener("click", () => {
        // Add logic to start the live stream and broadcast to multiple platforms
        // For this example, let's just call the fetchViewerData function to simulate updating data
        fetchViewerData();

        // Poll data every 5 seconds (adjust this interval based on your requirements)
        setInterval(fetchViewerData, 5000);
    });
});
