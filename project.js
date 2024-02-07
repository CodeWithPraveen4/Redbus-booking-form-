function bookTicket() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  // You can perform further validations or send data to the server for processing here
  // For simplicity, let's just display the booking details on the page
  const bookingDetails = `Booking Details:
    Source: ${source}
    Destination: ${destination}
    Date: ${date}
    Passengers: ${passengers}`;

  document.getElementById("bookingStatus").innerText = bookingDetails;
}