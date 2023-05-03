$(function () {
  var start = moment().subtract(29, 'days');
  var end = moment();
  var choose_start_date;
  var choose_end_date;
  var start_dateflag = false;

  row_edit = function (e) {
    console.log('edit');
    e.stopPropagation();
  };

  function deleteDataById(id) {
    let form_data = new FormData();
    form_data.append('method', 'delete');
    form_data.append('data_id', id);
    fetch('http://localhost:8081/TIME_TO_TRAVEL/AnnController', {
      method: 'POST',
      body: new URLSearchParams(form_data),
    })
      .then((r) => r.json())
      .then(function (data) {
        console.log('getdata');
        console.log(data);
        getData();
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      });
  }

  function getData() {
    const tbody = document.querySelector('tbody');
    fetch('http://localhost:8081/TIME_TO_TRAVEL/AnnController')
      .then((r) => r.json())
      .then((d) => {
        if (d == 'no data') {
          tbody.innerHTML = '';
        } else {
          tbody.innerHTML = d
            .map((e) => {
              return (
                `<tr class="row tr"` +
                ` data-id=${e.annID}>` +
                `
          <td class="col-4 td-height">${e.annTitle}</td>
          <td class="col-4 td-height">${e.annSendingTime}</td>
          <td class="col-2" onclick="row_edit(event)"><button class="table-edit-button">編輯</button></td>
          <td class="col-2"><button class="table-delete-button">刪除</button></td>
          <td style='display:none;'>${e.annContent}</td>
          </tr>`
              );
            })
            .join('');
        }
      });
    // const table_row = $('.tbody .tr').on('click', getRowDetail);
  }

  function filterSearch() {
    let form_data = new FormData();
    const tbody = document.querySelector('tbody');
    if ($('input.form-input').val() == '') {
      if (start_dateflag == true) {
        form_data.append('method', 'search-date');
        form_data.append('date-start', choose_start_date);
        form_data.append('date-end', choose_end_date);
        fetch('http://localhost:8081/TIME_TO_TRAVEL/AnnController', {
          method: 'POST',
          body: new URLSearchParams(form_data),
        })
          .then((r) => r.json())
          .then((d) => {
            console.log(d);
            if (d == 'search fail') {
              console.log('search fail');
              tbody.innerHTML = '';
            } else {
              tbody.innerHTML = d
                .map((e) => {
                  return (
                    `<tr class="row tr"` +
                    ` data-id=${e.annID}>` +
                    `
          <td class="col-4 td-height">${e.annTitle}</td>
          <td class="col-4 td-height">${e.annSendingTime}</td>
          <td class="col-2" onclick="row_edit(event)"><button class="table-edit-button">編輯</button></td>
          <td class="col-2"><button class="table-delete-button">刪除</button></td>
          <td style='display:none;'>${e.annContent}</td>
          </tr>`
                  );
                })
                .join('');
            }
          });
      } else {
        console.log('EMPTY');
        getData();
      }
    } else {
      form_data.append('method', 'serach');
      form_data.append('filter', $('input.form-input').val());

      fetch('http://localhost:8081/TIME_TO_TRAVEL/AnnController', {
        method: 'POST',
        body: new URLSearchParams(form_data),
      })
        .then((r) => r.json())
        .then((d) => {
          console.log(d);
          if (d == 'search fail') {
            tbody.innerHTML = '';
          } else {
            tbody.innerHTML = d
              .map((e) => {
                return (
                  `<tr class="row tr"` +
                  ` data-id=${e.annID}>` +
                  `
          <td class="col-4 td-height">${e.annTitle}</td>
          <td class="col-4 td-height">${e.annSendingTime}</td>
          <td class="col-2" onclick="row_edit(event)"><button class="table-edit-button">編輯</button></td>
          <td class="col-2"><button class="table-delete-button">刪除</button></td>
          <td style='display:none;'>${e.annContent}</td>
          </tr>`
                );
              })
              .join('');
          }
        });
    }
  }

  function cb(start, end) {
    console.log('apply');
    start_dateflag = true;
    $('input.form-input').val('');

    // choose_end_date = end.format('YYYY-MM-DD');

    console.log(choose_end_date);
    $('#reportrange span').html(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
    choose_start_date = start.format('YYYY-MM-DD');
    choose_end_date = end.startOf('days').add(1, 'days').format('YYYY-MM-DD');
  }

  $('#reportrange').daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
    },
    cb
  );

  $('.search-button').on('click', filterSearch);
  $('.tbody').on('click', 'button.table-delete-button', function (e) {
    e.stopPropagation();
    deleteDataById($(this).parent().parent().attr('data-id'));
  });

  $('.detail-close').on('click', function () {
    $('.row-detail-float-box').css('display', 'none');
  });

  $('input.form-input').on('change', function (e) {
    start_dateflag = false;
    console.log('change');
  });

  $('input.form-input').on('keyup', function (e) {
    if (e.which == 13) {
      // 按下 Enter 鍵
      start_dateflag = false;
      $('.search-button').click();
    }
  });

  $('.tbody').on('click', 'tr', function (e) {
    console.log('row trig');
    // console.log($(this).children().eq(0).text());
    // console.log($(this).children().eq(4).text());
    $('.ann-title').text($(this).children().eq(0).text());
    $('.ann-time-show').text($(this).children().eq(1).text());
    $('.ann-content').text($(this).children().eq(4).text());
    $('.row-detail-float-box').css('display', 'block');
  });

  cb(start, end);
  getData();
});
