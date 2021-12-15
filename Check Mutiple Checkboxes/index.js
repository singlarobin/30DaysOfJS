const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = e => {
    let inBetween = false;
    if(e.shiftKey && e.target.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === lastChecked || checkbox === e.target){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = e.target;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));