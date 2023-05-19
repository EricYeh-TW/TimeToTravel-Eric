$(function () {
  function getSessionData() {
    var ann = JSON.parse(sessionStorage.getItem('ann'));
    $('h4').text(ann.ann_time);
    $('h3').text(ann.ann_title);
    $('.content-bg').text(ann.ann_content);
  }

  $('.back-btn').on('click', function (e) {
    history.back();
  });

  getSessionData();
});
