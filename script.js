document.addEventListener('DOMContentLoaded', () => {
    // Text Changer Functionality
    const textBtn = document.getElementById('text-btn');
    const changeableText = document.getElementById('changeable-text');
    const originalText = changeableText.textContent;
    
    textBtn.addEventListener('click', () => {
        changeableText.textContent = changeableText.textContent === originalText 
            ? 'Text successfully changed!' 
            : originalText;
    });

    // Style Modifier Functionality
    const styleBtn = document.getElementById('style-btn');
    const styleBox = document.getElementById('style-box');
    
    styleBtn.addEventListener('click', () => {
        styleBox.style.backgroundColor = styleBox.style.backgroundColor === 'rgb(220, 252, 231)' 
            ? '#e2e8f0' 
            : 'rgb(220, 252, 231)';
        
        styleBox.style.color = styleBox.style.color === 'rgb(22, 163, 74)' 
            ? 'inherit' 
            : 'rgb(22, 163, 74)';
        
        styleBox.style.fontWeight = styleBox.style.fontWeight === 'bold' 
            ? 'normal' 
            : 'bold';
    });

    // Element Manager Functionality
    const addBtn = document.getElementById('add-btn');
    const removeBtn = document.getElementById('remove-btn');
    const elementContainer = document.getElementById('element-container');
    let itemCount = 1;
    
    addBtn.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('div');
        newItem.className = 'list-item';
        newItem.textContent = `Item ${itemCount}`;
        elementContainer.appendChild(newItem);
    });
    
    removeBtn.addEventListener('click', () => {
        if (elementContainer.children.length > 1) {
            elementContainer.removeChild(elementContainer.lastElementChild);
            itemCount--;
        } else {
            alert('You must keep at least one item!');
        }
    });
});
