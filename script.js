window.addEventListener('load',()=> {
    const modal = document.querySelector('#videoModal');
    const iframe = document.querySelector('#videoFrame');
    const containerArray = Array.from(document.querySelectorAll('.thumbnail'));
    containerArray.forEach(container => {
        container.addEventListener('click', (e)=> {      
            iframe.width = "100%";
            iframe.height = "415";
            $(iframe).attr('src',e.currentTarget.dataset.video);
        });
    });
  	if(modal && modal.length>0) {
    	modal.addEventListener('hidden.bs.modal', ()=> {        
        $(iframe).removeAttr('src');
    	})  
    }
  	if(document.querySelector('.close') && document.querySelector('.close').length>0) {
    	document.querySelector('.close').addEventListener('click',()=>{
        $(modal).modal('hide');
    	})  
    }
});