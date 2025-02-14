document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");

    // Função para buscar os posts da API
    async function fetchPosts() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await response.json();

            // Exibir apenas os primeiros 10 posts
            posts.slice(0, 10).forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                
                postElement.innerHTML = `
                    <img src="https://cdn-icons-png.flaticon.com/512/991/991947.png" alt="Lacinho vermelho">
                    <div class="post-content">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;

                postsContainer.appendChild(postElement);
            });
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
            postsContainer.innerHTML = "<p>Erro ao carregar os posts.</p>";
        }
    }

    fetchPosts();
});
