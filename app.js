// Get input Element
let filterInput = document.getElementById('filterInput');

//Add Event Listener
filterInput.addEventListener('keyup', filternames);

function filternames() {
    //Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //get names ul
    let ul = document.getElementById('names');

    //get lis from ul
    let li = document.querySelectorAll('li.collection-item');

    // Looop through collection items lis
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        //if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';
        }
    }
}