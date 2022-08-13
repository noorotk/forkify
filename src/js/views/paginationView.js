import View from './View.js';
import icons from 'url:../../img/icons.svg';


 class PaginationView extends View{
    _parentEl = document.querySelector('.pagination');


addHandlerclick(handler){

    this._parentEl.addEventListener('click',function(e){
        
        const btn = e.target.closest('.btn--inline');
        if(!btn) return;
        
        const gotopage = +btn.dataset.goto;
        

        handler(gotopage);
    })
}


    _generateMarkup(){
const currentpage = this._data.page;
        //1
        const NumerOfPages = Math.ceil(this._data.results.length / this._data.resultsperpage);
 

    if(currentpage ===1 && NumerOfPages >1){
return `<button data-goto="${currentpage+1}" class="btn--inline pagination__btn--next">
<span>Page ${currentpage+1}</span>
<svg class="search__icon">
  <use href="${icons}#icon-arrow-right"></use>
</svg>
</button>`
    }

    if(currentpage ===NumerOfPages && NumerOfPages >1){
return `<button data-goto="${currentpage-1}" class="btn--inline pagination__btn--prev">
<svg class="search__icon">
  <use href="${icons}#icon-arrow-left"></use>
</svg>
<span>Page ${currentpage-1}</span>
</button>
`
     
    } 

    if(currentpage <NumerOfPages){
        return `<button data-goto="${currentpage-1}" class="btn--inline pagination__btn--prev">
<svg class="search__icon">
  <use href="${icons}#icon-arrow-left"></use>
</svg>
<span>Page ${currentpage-1}</span>
</button>
<button data-goto="${currentpage+1}" class="btn--inline pagination__btn--next">
<span>Page ${currentpage+1}</span>
<svg class="search__icon">
  <use href="${icons}#icon-arrow-right"></use>
</svg>
</button>
`

    }
    return ''

    }
}

export default new PaginationView();
