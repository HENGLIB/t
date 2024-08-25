// script.js
document.getElementById('account-btn').addEventListener('click', function() {
    var accountMenu = document.getElementById('account-menu');
    if (accountMenu.classList.contains('hidden')) {
        accountMenu.classList.remove('hidden');
        accountMenu.style.display = 'block';
    } else {
        accountMenu.classList.add('hidden');
        accountMenu.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    var accountMenu = document.getElementById('account-menu');
    var accountBtn = document.getElementById('account-btn');
    if (!accountBtn.contains(event.target) && !accountMenu.contains(event.target)) {
        accountMenu.classList.add('hidden');
        accountMenu.style.display = 'none';
    }
});    accountMenu.style.display = "none";
  }
});
