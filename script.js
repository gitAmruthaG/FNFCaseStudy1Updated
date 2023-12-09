$(document).ready(function () {
   //Adding active class to first tab and show
   $('.tabs a:first').addClass('active');
   $('.tabs a:first').show();
   //Hiding tab contents those are not first element of tabcontainer
   $('.tabcontent').not(':first').hide();

   //Click event on tab
   $(document).on('click', '.tabs a', function () {
      //Adding active class to clicked tab and removing same class from it's siblings
      $(this).addClass('active').siblings().removeClass('active');
      //Hiding all tab contents
      $('.tabcontent').hide();
      // showing the clicked tab's content
      $($(this).attr('href')).show();
      return false;
   });
});


$(document).ready(function () {

   $('.items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
         breakpoint: 480,
         settings: {

            slidesToShow: 1,
            slidesToScroll: 3
         }
      }]
   });
});

$(function () {
   $('.vtabs nav a').on('click', function () {
      show_content($(this).index());
   });

   show_content(0);

   function show_content(index) {
      // Make the content visible
      $('.vtabs .vcontent.visible').removeClass('visible');
      $('.vtabs .vcontent:nth-of-type(' + (index + 1) + ')').addClass('visible');

      // Set the tab to selected
      $('.vtabs nav a.selected').removeClass('selected');
      $('.vtabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');
   }
});
$(document).ready(function () {
   //Adding active class to first tab and show
   $('.ctabs a:first').addClass('active');
   $('.ctabs a:first').show();
   //Hiding tab contents those are not first element of tabcontainer
   $('.ctabcontent').not(':first').hide();

   //Click event on tab
   $(document).on('click', '.ctabs a', function () {
      //Adding active class to clicked tab and removing same class from it's siblings
      $(this).addClass('active').siblings().removeClass('active');
      //Hiding all tab contents
      $('.ctabcontent').hide();
      // showing the clicked tab's content
      $($(this).attr('href')).show();
      return false;
   });
});