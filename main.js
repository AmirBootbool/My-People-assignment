const userData = []

const showUsers = function () {

    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function (data) {
            // userData.first = data.results[0].name.first;
            // userData.last = data.results[0].name.last;
            // userData.email = data.results[0].email;
            // userData.id = data.results[0].id.value || 666;
        
            for (user of data.results) {
                let temp = {}
                temp.first = user.name.first;
                temp.last = user.name.last;
                temp.email = user.email;
                temp.id = user.id.value || 666;
                userData.push(temp)
            console.log(userData)
            }

            render()

        }
    });
}



const render = function () {
    
    const source = $("#userData-template").html()
    const template = Handlebars.compile(source)
    const newHtml = template({userData: userData})
$("#results").append(newHtml)

// console.log(userData)

}

$("#getUser").on('click', showUsers)
