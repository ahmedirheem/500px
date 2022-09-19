let discoverBtn = document.querySelector('.discover'),
licensingBtn = document.querySelector('.licensing'),
inlineListOne = document.querySelector('.first'),
inlineListTwo = document.querySelector('.seconed'),
inlineListThree = document.querySelector('.third'),
navbar = document.querySelector('.navbar'),
navbarDotIcon = document.querySelector('.dot-icon'),
overlay = document.createElement('div')

overlay.classList = 'overlay'
document.body.append(overlay)
overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
    z-index: 6;
    pointer-events: all;
    display: none;
    `

discoverBtn.addEventListener('click', ()=>{
    inlineListOne.classList.toggle('active')
    inlineListTwo.classList.remove('active')
    inlineListThree.classList.remove('active')
    overlay.style.display = 'block'
})
licensingBtn.addEventListener('click', ()=>{
    inlineListTwo.classList.toggle('active')
    inlineListOne.classList.remove('active')
    inlineListThree.classList.remove('active')
    overlay.style.display = 'block'
})
navbarDotIcon.addEventListener('click', ()=>{
    inlineListThree.classList.toggle('active')
    inlineListOne.classList.remove('active')
    inlineListTwo.classList.remove('active')
    overlay.style.display = 'block'
})
overlay.addEventListener('click', ()=>{
    inlineListOne.classList.remove('active')
    inlineListTwo.classList.remove('active')
    inlineListThree.classList.remove('active')
    overlay.style.display = 'none'
})
////////////////////////////////
let navbarToggler = document.querySelector('.navbar-btn-toggler')
navbarPop = document.createElement('div')
navbarPop.classList = 'navbar-pop'

document.body.append(navbarPop)

navbarPop.insertAdjacentHTML('beforeend', `
    <div class="navbar-pop-seconed">
        <div class="navbar-pop-head">
            <a href="#" class="website-logo">
                <svg id="logo_svg" data-name="Logo SVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20"><title>500px</title><path d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z" transform="translate(0)"></path></svg>
            </a>
            <div class="navbar-pop-close" onclick="closeNavabr()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.8453 7.99273L13.1671 3.67096C13.3916 3.43844 13.3884 3.06884 13.1598 2.84025C12.9313 2.61167 12.5617 2.60846 12.3291 2.83303L8.00737 7.15481L3.6856 2.83303C3.45308 2.60846 3.08348 2.61167 2.85489 2.84025C2.62631 3.06884 2.6231 3.43844 2.84767 3.67096L7.16945 7.99273L2.84767 12.3145C2.69363 12.4633 2.63184 12.6836 2.68608 12.8908C2.74031 13.098 2.90211 13.2598 3.1093 13.314C3.31649 13.3683 3.53681 13.3065 3.6856 13.1524L8.00737 8.83066L12.3291 13.1524C12.5617 13.377 12.9313 13.3738 13.1598 13.1452C13.3884 12.9166 13.3916 12.547 13.1671 12.3145L8.8453 7.99273Z" fill="#6D7378"></path></svg>
            </div>
        </div>
        <ul class="navbar-pop-lists">
            <li>
                <a href="#">NFT VALUT</a>
                <span class="list-feature">BETA</span>
            </li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Memberships</a></li>
            <li><a href="#">Quests</a></li>
            <li><a href="#">Perks</a></li>
            <li><a href="#">Ambassadors</a></li>
            <li><a href="#">Creator Stories</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        <div class="sign-in-up">
            <a href="#">Log in </a>/<a href="#"> Sign up</a>
        </div>
    </div>
    <div class="navbar-pop-seconed">
        <ul class="download">
            <div class="download-btn">
                <li><svg width="135px" height="45px" viewBox="0 0 135 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Google Play</title><desc>Created with Sketch.</desc><defs><linearGradient x1="61.024%" y1="4.84%" x2="26.11536%" y2="71.968%" id="linearGradient-1__8oNHtuOv"><stop stop-color="#00A0FF" offset="0%"></stop><stop stop-color="#00A1FF" offset="0.7%"></stop><stop stop-color="#00BEFF" offset="26%"></stop><stop stop-color="#00D2FF" offset="51.2%"></stop><stop stop-color="#00DFFF" offset="76%"></stop><stop stop-color="#00E3FF" offset="100%"></stop></linearGradient><linearGradient x1="107.724138%" y1="49.4235294%" x2="-130.669951%" y2="49.4235294%" id="linearGradient-2__8oNHtuOv"><stop stop-color="#FFE000" offset="0%"></stop><stop stop-color="#FFBD00" offset="40.9%"></stop><stop stop-color="#FFA500" offset="77.5%"></stop><stop stop-color="#FF9C00" offset="100%"></stop></linearGradient><linearGradient x1="86.3892216%" y1="30.8292932%" x2="-49.8862275%" y2="136.002473%" id="linearGradient-3__8oNHtuOv"><stop stop-color="#FF3A44" offset="0%"></stop><stop stop-color="#C31162" offset="100%"></stop></linearGradient><linearGradient x1="-18.5808383%" y1="-11.6832997%" x2="42.2754491%" y2="35.0657182%" id="linearGradient-4__8oNHtuOv"><stop stop-color="#32A071" offset="0%"></stop><stop stop-color="#2DA771" offset="6.9%"></stop><stop stop-color="#15CF74" offset="47.6%"></stop><stop stop-color="#06E775" offset="80.1%"></stop><stop stop-color="#00F076" offset="100%"></stop></linearGradient></defs><g id="00-Components__8oNHtuOv" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="00-Components/05-Navigation/02-Footer/02📱Mobile---Tablet__8oNHtuOv" transform="translate(-496.000000, -133.000000)"><g id="Download__8oNHtuOv" transform="translate(496.000000, 32.000000)"><g id="-06-Icons-+-Badges/03-App-Badge/Google-Play__8oNHtuOv" transform="translate(0.000000, 101.000000)"><g id="google-play-badge__8oNHtuOv"><path d="M130,45 L5,45 C2.2,45 0,42.525 0,39.375 L0,5.625 C0,2.475 2.2,0 5,0 L130,0 C132.8,0 135,2.475 135,5.625 L135,39.375 C135,42.525 132.8,45 130,45 Z" id="Path__8oNHtuOv" fill="#000000" fill-rule="nonzero"></path><path d="M129.812594,1 C132.105697,1 134,3.12760417 134,5.703125 L134,39.296875 C134,41.8723958 132.105697,44 129.812594,44 L5.1874063,44 C2.89430285,44 1,41.8723958 1,39.296875 L1,5.703125 C1,3.12760417 2.89430285,1 5.1874063,1 L129.812594,1 L129.812594,1 Z M130,0 L5,0 C2.2,0 0,2.5875 0,5.625 L0,39.375 C0,42.525 2.2,45 5,45 L130,45 C132.8,45 135,42.525 135,39.375 L135,5.625 C135,2.5875 132.8,0 130,0 Z" id="Shape__8oNHtuOv" fill="#A6A6A6" fill-rule="nonzero"></path><path d="M47.4,12.2 C47.4,13 47.2,13.7 46.7,14.2 C46.1,14.8 45.4,15.1 44.5,15.1 C43.6,15.1 42.9,14.8 42.3,14.2 C41.7,13.6 41.4,12.9 41.4,12 C41.4,11.1 41.7,10.4 42.3,9.8 C42.9,9.2 43.6,8.9 44.5,8.9 C44.9,8.9 45.3,9 45.7,9.2 C46.1,9.4 46.4,9.6 46.6,9.9 L46.1,10.4 C45.7,9.9 45.2,9.7 44.5,9.7 C43.9,9.7 43.3,9.9 42.9,10.4 C42.4,10.8 42.2,11.4 42.2,12.1 C42.2,12.8 42.4,13.4 42.9,13.8 C43.4,14.2 43.9,14.5 44.5,14.5 C45.2,14.5 45.7,14.3 46.2,13.8 C46.5,13.5 46.7,13.1 46.7,12.6 L44.5,12.6 L44.5,11.8 L47.4,11.8 L47.4,12.2 L47.4,12.2 Z M52,9.7 L49.3,9.7 L49.3,11.6 L51.8,11.6 L51.8,12.3 L49.3,12.3 L49.3,14.2 L52,14.2 L52,15 L48.5,15 L48.5,9 L52,9 L52,9.7 Z M55.3,15 L54.5,15 L54.5,9.7 L52.8,9.7 L52.8,9 L57,9 L57,9.7 L55.3,9.7 L55.3,15 Z M59.9,15 L59.9,9 L60.7,9 L60.7,15 L59.9,15 Z M64.1,15 L63.3,15 L63.3,9.7 L61.6,9.7 L61.6,9 L65.7,9 L65.7,9.7 L64,9.7 L64,15 L64.1,15 Z M73.6,14.2 C73,14.8 72.3,15.1 71.4,15.1 C70.5,15.1 69.8,14.8 69.2,14.2 C68.6,13.6 68.3,12.9 68.3,12 C68.3,11.1 68.6,10.4 69.2,9.8 C69.8,9.2 70.5,8.9 71.4,8.9 C72.3,8.9 73,9.2 73.6,9.8 C74.2,10.4 74.5,11.1 74.5,12 C74.5,12.9 74.2,13.6 73.6,14.2 Z M69.8,13.7 C70.2,14.1 70.8,14.4 71.4,14.4 C72,14.4 72.6,14.2 73,13.7 C73.4,13.3 73.7,12.7 73.7,12 C73.7,11.3 73.5,10.7 73,10.3 C72.6,9.9 72,9.6 71.4,9.6 C70.8,9.6 70.2,9.8 69.8,10.3 C69.4,10.7 69.1,11.3 69.1,12 C69.1,12.7 69.3,13.3 69.8,13.7 Z M75.6,15 L75.6,9 L76.5,9 L79.4,13.7 L79.4,9 L80.2,9 L80.2,15 L79.4,15 L76.3,10.1 L76.3,15 L75.6,15 L75.6,15 Z" id="Shape__8oNHtuOv" stroke="#FFFFFF" stroke-width="0.5" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M68.1,23.8 C65.7,23.8 63.8,25.6 63.8,28.1 C63.8,30.5 65.7,32.4 68.1,32.4 C70.5,32.4 72.4,30.6 72.4,28.1 C72.4,25.5 70.5,23.8 68.1,23.8 Z M68.1,30.6 C66.8,30.6 65.7,29.5 65.7,28 C65.7,26.5 66.8,25.4 68.1,25.4 C69.4,25.4 70.5,26.4 70.5,28 C70.5,29.5 69.4,30.6 68.1,30.6 Z M58.8,23.8 C56.4,23.8 54.5,25.6 54.5,28.1 C54.5,30.5 56.4,32.4 58.8,32.4 C61.2,32.4 63.1,30.6 63.1,28.1 C63.1,25.5 61.2,23.8 58.8,23.8 Z M58.8,30.6 C57.5,30.6 56.4,29.5 56.4,28 C56.4,26.5 57.5,25.4 58.8,25.4 C60.1,25.4 61.2,26.4 61.2,28 C61.2,29.5 60.1,30.6 58.8,30.6 Z M47.7,25.1 L47.7,26.9 L52,26.9 C51.9,27.9 51.5,28.7 51,29.2 C50.4,29.8 49.4,30.5 47.7,30.5 C45,30.5 43,28.4 43,25.7 C43,23 45.1,20.9 47.7,20.9 C49.1,20.9 50.2,21.5 51,22.2 L52.3,20.9 C51.2,19.9 49.8,19.1 47.8,19.1 C44.2,19.1 41.1,22.1 41.1,25.7 C41.1,29.3 44.2,32.3 47.8,32.3 C49.8,32.3 51.2,31.7 52.4,30.4 C53.6,29.2 54,27.5 54,26.2 C54,25.8 54,25.4 53.9,25.1 L47.7,25.1 L47.7,25.1 Z M93.1,26.5 C92.7,25.5 91.7,23.8 89.5,23.8 C87.3,23.8 85.5,25.5 85.5,28.1 C85.5,30.5 87.3,32.4 89.7,32.4 C91.6,32.4 92.8,31.2 93.2,30.5 L91.8,29.5 C91.3,30.2 90.7,30.7 89.7,30.7 C88.7,30.7 88.1,30.3 87.6,29.4 L93.3,27 L93.1,26.5 L93.1,26.5 Z M87.3,27.9 C87.3,26.3 88.6,25.4 89.5,25.4 C90.2,25.4 90.9,25.8 91.1,26.3 L87.3,27.9 Z M82.6,32 L84.5,32 L84.5,19.5 L82.6,19.5 L82.6,32 Z M79.6,24.7 C79.1,24.2 78.3,23.7 77.3,23.7 C75.2,23.7 73.2,25.6 73.2,28 C73.2,30.4 75.1,32.2 77.3,32.2 C78.3,32.2 79.1,31.7 79.5,31.2 L79.6,31.2 L79.6,31.8 C79.6,33.4 78.7,34.3 77.3,34.3 C76.2,34.3 75.4,33.5 75.2,32.8 L73.6,33.5 C74.1,34.6 75.3,36 77.4,36 C79.6,36 81.4,34.7 81.4,31.6 L81.4,24 L79.6,24 L79.6,24.7 L79.6,24.7 Z M77.4,30.6 C76.1,30.6 75,29.5 75,28 C75,26.5 76.1,25.4 77.4,25.4 C78.7,25.4 79.7,26.5 79.7,28 C79.7,29.5 78.7,30.6 77.4,30.6 Z M101.8,19.5 L97.3,19.5 L97.3,32 L99.2,32 L99.2,27.3 L101.8,27.3 C103.9,27.3 105.9,25.8 105.9,23.4 C105.9,21 103.9,19.5 101.8,19.5 L101.8,19.5 Z M101.9,25.5 L99.2,25.5 L99.2,21.2 L101.9,21.2 C103.3,21.2 104.1,22.4 104.1,23.3 C104,24.4 103.2,25.5 101.9,25.5 Z M113.4,23.7 C112,23.7 110.6,24.3 110.1,25.6 L111.8,26.3 C112.2,25.6 112.8,25.4 113.5,25.4 C114.5,25.4 115.4,26 115.5,27 L115.5,27.1 C115.2,26.9 114.4,26.6 113.6,26.6 C111.8,26.6 110,27.6 110,29.4 C110,31.1 111.5,32.2 113.1,32.2 C114.4,32.2 115,31.6 115.5,31 L115.6,31 L115.6,32 L117.4,32 L117.4,27.2 C117.2,25 115.5,23.7 113.4,23.7 L113.4,23.7 Z M113.2,30.6 C112.6,30.6 111.7,30.3 111.7,29.5 C111.7,28.5 112.8,28.2 113.7,28.2 C114.5,28.2 114.9,28.4 115.4,28.6 C115.2,29.8 114.2,30.6 113.2,30.6 L113.2,30.6 Z M123.7,24 L121.6,29.4 L121.5,29.4 L119.3,24 L117.3,24 L120.6,31.6 L118.7,35.8 L120.6,35.8 L125.7,24 L123.7,24 L123.7,24 Z M106.9,32 L108.8,32 L108.8,19.5 L106.9,19.5 L106.9,32 Z" id="Shape__8oNHtuOv" fill="#FFFFFF" fill-rule="nonzero"></path><g id="Group__8oNHtuOv" transform="translate(10.000000, 9.000000)" fill-rule="nonzero"><path d="M0.4,0.5 C0.1,0.8 0,1.3 0,1.9 L0,24 C0,24.6 0.2,25.1 0.5,25.4 L0.6,25.5 L13,13.1 L13,12.9 L0.4,0.5 Z" id="Path__8oNHtuOv" fill="url(#linearGradient-1__8oNHtuOv)"></path><path d="M17,17.3 L12.9,13.2 L12.9,12.9 L17,8.8 L17.1,8.9 L22,11.7 C23.4,12.5 23.4,13.8 22,14.6 L17,17.3 L17,17.3 Z" id="Path__8oNHtuOv" fill="url(#linearGradient-2__8oNHtuOv)"></path><path d="M17.1,17.2 L12.9,13 L0.4,25.5 C0.9,26 1.6,26 2.5,25.6 L17.1,17.2" id="Path__8oNHtuOv" fill="url(#linearGradient-3__8oNHtuOv)"></path><path d="M17.1,8.8 L2.5,0.5 C1.6,8.32667268e-17 0.9,0.1 0.4,0.6 L12.9,13 L17.1,8.8 L17.1,8.8 Z" id="Path__8oNHtuOv" fill="url(#linearGradient-4__8oNHtuOv)"></path><path d="M17,17.1 L2.5,25.3 C1.7,25.8 1,25.7 0.5,25.3 L0.4,25.4 L0.5,25.5 C1,25.9 1.7,26 2.5,25.5 L17,17.1 Z" id="Path__8oNHtuOv" fill="#000000" opacity="0.2"></path><path d="M0.4,25.3 C0.1,25 -1.11022302e-16,24.5 -1.11022302e-16,23.9 L-1.11022302e-16,24 C-1.11022302e-16,24.6 0.2,25.1 0.5,25.4 L0.5,25.3 L0.4,25.3 Z M22,14.3 L17,17.1 L17.1,17.2 L22,14.4 C22.7,14 23,13.5 23,13 C23,13.5 22.6,13.9 22,14.3 L22,14.3 Z" id="Shape__8oNHtuOv" fill="#000000" opacity="0.12"></path><path d="M2.5,0.6 L22,11.7 C22.6,12.1 23,12.5 23,13 C23,12.5 22.7,12 22,11.6 L2.5,0.5 C1.1,-0.3 0,0.3 0,1.9 L0,2 C0,0.5 1.1,-0.2 2.5,0.6 Z" id="Path__8oNHtuOv" fill="#FFFFFF" opacity="0.25"></path></g></g></g></g></g></g></svg></li>
                <li><svg width="135px" height="45px" viewBox="0 0 135 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Google Play</title><desc>Created with Sketch.</desc><defs><linearGradient x1="61.024%" y1="4.84%" x2="26.11536%" y2="71.968%" id="linearGradient-1__qkaewiSm"><stop stop-color="#00A0FF" offset="0%"></stop><stop stop-color="#00A1FF" offset="0.7%"></stop><stop stop-color="#00BEFF" offset="26%"></stop><stop stop-color="#00D2FF" offset="51.2%"></stop><stop stop-color="#00DFFF" offset="76%"></stop><stop stop-color="#00E3FF" offset="100%"></stop></linearGradient><linearGradient x1="107.724138%" y1="49.4235294%" x2="-130.669951%" y2="49.4235294%" id="linearGradient-2__qkaewiSm"><stop stop-color="#FFE000" offset="0%"></stop><stop stop-color="#FFBD00" offset="40.9%"></stop><stop stop-color="#FFA500" offset="77.5%"></stop><stop stop-color="#FF9C00" offset="100%"></stop></linearGradient><linearGradient x1="86.3892216%" y1="30.8292932%" x2="-49.8862275%" y2="136.002473%" id="linearGradient-3__qkaewiSm"><stop stop-color="#FF3A44" offset="0%"></stop><stop stop-color="#C31162" offset="100%"></stop></linearGradient><linearGradient x1="-18.5808383%" y1="-11.6832997%" x2="42.2754491%" y2="35.0657182%" id="linearGradient-4__qkaewiSm"><stop stop-color="#32A071" offset="0%"></stop><stop stop-color="#2DA771" offset="6.9%"></stop><stop stop-color="#15CF74" offset="47.6%"></stop><stop stop-color="#06E775" offset="80.1%"></stop><stop stop-color="#00F076" offset="100%"></stop></linearGradient></defs><g id="00-Components__qkaewiSm" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="00-Components/05-Navigation/02-Footer/02📱Mobile---Tablet__qkaewiSm" transform="translate(-496.000000, -133.000000)"><g id="Download__qkaewiSm" transform="translate(496.000000, 32.000000)"><g id="-06-Icons-+-Badges/03-App-Badge/Google-Play__qkaewiSm" transform="translate(0.000000, 101.000000)"><g id="google-play-badge__qkaewiSm"><path d="M130,45 L5,45 C2.2,45 0,42.525 0,39.375 L0,5.625 C0,2.475 2.2,0 5,0 L130,0 C132.8,0 135,2.475 135,5.625 L135,39.375 C135,42.525 132.8,45 130,45 Z" id="Path__qkaewiSm" fill="#000000" fill-rule="nonzero"></path><path d="M129.812594,1 C132.105697,1 134,3.12760417 134,5.703125 L134,39.296875 C134,41.8723958 132.105697,44 129.812594,44 L5.1874063,44 C2.89430285,44 1,41.8723958 1,39.296875 L1,5.703125 C1,3.12760417 2.89430285,1 5.1874063,1 L129.812594,1 L129.812594,1 Z M130,0 L5,0 C2.2,0 0,2.5875 0,5.625 L0,39.375 C0,42.525 2.2,45 5,45 L130,45 C132.8,45 135,42.525 135,39.375 L135,5.625 C135,2.5875 132.8,0 130,0 Z" id="Shape__qkaewiSm" fill="#A6A6A6" fill-rule="nonzero"></path><path d="M47.4,12.2 C47.4,13 47.2,13.7 46.7,14.2 C46.1,14.8 45.4,15.1 44.5,15.1 C43.6,15.1 42.9,14.8 42.3,14.2 C41.7,13.6 41.4,12.9 41.4,12 C41.4,11.1 41.7,10.4 42.3,9.8 C42.9,9.2 43.6,8.9 44.5,8.9 C44.9,8.9 45.3,9 45.7,9.2 C46.1,9.4 46.4,9.6 46.6,9.9 L46.1,10.4 C45.7,9.9 45.2,9.7 44.5,9.7 C43.9,9.7 43.3,9.9 42.9,10.4 C42.4,10.8 42.2,11.4 42.2,12.1 C42.2,12.8 42.4,13.4 42.9,13.8 C43.4,14.2 43.9,14.5 44.5,14.5 C45.2,14.5 45.7,14.3 46.2,13.8 C46.5,13.5 46.7,13.1 46.7,12.6 L44.5,12.6 L44.5,11.8 L47.4,11.8 L47.4,12.2 L47.4,12.2 Z M52,9.7 L49.3,9.7 L49.3,11.6 L51.8,11.6 L51.8,12.3 L49.3,12.3 L49.3,14.2 L52,14.2 L52,15 L48.5,15 L48.5,9 L52,9 L52,9.7 Z M55.3,15 L54.5,15 L54.5,9.7 L52.8,9.7 L52.8,9 L57,9 L57,9.7 L55.3,9.7 L55.3,15 Z M59.9,15 L59.9,9 L60.7,9 L60.7,15 L59.9,15 Z M64.1,15 L63.3,15 L63.3,9.7 L61.6,9.7 L61.6,9 L65.7,9 L65.7,9.7 L64,9.7 L64,15 L64.1,15 Z M73.6,14.2 C73,14.8 72.3,15.1 71.4,15.1 C70.5,15.1 69.8,14.8 69.2,14.2 C68.6,13.6 68.3,12.9 68.3,12 C68.3,11.1 68.6,10.4 69.2,9.8 C69.8,9.2 70.5,8.9 71.4,8.9 C72.3,8.9 73,9.2 73.6,9.8 C74.2,10.4 74.5,11.1 74.5,12 C74.5,12.9 74.2,13.6 73.6,14.2 Z M69.8,13.7 C70.2,14.1 70.8,14.4 71.4,14.4 C72,14.4 72.6,14.2 73,13.7 C73.4,13.3 73.7,12.7 73.7,12 C73.7,11.3 73.5,10.7 73,10.3 C72.6,9.9 72,9.6 71.4,9.6 C70.8,9.6 70.2,9.8 69.8,10.3 C69.4,10.7 69.1,11.3 69.1,12 C69.1,12.7 69.3,13.3 69.8,13.7 Z M75.6,15 L75.6,9 L76.5,9 L79.4,13.7 L79.4,9 L80.2,9 L80.2,15 L79.4,15 L76.3,10.1 L76.3,15 L75.6,15 L75.6,15 Z" id="Shape__qkaewiSm" stroke="#FFFFFF" stroke-width="0.5" fill="#FFFFFF" fill-rule="nonzero"></path><path d="M68.1,23.8 C65.7,23.8 63.8,25.6 63.8,28.1 C63.8,30.5 65.7,32.4 68.1,32.4 C70.5,32.4 72.4,30.6 72.4,28.1 C72.4,25.5 70.5,23.8 68.1,23.8 Z M68.1,30.6 C66.8,30.6 65.7,29.5 65.7,28 C65.7,26.5 66.8,25.4 68.1,25.4 C69.4,25.4 70.5,26.4 70.5,28 C70.5,29.5 69.4,30.6 68.1,30.6 Z M58.8,23.8 C56.4,23.8 54.5,25.6 54.5,28.1 C54.5,30.5 56.4,32.4 58.8,32.4 C61.2,32.4 63.1,30.6 63.1,28.1 C63.1,25.5 61.2,23.8 58.8,23.8 Z M58.8,30.6 C57.5,30.6 56.4,29.5 56.4,28 C56.4,26.5 57.5,25.4 58.8,25.4 C60.1,25.4 61.2,26.4 61.2,28 C61.2,29.5 60.1,30.6 58.8,30.6 Z M47.7,25.1 L47.7,26.9 L52,26.9 C51.9,27.9 51.5,28.7 51,29.2 C50.4,29.8 49.4,30.5 47.7,30.5 C45,30.5 43,28.4 43,25.7 C43,23 45.1,20.9 47.7,20.9 C49.1,20.9 50.2,21.5 51,22.2 L52.3,20.9 C51.2,19.9 49.8,19.1 47.8,19.1 C44.2,19.1 41.1,22.1 41.1,25.7 C41.1,29.3 44.2,32.3 47.8,32.3 C49.8,32.3 51.2,31.7 52.4,30.4 C53.6,29.2 54,27.5 54,26.2 C54,25.8 54,25.4 53.9,25.1 L47.7,25.1 L47.7,25.1 Z M93.1,26.5 C92.7,25.5 91.7,23.8 89.5,23.8 C87.3,23.8 85.5,25.5 85.5,28.1 C85.5,30.5 87.3,32.4 89.7,32.4 C91.6,32.4 92.8,31.2 93.2,30.5 L91.8,29.5 C91.3,30.2 90.7,30.7 89.7,30.7 C88.7,30.7 88.1,30.3 87.6,29.4 L93.3,27 L93.1,26.5 L93.1,26.5 Z M87.3,27.9 C87.3,26.3 88.6,25.4 89.5,25.4 C90.2,25.4 90.9,25.8 91.1,26.3 L87.3,27.9 Z M82.6,32 L84.5,32 L84.5,19.5 L82.6,19.5 L82.6,32 Z M79.6,24.7 C79.1,24.2 78.3,23.7 77.3,23.7 C75.2,23.7 73.2,25.6 73.2,28 C73.2,30.4 75.1,32.2 77.3,32.2 C78.3,32.2 79.1,31.7 79.5,31.2 L79.6,31.2 L79.6,31.8 C79.6,33.4 78.7,34.3 77.3,34.3 C76.2,34.3 75.4,33.5 75.2,32.8 L73.6,33.5 C74.1,34.6 75.3,36 77.4,36 C79.6,36 81.4,34.7 81.4,31.6 L81.4,24 L79.6,24 L79.6,24.7 L79.6,24.7 Z M77.4,30.6 C76.1,30.6 75,29.5 75,28 C75,26.5 76.1,25.4 77.4,25.4 C78.7,25.4 79.7,26.5 79.7,28 C79.7,29.5 78.7,30.6 77.4,30.6 Z M101.8,19.5 L97.3,19.5 L97.3,32 L99.2,32 L99.2,27.3 L101.8,27.3 C103.9,27.3 105.9,25.8 105.9,23.4 C105.9,21 103.9,19.5 101.8,19.5 L101.8,19.5 Z M101.9,25.5 L99.2,25.5 L99.2,21.2 L101.9,21.2 C103.3,21.2 104.1,22.4 104.1,23.3 C104,24.4 103.2,25.5 101.9,25.5 Z M113.4,23.7 C112,23.7 110.6,24.3 110.1,25.6 L111.8,26.3 C112.2,25.6 112.8,25.4 113.5,25.4 C114.5,25.4 115.4,26 115.5,27 L115.5,27.1 C115.2,26.9 114.4,26.6 113.6,26.6 C111.8,26.6 110,27.6 110,29.4 C110,31.1 111.5,32.2 113.1,32.2 C114.4,32.2 115,31.6 115.5,31 L115.6,31 L115.6,32 L117.4,32 L117.4,27.2 C117.2,25 115.5,23.7 113.4,23.7 L113.4,23.7 Z M113.2,30.6 C112.6,30.6 111.7,30.3 111.7,29.5 C111.7,28.5 112.8,28.2 113.7,28.2 C114.5,28.2 114.9,28.4 115.4,28.6 C115.2,29.8 114.2,30.6 113.2,30.6 L113.2,30.6 Z M123.7,24 L121.6,29.4 L121.5,29.4 L119.3,24 L117.3,24 L120.6,31.6 L118.7,35.8 L120.6,35.8 L125.7,24 L123.7,24 L123.7,24 Z M106.9,32 L108.8,32 L108.8,19.5 L106.9,19.5 L106.9,32 Z" id="Shape__qkaewiSm" fill="#FFFFFF" fill-rule="nonzero"></path><g id="Group__qkaewiSm" transform="translate(10.000000, 9.000000)" fill-rule="nonzero"><path d="M0.4,0.5 C0.1,0.8 0,1.3 0,1.9 L0,24 C0,24.6 0.2,25.1 0.5,25.4 L0.6,25.5 L13,13.1 L13,12.9 L0.4,0.5 Z" id="Path__qkaewiSm" fill="url(#linearGradient-1__qkaewiSm)"></path><path d="M17,17.3 L12.9,13.2 L12.9,12.9 L17,8.8 L17.1,8.9 L22,11.7 C23.4,12.5 23.4,13.8 22,14.6 L17,17.3 L17,17.3 Z" id="Path__qkaewiSm" fill="url(#linearGradient-2__qkaewiSm)"></path><path d="M17.1,17.2 L12.9,13 L0.4,25.5 C0.9,26 1.6,26 2.5,25.6 L17.1,17.2" id="Path__qkaewiSm" fill="url(#linearGradient-3__qkaewiSm)"></path><path d="M17.1,8.8 L2.5,0.5 C1.6,8.32667268e-17 0.9,0.1 0.4,0.6 L12.9,13 L17.1,8.8 L17.1,8.8 Z" id="Path__qkaewiSm" fill="url(#linearGradient-4__qkaewiSm)"></path><path d="M17,17.1 L2.5,25.3 C1.7,25.8 1,25.7 0.5,25.3 L0.4,25.4 L0.5,25.5 C1,25.9 1.7,26 2.5,25.5 L17,17.1 Z" id="Path__qkaewiSm" fill="#000000" opacity="0.2"></path><path d="M0.4,25.3 C0.1,25 -1.11022302e-16,24.5 -1.11022302e-16,23.9 L-1.11022302e-16,24 C-1.11022302e-16,24.6 0.2,25.1 0.5,25.4 L0.5,25.3 L0.4,25.3 Z M22,14.3 L17,17.1 L17.1,17.2 L22,14.4 C22.7,14 23,13.5 23,13 C23,13.5 22.6,13.9 22,14.3 L22,14.3 Z" id="Shape__qkaewiSm" fill="#000000" opacity="0.12"></path><path d="M2.5,0.6 L22,11.7 C22.6,12.1 23,12.5 23,13 C23,12.5 22.7,12 22,11.6 L2.5,0.5 C1.1,-0.3 0,0.3 0,1.9 L0,2 C0,0.5 1.1,-0.2 2.5,0.6 Z" id="Path__qkaewiSm" fill="#FFFFFF" opacity="0.25"></path></g></g></g></g></g></g></svg></li>
            </div>
        </ul>
        <footer>
            <div class="container">
                <div class="footer-logo">© 500px</div>
                <div class="footer-links">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Support</a>
                </div>
            </div>
        </footer>
    </div>
`
)
navbarToggler.addEventListener('click', ()=>{
    document.body.style.overflow = 'hidden'
    navbarPop.classList.add('active')
})
let navbarCloser = document.querySelector('.navbar-pop-close')

function closeNavabr(){
    navbarPop.classList.remove('active')
}

//////////////////////////////////

window.addEventListener('scroll', ()=>{
    let navbarOne = document.querySelector('.navbar .row.one')
    let navbarTwo = document.querySelector('.navbar .row.two')
    navbarOne.style.position = 'absolute'
    navbarTwo.style.top = '0'
})