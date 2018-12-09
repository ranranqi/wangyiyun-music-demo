{ 
    $("li").on('click',(e)=>{
        $(e.currentTarget).addClass('active')
        .siblings('.active').removeClass('active')
    })
}
