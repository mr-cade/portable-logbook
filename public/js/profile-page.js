$(document).ready(() => {
    new WOW().init();
  });

  // MDB Lightbox Init
  $(function () {
    $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
  });

  const $tableID = $('#table');
 const $BTN = $('#export-btn');
 const $EXPORT = $('#export');

 const newTr = `
 <tr class="hide">
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
    <td class="pt-3-half" contenteditable="true"></td>
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
  });

  $(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function (data) {
      $(".nav-signup").text(data.email);
    });
    $.get("api/user_data").then(function (data) {
      console.log(data)
      if (data.id) {
        $(".nav-login").text("Logout")
        $(".nav-login").attr("href", "/logout");
      }
    }
    )
  });
  // .ajax post w/object
  // $.ajax(/api/users).then()