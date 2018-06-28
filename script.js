$('#form1').submit(function(event){
    createTables('https://p848p29pz3.execute-api.us-west-2.amazonaws.com/test/users', event)
});

$('#form3').submit(function(event){
    createTables('https://p848p29pz3.execute-api.us-west-2.amazonaws.com/test/posts', event)
});

$('#form2').submit(function(event){
    createTables('https://p848p29pz3.execute-api.us-west-2.amazonaws.com/test/threads', event)
});

function createTables(myurl, event){
    $('#table-head').empty();
    $('#table-body').empty();
    console.log('hi');
    event.preventDefault();
    $.ajax({
        url:myurl,
        type:'GET',
        dataType:'json',
        success:function(data){
            datakeys = Object.keys(data[0]);
            tableHeaderMarkup  = "<tr>"
            for(var j=0; j<datakeys.length; j++)
                tableHeaderMarkup +="<th>"+datakeys[j]+"</th>";
            tableHeaderMarkup += "</tr>";

            $('#table').append('<thead id="table-head"></thead>');
            $('#table-head').append(tableHeaderMarkup);
            $('#table').append('<tbody id="table-body"></tbody>');

            for(var i=0; i < data.length; i++){
                var tableBodyMarkup = "<tr>";
                $.each(data[i], function(key,element){
                    tableBodyMarkup += "<th>"+element+"</th>";
                })
                tableBodyMarkup += "</th>";
                $('#table-body').append(tableBodyMarkup);
            }
        }
    })
}