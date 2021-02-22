//**************************************** SECTIONS
home = document.querySelector(".home")
designs = document.querySelector(".designs")
webPages = document.querySelector(".webPages")
apps = document.querySelector(".apps")
animations = document.querySelector(".animations")
contacts = document.querySelector(".contacts")

//**************************************** SECTIONS LINKS
linkHome = document.querySelector(".homeMenu")
linkDesigns = document.querySelector(".designsMenu")
linkWebPages = document.querySelector(".webPagesMenu")
linkApps = document.querySelector(".appsMenu")
linkAnimations = document.querySelector(".animationsMenu")
linkContacts = document.querySelector(".contactsMenu")

//**************************************** EVENT FOR LINKS
linkHome.addEventListener('click',deployHome)
linkDesigns.addEventListener('click',deployDesign)
linkWebPages.addEventListener('click',deployWebPages)
linkApps.addEventListener('click',deployApps)
linkAnimations.addEventListener('click',deployAnimations)
linkContacts.addEventListener('click',deployContacts)

function deployHome(){
    deploy(home)
}
function deployDesign(){
    deploy(designs)
}
function deployWebPages(){
    deploy(webPages)
}
function deployApps(){
    deploy(apps)
}
function deployAnimations(){
    deploy(animations)
}
function deployContacts(){
    deploy(contacts)
}

function deploy(section){
    if(section.classList.contains('deploy')){
        console.log('good');
    }else{
        removeDeploy()
        section.classList.add('deploy')
    }
}

function removeDeploy(){
    home.classList.remove('deploy')
    designs.classList.remove('deploy')
    webPages.classList.remove('deploy')
    apps.classList.remove('deploy')
    animations.classList.remove('deploy')
    contacts.classList.remove('deploy')
}