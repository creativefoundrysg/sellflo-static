function pad(n) {
    return n.toString().padStart(2, '0');
  }
  
  // Returns an ICS datetime string in UTC or local time
  function formatICSDate(dateObj, useUTC = false) {
    const year = useUTC ? dateObj.getUTCFullYear() : dateObj.getFullYear();
    const month = pad(useUTC ? dateObj.getUTCMonth() + 1 : dateObj.getMonth() + 1);
    const day = pad(useUTC ? dateObj.getUTCDate() : dateObj.getDate());
    const hours = pad(useUTC ? dateObj.getUTCHours() : dateObj.getHours());
    const minutes = pad(useUTC ? dateObj.getUTCMinutes() : dateObj.getMinutes());
    const seconds = pad(useUTC ? dateObj.getUTCSeconds() : dateObj.getSeconds());
    return `${year}${month}${day}T${hours}${minutes}${seconds}${useUTC ? 'Z' : ''}`;
  }
  
  /**
   * Returns JS Date for end time, given start date string, time string, and duration (in minutes)
   */
  function calculateEndDate(startDate, startTime, bookingDuration) {
    const [year, month, day] = startDate.split('-').map(Number);
    const [hours, minutes] = startTime.split(':').map(Number);
    const start = new Date(year, month - 1, day, hours, minutes, 0);
    const end = new Date(start.getTime() + bookingDuration * 60000);
    return end;
  }
  
  /**
   * Creates ICS file content as string using string date/time inputs and duration in minutes
   * @param {string} timezone 
   * @param {string} startDate - 'YYYY-MM-DD'
   * @param {string} startTime - 'HH:mm'
   * @param {number} bookingDuration - e.g., 30 or 60 (minutes)
   * @param {string} title 
   * @param {string} description 
   * @param {string} location 
   */
  export function createICSFile(timezone, startDate, startTime, bookingDuration, title, description, location, attendees = []) {
    // Start time as Date object
    const [year, month, day] = startDate.split('-').map(Number);
    const [hours, minutes] = startTime.split(':').map(Number);
    const start = new Date(year, month - 1, day, hours, minutes, 0);
    const end = new Date(start.getTime() + bookingDuration * 60000);
  
    // DTSTAMP should be current UTC time
    const dtstamp = formatICSDate(new Date(), true);
      
    const attendeeLines = attendees.map(
        (attendee) => `ATTENDEE;CN=${attendee.name};RSVP=FALSE:mailto:${attendee.email}`
    );

    const icsLines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:Calendar',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        `BEGIN:VTIMEZONE`,
        `TZID:${timezone}`,
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        `SUMMARY:${title}`,
        `UID:@Default`,
        'SEQUENCE:0',
        'STATUS:CONFIRMED',
        'TRANSP:TRANSPARENT',
        `DTSTART;TZID=${timezone}:${formatICSDate(start)}`,
        `DTEND;TZID=${timezone}:${formatICSDate(end)}`,
        `DTSTAMP:${dtstamp}`,
        `LOCATION:${location}`,
        `DESCRIPTION:${description}`,
        ...attendeeLines, // <-- Here!
        'END:VEVENT',
        'END:VCALENDAR'
    ];
    const icsBody = icsLines.join('\r\n');
  
    return icsBody;
  }
  
  // Example usage:
  const fileContent = createICSFile(
    'America/Los_Angeles',
    '2025-08-08',
    '18:00',
    30,
    'Example Event',
    'This is the event description',
    'Washington State Convention Center, 705 Pike St, Seattle, WA'
  );
  