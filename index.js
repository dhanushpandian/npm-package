#!/usr/bin/env node

// const yargs=require("yargs");
// const { argv } = yargs(process.argv);

//console.log(process.argv);
const inquirer =require("inquirer");

console.log("Main Charecters M-C-loud");

const poke = async (pokemonName)=>{
    const res=await fetch(
        'https://pokeapi.co/api/v2/pokemon/'+pokemonName
    );
    const pokemon =await res.json();
    const moves =pokemon.moves.map(({move})=>move.name);
    //const moves = pokemon.results.map(({ move }) => move.name);
    console.log(moves.slice(0,5));   
};

const prompt=inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter a pokemon Name?"
}]).then((answers)=>{
    const pokemon=answers.pokemon;
    poke(pokemon)
})


//poke(argv.pokemon);