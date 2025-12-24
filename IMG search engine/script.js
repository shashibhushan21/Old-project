
const accessKey = "Z5ZFbOpV0jTRwJhByItm14Fzu5xerLKbFsdzOaM-kJQ";
let searchForm = document.getElementById('search-form');
let searchBox = document.getElementById('search-box');
const searchResult = document.getElementById("search-result");
let showhMoreBtn= document.getElementById('show-more-btn');
// console.log(searchResult);

//Access key :- Z5ZFbOpV0jTRwJhByItm14Fzu5xerLKbFsdzOaM-kJQ

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;  
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=24`;

    const responce =  await fetch(url);
    const data = await responce.json();

    // console.log(data);
    const results = data.results;
    if(page ===1){
        searchResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement ('a');
        imageLink.href = result.links.html;
        imageLink.target =  "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        console.log(searchResult);
    })
    showhMoreBtn.style.display = "block";

}
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showhMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})


// document.addEventListener('DOMContentLoaded', () => {
//     const accessKey = "Z5ZFbOpV0jTRwJhByItm14Fzu5xerLKbFsdzOaM-kJQ";
//     let searchForm = document.getElementById('search-form');
//     let searchBox = document.getElementById('search-box');
//     const searchResult = document.getElementById("search-result");
//     let page = 1;

//     async function searchImages() {
//         keyword = searchBox.value;  
//         const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             // Clear previous results
//             searchResult.innerHTML = ''; 

//             const results = data.results;

//             if (results.length === 0) {
//                 searchResult.innerHTML = '<p>No images found.</p>';
//                 return;
//             }

//             results.map((result) => {
//                 const image = document.createElement('img');
//                 image.src = result.urls.small;
//                 const imageLink = document.createElement('a');
//                 imageLink.href = result.links.html;
//                 imageLink.target = "_blank";

//                 imageLink.appendChild(image);
//                 searchResult.appendChild(imageLink);
//             });
//         } catch (error) {
//             console.error('Error fetching images:', error);
//             searchResult.innerHTML = '<p>There was an error fetching images.</p>';
//         }
//     }

//     searchForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         page = 1;
//         searchImages();
//     });
// });