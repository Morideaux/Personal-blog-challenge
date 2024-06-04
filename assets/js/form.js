const submitForm = (event) => {
    event.preventDefault()
    const blogArray = JSON.parse(localStorage.getItem("blogArray")) || []
    const username = document.querySelector("#username").value
    const title = document.querySelector("#blog-title").value
    const blogContent = document.querySelector("#blog-content").value

    const newBlog = {
        username: username,
        title: title,
        content: blogContent,
    }
    blogArray.push(newBlog)
    localStorage.setItem("blogArray", JSON.stringify(blogArray))
    document.location.href = "blog.html"
}

const blogButton = document.querySelector("#post-btn")
blogButton.addEventListener("click", submitForm) 