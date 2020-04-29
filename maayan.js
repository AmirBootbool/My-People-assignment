const renderApts = function (apartments) {
    $("#results").empty()
    const source = $('#apartment-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({
        apartments: apartments
    });
    $('#results').append(newHTML);
}
