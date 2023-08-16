$(document).ready(function () {
    let apiUrl = "http://localhost/night/";

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

        let tablebody = $('#tbody');

        $.each(data, function (index, item) {
            tablebody.append(
                '<tr>' +
                '<td>' + item.assessor + '</td>' +
                '<td>' + item.cliente + '</td>' +
                '<td>' + item.corretora + '</td>' +
                '<td>' + item.produto + '</td>' +
                '<td>' + item.ativo + '</td>' +
                '<td>' + item.receita_ideal + '</td>' +
                '<td>' + item.receita_atual + '</td>' +
                '</tr>'
                );
         })
    

        createSelector('assessor', 0, data);
        createSelector('cliente', 1, data);
        createSelector('corretora', 2, data);
        createSelector('produto', 3, data);
        createSelector('ativo', 4, data);
    })
})

function createSelector(id, orderNumber, data) {
    const selectorsDiv = document.querySelector("#selectors");
    const select = document.createElement('select');
    select.id = id;
    selectorsDiv.appendChild(select);

    select.addEventListener('change', (e) => filterTable(orderNumber, e.target.value));

    let option = document.createElement('option');
    option.value = ``;
    option.text = `selecione ${id}`;
    select.appendChild(option);

    $.each(data, function(index, item) {
        let option = document.createElement('option');
        
        option.value = item[id];
        option.text = item[id];
        select.appendChild(option);
    })

}

function filterTable(columnIndex, value) {
    var tablebody, tr, td, i;
    tablebody = document.querySelector("tbody");

    tr = tablebody.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].children[columnIndex];

      if (td) {
        if (value === "" || td.innerText === value) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


$(document).ready(function () {
    let questionamento = $('#questionamento');
    let verificacao = $('#verificacao');
    let novo_questionamento = $('#novo-questionamento');
    let resposta = $('#resposta');
    let salvar = $('#salvar');
    let modal = $("#modal");
    let fechar_modal = $("#fechar-modal");


    verificacao.css("background-color","rgb(197, 57, 57)");
    resposta.css("display", "none");

    verificacao.click(function () {
        verificacao.css("background-color","rgb(197, 57, 57)");
        questionamento.css("background","none");
        novo_questionamento.css("display", "block")
        resposta.css("display", "none");

    })

    questionamento.click(function () {
        questionamento.css("background-color","rgb(197, 57, 57)");
        verificacao.css("background","none");
        novo_questionamento.css("display", "none")
        resposta.css("display", "block");

    })


    novo_questionamento.click(function() {
        modal.css("display", "block")
    });

    resposta.click(function() {
        modal.css("display", "block")
    })

    salvar.click(function() {
        modal.css("display", "none")
    })
    

    fechar_modal.click(function () {
        modal.css("display", "none");
    })
});

// $(document).ready(function () {
//     let form  = $('#form');

//     //action="http://localhost/night/" 

//     form.submit((e) => {
//         e.preventDefault();
//         let formData = getFormData(form);
//         fetchPost(formData);

//     })

//     function getFormData(form){
//         let unindexed_array = form.serializeArray();
//         let indexed_array = {};
    
//         $.map(unindexed_array, function(n, i){
//             indexed_array[n['name']] = n['value'];
//         });
    
//         return indexed_array;
//     }

//     async function fetchPost(formData) {
//         let res = await fetch("http://localhost/night/", {
//             method: "POST",
//             headers: {
//                 "content-type":"application/json" 
//             },
//             body: formData
//         });

//         let data = await res.json()
//         console.log(data);
//     }


// })