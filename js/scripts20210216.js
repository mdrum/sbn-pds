// HTML fragment loading
(function(document, window) {
    var includeHTML = function(startingElement) {
        var elements, elmnt, file, xhttp;
        var source = startingElement ? startingElement : document;
        elements = source.querySelectorAll("div[include-html]");
        for (elmnt of elements) {
            file = elmnt.getAttribute("include-html");
            if (file) {
                makeRequest(file, elmnt);
                // return;
            }
        }
    };

    var makeRequest = function(url, sourceElement) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    sourceElement.innerHTML = this.responseText;

                }
                if (this.status == 404) {
                    sourceElement.innerHTML = "Included html not found.";
                }

                includeHTML(sourceElement)

                // unwrap
                var parent = sourceElement.parentNode
                while (sourceElement.firstChild) { parent.insertBefore(sourceElement.firstChild, sourceElement)}
                parent.removeChild(sourceElement)

                window.dispatchEvent(new Event("PDSSBN_contentLoaded"))
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    includeHTML();
})(document, window);

/* PDS app bar */
(function(document, window) {
    // always make sure sidebar doesn't overlap header
    function accountForAppBarHeight() {
        var header = document.getElementById('sbn-header')
        var sidebar = document.getElementById('sbn-sidebar')
        var menuHandle = document.getElementById('sbn-menu-handle')
        var appBar = document.getElementById('pds-app-bar')
        if(header && sidebar && appBar && (sidebar.offsetTop <= header.offsetHeight + header.offsetTop)) {
            sidebar.style.top = (header.offsetHeight + header.offsetTop) + 'px';
        }
        if(header && menuHandle && appBar && (menuHandle.offsetTop <= header.offsetHeight + header.offsetTop)) {
            menuHandle.style.top = (header.offsetHeight + header.offsetTop) + 'px';
        }
    }
    window.addEventListener("PDSSBN_contentLoaded", accountForAppBarHeight)
    
    // load app bar from pds.nasa.gov
    var link = document.createElement('link');
    link.href = 'https://pds.nasa.gov/pds-app-bar/pds-app-bar.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.body.appendChild(link)
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pds.nasa.gov/pds-app-bar/pds-app-bar.js'
    script.addEventListener('load', accountForAppBarHeight)
    document.body.appendChild(script);
    
    // as a final measure, run layout code whenever DOM changes
    var container = document.documentElement || document.body
    new MutationObserver(accountForAppBarHeight).observe(container, {subtree: true, childList: true, attributes: false})

})(document, window);

// Load search bar angular app
(function(document, window) {
    window.addEventListener("PDSSBN_contentLoaded", function() {

        if(window.PDSSBN_bootstrappedSearchBar === true ) return;
        
        var bar = document.getElementById('search-bar')
        if(!!bar) {
            window.PDSSBN_bootstrappedSearchBar = true
            var app = new Vue(vueApp)
        }
    })
})(document, window);

// Load theme into header bar
(function(document, window) {
    window.addEventListener("PDSSBN_contentLoaded", function() {

        if(window.PDSSBN_bootstrappedHeaderTheme === true ) return;
        
        var theme = document.querySelector('.sbn-main').dataset.pageTheme
        var header = document.getElementById('sbn-header')
        if(!!theme && !!header) {
            window.PDSSBN_bootstrappedHeaderTheme = true
            header.style.backgroundImage = `url('${theme}')`
            header.style.backgroundSize = 'auto 100%'
        }
    })
})(document, window);

// Add button ripples
(function(document, window) {
    window.addEventListener("PDSSBN_contentLoaded", function() {
        document.querySelectorAll('.pds-button').forEach((button) => {
            console.log(button.firstChild.classList)
            if(!button.firstChild.classList || !button.firstChild.classList.contains('button-ripple')) {
                const ripple = document.createElement('div')
                ripple.className = 'button-ripple'
                button.prepend(ripple)
            }
        })
    })
})(document, window);

// Theme toggle
(function(document, window) {
    window.addEventListener("PDSSBN_contentLoaded", function() {
        if(window.PDSSBN_bootstrappedThemeToggle === true ) return;
        
        const toggle = document.getElementById('theme-switch-checkbox')
        if(!!toggle) {
            window.PDSSBN_bootstrappedThemeToggle = true
            toggle.addEventListener("change", changeTheme, false)

            const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

            if (!!currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);

                if (currentTheme === 'light') {
                    toggle.checked = true;
                }
            }
        }

        function changeTheme(event) {
            if (event.target.checked) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                document.cookie = "theme=light; domain=.psi.edu";
            }
            else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                document.cookie = "theme=dark; domain=.psi.edu";
            }    
        }
    })
})(document, window);


// Menu toggle
(function(document, window) {
    window.addEventListener("PDSSBN_contentLoaded", function() {
        if(window.PDSSBN_bootstrappedMenu === true ) return;
        
        const toggle = document.getElementById('menu-drawer')
        if(!!toggle) {
            window.PDSSBN_bootstrappedMenu = true
            toggle.addEventListener("click", openMenu, false)
        }

        function openMenu(event) {
            document.getElementById("menu").classList.add("open")
            const backdrop = document.getElementById("menu-backdrop")
            backdrop.classList.add('on')
            backdrop.addEventListener('click', backdropClick)
        }
        function closeMenu(event) {
            document.getElementById("menu").classList.remove("open")
            document.getElementById("menu-backdrop").classList.remove('on')
        }

        // set up listener to close menu you click outside
        const backdropClick = (event) => {
            if(!event.target.closest('#menu') && !event.target.closest('#menu-drawer')) {
                closeMenu()
                removeListener()
            }
        }
        const removeListener = () => {
            document.getElementById("menu-backdrop").removeEventListener('click', backdropClick)
        }
    })
})(document, window);

// Update file links to open in new tab
(function(document, window) {
    document.querySelectorAll( `main a[href$='.pdf'],
                                main a[href$='.PDF'],
                                main a[href$='.cat'],
                                main a[href$='.CAT']`).forEach(link => link.target = '_blank');
})(document, window);

/* Methods to Hide/Show Superseded versions of a data set */
const elements = {
    list: document.getElementById('pds-superseded'),
    toggle: document.getElementById('pds-superseded-toggle'),
}
// store variable to track whether to show superseded data sets
let show = false

// event handler
const setShow = function(event,el) {
    show = !show
    elements.list.style.display = (show === true) ? 'block' : 'none'
    elements.toggle.innerHTML = (show === true) ? 'Hide' : 'Show'
}