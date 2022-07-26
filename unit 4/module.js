function random_numbers(n) {
    var random = [];
    while (random.length < n) {
        var r = Math.ceil(Math.random() * 150) + 5;
        if (random.indexOf(r) === -1) random.push(r);
    }
    for(var i=0;i<n;i++){
        console.log(random[i]);
    }
};

exports.rn = random_numbers;
