var dataArray=[]

$(function(){
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            dataArray.push(data)
            // console.log('#2');
            // console.log(data);
            console.log(dataArray)
        }
    })
})
   
function display(dataArray){
        //Insérer code jQuery grille vide//
    // $(".container").html()
    $(function(){
        dataArray.forEach(function(data, i){
            $(".container").html(`<div class="CharaGot">
            <img src="${data.image}" class="imgCharaGot">
            <h4 class="TitleCharaGot">${data.firstName} ${data.lastName}</h4>
            <p class="TextCharaGot">${data.title}</p>`)
        })
    })
        
        display()
       
}
        
