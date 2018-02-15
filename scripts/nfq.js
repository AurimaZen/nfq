$(document).ready(function() {
    /*puslapiavimas*/
$('#pagination-demo').twbsPagination({
totalPages: 5,
// pirmas puslapis starte
startPage: 1,
// daugiausiai matomu puslapiu
visiblePages: 3,
initiateStartPageClick: true,
// template for pagination links
href: false,
// variable name in href template for page number
hrefVariable: '{{number}}',
// Mygtuku pavadinimai
first: 'Pirmas',
prev: 'Atgal',
next: 'Pirmyn',
last: 'Paskutinis',
// carousel-style puslapiavimas
loop: false,
// callback funkcija
onPageClick: function (event, page) {
   $('.page-active').removeClass('page-active');
  $('#page'+page).addClass('page-active');
},
// pagination Classes
paginationClass: 'pagination',
nextClass: 'next',
prevClass: 'prev',
lastClass: 'last',
firstClass: 'first',
pageClass: 'page',
activeClass: 'active',
disabledClass: 'disabled'
});
    /*paieska*/
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
   
});
