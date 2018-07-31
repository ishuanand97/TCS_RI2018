$("#state").scroll(function (event) {
    event.preventDefault();
    var target = "#legend-full-x";
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
});

function myFunction() {
    var x = document.getElementById("mySelect").value;
    // let newval = (Math.random() * 100).toFixed(2);
    // var newVal = newval / 100 * 180;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var javaObj = JSON.parse(xhttp.response);
            var newval = parseFloat(javaObj[x]).toFixed(2);
            document.getElementById("demo").innerHTML = newval;
            s = newval;
            var z;
            if (s != NaN) {
                if (s > 0 && s < 50) {
                    z = "Good";
                    $('#severity').css("color", "#009966");
                } else if (s > 51 && s < 100) {
                    z = "Satisfactory";
                    $('#severity').css("color", "#ffde33");
                } else if (s > 101 & s < 200) {
                    z = "Moderately polluted";
                    $('#severity').css("color", "#ff9933");
                } else if (s > 201 && s < 300) {
                    z = "Poor";
                    $('#severity').css("color", "#cc0033");
                } else if (s > 301 && s < 400) {
                    z = "Very poor";
                    $('#severity').css("color", "#660099");
                } else {
                    z = "Severe";
                    $('#severity').css("color", "#7e0023");
                }
                document.getElementById("severity").innerHTML = z;
            }
            var dVal = newval / 5;
            var newVal = dVal * 1.8 - 45;
            $('.circle-inner, .gauge-copy').css({
                'transform': 'rotate(' + newVal + 'deg)'
            });
            $('.gauge-copy').css({
                'transform': 'translate(-50%, -50%) rotate(' + dVal * 1.8 + 'deg)'
            });
            $('.percentage').text(dVal.toFixed(2) + ' %');

            if (dVal > 20) {
                if (document.querySelector('#clouds').children[0].classList.contains("cloud-w")) {
                    var len = document.querySelector('#clouds').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('#clouds').children[i].classList.toggle('cloud-w');
                        document.querySelector('#clouds').children[i].classList.toggle('cloud-b');
                    }

                    var len = document.querySelector('.small-mountains').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('.small-mountains').children[i].classList.toggle('tri-p');
                        document.querySelector('.small-mountains').children[i].classList.toggle('tri-np');
                    }

                    var len = document.querySelector('.tall-mountains').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-p');
                        document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-np');
                    }

                    $('.landing').css("background", " #BBCCDD");
                    $('.landing').css("background", "linear-gradient( 158deg, rgba(190, 231, 232, 1) 0%, rgb(136, 163, 180) 55%)");
                    document.querySelector('.ground').classList.toggle('ground-np');
                    document.querySelector('.ground').classList.toggle('ground-p');

                }
            }


            if (dVal < 20) {
                if (document.querySelector('#clouds').children[0].classList.contains("cloud-b")) {
                    var len = document.querySelector('#clouds').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('#clouds').children[i].classList.toggle('cloud-w');
                        document.querySelector('#clouds').children[i].classList.toggle('cloud-b');
                    }
                    var len = document.querySelector('.small-mountains').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('.small-mountains').children[i].classList.toggle('tri-p');
                        document.querySelector('.small-mountains').children[i].classList.toggle('tri-np');
                    }

                    var len = document.querySelector('.tall-mountains').children.length;
                    for (var i = 0; i < len; i++) {
                        document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-p');
                        document.querySelector('.tall-mountains').children[i].classList.toggle('tri2-np');
                    }

                    $('.landing').css("background", "rgb(190, 231, 232)");
                    $('.landing').css("background", "linear-gradient( 158deg, rgba(190, 231, 232, 1) 0%, rgba(255, 212, 201, 1) 55%)");
                    document.querySelector('.ground').classList.toggle('ground-np');
                    document.querySelector('.ground').classList.toggle('ground-p');

                }
            }
        }
    }
    xhttp.open("GET", "file.json", true);
    xhttp.send();
}