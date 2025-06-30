

// Twitter jaisa post banaya gaya hai (object format me)

    const post = {
        name: "Rahul",
        content: "Education",
        likes: 20,
        repost: 10,

        tags: {
            linkedin: "https://rahulrao.c.linkedin.om",
            x: "https://rahulrao.x.com",
            github: "https://rahulrao.github.com"
        }
    };

    // sabhi keys dega (array form me)
    console.log(Object.keys(post));

    // sabhi values dega
    console.log(Object.values(post));

    // key-value pairs dega as array of arrays
    console.log(Object.entries(post));

    // specific key exist karti hai ya nahi
    console.log(post.hasOwnProperty('content'));
