import { ThumbsUp, Trash } from "phosphor-react";
import styles from  "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/EvandroFBL.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorInfo}>
                            <strong>Evandro Lima</strong>
                            <time title="09 May 2022" dateTime="2022-06-09 09:09:34">1hr ago</time>
                        </div>

                        <button title="Delete commentary">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Very good, congratulations! 👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Cheer <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}