$(document).ready(function(){
    let footnotes = $('span[data-footnote]');
    if(footnotes){
        let footnoteDisplay = $(`<ol></ol>`);
        footnotes.each(function(index , element){
            let current = $(element);
            let footNoteText = $(current).data('footnote');
            current.css({textDecoration:"underline dashed"}).after(`<a id="footnote-anchor-[${index+1}]" href="#footnote-[${index+1}]"><sup>[${index+1}]</sup></a>`);
            $(`<li id="footnote-[${index+1}]">${footNoteText}</li>`).append(`<a href="#footnote-anchor-[${index+1}]">[Retour]</a>`).appendTo(footnoteDisplay);
        });
        footnoteDisplay.appendTo("main.about div").wrap("<section id='displayContainer' class='dis'></section>");
    }
});