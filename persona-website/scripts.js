function submitVote() {
    const votes = document.getElementsByName('vote');
    let selectedVote;
    for (let vote of votes) {
        if (vote.checked) {
            selectedVote = vote.value;
            break;
        }
    }
    if (selectedVote) {
        document.getElementById('vote-result').textContent = `You voted for: ${selectedVote}`;
    } else {
        document.getElementById('vote-result').textContent = 'Please select an option before submitting.';
    }
}

function postComment() {
    const commentText = document.getElementById('comment').value;
    if (commentText) {
        const commentSection = document.getElementById('comment-section');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
}
