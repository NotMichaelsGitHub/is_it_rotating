$(document).ready(function(){
    var sets = ['sm5','sm6','sm7', 'sm75', 'sm8','sm9', 'det1', 'sm10'];

    var thing = sets.map(function (set) {
        return $.ajax({
            url: 'http://notmichaelsgithub.github.io/is_it_rotating/en_US/' + set + ".json/",
            dataType: 'json',
            method: 'GET'
        })
    });

    $.when.apply(null, thing)
        .then(function (value) {
            var carddata = Array.prototype.slice.call(arguments);

            console.log(carddata[0][0]);

            doIt(carddata[0][0]);
            doIt(carddata[1][0]);
            doIt(carddata[2][0]);
            doIt(carddata[3][0]);
            doIt(carddata[4][0]);
            doIt(carddata[5][0]);
            doIt(carddata[6][0]);
            doIt(carddata[7][0]);
        });


    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function doIt(asdf) {

    var json = asdf;
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td  class=\"col-sm-2\">" + json[i].name + "</td>");

        // 'sm5','sm6','sm7', 'sm75', 'sm8','sm9', 'det1', 'sm10'
        var temp = "";
        if(json[i].setCode == 'sm5'){
            temp = 'Ultra Prism'
        }
        else if(json[i].setCode == 'sm6'){
            temp = 'Forbidden Light'
        }
        else if(json[i].setCode == 'sm7'){
            temp = 'Celestial Storm'
        }
        else if(json[i].setCode == 'sm75'){
            temp = 'Dragon Majesty'
        }
        else if(json[i].setCode == 'sm8'){
            temp = 'Lost Thunder'
        }
        else if(json[i].setCode == 'sm9'){
            temp = 'Team Up'
        }
        else if(json[i].setCode == 'det1'){
            temp = 'Detective Pikachu'
        }
        else if(json[i].setCode == 'sm10'){
            temp = 'Unbroken Bonds'
        }
        tr.append("<td class=\"col-sm-1\">" + temp + "</td>");

        tr.append("<td class=\"col-sm-1\">" + json[i].supertype + "</td>");
        tr.append("<td class=\"col-sm-1\">" + json[i].subtype + "</td>");
        tr.append("<td class=\"col-sm-6 text-center\"><image src='https://images.pokemontcg.io/"+ json[i].setCode+"/"+ json[i].number +"_hires.png' style='width: 125px; height: 175px'></image></td>");
        $('table').append(tr);
    }

}
