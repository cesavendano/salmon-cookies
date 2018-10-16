'use strict';

function setUpDescriptionFilter() {
    var descriptions;
    var descriptionList = [];
    $('.product').each(function() {
        descriptions = $(this).attr('data-descriptions').split(',');
        descriptions.forEach(function(description) {
            if(descriptionList.indexOf(description) < 0) {
                descriptionList.push(description);
            }
        });
    });
    descriptionList.sort();
    descriptionList.forEach(function(description) {
        var optionTag = `<option value="${description}">${description}</option>`;
        $('#description-filter').append(optionTag);
    });
};

setUpDescriptionFilter();

function handleDescriptionFilter() {
    $('#description-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-descriptions*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};

handleDescriptionFilter();
