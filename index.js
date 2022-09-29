 //sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');



// ==========THEME==============

const theme =document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root')

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// theme
// opensmodel
const openThemeModel = () => {
    themeModel.style.display = 'grid';

}
// closesmodel
const closeThemeModel = (e) => {
    themeModel.style.display = 'grid';
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}

// close model

theme.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);


// ===============FONTS =============================

    fontSizes.forEach(size => {
        let fontSize;
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperrty('----sticky-top-left', '5.4rem');
            root.style.setProperrty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
           fontSize='13px'; 
           root.style.setProperrty('----sticky-top-left', '5.4rem');
            root.style.setProperrty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px'; 
         }else if(size.classList.contains('font-size-4')){
            fontSize='19px'; 
         }else if(size.classList.contains('font-size-5')){
            fontSize='22px'; 
         }

        //  change font size of rot html element

        document.querySelector('html').style.fontSize=fontSize; 

    })