const $tableID = $('#table');
const $BTN = $('#export-btn');
const $EXPORT = $('#export');

const newTr = `
<tr class="hide">
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half" contenteditable="true">Example</td>
  <td class="pt-3-half">
    <span class="table-up"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
    <span class="table-down"><a href="#!" class="indigo-text"><i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
  </td>
  <td>
    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0 waves-effect waves-light">Remove</button></span>
  </td>

</tr>`;

$('.table-add').on('click', 'i', () => {

  const $clone = $tableID.find('tbody tr').last().clone(true).removeClass('hide table-line');

  if ($tableID.find('tbody tr').length === 0) {

    $('tbody').append(newTr);
  }

  $tableID.find('table').append($clone);
});

$tableID.on('click', '.table-remove', function () {

  $(this).parents('tr').detach();
});

$tableID.on('click', '.table-up', function () {

  const $row = $(this).parents('tr');

  if ($row.index() === 0) {
    return;
  }

  $row.prev().before($row.get(0));
});

$tableID.on('click', '.table-down', function () {

  const $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.on('click', () => {

  const $rows = $tableID.find('tr:not(:hidden)');
  const headers = [];
  const data = [];

  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {

    headers.push($(this).text().toLowerCase());
  });

  // Turn all existing rows into a loopable array
  $rows.each(function () {
    const $td = $(this).find('td');
    const h = {};

    // Use the headers from earlier to name our hash keys
    headers.forEach((header, i) => {

      h[header] = $td.eq(i).text();
    });

    data.push(h);
  });

  // Output the result
  $EXPORT.text(JSON.stringify(data));
});

// PAGINATION
$(document).ready(function () {
  $('#dataTable-1').DataTable();
  $('.dataTables_length').addClass('bs-select');

  const contactForm = $("form#contactForm")
  const timeInput = $("#timeInput");
  const callsignInput = $("#callsignInput");  
  const rstRInput = $("#rstRInput");  
  const rstSInput = $("#rstSInput");
  const frequencyInput = $("#frequencyInput");
  const modeInput = $("#modeInput");
  const nameInput = $("#nameInput");
  const locationInput = $("#locationInput");
  const notesInput = $("#notesInput");

  contactForm.on("submit", function(event) {
    event.preventDefault();
    console.log("submit button pressed")
    var contactData = {
      contactTime: timeInput.val().trim(),
      callsign: callsignInput.val().trim(),
      signalIn: rstRInput.val().trim(),
      signalOut: rstSInput.val().trim(),
      frequency: frequencyInput.val().trim(),
      mde: modeInput.val().trim(),
      contactName: nameInput.val().trim(),
      contactLocation: locationInput.val().trim(),
      contactNotes: notesInput.val().trim()
    }

    saveContact(contactData.contactTime, contactData.callsign, contactData.signalIn, contactData.signalOut, contactData.frequency, contactData.mde, contactData.contactName, contactData.contactLocation, contactData.contactNotes);
  })
  
  function saveContact(contactTime, callsign, signalIn, signalOut, frequency, mde, contactName, contactLocation, contactNotes) {
    $.post("/api/logbook", {
      contactTime: contactTime,
      callsign: callsign,
      signalIn: signalIn,
      signalOut: signalOut,
      frequency: frequency,
      mde: mde,
      contactName: contactName,
      contactLocation: contactLocation,
      contactNotes: contactNotes
    })
      .then(function(data) {
        window.location.replace("/members")
      })
      .catch(handleErr);
  }
  function handleErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
    alert("Error saving. Please try again.")
    window.location.replace("/members"); 
  }
});

