const accessToken = "26808034282113329";
const userId = "6df0eb0b4905d89d1af17008d2664631";
const apiUrl = `https://graph.instagram.com/${userId}?fields=id,username,media_count,account_type,media&access_token=${accessToken}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const latestPost = data.media.data[0]; // Obtém a última postagem
    const postImageUrl = latestPost.media_url; // URL da imagem da última postagem
    const userName = data.username;
    const profilePictureUrl = `https://graph.instagram.com/${userId}/picture?access_token=${accessToken}`;

    document.getElementById("instagram-post").innerHTML = `
            <div class="post-header">
                <div class="profile">
                    <img src="${profilePictureUrl}" alt="Profile Picture" class="profile-pic">
                    <a href="https://www.instagram.com/${userName}/" target="_blank" class="username">${userName}</a>
                </div>
                <button class="follow-btn">FOLLOW</button>
                <div class="menu-dots">...</div>
            </div>
            <div class="post-image">
                <img src="${postImageUrl}" alt="Última Postagem Instagram">
            </div>
            <div class="post-footer">
                <div class="actions">
                    <span class="heart">❤</span>
                    <span class="comment">💬</span>
                    <span class="share">📤</span>
                </div>
                <div class="likes">Número de curtidas</div>
                <div class="title">Título ou legenda da postagem</div>
                <div class="hashtags">
                    <span>#hashtag1</span> <span>#hashtag2</span>
                </div>
            </div>
        `;
  })
  .catch((error) => console.error("Erro ao buscar dados do Instagram:", error));
