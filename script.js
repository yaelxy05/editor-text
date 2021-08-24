console.log('%c' + 'Module script.js chargé', 'color: #0bf; font-size: 1rem; background-color:#fff');
const app = {

    init: function() {
        const textArea = document.querySelector('#text_area');
        textArea.addEventListener('input', app.handleFocus);
        app.handlebutton();
    },

    handleFocus: function(evt) {
        evt.preventDefault();
        
        app.focusTarget = evt.currentTarget.value;
        console.log(app.focusTarget);
        // on écoute le select bold 
        const boldSelect = document.querySelector('#select_gras');
        boldSelect.addEventListener('change', app.handleBold);
        // on écoute le select size
        const sizeSelect = document.querySelector('#size_input');
        sizeSelect.addEventListener('change', app.handleSize);
        // on écoute le select police
        const policeSelect = document.querySelector('#police_style');
        policeSelect.addEventListener('change', app.handlePolice);
        // on écoute le select color
        const colorSelect = document.querySelector('#color_text');
        colorSelect.addEventListener('change', app.handleColor);  
    },
    handleBold: function(evt) {
        //fonction qui récupère la valeur de select gras
        app.boldTarget = evt.currentTarget.value;
    },
    handleSize:function(evt) {
        //fonction qui récupère la valeur d'input size
        app.sizeTarget =  evt.currentTarget.value;
    },
    handlePolice:function(evt) {
        //fonction qui récupère la valeur de select police
        app.policeTarget = evt.currentTarget.value;
    },
    handleColor:function(evt) {
        //fonction qui récupère la valeur de select color
        app.colorTarget = evt.currentTarget.value;
    },

    handlebutton:function() {
        const buttonTarget = document.querySelector('.button_editor');
        buttonTarget.addEventListener('click', app.previewText); 
    },

    previewText:function(evt) {
        evt.preventDefault();
        const displayText = document.querySelector('.text_view-p');
        
        displayText.style.fontWeight = app.boldTarget;
        displayText.style.fontSize = app.sizeTarget + 'px';
        displayText.style.fontFamily = app.policeTarget;
        displayText.style.color = app.colorTarget;

        if (app.focusTarget == undefined) {
            displayText.innerHTML = 'Vous avez oublier de taper un texte !!'
            displayText.style.fontWeight = 'bold';
            displayText.style.color = 'red';
        }
        else {
            displayText.innerHTML = app.focusTarget;
        }
    }
}
document.addEventListener('DOMContentLoaded', app.init);