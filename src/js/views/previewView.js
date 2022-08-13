import View from "./View.js";
import icons from 'url:../../img/icons.svg';


class previewview extends View{
_parentEl= '';


 

_generateMarkup(){
    return ` <li class="preview">
<a class="preview__link preview__link" href="#${this._data.id}">
  <figure class="preview__fig"> 
    <img src="${this._data.image}" alt="${this._data.title}" />
  </figure>
  <div class="preview__data">
    <h4 class="preview__title">${this._data.title}</h4>
    <p class="preview__publisher">${this._data.publisher}</p>
   
  
  <div class="preview__user-generated ${this._data.key ? '': 'hidden'}">
  <svg>
    <use href="${icons}#icon-user"></use>
  </svg>
</div>
</div> 
</a>
</li>`
}
}

export default new previewview();