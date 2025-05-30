let spinnerCount = 0;

/**
 * Show Spinner and blocks user interaction.
 */
export function showSpinner() {
  spinnerCount++;
  const overlay = document.getElementById('global-spinner-overlay');
  if (overlay) overlay.style.display = 'flex';
}

/**
 * Hide Spinner and allows user interaction.
 */
export function hideSpinner() {
  const overlay = document.getElementById('global-spinner-overlay');
  if (spinnerCount > 0) spinnerCount--;
  // If there are still spinners, do not hide the overlay.
  if (spinnerCount === 0 && overlay) overlay.style.display = 'none';
}
