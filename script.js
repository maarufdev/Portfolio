// We are gonna save the theme mode to the local storage so that
// even if the vistor leave the sight goes back then the previous color thet he/she set
// will be the same

let theme = localStorage.getItem('theme')

if (theme == null){
    setTheme('default')
}

else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('event handler is working:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode == 'default'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode == 'light'){
        document.getElementById('theme-style').href = 'light.css'
    }

    if (mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}