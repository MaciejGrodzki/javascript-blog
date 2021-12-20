'use strict';

// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
     
    /* [DONE]remove class 'active' from all article links  */
    
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement', clickedElement);
    clickedElement.classList.add('active');
    
    /* [DONE]remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
    
    /* [DONE] get 'href' attribute from the clicked link */
    
    const articleSelector = clickedElement.getAttribute('href');
       console.log('articleSelector', articleSelector);
    
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
       console.log("targetArticle", targetArticle)
        
    /* [DONE] add class 'active' to the correct article */
    
    targetArticle.classList.add('active');
}
 
const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

/* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = "";
        console.log(titleList);

/* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for(let article of articles){
        const articleId = article.getAttribute('id');
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log('linkHTML',linkHTML);
        // titleList.insertAdjacentHTML('beforeend', linkHTML);
        html = html + linkHTML;
    }
   titleList.innerHTML = html;
   
   const links = document.querySelectorAll('.titles a');
  
   for(let link of links){
       link.addEventListener('click', titleClickHandler);
   }
   
/* get the article id */

/* find the title element */

/* get the title from the title element */

/* create HTML of the link */

/* insert link into titleList */

}
generateTitleLinks();
