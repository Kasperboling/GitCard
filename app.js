function generateGitCard(username) {
return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(userData => {
        const color = document.getElementById('colorInput').value;
        const gitCardContainer = document.getElementById('gitCardContainer');
        gitCardContainer.innerHTML = `
        <div class="profile">
            <div class="profile__button">
                <a href="${userData.html_url}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" style="filter: brightness(0) invert(1);" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
            </div>
            <div class="profile__image">
                <img src="${userData.avatar_url}" alt="Profile image">
            </div>
            <div class="profile__name">
                <h3>${userData.name}</h3>
                <p>@${userData.login}</p>
            </div>
            ${userData.bio ? `<div class="profile__bio"><p>${userData.bio}</p></div>` : ''}
            <div class="profile__info">
                <div class="profile__info__item">
                    <p>Followers</p>
                    <p>${userData.followers}</p>
                </div>
                <div class="profile__info__item">
                    <p>Following</p>
                    <p>${userData.following}</p>
                </div>
                <div class="profile__info__item">
                    <p>Public repos</p>
                    <p>${userData.public_repos}</p>
                </div>
            </div>
        </div>`;
        const styles = `
        .profile {
            width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
        }
        .profile > *:last-child {
            margin-bottom: 30px;
        }
        .profile__button {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: flex-end;
            background-color: ${color};
        }
        .profile__button a {
            color: #fff;
            font-size: 20px;
            padding: 10px 20px;
        }
        .profile__image {
            margin-top: -50px;
        }
        .profile__image img {
            width: 100px;
            border-radius: 50%;
        }
        .profile__name {
            text-align: center;
        }
        .profile__name:nth-last-child(2) {
            margin-bottom: 20px;
        }
        .profile__name h3 {
            margin: 0;
        }
        .profile__name p {
            margin: 0;
            font-size: 14px;
        }
        .profile__bio {
            font-size: 12px;
            padding: 10px 40px;
            text-align: center;
        }
        .profile__info {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 0 40px;
        }
        .profile__info__item {
            text-align: center;
        }
        .profile__info__item p:first-child {
            font-size: 12px;
            margin: 0;
        }
        .profile__info__item p:last-child {
            font-size: 20px;
            margin: 0;
        }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return userData;
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

window.onload = function () {
    generateGitCard(document.getElementById('usernameInput').value);
};

copyButton = document.getElementById("copy");
copyButton.addEventListener("click", function() {
    var copyText = document.getElementById("embedCode");
    copyText.select();
    document.execCommand("copy");
    window.alert("Sucess" );
});

document.addEventListener('DOMContentLoaded', (event) => {
    const embedCodeElement = document.getElementById('embedCode');
    const colorInput = document.getElementById('colorInput');
    const usernameInput = document.getElementById('usernameInput');
    const githubCorner = document.querySelector('.github-corner path');

    generateButton.addEventListener('click', () => {
        const color = colorInput.value;
        const username = usernameInput.value;

        embedCodeElement.textContent = `<git-card data-color="${color}" data-username="${username}"></git-card>\n\t<script src="https://gitcard.kasperboling.tech/GitCard.js"></script>`;
        generateGitCard(document.getElementById('usernameInput').value);

        generateButton.style.backgroundColor = color;
        copyButton.style.backgroundColor = color;
        githubCorner.style.fill = color;
    });

    function generateAndSetEmbedCode() {
        const color = colorInput.value;
        const username = usernameInput.value;

        embedCodeElement.textContent = `<git-card data-color="${color}" data-username="${username}"></git-card>\n\t<script src="https://gitcard.kasperboling.tech/GitCard.js"></script>`;
    }

    generateAndSetEmbedCode();
});
