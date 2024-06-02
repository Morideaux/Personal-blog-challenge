function CreateBlogPost(username, blogTitle, blogContent) {
        this.username = username;
        this.Blog-title = blogTitle;
        this.Blog-content = blogContent;
    }

    //sets up blogPost capabilities
    BlogPost.prototype = {
        submition: function () {
            const data = new FormData(event.target);
            const formEntry = Object.formEntries(data.entries());

            const postedUser = data.get('username');
            const postedTitle = data.get('blog-title');
            const postedContent = data.get('blog-content');

            //should this be a seperate function
            var previousPosts = {value1: `${postedUser}`, value2: `${postedTitle}`, value3: `${postedContent}`}
            localStorage.setItem( previousPostsIndex, JSON.stringify(previousPosts))

            //does return need to be followed by somthing specific?
            return 
        },

        //intended to read localstorage JSON and save blog post array for displaying
        posted: function () {
            const blogPost = {}
                for(var i=0; i<localStorage.length; i++) {
                var previousPosts = localStorage.previousPosts( i );
                var blogPost = json.parse( localStorage.getItem(previousPosts));
            }
        },

        //needs to get post count seperate each post as obj. then give each a card in the html.
        renderBlogPost: function () {
            BlogPost.innerHTML = '';

            for (let i = 0; i < blogPost.length; i++) {
                const blogPost = blogPost[i];

                const li = document.createElement('li');
                li.textContent = blogPost
                li.setAttribute('uncertain////////', i);

            }
        },

        // not needed seems nice
        terminateBlogPost: function () {
            const button = document.getElementById('ive not set this up');
            button.addEventListener('click', function() {
                //remove from local storage json array and page
            }); 
        },


    }

    