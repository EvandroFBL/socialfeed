import { format, formatDistanceToNow, set } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from  "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        "Very good!"
    ]);

    const [newComment, setNewComment] = useState("");

    // const publishedDateFormartedBr = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    //     locale: ptBR,
    // });
    // const publishedDateRelativeToNowBr = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

    const publishedDateFormated = format(publishedAt, "LLLL d 'at' HH:mm");
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true});

    function handleFormSubmit() {
        event.preventDefault();

        setComments([...comments, newComment]);
        setNewComment("");
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewComment(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Comment cannot be empty!");
    }

    function handleDeleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeleteOne);
    }

    const isCommentEmpty = newComment.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === "link") {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleFormSubmit} className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Write your feedback..."
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isCommentEmpty}>
                        Post
                    </button>
                </footer>
            </form>

            <div className={styles.postCommentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={handleDeleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}   