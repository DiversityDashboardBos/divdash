$(function() {
    // Remove Search if user Resets Form or hits Escape!
    $('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
        console.log(event.currentTarget);
        if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
            $(event.currentTarget).attr('type') == 'reset') {
            closeSearch();
        }
    });

    function closeSearch() {
        var $form = $('.navbar-collapse form[role="search"].active')
        $form.find('input').val('');
        $form.removeClass('active');
    }

    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $form.addClass('active');
        $input.focus();

    });
    // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
    // if your form is ajax remember to call `closeSearch()` to close the search container
    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $('#showSearchTerm').text($input.val());
        closeSearch()
    });
    // Chart.js 
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                    label: 'Event1',
                    // Y axis

                    backgroundColor: "rgba(153,255,51,0.6)",
                    pointStrokeColor: "red",
                    data: [114, 255, 455, 414, 599, 605, 500]

                }, {
                    label: 'Event2',
                    backgroundColor: "rgba(255,153,0,0.6)",
                    data: [300, 555, 655, 714, 899, 905, 1000]
                },
                {
                    label: 'Event3',
                    backgroundColor: "rgb(219, 116, 224)",
                    data: [314, 455, 755, 814, 999, 905, 1000]

                }
            ]
        }
    });

    var ctx1 = document.getElementById("myChart2").getContext('2d');
    var myChart1 = new Chart(ctx1, {
        type: 'polarArea',
        data: {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            datasets: [{
                backgroundColor: [
                    "#2ecc71",
                    "#3498db",
                    "#95a5a6",
                    "#9b59b6",
                    "#f1c40f",
                    "#e74c3c",
                    "#34495e"
                ],
                data: [12, 19, 3, 17, 28, 24, 7]
            }]
        }
    });
    var ctx2 = document.getElementById("myChart3").getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ["M", "T", "W", "R", "F", "S", "S"],
            datasets: [{
                label: 'Training',
                data: [12, 19, 3, 17, 28, 24, 7],
                backgroundColor: "rgba(193, 54, 144,0.5)"
            }, {
                label: 'Event',
                data: [30, 29, 5, 5, 20, 3, 10],
                backgroundColor: "rgba(115, 224, 224,1)"
            }]
        }
    });

});