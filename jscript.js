// ---- Configurable Data ---- //
const livesSaved = 91000000; // 91 million
const childrenSaved = 30000000; // 30 million
const startYear = 2001;
const endYear = 2021;

// Calculate the total number of seconds in the time period
const totalSeconds = (endYear - startYear + 1) * 365.25 * 24 * 60 * 60;

// Per-second rates
const livesSavedPerSecond = livesSaved / totalSeconds;
const childrenSavedPerSecond = childrenSaved / totalSeconds;

// Set the start timestamp (Jan 1, 2001 UTC)
const startTimestamp = new Date(`${startYear}-01-01T00:00:00Z`).getTime();

// Function to update counters
function updateCounters() {
  const now = Date.now();
  const elapsedSeconds = (now - startTimestamp) / 1000;
  document.getElementById('livesSaved').textContent = Math.floor(elapsedSeconds * livesSavedPerSecond).toLocaleString();
  document.getElementById('childrenSaved').textContent = Math.floor(elapsedSeconds * childrenSavedPerSecond).toLocaleString();
}

// Update every second
updateCounters();
setInterval(updateCounters, 1000);

// ---- Lives Lost Clock (2025-2030) ---- //
const lostStartYear = 2025;
const lostEndYear = 2030;
const totalLost = 14000000;
const childrenLost = 4500000;
const lostTotalSeconds = (lostEndYear - lostStartYear + 1) * 365.25 * 24 * 60 * 60;

const lostPerSecond = totalLost / lostTotalSeconds;
const childrenLostPerSecond = childrenLost / lostTotalSeconds;

// Set the "losses" clock start time to Jan 1, 2025
const lostStartTimestamp = new Date(`${lostStartYear}-01-01T00:00:00Z`).getTime();

function updateLossCounters() {
  const now = Date.now();
  let elapsedLostSeconds = (now - lostStartTimestamp) / 1000;
  // If before 2025, show zero
  if (elapsedLostSeconds < 0) elapsedLostSeconds = 0;
  document.getElementById('livesLost').textContent = Math.floor(elapsedLostSeconds * lostPerSecond).toLocaleString();
  document.getElementById('childrenLost').textContent = Math.floor(elapsedLostSeconds * childrenLostPerSecond).toLocaleString();
}

// Call the function every second, along with your other counters
updateLossCounters();
setInterval(updateLossCounters, 1000);
