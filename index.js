$(function(){
    var characters =[]
    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
          
            characters = data   
            console.log(characters)  
            display(characters)
       
        }
        
    })

    function display(){
        characters.forEach(function(i){
            $(".container").html(".container") +
                $(".container").html(`<div class="CharaGot">
                 <img src="${characters.imageUrl}" class="imgCharaGot">
                 <h4 class="TitleCharaGot">${characters.fullName}</h4>
                <p class="TextCharaGot">${characters.title}</p> </div>`)
            })
        }
      
        $('.button').click(function(e) {
            e.preventDefault()
            var filter = characters.filter(function(i){
                return  characters.fullName === /// formulaire     
        })
   
})