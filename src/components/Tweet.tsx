interface TweetProps {
    user: string
    content: string
    likes?: number
}

export function Tweet(props: TweetProps) {
    return (
       <div className="tweet">
        <strong>{props.user}</strong>
        <p>{props.content}</p>
        <button>Like {props.likes ?? 0}</button>
       </div>
    )
}