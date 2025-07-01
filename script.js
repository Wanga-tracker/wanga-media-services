let sidebarOpen = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebarOpen ? '0' : '250px';
    document.querySelector('.main-content').style.marginLeft = sidebarOpen ? '60px' : '250px';
    sidebarOpen = !sidebarOpen;
}

function loadSection(section) {
    const sections = document.getElementsByClassName('section');
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex';
    setTimeout(() => {
        for (let sec of sections) sec.style.display = 'none';
        document.getElementById(section).style.display = 'block';
        loader.style.display = 'none';
    }, 2000); // 2-second loading delay
}

function submitWebsite() {
    const desc = document.getElementById('website-desc').value;
    if (desc) {
        window.location.href = `https://wa.me/254758476795?text=I%20want%20to%20create%20a%20website%20for%20Ksh500:%20${encodeURIComponent(desc)}`;
    } else {
        alert('Please describe your website!');
    }
}

function searchService() {
    alert('Search functionality coming soon!');
}

// Load dashboard on page load
window.onload = () => {
    loadSection('dashboard');
};
