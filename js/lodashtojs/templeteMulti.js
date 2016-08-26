var test = [
    {
        id: 3,
        image_url: 'qqq'
    },
    {
        id: 4,
        image_url: 'xxx'
    },
    {
        id: 5,
        image_url: 'koko'
    }
];

var template = function(data) {
    var $tempTarget = $('[data-target-cart]');
    for(var key in data){
        var temp =  `<li id="${data[key].id}"><img src="${data[key].image_url}"></li>` ;
        $tempTarget.append(temp);
    }
};