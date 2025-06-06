import { msaConfig } from './config.js.php';

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

/**
 * Generate a report filename based on the provided parameters.
 *
 * @param type
 * @param startDate
 * @param endDate
 * @param suffix
 * @returns {string}
 */
export function reportFilename(type = "report", startDate = null, endDate = null, suffix = null) {
  let scn = msaConfig.siteCodeName || '';

  let startDateFmt = startDate && dayjs(startDate).isValid()
    ? dayjs(startDate).format("YYYY-MM-DD")
    : startDate;
  let endDateFmt = endDate
    ? (dayjs(endDate).isValid()
      ? `_to_${dayjs(endDate).format("YYYY-MM-DD")}`
      : `_to_${endDate}`)
    : "";

  suffix = suffix ? `_${suffix}`: "";

  return `${scn}_${type}_${startDateFmt}${endDateFmt}${suffix}`.replace(/ /g,"_");
}

/**
 * Check if the given item is null, undefined, or an empty string.
 * @param item
 * @returns {boolean}
 */
export function isNUE(item) {
  return item === null || item === undefined || item === '';
}

/**
 * Process geolocation data for each record in the provided item array.
 * @param item
 * @returns {*}
 */
export function processGeolocationData(item) {
  item.forEach((record, index) => {
    let geoData;
    try {
      geoData = JSON.parse(record['geo_location']);
    }
    catch (error) {
      console.log(`Error parsing geoLocation for record at index ${index}:`, error);
      geoData = null;
    }
    geoData = isNUE(geoData)
      ? 'No GeoLocation'
      : `${geoData['city'] || 'No City'}, ${geoData['regionName'] || 'No Region'}, ${geoData['country'] || 'No Country'}`;
    record.geoData = geoData;
  });

  return item;
}
