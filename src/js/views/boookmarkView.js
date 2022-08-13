import View from "./View.js";
import previewView  from "./previewView.js";
import icons from 'url:../../img/icons.svg';


class bookmarkView extends View{
_parentEl= document.querySelector('.bookmarks__list');
_errorMessage = ' there is no bookmarks yet :D';
    _message='';   


addHandlerRender(handler){
    window.addEventListener('load',handler)
}

_generateMarkup(){
 return this._data.map(bookmark=> previewView.render(bookmark,false)).join('')

  
}


}

export default new bookmarkView();