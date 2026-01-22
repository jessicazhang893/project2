const parentContainer = document.querySelector('.container');
const flexItem = document.querySelector('.textbox');

// Define the threshold size
const SIZE_THRESHOLD = 400; // Pixels

// Create a ResizeObserver instance
const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    const { width } = entry.contentRect; // Get the child's new width

    // Check if the specific size condition is met
    if (width > SIZE_THRESHOLD) {
      parentContainer.classList.add('is-large');
    } else {
      parentContainer.classList.remove('is-large');
    }
  }
});

// Start observing the child element
observer.observe(flexItem);