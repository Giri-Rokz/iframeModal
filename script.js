window.addEventListener('load',()=> {
    const modal = document.querySelector('#videoModal');
    modal.addEventListener('shown.bs.modal', ()=> {        
        var iframe = document.querySelector('#videoFrame');
        iframe.width = "100%";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/u-vrdPtZVXc";
    });
    modal.addEventListener('hidden.bs.modal', ()=> {        
        $('#videoFrame').removeAttr('src');
    })
});