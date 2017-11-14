$(document).ready(() => {
  const $sidebarBtn = $('#sidebar-btn')
      , $sidebar    = $('#sidebar');

  $sidebarBtn.click((e) => {
    e.preventDefault();

    $sidebarBtn.toggleClass('active');
    $sidebar.fadeToggle();
  });
});