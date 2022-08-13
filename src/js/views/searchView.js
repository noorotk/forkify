import { state } from "../model.js";

class searchView {

_parentEl = document.querySelector('.search');

getQuery(){
    const query= this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
}
_clearInput(){
    this._parentEl.querySelector('.search__field').value='';
}
addHandlerSearch (handler){
    this._parentEl.addEventListener('submit',function(e){
        e.preventDefault();
       state.search.page=1;
        handler();
    }); 
}
}

export default new searchView();