export function openGoogleCalendar() {
  const title = encodeURIComponent("Wedding of Apoorva & Shivam");
  const dates = "20261124T033000Z/20261124T183000Z";
  const details = encodeURIComponent("Wedding celebrations of Apoorva & Shivam.");
  const location = encodeURIComponent("Pitampura, New Delhi");
  window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`, "_blank", "noopener,noreferrer");
}

export function downloadIcsFile() {
  const icsData = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Apoorva & Shivam Wedding//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
    "UID:wedding-apoorva-shivam-20261124@wedding.com", "DTSTAMP:20261103T000000Z", "DTSTART:20261124T033000Z", "DTEND:20261124T183000Z",
    "SUMMARY:Wedding of Apoorva & Shivam", "DESCRIPTION:Wedding celebrations of Apoorva & Shivam.", "LOCATION:Pitampura, New Delhi", "STATUS:CONFIRMED", "END:VEVENT", "END:VCALENDAR"
  ].join("\r\n");
  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Apoorva_Shivam_Wedding.ics";
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
}
