'use strict';

function setUpBuckleFilter() {
    var buckle;
    var buckleList = [];
    $('.product').each(function() {
        buckle = $(this).attr('data-buckle');
        if(buckle && buckleList.indexOf(buckle) < 0) {
            buckleList.push(buckle);
        }
    });
    buckleList.sort();
    console.log(buckleList);
    buckleList.forEach(function(buckle) {
        var optionTag = `<option value="${buckle}">${buckle}</option>`;
        $('#buckle-filter').append(optionTag);
    });
};
setUpBuckleFilter();

function handleBuckleFilter() {
    $('#buckle-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-buckle="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};

handleBuckleFilter();