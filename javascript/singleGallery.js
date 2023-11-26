$(document).ready(function()
    {
        let searchParams = new URLSearchParams(window.location.search);
        console.log(searchParams); 
        if(searchParams.has('id'))
        {

            $.getJSON('/javascript/galleries.json',function(data)
            {
                let galleryToDisplay = data[searchParams.get('id')];
                $('#pageContent h1').text(galleryToDisplay.title);
                let rootUl = $('#pageContent ul');
                $.each(galleryToDisplay.images,function(index , image){
                    let img = $(`<li><img src="/images/${image}"></li>`).click(showSinglePict).appendTo(rootUl);

                });
            });
        }
         else {
            window.location.pathname = "/html/galleries.html";
        }
    });
    function showSinglePict(e){
        $('#galleryContainer').click(hideImg).addClass('visible').children('img').attr('src',e.target.src);
    }
    function hideImg(ev){
        $('#galleryContainer').removeClass('visible');
    }