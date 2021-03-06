'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
} );

'use strict';

$('#search').on('submit', function(event) {
    event.preventDefault();
    $('.product').hide();
    var lookup = $('#lookup').val().toLowerCase();
    product_list.forEach(function(product) {
        if(product.title.toLowerCase().indexOf(lookup) >= 0) {
            $(`.product[data-id="${product.product_id}"]`).fadeIn();
        }
    });
});