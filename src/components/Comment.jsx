import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from  "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {
    const [cheerCount, setCheerCount] = useState(0);

    function handleDeleteAction() {
        onDeleteComment(content);
    }

    function handleCheerAction() {
        setCheerCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/EvandroFBL.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorInfo}>
                            <strong>Evandro Lima</strong>
                            <time title="09 May 2022" dateTime="2022-06-09 09:09:34">1hr ago</time>
                        </div>

                        <button onClick={handleDeleteAction} title="Delete commentary">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleCheerAction}>
                        <ThumbsUp size={20} />
                        Cheer <span>{cheerCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}