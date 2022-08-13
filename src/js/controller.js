import * as model from './model.js'
import { MODAL_CLOSE_SEC } from './config.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import boookmarkView from './views/boookmarkView.js';
import addRecipeView from './views/addRecipeView.js';


// if(module.hot){

//   module.hot.accept();
// }
const controlrecipes = async function(){
  try{


    const id = window.location.hash.slice(1);
    if(!id) return;


    recipeView.renderingSpinner();

await model.loadrecipe(id);



recipeView.render(model.state.recipe);


   
  } catch (err){
    recipeView.renderError(`${err} :D`)
  }
};

const controllSearchResult = async function(){
  try{
    resultView.renderingSpinner();
    const query = searchView.getQuery();

    if(!query) return;
    await model.loadsearchResult(query);


    
    resultView.render(model.getSearchREsultsPage());
    
    paginationView.render(model.state.search);
    
   }catch (err){
    console.log(err)
   }
};

const controllPaginatino = function(gotopage){
  resultView.render(model.getSearchREsultsPage(gotopage));
    
    paginationView.render(model.state.search);
} 

const controllserving = function(newserving){
  model.updateServing(newserving)
  recipeView.update(model.state.recipe); 
}


const controlAddBookmark = function(){

  
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } 
  else {model.deleteBookmark(model.state.recipe.id)} 
  
  recipeView.update(model.state.recipe)

  boookmarkView.render(model.state.bookmarks)
};

const controlbookmarks = function(){
  boookmarkView.render(model.state.bookmarks)
}

const controlAddRecipe =async function(newRecipe){
  try{

    addRecipeView.renderingSpinner();
    await model.uploadRecipe(newRecipe)
    console.log(model.state.recipe)

    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
boookmarkView.render(model.state.bookmarks);

window.history.pushState(null,'',`#${model.state.recipe.id}`);


    setTimeout(function(){
      addRecipeView.toggleWindow();
    },MODAL_CLOSE_SEC*1000)
  }catch(err){
  console.error('err',err);
  addRecipeView.renderError(err.message)
  }
}
 
const init = function(){
  boookmarkView.addHandlerRender(controlbookmarks); 
  recipeView.addHandlerServing(controllserving);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
addRecipeView.addHandlerUpload(controlAddRecipe);
  recipeView.addHandlerRender(controlrecipes);
  searchView.addHandlerSearch(controllSearchResult);
  paginationView.addHandlerclick(controllPaginatino);
  
};
 
init();