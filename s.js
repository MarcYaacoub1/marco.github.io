document.getElementById('add-document-btn').addEventListener('click', function() {
    const documentName = prompt('أدخل اسم الموضوع:');
    if (documentName) {
        const li = document.createElement('li');
        li.textContent = documentName;
        document.getElementById('document-list').appendChild(li);
    }
});
