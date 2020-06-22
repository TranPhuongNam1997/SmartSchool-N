$(document).ready(function () {
    // jQuery('.datetimepicker-msb').datetimepicker({
    //     format: 'd/m/Y H:m'
    // });

    jQuery('.datepicker-msb-none').datetimepicker({
        timepicker:false,
        format: 'd/m/Y',
    });
    $('.datepicker-msb-none').focus(function () {
        $(this).addClass('datepicker-msb');
        jQuery('.datepicker-msb-none.datepicker-msb').datetimepicker({
            timepicker:false,
            format: 'd/m/Y',
            mask: '39/19/9999',
        });
    });


    // $.datetimepicker.setLocale('vi');

    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        "autoApply": true
    },
    function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
