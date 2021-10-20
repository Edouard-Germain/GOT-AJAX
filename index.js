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

    function display(characters){
        characters.forEach(function(character){
            $("#CharaContain").html($("#CharaContain").html()+`
              <div class="CharaGot col-4" >
                 <img src="${character.imageUrl}" class="imgCharaGot">
                 <h4 class="TitleCharaGot">${character.fullName}</h4>
                <p class="TextCharaGot">${character.title}</p> </div>`)
            })
        }
    //   var  input = 
    //     $('.button').click(function(e) {
    //         e.preventDefault()
    //         var filter = characters.filter(function(i){
    //             return  characters.fullName ===      
    //     })
   
})