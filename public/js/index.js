function getRandomId() {
    return Math.floor(Math.random() * 100000000000);
}

document.querySelectorAll("li").forEach(li => {
    li.setAttribute("id", `${getRandomId()}`);
});

var postId = "";

document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", function (e) {
        postId = e.target.id;
    });
});

document.querySelector("#deletePost").addEventListener("click", function() {
    deletePost(postId);
});

function deletePost(postId) {
    if (postId) {
        document.getElementById(postId).remove();
    } else {
        console.log("No post was chosen");
    }
}

document.querySelector("#editPost").addEventListener("click", function() {
    editPost(postId);
});

function editPost(postId) {
    if (postId) {
        var original = document.getElementById(postId);
        var originalContent = original.innerHTML;

        var originalInput = document.createElement("input");
        originalInput.value = originalContent;

        original.parentNode.replaceChild(originalInput, original);

        document.querySelector("#done").addEventListener("click", function() {
            original.innerHTML = originalInput.value;
            originalInput.parentNode.replaceChild(original, originalInput);
        });
    } else {
        console.log("No post was chosen");
    }
}

