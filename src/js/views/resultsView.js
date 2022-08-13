import View from "./View.js";
import previewView from "./previewView.js";
import icons from 'url:../../img/icons.svg';


class resultView extends View{
_parentEl= document.querySelector('.results');
_errorMessage = ' we could not find that recipe. please try another one!';
    _message='';   

_generateMarkup(){
  return this._data.map(result=> previewView.render(result,false)).join('')
 
   
 }
}

export default new resultView();