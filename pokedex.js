$(function() {
    console.log( "el dom esta cargado" );



$('#buscar').click(function() {
    const enviodato = $('#envioDato').val();
    const enviodatoLower = enviodato.toLowerCase();
 console.log(enviodatoLower);

    $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/${enviodatoLower} `,
        type: 'GET',
        dataType: 'json',
       success: function(response){
            console.log(response);
        }
        
}).done(response);

 
    
    


function response(data){
    console.log('estamos en la funcion Response' );
    var nombrepokemon = data.name;
    var imagenpokemon = data.sprites.front_default;
    var numero_poke= data.order;
    var peso_poke = data.weight;
    var habilidades = $('#habilidades');
    for(var i = 0; i< data.abilities.length ; i++){
        //console.log(data.abilities[i])
        var ability_poke = data.abilities[i].ability.name;
        console.log(ability_poke);
         habilidades.append(`<li><h5> ${ability_poke}</h5></li>`)
      }
    
    var imagen_poke = $('#imagen');
    var nombrepoke =$('#nombre_poke');
    
    console.log(nombrepokemon);
    console.log(imagenpokemon); 
    
   

 //caracteristicas.append(`<h5>${numero_poke} ---${peso_poke} ${ability_poke}`)
    nombrepoke.append(`<h3> Nombre Pokemon: ${nombrepokemon}</h3>`);
    imagen_poke.append(`<img src="${imagenpokemon}" alt="${nombrepokemon}">`)
}
console.log(peso_poke);

});




});