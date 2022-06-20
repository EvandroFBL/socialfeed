import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from  "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post({ author, content, publishedAt }) {
    // const publishedDateFormartedBr = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    //     locale: ptBR,
    // });
    // const publishedDateRelativeToNowBr = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});

    const publishedDateFormated = format(publishedAt, "LLLL d 'at' HH:mm");
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {addSuffix: true});

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
                        return <p>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea
                    placeholder="Write your feedback..."
                />
                <footer>
                    <button type="submit">Post</button>
                </footer>
            </form>

            <div className={styles.postCommentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}   